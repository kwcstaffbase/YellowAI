window.ymConfig = {"bot":"x1765817669787","host":"https://r4.cloud.yellow.ai"};
(function() {
    var w = window,
        d = document;

    console.log("YellowAI script running");
    console.log("readyState:", d.readyState);

    var ic = w.YellowMessenger;
    if ("function" === typeof ic) {
        console.log("YellowMessenger already exists, reattaching");
        ic("reattach_activator");
        ic("update", ymConfig);
    } else {
        var i = function() {
            i.c(arguments);
        };
        function l() {
            console.log("l() called - injecting widget script");
            var e = d.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        }
        i.q = [];
        i.c = function(e) {
            i.q.push(e);
        };
        w.YellowMessenger = i;

        if (d.readyState === "complete") {
            console.log("Page already complete, calling l() now");
            l();
        } else {
            console.log("Page not complete, adding load listener");
            w.addEventListener("load", l, false);
        }
    }
})();
