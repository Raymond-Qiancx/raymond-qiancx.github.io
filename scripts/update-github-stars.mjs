import fs from "node:fs/promises";

const ABOUT_PATH = "_pages/about.md";
const DATA_PATH = "assets/data/github-stars.json";
const PUBLICATIONS_MARKER = "<span class='anchor' id='publications'></span>";
const CODE_LINK_PATTERN = /<a href="https:\/\/github\.com\/([^/"]+)\/([^/"]+)"[^>]*>\s*Code\s*<\/a>/g;

function extractRepos(markdown) {
  const publicationsStart = markdown.indexOf(PUBLICATIONS_MARKER);
  if (publicationsStart === -1) {
    return [];
  }

  const publicationsSection = markdown.slice(publicationsStart);
  const repos = new Set();

  for (const match of publicationsSection.matchAll(CODE_LINK_PATTERN)) {
    repos.add(`${match[1]}/${match[2]}`);
  }

  return [...repos].sort();
}

async function readPreviousData() {
  try {
    return JSON.parse(await fs.readFile(DATA_PATH, "utf8"));
  } catch (error) {
    return {};
  }
}

async function fetchStarCount(repoPath) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`${repoPath}: GitHub API returned ${response.status}`);
  }

  const repo = await response.json();
  return repo.stargazers_count;
}

async function main() {
  const markdown = await fs.readFile(ABOUT_PATH, "utf8");
  const repos = extractRepos(markdown);
  const previousData = await readPreviousData();
  const nextData = {};

  for (const repoPath of repos) {
    try {
      nextData[repoPath] = await fetchStarCount(repoPath);
      console.log(`Updated ${repoPath}: ${nextData[repoPath]}`);
    } catch (error) {
      if (Number.isInteger(previousData[repoPath])) {
        nextData[repoPath] = previousData[repoPath];
        console.warn(`${error.message}; keeping previous value ${previousData[repoPath]}`);
      } else {
        console.warn(`${error.message}; skipping repository`);
      }
    }
  }

  await fs.writeFile(DATA_PATH, `${JSON.stringify(nextData, null, 2)}\n`);
}

await main();
