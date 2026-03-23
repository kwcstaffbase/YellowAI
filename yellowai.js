(function () {
  var TARGET_PAGE_ID = "68935e6e225d347d8b165ba6";
  var ymLoaded = false;

  function isTargetPage() {
    return window.location.pathname.indexOf(TARGET_PAGE_ID) !== -1;
  }

  function hideWidget() {
    var container = document.getElementById("ymPluginDivContainerInitial");
    if (container) container.style.display = "none";
  }

  function showWidget() {
    var container = document.getElementById("ymPluginDivContainerInitial");
    if (container) container.style.display = "block";
  }

  function loadYellowAI() {
    if (ymLoaded) {
      showWidget();
      return;
    }
    ymLoaded = true;

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

  if (isTargetPage()) {
    loadYellowAI();
  }

  var lastPath = window.location.pathname;
  setInterval(function () {
    if (window.location.pathname !== lastPath) {
      lastPath = windo
