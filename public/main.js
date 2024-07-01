(() => {
    "use strict";
    var t = {};
    (t.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    })()),
        (() => {
            var r;
            t.g.importScripts && (r = t.g.location + "");
            var e = t.g.document;
            if (!r && e && (e.currentScript && (r = e.currentScript.src), !r)) {
                var c = e.getElementsByTagName("script");
                if (c.length)
                    for (
                        var o = c.length - 1;
                        o > -1 && (!r || !/^http(s?):/.test(r));

                    )
                        r = c[o--].src;
            }
            if (!r)
                throw new Error(
                    "Automatic publicPath is not supported in this browser",
                );
            (r = r
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (t.p = r);
        })(),
        (() => {
            const r = t.p + "a5ed441ac2c656716b9badc8e7d848b2.png";
            console.log("Check Equality", !1), console.log("placeholder", r);
        })();
})();
