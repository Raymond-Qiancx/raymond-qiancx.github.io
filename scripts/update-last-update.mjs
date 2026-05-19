import fs from "node:fs/promises";

const ABOUT_PATH = "_pages/about.md";
const TIME_ZONE = "America/New_York";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(date);
}

const about = await fs.readFile(ABOUT_PATH, "utf8");
const nextDate = formatDate(new Date());
const nextAbout = about.replace(
  /Last Update: [A-Z][a-z]+ \d{1,2}, \d{4}/,
  `Last Update: ${nextDate}`
);

if (nextAbout === about) {
  console.log("Last Update is already current.");
} else {
  await fs.writeFile(ABOUT_PATH, nextAbout);
  console.log(`Updated Last Update to ${nextDate}.`);
}
