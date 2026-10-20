// Renders News, Publications and Activities from assets/js/content.js.
// You should not need to edit this file; edit content.js instead.

(function () {
  var C = window.SITE;
  var ME = /Kexin Zhang(\*|†)*/g;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // ---------- News ----------
  var newsList = document.getElementById("news-list");
  var newsToggle = document.getElementById("news-toggle");
  C.news.forEach(function (n, i) {
    var li = document.createElement("li");
    if (i >= C.newsShown) li.hidden = true;
    li.innerHTML = '<span class="news-date">' + esc(n.date) + "</span><span>" + n.text + "</span>";
    newsList.appendChild(li);
  });
  if (C.news.length > C.newsShown) {
    newsToggle.hidden = false;
    newsToggle.addEventListener("click", function () {
      newsList.querySelectorAll("li[hidden]").forEach(function (li) { li.hidden = false; });
      newsToggle.hidden = true;
    });
  }

  // ---------- Publications ----------
  var LINK_ORDER = ["paper", "code", "project", "slides", "video", "poster"];
  var LABEL = { paper: "Paper", code: "Code", project: "Project", slides: "Slides", video: "Video", poster: "Poster" };

  function pubHTML(p) {
    var links = LINK_ORDER.filter(function (k) { return p.links && p.links[k]; })
      .map(function (k) { return '<a class="btn" href="' + esc(p.links[k]) + '">' + LABEL[k] + "</a>"; })
      .join("");
    var authors = esc(p.authors).replace(ME, function (m) { return '<span class="me">' + m + "</span>"; });
    return (
      '<div class="pub-venue">' + esc(p.venueShort) + "</div>" +
      "<div>" +
      '<div class="pub-title">' + esc(p.title) + "</div>" +
      '<div class="pub-authors">' + authors + "</div>" +
      '<div class="pub-meta">' + esc(p.venue) + "</div>" +
      (links ? '<div class="pub-links">' + links + "</div>" : "") +
      "</div>"
    );
  }

  var pubList = document.getElementById("pub-list");
  C.pubGroups.forEach(function (g) {
    var items = C.publications.filter(function (p) { return p.group === g.key; });
    if (!items.length) return;
    var h = document.createElement("div");
    h.className = "pub-group";
    h.textContent = g.title;
    pubList.appendChild(h);
    items.forEach(function (p) {
      var d = document.createElement("div");
      d.className = "pub";
      if (p.id) d.id = "pub-" + p.id;
      d.innerHTML = pubHTML(p);
      pubList.appendChild(d);
    });
  });

  // ---------- Professional activities ----------
  if (C.activities && C.activities.length) {
    var act = document.getElementById("activities");
    var list = document.getElementById("activity-list");
    C.activities.forEach(function (a) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="label">' + esc(a.role) + ":</span> " + a.items;
      list.appendChild(li);
    });
    act.hidden = false;
  } else {
    var navItem = document.querySelector('[data-section="activities"]');
    if (navItem) navItem.hidden = true;
  }

  // ---------- Footer ----------
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("updated").textContent = C.lastUpdated;
})();
