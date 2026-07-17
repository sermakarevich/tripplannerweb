// Portal links on the static site. Local dev auto-targets the portal on :3000;
// in prod set PROD_PORTAL_URL to https://<portal-domain>.
// (Empty prod value = links stay hidden.)
(function () {
  var PROD_PORTAL_URL = "";
  var isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  var url = isLocal ? "http://localhost:3000" : PROD_PORTAL_URL;
  if (!url) return;
  document.querySelectorAll("[data-portal-link]").forEach(function (a) {
    a.href = url + (a.getAttribute("data-portal-link") || "");
    a.hidden = false;
  });
})();
