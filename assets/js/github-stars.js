(function () {
  function getRepoPath(href) {
    try {
      var url = new URL(href, window.location.origin);
      if (url.hostname !== "github.com") {
        return null;
      }

      var parts = url.pathname.split("/").filter(Boolean);
      if (parts.length < 2) {
        return null;
      }

      return parts[0] + "/" + parts[1];
    } catch (error) {
      return null;
    }
  }

  function addBadges(stars) {
    document.querySelectorAll(".paper-box a").forEach(function (link) {
      if (link.textContent.trim() !== "Code") {
        return;
      }

      var repoPath = getRepoPath(link.href);
      var starCount = repoPath && stars[repoPath];
      if (!Number.isInteger(starCount)) {
        return;
      }

      var badge = document.createElement("span");
      badge.className = "github-star-badge";
      badge.setAttribute("aria-label", repoPath + " GitHub stars");
      badge.textContent = "\u2605 " + starCount;
      link.insertAdjacentElement("afterend", badge);
    });
  }

  fetch("/assets/data/github-stars.json", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load GitHub star data");
      }
      return response.json();
    })
    .then(addBadges)
    .catch(function () {
      // Keep the page usable when star data is missing or stale.
    });
})();
