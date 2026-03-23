window.ymConfig = {"bot":"x1765817669787","host":"https://r4.cloud.yellow.ai"};
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) {
        ic("reattach_activator");
        ic("update", ymConfig);
    } else {
        var d = document,
            i = function() {
                i.c(arguments);
            };
        function l() {
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

        // If the page already loaded, call l() immediately
        // Otherwise, wait for the load event
        if (d.readyState === "complete") {
            l();
        } else {
            w.addEventListener("load", l, false);
        }
    }
})();
