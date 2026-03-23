(function () {
  var TARGET_PAGE_ID = "68935e6e225d347d8b165ba6";
  var ymLoaded = false;

  function isTargetPage() {
    return window.location.pathname.indexOf(TARGET_PAGE_ID) !== -1;
  }

  function hideWidget() {
    var widget = document.getElementById("ymDivBar");
    if (widget) widget.style.display = "none";
    // Also hide the chat iframe if it exists
    var iframe = document.getElementById("ymIframe");
    if (iframe) iframe.style.display = "none";
  }

  function showWidget() {
    var widget = document.getElementById("ymDivBar");
    if (widget) widget.style.display = "";
    var iframe = document.getElementById("ymIframe");
    if (iframe) iframe.style.display = "";
  }

  function loadYellowAI() {
    if (ymLoaded) {
      showWidget();
      return;
    }
    ymLoaded = true;

    console.log("YellowAI: Loading widget on target page");

    window.ymConfig = {
      bot: "x1765817669787",
      host: "https://r4.cloud.yellow.ai",
    };

    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (e) {
      i.q.push(e);
    };
    window.YellowMessenger = i;

    var e = d.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
  }

  // Check on initial load
  if (isTargetPage()) {
    loadYellowAI();
  }

  // Watch for SPA navigation changes
  var lastPath = window.location.pathname;
  setInterval(function () {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      if (isTargetPage()) {
        loadYellowAI();
      } else {
        hideWidget();
      }
    }
  }, 500);
})();
