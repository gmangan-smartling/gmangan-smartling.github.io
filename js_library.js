(function(c, d) {
    try {
        var b = document.getElementsByTagName("head")[0]
          , a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.crossOrigin = "anonymous";
        a.src = "//d2c7xlmseob604.cloudfront.net/tracker.min.js";
        a.onload = function() {
            c.SmartlingContextTracker.init({
                orgId: d,
                overrideContextOlderThanDays: 30
            })
        }
        ;
        b.insertBefore(a, b.firstChild)
    } catch (e) {}
}
)(window, "gpLRIODQR0t8fDtI+CXtNQ");
