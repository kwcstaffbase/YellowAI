(function () {
  var TARGET_PAGE_ID = "68935e6e225d347d8b165ba5";
  var ymLoaded = false;

  function isTargetPage() {
    return window.location.pathname.indexOf(TARGET_PAGE_ID) !== -1;
  }

  function loadYellowAI() {
    if (ymLoaded) return;
    ymLoaded = true;

    window.ymConfig = {
      bot: "x1765817669787",
      host: "https://r4.cloud.yellow.ai",
    };

    var d = document;
    var e = d.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src =
      "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
  }

  // Check on initial load
  if (isTargetPage()) {
    loadYellowAI();
  }

  // Watch for SPA navigation changes
  // MutationObserver catches DOM changes that happen during SPA route transitions
  var observer = new MutationObserver(function () {
    if (isTargetPage() && !ymLoaded) {
      loadYellowAI();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
