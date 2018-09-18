/* Ephox TinyMCE Cloud
 *
 * Copyright 2010-2018 Ephox Corporation. All rights reserved.
 *
 * Version: 4.8.2-101
 */
// 4.8.2 (2018-08-09)
! function () {
    "use strict";
    var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        },
        q = function (n, r) {
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n(r.apply(null, arguments))
            }
        },
        H = function (e) {
            return function () {
                return e
            }
        },
        j = function (e) {
            return e
        },
        b = function (i) {
            for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
            for (var a = new Array(arguments.length - 1), n = 1; n < arguments.length; n++) a[n - 1] = arguments[n];
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                var o = a.concat(n);
                return i.apply(null, o)
            }
        },
        y = H(!1),
        C = H(!0),
        x = y,
        w = C,
        N = function () {
            return E
        },
        E = (r = {
            fold: function (e, t) {
                return e()
            },
            is: x,
            isSome: x,
            isNone: w,
            getOr: n = function (e) {
                return e
            },
            getOrThunk: t = function (e) {
                return e()
            },
            getOrDie: function (e) {
                throw new Error(e || "error: getOrDie called on none.")
            },
            getOrNull: function () {
                return null
            },
            getOrUndefined: function () {
                return undefined
            },
            or: n,
            orThunk: t,
            map: N,
            ap: N,
            each: function () {},
            bind: N,
            flatten: N,
            exists: x,
            forall: w,
            filter: N,
            equals: e = function (e) {
                return e.isNone()
            },
            equals_: e,
            toArray: function () {
                return []
            },
            toString: H("none()")
        }, Object.freeze && Object.freeze(r), r),
        S = function (n) {
            var e = function () {
                    return n
                },
                t = function () {
                    return o
                },
                r = function (e) {
                    return e(n)
                },
                o = {
                    fold: function (e, t) {
                        return t(n)
                    },
                    is: function (e) {
                        return n === e
                    },
                    isSome: w,
                    isNone: x,
                    getOr: e,
                    getOrThunk: e,
                    getOrDie: e,
                    getOrNull: e,
                    getOrUndefined: e,
                    or: t,
                    orThunk: t,
                    map: function (e) {
                        return S(e(n))
                    },
                    ap: function (e) {
                        return e.fold(N, function (e) {
                            return S(e(n))
                        })
                    },
                    each: function (e) {
                        e(n)
                    },
                    bind: r,
                    flatten: e,
                    exists: r,
                    forall: r,
                    filter: function (e) {
                        return e(n) ? o : E
                    },
                    equals: function (e) {
                        return e.is(n)
                    },
                    equals_: function (e, t) {
                        return e.fold(x, function (e) {
                            return t(n, e)
                        })
                    },
                    toArray: function () {
                        return [n]
                    },
                    toString: function () {
                        return "some(" + n + ")"
                    }
                };
            return o
        },
        A = {
            some: S,
            none: N,
            from: function (e) {
                return null === e || e === undefined ? E : S(e)
            }
        },
        T = function (t) {
            return function (e) {
                return function (e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t && Array.prototype.isPrototypeOf(e) ? "array" : "object" === t && String.prototype.isPrototypeOf(e) ? "string" : t
                }(e) === t
            }
        },
        k = T("string"),
        _ = T("object"),
        R = T("array"),
        D = T("null"),
        B = T("boolean"),
        O = T("function"),
        P = T("number"),
        L = (o = Array.prototype.indexOf) === undefined ? function (e, t) {
            return X(e, t)
        } : function (e, t) {
            return o.call(e, t)
        },
        I = function (e, t) {
            return -1 < L(e, t)
        },
        M = function (e, t) {
            return K(e, t).isSome()
        },
        $ = function (e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
                var i = e[o];
                r[o] = t(i, o, e)
            }
            return r
        },
        F = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e)
        },
        W = function (e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? n : r).push(a)
            }
            return {
                pass: n,
                fail: r
            }
        },
        U = function (e, t) {
            for (var n = [], r = 0, o = e.length; r < o; r++) {
                var i = e[r];
                t(i, r, e) && n.push(i)
            }
            return n
        },
        z = function (e, t, n) {
            return F(e, function (e) {
                n = t(n, e)
            }), n
        },
        V = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                var o = e[n];
                if (t(o, n, e)) return A.some(o)
            }
            return A.none()
        },
        K = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return A.some(n);
            return A.none()
        },
        X = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
            return -1
        },
        Y = Array.prototype.push,
        G = function (e, t) {
            return function (e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) {
                    if (!Array.prototype.isPrototypeOf(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                    Y.apply(t, e[n])
                }
                return t
            }($(e, t))
        },
        J = function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
            return !0
        },
        Q = Array.prototype.slice,
        Z = function (e, t) {
            return U(e, function (e) {
                return !I(t, e)
            })
        },
        ee = function (e) {
            return 0 === e.length ? A.none() : A.some(e[0])
        },
        te = function (e) {
            return 0 === e.length ? A.none() : A.some(e[e.length - 1])
        },
        ne = O(Array.from) ? Array.from : function (e) {
            return Q.call(e)
        },
        re = "undefined" != typeof window ? window : Function("return this;")(),
        oe = function (e, t) {
            return function (e, t) {
                for (var n = t !== undefined && null !== t ? t : re, r = 0; r < e.length && n !== undefined && null !== n; ++r) n = n[e[r]];
                return n
            }(e.split("."), t)
        },
        ie = {
            getOrDie: function (e, t) {
                var n = oe(e, t);
                if (n === undefined || null === n) throw e + " not available on this browser";
                return n
            }
        },
        ae = function () {
            return ie.getOrDie("URL")
        },
        ue = {
            createObjectURL: function (e) {
                return ae().createObjectURL(e)
            },
            revokeObjectURL: function (e) {
                ae().revokeObjectURL(e)
            }
        },
        se = navigator,
        ce = se.userAgent,
        le = function (e) {
            return "matchMedia" in window && matchMedia(e).matches
        };
    d = /Android/.test(ce), a = (a = !(i = /WebKit/.test(ce)) && /MSIE/gi.test(ce) && /Explorer/gi.test(se.appName)) && /MSIE (\w+)\./.exec(ce)[1], u = -1 !== ce.indexOf("Trident/") && (-1 !== ce.indexOf("rv:") || -1 !== se.appName.indexOf("Netscape")) && 11, s = -1 !== ce.indexOf("Edge/") && !a && !u && 12, a = a || u || s, c = !i && !u && /Gecko/.test(ce), l = -1 !== ce.indexOf("Mac"), f = /(iPad|iPhone)/.test(ce), m = "FormData" in window && "FileReader" in window && "URL" in window && !!ue.createObjectURL, g = le("only screen and (max-device-width: 480px)") && (d || f), p = le("only screen and (min-width: 800px)") && (d || f), h = -1 !== ce.indexOf("Windows Phone"), s && (i = !1);
    var fe, de, me, ge, pe, he, ve, be, ye, Ce, xe, we, Ne, Ee, Se, Te, ke, Ae, _e, Re = {
            opera: !1,
            webkit: i,
            ie: a,
            gecko: c,
            mac: l,
            iOS: f,
            android: d,
            contentEditable: !f || m || 534 <= parseInt(ce.match(/AppleWebKit\/(\d*)/)[1], 10),
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 !== a,
            range: window.getSelection && "Range" in window,
            documentMode: a && !s ? document.documentMode || 7 : 10,
            fileApi: m,
            ceFalse: !1 === a || 8 < a,
            cacheSuffix: null,
            container: null,
            overrideViewPort: null,
            experimentalShadowDom: !1,
            canHaveCSP: !1 === a || 11 < a,
            desktop: !g && !p,
            windowsPhone: h
        },
        De = window.Promise ? window.Promise : function () {
            function r(e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }
            var e = Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                i = function (e) {
                    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = null, this._value = null, this._deferreds = [], l(e, r(o, this), r(u, this))
                },
                t = i.immediateFn || "function" == typeof setImmediate && setImmediate || function (e) {
                    setTimeout(e, 1)
                };

            function a(r) {
                var o = this;
                null !== this._state ? t(function () {
                    var e = o._state ? r.onFulfilled : r.onRejected;
                    if (null !== e) {
                        var t;
                        try {
                            t = e(o._value)
                        } catch (n) {
                            return void r.reject(n)
                        }
                        r.resolve(t)
                    } else(o._state ? r.resolve : r.reject)(o._value)
                }) : this._deferreds.push(r)
            }

            function o(e) {
                try {
                    if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t = e.then;
                        if ("function" == typeof t) return void l(r(t, e), r(o, this), r(u, this))
                    }
                    this._state = !0, this._value = e, s.call(this)
                } catch (n) {
                    u.call(this, n)
                }
            }

            function u(e) {
                this._state = !1, this._value = e, s.call(this)
            }

            function s() {
                for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
                this._deferreds = null
            }

            function c(e, t, n, r) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
            }

            function l(e, t, n) {
                var r = !1;
                try {
                    e(function (e) {
                        r || (r = !0, t(e))
                    }, function (e) {
                        r || (r = !0, n(e))
                    })
                } catch (o) {
                    if (r) return;
                    r = !0, n(o)
                }
            }
            return i.prototype["catch"] = function (e) {
                return this.then(null, e)
            }, i.prototype.then = function (n, r) {
                var o = this;
                return new i(function (e, t) {
                    a.call(o, new c(n, r, e, t))
                })
            }, i.all = function () {
                var s = Array.prototype.slice.call(1 === arguments.length && e(arguments[0]) ? arguments[0] : arguments);
                return new i(function (o, i) {
                    if (0 === s.length) return o([]);
                    var a = s.length;

                    function u(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n) return void n.call(e, function (e) {
                                    u(t, e)
                                }, i)
                            }
                            s[t] = e, 0 == --a && o(s)
                        } catch (r) {
                            i(r)
                        }
                    }
                    for (var e = 0; e < s.length; e++) u(e, s[e])
                })
            }, i.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
                    e(t)
                })
            }, i.reject = function (n) {
                return new i(function (e, t) {
                    t(n)
                })
            }, i.race = function (o) {
                return new i(function (e, t) {
                    for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t)
                })
            }, i
        }(),
        Be = function (e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t)
        },
        Oe = function (e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t)
        },
        Pe = function (t, n) {
            var r, e;
            return (e = function () {
                var e = arguments;
                clearTimeout(r), r = Be(function () {
                    t.apply(this, e)
                }, n)
            }).stop = function () {
                clearTimeout(r)
            }, e
        },
        Le = {
            requestAnimationFrame: function (e, t) {
                fe ? fe.then(e) : fe = new De(function (e) {
                    t || (t = document.body),
                        function (e, t) {
                            var n, r = window.requestAnimationFrame,
                                o = ["ms", "moz", "webkit"];
                            for (n = 0; n < o.length && !r; n++) r = window[o[n] + "RequestAnimationFrame"];
                            r || (r = function (e) {
                                window.setTimeout(e, 0)
                            }), r(e, t)
                        }(e, t)
                }).then(e)
            },
            setTimeout: Be,
            setInterval: Oe,
            setEditorTimeout: function (e, t, n) {
                return Be(function () {
                    e.removed || t()
                }, n)
            },
            setEditorInterval: function (e, t, n) {
                var r;
                return r = Oe(function () {
                    e.removed ? clearInterval(r) : t()
                }, n)
            },
            debounce: Pe,
            throttle: Pe,
            clearInterval: function (e) {
                return clearInterval(e)
            },
            clearTimeout: function (e) {
                return clearTimeout(e)
            }
        },
        Ie = /^(?:mouse|contextmenu)|click/,
        Me = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1,
            webkitMovementX: 1,
            webkitMovementY: 1,
            keyIdentifier: 1
        },
        Fe = function () {
            return !1
        },
        Ue = function () {
            return !0
        },
        ze = function (e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        Ve = function (e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        },
        qe = function (e, t) {
            var n, r, o = t || {};
            for (n in e) Me[n] || (o[n] = e[n]);
            if (o.target || (o.target = o.srcElement || document), Re.experimentalShadowDom && (o.target = function (e, t) {
                    if (e.composedPath) {
                        var n = e.composedPath();
                        if (n && 0 < n.length) return n[0]
                    }
                    return t
                }(e, o.target)), e && Ie.test(e.type) && e.pageX === undefined && e.clientX !== undefined) {
                var i = o.target.ownerDocument || document,
                    a = i.documentElement,
                    u = i.body;
                o.pageX = e.clientX + (a && a.scrollLeft || u && u.scrollLeft || 0) - (a && a.clientLeft || u && u.clientLeft || 0), o.pageY = e.clientY + (a && a.scrollTop || u && u.scrollTop || 0) - (a && a.clientTop || u && u.clientTop || 0)
            }
            return o.preventDefault = function () {
                o.isDefaultPrevented = Ue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, o.stopPropagation = function () {
                o.isPropagationStopped = Ue, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, !(o.stopImmediatePropagation = function () {
                o.isImmediatePropagationStopped = Ue, o.stopPropagation()
            }) == ((r = o).isDefaultPrevented === Ue || r.isDefaultPrevented === Fe) && (o.isDefaultPrevented = Fe, o.isPropagationStopped = Fe, o.isImmediatePropagationStopped = Fe), "undefined" == typeof o.metaKey && (o.metaKey = !1), o
        },
        He = function (e, t, n) {
            var r = e.document,
                o = {
                    type: "ready"
                };
            if (n.domLoaded) t(o);
            else {
                var i = function () {
                        return "complete" === r.readyState || "interactive" === r.readyState && r.body
                    },
                    a = function () {
                        n.domLoaded || (n.domLoaded = !0, t(o))
                    },
                    u = function () {
                        i() && (Ve(r, "readystatechange", u), a())
                    },
                    s = function () {
                        try {
                            r.documentElement.doScroll("left")
                        } catch (e) {
                            return void Le.setTimeout(s)
                        }
                        a()
                    };
                !r.addEventListener || Re.ie && Re.ie < 11 ? (ze(r, "readystatechange", u), r.documentElement.doScroll && e.self === e.top && s()) : i() ? a() : ze(e, "DOMContentLoaded", a), ze(e, "load", a)
            }
        },
        je = function () {
            var m, g, p, h, v, b = this,
                y = {};
            g = "mce-data-" + (+new Date).toString(32), h = "onmouseenter" in document.documentElement, p = "onfocusin" in document.documentElement, v = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, m = 1, b.domLoaded = !1, b.events = y;
            var C = function (e, t) {
                var n, r, o, i, a = y[t];
                if (n = a && a[e.type])
                    for (r = 0, o = n.length; r < o; r++)
                        if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            };
            b.bind = function (e, t, n, r) {
                var o, i, a, u, s, c, l, f = window,
                    d = function (e) {
                        C(qe(e || f.event), o)
                    };
                if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                    for (e[g] ? o = e[g] : (o = m++, e[g] = o, y[o] = {}), r = r || e, a = (t = t.split(" ")).length; a--;) c = d, s = l = !1, "DOMContentLoaded" === (u = t[a]) && (u = "ready"), b.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, qe({
                        type: u
                    })) : (h || (s = v[u]) && (c = function (e) {
                        var t, n;
                        if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n);
                        else
                            for (; n && n !== t;) n = n.parentNode;
                        n || ((e = qe(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, C(e, o))
                    }), p || "focusin" !== u && "focusout" !== u || (l = !0, s = "focusin" === u ? "focus" : "blur", c = function (e) {
                        (e = qe(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", C(e, o)
                    }), (i = y[o][u]) ? "ready" === u && b.domLoaded ? n({
                        type: u
                    }) : i.push({
                        func: n,
                        scope: r
                    }) : (y[o][u] = i = [{
                        func: n,
                        scope: r
                    }], i.fakeName = s, i.capture = l, i.nativeHandler = c, "ready" === u ? He(e, c, b) : ze(e, s || u, c, l)));
                    return e = i = 0, n
                }
            }, b.unbind = function (e, t, n) {
                var r, o, i, a, u, s;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                if (r = e[g]) {
                    if (s = y[r], t) {
                        for (i = (t = t.split(" ")).length; i--;)
                            if (o = s[u = t[i]]) {
                                if (n)
                                    for (a = o.length; a--;)
                                        if (o[a].func === n) {
                                            var c = o.nativeHandler,
                                                l = o.fakeName,
                                                f = o.capture;
                                            (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = c, o.fakeName = l, o.capture = f, s[u] = o
                                        }
                                n && 0 !== o.length || (delete s[u], Ve(e, o.fakeName || u, o.nativeHandler, o.capture))
                            }
                    } else {
                        for (u in s) o = s[u], Ve(e, o.fakeName || u, o.nativeHandler, o.capture);
                        s = {}
                    }
                    for (u in s) return b;
                    delete y[r];
                    try {
                        delete e[g]
                    } catch (d) {
                        e[g] = null
                    }
                }
                return b
            }, b.fire = function (e, t, n) {
                var r;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                for ((n = qe(null, n)).type = t, n.target = e;
                    (r = e[g]) && C(n, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !n.isPropagationStopped(););
                return b
            }, b.clean = function (e) {
                var t, n, r = b.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return b;
                if (e[g] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                    for (r(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[g] && r(e);
                return b
            }, b.destroy = function () {
                y = {}
            }, b.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        };
    je.Event = new je, je.Event.bind(window, "ready", function () {});
    var $e = "sizzle" + -new Date,
        We = window.document,
        Ke = 0,
        Xe = 0,
        Ye = kt(),
        Ge = kt(),
        Je = kt(),
        Qe = function (e, t) {
            return e === t && (we = !0), 0
        },
        Ze = typeof undefined,
        et = {}.hasOwnProperty,
        tt = [],
        nt = tt.pop,
        rt = tt.push,
        ot = tt.push,
        it = tt.slice,
        at = tt.indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        ut = "[\\x20\\t\\r\\n\\f]",
        st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ct = "\\[" + ut + "*(" + st + ")(?:" + ut + "*([*^$|!~]?=)" + ut + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + ut + "*\\]",
        lt = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ct + ")*)|.*)\\)|)",
        ft = new RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"),
        dt = new RegExp("^" + ut + "*," + ut + "*"),
        mt = new RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"),
        gt = new RegExp("=" + ut + "*([^\\]'\"]*?)" + ut + "*\\]", "g"),
        pt = new RegExp(lt),
        ht = new RegExp("^" + st + "$"),
        vt = {
            ID: new RegExp("^#(" + st + ")"),
            CLASS: new RegExp("^\\.(" + st + ")"),
            TAG: new RegExp("^(" + st + "|[*])"),
            ATTR: new RegExp("^" + ct),
            PSEUDO: new RegExp("^" + lt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
            bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: new RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
        },
        bt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        Ct = /^[^{]+\{\s*\[native \w/,
        xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /[+~]/,
        Nt = /'|\\/g,
        Et = new RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"),
        St = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
    try {
        ot.apply(tt = it.call(We.childNodes), We.childNodes), tt[We.childNodes.length].nodeType
    } catch (Kw) {
        ot = {
            apply: tt.length ? function (e, t) {
                rt.apply(e, it.call(t))
            } : function (e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var Tt = function (e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : We) !== Ee && Ne(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || Ee).nodeType) && 9 !== u) return [];
        if (Te && !r) {
            if (o = xt.exec(e))
                if (a = o[1]) {
                    if (9 === u) {
                        if (!(i = t.getElementById(a)) || !i.parentNode) return n;
                        if (i.id === a) return n.push(i), n
                    } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && _e(t, i) && i.id === a) return n.push(i), n
                } else {
                    if (o[2]) return ot.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = o[3]) && me.getElementsByClassName) return ot.apply(n, t.getElementsByClassName(a)), n
                }
            if (me.qsa && (!ke || !ke.test(e))) {
                if (f = l = $e, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = ve(e), (l = t.getAttribute("id")) ? f = l.replace(Nt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Lt(c[s]);
                    d = wt.test(e) && Ot(t.parentNode) || t, m = c.join(",")
                }
                if (m) try {
                    return ot.apply(n, d.querySelectorAll(m)), n
                } catch (g) {} finally {
                    l || t.removeAttribute("id")
                }
            }
        }
        return ye(e.replace(ft, "$1"), t, n, r)
    };

    function kt() {
        var r = [];
        return function e(t, n) {
            return r.push(t + " ") > ge.cacheLength && delete e[r.shift()], e[t + " "] = n
        }
    }

    function At(e) {
        return e[$e] = !0, e
    }

    function _t(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function Rt(t) {
        return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function Dt(n) {
        return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }

    function Bt(a) {
        return At(function (i) {
            return i = +i, At(function (e, t) {
                for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function Ot(e) {
        return e && typeof e.getElementsByTagName !== Ze && e
    }
    for (de in me = Tt.support = {}, he = Tt.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, Ne = Tt.setDocument = function (e) {
            var t, s = e ? e.ownerDocument || e : We,
                n = s.defaultView;
            return s !== Ee && 9 === s.nodeType && s.documentElement ? (Se = (Ee = s).documentElement, Te = !he(s), n && n !== function (e) {
                try {
                    return e.top
                } catch (t) {}
                return null
            }(n) && (n.addEventListener ? n.addEventListener("unload", function () {
                Ne()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                Ne()
            })), me.attributes = !0, me.getElementsByTagName = !0, me.getElementsByClassName = Ct.test(s.getElementsByClassName), me.getById = !0, ge.find.ID = function (e, t) {
                if (typeof t.getElementById !== Ze && Te) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, ge.filter.ID = function (e) {
                var t = e.replace(Et, St);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, ge.find.TAG = me.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== Ze) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, ge.find.CLASS = me.getElementsByClassName && function (e, t) {
                if (Te) return t.getElementsByClassName(e)
            }, Ae = [], ke = [], me.disconnectedMatch = !0, ke = ke.length && new RegExp(ke.join("|")), Ae = Ae.length && new RegExp(Ae.join("|")), t = Ct.test(Se.compareDocumentPosition), _e = t || Ct.test(Se.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Qe = t ? function (e, t) {
                if (e === t) return we = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !me.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === We && _e(We, e) ? -1 : t === s || t.ownerDocument === We && _e(We, t) ? 1 : xe ? at.call(xe, e) - at.call(xe, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return we = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t];
                if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : xe ? at.call(xe, e) - at.call(xe, t) : 0;
                if (o === i) return _t(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? _t(a[r], u[r]) : a[r] === We ? -1 : u[r] === We ? 1 : 0
            }, s) : Ee
        }, Tt.matches = function (e, t) {
            return Tt(e, null, null, t)
        }, Tt.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== Ee && Ne(e), t = t.replace(gt, "='$1']"), me.matchesSelector && Te && (!Ae || !Ae.test(t)) && (!ke || !ke.test(t))) try {
                var n = (void 0).call(e, t);
                if (n || me.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (Kw) {}
            return 0 < Tt(t, Ee, null, [e]).length
        }, Tt.contains = function (e, t) {
            return (e.ownerDocument || e) !== Ee && Ne(e), _e(e, t)
        }, Tt.attr = function (e, t) {
            (e.ownerDocument || e) !== Ee && Ne(e);
            var n = ge.attrHandle[t.toLowerCase()],
                r = n && et.call(ge.attrHandle, t.toLowerCase()) ? n(e, t, !Te) : undefined;
            return r !== undefined ? r : me.attributes || !Te ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, Tt.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, Tt.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (we = !me.detectDuplicates, xe = !me.sortStable && e.slice(0), e.sort(Qe), we) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return xe = null, e
        }, pe = Tt.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += pe(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += pe(t);
            return n
        }, (ge = Tt.selectors = {
            cacheLength: 50,
            createPseudo: At,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Et, St), e[3] = (e[3] || e[4] || e[5] || "").replace(Et, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Tt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Tt.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return vt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = ve(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Et, St).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = Ye[e + " "];
                    return t || (t = new RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && Ye(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Ze && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, r, o) {
                    return function (e) {
                        var t = Tt.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function (m, e, t, g, p) {
                    var h = "nth" !== m.slice(0, 3),
                        v = "last" !== m.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === p ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, o, i, a, u, s, c = h !== v ? "nextSibling" : "previousSibling",
                            l = e.parentNode,
                            f = b && e.nodeName.toLowerCase(),
                            d = !n && !b;
                        if (l) {
                            if (h) {
                                for (; c;) {
                                    for (i = e; i = i[c];)
                                        if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                    s = c = "only" === m && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [v ? l.firstChild : l.lastChild], v && d) {
                                for (u = (r = (o = l[$e] || (l[$e] = {}))[m] || [])[0] === Ke && r[1], a = r[0] === Ke && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                    if (1 === i.nodeType && ++a && i === e) {
                                        o[m] = [Ke, u, a];
                                        break
                                    }
                            } else if (d && (r = (e[$e] || (e[$e] = {}))[m]) && r[0] === Ke) a = r[1];
                            else
                                for (;
                                    (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[$e] || (i[$e] = {}))[m] = [Ke, a]), i !== e)););
                            return (a -= p) === g || a % g == 0 && 0 <= a / g
                        }
                    }
                },
                PSEUDO: function (e, i) {
                    var t, a = ge.pseudos[e] || ge.setFilters[e.toLowerCase()] || Tt.error("unsupported pseudo: " + e);
                    return a[$e] ? a(i) : 1 < a.length ? (t = [e, e, "", i], ge.setFilters.hasOwnProperty(e.toLowerCase()) ? At(function (e, t) {
                        for (var n, r = a(e, i), o = r.length; o--;) e[n = at.call(e, r[o])] = !(t[n] = r[o])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: At(function (e) {
                    var r = [],
                        o = [],
                        u = be(e.replace(ft, "$1"));
                    return u[$e] ? At(function (e, t, n, r) {
                        for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, t, n) {
                        return r[0] = e, u(r, null, n, o), !o.pop()
                    }
                }),
                has: At(function (t) {
                    return function (e) {
                        return 0 < Tt(t, e).length
                    }
                }),
                contains: At(function (t) {
                    return t = t.replace(Et, St),
                        function (e) {
                            return -1 < (e.textContent || e.innerText || pe(e)).indexOf(t)
                        }
                }),
                lang: At(function (n) {
                    return ht.test(n || "") || Tt.error("unsupported lang: " + n), n = n.replace(Et, St).toLowerCase(),
                        function (e) {
                            var t;
                            do {
                                if (t = Te ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function (e) {
                    return e === Se
                },
                focus: function (e) {
                    return e === Ee.activeElement && (!Ee.hasFocus || Ee.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !ge.pseudos.empty(e)
                },
                header: function (e) {
                    return yt.test(e.nodeName)
                },
                input: function (e) {
                    return bt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: Bt(function () {
                    return [0]
                }),
                last: Bt(function (e, t) {
                    return [t - 1]
                }),
                eq: Bt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: Bt(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: Bt(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: Bt(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),
                gt: Bt(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = ge.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) ge.pseudos[de] = Rt(de);
    for (de in {
            submit: !0,
            reset: !0
        }) ge.pseudos[de] = Dt(de);

    function Pt() {}

    function Lt(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r
    }

    function It(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = Xe++;
        return e.first ? function (e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function (e, t, n) {
            var r, o, i = [Ke, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) {
                        if ((r = (o = e[$e] || (e[$e] = {}))[u]) && r[0] === Ke && r[1] === c) return i[2] = r[2];
                        if ((o[u] = i)[2] = a(e, t, n)) return !0
                    }
        }
    }

    function Mt(o) {
        return 1 < o.length ? function (e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function Ft(e, t, n, r, o) {
        for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
        return a
    }

    function Ut(m, g, p, h, v, e) {
        return h && !h[$e] && (h = Ut(h)), v && !v[$e] && (v = Ut(v, e)), At(function (e, t, n, r) {
            var o, i, a, u = [],
                s = [],
                c = t.length,
                l = e || function (e, t, n) {
                    for (var r = 0, o = t.length; r < o; r++) Tt(e, t[r], n);
                    return n
                }(g || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && g ? l : Ft(l, u, m, n, r),
                d = p ? v || (e ? m : c || h) ? [] : t : f;
            if (p && p(f, d, n, r), h)
                for (o = Ft(d, s), h(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
            if (e) {
                if (v || m) {
                    if (v) {
                        for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        v(null, d = [], o, r)
                    }
                    for (i = d.length; i--;)(a = d[i]) && -1 < (o = v ? at.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                }
            } else d = Ft(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : ot.apply(t, d)
        })
    }

    function zt(e) {
        for (var r, t, n, o = e.length, i = ge.relative[e[0].type], a = i || ge.relative[" "], u = i ? 1 : 0, s = It(function (e) {
                return e === r
            }, a, !0), c = It(function (e) {
                return -1 < at.call(r, e)
            }, a, !0), l = [function (e, t, n) {
                return !i && (n || t !== Ce) || ((r = t).nodeType ? s(e, t, n) : c(e, t, n))
            }]; u < o; u++)
            if (t = ge.relative[e[u].type]) l = [It(Mt(l), t)];
            else {
                if ((t = ge.filter[e[u].type].apply(null, e[u].matches))[$e]) {
                    for (n = ++u; n < o && !ge.relative[e[n].type]; n++);
                    return Ut(1 < u && Mt(l), 1 < u && Lt(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*" : ""
                    })).replace(ft, "$1"), t, u < n && zt(e.slice(u, n)), n < o && zt(e = e.slice(n)), n < o && Lt(e))
                }
                l.push(t)
            }
        return Mt(l)
    }
    Pt.prototype = ge.filters = ge.pseudos, ge.setFilters = new Pt, ve = Tt.tokenize = function (e, t) {
        var n, r, o, i, a, u, s, c = Ge[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = ge.preFilter; a;) {
            for (i in n && !(r = dt.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = mt.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(ft, " ")
                }), a = a.slice(n.length)), ge.filter) !(r = vt[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
                value: n,
                type: i,
                matches: r
            }), a = a.slice(n.length));
            if (!n) break
        }
        return t ? a.length : a ? Tt.error(e) : Ge(e, u).slice(0)
    }, be = Tt.compile = function (e, t) {
        var n, h, v, b, y, r, o = [],
            i = [],
            a = Je[e + " "];
        if (!a) {
            for (t || (t = ve(e)), n = t.length; n--;)(a = zt(t[n]))[$e] ? o.push(a) : i.push(a);
            (a = Je(e, (h = i, b = 0 < (v = o).length, y = 0 < h.length, r = function (e, t, n, r, o) {
                var i, a, u, s = 0,
                    c = "0",
                    l = e && [],
                    f = [],
                    d = Ce,
                    m = e || y && ge.find.TAG("*", o),
                    g = Ke += null == d ? 1 : Math.random() || .1,
                    p = m.length;
                for (o && (Ce = t !== Ee && t); c !== p && null != (i = m[c]); c++) {
                    if (y && i) {
                        for (a = 0; u = h[a++];)
                            if (u(i, t, n)) {
                                r.push(i);
                                break
                            }
                        o && (Ke = g)
                    }
                    b && ((i = !u && i) && s--, e && l.push(i))
                }
                if (s += c, b && c !== s) {
                    for (a = 0; u = v[a++];) u(l, f, t, n);
                    if (e) {
                        if (0 < s)
                            for (; c--;) l[c] || f[c] || (f[c] = nt.call(r));
                        f = Ft(f)
                    }
                    ot.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Tt.uniqueSort(r)
                }
                return o && (Ke = g, Ce = d), l
            }, b ? At(r) : r))).selector = e
        }
        return a
    }, ye = Tt.select = function (e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && ve(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && me.getById && 9 === t.nodeType && Te && ge.relative[i[1].type]) {
                if (!(t = (ge.find.ID(a.matches[0].replace(Et, St), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = vt.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !ge.relative[u = a.type]);)
                if ((s = ge.find[u]) && (r = s(a.matches[0].replace(Et, St), wt.test(i[0].type) && Ot(t.parentNode) || t))) {
                    if (i.splice(o, 1), !(e = r.length && Lt(i))) return ot.apply(n, r), n;
                    break
                }
        }
        return (c || be(e, l))(r, t, !Te, n, wt.test(e) && Ot(t.parentNode) || t), n
    }, me.sortStable = $e.split("").sort(Qe).join("") === $e, me.detectDuplicates = !!we, Ne(), me.sortDetached = !0;
    var Vt = Array.isArray,
        qt = function (e, t, n) {
            var r, o;
            if (!e) return 0;
            if (n = n || e, e.length !== undefined) {
                for (r = 0, o = e.length; r < o; r++)
                    if (!1 === t.call(n, e[r], r, e)) return 0
            } else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
            return 1
        },
        Ht = function (e, t, n) {
            var r, o;
            for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1
        },
        jt = {
            isArray: Vt,
            toArray: function (e) {
                var t, n, r = e;
                if (!Vt(e))
                    for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t];
                return r
            },
            each: qt,
            map: function (n, r) {
                var o = [];
                return qt(n, function (e, t) {
                    o.push(r(e, t, n))
                }), o
            },
            filter: function (n, r) {
                var o = [];
                return qt(n, function (e, t) {
                    r && !r(e, t, n) || o.push(e)
                }), o
            },
            indexOf: function (e, t) {
                var n, r;
                if (e)
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                return -1
            },
            reduce: function (e, t, n, r) {
                var o = 0;
                for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o);
                return n
            },
            findIndex: Ht,
            find: function (e, t, n) {
                var r = Ht(e, t, n);
                return -1 !== r ? e[r] : undefined
            },
            last: function (e) {
                return e[e.length - 1]
            }
        },
        $t = /^\s*|\s*$/g,
        Wt = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace($t, "")
        },
        Kt = function (e, t) {
            return t ? !("array" !== t || !jt.isArray(e)) || typeof e === t : e !== undefined
        },
        Xt = function (e, n, r, o) {
            o = o || this, e && (r && (e = e[r]), jt.each(e, function (e, t) {
                if (!1 === n.call(o, e, t, r)) return !1;
                Xt(e, n, r, o)
            }))
        },
        Yt = {
            trim: Wt,
            isArray: jt.isArray,
            is: Kt,
            toArray: jt.toArray,
            makeMap: function (e, t, n) {
                var r;
                for (t = t || ",", "string" == typeof (e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                return n
            },
            each: jt.each,
            map: jt.map,
            grep: jt.filter,
            inArray: jt.indexOf,
            hasOwn: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            extend: function (e, t) {
                for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
                var u, s = arguments;
                for (n = 1, r = s.length; n < r; n++)
                    for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u);
                return e
            },
            create: function (e, t, n) {
                var r, o, i, a, u, s = this,
                    c = 0;
                if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) {
                    if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function () {}, c = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = c ? function () {
                        return r[a].apply(this, arguments)
                    } : function () {
                        return this.parent = r[a], u.apply(this, arguments)
                    }, o[i].prototype[i] = o[i], s.each(r, function (e, t) {
                        o[i].prototype[t] = r[t]
                    }), s.each(t, function (e, t) {
                        r[t] ? o[i].prototype[t] = function () {
                            return this.parent = r[t], e.apply(this, arguments)
                        } : t !== i && (o[i].prototype[t] = e)
                    })), s.each(t["static"], function (e, t) {
                        o[i][t] = e
                    })
                }
            },
            walk: Xt,
            createNS: function (e, t) {
                var n, r;
                for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                return t
            },
            resolve: function (e, t) {
                var n, r;
                for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                return t
            },
            explode: function (e, t) {
                return !e || Kt(e, "array") ? e : jt.map(e.split(t || ","), Wt)
            },
            _addCacheSuffix: function (e) {
                var t = Re.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        },
        Gt = document,
        Jt = Array.prototype.push,
        Qt = Array.prototype.slice,
        Zt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        en = je.Event,
        tn = Yt.makeMap("children,contents,next,prev"),
        nn = function (e) {
            return void 0 !== e
        },
        rn = function (e) {
            return "string" == typeof e
        },
        on = function (e, t) {
            var n, r, o;
            for (o = (t = t || Gt).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r);
            return n
        },
        an = function (e, t, n, r) {
            var o;
            if (rn(t)) t = on(t, Cn(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = pn.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) an(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) an(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        un = function (e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        },
        sn = function (e, t, n) {
            var r, o;
            return t = pn(t)[0], e.each(function () {
                var e = this;
                n && r === e.parentNode || (r = e.parentNode, o = t.cloneNode(!1), e.parentNode.insertBefore(o, e)), o.appendChild(e)
            }), e
        },
        cn = Yt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        ln = Yt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        fn = {
            "for": "htmlFor",
            "class": "className",
            readonly: "readOnly"
        },
        dn = {
            "float": "cssFloat"
        },
        mn = {},
        gn = {},
        pn = function (e, t) {
            return new pn.fn.init(e, t)
        },
        hn = /^\s*|\s*$/g,
        vn = function (e) {
            return null === e || e === undefined ? "" : ("" + e).replace(hn, "")
        },
        bn = function (e, t) {
            var n, r, o, i;
            if (e)
                if ((n = e.length) === undefined) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
                } else
                    for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
            return e
        },
        yn = function (e, n) {
            var r = [];
            return bn(e, function (e, t) {
                n(t, e) && r.push(t)
            }), r
        },
        Cn = function (e) {
            return e ? 9 === e.nodeType ? e : e.ownerDocument : Gt
        };
    pn.fn = pn.prototype = {
        constructor: pn,
        selector: "",
        context: null,
        length: 0,
        init: function (e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return pn(e).attr(t);
                o.context = t = document
            }
            if (rn(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Zt.exec(e))) return pn(t).find(e);
                if (n[1])
                    for (r = on(e, Cn(t)).firstChild; r;) Jt.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = Cn(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function () {
            return Yt.toArray(this)
        },
        add: function (e, t) {
            var n, r, o = this;
            if (rn(e)) return o.add(pn(e));
            if (!1 !== t)
                for (n = pn.unique(o.toArray().concat(pn.makeArray(e))), o.length = n.length, r = 0; r < n.length; r++) o[r] = n[r];
            else Jt.apply(o, pn.makeArray(e));
            return o
        },
        attr: function (t, n) {
            var e, r = this;
            if ("object" == typeof t) bn(t, function (e, t) {
                r.attr(e, t)
            });
            else {
                if (!nn(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = mn[t]) && e.get) return e.get(r[0], t);
                        if (ln[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined)
                    }
                    return n
                }
                this.each(function () {
                    var e;
                    if (1 === this.nodeType) {
                        if ((e = mn[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2)
                    }
                })
            }
            return r
        },
        removeAttr: function (e) {
            return this.attr(e, null)
        },
        prop: function (e, t) {
            var n = this;
            if ("object" == typeof (e = fn[e] || e)) bn(e, function (e, t) {
                n.prop(e, t)
            });
            else {
                if (!nn(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function () {
                    1 === this.nodeType && (this[e] = t)
                })
            }
            return n
        },
        css: function (n, r) {
            var e, o, i = this,
                t = function (e) {
                    return e.replace(/-(\D)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                },
                a = function (e) {
                    return e.replace(/[A-Z]/g, function (e) {
                        return "-" + e
                    })
                };
            if ("object" == typeof n) bn(n, function (e, t) {
                i.css(e, t)
            });
            else if (nn(r)) n = t(n), "number" != typeof r || cn[n] || (r = r.toString() + "px"), i.each(function () {
                var e = this.style;
                if ((o = gn[n]) && o.set) o.set(this, r);
                else {
                    try {
                        this.style[dn[n] || n] = r
                    } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n))
                }
            });
            else {
                if (e = i[0], (o = gn[n]) && o.get) return o.get(e);
                if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";
                try {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n))
                } catch (u) {
                    return undefined
                }
            }
            return i
        },
        remove: function () {
            for (var e, t = this.length; t--;) e = this[t], en.clean(e), e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function () {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function (e) {
            var t, n = this;
            if (nn(e)) {
                t = n.length;
                try {
                    for (; t--;) n[t].innerHTML = e
                } catch (r) {
                    pn(n[t]).empty().append(e)
                }
                return n
            }
            return n[0] ? n[0].innerHTML : ""
        },
        text: function (e) {
            var t, n = this;
            if (nn(e)) {
                for (t = n.length; t--;) "innerText" in n[t] ? n[t].innerText = e : n[0].textContent = e;
                return n
            }
            return n[0] ? n[0].innerText || n[0].textContent : ""
        },
        append: function () {
            return an(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return an(this, arguments, function (e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function () {
            return this[0] && this[0].parentNode ? an(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this)
            }) : this
        },
        after: function () {
            return this[0] && this[0].parentNode ? an(this, arguments, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            }, !0) : this
        },
        appendTo: function (e) {
            return pn(e).append(this), this
        },
        prependTo: function (e) {
            return pn(e).prepend(this), this
        },
        replaceWith: function (e) {
            return this.before(e).remove()
        },
        wrap: function (e) {
            return sn(this, e)
        },
        wrapAll: function (e) {
            return sn(this, e, !0)
        },
        wrapInner: function (e) {
            return this.each(function () {
                pn(this).contents().wrapAll(e)
            }), this
        },
        unwrap: function () {
            return this.parent().each(function () {
                pn(this).replaceWith(this.childNodes)
            })
        },
        clone: function () {
            var e = [];
            return this.each(function () {
                e.push(this.cloneNode(!0))
            }), pn(e)
        },
        addClass: function (e) {
            return this.toggleClass(e, !0)
        },
        removeClass: function (e) {
            return this.toggleClass(e, !1)
        },
        toggleClass: function (o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? bn(o.split(" "), function () {
                e.toggleClass(this, i)
            }) : e.each(function (e, t) {
                var n, r;
                (r = un(t, o)) !== i && (n = t.className, r ? t.className = vn((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function (e) {
            return un(this[0], e)
        },
        each: function (e) {
            return bn(this, e)
        },
        on: function (e, t) {
            return this.each(function () {
                en.bind(this, e, t)
            })
        },
        off: function (e, t) {
            return this.each(function () {
                en.unbind(this, e, t)
            })
        },
        trigger: function (e) {
            return this.each(function () {
                "object" == typeof e ? en.fire(this, e.type, e) : en.fire(this, e)
            })
        },
        show: function () {
            return this.css("display", "")
        },
        hide: function () {
            return this.css("display", "none")
        },
        slice: function () {
            return new pn(Qt.apply(this, arguments))
        },
        eq: function (e) {
            return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        find: function (e) {
            var t, n, r = [];
            for (t = 0, n = this.length; t < n; t++) pn.find(e, this[t], r);
            return pn(r)
        },
        filter: function (n) {
            return pn("function" == typeof n ? yn(this.toArray(), function (e, t) {
                return n(t, e)
            }) : pn.filter(n, this.toArray()))
        },
        closest: function (n) {
            var r = [];
            return n instanceof pn && (n = n[0]), this.each(function (e, t) {
                for (; t;) {
                    if ("string" == typeof n && pn(t).is(n)) {
                        r.push(t);
                        break
                    }
                    if (t === n) {
                        r.push(t);
                        break
                    }
                    t = t.parentNode
                }
            }), pn(r)
        },
        offset: function (e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                left: i,
                top: a
            })
        },
        push: Jt,
        sort: [].sort,
        splice: [].splice
    }, Yt.extend(pn, {
        extend: Yt.extend,
        makeArray: function (e) {
            return (t = e) && t === t.window || e.nodeType ? [e] : Yt.toArray(e);
            var t
        },
        inArray: function (e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: Yt.isArray,
        each: bn,
        trim: vn,
        grep: yn,
        find: Tt,
        expr: Tt.selectors,
        unique: Tt.uniqueSort,
        text: Tt.getText,
        contains: Tt.contains,
        filter: function (e, t, n) {
            var r = t.length;
            for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1);
            return t = 1 === t.length ? pn.find.matchesSelector(t[0], e) ? [t[0]] : [] : pn.find.matches(e, t)
        }
    });
    var xn = function (e, t, n) {
            var r = [],
                o = e[t];
            for ("string" != typeof n && n instanceof pn && (n = n[0]); o && 9 !== o.nodeType;) {
                if (n !== undefined) {
                    if (o === n) break;
                    if ("string" == typeof n && pn(o).is(n)) break
                }
                1 === o.nodeType && r.push(o), o = o[t]
            }
            return r
        },
        wn = function (e, t, n, r) {
            var o = [];
            for (r instanceof pn && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) {
                    if (r !== undefined) {
                        if (e === r) break;
                        if ("string" == typeof r && pn(e).is(r)) break
                    }
                    o.push(e)
                }
            return o
        },
        Nn = function (e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType === n) return e;
            return null
        };
    bn({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return xn(e, "parentNode")
        },
        next: function (e) {
            return Nn(e, "nextSibling", 1)
        },
        prev: function (e) {
            return Nn(e, "previousSibling", 1)
        },
        children: function (e) {
            return wn(e.firstChild, "nextSibling", 1)
        },
        contents: function (e) {
            return Yt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
        }
    }, function (e, r) {
        pn.fn[e] = function (t) {
            var n = [];
            return this.each(function () {
                var e = r.call(n, this, t, n);
                e && (pn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (tn[e] || (n = pn.unique(n)), 0 === e.indexOf("parents") && (n = n.reverse())), n = pn(n), t ? n.filter(t) : n
        }
    }), bn({
        parentsUntil: function (e, t) {
            return xn(e, "parentNode", t)
        },
        nextUntil: function (e, t) {
            return wn(e, "nextSibling", 1, t).slice(1)
        },
        prevUntil: function (e, t) {
            return wn(e, "previousSibling", 1, t).slice(1)
        }
    }, function (r, o) {
        pn.fn[r] = function (t, e) {
            var n = [];
            return this.each(function () {
                var e = o.call(n, this, t, n);
                e && (pn.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = pn.unique(n), 0 !== r.indexOf("parents") && "prevUntil" !== r || (n = n.reverse())), n = pn(n), e ? n.filter(e) : n
        }
    }), pn.fn.is = function (e) {
        return !!e && 0 < this.filter(e).length
    }, pn.fn.init.prototype = pn.fn, pn.overrideDefaults = function (n) {
        var r, o = function (e, t) {
            return r = r || n(), 0 === arguments.length && (e = r.element), t || (t = r.context), new o.fn.init(e, t)
        };
        return pn.extend(o, this), o
    };
    var En = function (n, r, e) {
        bn(e, function (e, t) {
            n[e] = n[e] || {}, n[e][r] = t
        })
    };
    Re.ie && Re.ie < 8 && (En(mn, "get", {
        maxlength: function (e) {
            var t = e.maxLength;
            return 2147483647 === t ? undefined : t
        },
        size: function (e) {
            var t = e.size;
            return 20 === t ? undefined : t
        },
        "class": function (e) {
            return e.className
        },
        style: function (e) {
            var t = e.style.cssText;
            return 0 === t.length ? undefined : t
        }
    }), En(mn, "set", {
        "class": function (e, t) {
            e.className = t
        },
        style: function (e, t) {
            e.style.cssText = t
        }
    })), Re.ie && Re.ie < 9 && (dn["float"] = "styleFloat", En(gn, "set", {
        opacity: function (e, t) {
            var n = e.style;
            null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
        }
    })), pn.attrHooks = mn, pn.cssHooks = gn;
    var Sn = function (n) {
            var r, o = !1;
            return function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return o || (o = !0, r = n.apply(null, e)), r
            }
        },
        Tn = function (e, t) {
            var n = function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r.test(t)) return r
                }
                return undefined
            }(e, t);
            if (!n) return {
                major: 0,
                minor: 0
            };
            var r = function (e) {
                return Number(t.replace(n, "$" + e))
            };
            return An(r(1), r(2))
        },
        kn = function () {
            return An(0, 0)
        },
        An = function (e, t) {
            return {
                major: e,
                minor: t
            }
        },
        _n = {
            nu: An,
            detect: function (e, t) {
                var n = String(t).toLowerCase();
                return 0 === e.length ? kn() : Tn(e, n)
            },
            unknown: kn
        },
        Rn = "Firefox",
        Dn = function (e, t) {
            return function () {
                return t === e
            }
        },
        Bn = function (e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isEdge: Dn("Edge", t),
                isChrome: Dn("Chrome", t),
                isIE: Dn("IE", t),
                isOpera: Dn("Opera", t),
                isFirefox: Dn(Rn, t),
                isSafari: Dn("Safari", t)
            }
        },
        On = {
            unknown: function () {
                return Bn({
                    current: undefined,
                    version: _n.unknown()
                })
            },
            nu: Bn,
            edge: H("Edge"),
            chrome: H("Chrome"),
            ie: H("IE"),
            opera: H("Opera"),
            firefox: H(Rn),
            safari: H("Safari")
        },
        Pn = "Windows",
        Ln = "Android",
        In = "Solaris",
        Mn = "FreeBSD",
        Fn = function (e, t) {
            return function () {
                return t === e
            }
        },
        Un = function (e) {
            var t = e.current;
            return {
                current: t,
                version: e.version,
                isWindows: Fn(Pn, t),
                isiOS: Fn("iOS", t),
                isAndroid: Fn(Ln, t),
                isOSX: Fn("OSX", t),
                isLinux: Fn("Linux", t),
                isSolaris: Fn(In, t),
                isFreeBSD: Fn(Mn, t)
            }
        },
        zn = {
            unknown: function () {
                return Un({
                    current: undefined,
                    version: _n.unknown()
                })
            },
            nu: Un,
            windows: H(Pn),
            ios: H("iOS"),
            android: H(Ln),
            linux: H("Linux"),
            osx: H("OSX"),
            solaris: H(In),
            freebsd: H(Mn)
        },
        Vn = function (e, t) {
            var n = String(t).toLowerCase();
            return V(e, function (e) {
                return e.search(n)
            })
        },
        qn = function (e, n) {
            return Vn(e, n).map(function (e) {
                var t = _n.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        Hn = function (e, n) {
            return Vn(e, n).map(function (e) {
                var t = _n.detect(e.versionRegexes, n);
                return {
                    current: e.name,
                    version: t
                }
            })
        },
        jn = function (e, t) {
            return -1 !== e.indexOf(t)
        },
        $n = function (e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        Wn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Kn = function (t) {
            return function (e) {
                return jn(e, t)
            }
        },
        Xn = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function (e) {
                return jn(e, "edge/") && jn(e, "chrome") && jn(e, "safari") && jn(e, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Wn],
            search: function (e) {
                return jn(e, "chrome") && !jn(e, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function (e) {
                return jn(e, "msie") || jn(e, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [Wn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: Kn("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Kn("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Wn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function (e) {
                return (jn(e, "safari") || jn(e, "mobile/")) && jn(e, "applewebkit")
            }
        }],
        Yn = [{
            name: "Windows",
            search: Kn("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function (e) {
                return jn(e, "iphone") || jn(e, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: Kn("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: Kn("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: Kn("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: Kn("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: Kn("freebsd"),
            versionRegexes: []
        }],
        Gn = {
            browsers: H(Xn),
            oses: H(Yn)
        },
        Jn = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = Gn.browsers(),
                m = Gn.oses(),
                g = qn(d, e).fold(On.unknown, On.nu),
                p = Hn(m, e).fold(zn.unknown, zn.nu);
            return {
                browser: g,
                os: p,
                deviceType: (n = g, r = e, o = (t = p).isiOS() && !0 === /ipad/i.test(r), i = t.isiOS() && !o, a = t.isAndroid() && 3 === t.version.major, u = t.isAndroid() && 4 === t.version.major, s = o || a || u && !0 === /mobile/i.test(r), c = t.isiOS() || t.isAndroid(), l = c && !s, f = n.isSafari() && t.isiOS() && !1 === /safari/i.test(r), {
                    isiPad: H(o),
                    isiPhone: H(i),
                    isTablet: H(s),
                    isPhone: H(l),
                    isTouch: H(c),
                    isAndroid: t.isAndroid,
                    isiOS: t.isiOS,
                    isWebView: H(f)
                })
            }
        },
        Qn = {
            detect: Sn(function () {
                var e = navigator.userAgent;
                return Jn(e)
            })
        },
        Zn = function (e) {
            if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: H(e)
            }
        },
        er = {
            fromHtml: function (e, t) {
                var n = (t || document).createElement("div");
                if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), "HTML must have a single root node";
                return Zn(n.childNodes[0])
            },
            fromTag: function (e, t) {
                var n = (t || document).createElement(e);
                return Zn(n)
            },
            fromText: function (e, t) {
                var n = (t || document).createTextNode(e);
                return Zn(n)
            },
            fromDom: Zn,
            fromPoint: function (e, t, n) {
                var r = e.dom();
                return A.from(r.elementFromPoint(t, n)).map(Zn)
            }
        },
        tr = {
            ATTRIBUTE: Node.ATTRIBUTE_NODE,
            CDATA_SECTION: Node.CDATA_SECTION_NODE,
            COMMENT: Node.COMMENT_NODE,
            DOCUMENT: Node.DOCUMENT_NODE,
            DOCUMENT_TYPE: Node.DOCUMENT_TYPE_NODE,
            DOCUMENT_FRAGMENT: Node.DOCUMENT_FRAGMENT_NODE,
            ELEMENT: Node.ELEMENT_NODE,
            TEXT: Node.TEXT_NODE,
            PROCESSING_INSTRUCTION: Node.PROCESSING_INSTRUCTION_NODE,
            ENTITY_REFERENCE: Node.ENTITY_REFERENCE_NODE,
            ENTITY: Node.ENTITY_NODE,
            NOTATION: Node.NOTATION_NODE
        },
        nr = function (e) {
            return e.dom().nodeName.toLowerCase()
        },
        rr = function (e) {
            return e.dom().nodeType
        },
        or = function (t) {
            return function (e) {
                return rr(e) === t
            }
        },
        ir = or(tr.ELEMENT),
        ar = or(tr.TEXT),
        ur = or(tr.DOCUMENT),
        sr = {
            name: nr,
            type: rr,
            value: function (e) {
                return e.dom().nodeValue
            },
            isElement: ir,
            isText: ar,
            isDocument: ur,
            isComment: function (e) {
                return rr(e) === tr.COMMENT || "#comment" === nr(e)
            }
        },
        cr = Object.keys,
        lr = function (e, t) {
            for (var n = cr(e), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                t(e[i], i, e)
            }
        },
        fr = function (r, o) {
            var i = {};
            return lr(r, function (e, t) {
                var n = o(e, t, r);
                i[n.k] = n.v
            }), i
        },
        dr = function (e, t, n) {
            if (!(k(n) || B(n) || P(n))) throw console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        },
        mr = function (e, t, n) {
            dr(e.dom(), t, n)
        },
        gr = function (e, t) {
            var n = e.dom().getAttribute(t);
            return null === n ? undefined : n
        },
        pr = function (e, t) {
            var n = e.dom();
            return !(!n || !n.hasAttribute) && n.hasAttribute(t)
        },
        hr = {
            clone: function (e) {
                return z(e.dom().attributes, function (e, t) {
                    return e[t.name] = t.value, e
                }, {})
            },
            set: mr,
            setAll: function (e, t) {
                var n = e.dom();
                lr(t, function (e, t) {
                    dr(n, t, e)
                })
            },
            get: gr,
            has: pr,
            remove: function (e, t) {
                e.dom().removeAttribute(t)
            },
            hasNone: function (e) {
                var t = e.dom().attributes;
                return t === undefined || null === t || 0 === t.length
            },
            transfer: function (o, i, e) {
                sr.isElement(o) && sr.isElement(i) && F(e, function (e) {
                    var t, n, r;
                    n = i, pr(t = o, r = e) && !pr(n, r) && mr(n, r, gr(t, r))
                })
            }
        },
        vr = Sn(function () {
            return br(er.fromDom(document))
        }),
        br = function (e) {
            var t = e.dom().body;
            if (null === t || t === undefined) throw "Body is not available yet";
            return er.fromDom(t)
        },
        yr = {
            body: vr,
            getBody: br,
            inBody: function (e) {
                var t = sr.isText(e) ? e.dom().parentNode : e.dom();
                return t !== undefined && null !== t && t.ownerDocument.body.contains(t)
            }
        },
        Cr = function (e) {
            return e.style !== undefined
        },
        xr = function (e, t, n) {
            if (!k(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
            Cr(e) && e.style.setProperty(t, n)
        },
        wr = function (e, t) {
            return Cr(e) ? e.style.getPropertyValue(t) : ""
        },
        Nr = function (e, t) {
            var n = e.dom(),
                r = wr(n, t);
            return A.from(r).filter(function (e) {
                return 0 < e.length
            })
        },
        Er = function (e, t) {
            var n = e.dom();
            lr(t, function (e, t) {
                xr(n, t, e)
            })
        },
        Sr = function (e, t) {
            var n = e.dom(),
                r = window.getComputedStyle(n).getPropertyValue(t),
                o = "" !== r || yr.inBody(e) ? r : wr(n, t);
            return null === o ? undefined : o
        },
        Tr = Nr,
        kr = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function () {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments");
                var r = {};
                return F(t, function (e, t) {
                    r[e] = H(n[t])
                }), r
            }
        },
        Ar = function (e, t) {
            for (var n = [], r = function (e) {
                    return n.push(e), t(e)
                }, o = t(e);
                (o = o.bind(r)).isSome(););
            return n
        },
        _r = function () {
            return ie.getOrDie("Node")
        },
        Rr = function (e, t, n) {
            return 0 != (e.compareDocumentPosition(t) & n)
        },
        Dr = function (e, t) {
            return Rr(e, t, _r().DOCUMENT_POSITION_CONTAINED_BY)
        },
        Br = tr.ELEMENT,
        Or = tr.DOCUMENT,
        Pr = function (e) {
            return e.nodeType !== Br && e.nodeType !== Or || 0 === e.childElementCount
        },
        Lr = {
            all: function (e, t) {
                var n = t === undefined ? document : t.dom();
                return Pr(n) ? [] : $(n.querySelectorAll(e), er.fromDom)
            },
            is: function (e, t) {
                var n = e.dom();
                if (n.nodeType !== Br) return !1;
                if (n.matches !== undefined) return n.matches(t);
                if (n.msMatchesSelector !== undefined) return n.msMatchesSelector(t);
                if (n.webkitMatchesSelector !== undefined) return n.webkitMatchesSelector(t);
                if (n.mozMatchesSelector !== undefined) return n.mozMatchesSelector(t);
                throw new Error("Browser lacks native selectors")
            },
            one: function (e, t) {
                var n = t === undefined ? document : t.dom();
                return Pr(n) ? A.none() : A.from(n.querySelector(e)).map(er.fromDom)
            }
        },
        Ir = function (e, t) {
            return e.dom() === t.dom()
        },
        Mr = Qn.detect().browser.isIE() ? function (e, t) {
            return Dr(e.dom(), t.dom())
        } : function (e, t) {
            var n = e.dom(),
                r = t.dom();
            return n !== r && n.contains(r)
        },
        Fr = {
            eq: Ir,
            isEqualNode: function (e, t) {
                return e.dom().isEqualNode(t.dom())
            },
            member: function (e, t) {
                return M(t, b(Ir, e))
            },
            contains: Mr,
            is: Lr.is
        },
        Ur = function (e) {
            var t = e.dom();
            return A.from(t.parentNode).map(er.fromDom)
        },
        zr = function (e) {
            var t = e.dom();
            return A.from(t.previousSibling).map(er.fromDom)
        },
        Vr = function (e) {
            var t = e.dom();
            return A.from(t.nextSibling).map(er.fromDom)
        },
        qr = function (e) {
            var t = e.dom();
            return $(t.childNodes, er.fromDom)
        },
        Hr = function (e, t) {
            var n = e.dom().childNodes;
            return A.from(n[t]).map(er.fromDom)
        },
        jr = kr("element", "offset"),
        $r = {
            owner: function (e) {
                return er.fromDom(e.dom().ownerDocument)
            },
            defaultView: function (e) {
                var t = e.dom().ownerDocument.defaultView;
                return er.fromDom(t)
            },
            documentElement: function (e) {
                return er.fromDom(e.dom().ownerDocument.documentElement)
            },
            parent: Ur,
            findIndex: function (n) {
                return Ur(n).bind(function (e) {
                    var t = qr(e);
                    return K(t, function (e) {
                        return Fr.eq(n, e)
                    })
                })
            },
            parents: function (e, t) {
                for (var n = O(t) ? t : H(!1), r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) {
                    var i = r.parentNode,
                        a = er.fromDom(i);
                    if (o.push(a), !0 === n(a)) break;
                    r = i
                }
                return o
            },
            siblings: function (t) {
                return Ur(t).map(qr).map(function (e) {
                    return U(e, function (e) {
                        return !Fr.eq(t, e)
                    })
                }).getOr([])
            },
            prevSibling: zr,
            offsetParent: function (e) {
                var t = e.dom();
                return A.from(t.offsetParent).map(er.fromDom)
            },
            prevSiblings: function (e) {
                return t = Ar(e, zr), (n = Q.call(t, 0)).reverse(), n;
                var t, n
            },
            nextSibling: Vr,
            nextSiblings: function (e) {
                return Ar(e, Vr)
            },
            children: qr,
            child: Hr,
            firstChild: function (e) {
                return Hr(e, 0)
            },
            lastChild: function (e) {
                return Hr(e, e.dom().childNodes.length - 1)
            },
            childNodesCount: function (e) {
                return e.dom().childNodes.length
            },
            hasChildNodes: function (e) {
                return e.dom().hasChildNodes()
            },
            leaf: function (e, t) {
                var n = qr(e);
                return 0 < n.length && t < n.length ? jr(n[t], 0) : jr(e, t)
            }
        },
        Wr = Qn.detect().browser,
        Kr = function (e) {
            return V(e, sr.isElement)
        },
        Xr = {
            getPos: function (e, t, n) {
                var r, o, i, a = 0,
                    u = 0,
                    s = e.ownerDocument;
                if (n = n || e, t) {
                    if (n === e && t.getBoundingClientRect && "static" === Sr(er.fromDom(e), "position")) return {
                        x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
                        y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
                    };
                    for (r = t; r && r !== n && r.nodeType;) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r !== n && r.nodeType;) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                    u += (i = er.fromDom(t), Wr.isFirefox() && "table" === sr.name(i) ? Kr($r.children(i)).filter(function (e) {
                        return "caption" === sr.name(e)
                    }).bind(function (o) {
                        return Kr($r.nextSiblings(o)).map(function (e) {
                            var t = e.dom().offsetTop,
                                n = o.dom().offsetTop,
                                r = o.dom().offsetHeight;
                            return t <= n ? -r : 0
                        })
                    }).getOr(0) : 0)
                }
                return {
                    x: a,
                    y: u
                }
            }
        },
        Yr = function (e) {
            var n = A.none(),
                t = [],
                r = function (e) {
                    o() ? a(e) : t.push(e)
                },
                o = function () {
                    return n.isSome()
                },
                i = function (e) {
                    F(e, a)
                },
                a = function (t) {
                    n.each(function (e) {
                        setTimeout(function () {
                            t(e)
                        }, 0)
                    })
                };
            return e(function (e) {
                n = A.some(e), i(t), t = []
            }), {
                get: r,
                map: function (n) {
                    return Yr(function (t) {
                        r(function (e) {
                            t(n(e))
                        })
                    })
                },
                isReady: o
            }
        },
        Gr = {
            nu: Yr,
            pure: function (t) {
                return Yr(function (e) {
                    e(t)
                })
            }
        },
        Jr = function (t) {
            var e = function (e) {
                var r;
                t((r = e, function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this;
                    setTimeout(function () {
                        r.apply(n, e)
                    }, 0)
                }))
            };
            return {
                map: function (r) {
                    return Jr(function (n) {
                        e(function (e) {
                            var t = r(e);
                            n(t)
                        })
                    })
                },
                bind: function (n) {
                    return Jr(function (t) {
                        e(function (e) {
                            n(e).get(t)
                        })
                    })
                },
                anonBind: function (n) {
                    return Jr(function (t) {
                        e(function (e) {
                            n.get(t)
                        })
                    })
                },
                toLazy: function () {
                    return Gr.nu(e)
                },
                get: e
            }
        },
        Qr = {
            nu: Jr,
            pure: function (t) {
                return Jr(function (e) {
                    e(t)
                })
            }
        },
        Zr = function (a, e) {
            return e(function (r) {
                var o = [],
                    i = 0;
                0 === a.length ? r([]) : F(a, function (e, t) {
                    var n;
                    e.get((n = t, function (e) {
                        o[n] = e, ++i >= a.length && r(o)
                    }))
                })
            })
        },
        eo = function (e) {
            return Zr(e, Qr.nu)
        },
        to = function (n) {
            return {
                is: function (e) {
                    return n === e
                },
                isValue: C,
                isError: y,
                getOr: H(n),
                getOrThunk: H(n),
                getOrDie: H(n),
                or: function (e) {
                    return to(n)
                },
                orThunk: function (e) {
                    return to(n)
                },
                fold: function (e, t) {
                    return t(n)
                },
                map: function (e) {
                    return to(e(n))
                },
                each: function (e) {
                    e(n)
                },
                bind: function (e) {
                    return e(n)
                },
                exists: function (e) {
                    return e(n)
                },
                forall: function (e) {
                    return e(n)
                },
                toOption: function () {
                    return A.some(n)
                }
            }
        },
        no = function (n) {
            return {
                is: y,
                isValue: y,
                isError: C,
                getOr: j,
                getOrThunk: function (e) {
                    return e()
                },
                getOrDie: function () {
                    return e = String(n),
                        function () {
                            throw new Error(e)
                        }();
                    var e
                },
                or: function (e) {
                    return e
                },
                orThunk: function (e) {
                    return e()
                },
                fold: function (e, t) {
                    return e(n)
                },
                map: function (e) {
                    return no(n)
                },
                each: v,
                bind: function (e) {
                    return no(n)
                },
                exists: y,
                forall: C,
                toOption: A.none
            }
        },
        ro = {
            value: to,
            error: no
        };

    function oo(e, u) {
        var t = e,
            n = function (e, t, n, r) {
                var o, i;
                if (e) {
                    if (!r && e[t]) return e[t];
                    if (e !== u) {
                        if (o = e[n]) return o;
                        for (i = e.parentNode; i && i !== u; i = i.parentNode)
                            if (o = i[n]) return o
                    }
                }
            };
        this.current = function () {
            return t
        }, this.next = function (e) {
            return t = n(t, "firstChild", "nextSibling", e)
        }, this.prev = function (e) {
            return t = n(t, "lastChild", "previousSibling", e)
        }, this.prev2 = function (e) {
            return t = function (e, t, n, r) {
                var o, i, a;
                if (e) {
                    if (o = e[n], u && o === u) return;
                    if (o) {
                        if (!r)
                            for (a = o[t]; a; a = a[t])
                                if (!a[t]) return a;
                        return o
                    }
                    if ((i = e.parentNode) && i !== u) return i
                }
            }(t, "lastChild", "previousSibling", e)
        }
    }
    var io, ao, uo, so = function (t) {
            var n;
            return function (e) {
                return (n = n || function (e, t) {
                    for (var n = {}, r = 0, o = e.length; r < o; r++) {
                        var i = e[r];
                        n[String(i)] = t(i, r)
                    }
                    return n
                }(t, H(!0))).hasOwnProperty(sr.name(e))
            }
        },
        co = so(["h1", "h2", "h3", "h4", "h5", "h6"]),
        lo = so(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        fo = function (e) {
            return sr.isElement(e) && !lo(e)
        },
        mo = function (e) {
            return sr.isElement(e) && "br" === sr.name(e)
        },
        go = so(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        po = so(["ul", "ol", "dl"]),
        ho = so(["li", "dd", "dt"]),
        vo = so(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        bo = so(["thead", "tbody", "tfoot"]),
        yo = so(["td", "th"]),
        Co = so(["pre", "script", "textarea", "style"]),
        xo = function (t) {
            return function (e) {
                return !!e && e.nodeType === t
            }
        },
        wo = xo(1),
        No = function (e) {
            var r = e.toLowerCase().split(" ");
            return function (e) {
                var t, n;
                if (e && e.nodeType)
                    for (n = e.nodeName.toLowerCase(), t = 0; t < r.length; t++)
                        if (n === r[t]) return !0;
                return !1
            }
        },
        Eo = function (t) {
            return function (e) {
                if (wo(e)) {
                    if (e.contentEditable === t) return !0;
                    if (e.getAttribute("data-mce-contenteditable") === t) return !0
                }
                return !1
            }
        },
        So = xo(3),
        To = xo(8),
        ko = xo(9),
        Ao = No("br"),
        _o = Eo("true"),
        Ro = Eo("false"),
        Do = {
            isText: So,
            isElement: wo,
            isComment: To,
            isDocument: ko,
            isBr: Ao,
            isContentEditableTrue: _o,
            isContentEditableFalse: Ro,
            matchNodeNames: No,
            hasPropValue: function (t, n) {
                return function (e) {
                    return wo(e) && e[t] === n
                }
            },
            hasAttribute: function (t, e) {
                return function (e) {
                    return wo(e) && e.hasAttribute(t)
                }
            },
            hasAttributeValue: function (t, n) {
                return function (e) {
                    return wo(e) && e.getAttribute(t) === n
                }
            },
            matchStyleValues: function (r, e) {
                var o = e.toLowerCase().split(" ");
                return function (e) {
                    var t;
                    if (wo(e))
                        for (t = 0; t < o.length; t++) {
                            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                            if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0
                        }
                    return !1
                }
            },
            isBogus: function (e) {
                return wo(e) && e.hasAttribute("data-mce-bogus")
            },
            isBogusAll: function (e) {
                return wo(e) && "all" === e.getAttribute("data-mce-bogus")
            },
            isTable: function (e) {
                return wo(e) && "TABLE" === e.tagName
            }
        },
        Bo = function (e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        Oo = function (e, t) {
            var n, r = t.childNodes;
            if (!Do.isElement(t) || !Bo(t)) {
                for (n = r.length - 1; 0 <= n; n--) Oo(e, r[n]);
                if (!1 === Do.isDocument(t)) {
                    if (Do.isText(t) && 0 < t.nodeValue.length) {
                        var o = Yt.trim(t.nodeValue).length;
                        if (e.isBlock(t.parentNode) || 0 < o) return;
                        if (0 === o && (a = (i = t).previousSibling && "SPAN" === i.previousSibling.nodeName, u = i.nextSibling && "SPAN" === i.nextSibling.nodeName, a && u)) return
                    } else if (Do.isElement(t) && (1 === (r = t.childNodes).length && Bo(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || vo(er.fromDom(t)))) return;
                    e.remove(t)
                }
                var i, a, u;
                return t
            }
        },
        Po = {
            trimNode: Oo
        },
        Lo = Yt.makeMap,
        Io = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Mo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Fo = /[<>&\"\']/g,
        Uo = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        zo = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
    ao = {
        '"': "&quot;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "`": "&#96;"
    }, uo = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
    };
    var Vo = function (e, t) {
        var n, r, o, i = {};
        if (e) {
            for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), ao[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
            return i
        }
    };
    io = Vo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
    var qo = function (e, t) {
            return e.replace(t ? Io : Mo, function (e) {
                return ao[e] || e
            })
        },
        Ho = function (e, t) {
            return e.replace(t ? Io : Mo, function (e) {
                return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ao[e] || "&#" + e.charCodeAt(0) + ";"
            })
        },
        jo = function (e, t, n) {
            return n = n || io, e.replace(t ? Io : Mo, function (e) {
                return ao[e] || n[e] || e
            })
        },
        $o = {
            encodeRaw: qo,
            encodeAllRaw: function (e) {
                return ("" + e).replace(Fo, function (e) {
                    return ao[e] || e
                })
            },
            encodeNumeric: Ho,
            encodeNamed: jo,
            getEncodeFunc: function (e, t) {
                var n = Vo(t) || io,
                    r = Lo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function (e, t) {
                    return e.replace(t ? Io : Mo, function (e) {
                        return ao[e] !== undefined ? ao[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                    })
                } : r.named ? t ? function (e, t) {
                    return jo(e, t, n)
                } : jo : r.numeric ? Ho : qo
            },
            decode: function (e) {
                return e.replace(Uo, function (e, t) {
                    return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : zo[t] || String.fromCharCode(t) : uo[e] || io[e] || (n = e, (r = er.fromTag("div").dom()).innerHTML = n, r.textContent || r.innerText || n);
                    var n, r
                })
            }
        },
        Wo = {},
        Ko = {},
        Xo = Yt.makeMap,
        Yo = Yt.each,
        Go = Yt.extend,
        Jo = Yt.explode,
        Qo = Yt.inArray,
        Zo = function (e, t) {
            return (e = Yt.trim(e)) ? e.split(t || " ") : []
        },
        ei = function (e) {
            var u, t, n, r, o, i, s = {},
                a = function (e, t, n) {
                    var r, o, i, a = function (e, t) {
                        var n, r, o = {};
                        for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {};
                        return o
                    };
                    for (t = t || "", "string" == typeof (n = n || []) && (n = Zo(n)), r = (e = Zo(e)).length; r--;) i = {
                        attributes: a(o = Zo([u, t].join(" "))),
                        attributesOrder: o,
                        children: a(n, Ko)
                    }, s[e[r]] = i
                },
                c = function (e, t) {
                    var n, r, o, i;
                    for (n = (e = Zo(e)).length, t = Zo(t); n--;)
                        for (r = s[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o])
                };
            return Wo[e] ? Wo[e] : (u = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), Yo(Zo(i), function (e) {
                a(e, "", n)
            }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), Yo(Zo(o), function (e) {
                a(e, "", r)
            })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (c("script", "language xml:space"), c("style", "xml:space"), c("object", "declare classid code codebase codetype archive standby align border hspace vspace"), c("embed", "align name hspace vspace"), c("param", "valuetype type"), c("a", "charset name rev shape coords"), c("br", "clear"), c("applet", "codebase archive code object alt name width height align hspace vspace"), c("img", "name longdesc align border hspace vspace"), c("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), c("font basefont", "size color face"), c("input", "usemap align"), c("select", "onchange"), c("textarea"), c("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), c("ul", "type compact"), c("li", "type"), c("ol dl menu dir", "compact"), c("pre", "width xml:space"), c("hr", "align noshade size width"), c("isindex", "prompt"), c("table", "summary width frame rules cellspacing cellpadding align bgcolor"), c("col", "width align char charoff valign"), c("colgroup", "width align char charoff valign"), c("thead", "align char charoff valign"), c("tr", "align char charoff valign bgcolor"), c("th", "axis align char charoff valign nowrap bgcolor width height"), c("form", "accept"), c("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), c("tfoot", "align char charoff valign"), c("tbody", "align char charoff valign"), c("area", "nohref"), c("body", "background bgcolor text link vlink alink")), "html4" !== e && (c("input button select textarea", "autofocus"), c("input textarea", "placeholder"), c("a", "download"), c("link script img", "crossorigin"), c("iframe", "sandbox seamless allowfullscreen")), Yo(Zo("a form meter progress dfn"), function (e) {
                s[e] && delete s[e].children[e]
            }), delete s.caption.children.table, delete s.script, Wo[e] = s)
        },
        ti = function (e, n) {
            var r;
            return e && (r = {}, "string" == typeof e && (e = {
                "*": e
            }), Yo(e, function (e, t) {
                r[t] = r[t.toUpperCase()] = "map" === n ? Xo(e, /[, ]/) : Jo(e, /[, ]/)
            })), r
        };

    function ni(i) {
        var e, t, n, r, o, a, u, s, c, l, f, d, m, N = {},
            g = {},
            E = [],
            p = {},
            h = {},
            v = function (e, t, n) {
                var r = i[e];
                return r ? r = Xo(r, /[, ]/, Xo(r.toUpperCase(), /[, ]/)) : (r = Wo[e]) || (r = Xo(t, " ", Xo(t.toUpperCase(), " ")), r = Go(r, n), Wo[e] = r), r
            };
        n = ei((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), e = ti(i.valid_styles), t = ti(i.invalid_styles, "map"), s = ti(i.valid_classes, "map"), r = v("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = v("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), a = v("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), u = v("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), l = v("non_empty_elements", "td th iframe video audio object script pre code", a), f = v("move_caret_before_on_enter_elements", "table", l), d = v("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), c = v("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), m = v("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), Yo((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function (e) {
            h[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });
        var S = function (e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            },
            b = function (e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    x = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    w = /[*?+]/;
                if (e)
                    for (e = Zo(e, ","), N["@"] && (h = N["@"].attributes, v = N["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                        if (i = C.exec(e[t])) {
                            if (g = i[1], c = i[2], p = i[3], s = i[5], a = {
                                    attributes: d = {},
                                    attributesOrder: m = []
                                }, "#" === g && (a.paddEmpty = !0), "-" === g && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h) {
                                for (b in h) d[b] = h[b];
                                m.push.apply(m, v)
                            }
                            if (s)
                                for (r = 0, o = (s = Zo(s, "|")).length; r < o; r++)
                                    if (i = x.exec(s[r])) {
                                        if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), g = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                                            delete d[l], m.splice(Qo(m, l), 1);
                                            continue
                                        }
                                        g && ("=" === g && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                                            name: l,
                                            value: y
                                        }), u.defaultValue = y), ":" === g && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                                            name: l,
                                            value: y
                                        }), u.forcedValue = y), "<" === g && (u.validValues = Xo(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = S(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)
                                    }
                            h || "@" !== c || (h = d, v = m), p && (a.outputName = c, N[p] = a), w.test(c) ? (a.pattern = S(c), E.push(a)) : N[c] = a
                        }
            },
            y = function (e) {
                N = {}, E = [], b(e), Yo(n, function (e, t) {
                    g[t] = e.children
                })
            },
            C = function (e) {
                var a = /^(~)?(.+)$/;
                e && (Wo.text_block_elements = Wo.block_elements = null, Yo(Zo(e, ","), function (e) {
                    var t = a.exec(e),
                        n = "~" === t[1],
                        r = n ? "span" : "div",
                        o = t[2];
                    if (g[o] = g[r], p[o] = r, n || (c[o.toUpperCase()] = {}, c[o] = {}), !N[o]) {
                        var i = N[r];
                        delete(i = Go({}, i)).removeEmptyAttrs, delete i.removeEmpty, N[o] = i
                    }
                    Yo(g, function (e, t) {
                        e[r] && (g[t] = e = Go({}, g[t]), e[o] = e[r])
                    })
                }))
            },
            x = function (e) {
                var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                Wo[i.schema] = null, e && Yo(Zo(e, ","), function (e) {
                    var t, n, r = o.exec(e);
                    r && (n = r[1], t = n ? g[r[2]] : g[r[2]] = {
                        "#comment": {}
                    }, t = g[r[2]], Yo(Zo(r[3], "|"), function (e) {
                        "-" === n ? delete t[e] : t[e] = {}
                    }))
                })
            },
            w = function (e) {
                var t, n = N[e];
                if (n) return n;
                for (t = E.length; t--;)
                    if ((n = E[t]).pattern.test(e)) return n
            };
        return i.valid_elements ? y(i.valid_elements) : (Yo(n, function (e, t) {
            N[t] = {
                attributes: e.attributes,
                attributesOrder: e.attributesOrder
            }, g[t] = e.children
        }), "html5" !== i.schema && Yo(Zo("strong/b em/i"), function (e) {
            e = Zo(e, "/"), N[e[1]].outputName = e[0]
        }), Yo(Zo("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (e) {
            N[e] && (N[e].removeEmpty = !0)
        }), Yo(Zo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
            N[e].paddEmpty = !0
        }), Yo(Zo("span"), function (e) {
            N[e].removeEmptyAttrs = !0
        })), C(i.custom_elements), x(i.valid_children), b(i.extended_valid_elements), x("+ol[ul|ol],+ul[ul|ol]"), Yo({
            dd: "dl",
            dt: "dl",
            li: "ul ol",
            td: "tr",
            th: "tr",
            tr: "tbody thead tfoot",
            tbody: "table",
            thead: "table",
            tfoot: "table",
            legend: "fieldset",
            area: "map",
            param: "video audio object"
        }, function (e, t) {
            N[t] && (N[t].parentsRequired = Zo(e))
        }), i.invalid_elements && Yo(Jo(i.invalid_elements), function (e) {
            N[e] && delete N[e]
        }), w("span") || b("span[!data-mce-type|*]"), {
            children: g,
            elements: N,
            getValidStyles: function () {
                return e
            },
            getValidClasses: function () {
                return s
            },
            getBlockElements: function () {
                return c
            },
            getInvalidStyles: function () {
                return t
            },
            getShortEndedElements: function () {
                return a
            },
            getTextBlockElements: function () {
                return d
            },
            getTextInlineElements: function () {
                return m
            },
            getBoolAttrs: function () {
                return u
            },
            getElementRule: w,
            getSelfClosingElements: function () {
                return o
            },
            getNonEmptyElements: function () {
                return l
            },
            getMoveCaretBeforeOnEnterElements: function () {
                return f
            },
            getWhiteSpaceElements: function () {
                return r
            },
            getSpecialElements: function () {
                return h
            },
            isValidChild: function (e, t) {
                var n = g[e.toLowerCase()];
                return !(!n || !n[t.toLowerCase()])
            },
            isValid: function (e, t) {
                var n, r, o = w(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            },
            getCustomElements: function () {
                return p
            },
            addValidElements: b,
            setValidElements: y,
            addCustomElements: C,
            addValidChildren: x
        }
    }
    var ri = function (e, t, n, r) {
        var o = function (e) {
            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
        };
        return "#" + o(t) + o(n) + o(r)
    };

    function oi(y, e) {
        var C, t, c, l, x = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            N = /\s*([^:]+):\s*([^;]+);?/g,
            E = /\s+$/,
            S = {},
            T = "\ufeff";
        for (y = y || {}, e && (c = e.getValidStyles(), l = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + T).split(" "), C = 0; C < t.length; C++) S[t[C]] = T + C, S[T + C] = t[C];
        return {
            toHex: function (e) {
                return e.replace(x, ri)
            },
            parse: function (e) {
                var t, n, r, o, i, a, u, s, c = {},
                    l = y.url_converter,
                    f = y.url_converter_scope || this,
                    d = function (e, t, n) {
                        var r, o, i, a;
                        if ((r = c[e + "-top" + t]) && (o = c[e + "-right" + t]) && (i = c[e + "-bottom" + t]) && (a = c[e + "-left" + t])) {
                            var u = [r, o, i, a];
                            for (C = u.length - 1; C-- && u[C] === u[C + 1];); - 1 < C && n || (c[e + t] = -1 === C ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t])
                        }
                    },
                    m = function (e) {
                        var t, n = c[e];
                        if (n) {
                            for (t = (n = n.split(" ")).length; t--;)
                                if (n[t] !== n[0]) return !1;
                            return c[e] = n[0], !0
                        }
                    },
                    g = function (e) {
                        return o = !0, S[e]
                    },
                    p = function (e, t) {
                        return o && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                            return S[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    },
                    h = function (e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    },
                    v = function (e) {
                        return e.replace(/\\[0-9a-f]+/gi, h)
                    },
                    b = function (e, t, n, r, o, i) {
                        if (o = o || i) return "'" + (o = p(o)).replace(/\'/g, "\\'") + "'";
                        if (t = p(t || n || r), !y.allow_script_urls) {
                            var a = t.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(a)) return "";
                            if (!y.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return ""
                        }
                        return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')"
                    };
                if (e) {
                    for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, g)
                        }); t = N.exec(e);)
                        if (N.lastIndex = t.index + t[0].length, n = t[1].replace(E, "").toLowerCase(), r = t[2].replace(E, ""), n && r) {
                            if (n = v(n), r = v(r), -1 !== n.indexOf(T) || -1 !== n.indexOf('"')) continue;
                            if (!y.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
                            "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(x, ri)).replace(w, b), c[n] = o ? p(r, !0) : r
                        }
                    d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"]
                }
                return c
            },
            serialize: function (i, e) {
                var t, n, r, o, a, u = "",
                    s = function (e) {
                        var t, n, r, o;
                        if (t = c[e])
                            for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + o + ";")
                    };
                if (e && c) s("*"), s(e);
                else
                    for (t in i) !(n = i[t]) || l && (r = t, o = e, a = void 0, (a = l["*"]) && a[r] || (a = l[o]) && a[r]) || (u += (0 < u.length ? " " : "") + t + ": " + n + ";");
                return u
            }
        }
    }
    var ii, ai = Yt.each,
        ui = Yt.grep,
        si = Re.ie,
        ci = /^([a-z0-9],?)+$/i,
        li = /^[ \t\r\n]*$/,
        fi = function (n, r, o) {
            var e = {},
                i = r.keep_values,
                t = {
                    set: function (e, t, n) {
                        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t)
                    },
                    get: function (e, t) {
                        return e.attr("data-mce-" + t) || e.attr(t)
                    }
                };
            return e = {
                style: {
                    set: function (e, t) {
                        null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t)
                    },
                    get: function (e) {
                        var t = e.attr("data-mce-style") || e.attr("style");
                        return t = n.serialize(n.parse(t), e[0].nodeName)
                    }
                }
            }, i && (e.href = e.src = t), e
        },
        di = function (e, t) {
            var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r)
        },
        mi = function (e, t) {
            var n, r, o = 0;
            if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
            return o
        };

    function gi(a, u) {
        var s, c = this;
        void 0 === u && (u = {});
        var r = {},
            i = window,
            o = {},
            t = 0,
            e = function (m, e) {
                var g, p = 0,
                    h = {};
                g = (e = e || {}).maxLoadTime || 5e3;
                var v = function (e) {
                        m.getElementsByTagName("head")[0].appendChild(e)
                    },
                    n = function (e, t, n) {
                        var o, r, i, a, u = function () {
                                for (var e = a.passed, t = e.length; t--;) e[t]();
                                a.status = 2, a.passed = [], a.failed = []
                            },
                            s = function () {
                                for (var e = a.failed, t = e.length; t--;) e[t]();
                                a.status = 3, a.passed = [], a.failed = []
                            },
                            c = function (e, t) {
                                e() || ((new Date).getTime() - i < g ? Le.setTimeout(t) : s())
                            },
                            l = function () {
                                c(function () {
                                    for (var e, t, n = m.styleSheets, r = n.length; r--;)
                                        if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === o.id) return u(), !0
                                }, l)
                            },
                            f = function () {
                                c(function () {
                                    try {
                                        var e = r.sheet.cssRules;
                                        return u(), !!e
                                    } catch (t) {}
                                }, f)
                            };
                        if (e = Yt._addCacheSuffix(e), h[e] ? a = h[e] : (a = {
                                passed: [],
                                failed: []
                            }, h[e] = a), t && a.passed.push(t), n && a.failed.push(n), 1 !== a.status)
                            if (2 !== a.status)
                                if (3 !== a.status) {
                                    if (a.status = 1, (o = m.createElement("link")).rel = "stylesheet", o.type = "text/css", o.id = "u" + p++, o.async = !1, o.defer = !1, i = (new Date).getTime(), "onload" in o && !((d = navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(d[1], 10) < 536)) o.onload = l, o.onerror = s;
                                    else {
                                        if (0 < navigator.userAgent.indexOf("Firefox")) return (r = m.createElement("style")).textContent = '@import "' + e + '"', f(), void v(r);
                                        l()
                                    }
                                    var d;
                                    v(o), o.href = e
                                } else s();
                        else u()
                    },
                    t = function (t) {
                        return Qr.nu(function (e) {
                            n(t, q(e, H(ro.value(t))), q(e, H(ro.error(t))))
                        })
                    },
                    o = function (e) {
                        return e.fold(j, j)
                    };
                return {
                    load: n,
                    loadAll: function (e, n, r) {
                        eo($(e, t)).get(function (e) {
                            var t = W(e, function (e) {
                                return e.isValue()
                            });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o))
                        })
                    }
                }
            }(a),
            l = [],
            f = u.schema ? u.schema : ni({}),
            d = oi({
                url_converter: u.url_converter,
                url_converter_scope: u.url_converter_scope
            }, u.schema),
            m = u.ownEvents ? new je(u.proxy) : je.Event,
            n = f.getBlockElements(),
            g = pn.overrideDefaults(function () {
                return {
                    context: a,
                    element: V.getRoot()
                }
            }),
            p = function (e) {
                if (e && a && "string" == typeof e) {
                    var t = a.getElementById(e);
                    return t && t.id !== e ? a.getElementsByName(e)[1] : t
                }
                return e
            },
            h = function (e) {
                return "string" == typeof e && (e = p(e)), g(e)
            },
            v = function (e, t, n) {
                var r, o, i = h(e);
                return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o
            },
            b = function (e) {
                var t = p(e);
                return t ? t.attributes : []
            },
            y = function (e, t, n) {
                var r, o;
                "" === n && (n = null);
                var i = h(e);
                r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({
                    attrElm: i,
                    attrName: t,
                    attrValue: n
                }))
            },
            C = function () {
                return u.root_element || a.body
            },
            x = function (e, t) {
                return Xr.getPos(a.body, p(e), t)
            },
            w = function (e, t, n) {
                var r = h(e);
                return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
                    return t.toUpperCase()
                })) && (t = Re.ie && Re.ie < 12 ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined)
            },
            N = function (e) {
                var t, n;
                return e = p(e), t = w(e, "width"), n = w(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
                    w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
                }
            },
            E = function (e, t) {
                var n;
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (ci.test(t)) {
                        var r = t.toLowerCase().split(/,/),
                            o = e.nodeName.toLowerCase();
                        for (n = r.length - 1; 0 <= n; n--)
                            if (r[n] === o) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < Tt(t, i[0].ownerDocument || i[0], null, i).length
            },
            S = function (e, t, n, r) {
                var o, i = [],
                    a = p(e);
                for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), Yt.is(t, "string") && (t = "*" === (o = t) ? function (e) {
                        return 1 === e.nodeType
                    } : function (e) {
                        return E(e, o)
                    }); a && a !== n && a.nodeType && 9 !== a.nodeType;) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            },
            T = function (e, t, n) {
                var r = t;
                if (e)
                    for ("string" == typeof t && (r = function (e) {
                            return E(e, t)
                        }), e = e[n]; e; e = e[n])
                        if ("function" == typeof r && r(e)) return e;
                return null
            },
            k = function (e, n, r) {
                var o, t = "string" == typeof e ? p(e) : e;
                if (!t) return !1;
                if (Yt.isArray(t) && (t.length || 0 === t.length)) return o = [], ai(t, function (e, t) {
                    e && ("string" == typeof e && (e = p(e)), o.push(n.call(r, e, t)))
                }), o;
                var i = r || c;
                return n.call(i, t)
            },
            A = function (e, t) {
                h(e).each(function (e, n) {
                    ai(t, function (e, t) {
                        y(n, t, e)
                    })
                })
            },
            _ = function (e, r) {
                var t = h(e);
                si ? t.each(function (e, t) {
                    if (!1 !== t.canHaveHTML) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        try {
                            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild)
                        } catch (n) {
                            pn("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t)
                        }
                        return r
                    }
                }) : t.html(r)
            },
            R = function (e, n, r, o, i) {
                return k(e, function (e) {
                    var t = "string" == typeof n ? a.createElement(n) : n;
                    return A(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && _(t, o)), i ? t : e.appendChild(t)
                })
            },
            D = function (e, t, n) {
                return R(a.createElement(e), e, t, n, !0)
            },
            B = $o.decode,
            O = $o.encodeAllRaw,
            P = function (e, t) {
                var n = h(e);
                return t ? n.each(function () {
                    for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0]
            },
            L = function (e, t, n) {
                h(e).toggleClass(t, n).each(function () {
                    "" === this.className && pn(this).attr("class", null)
                })
            },
            I = function (t, e, n) {
                return k(e, function (e) {
                    return Yt.is(e, "array") && (t = t.cloneNode(!0)), n && ai(ui(e.childNodes), function (e) {
                        t.appendChild(e)
                    }), e.parentNode.replaceChild(t, e)
                })
            },
            M = function () {
                return a.createRange()
            },
            F = function (e, t, n, r) {
                if (Yt.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = F(e[o], t, n, r);
                    return e
                }
                return !u.collect || e !== a && e !== i || l.push([e, t, n, r]), m.bind(e, t, n, r || V)
            },
            U = function (e, t, n) {
                var r;
                if (Yt.isArray(e)) {
                    for (r = e.length; r--;) e[r] = U(e[r], t, n);
                    return e
                }
                if (l && (e === a || e === i))
                    for (r = l.length; r--;) {
                        var o = l[r];
                        e !== o[0] || t && t !== o[1] || n && n !== o[2] || m.unbind(o[0], o[1], o[2])
                    }
                return m.unbind(e, t, n)
            },
            z = function (e) {
                if (e && Do.isElement(e)) {
                    var t = e.getAttribute("data-mce-contenteditable");
                    return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                }
                return null
            },
            V = {
                doc: a,
                settings: u,
                win: i,
                files: o,
                stdMode: !0,
                boxModel: !0,
                styleSheetLoader: e,
                boundEvents: l,
                styles: d,
                schema: f,
                events: m,
                isBlock: function (e) {
                    if ("string" == typeof e) return !!n[e];
                    if (e) {
                        var t = e.nodeType;
                        if (t) return !(1 !== t || !n[e.nodeName])
                    }
                    return !1
                },
                $: g,
                $$: h,
                root: null,
                clone: function (t, e) {
                    if (!si || 1 !== t.nodeType || e) return t.cloneNode(e);
                    if (!e) {
                        var n = a.createElement(t.nodeName);
                        return ai(b(t), function (e) {
                            y(n, e.nodeName, v(t, e.nodeName))
                        }), n
                    }
                    return null
                },
                getRoot: C,
                getViewPort: function (e) {
                    var t = e || i,
                        n = t.document,
                        r = n.documentElement;
                    return {
                        x: t.pageXOffset || r.scrollLeft,
                        y: t.pageYOffset || r.scrollTop,
                        w: t.innerWidth || r.clientWidth,
                        h: t.innerHeight || r.clientHeight
                    }
                },
                getRect: function (e) {
                    var t, n;
                    return e = p(e), t = x(e), n = N(e), {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }
                },
                getSize: N,
                getParent: function (e, t, n) {
                    var r = S(e, t, n, !1);
                    return r && 0 < r.length ? r[0] : null
                },
                getParents: S,
                get: p,
                getNext: function (e, t) {
                    return T(e, t, "nextSibling")
                },
                getPrev: function (e, t) {
                    return T(e, t, "previousSibling")
                },
                select: function (e, t) {
                    return Tt(e, p(t) || u.root_element || a, [])
                },
                is: E,
                add: R,
                create: D,
                createHTML: function (e, t, n) {
                    var r, o = "";
                    for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
                    return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />"
                },
                createFragment: function (e) {
                    var t, n = a.createElement("div"),
                        r = a.createDocumentFragment();
                    for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                    return r
                },
                remove: P,
                setStyle: function (e, t, n) {
                    var r = h(e).css(t, n);
                    u.update_styles && di(d, r)
                },
                getStyle: w,
                setStyles: function (e, t) {
                    var n = h(e).css(t);
                    u.update_styles && di(d, n)
                },
                removeAllAttribs: function (e) {
                    return k(e, function (e) {
                        var t, n = e.attributes;
                        for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t))
                    })
                },
                setAttrib: y,
                setAttribs: A,
                getAttrib: v,
                getPos: x,
                parseStyle: function (e) {
                    return d.parse(e)
                },
                serializeStyle: function (e, t) {
                    return d.serialize(e, t)
                },
                addStyle: function (e) {
                    var t, n;
                    if (V !== gi.DOM && a === document) {
                        if (r[e]) return;
                        r[e] = !0
                    }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                },
                loadCSS: function (e) {
                    var n;
                    V === gi.DOM || a !== document ? (e || (e = ""), n = a.getElementsByTagName("head")[0], ai(e.split(","), function (e) {
                        var t;
                        e = Yt._addCacheSuffix(e), o[e] || (o[e] = !0, t = D("link", {
                            rel: "stylesheet",
                            href: e
                        }), n.appendChild(t))
                    })) : gi.DOM.loadCSS(e)
                },
                addClass: function (e, t) {
                    h(e).addClass(t)
                },
                removeClass: function (e, t) {
                    L(e, t, !1)
                },
                hasClass: function (e, t) {
                    return h(e).hasClass(t)
                },
                toggleClass: L,
                show: function (e) {
                    h(e).show()
                },
                hide: function (e) {
                    h(e).hide()
                },
                isHidden: function (e) {
                    return "none" === h(e).css("display")
                },
                uniqueId: function (e) {
                    return (e || "mce_") + t++
                },
                setHTML: _,
                getOuterHTML: function (e) {
                    var t = "string" == typeof e ? p(e) : e;
                    return Do.isElement(t) ? t.outerHTML : pn("<div></div>").append(pn(t).clone()).html()
                },
                setOuterHTML: function (e, t) {
                    h(e).each(function () {
                        try {
                            if ("outerHTML" in this) return void(this.outerHTML = t)
                        } catch (e) {}
                        P(pn(this).html(t), !0)
                    })
                },
                decode: B,
                encode: O,
                insertAfter: function (e, t) {
                    var r = p(t);
                    return k(e, function (e) {
                        var t, n;
                        return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e
                    })
                },
                replace: I,
                rename: function (t, e) {
                    var n;
                    return t.nodeName !== e.toUpperCase() && (n = D(e), ai(b(t), function (e) {
                        y(n, e.nodeName, v(t, e.nodeName))
                    }), I(n, t, !0)), n || t
                },
                findCommonAncestor: function (e, t) {
                    for (var n, r = e; r;) {
                        for (n = t; n && r !== n;) n = n.parentNode;
                        if (r === n) break;
                        r = r.parentNode
                    }
                    return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                },
                toHex: function (e) {
                    return d.toHex(Yt.trim(e))
                },
                run: k,
                getAttribs: b,
                isEmpty: function (e, t) {
                    var n, r, o, i, a, u, s = 0;
                    if (e = e.firstChild) {
                        a = new oo(e, e.parentNode), t = t || (f ? f.getNonEmptyElements() : null), i = f ? f.getWhiteSpaceElements() : {};
                        do {
                            if (o = e.nodeType, Do.isElement(e)) {
                                var c = e.getAttribute("data-mce-bogus");
                                if (c) {
                                    e = a.next("all" === c);
                                    continue
                                }
                                if (u = e.nodeName.toLowerCase(), t && t[u]) {
                                    if ("br" === u) {
                                        s++, e = a.next();
                                        continue
                                    }
                                    return !1
                                }
                                for (n = (r = b(e)).length; n--;)
                                    if ("name" === (u = r[n].nodeName) || "data-mce-bookmark" === u) return !1
                            }
                            if (8 === o) return !1;
                            if (3 === o && !li.test(e.nodeValue)) return !1;
                            if (3 === o && e.parentNode && i[e.parentNode.nodeName] && li.test(e.nodeValue)) return !1;
                            e = a.next()
                        } while (e)
                    }
                    return s <= 1
                },
                createRng: M,
                nodeIndex: mi,
                split: function (e, t, n) {
                    var r, o, i, a = M();
                    if (e && t) return a.setStart(e.parentNode, mi(e)), a.setEnd(t.parentNode, mi(t)), r = a.extractContents(), (a = M()).setStart(t.parentNode, mi(t) + 1), a.setEnd(e.parentNode, mi(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Po.trimNode(V, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Po.trimNode(V, o), e), P(e), n || t
                },
                bind: F,
                unbind: U,
                fire: function (e, t, n) {
                    return m.fire(e, t, n)
                },
                getContentEditable: z,
                getContentEditableParent: function (e) {
                    for (var t = C(), n = null; e && e !== t && null === (n = z(e)); e = e.parentNode);
                    return n
                },
                destroy: function () {
                    if (l)
                        for (var e = l.length; e--;) {
                            var t = l[e];
                            m.unbind(t[0], t[1], t[2])
                        }
                    Tt.setDocument && Tt.setDocument()
                },
                isChildOf: function (e, t) {
                    for (; e;) {
                        if (t === e) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                dumpRng: function (e) {
                    return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }
            };
        return s = fi(d, u, function () {
            return V
        }), V
    }(ii = gi || (gi = {})).DOM = ii(document), ii.nodeIndex = mi;
    var pi = gi,
        hi = pi.DOM,
        vi = Yt.each,
        bi = Yt.grep,
        yi = function (e) {
            return "function" == typeof e
        },
        Ci = function () {
            var l = {},
                o = [],
                i = {},
                a = [],
                f = 0;
            this.isDone = function (e) {
                return 2 === l[e]
            }, this.markDone = function (e) {
                l[e] = 2
            }, this.add = this.load = function (e, t, n, r) {
                l[e] === undefined && (o.push(e), l[e] = 0), t && (i[e] || (i[e] = []), i[e].push({
                    success: t,
                    failure: r,
                    scope: n || this
                }))
            }, this.remove = function (e) {
                delete l[e], delete i[e]
            }, this.loadQueue = function (e, t, n) {
                this.loadScripts(o, e, t, n)
            }, this.loadScripts = function (n, e, t, r) {
                var u, s = [],
                    c = function (t, e) {
                        vi(i[e], function (e) {
                            yi(e[t]) && e[t].call(e.scope)
                        }), i[e] = undefined
                    };
                a.push({
                    success: e,
                    failure: r,
                    scope: t || this
                }), (u = function () {
                    var e = bi(n);
                    if (n.length = 0, vi(e, function (e) {
                            var t, n, r, o, i, a;
                            2 !== l[e] ? 3 !== l[e] ? 1 !== l[e] && (l[e] = 1, f++, t = e, n = function () {
                                l[e] = 2, f--, c("success", e), u()
                            }, r = function () {
                                l[e] = 3, f--, s.push(e), c("failure", e), u()
                            }, i = (a = hi).uniqueId(), (o = document.createElement("script")).id = i, o.type = "text/javascript", o.src = Yt._addCacheSuffix(t), o.onload = function () {
                                a.remove(i), o && (o.onreadystatechange = o.onload = o = null), n()
                            }, o.onerror = function () {
                                yi(r) ? r() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + t)
                            }, (document.getElementsByTagName("head")[0] || document.body).appendChild(o)) : c("failure", e) : c("success", e)
                        }), !f) {
                        var t = a.slice(0);
                        a.length = 0, vi(t, function (e) {
                            0 === s.length ? yi(e.success) && e.success.call(e.scope) : yi(e.failure) && e.failure.call(e.scope, s)
                        })
                    }
                })()
            }
        };
    Ci.ScriptLoader = new Ci;
    var xi, wi = Yt.each;

    function Ni() {
        var r = this,
            o = [],
            a = {},
            u = {},
            i = [],
            s = function (e) {
                var t;
                return u[e] && (t = u[e].dependencies), t || []
            },
            c = function (e, t) {
                return "object" == typeof t ? t : "string" == typeof e ? {
                    prefix: "",
                    resource: t,
                    suffix: ""
                } : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            l = function (e, n, t, r) {
                var o = s(e);
                wi(o, function (e) {
                    var t = c(n, e);
                    f(t.resource, t, undefined, undefined)
                }), t && (r ? t.call(r) : t.call(Ci))
            },
            f = function (e, t, n, r, o) {
                if (!a[e]) {
                    var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                    0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = Ni.baseURL + "/" + i), a[e] = i.substring(0, i.lastIndexOf("/")), u[e] ? l(e, t, n, r) : Ci.ScriptLoader.add(i, function () {
                        return l(e, t, n, r)
                    }, r, o)
                }
            };
        return {
            items: o,
            urls: a,
            lookup: u,
            _listeners: i,
            get: function (e) {
                return u[e] ? u[e].instance : undefined
            },
            dependencies: s,
            requireLangPack: function (e, t) {
                var n = Ni.language;
                if (n && !1 !== Ni.languageLoad) {
                    if (t)
                        if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2);
                        else if (-1 === t.indexOf("," + n + ",")) return;
                    Ci.ScriptLoader.add(a[e] + "/langs/" + n + ".js")
                }
            },
            add: function (t, e, n) {
                o.push(e), u[t] = {
                    instance: e,
                    dependencies: n
                };
                var r = W(i, function (e) {
                    return e.name === t
                });
                return i = r.fail, wi(r.pass, function (e) {
                    e.callback()
                }), e
            },
            remove: function (e) {
                delete a[e], delete u[e]
            },
            createUrl: c,
            addComponents: function (e, t) {
                var n = r.urls[e];
                wi(t, function (e) {
                    Ci.ScriptLoader.add(n + "/" + e)
                })
            },
            load: f,
            waitFor: function (e, t) {
                u.hasOwnProperty(e) ? t() : i.push({
                    name: e,
                    callback: t
                })
            }
        }
    }(xi = Ni || (Ni = {})).PluginManager = xi(), xi.ThemeManager = xi();
    var Ei = function (t, n) {
            $r.parent(t).each(function (e) {
                e.dom().insertBefore(n.dom(), t.dom())
            })
        },
        Si = function (e, t) {
            e.dom().appendChild(t.dom())
        },
        Ti = {
            before: Ei,
            after: function (e, t) {
                $r.nextSibling(e).fold(function () {
                    $r.parent(e).each(function (e) {
                        Si(e, t)
                    })
                }, function (e) {
                    Ei(e, t)
                })
            },
            prepend: function (t, n) {
                $r.firstChild(t).fold(function () {
                    Si(t, n)
                }, function (e) {
                    t.dom().insertBefore(n.dom(), e.dom())
                })
            },
            append: Si,
            appendAt: function (e, t, n) {
                $r.child(e, n).fold(function () {
                    Si(e, t)
                }, function (e) {
                    Ei(e, t)
                })
            },
            wrap: function (e, t) {
                Ei(e, t), Si(t, e)
            }
        },
        ki = function (t, e) {
            F(e, function (e) {
                Ti.before(t, e)
            })
        },
        Ai = function (t, e) {
            F(e, function (e) {
                Ti.append(t, e)
            })
        },
        _i = function (e) {
            var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        Ri = {
            empty: function (e) {
                e.dom().textContent = "", F($r.children(e), function (e) {
                    _i(e)
                })
            },
            remove: _i,
            unwrap: function (e) {
                var t = $r.children(e);
                0 < t.length && ki(e, t), _i(e)
            }
        },
        Di = function (n, r) {
            var o = null;
            return {
                cancel: function () {
                    null !== o && (clearTimeout(o), o = null)
                },
                throttle: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o && (o = setTimeout(function () {
                        n.apply(null, e), o = null
                    }, r))
                }
            }
        },
        Bi = function (e) {
            var t = e,
                n = function () {
                    return t
                };
            return {
                get: n,
                set: function (e) {
                    t = e
                },
                clone: function () {
                    return Bi(n())
                }
            }
        },
        Oi = function (e, t) {
            var n = hr.get(e, t);
            return n === undefined || "" === n ? [] : n.split(" ")
        },
        Pi = Oi,
        Li = function (e, t, n) {
            var r = Oi(e, t).concat([n]);
            return hr.set(e, t, r.join(" ")), !0
        },
        Ii = function (e, t, n) {
            var r = U(Oi(e, t), function (e) {
                return e !== n
            });
            return 0 < r.length ? hr.set(e, t, r.join(" ")) : hr.remove(e, t), !1
        },
        Mi = function (e) {
            return Pi(e, "class")
        },
        Fi = function (e, t) {
            return Li(e, "class", t)
        },
        Ui = function (e, t) {
            return Ii(e, "class", t)
        },
        zi = Mi,
        Vi = Fi,
        qi = Ui,
        Hi = function (e, t) {
            return I(Mi(e), t) ? Ui(e, t) : Fi(e, t)
        },
        ji = function (e) {
            return e.dom().classList !== undefined
        },
        $i = function (e, t) {
            return ji(e) && e.dom().classList.contains(t)
        },
        Wi = {
            add: function (e, t) {
                ji(e) ? e.dom().classList.add(t) : Vi(e, t)
            },
            remove: function (e, t) {
                var n;
                ji(e) ? e.dom().classList.remove(t) : qi(e, t), 0 === (ji(n = e) ? n.dom().classList : zi(n)).length && hr.remove(n, "class")
            },
            toggle: function (e, t) {
                return ji(e) ? e.dom().classList.toggle(t) : Hi(e, t)
            },
            toggler: function (e, t) {
                var n, r, o, i, a, u, s = ji(e),
                    c = e.dom().classList;
                return n = function () {
                    s ? c.remove(t) : qi(e, t)
                }, r = function () {
                    s ? c.add(t) : Vi(e, t)
                }, o = $i(e, t), i = o || !1, {
                    on: a = function () {
                        r(), i = !0
                    },
                    off: u = function () {
                        n(), i = !1
                    },
                    toggle: function () {
                        (i ? u : a)()
                    },
                    isOn: function () {
                        return i
                    }
                }
            },
            has: $i
        },
        Ki = function (e, t) {
            return Lr.all(t, e)
        };

    function Xi(e, t, n, r, o) {
        return e(n, r) ? A.some(n) : O(o) && o(n) ? A.none() : t(n, r, o)
    }
    var Yi, Gi = function (e, t, n) {
            for (var r = e.dom(), o = O(n) ? n : H(!1); r.parentNode;) {
                r = r.parentNode;
                var i = er.fromDom(r);
                if (t(i)) return A.some(i);
                if (o(i)) break
            }
            return A.none()
        },
        Ji = function (e, t) {
            return V(e.dom().childNodes, q(t, er.fromDom)).map(er.fromDom)
        },
        Qi = function (e, r) {
            var o = function (e) {
                for (var t = 0; t < e.childNodes.length; t++) {
                    if (r(er.fromDom(e.childNodes[t]))) return A.some(er.fromDom(e.childNodes[t]));
                    var n = o(e.childNodes[t]);
                    if (n.isSome()) return n
                }
                return A.none()
            };
            return o(e.dom())
        },
        Zi = {
            first: function (e) {
                return Qi(yr.body(), e)
            },
            ancestor: Gi,
            closest: function (e, t, n) {
                return Xi(function (e) {
                    return t(e)
                }, Gi, e, t, n)
            },
            sibling: function (t, n) {
                var e = t.dom();
                return e.parentNode ? Ji(er.fromDom(e.parentNode), function (e) {
                    return !Fr.eq(t, e) && n(e)
                }) : A.none()
            },
            child: Ji,
            descendant: Qi
        },
        ea = function (e, t, n) {
            return Zi.ancestor(e, function (e) {
                return Lr.is(e, t)
            }, n)
        },
        ta = ea,
        na = function (e, t) {
            return Lr.one(t, e)
        },
        ra = function (e, t, n) {
            return Xi(Lr.is, ea, e, t, n)
        },
        oa = H("mce-annotation"),
        ia = H("data-mce-annotation"),
        aa = H("data-mce-annotation-uid"),
        ua = function (r, e) {
            var t = r.selection.getRng(),
                n = er.fromDom(t.startContainer),
                o = er.fromDom(r.getBody()),
                i = e.fold(function () {
                    return "." + oa()
                }, function (e) {
                    return "[" + ia() + '="' + e + '"]'
                }),
                a = $r.child(n, t.startOffset).getOr(n),
                u = ra(a, i, function (e) {
                    return Fr.eq(e, o)
                }),
                s = function (e, t) {
                    return hr.has(e, t) ? A.some(hr.get(e, t)) : A.none()
                };
            return u.bind(function (e) {
                return s(e, "" + aa()).bind(function (n) {
                    return s(e, "" + ia()).map(function (e) {
                        var t = sa(r, n);
                        return {
                            uid: n,
                            name: e,
                            elements: t
                        }
                    })
                })
            })
        },
        sa = function (e, t) {
            var n = er.fromDom(e.getBody());
            return Ki(n, "[" + aa() + '="' + t + '"]')
        },
        ca = function (i, e) {
            var n, r, o, a = Bi({}),
                c = function (e, t) {
                    u(e, function (e) {
                        return t(e), e
                    })
                },
                u = function (e, t) {
                    var n = a.get(),
                        r = t(n.hasOwnProperty(e) ? n[e] : {
                            listeners: [],
                            previous: Bi(A.none())
                        });
                    n[e] = r, a.set(n)
                },
                t = (n = function () {
                    var e, t, n, r = a.get(),
                        o = (e = cr(r), (n = Q.call(e, 0)).sort(t), n);
                    F(o, function (e) {
                        u(e, function (u) {
                            var s = u.previous.get();
                            return ua(i, A.some(e)).fold(function () {
                                var t;
                                s.isSome() && (c(t = e, function (e) {
                                    F(e.listeners, function (e) {
                                        return e(!1, t)
                                    })
                                }), u.previous.set(A.none()))
                            }, function (e) {
                                var t, n, r, o = e.uid,
                                    i = e.name,
                                    a = e.elements;
                                s.is(o) || (n = o, r = a, c(t = i, function (e) {
                                    F(e.listeners, function (e) {
                                        return e(!0, t, {
                                            uid: n,
                                            nodes: $(r, function (e) {
                                                return e.dom()
                                            })
                                        })
                                    })
                                }), u.previous.set(A.some(o)))
                            }), {
                                previous: u.previous,
                                listeners: u.listeners
                            }
                        })
                    })
                }, r = 30, o = null, {
                    cancel: function () {
                        null !== o && (clearTimeout(o), o = null)
                    },
                    throttle: function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        null !== o && clearTimeout(o), o = setTimeout(function () {
                            n.apply(null, e), o = null
                        }, r)
                    }
                });
            return i.on("remove", function () {
                t.cancel()
            }), i.on("nodeChange", function () {
                t.throttle()
            }), {
                addListener: function (e, t) {
                    u(e, function (e) {
                        return {
                            previous: e.previous,
                            listeners: e.listeners.concat([t])
                        }
                    })
                }
            }
        },
        la = function (e, n) {
            e.on("init", function () {
                e.serializer.addNodeFilter("span", function (e) {
                    F(e, function (t) {
                        var e;
                        (e = t, A.from(e.attributes.map[ia()]).bind(n.lookup)).each(function (e) {
                            !1 === e.persistent && t.unwrap()
                        })
                    })
                })
            })
        },
        fa = 0,
        da = function (t, e) {
            F(e, function (e) {
                Wi.add(t, e)
            })
        },
        ma = function (e, t) {
            return er.fromDom(e.dom().cloneNode(t))
        },
        ga = function (e) {
            return ma(e, !0)
        },
        pa = function (e) {
            return ma(e, !1)
        },
        ha = ga,
        va = [].slice,
        ba = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = va.call(arguments);
            return r.length - 1 >= e.length ? e.apply(this, r.slice(1)) : function () {
                var e = r.concat([].slice.call(arguments));
                return ba.apply(this, e)
            }
        },
        ya = {
            constant: function (e) {
                return function () {
                    return e
                }
            },
            negate: function (t) {
                return function (e) {
                    return !t(e)
                }
            },
            and: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = va.call(arguments);
                return function (e) {
                    for (var t = 0; t < n.length; t++)
                        if (!n[t](e)) return !1;
                    return !0
                }
            },
            or: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = va.call(arguments);
                return function (e) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t](e)) return !0;
                    return !1
                }
            },
            curry: ba,
            compose: function (t, n) {
                return function (e) {
                    return t(n(e))
                }
            },
            noop: function () {}
        },
        Ca = "\ufeff",
        xa = function (e) {
            return e === Ca
        },
        wa = Ca,
        Na = function (e) {
            return e.replace(new RegExp(Ca, "g"), "")
        },
        Ea = Do.isElement,
        Sa = Do.isText,
        Ta = function (e) {
            return Sa(e) && (e = e.parentNode), Ea(e) && e.hasAttribute("data-mce-caret")
        },
        ka = function (e) {
            return Sa(e) && xa(e.data)
        },
        Aa = function (e) {
            return Ta(e) || ka(e)
        },
        _a = function (e) {
            return e.firstChild !== e.lastChild || !Do.isBr(e.firstChild)
        },
        Ra = function (e) {
            var t = e.container();
            return e && Do.isText(t) && t.data.charAt(e.offset()) === wa
        },
        Da = function (e) {
            var t = e.container();
            return e && Do.isText(t) && t.data.charAt(e.offset() - 1) === wa
        },
        Ba = function (e, t, n) {
            var r, o, i;
            return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(((i = document.createElement("br")).setAttribute("data-mce-bogus", "1"), i)), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r
        },
        Oa = function (e) {
            return Sa(e) && e.data[0] === wa
        },
        Pa = function (e) {
            return Sa(e) && e.data[e.data.length - 1] === wa
        },
        La = function (e) {
            return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], Do.isBogus(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
            var t, n
        },
        Ia = Do.isContentEditableTrue,
        Ma = Do.isContentEditableFalse,
        Fa = Do.isBr,
        Ua = Do.isText,
        za = Do.matchNodeNames("script style textarea"),
        Va = Do.matchNodeNames("img input textarea hr iframe video audio object"),
        qa = Do.matchNodeNames("table"),
        Ha = Aa,
        ja = function (e) {
            return !Ha(e) && (Ua(e) ? !za(e.parentNode) : Va(e) || Fa(e) || qa(e) || $a(e))
        },
        $a = function (e) {
            return !1 === (t = e, Do.isElement(t) && "true" === t.getAttribute("unselectable")) && Ma(e);
            var t
        },
        Wa = function (e, t) {
            return ja(e) && function (e, t) {
                for (e = e.parentNode; e && e !== t; e = e.parentNode) {
                    if ($a(e)) return !1;
                    if (Ia(e)) return !0
                }
                return !0
            }(e, t)
        },
        Ka = Math.round,
        Xa = function (e) {
            return e ? {
                left: Ka(e.left),
                top: Ka(e.top),
                bottom: Ka(e.bottom),
                right: Ka(e.right),
                width: Ka(e.width),
                height: Ka(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        },
        Ya = function (e, t) {
            return e = Xa(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e
        },
        Ga = function (e, t, n) {
            return 0 <= e && e <= Math.min(t.height, n.height) / 2
        },
        Ja = function (e, t) {
            return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && Ga(t.top - e.bottom, e, t)
        },
        Qa = function (e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && Ga(t.bottom - e.top, e, t)
        },
        Za = function (e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        },
        eu = function (e, t) {
            return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        },
        tu = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        nu = function (e) {
            return "string" == typeof e && 768 <= e.charCodeAt(0) && tu.test(e)
        },
        ru = function (e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var o = e[r];
                if (!o.isSome()) return A.none();
                n.push(o.getOrDie())
            }
            return A.some(t.apply(null, n))
        },
        ou = Do.isElement,
        iu = ja,
        au = Do.matchStyleValues("display", "block table"),
        uu = Do.matchStyleValues("float", "left right"),
        su = ya.and(ou, iu, ya.negate(uu)),
        cu = ya.negate(Do.matchStyleValues("white-space", "pre pre-line pre-wrap")),
        lu = Do.isText,
        fu = Do.isBr,
        du = pi.nodeIndex,
        mu = eu,
        gu = function (e) {
            return "createRange" in e ? e.createRange() : pi.DOM.createRng()
        },
        pu = function (e) {
            return e && /[\r\n\t ]/.test(e)
        },
        hu = function (e) {
            return !!e.setStart && !!e.setEnd
        },
        vu = function (e) {
            var t, n = e.startContainer,
                r = e.startOffset;
            return !!(pu(e.toString()) && cu(n.parentNode) && Do.isText(n) && (t = n.data, pu(t[r - 1]) || pu(t[r + 1])))
        },
        bu = function (e) {
            return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom
        },
        yu = function (e) {
            var t, n, r, o, i, a, u, s;
            return t = 0 < (n = e.getClientRects()).length ? Xa(n[0]) : Xa(e.getBoundingClientRect()), !hu(e) && fu(e) && bu(t) ? (i = (r = e).ownerDocument, a = gu(i), u = i.createTextNode("\xa0"), (s = r.parentNode).insertBefore(u, r), a.setStart(u, 0), a.setEnd(u, 1), o = Xa(a.getBoundingClientRect()), s.removeChild(u), o) : bu(t) && hu(e) ? function (e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && Do.isText(n) && 0 === r && 1 === o) {
                    var i = e.cloneRange();
                    return i.setEndAfter(n), yu(i)
                }
                return null
            }(e) : t
        },
        Cu = function (e, t) {
            var n = Ya(e, t);
            return n.width = 1, n.right = n.left + 1, n
        },
        xu = function (e) {
            var t, n, r = [],
                o = function (e) {
                    var t, n;
                    0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e))
                },
                i = function (e, t) {
                    var n = gu(e.ownerDocument);
                    if (t < e.data.length) {
                        if (nu(e.data[t])) return r;
                        if (nu(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !vu(n))) return o(Cu(yu(n), !1)), r
                    }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), vu(n) || o(Cu(yu(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), vu(n) || o(Cu(yu(n), !0)))
                };
            if (lu(e.container())) return i(e.container(), e.offset()), r;
            if (ou(e.container()))
                if (e.isAtEnd()) n = mu(e.container(), e.offset()), lu(n) && i(n, n.data.length), su(n) && !fu(n) && o(Cu(yu(n), !1));
                else {
                    if (n = mu(e.container(), e.offset()), lu(n) && i(n, 0), su(n) && e.isAtEnd()) return o(Cu(yu(n), !1)), r;
                    t = mu(e.container(), e.offset() - 1), su(t) && !fu(t) && (au(t) || au(n) || !su(n)) && o(Cu(yu(t), !1)), su(n) && o(Cu(yu(n), !0))
                }
            return r
        };

    function wu(t, n, e) {
        var r = function () {
            return e || (e = xu(wu(t, n))), e
        };
        return {
            container: ya.constant(t),
            offset: ya.constant(n),
            toRange: function () {
                var e;
                return (e = gu(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e
            },
            getClientRects: r,
            isVisible: function () {
                return 0 < r().length
            },
            isAtStart: function () {
                return lu(t), 0 === n
            },
            isAtEnd: function () {
                return lu(t) ? n >= t.data.length : n >= t.childNodes.length
            },
            isEqual: function (e) {
                return e && t === e.container() && n === e.offset()
            },
            getNode: function (e) {
                return mu(t, e ? n - 1 : n)
            }
        }
    }(Yi = wu || (wu = {})).fromRangeStart = function (e) {
        return Yi(e.startContainer, e.startOffset)
    }, Yi.fromRangeEnd = function (e) {
        return Yi(e.endContainer, e.endOffset)
    }, Yi.after = function (e) {
        return Yi(e.parentNode, du(e) + 1)
    }, Yi.before = function (e) {
        return Yi(e.parentNode, du(e))
    }, Yi.isAbove = function (e, t) {
        return ru([ee(t.getClientRects()), te(e.getClientRects())], Ja).getOr(!1)
    }, Yi.isBelow = function (e, t) {
        return ru([te(t.getClientRects()), ee(e.getClientRects())], Qa).getOr(!1)
    }, Yi.isAtStart = function (e) {
        return !!e && e.isAtStart()
    }, Yi.isAtEnd = function (e) {
        return !!e && e.isAtEnd()
    }, Yi.isTextPosition = function (e) {
        return !!e && Do.isText(e.container())
    }, Yi.isElementPosition = function (e) {
        return !1 === Yi.isTextPosition(e)
    };
    var Nu, Eu, Su = wu,
        Tu = Do.isText,
        ku = Do.isBogus,
        Au = pi.nodeIndex,
        _u = function (e) {
            var t = e.parentNode;
            return ku(t) ? _u(t) : t
        },
        Ru = function (e) {
            return e ? jt.reduce(e.childNodes, function (e, t) {
                return ku(t) && "BR" !== t.nodeName ? e = e.concat(Ru(t)) : e.push(t), e
            }, []) : []
        },
        Du = function (t) {
            return function (e) {
                return t === e
            }
        },
        Bu = function (e) {
            var t, r, n, o;
            return (Tu(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = Ru(_u(t = e)), n = jt.findIndex(r, Du(t), t), r = r.slice(0, n + 1), o = jt.reduce(r, function (e, t, n) {
                return Tu(t) && Tu(r[n - 1]) && e++, e
            }, 0), r = jt.filter(r, Do.matchNodeNames(t.nodeName)), (n = jt.findIndex(r, Du(t), t)) - o) + "]"
        },
        Ou = function (e, t) {
            var n, r, o, i, a, u = [];
            return n = t.container(), r = t.offset(), Tu(n) ? o = function (e, t) {
                for (;
                    (e = e.previousSibling) && Tu(e);) t += e.data.length;
                return t
            }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(Bu(n)), a = function (e, t, n) {
                var r = [];
                for (t = t.parentNode; !(t === e || n && n(t)); t = t.parentNode) r.push(t);
                return r
            }(e, n), a = jt.filter(a, ya.negate(Do.isBogus)), (u = u.concat(jt.map(a, function (e) {
                return Bu(e)
            }))).reverse().join("/") + "," + o
        },
        Pu = function (e, t) {
            var n, r, o;
            return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = jt.reduce(t, function (e, t) {
                return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), n = e, r = t[1], o = parseInt(t[2], 10), i = Ru(n), i = jt.filter(i, function (e, t) {
                    return !Tu(e) || !Tu(i[t - 1])
                }), (i = jt.filter(i, Do.matchNodeNames(r)))[o]) : null;
                var n, r, o, i
            }, e)) ? Tu(r) ? function (e, t) {
                for (var n, r = e, o = 0; Tu(r);) {
                    if (n = r.data.length, o <= t && t <= o + n) {
                        e = r, t -= o;
                        break
                    }
                    if (!Tu(r.nextSibling)) {
                        e = r, t = n;
                        break
                    }
                    o += n, r = r.nextSibling
                }
                return Tu(e) && t > e.data.length && (t = e.data.length), Su(e, t)
            }(r, parseInt(o, 10)) : (o = "after" === o ? Au(r) + 1 : Au(r), Su(r.parentNode, o)) : null) : null
        },
        Lu = Do.isContentEditableFalse,
        Iu = function (e, t, n, r, o) {
            var i, a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                c = 0,
                l = e.getRoot();
            for (Do.isText(a) ? s.push(n ? function (e, t, n) {
                    var r, o;
                    for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && Do.isText(r); r = r.previousSibling) o += e(r.data).length;
                    return o
                }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
            return s
        },
        Mu = function (e) {
            Do.isText(e) && 0 === e.data.length && e.parentNode.removeChild(e)
        },
        Fu = function (e, t, n) {
            var r = 0;
            return Yt.each(e.select(t), function (e) {
                if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++
            }), r
        },
        Uu = function (e, t) {
            var n, r, o, i = t ? "start" : "end";
            n = e[i + "Container"], r = e[i + "Offset"], Do.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r))
        },
        zu = function (e) {
            return Uu(e, !0), Uu(e, !1), e
        },
        Vu = function (e, t) {
            var n;
            if (Do.isElement(e) && (e = eu(e, t), Lu(e))) return e;
            if (Aa(e)) {
                if (Do.isText(e) && Ta(e) && (e = e.parentNode), n = e.previousSibling, Lu(n)) return n;
                if (n = e.nextSibling, Lu(n)) return n
            }
        },
        qu = function (e, t, n) {
            var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng();
            if (Lu(r) || "IMG" === o) return {
                name: o,
                index: Fu(n.dom, o, r)
            };
            var a, u, s, c, l, f, d, m = Vu((a = i).startContainer, a.startOffset) || Vu(a.endContainer, a.endOffset);
            return m ? {
                name: o = m.tagName,
                index: Fu(n.dom, o, m)
            } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = Iu(f, u, c, l, !0), s.isCollapsed() || (d.end = Iu(f, u, c, l, !1)), d)
        },
        Hu = function (e, t, n) {
            var r = {
                "data-mce-type": "bookmark",
                id: t,
                style: "overflow:hidden;line-height:0px"
            };
            return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r)
        },
        ju = function (e, t) {
            var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName;
            if ("IMG" === u) return {
                name: u,
                index: Fu(n, u, a)
            };
            var s = zu(r.cloneRange());
            if (!i) {
                s.collapse(!1);
                var c = Hu(n, o + "_end", t);
                s.insertNode(c), Mu(c.nextSibling)
            }(r = zu(r)).collapse(!0);
            var l = Hu(n, o + "_start", t);
            return r.insertNode(l), Mu(l.previousSibling), e.moveToBookmark({
                id: o,
                keep: 1
            }), {
                id: o
            }
        },
        $u = {
            getBookmark: function (e, t, n) {
                return 2 === t ? qu(Na, n, e) : 3 === t ? (o = (r = e).getRng(), {
                    start: Ou(r.dom.getRoot(), Su.fromRangeStart(o)),
                    end: Ou(r.dom.getRoot(), Su.fromRangeEnd(o))
                }) : t ? {
                    rng: e.getRng()
                } : ju(e, !1);
                var r, o
            },
            getUndoBookmark: b(qu, j, !0),
            getPersistentBookmark: ju
        },
        Wu = "_mce_caret",
        Ku = function (e) {
            return Do.isElement(e) && e.id === Wu
        },
        Xu = function (e, t) {
            for (; t && t !== e;) {
                if (t.id === Wu) return t;
                t = t.parentNode
            }
            return null
        },
        Yu = Do.isElement,
        Gu = Do.isText,
        Ju = function (e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        },
        Qu = function (e, t) {
            0 === t.length ? Ju(e) : e.nodeValue = t
        },
        Zu = function (e) {
            var t = Na(e);
            return {
                count: e.length - t.length,
                text: t
            }
        },
        es = function (e, t) {
            return rs(e), t
        },
        ts = function (e, t) {
            var n, r, o, i = t.container(),
                a = (n = ne(i.childNodes), r = e, o = L(n, r), -1 === o ? A.none() : A.some(o)).map(function (e) {
                    return e < t.offset() ? Su(i, t.offset() - 1) : t
                }).getOr(t);
            return rs(e), a
        },
        ns = function (e, t) {
            return Gu(e) && t.container() === e ? (r = t, o = Zu((n = e).data.substr(0, r.offset())), i = Zu(n.data.substr(r.offset())), 0 < (a = o.text + i.text).length ? (Qu(n, a), Su(n, r.offset() - o.count)) : r) : es(e, t);
            var n, r, o, i, a
        },
        rs = function (e) {
            if (Yu(e) && Aa(e) && (_a(e) ? e.removeAttribute("data-mce-caret") : Ju(e)), Gu(e)) {
                var t = Na(function (e) {
                    try {
                        return e.nodeValue
                    } catch (t) {
                        return ""
                    }
                }(e));
                Qu(e, t)
            }
        },
        os = {
            removeAndReposition: function (e, t) {
                return Su.isTextPosition(t) ? ns(e, t) : (n = e, (r = t).container() === n.parentNode ? ts(n, r) : es(n, r));
                var n, r
            },
            remove: rs
        },
        is = Do.isContentEditableTrue,
        as = Do.isContentEditableFalse,
        us = function (e, t, n, r, o) {
            return t._selectionOverrides.showCaret(e, n, r, o)
        },
        ss = function (e, t) {
            var n, r;
            return e.fire("BeforeObjectSelected", {
                target: t
            }).isDefaultPrevented() ? null : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r)
        },
        cs = function (e, t, n) {
            var r = qc(1, e.getBody(), t),
                o = Su.fromRangeStart(r),
                i = o.getNode();
            if (as(i)) return us(1, e, i, !o.isAtEnd(), !1);
            var a = o.getNode(!0);
            if (as(a)) return us(1, e, a, !1, !1);
            var u = e.dom.getParent(o.getNode(), function (e) {
                return as(e) || is(e)
            });
            return as(u) ? us(1, e, u, !1, n) : null
        },
        ls = function (e, t, n) {
            if (!t || !t.collapsed) return t;
            var r = cs(e, t, n);
            return r || t
        };
    (Eu = Nu || (Nu = {}))[Eu.Backwards = -1] = "Backwards", Eu[Eu.Forwards = 1] = "Forwards";
    var fs, ds, ms = Do.isContentEditableFalse,
        gs = Do.isText,
        ps = Do.isElement,
        hs = Do.isBr,
        vs = ja,
        bs = function (e) {
            return Va(e) || !!$a(t = e) && !0 !== jt.reduce(t.getElementsByTagName("*"), function (e, t) {
                return e || Ia(t)
            }, !1);
            var t
        },
        ys = Wa,
        Cs = function (e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        },
        xs = function (e, t) {
            if (Dc(e)) {
                if (vs(t.previousSibling) && !gs(t.previousSibling)) return Su.before(t);
                if (gs(t)) return Su(t, 0)
            }
            if (Bc(e)) {
                if (vs(t.nextSibling) && !gs(t.nextSibling)) return Su.after(t);
                if (gs(t)) return Su(t, t.data.length)
            }
            return Bc(e) ? hs(t) ? Su.before(t) : Su.after(t) : Su.before(t)
        },
        ws = function (e, t, n) {
            var r, o, i, a, u;
            if (!ps(n) || !t) return null;
            if (t.isEqual(Su.after(n)) && n.lastChild) {
                if (u = Su.after(n.lastChild), Bc(e) && vs(n.lastChild) && ps(n.lastChild)) return hs(n.lastChild) ? Su.before(n.lastChild) : u
            } else u = t;
            var s, c, l, f = u.container(),
                d = u.offset();
            if (gs(f)) {
                if (Bc(e) && 0 < d) return Su(f, --d);
                if (Dc(e) && d < f.length) return Su(f, ++d);
                r = f
            } else {
                if (Bc(e) && 0 < d && (o = Cs(f, d - 1), vs(o))) return !bs(o) && (i = Pc(o, e, ys, o)) ? gs(i) ? Su(i, i.data.length) : Su.after(i) : gs(o) ? Su(o, o.data.length) : Su.before(o);
                if (Dc(e) && d < f.childNodes.length && (o = Cs(f, d), vs(o))) return hs(o) && n.lastChild === o ? null : (s = o, c = n, Do.isBr(s) && (l = ws(1, Su.after(s), c)) && !Ic(Su.before(s), Su.before(l), c) ? ws(e, Su.after(o), n) : !bs(o) && (i = Pc(o, e, ys, o)) ? gs(i) ? Su(i, 0) : Su.before(i) : gs(o) ? Su(o, 0) : Su.after(o));
                r = o || u.getNode()
            }
            return (Dc(e) && u.isAtEnd() || Bc(e) && u.isAtStart()) && (r = Pc(r, e, ya.constant(!0), n, !0), ys(r, n)) ? xs(e, r) : (o = Pc(r, e, ys, n), !(a = jt.last(jt.filter(function (e, t) {
                for (var n = []; e && e !== t;) n.push(e), e = e.parentNode;
                return n
            }(f, n), ms))) || o && a.contains(o) ? o ? xs(e, o) : null : u = Dc(e) ? Su.after(a) : Su.before(a))
        },
        Ns = function (t) {
            return {
                next: function (e) {
                    return ws(Nu.Forwards, e, t)
                },
                prev: function (e) {
                    return ws(Nu.Backwards, e, t)
                }
            }
        };
    (ds = fs || (fs = {}))[ds.Br = 0] = "Br", ds[ds.Block = 1] = "Block", ds[ds.Wrap = 2] = "Wrap", ds[ds.Eol = 3] = "Eol";
    var Es, Ss, Ts, ks, As, _s = function (e, t) {
            return e === Nu.Backwards ? t.reverse() : t
        },
        Rs = function (e, t, n, r) {
            for (var o, i, a, u, s, c, l = Ns(n), f = r, d = []; f && (s = l, c = f, o = t === Nu.Forwards ? s.next(c) : s.prev(c));) {
                if (Do.isBr(o.getNode(!1))) return t === Nu.Forwards ? {
                    positions: _s(t, d).concat([o]),
                    breakType: fs.Br,
                    breakAt: A.some(o)
                } : {
                    positions: _s(t, d),
                    breakType: fs.Br,
                    breakAt: A.some(o)
                };
                if (o.isVisible()) {
                    if (e(f, o)) {
                        var m = (i = t, a = f, u = o, Do.isBr(u.getNode(i === Nu.Forwards)) ? fs.Br : !1 === Ic(a, u) ? fs.Block : fs.Wrap);
                        return {
                            positions: _s(t, d),
                            breakType: m,
                            breakAt: A.some(o)
                        }
                    }
                    d.push(o), f = o
                } else f = o
            }
            return {
                positions: _s(t, d),
                breakType: fs.Eol,
                breakAt: A.none()
            }
        },
        Ds = function (n, r, o, e) {
            return r(o, e).breakAt.map(function (e) {
                var t = r(o, e).positions;
                return n === Nu.Backwards ? t.concat(e) : [e].concat(t)
            }).getOr([])
        },
        Bs = function (e, i) {
            return z(e, function (e, o) {
                return e.fold(function () {
                    return A.some(o)
                }, function (r) {
                    return ru([ee(r.getClientRects()), ee(o.getClientRects())], function (e, t) {
                        var n = Math.abs(i - e.left);
                        return Math.abs(i - t.left) <= n ? o : r
                    }).or(e)
                })
            }, A.none())
        },
        Os = function (t, e) {
            return ee(e.getClientRects()).bind(function (e) {
                return Bs(t, e.left)
            })
        },
        Ps = b(Rs, wu.isAbove, -1),
        Ls = b(Rs, wu.isBelow, 1),
        Is = b(Ds, -1, Ps),
        Ms = b(Ds, 1, Ls),
        Fs = function (e, t, n, r, o) {
            var i, a, u, s, c = Ki(er.fromDom(n), "td,th").map(function (e) {
                    return e.dom()
                }),
                l = U((i = e, G(c, function (e) {
                    var t, n, r = (t = e.getBoundingClientRect(), n = -1, {
                        left: t.left - n,
                        top: t.top - n,
                        right: t.right + 2 * n,
                        bottom: t.bottom + 2 * n,
                        width: t.width + n,
                        height: t.height + n
                    });
                    return [{
                        x: r.left,
                        y: i(r),
                        cell: e
                    }, {
                        x: r.right,
                        y: i(r),
                        cell: e
                    }]
                })), function (e) {
                    return t(e, o)
                });
            return (a = l, u = r, s = o, z(a, function (e, r) {
                return e.fold(function () {
                    return A.some(r)
                }, function (e) {
                    var t = Math.sqrt(Math.abs(e.x - u) + Math.abs(e.y - s)),
                        n = Math.sqrt(Math.abs(r.x - u) + Math.abs(r.y - s));
                    return A.some(n < t ? r : e)
                })
            }, A.none())).map(function (e) {
                return e.cell
            })
        },
        Us = b(Fs, function (e) {
            return e.bottom
        }, function (e, t) {
            return e.y < t
        }),
        zs = b(Fs, function (e) {
            return e.top
        }, function (e, t) {
            return e.y > t
        }),
        Vs = function (t, n) {
            return ee(n.getClientRects()).bind(function (e) {
                return Us(t, e.left, e.top)
            }).bind(function (e) {
                return Os((t = e, rl.lastPositionIn(t).map(function (e) {
                    return Ps(t, e).positions.concat(e)
                }).getOr([])), n);
                var t
            })
        },
        qs = function (t, n) {
            return te(n.getClientRects()).bind(function (e) {
                return zs(t, e.left, e.top)
            }).bind(function (e) {
                return Os((t = e, rl.firstPositionIn(t).map(function (e) {
                    return [e].concat(Ls(t, e).positions)
                }).getOr([])), n);
                var t
            })
        },
        Hs = function (e) {
            for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
            return {
                x: t,
                y: n
            }
        },
        js = function (e, t, n) {
            var r, o, i, a, u, s = e.dom,
                c = s.getRoot(),
                l = 0;
            if (u = {
                    elm: t,
                    alignToTop: n
                }, e.fire("scrollIntoView", u), !u.isDefaultPrevented() && Do.isElement(t)) {
                if (!1 === n && (l = t.offsetHeight), "BODY" !== c.nodeName) {
                    var f = e.selection.getScrollContainer();
                    if (f) return r = Hs(t).y - Hs(f).y + l, a = f.clientHeight, void((r < (i = f.scrollTop) || i + a < r + 25) && (f.scrollTop = r < i ? r : r - a + 25))
                }
                o = s.getViewPort(e.getWin()), r = s.getPos(t).y + l, i = o.y, a = o.h, (r < o.y || i + a < r + 25) && e.getWin().scrollTo(0, r < i ? r : r - a + 25)
            }
        },
        $s = function (d, e) {
            ee(wu.fromRangeStart(e).getClientRects()).each(function (e) {
                var t, n, r, o, i, a, u, s, c, l = function (e) {
                        if (e.inline) return e.getBody().getBoundingClientRect();
                        var t = e.getWin();
                        return {
                            left: 0,
                            right: t.innerWidth,
                            top: 0,
                            bottom: t.innerHeight,
                            width: t.innerWidth,
                            height: t.innerHeight
                        }
                    }(d),
                    f = {
                        x: (i = t = l, a = n = e, a.left > i.left && a.right < i.right ? 0 : a.left < i.left ? a.left - i.left : a.right - i.right),
                        y: (r = t, o = n, o.top > r.top && o.bottom < r.bottom ? 0 : o.top < r.top ? o.top - r.top : o.bottom - r.bottom)
                    };
                s = 0 !== f.x ? 0 < f.x ? f.x + 4 : f.x - 4 : 0, c = 0 !== f.y ? 0 < f.y ? f.y + 4 : f.y - 4 : 0, (u = d).inline ? (u.getBody().scrollLeft += s, u.getBody().scrollTop += c) : u.getWin().scrollBy(s, c)
            })
        },
        Ws = function (e, t, n) {
            var r = e.getParam(t, n);
            if (-1 !== r.indexOf("=")) {
                var o = e.getParam(t, "", "hash");
                return o.hasOwnProperty(e.id) ? o[e.id] : n
            }
            return r
        },
        Ks = function (e) {
            return e.getParam("iframe_attrs", {})
        },
        Xs = function (e) {
            return e.getParam("doctype", "<!DOCTYPE html>")
        },
        Ys = function (e) {
            return e.getParam("document_base_url", "")
        },
        Gs = function (e) {
            return Ws(e, "body_id", "tinymce")
        },
        Js = function (e) {
            return Ws(e, "body_class", "")
        },
        Qs = function (e) {
            return e.getParam("content_security_policy", "")
        },
        Zs = function (e) {
            return e.getParam("br_in_pre", !0)
        },
        ec = function (e) {
            if (e.getParam("force_p_newlines", !1)) return "p";
            var t = e.getParam("forced_root_block", "p");
            return !1 === t ? "" : t
        },
        tc = function (e) {
            return e.getParam("forced_root_block_attrs", {})
        },
        nc = function (e) {
            return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
        },
        rc = function (e) {
            return e.getParam("no_newline_selector", "")
        },
        oc = function (e) {
            return e.getParam("keep_styles", !0)
        },
        ic = function (e) {
            return e.getParam("end_container_on_empty_block", !1)
        },
        ac = function (e) {
            return Yt.explode(e.getParam("font_size_style_values", ""))
        },
        uc = function (e) {
            return Yt.explode(e.getParam("font_size_classes", ""))
        },
        sc = Qn.detect().browser,
        cc = function () {
            return sc.isIE() || sc.isEdge() || sc.isFirefox()
        },
        lc = function (e, t) {
            e.selection.setRng(t), $s(e, t)
        },
        fc = function (t, n, e) {
            var r = t(n, e);
            return r.breakType === fs.Wrap && 0 === r.positions.length ? r.breakAt.map(function (e) {
                return t(n, e).breakAt.isNone()
            }).getOr(!0) : r.breakAt.isNone()
        },
        dc = ya.curry(fc, Ps),
        mc = ya.curry(fc, Ls),
        gc = function (e, t, n, r) {
            var o, i, a, u, s = e.selection.getRng(),
                c = t ? 1 : -1;
            if (cc() && (o = t, i = s, a = n, u = Su.fromRangeStart(i), rl.positionIn(!o, a).map(function (e) {
                    return e.isEqual(u)
                }).getOr(!1))) {
                var l = us(c, e, n, !t, !0);
                return lc(e, l), !0
            }
            return !1
        },
        pc = function (e, t) {
            var n = t.getNode(e);
            return Do.isElement(n) && "TABLE" === n.nodeName ? A.some(n) : A.none()
        },
        hc = function (u, s, c) {
            var e = pc(!!s, c),
                t = !1 === s;
            e.fold(function () {
                return lc(u, c.toRange())
            }, function (a) {
                return rl.positionIn(t, u.getBody()).filter(function (e) {
                    return e.isEqual(c)
                }).fold(function () {
                    return lc(u, c.toRange())
                }, function (e) {
                    return n = s, o = a, t = c, void((i = ec(r = u)) ? r.undoManager.transact(function () {
                        var e = er.fromTag(i);
                        hr.setAll(e, tc(r)), Ti.append(e, er.fromTag("br")), n ? Ti.after(er.fromDom(o), e) : Ti.before(er.fromDom(o), e);
                        var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), lc(r, t)
                    }) : lc(r, t.toRange()));
                    var n, r, o, t, i
                })
            })
        },
        vc = function (e, t, n, r) {
            var o, i, a, u, s, c, l = e.selection.getRng(),
                f = Su.fromRangeStart(l),
                d = e.getBody();
            if (!t && dc(r, f)) {
                var m = (u = d, Vs(s = n, c = f).orThunk(function () {
                    return ee(c.getClientRects()).bind(function (e) {
                        return Bs(Is(u, Su.before(s)), e.left)
                    })
                }).getOr(Su.before(s)));
                return hc(e, t, m), !0
            }
            return !(!t || !mc(r, f)) && (o = d, m = qs(i = n, a = f).orThunk(function () {
                return ee(a.getClientRects()).bind(function (e) {
                    return Bs(Ms(o, Su.after(i)), e.left)
                })
            }).getOr(Su.after(i)), hc(e, t, m), !0)
        },
        bc = function (t, n) {
            return function () {
                return A.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function (e) {
                    return A.from(t.dom.getParent(e, "table")).map(function (e) {
                        return gc(t, n, e)
                    })
                }).getOr(!1)
            }
        },
        yc = function (n, r) {
            return function () {
                return A.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function (t) {
                    return A.from(n.dom.getParent(t, "table")).map(function (e) {
                        return vc(n, r, e, t)
                    })
                }).getOr(!1)
            }
        },
        Cc = Do.isContentEditableFalse,
        xc = function (e, t, n) {
            var r, o, i, a, u, s = Ya(t.getBoundingClientRect(), n);
            return "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, i = e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, i = e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s
        },
        wc = function (a, u, e) {
            var t, s, c = Bi(A.none()),
                l = function () {
                    ! function (e) {
                        var t, n, r, o, i;
                        for (t = pn("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, Pa(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, Oa(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1))
                    }(a), s && (os.remove(s), s = null), c.get().each(function (e) {
                        pn(e.caret).remove(), c.set(A.none())
                    }), clearInterval(t)
                },
                f = function () {
                    t = Le.setInterval(function () {
                        e() ? pn("div.mce-visual-caret", a).toggleClass("mce-visual-caret-hidden") : pn("div.mce-visual-caret", a).addClass("mce-visual-caret-hidden")
                    }, 500)
                };
            return {
                show: function (t, e) {
                    var n, r, o;
                    if (l(), o = e, Do.isElement(o) && /^(TD|TH)$/i.test(o.tagName)) return null;
                    if (!u(e)) return s = function (e, t) {
                        var n, r, o;
                        if (r = e.ownerDocument.createTextNode(wa), o = e.parentNode, t) {
                            if (n = e.previousSibling, Sa(n)) {
                                if (Aa(n)) return n;
                                if (Pa(n)) return n.splitText(n.data.length - 1)
                            }
                            o.insertBefore(r, e)
                        } else {
                            if (n = e.nextSibling, Sa(n)) {
                                if (Aa(n)) return n;
                                if (Oa(n)) return n.splitText(1), n
                            }
                            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r)
                        }
                        return r
                    }(e, t), r = e.ownerDocument.createRange(), Cc(s.nextSibling) ? (r.setStart(s, 0), r.setEnd(s, 0)) : (r.setStart(s, 1), r.setEnd(s, 1)), r;
                    s = Ba("p", e, t), n = xc(a, e, t), pn(s).css("top", n.top);
                    var i = pn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];
                    return c.set(A.some({
                        caret: i,
                        element: e,
                        before: t
                    })), c.get().each(function (e) {
                        t && pn(e.caret).addClass("mce-visual-caret-before")
                    }), f(), (r = e.ownerDocument.createRange()).setStart(s, 0), r.setEnd(s, 0), r
                },
                hide: l,
                getCss: function () {
                    return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
                },
                reposition: function () {
                    c.get().each(function (e) {
                        var t = xc(a, e.element, e.before);
                        pn(e.caret).css(t)
                    })
                },
                destroy: function () {
                    return Le.clearInterval(t)
                }
            }
        },
        Nc = function (e) {
            return Cc(e) || Do.isTable(e) && cc()
        },
        Ec = Do.isContentEditableFalse,
        Sc = Do.matchStyleValues("display", "block table table-cell table-caption list-item"),
        Tc = Aa,
        kc = Ta,
        Ac = ya.curry,
        _c = Do.isElement,
        Rc = ja,
        Dc = function (e) {
            return 0 < e
        },
        Bc = function (e) {
            return e < 0
        },
        Oc = function (e, t) {
            for (var n; n = e(t);)
                if (!kc(n)) return n;
            return null
        },
        Pc = function (e, t, n, r, o) {
            var i = new oo(e, r);
            if (Bc(t)) {
                if ((Ec(e) || kc(e)) && n(e = Oc(i.prev, !0))) return e;
                for (; e = Oc(i.prev, o);)
                    if (n(e)) return e
            }
            if (Dc(t)) {
                if ((Ec(e) || kc(e)) && n(e = Oc(i.next, !0))) return e;
                for (; e = Oc(i.next, o);)
                    if (n(e)) return e
            }
            return null
        },
        Lc = function (e, t) {
            for (; e && e !== t;) {
                if (Sc(e)) return e;
                e = e.parentNode
            }
            return null
        },
        Ic = function (e, t, n) {
            return Lc(e.container(), n) === Lc(t.container(), n)
        },
        Mc = function (e, t) {
            var n, r;
            return t ? (n = t.container(), r = t.offset(), _c(n) ? n.childNodes[r + e] : null) : null
        },
        Fc = function (e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        },
        Uc = function (e, t, n) {
            var r, o, i, a;
            for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
                if (r = n[o], Tc(r) && (r = r[o]), Ec(r)) {
                    if (a = n, Lc(r, i = t) === Lc(a, i)) return r;
                    break
                }
                if (Rc(r)) break;
                n = n.parentNode
            }
            return null
        },
        zc = Ac(Fc, !0),
        Vc = Ac(Fc, !1),
        qc = function (e, t, n) {
            var r, o, i, a, u = Ac(Uc, !0, t),
                s = Ac(Uc, !1, t);
            if (o = n.startContainer, i = n.startOffset, Ta(o)) {
                if (_c(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, Nc(r))) return zc(r);
                if ("after" === a && (r = o.previousSibling, Nc(r))) return Vc(r)
            }
            if (!n.collapsed) return n;
            if (Do.isText(o)) {
                if (Tc(o)) {
                    if (1 === e) {
                        if (r = s(o)) return zc(r);
                        if (r = u(o)) return Vc(r)
                    }
                    if (-1 === e) {
                        if (r = u(o)) return Vc(r);
                        if (r = s(o)) return zc(r)
                    }
                    return n
                }
                if (Pa(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? zc(r) : n;
                if (Oa(o) && i <= 1) return -1 === e && (r = u(o)) ? Vc(r) : n;
                if (i === o.data.length) return (r = s(o)) ? zc(r) : n;
                if (0 === i) return (r = u(o)) ? Vc(r) : n
            }
            return n
        },
        Hc = function (e, t) {
            var n = Mc(e, t);
            return Ec(n) && !Do.isBogusAll(n)
        },
        jc = function (e, t) {
            return Do.isTable(Mc(e, t))
        },
        $c = function (e, t) {
            return A.from(Mc(e ? 0 : -1, t)).filter(Ec)
        },
        Wc = function (e, t, n) {
            var r = qc(e, t, n);
            return -1 === e ? wu.fromRangeStart(r) : wu.fromRangeEnd(r)
        },
        Kc = Ac(Hc, 0),
        Xc = Ac(Hc, -1),
        Yc = Ac(jc, 0),
        Gc = Ac(jc, -1),
        Jc = function (e) {
            return Su.isTextPosition(e) ? 0 === e.offset() : ja(e.getNode())
        },
        Qc = function (e) {
            if (Su.isTextPosition(e)) {
                var t = e.container();
                return e.offset() === t.data.length
            }
            return ja(e.getNode(!0))
        },
        Zc = function (e, t) {
            return !Su.isTextPosition(e) && !Su.isTextPosition(t) && e.getNode() === t.getNode(!0)
        },
        el = function (e, t, n) {
            return e ? !Zc(t, n) && (r = t, !(!Su.isTextPosition(r) && Do.isBr(r.getNode()))) && Qc(t) && Jc(n) : !Zc(n, t) && Jc(t) && Qc(n);
            var r
        },
        tl = function (e, t, n) {
            var r = Ns(t);
            return A.from(e ? r.next(n) : r.prev(n))
        },
        nl = function (e, t) {
            var n, r, o, i, a, u = e ? t.firstChild : t.lastChild;
            return Do.isText(u) ? A.some(Su(u, e ? 0 : u.data.length)) : u ? ja(u) ? A.some(e ? Su.before(u) : (a = u, Do.isBr(a) ? Su.before(a) : Su.after(a))) : (r = t, o = u, i = (n = e) ? Su.before(o) : Su.after(o), tl(n, r, i)) : A.none()
        },
        rl = {
            fromPosition: tl,
            nextPosition: b(tl, !0),
            prevPosition: b(tl, !1),
            navigate: function (t, n, r) {
                return tl(t, n, r).bind(function (e) {
                    return Ic(r, e, n) && el(t, r, e) ? tl(t, n, e) : A.some(e)
                })
            },
            positionIn: nl,
            firstPositionIn: b(nl, !0),
            lastPositionIn: b(nl, !1)
        },
        ol = function (e, t) {
            return !e.isBlock(t) || t.innerHTML || Re.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
        },
        il = function (e, t) {
            return rl.lastPositionIn(e).fold(function () {
                return !1
            }, function (e) {
                return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0
            })
        },
        al = function (e, t, n) {
            return !(!1 !== t.hasChildNodes() || !Xu(e, t) || (o = n, i = (r = t).ownerDocument.createTextNode(wa), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 0));
            var r, o, i
        },
        ul = function (e, t, n, r) {
            var o, i, a, u, s = n[t ? "start" : "end"],
                c = e.getRoot();
            if (s) {
                for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                    if (u = i.childNodes, al(c, i, r)) return !0;
                    if (s[o] > u.length - 1) return !!al(c, i, r) || il(i, r);
                    i = u[s[o]]
                }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
            }
            return !0
        },
        sl = function (e) {
            return Do.isText(e) && 0 < e.data.length
        },
        cl = function (e, t, n) {
            var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
                l = n.keep;
            if (c) {
                if (r = c.parentNode, "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : sl(c.nextSibling) ? (r = c.nextSibling, o = 0) : sl(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c) + 1) : o = e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, o = 1) : sl(c.previousSibling) ? (r = c.previousSibling, o = c.previousSibling.data.length) : (r = c.parentNode, o = e.nodeIndex(c)) : o = e.nodeIndex(c), u = r, s = o, !l) {
                    for (a = c.previousSibling, i = c.nextSibling, Yt.each(Yt.grep(c.childNodes), function (e) {
                            Do.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                    a && i && a.nodeType === i.nodeType && Do.isText(a) && !Re.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
                }
                return A.some(Su(u, s))
            }
            return A.none()
        },
        ll = function (e, t) {
            var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b = e.dom;
            if (t) {
                if (v = t, Yt.isArray(v.start)) return p = t, h = (g = b).createRng(), ul(g, !0, p, h) && ul(g, !1, p, h) ? A.some(h) : A.none();
                if ("string" == typeof t.start) return A.some((f = t, d = (l = b).createRng(), m = Pu(l.getRoot(), f.start), d.setStart(m.container(), m.offset()), m = Pu(l.getRoot(), f.end), d.setEnd(m.container(), m.offset()), d));
                if (t.hasOwnProperty("id")) return s = cl(o = b, "start", i = t), c = cl(o, "end", i), ru([s, (a = c, u = s, a.isSome() ? a : u)], function (e, t) {
                    var n = o.createRng();
                    return n.setStart(ol(o, e.container()), e.offset()), n.setEnd(ol(o, t.container()), t.offset()), n
                });
                if (t.hasOwnProperty("name")) return n = b, r = t, A.from(n.select(r.name)[r.index]).map(function (e) {
                    var t = n.createRng();
                    return t.selectNode(e), t
                });
                if (t.hasOwnProperty("rng")) return A.some(t.rng)
            }
            return A.none()
        },
        fl = function (e, t, n) {
            return $u.getBookmark(e, t, n)
        },
        dl = function (t, e) {
            ll(t, e).each(function (e) {
                t.setRng(e)
            })
        },
        ml = function (e) {
            return Do.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        },
        gl = function (e) {
            return e && /^(IMG)$/.test(e.nodeName)
        },
        pl = function (e) {
            return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
        },
        hl = function (e, t, n) {
            return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t
        },
        vl = {
            isInlineBlock: gl,
            moveStart: function (e, t, n) {
                var r, o, i, a = n.startOffset,
                    u = n.startContainer;
                if ((n.startContainer !== n.endContainer || !gl(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType)
                    for (a < (i = u.childNodes).length ? r = new oo(u = i[a], e.getParent(u, e.isBlock)) : (r = new oo(u = i[i.length - 1], e.getParent(u, e.isBlock))).next(!0), o = r.current(); o; o = r.next())
                        if (3 === o.nodeType && !pl(o)) return n.setStart(o, 0), void t.setRng(n)
            },
            getNonWhiteSpaceSibling: function (e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 === e.nodeType || !pl(e)) return e
            },
            isTextBlock: function (e, t) {
                return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()]
            },
            isValid: function (e, t, n) {
                return e.schema.isValidChild(t, n)
            },
            isWhiteSpaceNode: pl,
            replaceVars: function (e, n) {
                return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function (e, t) {
                    return n[t] || e
                })), e
            },
            isEq: function (e, t) {
                return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()
            },
            normalizeStyleValue: hl,
            getStyle: function (e, t, n) {
                return hl(e, e.getStyle(t, n), n)
            },
            getTextDecoration: function (t, e) {
                var n;
                return t.getParent(e, function (e) {
                    return (n = t.getStyle(e, "text-decoration")) && "none" !== n
                }), n
            },
            getParents: function (e, t, n) {
                return e.getParents(t, n, e.getRoot())
            }
        },
        bl = ml,
        yl = vl.getParents,
        Cl = vl.isWhiteSpaceNode,
        xl = vl.isTextBlock,
        wl = function (e, t) {
            for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)(e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
            return {
                node: e,
                offset: t
            }
        },
        Nl = function (e, t) {
            for (var n = t; n;) {
                if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        },
        El = function (e, t, n, r) {
            var o, i, a = n.nodeValue;
            return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 === (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) || t || o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o
        },
        Sl = function (e, t, n, r, o, i) {
            var a, u, s, c;
            if (3 === n.nodeType) {
                if (-1 !== (s = El(o, i, n, r))) return {
                    container: n,
                    offset: s
                };
                c = n
            }
            for (a = new oo(n, e.getParent(n, e.isBlock) || t); u = a[o ? "prev" : "next"]();)
                if (3 === u.nodeType) {
                    if (-1 !== (s = El(o, i, c = u))) return {
                        container: u,
                        offset: s
                    }
                } else if (e.isBlock(u)) break;
            if (c) return {
                container: c,
                offset: r = o ? 0 : c.length
            }
        },
        Tl = function (e, t, n, r, o) {
            var i, a, u, s;
            for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = yl(e, r), a = 0; a < i.length; a++)
                for (u = 0; u < t.length; u++)
                    if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
            return r
        },
        kl = function (t, e, n, r) {
            var o, i = t.dom,
                a = i.getRoot();
            if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) {
                var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(3 === n.nodeType ? n.parentNode : n, function (e) {
                    return e !== a && xl(t, e)
                }, u)
            }
            if (o && e[0].wrapper && (o = yl(i, o, "ul,ol").reverse()[0] || o), !o)
                for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !vl.isEq(o, "br")););
            return o || n
        },
        Al = function (e, t, n, r, o, i, a) {
            var u, s, c, l, f, d;
            if (u = s = a ? n : o, l = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !Cl(u) && (a ? 0 < r : i < u.nodeValue.length)) return u;
            for (;;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (c = s[l]; c; c = c[l])
                    if (!bl(c) && !Cl(c) && ("BR" !== (d = c).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
                if (s === f || s.parentNode === f) {
                    u = s;
                    break
                }
                s = s.parentNode
            }
            return u
        },
        _l = function (e, t, n, r) {
            var o, i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                c = e.dom;
            return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = eu(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = eu(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = Nl(c, i), u = Nl(c, u), (bl(i.parentNode) || bl(i)) && 3 === (i = (i = bl(i) ? i : i.parentNode).nextSibling || i).nodeType && (a = 0), (bl(u.parentNode) || bl(u)) && 3 === (u = (u = bl(u) ? u : u.parentNode).previousSibling || u).nodeType && (s = u.length), n[0].inline && (t.collapsed && ((o = Sl(c, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = Sl(c, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), u = r ? u : function (e, t) {
                var n = wl(e, t);
                if (n.node) {
                    for (; n.node && 0 === n.offset && n.node.previousSibling;) n = wl(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1)
                }
                return e
            }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = Al(c, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = Al(c, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = Tl(c, n, t, i, "previousSibling"), u = Tl(c, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = kl(e, n, i, "previousSibling"), u = kl(e, n, u, "nextSibling"), n[0].block && (c.isBlock(i) || (i = Al(c, n, i, a, u, s, !0)), c.isBlock(u) || (u = Al(c, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = c.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = c.nodeIndex(u) + 1, u = u.parentNode), {
                startContainer: i,
                startOffset: a,
                endContainer: u,
                endOffset: s
            }
        },
        Rl = Yt.each,
        Dl = function (e, t, o) {
            var n, r, i, a, u, s, c, l = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                m = t.endOffset;
            if (0 < (c = e.select("td[data-mce-selected],th[data-mce-selected]")).length) Rl(c, function (e) {
                o([e])
            });
            else {
                var g, p, h, v = function (e) {
                        var t;
                        return 3 === (t = e[0]).nodeType && t === l && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === m && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                    },
                    b = function (e, t, n) {
                        for (var r = []; e && e !== n; e = e[t]) r.push(e);
                        return r
                    },
                    y = function (e, t) {
                        do {
                            if (e.parentNode === t) return e;
                            e = e.parentNode
                        } while (e)
                    },
                    C = function (e, t, n) {
                        var r = n ? "nextSibling" : "previousSibling";
                        for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = b(a === e ? a : a[r], r)).length && (n || s.reverse(), o(v(s)))
                    };
                if (1 === l.nodeType && l.hasChildNodes() && (l = l.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (p = m, h = (g = d).childNodes, --p > h.length - 1 ? p = h.length - 1 : p < 0 && (p = 0), d = h[p] || g), l === d) return o(v([l]));
                for (n = e.findCommonAncestor(l, d), a = l; a; a = a.parentNode) {
                    if (a === d) return C(l, n, !0);
                    if (a === n) break
                }
                for (a = d; a; a = a.parentNode) {
                    if (a === l) return C(d, n);
                    if (a === n) break
                }
                r = y(l, n) || l, i = y(d, n) || d, C(l, r, !0), (s = b(r === l ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(v(s)), C(d, i)
            }
        },
        Bl = (Es = sr.isText, Ss = "text", Ts = function (e) {
            return Es(e) ? A.from(e.dom().nodeValue) : A.none()
        }, ks = Qn.detect().browser, {
            get: function (e) {
                if (!Es(e)) throw new Error("Can only get " + Ss + " value of a " + Ss + " node");
                return As(e).getOr("")
            },
            getOption: As = ks.isIE() && 10 === ks.version.major ? function (e) {
                try {
                    return Ts(e)
                } catch (Kw) {
                    return A.none()
                }
            } : Ts,
            set: function (e, t) {
                if (!Es(e)) throw new Error("Can only set raw " + Ss + " value of a " + Ss + " node");
                e.dom().nodeValue = t
            }
        }),
        Ol = function (e) {
            return Bl.get(e)
        },
        Pl = function (r, o, i, a) {
            return $r.parent(o).fold(function () {
                return "skipping"
            }, function (e) {
                return "br" === a || (n = o, sr.isText(n) && "\ufeff" === Ol(n)) ? "skipping" : (t = o, sr.isElement(t) && Wi.has(t, oa()) ? "existing" : Ku(o) ? "caret" : vl.isValid(r, i, a) && vl.isValid(r, sr.name(e), i) ? "valid" : "invalid-child");
                var t, n
            })
        },
        Ll = undefined && undefined.__rest || function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
            }
            return n
        },
        Il = function (r, e, t, n, o) {
            var i, a, u = o.uid,
                s = void 0 === u ? (i = "mce-annotation", a = (new Date).getTime(), i + "_" + Math.floor(1e9 * Math.random()) + ++fa + String(a)) : u,
                c = Ll(o, ["uid"]),
                l = [],
                f = er.fromTag("span");
            Wi.add(f, oa()), hr.set(f, "" + aa(), s), hr.set(f, "" + ia(), t);
            var d = n(s, c),
                m = d.attributes,
                g = void 0 === m ? {} : m,
                p = d.classes,
                h = void 0 === p ? [] : p;
            hr.setAll(f, g), da(f, h);
            var v = Bi(A.none()),
                b = function () {
                    v.set(A.none())
                },
                y = function (e) {
                    F(e, C)
                },
                C = function (e) {
                    switch (Pl(r, e, "span", sr.name(e))) {
                        case "invalid-child":
                            b();
                            var t = $r.children(e);
                            y(t), b();
                            break;
                        case "valid":
                            var n = v.get().getOrThunk(function () {
                                var e = pa(f);
                                return l.push(e), v.set(A.some(e)), e
                            });
                            Ti.wrap(e, n)
                    }
                };
            return Dl(r.dom, e, function (e) {
                var t;
                b(), t = $(e, er.fromDom), y(t)
            }), l
        },
        Ml = function (a, u, s, c) {
            a.undoManager.transact(function () {
                var e, t, n, r = a.selection.getRng();
                r.collapsed && (n = _l(e = a, t = r, [{
                    inline: !0
                }], !1), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t));
                var o = $u.getPersistentBookmark(a.selection, !0),
                    i = a.selection.getRng();
                Il(a, i, u, s.decorate, c), a.selection.moveToBookmark(o)
            })
        };

    function Fl(s) {
        var n, r = (n = {}, {
            register: function (e, t) {
                n[e] = {
                    name: e,
                    settings: t
                }
            },
            lookup: function (e) {
                return n.hasOwnProperty(e) ? A.from(n[e]).map(function (e) {
                    return e.settings
                }) : A.none()
            }
        });
        la(s, r);
        var o = ca(s);
        return {
            register: function (e, t) {
                r.register(e, t)
            },
            annotate: function (t, n) {
                r.lookup(t).each(function (e) {
                    Ml(s, t, e, n)
                })
            },
            annotationChanged: function (e, t) {
                o.addListener(e, t)
            },
            remove: function (e) {
                ua(s, A.some(e)).each(function (e) {
                    var t = e.elements;
                    F(t, Ri.unwrap)
                })
            },
            getAll: function (e) {
                var t, n, r, o, i, a, u = (t = s, n = e, r = er.fromDom(t.getBody()), o = Ki(r, "[" + ia() + '="' + n + '"]'), i = {}, F(o, function (e) {
                    var t = hr.get(e, aa()),
                        n = i.hasOwnProperty(t) ? i[t] : [];
                    i[t] = n.concat([e])
                }), i);
                return a = function (e) {
                    return $(e, function (e) {
                        return e.dom()
                    })
                }, fr(u, function (e, t, n) {
                    return {
                        k: t,
                        v: a(e, t, n)
                    }
                })
            }
        }
    }
    var Ul = function (e) {
            return Yt.grep(e.childNodes, function (e) {
                return "LI" === e.nodeName
            })
        },
        zl = function (e) {
            return e && e.firstChild && e.firstChild === e.lastChild && ("\xa0" === (t = e.firstChild).data || Do.isBr(t));
            var t
        },
        Vl = function (e) {
            return 0 < e.length && (!(t = e[e.length - 1]).firstChild || zl(t)) ? e.slice(0, -1) : e;
            var t
        },
        ql = function (e, t) {
            var n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        },
        Hl = function (e, t) {
            var n = Su.after(e),
                r = Ns(t).prev(n);
            return r ? r.toRange() : null
        },
        jl = function (t, e, n) {
            var r, o, i, a, u = t.parentNode;
            return Yt.each(e, function (e) {
                u.insertBefore(e, t)
            }), r = t, o = n, i = Su.before(r), (a = Ns(o).next(i)) ? a.toRange() : null
        },
        $l = function (e, t) {
            var n, r, o, i, a, u, s = t.firstChild,
                c = t.lastChild;
            return s && "meta" === s.name && (s = s.next), c && "mce_marker" === c.attr("id") && (c = c.prev), r = c, u = (n = e).getNonEmptyElements(), r && (r.isEmpty(u) || (o = r, n.getBlockElements()[o.name] && (a = o).firstChild && a.firstChild === a.lastChild && ("br" === (i = o.firstChild).name || "\xa0" === i.value))) && (c = c.prev), !(!s || s !== c || "ul" !== s.name && "ol" !== s.name)
        },
        Wl = function (e, o, i, t) {
            var n, r, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, x, w, N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                E = ql(o, i.startContainer),
                S = Vl(Ul(N.firstChild)),
                T = o.getRoot(),
                k = function (e) {
                    var t = Su.fromRangeStart(i),
                        n = Ns(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t);
                    return !r || ql(o, r.getNode()) !== E
                };
            return k(1) ? jl(E, S, T) : k(2) ? (f = E, d = S, m = T, o.insertAfter(d.reverse(), f), Hl(d[0], m)) : (p = S, h = T, v = g = E, y = (b = i).cloneRange(), C = b.cloneRange(), y.setStartBefore(v), C.setEndAfter(v), x = [y.cloneContents(), C.cloneContents()], (w = g.parentNode).insertBefore(x[0], g), Yt.each(p, function (e) {
                w.insertBefore(e, g)
            }), w.insertBefore(x[1], g), w.removeChild(g), Hl(p[p.length - 1], h))
        },
        Kl = function (e, t) {
            return !!ql(e, t)
        },
        Xl = Yt.each,
        Yl = function (o) {
            this.compare = function (e, t) {
                if (e.nodeName !== t.nodeName) return !1;
                var n = function (n) {
                        var r = {};
                        return Xl(o.getAttribs(n), function (e) {
                            var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                        }), r
                    },
                    r = function (e, t) {
                        var n, r;
                        for (r in e)
                            if (e.hasOwnProperty(r)) {
                                if (void 0 === (n = t[r])) return !1;
                                if (e[r] !== n) return !1;
                                delete t[r]
                            }
                        for (r in t)
                            if (t.hasOwnProperty(r)) return !1;
                        return !0
                    };
                return !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || ml(e) || ml(t))
            }
        },
        Gl = function (e) {
            var t = Ki(e, "br"),
                n = U(function (e) {
                    for (var t = [], n = e.dom(); n;) t.push(er.fromDom(n)), n = n.lastChild;
                    return t
                }(e).slice(-1), mo);
            t.length === n.length && F(n, Ri.remove)
        },
        Jl = function (e) {
            Ri.empty(e), Ti.append(e, er.fromHtml('<br data-mce-bogus="1">'))
        },
        Ql = function (n) {
            $r.lastChild(n).each(function (t) {
                $r.prevSibling(t).each(function (e) {
                    lo(n) && mo(t) && lo(e) && Ri.remove(t)
                })
            })
        },
        Zl = Yt.makeMap;

    function ef(e) {
        var u, s, c, l, f, d = [];
        return u = (e = e || {}).indent, s = Zl(e.indent_before || ""), c = Zl(e.indent_after || ""), l = $o.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, {
            start: function (e, t, n) {
                var r, o, i, a;
                if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t)
                    for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', l(i.value, !0), '"');
                d[d.length] = !n || f ? ">" : " />", n && u && c[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n")
            },
            end: function (e) {
                var t;
                d.push("</", e, ">"), u && c[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n")
            },
            text: function (e, t) {
                0 < e.length && (d[d.length] = t ? e : l(e))
            },
            cdata: function (e) {
                d.push("<![CDATA[", e, "]]>")
            },
            comment: function (e) {
                d.push("\x3c!--", e, "--\x3e")
            },
            pi: function (e, t) {
                t ? d.push("<?", e, " ", l(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n")
            },
            doctype: function (e) {
                d.push("<!DOCTYPE", e, ">", u ? "\n" : "")
            },
            reset: function () {
                d.length = 0
            },
            getContent: function () {
                return d.join("").replace(/\n$/, "")
            }
        }
    }

    function tf(t, g) {
        void 0 === g && (g = ni());
        var p = ef(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function (e) {
                var f, d;
                d = t.validate, f = {
                    3: function (e) {
                        p.text(e.value, e.raw)
                    },
                    8: function (e) {
                        p.comment(e.value)
                    },
                    7: function (e) {
                        p.pi(e.name, e.value)
                    },
                    10: function (e) {
                        p.doctype(e.value)
                    },
                    4: function (e) {
                        p.cdata(e.value)
                    },
                    11: function (e) {
                        if (e = e.firstChild)
                            for (; m(e), e = e.next;);
                    }
                }, p.reset();
                var m = function (e) {
                    var t, n, r, o, i, a, u, s, c, l = f[e.type];
                    if (l) l(e);
                    else {
                        if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, c = g.getElementRule(e.name))) {
                            for (u = 0, s = c.attributesOrder.length; u < s; u++)(o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                                name: o,
                                value: i
                            }));
                            r = a
                        }
                        if (p.start(e.name, r, n), !n) {
                            if (e = e.firstChild)
                                for (; m(e), e = e.next;);
                            p.end(t)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? f[11](e) : m(e), p.getContent()
            }
        }
    }
    var nf = function (a) {
            var u = Su.fromRangeStart(a),
                s = Su.fromRangeEnd(a),
                c = a.commonAncestorContainer;
            return rl.fromPosition(!1, c, s).map(function (e) {
                return !Ic(u, s, c) && Ic(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
                var t, n, r, o, i
            }).getOr(a)
        },
        rf = function (e) {
            return e.collapsed ? e : nf(e)
        },
        of = Do.matchNodeNames("td th"),
        af = function (o, e, t) {
            var n, r, i, a, u, s, c, l, f, d, m, g, p = o.schema.getTextInlineElements(),
                h = o.selection,
                v = o.dom;
            if (/^ | $/.test(e) && (e = function (e) {
                    var t, n, r;
                    t = h.getRng(), n = t.startContainer, r = t.startOffset;
                    var o = function (e) {
                        return n[e] && 3 === n[e].nodeType
                    };
                    return 3 === n.nodeType && (0 < r ? e = e.replace(/^&nbsp;/, " ") : o("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), r < n.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                }(e)), n = o.parser, g = t.merge, r = tf({
                    validate: o.settings.validate
                }, o.schema), m = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = {
                    content: e,
                    format: "html",
                    selection: !0,
                    paste: t.paste
                }, (s = o.fire("BeforeSetContent", s)).isDefaultPrevented()) o.fire("SetContent", {
                content: s.content,
                format: "html",
                selection: !0,
                paste: t.paste
            });
            else {
                -1 === (e = s.content).indexOf("{$caret}") && (e += "{$caret}"), e = e.replace(/\{\$caret\}/, m);
                var b, y, C, x, w = (l = h.getRng()).startContainer || (l.parentElement ? l.parentElement() : null),
                    N = o.getBody();
                w === N && h.isCollapsed() && v.isBlock(N.firstChild) && (b = N.firstChild) && !o.schema.getShortEndedElements()[b.nodeName] && v.isEmpty(N.firstChild) && ((l = v.createRng()).setStart(N.firstChild, 0), l.setEnd(N.firstChild, 0), h.setRng(l)), h.isCollapsed() || (o.selection.setRng(rf(o.selection.getRng())), o.getDoc().execCommand("Delete", !1, null), C = (y = h.getRng()).startContainer, x = y.startOffset, 3 === C.nodeType && y.collapsed && ("\xa0" === C.data[x] ? (C.deleteData(x, 1), /[\u00a0| ]$/.test(e) || (e += " ")) : "\xa0" === C.data[x - 1] && (C.deleteData(x - 1, 1), /[\u00a0| ]$/.test(e) || (e = " " + e))));
                var E, S, T, k = {
                    context: (i = h.getNode()).nodeName.toLowerCase(),
                    data: t.data,
                    insert: !0
                };
                if (u = n.parse(e, k), !0 === t.paste && $l(o.schema, u) && Kl(v, i)) return l = Wl(r, v, o.selection.getRng(), u), o.selection.setRng(l), void o.fire("SetContent", s);
                if (function (e) {
                        for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                    }(u), "mce_marker" === (f = u.lastChild).attr("id"))
                    for (f = (c = f).prev; f; f = f.walk(!0))
                        if (3 === f.type || !v.isBlock(f.name)) {
                            o.schema.isValidChild(f.parent.name, "span") && f.parent.insert(c, f, "br" === f.name);
                            break
                        }
                if (o._selectionOverrides.showBlockCaretContainer(i), k.invalid) {
                    for (h.setContent(m), i = h.getNode(), a = o.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                    e = i === a ? a.innerHTML : v.getOuterHTML(i), e = r.serialize(n.parse(e.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                        return r.serialize(u)
                    }))), i === a ? v.setHTML(a, e) : v.setOuterHTML(i, e)
                } else e = r.serialize(u),
                    function (e, t, n) {
                        if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                        else {
                            var r = n.firstChild,
                                o = n.lastChild;
                            !r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t)
                        }
                    }(o, e, i);
                ! function () {
                    if (g) {
                        var n = o.getBody(),
                            r = new Yl(v);
                        Yt.each(v.select("*[data-mce-fragment]"), function (e) {
                            for (var t = e.parentNode; t && t !== n; t = t.parentNode) p[e.nodeName.toLowerCase()] && r.compare(t, e) && v.remove(e, !0)
                        })
                    }
                }(),
                function (e) {
                    var t, n, r;
                    if (e) {
                        if (h.scrollIntoView(e), t = function (e) {
                                for (var t = o.getBody(); e && e !== t; e = e.parentNode)
                                    if ("false" === o.dom.getContentEditable(e)) return e;
                                return null
                            }(e)) return v.remove(e), h.select(t);
                        l = v.createRng(), (f = e.previousSibling) && 3 === f.nodeType ? (l.setStart(f, f.nodeValue.length), Re.ie || (d = e.nextSibling) && 3 === d.nodeType && (f.appendData(d.data), d.parentNode.removeChild(d))) : (l.setStartBefore(e), l.setEndBefore(e)), n = v.getParent(e, v.isBlock), v.remove(e), n && v.isEmpty(n) && (o.$(n).empty(), l.setStart(n, 0), l.setEnd(n, 0), of (n) || n.getAttribute("data-mce-fragment") || !(r = function (e) {
                            var t = Su.fromRangeStart(e);
                            if (t = Ns(o.getBody()).next(t)) return t.toRange()
                        }(l)) ? v.add(n, v.create("br", {
                            "data-mce-bogus": "1"
                        })) : (l = r, v.remove(n))), h.setRng(l)
                    }
                }(v.get("mce_marker")), E = o.getBody(), Yt.each(E.getElementsByTagName("*"), function (e) {
                    e.removeAttribute("data-mce-fragment")
                }), S = o.dom, T = o.selection.getStart(), A.from(S.getParent(T, "td,th")).map(er.fromDom).each(Ql), o.fire("SetContent", s), o.addVisual()
            }
        },
        uf = function (e, t) {
            var n, r, o = "string" != typeof (n = t) ? (r = Yt.extend({
                paste: n.paste,
                data: {
                    paste: n.paste
                }
            }, n), {
                content: n.content,
                details: r
            }) : {
                content: n,
                details: {}
            };
            af(e, o.content, o.details)
        },
        sf = kr("sections", "settings"),
        cf = Qn.detect().deviceType.isTouch(),
        lf = ["lists", "autolink", "autosave"],
        ff = {
            theme: "mobile"
        },
        df = function (e) {
            var t = R(e) ? e.join(" ") : e,
                n = $(k(t) ? t.split(" ") : [], $n);
            return U(n, function (e) {
                return 0 < e.length
            })
        },
        mf = function (n, e) {
            var r, o, i, t = (r = function (e, t) {
                return I(n, t)
            }, o = {}, i = {}, lr(e, function (e, t) {
                (r(e, t) ? o : i)[t] = e
            }), {
                t: o,
                f: i
            });
            return sf(t.t, t.f)
        },
        gf = function (e, t) {
            return e.sections().hasOwnProperty(t)
        },
        pf = function (e, t, n, r) {
            var o, i = df(n.forced_plugins),
                a = df(r.plugins),
                u = e && gf(t, "mobile") ? U(a, b(I, lf)) : a,
                s = (o = u, [].concat(df(i)).concat(df(o)));
            return Yt.extend(r, {
                plugins: s.join(" ")
            })
        },
        hf = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = mf(["mobile"], r),
                p = Yt.extend(t, n, g.settings(), (f = e, m = (d = g).settings().inline, f && gf(d, "mobile") && !m ? (u = "mobile", s = ff, c = g.sections(), l = c.hasOwnProperty(u) ? c[u] : {}, Yt.extend({}, s, l)) : {}), {
                    validate: !0,
                    content_editable: g.settings().inline,
                    external_plugins: (o = n, i = g.settings(), a = i.external_plugins ? i.external_plugins : {}, o && o.external_plugins ? Yt.extend({}, o.external_plugins, a) : a)
                });
            return pf(e, g, n, p)
        },
        vf = function (e, t, n) {
            return A.from(t.settings[n]).filter(e)
        },
        bf = b(vf, k),
        yf = function (e, t, n, r) {
            var o, i, a, u = t in e.settings ? e.settings[t] : n;
            return "hash" === r ? (a = {}, "string" == typeof (i = u) ? F(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function (e) {
                var t = e.split("=");
                1 < t.length ? a[Yt.trim(t[0])] = Yt.trim(t[1]) : a[Yt.trim(t[0])] = Yt.trim(t)
            }) : a = i, a) : "string" === r ? vf(k, e, t).getOr(n) : "number" === r ? vf(P, e, t).getOr(n) : "boolean" === r ? vf(B, e, t).getOr(n) : "object" === r ? vf(_, e, t).getOr(n) : "array" === r ? vf(R, e, t).getOr(n) : "string[]" === r ? vf((o = k, function (e) {
                return R(e) && J(e, o)
            }), e, t).getOr(n) : "function" === r ? vf(O, e, t).getOr(n) : u
        },
        Cf = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        xf = function (e, t) {
            var n = t.container(),
                r = t.offset();
            return e ? ka(n) ? Do.isText(n.nextSibling) ? Su(n.nextSibling, 0) : Su.after(n) : Ra(t) ? Su(n, r + 1) : t : ka(n) ? Do.isText(n.previousSibling) ? Su(n.previousSibling, n.previousSibling.data.length) : Su.before(n) : Da(t) ? Su(n, r - 1) : t
        },
        wf = {
            isInlineTarget: function (e, t) {
                var n = bf(e, "inline_boundaries_selector").getOr("a[href],code");
                return Lr.is(er.fromDom(t), n)
            },
            findRootInline: function (e, t, n) {
                var r, o, i, a = (r = e, o = t, i = n, U(pi.DOM.getParents(i.container(), "*", o), r));
                return A.from(a[a.length - 1])
            },
            isRtl: function (e) {
                return "rtl" === pi.DOM.getStyle(e, "direction", !0) || (t = e.textContent, Cf.test(t));
                var t
            },
            isAtZwsp: function (e) {
                return Ra(e) || Da(e)
            },
            normalizePosition: xf,
            normalizeForwards: b(xf, !0),
            normalizeBackwards: b(xf, !1),
            hasSameParentBlock: function (e, t, n) {
                var r = Lc(t, e),
                    o = Lc(n, e);
                return r && r === o
            }
        },
        Nf = function (e, t) {
            return Fr.contains(e, t) ? Zi.closest(t, function (e) {
                return go(e) || ho(e)
            }, (n = e, function (e) {
                return Fr.eq(n, er.fromDom(e.dom().parentNode))
            })) : A.none();
            var n
        },
        Ef = function (e) {
            var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
        },
        Sf = function (i, a, u) {
            return ru([rl.firstPositionIn(u), rl.lastPositionIn(u)], function (e, t) {
                var n = wf.normalizePosition(!0, e),
                    r = wf.normalizePosition(!1, t),
                    o = wf.normalizePosition(!1, a);
                return i ? rl.nextPosition(u, o).map(function (e) {
                    return e.isEqual(r) && a.isEqual(n)
                }).getOr(!1) : rl.prevPosition(u, o).map(function (e) {
                    return e.isEqual(n) && a.isEqual(r)
                }).getOr(!1)
            }).getOr(!0)
        },
        Tf = function (e, t, n) {
            return ta(e, t, n).isSome()
        },
        kf = function (e, t) {
            return Do.isText(t) && /^[ \t\r\n]*$/.test(t.data) && !1 === (n = e, r = t, o = er.fromDom(n), i = er.fromDom(r), Tf(i, "pre,code", b(Fr.eq, o)));
            var n, r, o, i
        },
        Af = function (e, t) {
            return ja(t) && !1 === kf(e, t) || (n = t, Do.isElement(n) && "A" === n.nodeName && n.hasAttribute("name")) || _f(t);
            var n
        },
        _f = Do.hasAttribute("data-mce-bookmark"),
        Rf = Do.hasAttribute("data-mce-bogus"),
        Df = Do.hasAttributeValue("data-mce-bogus", "all"),
        Bf = function (e) {
            return function (e) {
                var t, n, r = 0;
                if (Af(e, e)) return !1;
                if (!(n = e.firstChild)) return !0;
                t = new oo(n, e);
                do {
                    if (Df(n)) n = t.next(!0);
                    else if (Rf(n)) n = t.next();
                    else if (Do.isBr(n)) r++, n = t.next();
                    else {
                        if (Af(e, n)) return !1;
                        n = t.next()
                    }
                } while (n);
                return r <= 1
            }(e.dom())
        },
        Of = kr("block", "position"),
        Pf = kr("from", "to"),
        Lf = function (e, t) {
            var n = er.fromDom(e),
                r = er.fromDom(t.container());
            return Nf(n, r).map(function (e) {
                return Of(e, t)
            })
        },
        If = function (o, i, e) {
            var t = Lf(o, Su.fromRangeStart(e)),
                n = t.bind(function (e) {
                    return rl.fromPosition(i, o, e.position()).bind(function (e) {
                        return Lf(o, e).map(function (e) {
                            return t = o, n = i, r = e, Do.isBr(r.position().getNode()) && !1 === Bf(r.block()) ? rl.positionIn(!1, r.block().dom()).bind(function (e) {
                                return e.isEqual(r.position()) ? rl.fromPosition(n, t, e).bind(function (e) {
                                    return Lf(t, e)
                                }) : A.some(r)
                            }).getOr(r) : r;
                            var t, n, r
                        })
                    })
                });
            return ru([t, n], Pf).filter(function (e) {
                return r = e, !1 === Fr.eq(r.from().block(), r.to().block()) && (n = e, $r.parent(n.from().block()).bind(function (t) {
                    return $r.parent(n.to().block()).filter(function (e) {
                        return Fr.eq(t, e)
                    })
                }).isSome()) && (t = e, !1 === Do.isContentEditableFalse(t.from().block()) && !1 === Do.isContentEditableFalse(t.to().block()));
                var t, n, r
            })
        },
        Mf = function (e, t, n) {
            return n.collapsed ? If(e, t, n) : A.none()
        },
        Ff = function (e, t, n) {
            return Fr.contains(t, e) ? $r.parents(e, function (e) {
                return n(e) || Fr.eq(e, t)
            }).slice(0, -1) : []
        },
        Uf = function (e, t) {
            return Ff(e, t, H(!1))
        },
        zf = Uf,
        Vf = function (e, t) {
            return [e].concat(Uf(e, t))
        },
        qf = function (e) {
            var t, n, r = (t = e, n = $r.children(t), K(n, lo).fold(function () {
                return n
            }, function (e) {
                return n.slice(0, e)
            }));
            return F(r, function (e) {
                Ri.remove(e)
            }), r
        },
        Hf = function (e, t) {
            rl.positionIn(e, t.dom()).each(function (e) {
                var t = e.getNode();
                Do.isBr(t) && Ri.remove(er.fromDom(t))
            })
        },
        jf = function (e, t) {
            var n = Vf(t, e);
            return V(n.reverse(), Bf).each(Ri.remove)
        },
        $f = function (o, i) {
            return Fr.contains(i, o) ? $r.parent(o).bind(function (e) {
                return Fr.eq(e, i) ? A.some(o) : (t = i, n = o, r = $r.parents(n, function (e) {
                    return Fr.eq(e, t)
                }), A.from(r[r.length - 2]));
                var t, n, r
            }) : A.none()
        },
        Wf = function (n, r, o) {
            if (Bf(o)) return Ri.remove(o), Bf(r) && Jl(r), rl.firstPositionIn(r.dom());
            Hf(!0, r), Hf(!1, o);
            var i = qf(r);
            return $f(r, o).fold(function () {
                jf(n, r);
                var e = rl.lastPositionIn(o.dom());
                return F(i, function (e) {
                    Ti.append(o, e)
                }), e
            }, function (t) {
                var e = rl.prevPosition(o.dom(), Su.before(t.dom()));
                return F(i, function (e) {
                    Ti.before(t, e)
                }), jf(n, r), e
            })
        },
        Kf = function (e, t, n, r) {
            return t ? Wf(e, r, n) : Wf(e, n, r)
        },
        Xf = function (t, n) {
            var e, r = er.fromDom(t.getBody());
            return (e = Mf(r.dom(), n, t.selection.getRng()).bind(function (e) {
                return Kf(r, n, e.from().block(), e.to().block())
            })).each(function (e) {
                t.selection.setRng(e.toRange())
            }), e.isSome()
        },
        Yf = function (e, t) {
            var n = er.fromDom(t),
                r = b(Fr.eq, e);
            return Zi.ancestor(n, yo, r).isSome()
        },
        Gf = function (e, t) {
            var n, r, o = rl.prevPosition(e.dom(), Su.fromRangeStart(t)).isNone(),
                i = rl.nextPosition(e.dom(), Su.fromRangeEnd(t)).isNone();
            return !(Yf(n = e, (r = t).startContainer) || Yf(n, r.endContainer)) && o && i
        },
        Jf = function (e) {
            var n, r, o, t, i = er.fromDom(e.getBody()),
                a = e.selection.getRng();
            return Gf(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), ru([Nf(n, er.fromDom(o.startContainer)), Nf(n, er.fromDom(o.endContainer))], function (e, t) {
                return !1 === Fr.eq(e, t) && (o.deleteContents(), Kf(n, !0, e, t).each(function (e) {
                    r.setRng(e.toRange())
                }), !0)
            }).getOr(!1))
        },
        Qf = function (e, t) {
            return !e.selection.isCollapsed() && Jf(e)
        },
        Zf = function (a) {
            if (!R(a)) throw new Error("cases must be an array");
            if (0 === a.length) throw new Error("there must be at least one case");
            var u = [],
                n = {};
            return F(a, function (e, r) {
                var t = cr(e);
                if (1 !== t.length) throw new Error("one and only one name per case");
                var o = t[0],
                    i = e[o];
                if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
                if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
                if (!R(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function () {
                    var e = arguments.length;
                    if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);
                    for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t];
                    return {
                        fold: function () {
                            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
                            return arguments[r].apply(null, n)
                        },
                        match: function (e) {
                            var t = cr(e);
                            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
                            if (!J(u, function (e) {
                                    return I(t, e)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
                            return e[o].apply(null, n)
                        },
                        log: function (e) {
                            console.log(e, {
                                constructors: u,
                                constructor: o,
                                params: n
                            })
                        }
                    }
                }
            }), n
        },
        ed = Zf([{
            remove: ["element"]
        }, {
            moveToElement: ["element"]
        }, {
            moveToPosition: ["position"]
        }]),
        td = function (e, t, n, r) {
            var o = r.getNode(!1 === t);
            return Nf(er.fromDom(e), er.fromDom(n.getNode())).map(function (e) {
                return Bf(e) ? ed.remove(e.dom()) : ed.moveToElement(o)
            }).orThunk(function () {
                return A.some(ed.moveToElement(o))
            })
        },
        nd = function (u, s, c) {
            return rl.fromPosition(s, u, c).bind(function (e) {
                return a = e.getNode(), yo(er.fromDom(a)) || ho(er.fromDom(a)) ? A.none() : (t = u, o = e, i = function (e) {
                    return fo(er.fromDom(e)) && !Ic(r, o, t)
                }, $c(!(n = s), r = c).fold(function () {
                    return $c(n, o).fold(H(!1), i)
                }, i) ? A.none() : s && Do.isContentEditableFalse(e.getNode()) ? td(u, s, c, e) : !1 === s && Do.isContentEditableFalse(e.getNode(!0)) ? td(u, s, c, e) : s && Xc(c) ? A.some(ed.moveToPosition(e)) : !1 === s && Kc(c) ? A.some(ed.moveToPosition(e)) : A.none());
                var t, n, r, o, i, a
            })
        },
        rd = function (r, e, o) {
            return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", Do.isElement(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), t && Do.isContentEditableFalse(n.nextSibling) ? A.some(ed.moveToElement(n.nextSibling)) : !1 === t && Do.isContentEditableFalse(n.previousSibling) ? A.some(ed.moveToElement(n.previousSibling)) : A.none()).fold(function () {
                return nd(r, e, o)
            }, A.some) : nd(r, e, o).bind(function (e) {
                return t = r, n = o, e.fold(function (e) {
                    return A.some(ed.remove(e))
                }, function (e) {
                    return A.some(ed.moveToElement(e))
                }, function (e) {
                    return Ic(n, e, t) ? A.none() : A.some(ed.moveToPosition(e))
                });
                var t, n
            });
            var t, n, i, a, u
        },
        od = function (e, t) {
            return r = e, o = (n = t).container(), i = n.offset(), !1 === Su.isTextPosition(n) && o === r.parentNode && i > Su.before(r).offset() ? Su(t.container(), t.offset() - 1) : t;
            var n, r, o, i
        },
        id = function (e) {
            return ja(e.previousSibling) ? A.some((t = e.previousSibling, Do.isText(t) ? Su(t, t.data.length) : Su.after(t))) : e.previousSibling ? rl.lastPositionIn(e.previousSibling) : A.none();
            var t
        },
        ad = function (e) {
            return ja(e.nextSibling) ? A.some((t = e.nextSibling, Do.isText(t) ? Su(t, 0) : Su.before(t))) : e.nextSibling ? rl.firstPositionIn(e.nextSibling) : A.none();
            var t
        },
        ud = function (r, o) {
            return id(o).orThunk(function () {
                return ad(o)
            }).orThunk(function () {
                return e = r, t = o, n = Su.before(t.previousSibling ? t.previousSibling : t.parentNode), rl.prevPosition(e, n).fold(function () {
                    return rl.nextPosition(e, Su.after(t))
                }, A.some);
                var e, t, n
            })
        },
        sd = function (n, r) {
            return ad(r).orThunk(function () {
                return id(r)
            }).orThunk(function () {
                return e = n, t = r, rl.nextPosition(e, Su.after(t)).fold(function () {
                    return rl.prevPosition(e, Su.before(t))
                }, A.some);
                var e, t
            })
        },
        cd = function (e, t, n) {
            return (r = e, o = t, i = n, r ? sd(o, i) : ud(o, i)).map(b(od, n));
            var r, o, i
        },
        ld = function (t, n, e) {
            e.fold(function () {
                t.focus()
            }, function (e) {
                t.selection.setRng(e.toRange(), n)
            })
        },
        fd = function (e, t) {
            return t && e.schema.getBlockElements().hasOwnProperty(sr.name(t))
        },
        dd = function (e) {
            if (Bf(e)) {
                var t = er.fromHtml('<br data-mce-bogus="1">');
                return Ri.empty(e), Ti.append(e, t), A.some(Su.before(t.dom()))
            }
            return A.none()
        },
        md = function (t, n, e) {
            var r, a, o, i = cd(n, t.getBody(), e.dom()),
                u = Zi.ancestor(e, b(fd, t), (r = t.getBody(), function (e) {
                    return e.dom() === r
                })),
                s = (a = e, o = i, ru([$r.prevSibling(a), $r.nextSibling(a), o], function (e, t, n) {
                    var r, o = e.dom(),
                        i = t.dom();
                    return Do.isText(o) && Do.isText(i) ? (r = o.data.length, o.appendData(i.data), Ri.remove(t), Ri.remove(a), n.container() === i ? Su(o, r) : n) : (Ri.remove(a), n)
                }).orThunk(function () {
                    return Ri.remove(a), o
                }));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(dd).fold(function () {
                ld(t, n, s)
            }, function (e) {
                ld(t, n, A.some(e))
            })
        },
        gd = function (a, u) {
            var e, t, n, r, o;
            return (e = a.getBody(), t = u, n = a.selection.getRng(), r = qc(t ? 1 : -1, e, n), o = Su.fromRangeStart(r), !1 === t && Xc(o) ? A.some(ed.remove(o.getNode(!0))) : t && Kc(o) ? A.some(ed.remove(o.getNode())) : rd(e, t, o)).map(function (e) {
                return e.fold((o = a, i = u, function (e) {
                    return o._selectionOverrides.hideFakeCaret(), md(o, i, er.fromDom(e)), !0
                }), (n = a, r = u, function (e) {
                    var t = r ? Su.before(e) : Su.after(e);
                    return n.selection.setRng(t.toRange()), !0
                }), (t = a, function (e) {
                    return t.selection.setRng(e.toRange()), !0
                }));
                var t, n, r, o, i
            }).getOr(!1)
        },
        pd = function (e, t) {
            var n, r = e.selection.getNode();
            return !!Do.isContentEditableFalse(r) && (n = er.fromDom(e.getBody()), F(Ki(n, ".mce-offscreen-selection"), Ri.remove), md(e, t, er.fromDom(e.selection.getNode())), Ef(e), !0)
        },
        hd = function (e, t) {
            return e.selection.isCollapsed() ? gd(e, t) : pd(e, t)
        },
        vd = function (e) {
            var t, n = function (e, t) {
                for (; t && t !== e;) {
                    if (Do.isContentEditableTrue(t) || Do.isContentEditableFalse(t)) return t;
                    t = t.parentNode
                }
                return null
            }(e.getBody(), e.selection.getNode());
            return Do.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", {
                "data-mce-bogus": "1"
            }), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng(Su.before(t).toRange())), !0
        },
        bd = Do.isText,
        yd = function (e) {
            return bd(e) && e.data[0] === wa
        },
        Cd = function (e) {
            return bd(e) && e.data[e.data.length - 1] === wa
        },
        xd = function (e) {
            return e.ownerDocument.createTextNode(wa)
        },
        wd = function (e, t) {
            return e ? function (e) {
                if (bd(e.previousSibling)) return Cd(e.previousSibling) || e.previousSibling.appendData(wa), e.previousSibling;
                if (bd(e)) return yd(e) || e.insertData(0, wa), e;
                var t = xd(e);
                return e.parentNode.insertBefore(t, e), t
            }(t) : function (e) {
                if (bd(e.nextSibling)) return yd(e.nextSibling) || e.nextSibling.insertData(0, wa), e.nextSibling;
                if (bd(e)) return Cd(e) || e.appendData(wa), e;
                var t = xd(e);
                return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t
            }(t)
        },
        Nd = b(wd, !0),
        Ed = b(wd, !1),
        Sd = function (e, t) {
            return Do.isText(e.container()) ? wd(t, e.container()) : wd(t, e.getNode())
        },
        Td = function (e, t) {
            var n = t.get();
            return n && e.container() === n && ka(n)
        },
        kd = function (n, e) {
            return e.fold(function (e) {
                os.remove(n.get());
                var t = Nd(e);
                return n.set(t), A.some(Su(t, t.length - 1))
            }, function (e) {
                return rl.firstPositionIn(e).map(function (e) {
                    if (Td(e, n)) return Su(n.get(), 1);
                    os.remove(n.get());
                    var t = Sd(e, !0);
                    return n.set(t), Su(t, 1)
                })
            }, function (e) {
                return rl.lastPositionIn(e).map(function (e) {
                    if (Td(e, n)) return Su(n.get(), n.get().length - 1);
                    os.remove(n.get());
                    var t = Sd(e, !1);
                    return n.set(t), Su(t, t.length - 1)
                })
            }, function (e) {
                os.remove(n.get());
                var t = Ed(e);
                return n.set(t), A.some(Su(t, 1))
            })
        },
        Ad = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n].apply(null, t);
                if (r.isSome()) return r
            }
            return A.none()
        },
        _d = Zf([{
            before: ["element"]
        }, {
            start: ["element"]
        }, {
            end: ["element"]
        }, {
            after: ["element"]
        }]),
        Rd = function (e, t) {
            var n = Lc(t, e);
            return n || e
        },
        Dd = function (e, t, n) {
            var r = wf.normalizeForwards(n),
                o = Rd(t, r.container());
            return wf.findRootInline(e, o, r).fold(function () {
                return rl.nextPosition(o, r).bind(b(wf.findRootInline, e, o)).map(function (e) {
                    return _d.before(e)
                })
            }, A.none)
        },
        Bd = function (e, t) {
            return null === Xu(e, t)
        },
        Od = function (e, t, n) {
            return wf.findRootInline(e, t, n).filter(b(Bd, t))
        },
        Pd = function (e, t, n) {
            var r = wf.normalizeBackwards(n);
            return Od(e, t, r).bind(function (e) {
                return rl.prevPosition(e, r).isNone() ? A.some(_d.start(e)) : A.none()
            })
        },
        Ld = function (e, t, n) {
            var r = wf.normalizeForwards(n);
            return Od(e, t, r).bind(function (e) {
                return rl.nextPosition(e, r).isNone() ? A.some(_d.end(e)) : A.none()
            })
        },
        Id = function (e, t, n) {
            var r = wf.normalizeBackwards(n),
                o = Rd(t, r.container());
            return wf.findRootInline(e, o, r).fold(function () {
                return rl.prevPosition(o, r).bind(b(wf.findRootInline, e, o)).map(function (e) {
                    return _d.after(e)
                })
            }, A.none)
        },
        Md = function (e) {
            return !1 === wf.isRtl(Ud(e))
        },
        Fd = function (e, t, n) {
            return Ad([Dd, Pd, Ld, Id], [e, t, n]).filter(Md)
        },
        Ud = function (e) {
            return e.fold(j, j, j, j)
        },
        zd = function (e) {
            return e.fold(H("before"), H("start"), H("end"), H("after"))
        },
        Vd = function (e) {
            return e.fold(_d.before, _d.before, _d.after, _d.after)
        },
        qd = function (n, e, r, t, o, i) {
            return ru([wf.findRootInline(e, r, t), wf.findRootInline(e, r, o)], function (e, t) {
                return e !== t && wf.hasSameParentBlock(r, e, t) ? _d.after(n ? e : t) : i
            }).getOr(i)
        },
        Hd = function (e, r) {
            return e.fold(H(!0), function (e) {
                return n = r, !(zd(t = e) === zd(n) && Ud(t) === Ud(n));
                var t, n
            })
        },
        jd = function (e, t) {
            return e ? t.fold(q(A.some, _d.start), A.none, q(A.some, _d.after), A.none) : t.fold(A.none, q(A.some, _d.before), A.none, q(A.some, _d.end))
        },
        $d = function (a, u, s, c) {
            var e = wf.normalizePosition(a, c),
                l = Fd(u, s, e);
            return Fd(u, s, e).bind(b(jd, a)).orThunk(function () {
                return t = a, n = u, r = s, o = l, e = c, i = wf.normalizePosition(t, e), rl.fromPosition(t, r, i).map(b(wf.normalizePosition, t)).fold(function () {
                    return o.map(Vd)
                }, function (e) {
                    return Fd(n, r, e).map(b(qd, t, n, r, i, e)).filter(b(Hd, o))
                }).filter(Md);
                var t, n, r, o, e, i
            })
        },
        Wd = Fd,
        Kd = $d,
        Xd = (b($d, !1), b($d, !0), Vd),
        Yd = function (e) {
            return e.fold(_d.start, _d.start, _d.end, _d.end)
        },
        Gd = function (e) {
            return O(e.selection.getSel().modify)
        },
        Jd = function (e, t, n) {
            var r = e ? 1 : -1;
            return t.setRng(Su(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        },
        Qd = function (e, t) {
            var n = t.selection.getRng(),
                r = e ? Su.fromRangeEnd(n) : Su.fromRangeStart(n);
            return !!Gd(t) && (e && Ra(r) ? Jd(!0, t.selection, r) : !(e || !Da(r)) && Jd(!1, t.selection, r))
        },
        Zd = function (e, t) {
            var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        },
        em = function (e) {
            return !1 !== e.settings.inline_boundaries
        },
        tm = function (e, t) {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        },
        nm = function (t, e, n) {
            return kd(e, n).map(function (e) {
                return Zd(t, e), n
            })
        },
        rm = function (e, t, n) {
            return function () {
                return !!em(t) && Qd(e, t)
            }
        },
        om = {
            move: function (a, u, s) {
                return function () {
                    return !!em(a) && (t = a, n = u, e = s, r = t.getBody(), o = Su.fromRangeStart(t.selection.getRng()), i = b(wf.isInlineTarget, t), Kd(e, i, r, o).bind(function (e) {
                        return nm(t, n, e)
                    })).isSome();
                    var t, n, e, r, o, i
                }
            },
            moveNextWord: b(rm, !0),
            movePrevWord: b(rm, !1),
            setupSelectedState: function (a) {
                var u = Bi(null),
                    s = b(wf.isInlineTarget, a);
                return a.on("NodeChange", function (e) {
                    var t, n, r, o, i;
                    em(a) && (t = s, n = a.dom, r = e.parents, o = U(n.select('*[data-mce-selected="inline-boundary"]'), t), i = U(r, t), F(Z(o, i), b(tm, !1)), F(Z(i, o), b(tm, !0)), function (e, t) {
                        if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) {
                            var n = Su.fromRangeStart(e.selection.getRng());
                            Su.isTextPosition(n) && !1 === wf.isAtZwsp(n) && (Zd(e, os.removeAndReposition(t.get(), n)), t.set(null))
                        }
                    }(a, u), function (n, r, o, e) {
                        if (r.selection.isCollapsed()) {
                            var t = U(e, n);
                            F(t, function (e) {
                                var t = Su.fromRangeStart(r.selection.getRng());
                                Wd(n, r.getBody(), t).bind(function (e) {
                                    return nm(r, o, e)
                                })
                            })
                        }
                    }(s, a, u, e.parents))
                }), u
            },
            setCaretPosition: Zd
        },
        im = function (t, n) {
            return function (e) {
                return kd(n, e).map(function (e) {
                    return om.setCaretPosition(t, e), !0
                }).getOr(!1)
            }
        },
        am = function (r, o, i, a) {
            var u = r.getBody(),
                s = b(wf.isInlineTarget, r);
            r.undoManager.ignore(function () {
                var e, t, n;
                r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), Wd(s, u, Su.fromRangeStart(r.selection.getRng())).map(Yd).map(im(r, o))
            }), r.nodeChanged()
        },
        um = function (n, r, i, o) {
            var e, t, a = (e = n.getBody(), t = o.container(), Lc(t, e) || e),
                u = b(wf.isInlineTarget, n),
                s = Wd(u, a, o);
            return s.bind(function (e) {
                return i ? e.fold(H(A.some(Yd(e))), A.none, H(A.some(Xd(e))), A.none) : e.fold(A.none, H(A.some(Xd(e))), A.none, H(A.some(Yd(e))))
            }).map(im(n, r)).getOrThunk(function () {
                var t = rl.navigate(i, a, o),
                    e = t.bind(function (e) {
                        return Wd(u, a, e)
                    });
                return s.isSome() && e.isSome() ? wf.findRootInline(u, a, o).map(function (e) {
                    return o = e, !!ru([rl.firstPositionIn(o), rl.lastPositionIn(o)], function (e, t) {
                        var n = wf.normalizePosition(!0, e),
                            r = wf.normalizePosition(!1, t);
                        return rl.nextPosition(o, n).map(function (e) {
                            return e.isEqual(r)
                        }).getOr(!0)
                    }).getOr(!0) && (md(n, i, er.fromDom(e)), !0);
                    var o
                }).getOr(!1) : e.bind(function (e) {
                    return t.map(function (e) {
                        return i ? am(n, r, o, e) : am(n, r, e, o), !0
                    })
                }).getOr(!1)
            })
        },
        sm = function (e, t, n) {
            if (e.selection.isCollapsed() && !1 !== e.settings.inline_boundaries) {
                var r = Su.fromRangeStart(e.selection.getRng());
                return um(e, t, n, r)
            }
            return !1
        },
        cm = kr("start", "end"),
        lm = kr("rng", "table", "cells"),
        fm = Zf([{
            removeTable: ["element"]
        }, {
            emptyCells: ["cells"]
        }]),
        dm = function (e, t) {
            return ra(er.fromDom(e), "td,th", t)
        },
        mm = function (e, t) {
            return ta(e, "table", t)
        },
        gm = function (e) {
            return !1 === Fr.eq(e.start(), e.end())
        },
        pm = function (e, n) {
            return mm(e.start(), n).bind(function (t) {
                return mm(e.end(), n).bind(function (e) {
                    return Fr.eq(t, e) ? A.some(t) : A.none()
                })
            })
        },
        hm = function (e) {
            return Ki(e, "td,th")
        },
        vm = function (r, e) {
            var t = dm(e.startContainer, r),
                n = dm(e.endContainer, r);
            return e.collapsed ? A.none() : ru([t, n], cm).fold(function () {
                return t.fold(function () {
                    return n.bind(function (t) {
                        return mm(t, r).bind(function (e) {
                            return ee(hm(e)).map(function (e) {
                                return cm(e, t)
                            })
                        })
                    })
                }, function (t) {
                    return mm(t, r).bind(function (e) {
                        return te(hm(e)).map(function (e) {
                            return cm(t, e)
                        })
                    })
                })
            }, function (e) {
                return bm(r, e) ? A.none() : (n = r, mm((t = e).start(), n).bind(function (e) {
                    return te(hm(e)).map(function (e) {
                        return cm(t.start(), e)
                    })
                }));
                var t, n
            })
        },
        bm = function (e, t) {
            return pm(t, e).isSome()
        },
        ym = function (e, t) {
            var n, r, o, i, a, u = (n = e, b(Fr.eq, n));
            return (r = t, o = u, i = dm(r.startContainer, o), a = dm(r.endContainer, o), ru([i, a], cm).filter(gm).filter(function (e) {
                return bm(o, e)
            }).orThunk(function () {
                return vm(o, r)
            })).bind(function (e) {
                return pm(t = e, u).map(function (e) {
                    return lm(t, e, hm(e))
                });
                var t
            })
        },
        Cm = function (e, t) {
            return K(e, function (e) {
                return Fr.eq(e, t)
            })
        },
        xm = function (n) {
            return (r = n, ru([Cm(r.cells(), r.rng().start()), Cm(r.cells(), r.rng().end())], function (e, t) {
                return r.cells().slice(e, t + 1)
            })).map(function (e) {
                var t = n.cells();
                return e.length === t.length ? fm.removeTable(n.table()) : fm.emptyCells(e)
            });
            var r
        },
        wm = function (e, t) {
            return ym(e, t).bind(xm)
        },
        Nm = function (e) {
            var t = [];
            if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        },
        Em = Nm,
        Sm = function (e) {
            return G(e, function (e) {
                var t = Za(e);
                return t ? [er.fromDom(t)] : []
            })
        },
        Tm = function (e) {
            return 1 < Nm(e).length
        },
        km = function (e) {
            return U(Sm(e), yo)
        },
        Am = function (e) {
            return Ki(e, "td[data-mce-selected],th[data-mce-selected]")
        },
        _m = function (e, t) {
            var n = Am(t),
                r = km(e);
            return 0 < n.length ? n : r
        },
        Rm = _m,
        Dm = function (e) {
            return _m(Em(e.selection.getSel()), er.fromDom(e.getBody()))
        },
        Bm = function (e, t) {
            return F(t, Jl), e.selection.setCursorLocation(t[0].dom(), 0), !0
        },
        Om = function (e, t) {
            return md(e, !1, t), !0
        },
        Pm = function (n, e, r, t) {
            return Im(e, t).fold(function () {
                return t = n, wm(e, r).map(function (e) {
                    return e.fold(b(Om, t), b(Bm, t))
                });
                var t
            }, function (e) {
                return Mm(n, e)
            }).getOr(!1)
        },
        Lm = function (e, t) {
            return V(Vf(t, e), yo)
        },
        Im = function (e, t) {
            return V(Vf(t, e), function (e) {
                return "caption" === sr.name(e)
            })
        },
        Mm = function (e, t) {
            return Jl(t), e.selection.setCursorLocation(t.dom(), 0), A.some(!0)
        },
        Fm = function (u, s, c, l, f) {
            return rl.navigate(c, u.getBody(), f).bind(function (e) {
                return r = l, o = c, i = f, a = e, rl.firstPositionIn(r.dom()).bind(function (t) {
                    return rl.lastPositionIn(r.dom()).map(function (e) {
                        return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t)
                    })
                }).getOr(!0) ? Mm(u, l) : (t = l, n = e, Im(s, er.fromDom(n.getNode())).map(function (e) {
                    return !1 === Fr.eq(e, t)
                }));
                var t, n, r, o, i, a
            }).or(A.some(!0))
        },
        Um = function (a, u, s, e) {
            var c = Su.fromRangeStart(a.selection.getRng());
            return Lm(s, e).bind(function (e) {
                return Bf(e) ? Mm(a, e) : (t = a, n = s, r = u, o = e, i = c, rl.navigate(r, t.getBody(), i).bind(function (e) {
                    return Lm(n, er.fromDom(e.getNode())).map(function (e) {
                        return !1 === Fr.eq(e, o)
                    })
                }));
                var t, n, r, o, i
            })
        },
        zm = function (a, u, e) {
            var s = er.fromDom(a.getBody());
            return Im(s, e).fold(function () {
                return Um(a, u, s, e)
            }, function (e) {
                return t = a, n = u, r = s, o = e, i = Su.fromRangeStart(t.selection.getRng()), Bf(o) ? Mm(t, o) : Fm(t, r, n, o, i);
                var t, n, r, o, i
            }).getOr(!1)
        },
        Vm = function (e, t) {
            var n, r, o, i, a, u = er.fromDom(e.selection.getStart(!0)),
                s = Dm(e);
            return e.selection.isCollapsed() && 0 === s.length ? zm(e, t, u) : (n = e, r = u, o = er.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Dm(n)).length ? Bm(n, a) : Pm(n, o, i, r))
        },
        qm = function (e, t) {
            e.getDoc().execCommand(t, !1, null)
        },
        Hm = function (e) {
            hd(e, !1) || sm(e, !1) || Xf(e, !1) || Vm(e) || Qf(e, !1) || (qm(e, "Delete"), Ef(e))
        },
        jm = function (e) {
            hd(e, !0) || sm(e, !0) || Xf(e, !0) || Vm(e) || Qf(e, !0) || qm(e, "ForwardDelete")
        },
        $m = function (s) {
            return function (u, e) {
                return A.from(e).map(er.fromDom).filter(sr.isElement).bind(function (e) {
                    return (r = s, o = u, i = e.dom(), a = function (e) {
                        return Tr(e, r)
                    }, Zi.closest(er.fromDom(i), function (e) {
                        return a(e).isSome()
                    }, function (e) {
                        return Fr.eq(er.fromDom(o), e)
                    }).bind(a)).or((t = s, n = e.dom(), A.from(pi.DOM.getStyle(n, t, !0))));
                    var t, n, r, o, i, a
                }).getOr("")
            }
        },
        Wm = {
            getFontSize: $m("font-size"),
            getFontFamily: q(function (e) {
                return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")
            }, $m("font-family")),
            toPt: function (e, t) {
                return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, r = t || 0, o = Math.pow(10, r), Math.round(n * o) / o + "pt") : e;
                var n, r, o
            }
        },
        Km = function (e) {
            return rl.firstPositionIn(e.getBody()).map(function (e) {
                var t = e.container();
                return Do.isText(t) ? t.parentNode : t
            })
        },
        Xm = function (o) {
            return A.from(o.selection.getRng()).bind(function (e) {
                var t, n, r = o.getBody();
                return n = r, (t = e).startContainer === n && 0 === t.startOffset ? A.none() : A.from(o.selection.getStart(!0))
            })
        },
        Ym = function (e, t) {
            if (/^[0-9\.]+$/.test(t)) {
                var n = parseInt(t, 10);
                if (1 <= n && n <= 7) {
                    var r = ac(e),
                        o = uc(e);
                    return o ? o[n - 1] || t : r[n - 1] || t
                }
                return t
            }
            return t
        },
        Gm = function (e, t) {
            return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        },
        Jm = function (e, t, n) {
            return null !== function (e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(e, t, n)
        },
        Qm = function (e, t, n) {
            return Jm(e, t, function (e) {
                return e.nodeName === n
            })
        },
        Zm = function (e) {
            return e && "TABLE" === e.nodeName
        },
        eg = function (e, t, n) {
            for (var r = new oo(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
                if (Do.isBr(t)) return !0
        },
        tg = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f = e.getRoot(),
                d = e.schema.getNonEmptyElements();
            if (u = e.getParent(o.parentNode, e.isBlock) || f, r && Do.isBr(o) && t && e.isEmpty(u)) return A.some(wu(o.parentNode, e.nodeIndex(o)));
            for (i = new oo(o, u); s = i[r ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(s) || (l = f, Aa(c = s) && !1 === Jm(c, l, Ku))) return A.none();
                if (Do.isText(s) && 0 < s.nodeValue.length) return !1 === Qm(s, f, "A") ? A.some(wu(s, r ? s.nodeValue.length : 0)) : A.none();
                if (e.isBlock(s) || d[s.nodeName.toLowerCase()]) return A.none();
                a = s
            }
            return n && a ? A.some(wu(a, 0)) : A.none()
        },
        ng = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d, m, g = e.getRoot(),
                p = !1;
            if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], l = Do.isElement(o) && i === o.childNodes.length, s = e.schema.getNonEmptyElements(), c = n, Aa(o)) return A.none();
            if (Do.isElement(o) && i > o.childNodes.length - 1 && (c = !1), Do.isDocument(o) && (o = g, i = 0), o === g) {
                if (c && (u = o.childNodes[0 < i ? i - 1 : 0])) {
                    if (Aa(u)) return A.none();
                    if (s[u.nodeName] || Zm(u)) return A.none()
                }
                if (o.hasChildNodes()) {
                    if (i = Math.min(!c && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = Do.isText(o) && l ? o.data.length : 0, !t && o === g.lastChild && Zm(o)) return A.none();
                    if (function (e, t) {
                            for (; t && t !== e;) {
                                if (Do.isContentEditableFalse(t)) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }(g, o) || Aa(o)) return A.none();
                    if (o.hasChildNodes() && !1 === Zm(o)) {
                        a = new oo(u = o, g);
                        do {
                            if (Do.isContentEditableFalse(u) || Aa(u)) {
                                p = !1;
                                break
                            }
                            if (Do.isText(u) && 0 < u.nodeValue.length) {
                                i = c ? 0 : u.nodeValue.length, o = u, p = !0;
                                break
                            }
                            if (s[u.nodeName.toLowerCase()] && (!(f = u) || !/^(TD|TH|CAPTION)$/.test(f.nodeName))) {
                                i = e.nodeIndex(u), o = u.parentNode, c || i++, p = !0;
                                break
                            }
                        } while (u = c ? a.next() : a.prev())
                    }
                }
            }
            return t && (Do.isText(o) && 0 === i && tg(e, l, t, !0, o).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }), Do.isElement(o) && ((u = o.childNodes[i]) || (u = o.childNodes[i - 1]), !u || !Do.isBr(u) || (m = "A", (d = u).previousSibling && d.previousSibling.nodeName === m) || eg(e, u, !1) || eg(e, u, !0) || tg(e, l, t, !0, u).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }))), c && !t && Do.isText(o) && i === o.nodeValue.length && tg(e, l, t, !1, o).each(function (e) {
                o = e.container(), i = e.offset(), p = !0
            }), p ? A.some(wu(o, i)) : A.none()
        },
        rg = function (e, t) {
            var n = t.collapsed,
                r = t.cloneRange(),
                o = wu.fromRangeStart(t);
            return ng(e, n, !0, r).each(function (e) {
                n && wu.isAbove(o, e) || r.setStart(e.container(), e.offset())
            }), n || ng(e, n, !1, r).each(function (e) {
                r.setEnd(e.container(), e.offset())
            }), n && r.collapse(!0), Gm(t, r) ? A.none() : A.some(r)
        },
        og = function (e, t, n) {
            var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r)
        },
        ig = function (e, t, n, r) {
            var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o)
        },
        ag = function (e, t) {
            var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            rg(i, a).each(function (e) {
                a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset)
            });
            var u = a.startOffset,
                s = a.startContainer;
            if (1 === s.nodeType && s.hasChildNodes()) {
                var c = u > s.childNodes.length - 1;
                s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = c && 3 === s.nodeType ? s.nodeValue.length : 0
            }
            var l = i.getParent(s, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = t && t.ctrlKey;
            "LI" !== d || m || (l = f), s && 3 === s.nodeType && u >= s.nodeValue.length && (function (e, t, n) {
                for (var r, o = new oo(t, n), i = e.getNonEmptyElements(); r = o.next();)
                    if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0
            }(e.schema, s, l) || (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0)), n = i.create("br"), a.insertNode(n), og(i, o, n), ig(i, o, n, r), e.undoManager.add()
        },
        ug = function (e, t) {
            var n = er.fromTag("br");
            Ti.before(er.fromDom(t), n), e.undoManager.add()
        },
        sg = function (e, t) {
            cg(e.getBody(), t) || Ti.after(er.fromDom(t), er.fromTag("br"));
            var n = er.fromTag("br");
            Ti.after(er.fromDom(t), n), og(e.dom, e.selection, n.dom()), ig(e.dom, e.selection, n.dom(), !1), e.undoManager.add()
        },
        cg = function (e, t) {
            return n = Su.after(t), !!Do.isBr(n.getNode()) || rl.nextPosition(e, Su.after(t)).map(function (e) {
                return Do.isBr(e.getNode())
            }).getOr(!1);
            var n
        },
        lg = function (e) {
            return e && "A" === e.nodeName && "href" in e
        },
        fg = function (e) {
            return e.fold(H(!1), lg, lg, H(!1))
        },
        dg = function (e, t) {
            t.fold(v, b(ug, e), b(sg, e), v)
        },
        mg = function (e, t) {
            var n, r, o, i = (n = e, r = b(wf.isInlineTarget, n), o = Su.fromRangeStart(n.selection.getRng()), Wd(r, n.getBody(), o).filter(fg));
            i.isSome() ? i.each(b(dg, e)) : ag(e, t)
        },
        gg = Zf([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]),
        pg = (gg.before, gg.on, gg.after, function (e) {
            return e.fold(j, j, j)
        }),
        hg = Zf([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }]),
        vg = kr("start", "soffset", "finish", "foffset"),
        bg = {
            domRange: hg.domRange,
            relative: hg.relative,
            exact: hg.exact,
            exactFromRange: function (e) {
                return hg.exact(e.start(), e.soffset(), e.finish(), e.foffset())
            },
            range: vg,
            getWin: function (e) {
                var t = e.match({
                    domRange: function (e) {
                        return er.fromDom(e.startContainer)
                    },
                    relative: function (e, t) {
                        return pg(e)
                    },
                    exact: function (e, t, n, r) {
                        return e
                    }
                });
                return $r.defaultView(t)
            }
        },
        yg = Qn.detect().browser,
        Cg = function (e, t) {
            var n = sr.isText(t) ? Ol(t).length : $r.children(t).length + 1;
            return n < e ? n : e < 0 ? 0 : e
        },
        xg = function (e) {
            return bg.range(e.start(), Cg(e.soffset(), e.start()), e.finish(), Cg(e.foffset(), e.finish()))
        },
        wg = function (e, t) {
            return Fr.contains(e, t) || Fr.eq(e, t)
        },
        Ng = function (t) {
            return function (e) {
                return wg(t, e.start()) && wg(t, e.finish())
            }
        },
        Eg = function (e) {
            return !0 === e.inline || yg.isIE()
        },
        Sg = function (e) {
            return bg.range(er.fromDom(e.startContainer), e.startOffset, er.fromDom(e.endContainer), e.endOffset)
        },
        Tg = function (e) {
            var t = e.getSelection();
            return (t && 0 !== t.rangeCount ? A.from(t.getRangeAt(0)) : A.none()).map(Sg)
        },
        kg = function (e) {
            var t = $r.defaultView(e);
            return Tg(t.dom()).filter(Ng(e))
        },
        Ag = function (e, t) {
            return A.from(t).filter(Ng(e)).map(xg)
        },
        _g = function (e) {
            var t = document.createRange();
            try {
                return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), A.some(t)
            } catch (n) {
                return A.none()
            }
        },
        Rg = function (e) {
            return (e.bookmark ? e.bookmark : A.none()).bind(b(Ag, er.fromDom(e.getBody()))).bind(_g)
        },
        Dg = function (e) {
            var t = Eg(e) ? kg(er.fromDom(e.getBody())) : A.none();
            e.bookmark = t.isSome() ? t : e.bookmark
        },
        Bg = function (t) {
            Rg(t).each(function (e) {
                t.selection.setRng(e)
            })
        },
        Og = Rg,
        Pg = function (e, t) {
            var n = e.settings,
                r = e.dom,
                o = e.selection,
                i = e.formatter,
                a = /[a-z%]+$/i.exec(n.indentation)[0],
                u = parseInt(n.indentation, 10),
                s = e.getParam("indent_use_margin", !1);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || (n.forced_root_block || r.getParent(o.getNode(), r.isBlock) || i.apply("div"), F(o.getSelectedBlocks(), function (e) {
                return function (e, t, n, r, o, i) {
                    if ("false" !== e.getContentEditable(i) && "LI" !== i.nodeName) {
                        var a = n ? "margin" : "padding";
                        if (a = "TABLE" === i.nodeName ? "margin" : a, a += "rtl" === e.getStyle(i, "direction", !0) ? "Right" : "Left", "outdent" === t) {
                            var u = Math.max(0, parseInt(i.style[a] || 0, 10) - r);
                            e.setStyle(i, a, u ? u + o : "")
                        } else u = parseInt(i.style[a] || 0, 10) + r + o, e.setStyle(i, a, u)
                    }
                }(r, t, s, u, a, e)
            }))
        },
        Lg = Yt.each,
        Ig = Yt.extend,
        Mg = Yt.map,
        Fg = Yt.inArray;

    function Ug(s) {
        var o, i, a, t, c = {
                state: {},
                exec: {},
                value: {}
            },
            n = s.settings;
        s.on("PreInit", function () {
            o = s.dom, i = s.selection, n = s.settings, a = s.formatter
        });
        var r = function (e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.state[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandState(e)
                    } catch (n) {}
                    return !1
                }
            },
            e = function (e, n) {
                n = n || "exec", Lg(e, function (t, e) {
                    Lg(e.toLowerCase().split(","), function (e) {
                        c[n][e] = t
                    })
                })
            },
            u = function (e, t, n) {
                e = e.toLowerCase(), c.value[e] = function () {
                    return t.call(n || s)
                }
            };
        Ig(this, {
            execCommand: function (t, n, r, e) {
                var o, i, a = !1;
                if (!s.removed) {
                    if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? Bg(s) : s.focus(), (e = s.fire("BeforeExecCommand", {
                            command: t,
                            ui: n,
                            value: r
                        })).isDefaultPrevented()) return !1;
                    if (i = t.toLowerCase(), o = c.exec[i]) return o(i, n, r), s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    if (Lg(s.plugins, function (e) {
                            if (e.execCommand && e.execCommand(t, n, r)) return s.fire("ExecCommand", {
                                command: t,
                                ui: n,
                                value: r
                            }), !(a = !0)
                        }), a) return a;
                    if (s.theme && s.theme.execCommand && s.theme.execCommand(t, n, r)) return s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0;
                    try {
                        a = s.getDoc().execCommand(t, n, r)
                    } catch (u) {}
                    return !!a && (s.fire("ExecCommand", {
                        command: t,
                        ui: n,
                        value: r
                    }), !0)
                }
            },
            queryCommandState: r,
            queryCommandValue: function (e) {
                var t;
                if (!s.quirks.isHidden() && !s.removed) {
                    if (e = e.toLowerCase(), t = c.value[e]) return t(e);
                    try {
                        return s.getDoc().queryCommandValue(e)
                    } catch (n) {}
                }
            },
            queryCommandSupported: function (e) {
                if (e = e.toLowerCase(), c.exec[e]) return !0;
                try {
                    return s.getDoc().queryCommandSupported(e)
                } catch (t) {}
                return !1
            },
            addCommands: e,
            addCommand: function (e, o, i) {
                e = e.toLowerCase(), c.exec[e] = function (e, t, n, r) {
                    return o.call(i || s, t, n, r)
                }
            },
            addQueryStateHandler: function (e, t, n) {
                e = e.toLowerCase(), c.state[e] = function () {
                    return t.call(n || s)
                }
            },
            addQueryValueHandler: u,
            hasCustomCommand: function (e) {
                return e = e.toLowerCase(), !!c.exec[e]
            }
        });
        var l = function (e, t, n) {
                return t === undefined && (t = !1), n === undefined && (n = null), s.getDoc().execCommand(e, t, n)
            },
            f = function (e) {
                return a.match(e)
            },
            d = function (e, t) {
                a.toggle(e, t ? {
                    value: t
                } : undefined), s.nodeChanged()
            },
            m = function (e) {
                t = i.getBookmark(e)
            },
            g = function () {
                i.moveToBookmark(t)
            };
        e({
            "mceResetDesignMode,mceBeginUndoLevel": function () {},
            "mceEndUndoLevel,mceAddUndoLevel": function () {
                s.undoManager.add()
            },
            "Cut,Copy,Paste": function (e) {
                var t, n = s.getDoc();
                try {
                    l(e)
                } catch (o) {
                    t = !0
                }
                if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) {
                    var r = s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                    Re.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), s.notificationManager.open({
                        text: r,
                        type: "error"
                    })
                }
            },
            unlink: function () {
                if (i.isCollapsed()) {
                    var e = s.dom.getParent(s.selection.getStart(), "a");
                    e && s.dom.remove(e, !0)
                } else a.remove("link")
            },
            "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function (e) {
                var t = e.substring(7);
                "full" === t && (t = "justify"), Lg("left,center,right,justify".split(","), function (e) {
                    t !== e && a.remove("align" + e)
                }), "none" !== t && d("align" + t)
            },
            "InsertUnorderedList,InsertOrderedList": function (e) {
                var t, n;
                l(e), (t = o.getParent(i.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (m(), o.split(n, t), g()))
            },
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                d(e)
            },
            "ForeColor,HiliteColor": function (e, t, n) {
                d(e, n)
            },
            FontName: function (e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontname", {
                    value: Ym(r, o)
                }), r.nodeChanged()
            },
            FontSize: function (e, t, n) {
                var r, o;
                o = n, (r = s).formatter.toggle("fontsize", {
                    value: Ym(r, o)
                }), r.nodeChanged()
            },
            RemoveFormat: function (e) {
                a.remove(e)
            },
            mceBlockQuote: function () {
                d("blockquote")
            },
            FormatBlock: function (e, t, n) {
                return d(n || "p")
            },
            mceCleanup: function () {
                var e = i.getBookmark();
                s.setContent(s.getContent()), i.moveToBookmark(e)
            },
            mceRemoveNode: function (e, t, n) {
                var r = n || i.getNode();
                r !== s.getBody() && (m(), s.dom.remove(r, !0), g())
            },
            mceSelectNodeDepth: function (e, t, n) {
                var r = 0;
                o.getParent(i.getNode(), function (e) {
                    if (1 === e.nodeType && r++ === n) return i.select(e), !1
                }, s.getBody())
            },
            mceSelectNode: function (e, t, n) {
                i.select(n)
            },
            mceInsertContent: function (e, t, n) {
                uf(s, n)
            },
            mceInsertRawHTML: function (e, t, n) {
                var r = s.getContent();
                i.setContent("tiny_mce_marker"), s.setContent(r.replace(/tiny_mce_marker/g, function () {
                    return n
                }))
            },
            mceToggleFormat: function (e, t, n) {
                d(n)
            },
            mceSetContent: function (e, t, n) {
                s.setContent(n)
            },
            "Indent,Outdent": function (e) {
                Pg(s, e)
            },
            mceRepaint: function () {},
            InsertHorizontalRule: function () {
                s.execCommand("mceInsertContent", !1, "<hr />")
            },
            mceToggleVisualAid: function () {
                s.hasVisual = !s.hasVisual, s.addVisual()
            },
            mceReplaceContent: function (e, t, n) {
                s.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.getContent({
                    format: "text"
                })))
            },
            mceInsertLink: function (e, t, n) {
                var r;
                "string" == typeof n && (n = {
                    href: n
                }), r = o.getParent(i.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || a.remove("link"), n.href && a.apply("link", n, r)
            },
            selectAll: function () {
                var e = o.getParent(i.getStart(), Do.isContentEditableTrue);
                if (e) {
                    var t = o.createRng();
                    t.selectNodeContents(e), i.setRng(t)
                }
            },
            "delete": function () {
                Hm(s)
            },
            forwardDelete: function () {
                jm(s)
            },
            mceNewDocument: function () {
                s.setContent("")
            },
            InsertLineBreak: function (e, t, n) {
                return mg(s, n), !0
            }
        });
        var p = function (n) {
            return function () {
                var e = i.isCollapsed() ? [o.getParent(i.getNode(), o.isBlock)] : i.getSelectedBlocks(),
                    t = Mg(e, function (e) {
                        return !!a.matchNode(e, n)
                    });
                return -1 !== Fg(t, !0)
            }
        };
        e({
            JustifyLeft: p("alignleft"),
            JustifyCenter: p("aligncenter"),
            JustifyRight: p("alignright"),
            JustifyFull: p("alignjustify"),
            "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                return f(e)
            },
            mceBlockQuote: function () {
                return f("blockquote")
            },
            Outdent: function () {
                var e;
                if (n.inline_styles) {
                    if ((e = o.getParent(i.getStart(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0;
                    if ((e = o.getParent(i.getEnd(), o.isBlock)) && 0 < parseInt(e.style.paddingLeft, 10)) return !0
                }
                return r("InsertUnorderedList") || r("InsertOrderedList") || !n.inline_styles && !!o.getParent(i.getNode(), "BLOCKQUOTE")
            },
            "InsertUnorderedList,InsertOrderedList": function (e) {
                var t = o.getParent(i.getNode(), "ul,ol");
                return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
            }
        }, "state"), e({
            Undo: function () {
                s.undoManager.undo()
            },
            Redo: function () {
                s.undoManager.redo()
            }
        }), u("FontName", function () {
            return Xm(t = s).fold(function () {
                return Km(t).map(function (e) {
                    return Wm.getFontFamily(t.getBody(), e)
                }).getOr("")
            }, function (e) {
                return Wm.getFontFamily(t.getBody(), e)
            });
            var t
        }, this), u("FontSize", function () {
            return Xm(t = s).fold(function () {
                return Km(t).map(function (e) {
                    return Wm.getFontSize(t.getBody(), e)
                }).getOr("")
            }, function (e) {
                return Wm.getFontSize(t.getBody(), e)
            });
            var t
        }, this)
    }
    var zg = Yt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
        Vg = function (a) {
            var u, s, c = this,
                l = {},
                f = function () {
                    return !1
                },
                d = function () {
                    return !0
                };
            u = (a = a || {}).scope || c, s = a.toggleEvent || f;
            var r = function (e, t, n, r) {
                    var o, i, a;
                    if (!1 === t && (t = f), t)
                        for (t = {
                                func: t
                            }, r && Yt.extend(t, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = l[e]) || (o = l[e] = [], s(e, !0)), n ? o.unshift(t) : o.push(t);
                    return c
                },
                m = function (e, t) {
                    var n, r, o, i, a;
                    if (e)
                        for (n = (i = e.toLowerCase().split(" ")).length; n--;) {
                            if (e = i[n], r = l[e], !e) {
                                for (o in l) s(o, !1), delete l[o];
                                return c
                            }
                            if (r) {
                                if (t)
                                    for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), l[e] = r);
                                else r.length = 0;
                                r.length || (s(e, !1), delete l[e])
                            }
                        } else {
                            for (e in l) s(e, !1);
                            l = {}
                        }
                    return c
                };
            c.fire = function (e, t) {
                var n, r, o, i;
                if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = u), t.preventDefault || (t.preventDefault = function () {
                        t.isDefaultPrevented = d
                    }, t.stopPropagation = function () {
                        t.isPropagationStopped = d
                    }, t.stopImmediatePropagation = function () {
                        t.isImmediatePropagationStopped = d
                    }, t.isDefaultPrevented = f, t.isPropagationStopped = f, t.isImmediatePropagationStopped = f), a.beforeFire && a.beforeFire(t), n = l[e])
                    for (r = 0, o = n.length; r < o; r++) {
                        if ((i = n[r]).once && m(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t;
                        if (!1 === i.func.call(u, t)) return t.preventDefault(), t
                    }
                return t
            }, c.on = r, c.off = m, c.once = function (e, t, n) {
                return r(e, t, n, {
                    once: !0
                })
            }, c.has = function (e) {
                return e = e.toLowerCase(), !(!l[e] || 0 === l[e].length)
            }
        };
    Vg.isNative = function (e) {
        return !!zg[e.toLowerCase()]
    };
    var qg, Hg = function (n) {
            return n._eventDispatcher || (n._eventDispatcher = new Vg({
                scope: n,
                toggleEvent: function (e, t) {
                    Vg.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t)
                }
            })), n._eventDispatcher
        },
        jg = {
            fire: function (e, t, n) {
                if (this.removed && "remove" !== e) return t;
                if (t = Hg(this).fire(e, t, n), !1 !== n && this.parent)
                    for (var r = this.parent(); r && !t.isPropagationStopped();) r.fire(e, t, !1), r = r.parent();
                return t
            },
            on: function (e, t, n) {
                return Hg(this).on(e, t, n)
            },
            off: function (e, t) {
                return Hg(this).off(e, t)
            },
            once: function (e, t) {
                return Hg(this).once(e, t)
            },
            hasEventListeners: function (e) {
                return Hg(this).has(e)
            }
        },
        $g = function (e, t) {
            return e.fire("PreProcess", t)
        },
        Wg = function (e, t) {
            return e.fire("PostProcess", t)
        },
        Kg = function (e) {
            return e.fire("remove")
        },
        Xg = function (e, t) {
            return e.fire("SwitchMode", {
                mode: t
            })
        },
        Yg = function (e, t, n, r) {
            e.fire("ObjectResizeStart", {
                target: t,
                width: n,
                height: r
            })
        },
        Gg = function (e, t, n, r) {
            e.fire("ObjectResized", {
                target: t,
                width: n,
                height: r
            })
        },
        Jg = function (e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (r) {}
        },
        Qg = function (e, t) {
            var n, r, o;
            n = er.fromDom(e.getBody()), r = "mce-content-readonly", o = t, Wi.has(n, r) && !1 === o ? Wi.remove(n, r) : o && Wi.add(n, r), t ? (e.selection.controlSelection.hideResizeRect(), e.readonly = !0, e.getBody().contentEditable = "false") : (e.readonly = !1, e.getBody().contentEditable = "true", Jg(e, "StyleWithCSS", !1), Jg(e, "enableInlineTableEditing", !1), Jg(e, "enableObjectResizing", !1), e.focus(), e.nodeChanged())
        },
        Zg = function (e) {
            return e.readonly ? "readonly" : "design"
        },
        ep = pi.DOM,
        tp = function (e, t) {
            return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = ep.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
        },
        np = function (e, t, n) {
            var r;
            (r = e).hidden || r.readonly ? !0 === e.readonly && n.preventDefault() : e.fire(t, n)
        },
        rp = function (i, a) {
            var e, t;
            if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)
                if (e = tp(i, a), i.settings.event_root) {
                    if (qg || (qg = {}, i.editorManager.on("removeEditor", function () {
                            var e;
                            if (!i.editorManager.activeEditor && qg) {
                                for (e in qg) i.dom.unbind(tp(i, e));
                                qg = null
                            }
                        })), qg[a]) return;
                    t = function (e) {
                        for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                            var o = n[r].getBody();
                            (o === t || ep.isChildOf(t, o)) && np(n[r], a, e)
                        }
                    }, qg[a] = t, ep.bind(e, a, t)
                } else t = function (e) {
                    np(i, a, e)
                }, ep.bind(e, a, t), i.delegates[a] = t
        },
        op = {
            bindPendingEventDelegates: function () {
                var t = this;
                Yt.each(t._pendingNativeEvents, function (e) {
                    rp(t, e)
                })
            },
            toggleNativeEvent: function (e, t) {
                var n = this;
                "focus" !== e && "blur" !== e && (t ? n.initialized ? rp(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(tp(n, e), e, n.delegates[e]), delete n.delegates[e]))
            },
            unbindAllNativeEvents: function () {
                var e, t = this,
                    n = t.getBody(),
                    r = t.dom;
                if (t.delegates) {
                    for (e in t.delegates) t.dom.unbind(tp(t, e), e, t.delegates[e]);
                    delete t.delegates
                }!t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer()))
            }
        },
        ip = op = Yt.extend({}, jg, op),
        ap = Yt.each,
        up = Yt.explode,
        sp = {
            f9: 120,
            f10: 121,
            f11: 122
        },
        cp = Yt.makeMap("alt,ctrl,shift,meta,access");

    function lp(i) {
        var a = {},
            r = [],
            u = function (e) {
                var t, n, r = {};
                for (n in ap(up(e, "+"), function (e) {
                        e in cp ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = sp[e] || e.toUpperCase().charCodeAt(0))
                    }), t = [r.keyCode], cp) r[n] ? t.push(n) : r[n] = !1;
                return r.id = t.join(","), r.access && (r.alt = !0, Re.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (Re.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r
            },
            s = function (e, t, n, r) {
                var o;
                return (o = Yt.map(up(e, ">"), u))[o.length - 1] = Yt.extend(o[o.length - 1], {
                    func: n,
                    scope: r || i
                }), Yt.extend(o[0], {
                    desc: i.translate(t),
                    subpatterns: o.slice(1)
                })
            },
            o = function (e, t) {
                return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
            },
            c = function (e) {
                return e.func ? e.func.call(e.scope) : null
            };
        i.on("keyup keypress keydown", function (t) {
            var e, n;
            ((n = t).altKey || n.ctrlKey || n.metaKey || "keydown" === (e = t).type && 112 <= e.keyCode && e.keyCode <= 123) && !t.isDefaultPrevented() && (ap(a, function (e) {
                if (o(t, e)) return r = e.subpatterns.slice(0), "keydown" === t.type && c(e), !0
            }), o(t, r[0]) && (1 === r.length && "keydown" === t.type && c(r[0]), r.shift()))
        }), this.add = function (e, n, r, o) {
            var t;
            return "string" == typeof (t = r) ? r = function () {
                i.execCommand(t, !1, null)
            } : Yt.isArray(t) && (r = function () {
                i.execCommand(t[0], t[1], t[2])
            }), ap(up(Yt.trim(e.toLowerCase())), function (e) {
                var t = s(e, n, r, o);
                a[t.id] = t
            }), !0
        }, this.remove = function (e) {
            var t = s(e);
            return !!a[t.id] && (delete a[t.id], !0)
        }
    }
    var fp = function (e) {
            var t = e !== undefined ? e.dom() : document;
            return A.from(t.activeElement).map(er.fromDom)
        },
        dp = function (e) {
            var t = $r.owner(e).dom();
            return e.dom() === t.activeElement
        },
        mp = function (t) {
            return fp($r.owner(t)).filter(function (e) {
                return t.dom().contains(e.dom())
            })
        },
        gp = function (t, e) {
            return (n = e, n.collapsed ? A.from(eu(n.startContainer, n.startOffset)).map(er.fromDom) : A.none()).bind(function (e) {
                return bo(e) ? A.some(e) : !1 === Fr.contains(t, e) ? A.some(t) : A.none()
            });
            var n
        },
        pp = function (t, e) {
            gp(er.fromDom(t.getBody()), e).bind(function (e) {
                return rl.firstPositionIn(e.dom())
            }).fold(function () {
                t.selection.normalize()
            }, function (e) {
                return t.selection.setRng(e.toRange())
            })
        },
        hp = function (e) {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        },
        vp = function (e) {
            var t, n = e.getBody();
            return n && (t = er.fromDom(n), dp(t) || mp(t).isSome())
        },
        bp = function (e) {
            return e.inline ? vp(e) : (t = e).iframeElement && dp(er.fromDom(t.iframeElement));
            var t
        },
        yp = function (e) {
            return e.editorManager.setActive(e)
        },
        Cp = function (e, t) {
            e.removed || (t ? yp(e) : function (t) {
                var e = t.selection,
                    n = t.settings.content_editable,
                    r = t.getBody(),
                    o = e.getRng();
                t.quirks.refreshContentEditable();
                var i, a, u = (i = t, a = e.getNode(), i.dom.getParent(a, function (e) {
                    return "true" === i.dom.getContentEditable(e)
                }));
                if (t.$.contains(r, u)) return hp(u), pp(t, o), yp(t);
                t.bookmark !== undefined && !1 === bp(t) && Og(t).each(function (e) {
                    t.selection.setRng(e), o = e
                }), n || (Re.opera || hp(r), t.getWin().focus()), (Re.gecko || n) && (hp(r), pp(t, o)), yp(t)
            }(e))
        },
        xp = bp,
        wp = function (e, t) {
            return t.dom()[e]
        },
        Np = function (e, t) {
            return parseInt(Sr(t, e), 10)
        },
        Ep = b(wp, "clientWidth"),
        Sp = b(wp, "clientHeight"),
        Tp = b(Np, "margin-top"),
        kp = b(Np, "margin-left"),
        Ap = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f, d, m = er.fromDom(e.getBody()),
                g = e.inline ? m : $r.documentElement(m),
                p = (r = e.inline, i = t, a = n, u = (o = g).dom().getBoundingClientRect(), {
                    x: i - (r ? u.left + o.dom().clientLeft + kp(o) : 0),
                    y: a - (r ? u.top + o.dom().clientTop + Tp(o) : 0)
                });
            return c = p.x, l = p.y, f = Ep(s = g), d = Sp(s), 0 <= c && 0 <= l && c <= f && l <= d
        },
        _p = function (e) {
            var t, n = e.inline ? e.getBody() : e.getContentAreaContainer();
            return (t = n, A.from(t).map(er.fromDom)).map(function (e) {
                return Fr.contains($r.owner(e), e)
            }).getOr(!1)
        };

    function Rp(n) {
        var t, o = [],
            i = function () {
                var e, t = n.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
                    open: e = function () {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    },
                    close: e,
                    reposition: e,
                    getArgs: e
                }
            },
            a = function () {
                0 < o.length && i().reposition(o)
            },
            u = function (t) {
                K(o, function (e) {
                    return e === t
                }).each(function (e) {
                    o.splice(e, 1)
                })
            },
            r = function (r) {
                if (!n.removed && _p(n)) return V(o, function (e) {
                    return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
                    var t, n
                }).getOrThunk(function () {
                    n.editorManager.setActive(n);
                    var e, t = i().open(r, function () {
                        u(t), a()
                    });
                    return e = t, o.push(e), a(), t
                })
            };
        return (t = n).on("SkinLoaded", function () {
            var e = t.settings.service_message;
            e && r({
                text: e,
                type: "warning",
                timeout: 0,
                icon: ""
            })
        }), t.on("ResizeEditor ResizeWindow", function () {
            Le.requestAnimationFrame(a)
        }), t.on("remove", function () {
            F(o, function (e) {
                i().close(e)
            })
        }), {
            open: r,
            close: function () {
                A.from(o[0]).each(function (e) {
                    i().close(e), u(e), a()
                })
            },
            getNotifications: function () {
                return o
            }
        }
    }

    function Dp(r) {
        var o = [],
            i = function () {
                var e, t = r.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
                    open: e = function () {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    },
                    alert: e,
                    confirm: e,
                    close: e,
                    getParams: e,
                    setParams: e
                }
            },
            a = function (e, t) {
                return function () {
                    return t ? t.apply(e, arguments) : undefined
                }
            },
            u = function (e) {
                var t;
                o.push(e), t = e, r.fire("OpenWindow", {
                    win: t
                })
            },
            s = function (n) {
                K(o, function (e) {
                    return e === n
                }).each(function (e) {
                    var t;
                    o.splice(e, 1), t = n, r.fire("CloseWindow", {
                        win: t
                    }), 0 === o.length && r.focus()
                })
            },
            e = function () {
                return A.from(o[o.length - 1])
            };
        return r.on("remove", function () {
            F(o.slice(0), function (e) {
                i().close(e)
            })
        }), {
            windows: o,
            open: function (e, t) {
                r.editorManager.setActive(r), Dg(r);
                var n = i().open(e, t, s);
                return u(n), n
            },
            alert: function (e, t, n) {
                var r = i().alert(e, a(n || this, t), s);
                u(r)
            },
            confirm: function (e, t, n) {
                var r = i().confirm(e, a(n || this, t), s);
                u(r)
            },
            close: function () {
                e().each(function (e) {
                    i().close(e), s(e)
                })
            },
            getParams: function () {
                return e().map(i().getParams).getOr(null)
            },
            setParams: function (t) {
                e().each(function (e) {
                    i().setParams(e, t)
                })
            },
            getWindows: function () {
                return o
            }
        }
    }
    var Bp = Ni.PluginManager,
        Op = function (e, t) {
            var n = function (e, t) {
                for (var n in Bp.urls)
                    if (Bp.urls[n] + "/plugin" + t + ".js" === e) return n;
                return null
            }(t, e.suffix);
            return n ? "Failed to load plugin: " + n + " from url " + t : "Failed to load plugin url: " + t
        },
        Pp = function (e, t) {
            e.notificationManager.open({
                type: "error",
                text: t
            })
        },
        Lp = function (e, t) {
            e._skinLoaded ? Pp(e, t) : e.on("SkinLoaded", function () {
                Pp(e, t)
            })
        },
        Ip = function (e, t) {
            Lp(e, Op(e, t))
        },
        Mp = function (e, t) {
            Lp(e, "Failed to upload image: " + t)
        },
        Fp = Lp,
        Up = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = window.console;
            r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments))
        },
        zp = Ni.PluginManager,
        Vp = Ni.ThemeManager;

    function qp() {
        return new(ie.getOrDie("XMLHttpRequest"))
    }

    function Hp(u, s) {
        var r = {},
            n = function (e, r, o, t) {
                var i, n;
                (i = new qp).open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function (e) {
                    t(e.loaded / e.total * 100)
                }, i.onerror = function () {
                    o("Image upload failed due to a XHR Transport error. Code: " + i.status)
                }, i.onload = function () {
                    var e, t, n;
                    i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
                }, (n = new FormData).append("file", e.blob(), e.filename()), i.send(n)
            },
            c = function (e, t) {
                return {
                    url: t,
                    blobInfo: e,
                    status: !0
                }
            },
            l = function (e, t) {
                return {
                    url: "",
                    blobInfo: e,
                    status: !1,
                    error: t
                }
            },
            f = function (e, t) {
                Yt.each(r[e], function (e) {
                    e(t)
                }), delete r[e]
            },
            o = function (e, n) {
                return e = Yt.grep(e, function (e) {
                    return !u.isUploaded(e.blobUri())
                }), De.all(Yt.map(e, function (e) {
                    return u.isPending(e.blobUri()) ? (t = e.blobUri(), new De(function (e) {
                        r[t] = r[t] || [], r[t].push(e)
                    })) : (o = e, i = s.handler, a = n, u.markPending(o.blobUri()), new De(function (t) {
                        var n;
                        try {
                            var r = function () {
                                n && n.close()
                            };
                            i(o, function (e) {
                                r(), u.markUploaded(o.blobUri(), e), f(o.blobUri(), c(o, e)), t(c(o, e))
                            }, function (e) {
                                r(), u.removeFailed(o.blobUri()), f(o.blobUri(), l(o, e)), t(l(o, e))
                            }, function (e) {
                                e < 0 || 100 < e || (n || (n = a()), n.progressBar.value(e))
                            })
                        } catch (e) {
                            t(l(o, e.message))
                        }
                    }));
                    var o, i, a, t
                }))
            };
        return s = Yt.extend({
            credentials: !1,
            handler: n
        }, s), {
            upload: function (e, t) {
                return s.url || s.handler !== n ? o(e, t) : new De(function (e) {
                    e([])
                })
            }
        }
    }

    function jp(e, t) {
        return new(ie.getOrDie("Blob"))(e, t)
    }

    function $p() {
        return new(ie.getOrDie("FileReader"))
    }

    function Wp(e) {
        return new(ie.getOrDie("Uint8Array"))(e)
    }
    var Kp = function (e) {
            return ie.getOrDie("atob")(e)
        },
        Xp = function (e) {
            var t, n;
            return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
                type: t,
                data: e[1]
            }
        },
        Yp = function (e) {
            return 0 === e.indexOf("blob:") ? (i = e, new De(function (e, t) {
                var n = function () {
                    t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.")
                };
                try {
                    var r = new qp;
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function () {
                        200 === this.status ? e(this.response) : n()
                    }, r.onerror = n, r.send()
                } catch (o) {
                    n()
                }
            })) : 0 === e.indexOf("data:") ? (o = e, new De(function (e) {
                var t, n, r;
                o = Xp(o);
                try {
                    t = Kp(o.data)
                } catch (Kw) {
                    return void e(new jp([]))
                }
                for (n = new Wp(t.length), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
                e(new jp([n], {
                    type: o.type
                }))
            })) : null;
            var i, o
        },
        Gp = function (n) {
            return new De(function (e) {
                var t = new $p;
                t.onloadend = function () {
                    e(t.result)
                }, t.readAsDataURL(n)
            })
        },
        Jp = Xp,
        Qp = 0,
        Zp = function (e) {
            return (e || "blobid") + Qp++
        },
        eh = function (n, r, o, t) {
            var i, a;
            0 !== r.src.indexOf("blob:") ? (i = Jp(r.src).data, (a = n.findFirst(function (e) {
                return e.base64() === i
            })) ? o({
                image: r,
                blobInfo: a
            }) : Yp(r.src).then(function (e) {
                a = n.create(Zp(), e, i), n.add(a), o({
                    image: r,
                    blobInfo: a
                })
            }, function (e) {
                t(e)
            })) : (a = n.getByUri(r.src)) ? o({
                image: r,
                blobInfo: a
            }) : Yp(r.src).then(function (t) {
                Gp(t).then(function (e) {
                    i = Jp(e).data, a = n.create(Zp(), t, i), n.add(a), o({
                        image: r,
                        blobInfo: a
                    })
                })
            }, function (e) {
                t(e)
            })
        },
        th = function (e) {
            return e ? e.getElementsByTagName("img") : []
        },
        nh = 0,
        rh = {
            uuid: function (e) {
                return e + nh++ + (t = function () {
                    return Math.round(4294967295 * Math.random()).toString(36)
                }, "s" + (new Date).getTime().toString(36) + t() + t() + t());
                var t
            }
        };

    function oh(u) {
        var n, o, i, t, e, a, r, s, c, l, f = (n = [], o = ya.constant, i = function (e) {
                var t, n, r;
                if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                return t = e.id || rh.uuid("blobid"), n = e.name || t, {
                    id: o(t),
                    name: o(n),
                    filename: o(n + "." + (r = e.blob.type, {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/gif": "gif",
                        "image/png": "png"
                    } [r.toLowerCase()] || "dat")),
                    blob: o(e.blob),
                    base64: o(e.base64),
                    blobUri: o(e.blobUri || ue.createObjectURL(e.blob)),
                    uri: o(e.uri)
                }
            }, {
                create: function (e, t, n, r) {
                    return i("object" == typeof e ? e : {
                        id: e,
                        name: r,
                        blob: t,
                        base64: n
                    })
                },
                add: function (e) {
                    t(e.id()) || n.push(e)
                },
                get: t = function (t) {
                    return e(function (e) {
                        return e.id() === t
                    })
                },
                getByUri: function (t) {
                    return e(function (e) {
                        return e.blobUri() === t
                    })
                },
                findFirst: e = function (e) {
                    return jt.filter(n, e)[0]
                },
                removeByUri: function (t) {
                    n = jt.filter(n, function (e) {
                        return e.blobUri() !== t || (ue.revokeObjectURL(e.blobUri()), !1)
                    })
                },
                destroy: function () {
                    jt.each(n, function (e) {
                        ue.revokeObjectURL(e.blobUri())
                    }), n = []
                }
            }),
            d = u.settings,
            m = (s = {}, c = function (e, t) {
                return {
                    status: e,
                    resultUri: t
                }
            }, {
                hasBlobUri: l = function (e) {
                    return e in s
                },
                getResultUri: function (e) {
                    var t = s[e];
                    return t ? t.resultUri : null
                },
                isPending: function (e) {
                    return !!l(e) && 1 === s[e].status
                },
                isUploaded: function (e) {
                    return !!l(e) && 2 === s[e].status
                },
                markPending: function (e) {
                    s[e] = c(1, null)
                },
                markUploaded: function (e, t) {
                    s[e] = c(2, t)
                },
                removeFailed: function (e) {
                    delete s[e]
                },
                destroy: function () {
                    s = {}
                }
            }),
            g = function (t) {
                return function (e) {
                    return u.selection ? t(e) : []
                }
            },
            p = function (e, t, n) {
                for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;);
                return e
            },
            h = function (e, t, n) {
                return e = p(e, 'src="' + t + '"', 'src="' + n + '"'), e = p(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            },
            v = function (t, n) {
                jt.each(u.undoManager.data, function (e) {
                    "fragmented" === e.type ? e.fragments = jt.map(e.fragments, function (e) {
                        return h(e, t, n)
                    }) : e.content = h(e.content, t, n)
                })
            },
            b = function () {
                return u.notificationManager.open({
                    text: u.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            },
            y = function (e, t) {
                f.removeByUri(e.src), v(e.src, t), u.$(e).attr({
                    src: d.images_reuse_filename ? t + "?" + (new Date).getTime() : t,
                    "data-mce-src": u.convertURL(t, "src")
                })
            },
            C = function (n) {
                return a || (a = Hp(m, {
                    url: d.images_upload_url,
                    basePath: d.images_upload_base_path,
                    credentials: d.images_upload_credentials,
                    handler: d.images_upload_handler
                })), N().then(g(function (r) {
                    var e;
                    return e = jt.map(r, function (e) {
                        return e.blobInfo
                    }), a.upload(e, b).then(g(function (e) {
                        var t = jt.map(e, function (e, t) {
                            var n = r[t].image;
                            return e.status && !1 !== u.settings.images_replace_blob_uris ? y(n, e.url) : e.error && Mp(u, e.error), {
                                element: n,
                                status: e.status
                            }
                        });
                        return n && n(t), t
                    }))
                }))
            },
            x = function (e) {
                if (!1 !== d.automatic_uploads) return C(e)
            },
            w = function (e) {
                return !d.images_dataimg_filter || d.images_dataimg_filter(e)
            },
            N = function () {
                var o, i, a;
                return r || (o = m, i = f, a = {}, r = {
                    findAll: function (e, n) {
                        var t;
                        n || (n = ya.constant(!0)), t = jt.filter(th(e), function (e) {
                            var t = e.src;
                            return !!Re.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === Re.transparentSrc) && (0 === t.indexOf("blob:") ? !o.isUploaded(t) : 0 === t.indexOf("data:") && n(e))
                        });
                        var r = jt.map(t, function (n) {
                            if (a[n.src]) return new De(function (t) {
                                a[n.src].then(function (e) {
                                    if ("string" == typeof e) return e;
                                    t({
                                        image: n,
                                        blobInfo: e.blobInfo
                                    })
                                })
                            });
                            var e = new De(function (e, t) {
                                eh(i, n, e, t)
                            }).then(function (e) {
                                return delete a[e.image.src], e
                            })["catch"](function (e) {
                                return delete a[n.src], e
                            });
                            return a[n.src] = e
                        });
                        return De.all(r)
                    }
                }), r.findAll(u.getBody(), w).then(g(function (e) {
                    return e = jt.filter(e, function (e) {
                        return "string" != typeof e || (Fp(u, e), !1)
                    }), jt.each(e, function (e) {
                        v(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), e
                }))
            },
            E = function (e) {
                return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
                    var t = m.getResultUri(n);
                    if (t) return 'src="' + t + '"';
                    var r = f.getByUri(n);
                    return r || (r = jt.reduce(u.editorManager.get(), function (e, t) {
                        return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n)
                    }, null)), r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e
                })
            };
        return u.on("setContent", function () {
            !1 !== u.settings.automatic_uploads ? x() : N()
        }), u.on("RawSaveContent", function (e) {
            e.content = E(e.content)
        }), u.on("getContent", function (e) {
            e.source_view || "raw" === e.format || (e.content = E(e.content))
        }), u.on("PostRender", function () {
            u.parser.addNodeFilter("img", function (e) {
                jt.each(e, function (e) {
                    var t = e.attr("src");
                    if (!f.getByUri(t)) {
                        var n = m.getResultUri(t);
                        n && e.attr("src", n)
                    }
                })
            })
        }), {
            blobCache: f,
            uploadImages: C,
            uploadImagesAuto: x,
            scanForImages: N,
            destroy: function () {
                f.destroy(), m.destroy(), r = a = null
            }
        }
    }
    var ih = function (e, t) {
            return e.hasOwnProperty(t.nodeName)
        },
        ah = function (e, t) {
            if (Do.isText(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || ih(e, t.nextSibling))) return !0
            }
            return !1
        },
        uh = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.dom,
                g = e.selection,
                p = e.schema,
                h = p.getBlockElements(),
                v = g.getStart(),
                b = e.getBody();
            if (f = d.forced_root_block, v && Do.isElement(v) && f && (l = b.nodeName.toLowerCase(), p.isValidChild(l, f.toLowerCase()) && (y = h, C = b, x = v, !M(zf(er.fromDom(x), er.fromDom(C)), function (e) {
                    return ih(y, e.dom())
                })))) {
                var y, C, x, w, N;
                for (n = (t = g.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, c = xp(e), v = b.firstChild; v;)
                    if (w = h, N = v, Do.isText(N) || Do.isElement(N) && !ih(w, N) && !ml(N)) {
                        if (ah(h, v)) {
                            v = (u = v).nextSibling, m.remove(u);
                            continue
                        }
                        a || (a = m.create(f, e.settings.forced_root_block_attrs), v.parentNode.insertBefore(a, v), s = !0), v = (u = v).nextSibling, a.appendChild(u)
                    } else a = null, v = v.nextSibling;
                s && c && (t.setStart(n, r), t.setEnd(o, i), g.setRng(t), e.nodeChanged())
            }
        },
        sh = function (e) {
            e.settings.forced_root_block && e.on("NodeChange", b(uh, e))
        },
        ch = function (t) {
            return $r.firstChild(t).fold(H([t]), function (e) {
                return [t].concat(ch(e))
            })
        },
        lh = function (t) {
            return $r.lastChild(t).fold(H([t]), function (e) {
                return "br" === sr.name(e) ? $r.prevSibling(e).map(function (e) {
                    return [t].concat(lh(e))
                }).getOr([]) : [t].concat(lh(e))
            })
        },
        fh = function (o, e) {
            return ru([(i = e, a = i.startContainer, u = i.startOffset, Do.isText(a) ? 0 === u ? A.some(er.fromDom(a)) : A.none() : A.from(a.childNodes[u]).map(er.fromDom)), (t = e, n = t.endContainer, r = t.endOffset, Do.isText(n) ? r === n.data.length ? A.some(er.fromDom(n)) : A.none() : A.from(n.childNodes[r - 1]).map(er.fromDom))], function (e, t) {
                var n = V(ch(o), b(Fr.eq, e)),
                    r = V(lh(o), b(Fr.eq, t));
                return n.isSome() && r.isSome()
            }).getOr(!1);
            var t, n, r, i, a, u
        },
        dh = function (e, t, n, r) {
            var o = n,
                i = new oo(n, o),
                a = e.schema.getNonEmptyElements();
            do {
                if (3 === n.nodeType && 0 !== Yt.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                if (Re.ie && Re.ie < 11 && e.isBlock(n) && e.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
            } while (n = r ? i.next() : i.prev());
            "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
        },
        mh = function (e) {
            var t = e.selection.getSel();
            return t && 0 < t.rangeCount
        };

    function gh(i) {
        var r, o = [];
        "onselectionchange" in i.getDoc() || i.on("NodeChange Click MouseUp KeyUp Focus", function (e) {
            var t, n;
            n = {
                startContainer: (t = i.selection.getRng()).startContainer,
                startOffset: t.startOffset,
                endContainer: t.endContainer,
                endOffset: t.endOffset
            }, "nodechange" !== e.type && Gm(n, r) || i.fire("SelectionChange"), r = n
        }), i.on("contextmenu", function () {
            i.fire("SelectionChange")
        }), i.on("SelectionChange", function () {
            var e = i.selection.getStart(!0);
            !e || !Re.range && i.selection.isCollapsed() || mh(i) && ! function (e) {
                var t, n;
                if ((n = i.$(e).parentsUntil(i.getBody()).add(e)).length === o.length) {
                    for (t = n.length; 0 <= t && n[t] === o[t]; t--);
                    if (-1 === t) return o = n, !0
                }
                return o = n, !1
            }(e) && i.dom.isChildOf(e, i.getBody()) && i.nodeChanged({
                selectionChange: !0
            })
        }), i.on("MouseUp", function (e) {
            !e.isDefaultPrevented() && mh(i) && ("IMG" === i.selection.getNode().nodeName ? Le.setEditorTimeout(i, function () {
                i.nodeChanged()
            }) : i.nodeChanged())
        }), this.nodeChanged = function (e) {
            var t, n, r, o = i.selection;
            i.initialized && o && !i.settings.disable_nodechange && !i.readonly && (r = i.getBody(), (t = o.getStart(!0) || r).ownerDocument === i.getDoc() && i.dom.isChildOf(t, r) || (t = r), n = [], i.dom.getParent(t, function (e) {
                if (e === r) return !0;
                n.push(e)
            }), (e = e || {}).element = t, e.parents = n, i.fire("NodeChange", e))
        }
    }
    var ph, hh, vh = function (e) {
            var t, n, r, o;
            return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
            }
        },
        bh = function (e, t) {
            return n = (u = e).inline ? vh(u.getBody()) : {
                left: 0,
                top: 0
            }, a = (i = e).getBody(), r = i.inline ? {
                left: a.scrollLeft,
                top: a.scrollTop
            } : {
                left: 0,
                top: 0
            }, {
                pageX: (o = function (e, t) {
                    if (t.target.ownerDocument !== e.getDoc()) {
                        var n = vh(e.getContentAreaContainer()),
                            r = (i = (o = e).getBody(), a = o.getDoc().documentElement, u = {
                                left: i.scrollLeft,
                                top: i.scrollTop
                            }, s = {
                                left: i.scrollLeft || a.scrollLeft,
                                top: i.scrollTop || a.scrollTop
                            }, o.inline ? u : s);
                        return {
                            left: t.pageX - n.left + r.left,
                            top: t.pageY - n.top + r.top
                        }
                    }
                    var o, i, a, u, s;
                    return {
                        left: t.pageX,
                        top: t.pageY
                    }
                }(e, t)).left - n.left + r.left,
                pageY: o.top - n.top + r.top
            };
            var n, r, o, i, a, u
        },
        yh = Do.isContentEditableFalse,
        Ch = Do.isContentEditableTrue,
        xh = function (e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        },
        wh = function (u, s) {
            return function (e) {
                if (0 === e.button) {
                    var t = jt.find(s.dom.getParents(e.target), ya.or(yh, Ch));
                    if (i = s.getBody(), yh(a = t) && a !== i) {
                        var n = s.dom.getPos(t),
                            r = s.getBody(),
                            o = s.getDoc().documentElement;
                        u.element = t, u.screenX = e.screenX, u.screenY = e.screenY, u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2, u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2, u.relX = e.pageX - n.x, u.relY = e.pageY - n.y, u.width = t.offsetWidth, u.height = t.offsetHeight, u.ghost = function (e, t, n, r) {
                            var o = t.cloneNode(!0);
                            e.dom.setStyles(o, {
                                width: n,
                                height: r
                            }), e.dom.setAttrib(o, "data-mce-selected", null);
                            var i = e.dom.create("div", {
                                "class": "mce-drag-container",
                                "data-mce-bogus": "all",
                                unselectable: "on",
                                contenteditable: "false"
                            });
                            return e.dom.setStyles(i, {
                                position: "absolute",
                                opacity: .5,
                                overflow: "hidden",
                                border: 0,
                                padding: 0,
                                margin: 0,
                                width: n,
                                height: r
                            }), e.dom.setStyles(o, {
                                margin: 0,
                                boxSizing: "border-box"
                            }), i.appendChild(o), i
                        }(s, t, u.width, u.height)
                    }
                }
                var i, a
            }
        },
        Nh = function (l, f) {
            return function (e) {
                if (l.dragging && (s = (i = f).selection, c = s.getSel().getRangeAt(0).startContainer, a = 3 === c.nodeType ? c.parentNode : c, u = l.element, a !== u && !i.dom.isChildOf(a, u) && !yh(a))) {
                    var t = (r = l.element, (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"), o),
                        n = f.fire("drop", {
                            targetClone: t,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                    n.isDefaultPrevented() || (t = n.targetClone, f.undoManager.transact(function () {
                        xh(l.element), f.insertContent(f.dom.getOuterHTML(t)), f._selectionOverrides.hideFakeCaret()
                    }))
                }
                var r, o, i, a, u, s, c;
                Eh(l)
            }
        },
        Eh = function (e) {
            e.dragging = !1, e.element = null, xh(e.ghost)
        },
        Sh = function (e) {
            var t, n, r, o, i, a, p, h, v, u, s, c = {};
            t = pi.DOM, a = document, n = wh(c, e), p = c, h = e, v = Le.throttle(function (e, t) {
                h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t)
            }, 0), r = function (e) {
                var t, n, r, o, i, a, u, s, c, l, f, d, m = Math.max(Math.abs(e.screenX - p.screenX), Math.abs(e.screenY - p.screenY));
                if (p.element && !p.dragging && 10 < m) {
                    if (h.fire("dragstart", {
                            target: p.element
                        }).isDefaultPrevented()) return;
                    p.dragging = !0, h.focus()
                }
                if (p.dragging) {
                    var g = (f = p, {
                        pageX: (d = bh(h, e)).pageX - f.relX,
                        pageY: d.pageY + 5
                    });
                    c = p.ghost, l = h.getBody(), c.parentNode !== l && l.appendChild(c), t = p.ghost, n = g, r = p.width, o = p.height, i = p.maxX, a = p.maxY, s = u = 0, t.style.left = n.pageX + "px", t.style.top = n.pageY + "px", n.pageX + r > i && (u = n.pageX + r - i), n.pageY + o > a && (s = n.pageY + o - a), t.style.width = r - u + "px", t.style.height = o - s + "px", v(e.clientX, e.clientY)
                }
            }, o = Nh(c, e), u = c, i = function () {
                u.dragging && s.fire("dragend"), Eh(u)
            }, (s = e).on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function () {
                t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i)
            })
        },
        Th = function (e) {
            var n;
            Sh(e), (n = e).on("drop", function (e) {
                var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (yh(t) || yh(n.dom.getContentEditableParent(t))) && e.preventDefault()
            })
        },
        kh = function (e) {
            return jt.reduce(e, function (e, t) {
                return e.concat(function (t) {
                    var e = function (e) {
                        return jt.map(e, function (e) {
                            return (e = Xa(e)).node = t, e
                        })
                    };
                    if (Do.isElement(t)) return e(t.getClientRects());
                    if (Do.isText(t)) {
                        var n = t.ownerDocument.createRange();
                        return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects())
                    }
                }(t))
            }, [])
        };
    (hh = ph || (ph = {}))[hh.Up = -1] = "Up", hh[hh.Down = 1] = "Down";
    var Ah = function (o, i, a, e, u, t) {
            var n, s, c = 0,
                l = [],
                r = function (e) {
                    var t, n, r;
                    for (r = kh([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (n = r[t], !a(n, s)) {
                            if (0 < l.length && i(n, jt.last(l)) && c++, n.line = c, u(n)) return !0;
                            l.push(n)
                        }
                };
            return (s = jt.last(t.getClientRects())) && (r(n = t.getNode()), function (e, t, n, r) {
                for (; r = Pc(r, e, Wa, t);)
                    if (n(r)) return
            }(o, e, r, n)), l
        },
        _h = b(Ah, ph.Up, Ja, Qa),
        Rh = b(Ah, ph.Down, Qa, Ja),
        Dh = function (n) {
            return function (e) {
                return t = n, e.line > t;
                var t
            }
        },
        Bh = function (n) {
            return function (e) {
                return t = n, e.line === t;
                var t
            }
        },
        Oh = Do.isContentEditableFalse,
        Ph = Pc,
        Lh = function (e, t) {
            return Math.abs(e.left - t)
        },
        Ih = function (e, t) {
            return Math.abs(e.right - t)
        },
        Mh = function (e, t) {
            return e >= t.left && e <= t.right
        },
        Fh = function (e, o) {
            return jt.reduce(e, function (e, t) {
                var n, r;
                return n = Math.min(Lh(e, o), Ih(e, o)), r = Math.min(Lh(t, o), Ih(t, o)), Mh(o, t) ? t : Mh(o, e) ? e : r === n && Oh(t.node) ? t : r < n ? t : e
            })
        },
        Uh = function (e, t, n, r) {
            for (; r = Ph(r, e, Wa, t);)
                if (n(r)) return
        },
        zh = function (e, t, n) {
            var r, o, i, a, u, s, c, l, f = kh((o = e, jt.filter(jt.toArray(o.getElementsByTagName("*")), Nc))),
                d = jt.filter(f, function (e) {
                    return n >= e.top && n <= e.bottom
                });
            return (r = Fh(d, t)) && (r = Fh((u = e, l = function (t, e) {
                var n;
                return n = jt.filter(kh([e]), function (e) {
                    return !t(e, s)
                }), c = c.concat(n), 0 === n.length
            }, (c = []).push(s = r), Uh(ph.Up, u, b(l, Ja), s.node), Uh(ph.Down, u, b(l, Qa), s.node), c), t)) && Nc(r.node) ? (a = t, {
                node: (i = r).node,
                before: Lh(i, a) < Ih(i, a)
            }) : null
        },
        Vh = function (i, a, e) {
            return !e.collapsed && z(e.getClientRects(), function (e, t) {
                return e || (o = a, (r = i) >= (n = t).left && r <= n.right && o >= n.top && o <= n.bottom);
                var n, r, o
            }, !1)
        },
        qh = function (t) {
            var e = Di(function () {
                if (!t.removed && t.selection.getRng().collapsed) {
                    var e = ls(t, t.selection.getRng(), !1);
                    t.selection.setRng(e)
                }
            }, 0);
            t.on("focus", function () {
                e.throttle()
            }), t.on("blur", function () {
                e.cancel()
            })
        },
        Hh = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function (e) {
                return Re.mac ? e.metaKey : e.ctrlKey && !e.altKey
            }
        },
        jh = Do.isContentEditableTrue,
        $h = Do.isContentEditableFalse,
        Wh = Xc,
        Kh = Kc,
        Xh = function (e, t) {
            for (var n = e.getBody(); t && t !== n;) {
                if (jh(t) || $h(t)) return t;
                t = t.parentNode
            }
            return null
        },
        Yh = function (g) {
            var p, e, t, a = g.getBody(),
                o = wc(g.getBody(), function (e) {
                    return g.dom.isBlock(e)
                }, function () {
                    return xp(g)
                }),
                h = "sel-" + g.dom.uniqueId(),
                u = function (e) {
                    e && g.selection.setRng(e)
                },
                s = function () {
                    return g.selection.getRng()
                },
                v = function (e, t, n, r) {
                    return void 0 === r && (r = !0), g.fire("ShowCaret", {
                        target: t,
                        direction: e,
                        before: n
                    }).isDefaultPrevented() ? null : (r && g.selection.scrollIntoView(t, -1 === e), o.show(n, t))
                },
                b = function (e, t) {
                    return t = qc(e, a, t), -1 === e ? Su.fromRangeStart(t) : Su.fromRangeEnd(t)
                },
                n = function (e) {
                    return Aa(e) || Oa(e) || Pa(e)
                },
                y = function (e) {
                    return n(e.startContainer) || n(e.endContainer)
                },
                c = function (e, t) {
                    var n, r, o, i, a, u, s, c, l, f, d = g.$,
                        m = g.dom;
                    if (!e) return null;
                    if (e.collapsed) {
                        if (!y(e))
                            if (!1 === t) {
                                if (c = b(-1, e), Nc(c.getNode(!0))) return v(-1, c.getNode(!0), !1, !1);
                                if (Nc(c.getNode())) return v(-1, c.getNode(), !c.isAtEnd(), !1)
                            } else {
                                if (c = b(1, e), Nc(c.getNode())) return v(1, c.getNode(), !c.isAtEnd(), !1);
                                if (Nc(c.getNode(!0))) return v(1, c.getNode(!0), !1, !1)
                            }
                        return null
                    }
                    return i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && $h(i.parentNode) && (i = i.parentNode, a = m.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType ? null : (u === a + 1 && (n = i.childNodes[a]), $h(n) ? (l = f = n.cloneNode(!0), (s = g.fire("ObjectSelected", {
                        target: n,
                        targetClone: l
                    })).isDefaultPrevented() ? null : (r = na(er.fromDom(g.getBody()), "#" + h).fold(function () {
                        return d([])
                    }, function (e) {
                        return d([e.dom()])
                    }), l = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", h)).appendTo(g.getBody()), e = g.dom.createRng(), l === f && Re.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(l)) : (r.empty().append("\xa0").append(l).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({
                        top: m.getPos(n, g.getBody()).y
                    }), r[0].focus(), (o = g.selection.getSel()).removeAllRanges(), o.addRange(e), F(Ki(er.fromDom(g.getBody()), "*[data-mce-selected]"), function (e) {
                        hr.remove(e, "data-mce-selected")
                    }), n.setAttribute("data-mce-selected", "1"), p = n, C(), e)) : null)
                },
                l = function () {
                    p && (p.removeAttribute("data-mce-selected"), na(er.fromDom(g.getBody()), "#" + h).each(Ri.remove), p = null), na(er.fromDom(g.getBody()), "#" + h).each(Ri.remove), p = null
                },
                C = function () {
                    o.hide()
                };
            return Re.ceFalse && (function () {
                g.on("mouseup", function (e) {
                    var t = s();
                    t.collapsed && Ap(g, e.clientX, e.clientY) && u(cs(g, t, !1))
                }), g.on("click", function (e) {
                    var t;
                    (t = Xh(g, e.target)) && ($h(t) && (e.preventDefault(), g.focus()), jh(t) && g.dom.isChildOf(t, g.selection.getNode()) && l())
                }), g.on("blur NewBlock", function () {
                    l()
                }), g.on("ResizeWindow FullscreenStateChanged", function () {
                    return o.reposition()
                });
                var n, r, i = function (e, t) {
                    var n, r, o = g.dom.getParent(e, g.dom.isBlock),
                        i = g.dom.getParent(t, g.dom.isBlock);
                    return !(!o || !g.dom.isChildOf(o, i) || !1 !== $h(Xh(g, o))) || o && (n = o, r = i, !(g.dom.getParent(n, g.dom.isBlock) === g.dom.getParent(r, g.dom.isBlock))) && function (e) {
                        var t = Ns(e);
                        if (!e.firstChild) return !1;
                        var n = Su.before(e.firstChild),
                            r = t.next(n);
                        return r && !Kh(r) && !Wh(r)
                    }(o)
                };
                r = !1, (n = g).on("touchstart", function () {
                    r = !1
                }), n.on("touchmove", function () {
                    r = !0
                }), n.on("touchend", function (e) {
                    var t = Xh(n, e.target);
                    $h(t) && (r || (e.preventDefault(), c(ss(n, t))))
                }), g.on("mousedown", function (e) {
                    var t, n = e.target;
                    if ((n === a || "HTML" === n.nodeName || g.dom.isChildOf(n, a)) && !1 !== Ap(g, e.clientX, e.clientY))
                        if (t = Xh(g, n)) $h(t) ? (e.preventDefault(), c(ss(g, t))) : (l(), jh(t) && e.shiftKey || Vh(e.clientX, e.clientY, g.selection.getRng()) || (C(), g.selection.placeCaretAt(e.clientX, e.clientY)));
                        else if (!1 === Nc(n)) {
                        l(), C();
                        var r = zh(a, e.clientX, e.clientY);
                        if (r && !i(e.target, r.node)) {
                            e.preventDefault();
                            var o = v(1, r.node, r.before, !1);
                            g.getBody().focus(), u(o)
                        }
                    }
                }), g.on("keypress", function (e) {
                    Hh.modifierPressed(e) || (e.keyCode, $h(g.selection.getNode()) && e.preventDefault())
                }), g.on("getSelectionRange", function (e) {
                    var t = e.range;
                    if (p) {
                        if (!p.parentNode) return void(p = null);
                        (t = t.cloneRange()).selectNode(p), e.range = t
                    }
                }), g.on("setSelectionRange", function (e) {
                    var t;
                    (t = c(e.range, e.forward)) && (e.range = t)
                }), g.on("AfterSetSelectionRange", function (e) {
                    var t, n = e.range;
                    y(n) || "mcepastebin" === n.startContainer.parentNode.id || C(), t = n.startContainer.parentNode, g.dom.hasClass(t, "mce-offscreen-selection") || l()
                }), g.on("copy", function (e) {
                    var t, n = e.clipboardData;
                    if (!e.isDefaultPrevented() && e.clipboardData && !Re.ie) {
                        var r = (t = g.dom.get(h)) ? t.getElementsByTagName("*")[0] : t;
                        r && (e.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText))
                    }
                }), Th(g), qh(g)
            }(), e = g.contentStyles, t = ".mce-content-body", e.push(o.getCss()), e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")), {
                showCaret: v,
                showBlockCaretContainer: function (e) {
                    e.hasAttribute("data-mce-caret") && (La(e), u(s()), g.selection.scrollIntoView(e[0]))
                },
                hideFakeCaret: C,
                destroy: function () {
                    o.destroy(), p = null
                }
            }
        },
        Gh = function (e, t, n) {
            var r, o, i, a, u = 1;
            for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) {
                if (r = i.lastIndex, "/" === o[1]) u--;
                else if (!o[1]) {
                    if (o[2] in a) continue;
                    u++
                }
                if (0 === u) break
            }
            return r
        };

    function Jh(F, U) {
        void 0 === U && (U = ni());
        var e = function () {};
        !1 !== (F = F || {}).fix_self_closing && (F.fix_self_closing = !0);
        var z = F.comment ? F.comment : e,
            V = F.cdata ? F.cdata : e,
            q = F.text ? F.text : e,
            H = F.start ? F.start : e,
            j = F.end ? F.end : e,
            $ = F.pi ? F.pi : e,
            W = F.doctype ? F.doctype : e;
        return {
            parse: function (e) {
                var t, n, r, d, o, i, a, m, u, s, g, c, p, l, f, h, v, b, y, C, x, w, N, E, S, T, k, A, _, R = 0,
                    D = [],
                    B = 0,
                    O = $o.decode,
                    P = Yt.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    L = /((java|vb)script|mhtml):/i,
                    I = function (e) {
                        var t, n;
                        for (t = D.length; t-- && D[t].name !== e;);
                        if (0 <= t) {
                            for (n = D.length - 1; t <= n; n--)(e = D[n]).valid && j(e.name);
                            D.length = t
                        }
                    },
                    M = function (e, t, n, r, o) {
                        var i, a, u, s, c;
                        if (n = (t = t.toLowerCase()) in g ? t : O(n || r || o || ""), p && !m && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) {
                            if (!(i = b[t]) && y) {
                                for (a = y.length; a-- && !(i = y[a]).pattern.test(t);); - 1 === a && (i = null)
                            }
                            if (!i) return;
                            if (i.validValues && !(n in i.validValues)) return
                        }
                        if (P[t] && !F.allow_script_urls) {
                            var l = n.replace(/[\s\u0000-\u001F]+/g, "");
                            try {
                                l = decodeURIComponent(l)
                            } catch (f) {
                                l = unescape(l)
                            }
                            if (L.test(l)) return;
                            if (c = l, !(s = F).allow_html_data_urls && (/^data:image\//i.test(c) ? !1 === s.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(c) : /^data:/i.test(c))) return
                        }
                        m && (t in P || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({
                            name: t,
                            value: n
                        }))
                    };
                for (S = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), T = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, s = U.getShortEndedElements(), E = F.self_closing_elements || U.getSelfClosingElements(), g = U.getBoolAttrs(), p = F.validate, u = F.remove_internals, _ = F.fix_self_closing, k = U.getSpecialElements(), N = e + ">"; t = S.exec(N);) {
                    if (R < t.index && q(O(e.substr(R, t.index - R))), n = t[6]) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), I(n);
                    else if (n = t[7]) {
                        if (t.index + t[0].length > e.length) {
                            q(O(e.substr(t.index))), R = t.index + t[0].length;
                            continue
                        }
                        if (":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), c = n in s, _ && E[n] && 0 < D.length && D[D.length - 1].name === n && I(n), !p || (l = U.getElementRule(n))) {
                            if (f = !0, p && (b = l.attributes, y = l.attributePatterns), (v = t[8]) ? ((m = -1 !== v.indexOf("data-mce-type")) && u && (f = !1), (d = []).map = {}, v.replace(T, M)) : (d = []).map = {}, p && !m) {
                                if (C = l.attributesRequired, x = l.attributesDefault, w = l.attributesForced, l.removeEmptyAttrs && !d.length && (f = !1), w)
                                    for (o = w.length; o--;) a = (h = w[o]).name, "{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    });
                                if (x)
                                    for (o = x.length; o--;)(a = (h = x[o]).name) in d.map || ("{$uid}" === (A = h.value) && (A = "mce_" + B++), d.map[a] = A, d.push({
                                        name: a,
                                        value: A
                                    }));
                                if (C) {
                                    for (o = C.length; o-- && !(C[o] in d.map);); - 1 === o && (f = !1)
                                }
                                if (h = d.map["data-mce-bogus"]) {
                                    if ("all" === h) {
                                        R = Gh(U, e, S.lastIndex), S.lastIndex = R;
                                        continue
                                    }
                                    f = !1
                                }
                            }
                            f && H(n, d, c)
                        } else f = !1;
                        if (r = k[n]) {
                            r.lastIndex = R = t.index + t[0].length, (t = r.exec(e)) ? (f && (i = e.substr(R, t.index - R)), R = t.index + t[0].length) : (i = e.substr(R), R = e.length), f && (0 < i.length && q(i, !0), j(n)), S.lastIndex = R;
                            continue
                        }
                        c || (v && v.indexOf("/") === v.length - 1 ? f && j(n) : D.push({
                            name: n,
                            valid: f
                        }))
                    } else(n = t[1]) ? (">" === n.charAt(0) && (n = " " + n), F.allow_conditional_comments || "[if" !== n.substr(0, 3).toLowerCase() || (n = " " + n), z(n)) : (n = t[2]) ? V(n.replace(/<!--|-->/g, "")) : (n = t[3]) ? W(n) : (n = t[4]) && $(n, t[5]);
                    R = t.index + t[0].length
                }
                for (R < e.length && q(O(e.substr(R))), o = D.length - 1; 0 <= o; o--)(n = D[o]).valid && j(n.name)
            }
        }
    }(Jh || (Jh = {})).findEndTag = Gh;
    var Qh = Jh,
        Zh = function (e, t) {
            var n, r, o, i, a, u, s, c, l = t,
                f = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                d = e.schema;
            for (u = e.getTempAttrs(), s = l, c = new RegExp(["\\s?(" + u.join("|") + ')="[^"]+"'].join("|"), "gi"), l = s.replace(c, ""), a = d.getShortEndedElements(); i = f.exec(l);) r = f.lastIndex, o = i[0].length, n = a[i[1]] ? r : Qh.findEndTag(d, l, r), l = l.substring(0, r - o) + l.substring(n), f.lastIndex = r - o;
            return Na(l)
        },
        ev = {
            trimExternal: Zh,
            trimInternal: Zh
        },
        tv = 0,
        nv = 2,
        rv = 1,
        ov = function (g, p) {
            var e = g.length + p.length + 2,
                h = new Array(e),
                v = new Array(e),
                c = function (e, t, n, r, o) {
                    var i = l(e, t, n, r);
                    if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                        for (var a = e, u = n; a < t || u < r;) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
                    else {
                        c(e, i.start, n, i.start - i.diag, o);
                        for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                        c(i.end, t, i.end - i.diag, r, o)
                    }
                },
                b = function (e, t, n, r) {
                    for (var o = e; o - t < r && o < n && g[o] === p[o - t];) ++o;
                    return {
                        start: e,
                        end: o,
                        diag: t
                    }
                },
                l = function (e, t, n, r) {
                    var o = t - e,
                        i = r - n;
                    if (0 === o || 0 === i) return null;
                    var a, u, s, c, l, f = o - i,
                        d = i + o,
                        m = (d % 2 == 0 ? d : d + 1) / 2;
                    for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
                        for (u = -a; u <= a; u += 2) {
                            for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l];) h[s] = ++c, ++l;
                            if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r)
                        }
                        for (u = f - a; u <= f + a; u += 2) {
                            for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l];) v[s] = c--, l--;
                            if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r)
                        }
                    }
                },
                t = [];
            return c(0, g.length, 0, p.length, t), t
        },
        iv = function (e) {
            return Do.isElement(e) ? e.outerHTML : Do.isText(e) ? $o.encodeRaw(e.data, !1) : Do.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : ""
        },
        av = function (e, t, n) {
            var r = function (e) {
                var t, n, r;
                for (r = document.createElement("div"), t = document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
                return t
            }(t);
            if (e.hasChildNodes() && n < e.childNodes.length) {
                var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o)
            } else e.appendChild(r)
        },
        uv = function (e) {
            return jt.filter(jt.map(e.childNodes, iv), function (e) {
                return 0 < e.length
            })
        },
        sv = function (e, t) {
            var n, r, o, i = jt.map(t.childNodes, iv);
            return n = ov(i, e), r = t, o = 0, jt.each(n, function (e) {
                e[0] === tv ? o++ : e[0] === rv ? (av(r, e[1], o), o++) : e[0] === nv && function (e, t) {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        var n = e.childNodes[t];
                        n.parentNode.removeChild(n)
                    }
                }(r, o)
            }), t
        },
        cv = function (e, t) {
            var n = (t || document).createElement("div");
            return n.innerHTML = e, $r.children(er.fromDom(n))
        },
        lv = function (e) {
            return e.dom().innerHTML
        },
        fv = lv,
        dv = function (e, t) {
            var n = $r.owner(e).dom(),
                r = er.fromDom(n.createDocumentFragment()),
                o = cv(t, n);
            Ai(r, o), Ri.empty(e), Ti.append(e, r)
        },
        mv = Bi(A.none()),
        gv = function (e) {
            return {
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
            }
        },
        pv = function (e) {
            return {
                type: "complete",
                fragments: null,
                content: e,
                bookmark: null,
                beforeBookmark: null
            }
        },
        hv = function (e) {
            return "fragmented" === e.type ? e.fragments.join("") : e.content
        },
        vv = function (e) {
            var t = er.fromTag("body", mv.get().getOrThunk(function () {
                var e = document.implementation.createHTMLDocument("undo");
                return mv.set(A.some(e)), e
            }));
            return dv(t, hv(e)), F(Ki(t, "*[data-mce-bogus]"), Ri.unwrap), fv(t)
        },
        bv = function (n) {
            var e, t, r;
            return e = uv(n.getBody()), -1 !== (t = (r = G(e, function (e) {
                var t = ev.trimInternal(n.serializer, e);
                return 0 < t.length ? [t] : []
            })).join("")).indexOf("</iframe>") ? gv(r) : pv(t)
        },
        yv = function (e, t, n) {
            "fragmented" === t.type ? sv(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw"
            }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark)
        },
        Cv = function (e, t) {
            return !(!e || !t) && (r = t, hv(e) === hv(r) || (n = t, vv(e) === vv(n)));
            var n, r
        };

    function xv(u) {
        var s, r, o = this,
            c = 0,
            l = [],
            t = 0,
            f = function () {
                return 0 === t
            },
            i = function (e) {
                f() && (o.typing = e)
            },
            d = function (e) {
                u.setDirty(e)
            },
            a = function (e) {
                i(!1), o.add({}, e)
            },
            n = function () {
                o.typing && (i(!1), o.add())
            };
        return u.on("init", function () {
            o.add()
        }), u.on("BeforeExecCommand", function (e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (n(), o.beforeChange())
        }), u.on("ExecCommand", function (e) {
            var t = e.command;
            "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && a(e)
        }), u.on("ObjectResizeStart Cut", function () {
            o.beforeChange()
        }), u.on("SaveContent ObjectResized blur", a), u.on("DragEnd", a), u.on("KeyUp", function (e) {
            var t = e.keyCode;
            e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), u.nodeChanged()), 46 !== t && 8 !== t || u.nodeChanged(), r && o.typing && !1 === Cv(bv(u), l[0]) && (!1 === u.isDirty() && (d(!0), u.fire("change", {
                level: l[0],
                lastLevel: null
            })), u.fire("TypingUndo"), r = !1, u.nodeChanged()))
        }), u.on("KeyDown", function (e) {
            var t = e.keyCode;
            if (!e.isDefaultPrevented())
                if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) o.typing && a(e);
                else {
                    var n = e.ctrlKey && !e.altKey || e.metaKey;
                    !(t < 16 || 20 < t) || 224 === t || 91 === t || o.typing || n || (o.beforeChange(), i(!0), o.add({}, e), r = !0)
                }
        }), u.on("MouseDown", function (e) {
            o.typing && a(e)
        }), u.on("input", function (e) {
            var t;
            e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data) && a(e)
        }), u.addShortcut("meta+z", "", "Undo"), u.addShortcut("meta+y,meta+shift+z", "", "Redo"), u.on("AddUndo Undo Redo ClearUndos", function (e) {
            e.isDefaultPrevented() || u.nodeChanged()
        }), o = {
            data: l,
            typing: !1,
            beforeChange: function () {
                f() && (s = $u.getUndoBookmark(u.selection))
            },
            add: function (e, t) {
                var n, r, o, i = u.settings;
                if (o = bv(u), e = e || {}, e = Yt.extend(e, o), !1 === f() || u.removed) return null;
                if (r = l[c], u.fire("BeforeAddUndo", {
                        level: e,
                        lastLevel: r,
                        originalEvent: t
                    }).isDefaultPrevented()) return null;
                if (r && Cv(r, e)) return null;
                if (l[c] && (l[c].beforeBookmark = s), i.custom_undo_redo_levels && l.length > i.custom_undo_redo_levels) {
                    for (n = 0; n < l.length - 1; n++) l[n] = l[n + 1];
                    l.length--, c = l.length
                }
                e.bookmark = $u.getUndoBookmark(u.selection), c < l.length - 1 && (l.length = c + 1), l.push(e), c = l.length - 1;
                var a = {
                    level: e,
                    lastLevel: r,
                    originalEvent: t
                };
                return u.fire("AddUndo", a), 0 < c && (d(!0), u.fire("change", a)), e
            },
            undo: function () {
                var e;
                return o.typing && (o.add(), o.typing = !1, i(!1)), 0 < c && (e = l[--c], yv(u, e, !0), d(!0), u.fire("undo", {
                    level: e
                })), e
            },
            redo: function () {
                var e;
                return c < l.length - 1 && (e = l[++c], yv(u, e, !1), d(!0), u.fire("redo", {
                    level: e
                })), e
            },
            clear: function () {
                l = [], c = 0, o.typing = !1, o.data = l, u.fire("ClearUndos")
            },
            hasUndo: function () {
                return 0 < c || o.typing && l[0] && !Cv(bv(u), l[0])
            },
            hasRedo: function () {
                return c < l.length - 1 && !o.typing
            },
            transact: function (e) {
                return n(), o.beforeChange(), o.ignore(e), o.add()
            },
            ignore: function (e) {
                try {
                    t++, e()
                } finally {
                    t--
                }
            },
            extra: function (e, t) {
                var n, r;
                o.transact(e) && (r = l[c].bookmark, n = l[c - 1], yv(u, n, !0), o.transact(t) && (l[c - 1].beforeBookmark = r))
            }
        }
    }
    var wv, Nv, Ev = vl.isEq,
        Sv = function (e, t, n) {
            var r = e.formatter.get(n);
            if (r)
                for (var o = 0; o < r.length; o++)
                    if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1
        },
        Tv = function (t, e, n, r) {
            var o = t.dom.getRoot();
            return e !== o && (e = t.dom.getParent(e, function (e) {
                return !!Sv(t, e, n) || e.parentNode === o || !!_v(t, e, n, r, !0)
            }), _v(t, e, n, r))
        },
        kv = function (e, t, n) {
            return !!Ev(t, n.inline) || !!Ev(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
        },
        Av = function (e, t, n, r, o, i) {
            var a, u, s, c = n[r];
            if (n.onmatch) return n.onmatch(t, n, r);
            if (c)
                if ("undefined" == typeof c.length) {
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            if (u = "attributes" === r ? e.getAttrib(t, a) : vl.getStyle(e, t, a), o && !u && !n.exact) return;
                            if ((!o || n.exact) && !Ev(u, vl.normalizeStyleValue(e, vl.replaceVars(c[a], i), a))) return
                        }
                } else
                    for (s = 0; s < c.length; s++)
                        if ("attributes" === r ? e.getAttrib(t, c[s]) : vl.getStyle(e, t, c[s])) return n;
            return n
        },
        _v = function (e, t, n, r, o) {
            var i, a, u, s, c = e.formatter.get(n),
                l = e.dom;
            if (c && t)
                for (a = 0; a < c.length; a++)
                    if (i = c[a], kv(e.dom, t, i) && Av(l, t, i, "attributes", o, r) && Av(l, t, i, "styles", o, r)) {
                        if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, s[u])) return;
                        return i
                    }
        },
        Rv = {
            matchNode: _v,
            matchName: kv,
            match: function (e, t, n, r) {
                var o;
                return r ? Tv(e, r, t, n) : (r = e.selection.getNode(), !!Tv(e, r, t, n) || !((o = e.selection.getStart()) === r || !Tv(e, o, t, n)))
            },
            matchAll: function (r, o, i) {
                var e, a = [],
                    u = {};
                return e = r.selection.getStart(), r.dom.getParent(e, function (e) {
                    var t, n;
                    for (t = 0; t < o.length; t++) n = o[t], !u[n] && _v(r, e, n, i) && (u[n] = !0, a.push(n))
                }, r.dom.getRoot()), a
            },
            canApply: function (e, t) {
                var n, r, o, i, a, u = e.formatter.get(t),
                    s = e.dom;
                if (u)
                    for (n = e.selection.getStart(), r = vl.getParents(s, n), i = u.length - 1; 0 <= i; i--) {
                        if (!(a = u[i].selector) || u[i].defaultBlock) return !0;
                        for (o = r.length - 1; 0 <= o; o--)
                            if (s.is(r[o], a)) return !0
                    }
                return !1
            },
            matchesUnInheritedFormatSelector: Sv
        },
        Dv = function (e, t) {
            return e.splitText(t)
        },
        Bv = function (e) {
            var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset;
            return t === r && Do.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = Dv(t, n)).previousSibling, n < o ? (t = r = Dv(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (Do.isText(t) && 0 < n && n < t.nodeValue.length && (t = Dv(t, n), n = 0), Do.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = Dv(r, o).previousSibling).nodeValue.length)), {
                startContainer: t,
                startOffset: n,
                endContainer: r,
                endOffset: o
            }
        },
        Ov = wa,
        Pv = "_mce_caret",
        Lv = function (e) {
            return 0 < function (e) {
                for (var t = []; e;) {
                    if (3 === e.nodeType && e.nodeValue !== Ov || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild
                }
                return t
            }(e).length
        },
        Iv = function (e) {
            var t;
            if (e)
                for (e = (t = new oo(e, e)).current(); e; e = t.next())
                    if (3 === e.nodeType) return e;
            return null
        },
        Mv = function (e) {
            var t = er.fromTag("span");
            return hr.setAll(t, {
                id: Pv,
                "data-mce-bogus": "1",
                "data-mce-type": "format-caret"
            }), e && Ti.append(t, er.fromText(Ov)), t
        },
        Fv = function (e, t, n, r) {
            var o, i, a, u;
            o = t.getRng(!0), i = e.getParent(n, e.isBlock), Lv(n) ? (!1 !== r && (o.setStartBefore(n), o.setEndBefore(n)), e.remove(n)) : ((u = Iv(n)) && u.nodeValue.charAt(0) === Ov && u.deleteData(0, 1), a = u, o.startContainer === a && 0 < o.startOffset && o.setStart(a, o.startOffset - 1), o.endContainer === a && 0 < o.endOffset && o.setEnd(a, o.endOffset - 1), e.remove(n, !0)), i && e.isEmpty(i) && Jl(er.fromDom(i)), t.setRng(o)
        },
        Uv = function (e, t, n, r, o) {
            if (r) Fv(t, n, r, o);
            else if (!(r = Xu(e, n.getStart())))
                for (; r = t.get(Pv);) Fv(t, n, r, !1)
        },
        zv = function (e, t, n) {
            var r = e.dom,
                o = r.getParent(n, ya.curry(vl.isTextBlock, e));
            o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (Gl(er.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n))
        },
        Vv = function (e, t) {
            return e.appendChild(t), t
        },
        qv = function (e, t) {
            var n, r, o = (n = function (e, t) {
                return Vv(e, t.cloneNode(!1))
            }, r = t, function (e, t) {
                for (var n = e.length - 1; 0 <= n; n--) t(e[n], n, e)
            }(e, function (e) {
                r = n(r, e)
            }), r);
            return Vv(o, o.ownerDocument.createTextNode(Ov))
        },
        Hv = function (e) {
            var i = e.dom,
                a = e.selection,
                u = e.getBody();
            e.on("mouseup keydown", function (e) {
                var t, n, r, o;
                t = u, n = i, r = a, o = e.keyCode, Uv(t, n, r, null, !1), 8 === o && r.isCollapsed() && r.getStart().innerHTML === Ov && Uv(t, n, r, Xu(t, r.getStart())), 37 !== o && 39 !== o || Uv(t, n, r, Xu(t, r.getStart()))
            })
        },
        jv = function (e, t) {
            return e.schema.getTextInlineElements().hasOwnProperty(sr.name(t)) && !Ku(t.dom()) && !Do.isBogus(t.dom())
        },
        $v = {},
        Wv = jt.filter,
        Kv = jt.each;
    Nv = function (e) {
        var t, n, r = e.selection.getRng();
        t = Do.matchNodeNames("pre"), r.collapsed || (n = e.selection.getSelectedBlocks(), Kv(Wv(Wv(n, t), function (e) {
            return t(e.previousSibling) && -1 !== jt.indexOf(n, e.previousSibling)
        }), function (e) {
            var t, n;
            t = e.previousSibling, pn(n = e).remove(), pn(t).append("<br><br>").append(n.childNodes)
        }))
    }, $v[wv = "pre"] || ($v[wv] = []), $v[wv].push(Nv);
    var Xv = function (e, t) {
            Kv($v[e], function (e) {
                e(t)
            })
        },
        Yv = /^(src|href|style)$/,
        Gv = Yt.each,
        Jv = vl.isEq,
        Qv = function (e) {
            return /^(TH|TD)$/.test(e.nodeName)
        },
        Zv = function (e, t, n) {
            var r, o, i;
            return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], Do.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), Do.isText(r) && n && o >= r.nodeValue.length && (r = new oo(r, e.getBody()).next() || r), Do.isText(r) && !n && 0 === o && (r = new oo(r, e.getBody()).prev() || r), r
        },
        eb = function (e, t, n, r) {
            var o = e.create(n, r);
            return t.parentNode.insertBefore(o, t), o.appendChild(t), o
        },
        tb = function (e, t, n, r) {
            return !(t = vl.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t)
        },
        nb = function (e, n, r, o, i) {
            var t, a, u, s, c, l, f, d, m, g, p, h, v, b, y = e.dom;
            if (c = y, !(Jv(l = o, (f = n).inline) || Jv(l, f.block) || (f.selector ? Do.isElement(l) && c.is(l, f.selector) : void 0) || (s = o, n.links && "A" === s.tagName))) return !1;
            if ("all" !== n.remove)
                for (Gv(n.styles, function (e, t) {
                        e = vl.normalizeStyleValue(y, vl.replaceVars(e, r), t), "number" == typeof t && (t = e, i = 0), (n.remove_similar || !i || Jv(vl.getStyle(y, i, t), e)) && y.setStyle(o, t, ""), u = 1
                    }), u && "" === y.getAttrib(o, "style") && (o.removeAttribute("style"), o.removeAttribute("data-mce-style")), Gv(n.attributes, function (e, t) {
                        var n;
                        if (e = vl.replaceVars(e, r), "number" == typeof t && (t = e, i = 0), !i || Jv(y.getAttrib(i, t), e)) {
                            if ("class" === t && (e = y.getAttrib(o, t)) && (n = "", Gv(e.split(/\s+/), function (e) {
                                    /mce\-\w+/.test(e) && (n += (n ? " " : "") + e)
                                }), n)) return void y.setAttrib(o, t, n);
                            "class" === t && o.removeAttribute("className"), Yv.test(t) && o.removeAttribute("data-mce-" + t), o.removeAttribute(t)
                        }
                    }), Gv(n.classes, function (e) {
                        e = vl.replaceVars(e, r), i && !y.hasClass(i, e) || y.removeClass(o, e)
                    }), a = y.getAttribs(o), t = 0; t < a.length; t++) {
                    var C = a[t].nodeName;
                    if (0 !== C.indexOf("_") && 0 !== C.indexOf("data-")) return !1
                }
            return "none" !== n.remove ? (d = e, g = n, h = (m = o).parentNode, v = d.dom, b = d.settings.forced_root_block, g.block && (b ? h === v.getRoot() && (g.list_block && Jv(m, g.list_block) || Gv(Yt.grep(m.childNodes), function (e) {
                vl.isValid(d, b, e.nodeName.toLowerCase()) ? p ? p.appendChild(e) : (p = eb(v, e, b), v.setAttribs(p, d.settings.forced_root_block_attrs)) : p = 0
            })) : v.isBlock(m) && !v.isBlock(h) && (tb(v, m, !1) || tb(v, m.firstChild, !0, 1) || m.insertBefore(v.create("br"), m.firstChild), tb(v, m, !0) || tb(v, m.lastChild, !1, 1) || m.appendChild(v.create("br")))), g.selector && g.inline && !Jv(g.inline, m) || v.remove(m, 1), !0) : void 0
        },
        rb = nb,
        ob = function (s, c, l, e, f) {
            var t, n, d = s.formatter.get(c),
                m = d[0],
                a = !0,
                u = s.dom,
                r = s.selection,
                o = function (e) {
                    var n, t, r, o, i, a, u = (n = s, t = e, r = c, o = l, i = f, Gv(vl.getParents(n.dom, t.parentNode).reverse(), function (e) {
                        var t;
                        a || "_start" === e.id || "_end" === e.id || (t = Rv.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e)
                    }), a);
                    return function (e, t, n, r, o, i, a, u) {
                        var s, c, l, f, d, m, g = e.dom;
                        if (n) {
                            for (m = n.parentNode, s = r.parentNode; s && s !== m; s = s.parentNode) {
                                for (c = g.clone(s, !1), d = 0; d < t.length; d++)
                                    if (nb(e, t[d], u, c, c)) {
                                        c = 0;
                                        break
                                    }
                                c && (l && c.appendChild(l), f || (f = c), l = c)
                            }!i || a.mixed && g.isBlock(n) || (r = g.split(n, r)), l && (o.parentNode.insertBefore(l, o), f.appendChild(o))
                        }
                        return r
                    }(s, d, u, e, e, !0, m, l)
                },
                g = function (e) {
                    var t, n, r, o, i;
                    if (Do.isElement(e) && u.getContentEditable(e) && (o = a, a = "true" === u.getContentEditable(e), i = !0), t = Yt.grep(e.childNodes), a && !i)
                        for (n = 0, r = d.length; n < r && !nb(s, d[n], l, e, e); n++);
                    if (m.deep && t.length) {
                        for (n = 0, r = t.length; n < r; n++) g(t[n]);
                        i && (a = o)
                    }
                },
                i = function (e) {
                    var t = u.get(e ? "_start" : "_end"),
                        n = t[e ? "firstChild" : "lastChild"];
                    return ml(n) && (n = n[e ? "firstChild" : "lastChild"]), Do.isText(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), u.remove(t, !0), n
                },
                p = function (e) {
                    var t, n, r = e.commonAncestorContainer;
                    if (e = _l(s, e, d, !0), m.split) {
                        if ((t = Zv(s, e, !0)) !== (n = Zv(s, e))) {
                            if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && Qv(n) && n.firstChild && (n = n.firstChild || n), u.isChildOf(t, n) && t !== n && !u.isBlock(n) && !Qv(t) && !Qv(n)) return t = eb(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), o(t), void(t = i(!0));
                            t = eb(u, t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), n = eb(u, n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            }), o(t), o(n), t = i(!0), n = i()
                        } else t = n = o(t);
                        e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = u.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = u.nodeIndex(n) + 1
                    }
                    Dl(u, e, function (e) {
                        Gv(e, function (e) {
                            g(e), Do.isElement(e) && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === vl.getTextDecoration(u, e.parentNode) && nb(s, {
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        })
                    })
                };
            if (e) e.nodeType ? ((n = u.createRng()).setStartBefore(e), n.setEndAfter(e), p(n)) : p(e);
            else if ("false" !== u.getContentEditable(r.getNode())) r.isCollapsed() && m.inline && !u.select("td[data-mce-selected],th[data-mce-selected]").length ? function (e, t, n, r) {
                var o, i, a, u, s, c, l, f = e.dom,
                    d = e.selection,
                    m = [],
                    g = d.getRng();
                for (o = g.startContainer, i = g.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) {
                    if (Rv.matchNode(e, s, t, n, r)) {
                        c = s;
                        break
                    }
                    s.nextSibling && (u = !0), m.push(s), s = s.parentNode
                }
                if (c)
                    if (u) {
                        a = d.getBookmark(), g.collapse(!0);
                        var p = _l(e, g, e.formatter.get(t), !0);
                        p = Bv(p), e.formatter.remove(t, n, p), d.moveToBookmark(a)
                    } else {
                        l = Xu(e.getBody(), c);
                        var h = Mv(!1).dom(),
                            v = qv(m, h);
                        zv(e, h, l || c), Fv(f, d, l, !1), d.setCursorLocation(v, 1), f.isEmpty(c) && f.remove(c)
                    }
            }(s, c, l, f) : (t = $u.getPersistentBookmark(s.selection, !0), p(r.getRng()), r.moveToBookmark(t), m.inline && Rv.match(s, c, l, r.getStart()) && vl.moveStart(u, r, r.getRng()), s.nodeChanged());
            else {
                e = r.getNode();
                for (var h = 0, v = d.length; h < v && (!d[h].ceFalseOverride || !nb(s, d[h], l, e, e)); h++);
            }
        },
        ib = Yt.each,
        ab = function (e) {
            return e && 1 === e.nodeType && !ml(e) && !Ku(e) && !Do.isBogus(e)
        },
        ub = function (e, t) {
            var n;
            for (n = e; n; n = n[t]) {
                if (3 === n.nodeType && 0 !== n.nodeValue.length) return e;
                if (1 === n.nodeType && !ml(n)) return n
            }
            return e
        },
        sb = function (e, t, n) {
            var r, o, i = new Yl(e);
            if (t && n && (t = ub(t, "previousSibling"), n = ub(n, "nextSibling"), i.compare(t, n))) {
                for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o);
                return e.remove(n), Yt.each(Yt.grep(n.childNodes), function (e) {
                    t.appendChild(e)
                }), t
            }
            return n
        },
        cb = function (e, t, n) {
            ib(e.childNodes, function (e) {
                ab(e) && (t(e) && n(e), e.hasChildNodes() && cb(e, t, n))
            })
        },
        lb = function (n, e) {
            return b(function (e, t) {
                return !(!t || !vl.getStyle(n, t, e))
            }, e)
        },
        fb = function (r, e, t) {
            return b(function (e, t, n) {
                r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), db(r, n)
            }, e, t)
        },
        db = function (e, t) {
            "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
        },
        mb = function (e, t) {
            var n;
            1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = vl.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null))
        },
        gb = function (n, e, r, o) {
            ib(e, function (t) {
                ib(n.dom.select(t.inline, o), function (e) {
                        ab(e) && rb(n, t, r, e, t.exact ? e : null)
                    }),
                    function (r, e, t) {
                        if (e.clear_child_styles) {
                            var n = e.links ? "*:not(a)" : "*";
                            ib(r.select(n, t), function (n) {
                                ab(n) && ib(e.styles, function (e, t) {
                                    r.setStyle(n, t, "")
                                })
                            })
                        }
                    }(n.dom, t, o)
            })
        },
        pb = function (e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) && (Yt.walk(r, b(mb, e), "childNodes"), mb(e, r))
        },
        hb = function (e, t, n, r) {
            t.styles && t.styles.backgroundColor && cb(r, lb(e, "fontSize"), fb(e, "backgroundColor", vl.replaceVars(t.styles.backgroundColor, n)))
        },
        vb = function (e, t, n, r) {
            "sub" !== t.inline && "sup" !== t.inline || (cb(r, lb(e, "fontSize"), fb(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0))
        },
        bb = function (e, t, n, r) {
            r && !1 !== t.merge_siblings && (r = sb(e, vl.getNonWhiteSpaceSibling(r), r), r = sb(e, r, vl.getNonWhiteSpaceSibling(r, !0)))
        },
        yb = function (t, n, r, o, i) {
            Rv.matchNode(t, i.parentNode, r, o) && rb(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function (e) {
                if (Rv.matchNode(t, e, r, o)) return rb(t, n, o, i), !0
            })
        },
        Cb = Yt.each,
        xb = function (g, p, h, r) {
            var e, t, v = g.formatter.get(p),
                b = v[0],
                o = !r && g.selection.isCollapsed(),
                i = g.dom,
                n = g.selection,
                y = function (n, e) {
                    if (e = e || b, n) {
                        if (e.onformat && e.onformat(n, e, h, r), Cb(e.styles, function (e, t) {
                                i.setStyle(n, t, vl.replaceVars(e, h))
                            }), e.styles) {
                            var t = i.getAttrib(n, "style");
                            t && n.setAttribute("data-mce-style", t)
                        }
                        Cb(e.attributes, function (e, t) {
                            i.setAttrib(n, t, vl.replaceVars(e, h))
                        }), Cb(e.classes, function (e) {
                            e = vl.replaceVars(e, h), i.hasClass(n, e) || i.addClass(n, e)
                        })
                    }
                },
                C = function (e, t) {
                    var n = !1;
                    return !!b.selector && (Cb(e, function (e) {
                        if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !Ku(t) ? (y(t, e), !(n = !0)) : void 0
                    }), n)
                },
                a = function (s, e, t, c) {
                    var l, f, d = [],
                        m = !0;
                    l = b.inline || b.block, f = s.create(l), y(f), Dl(s, e, function (e) {
                        var a, u = function (e) {
                            var t, n, r, o;
                            if (o = m, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = m, m = "true" === s.getContentEditable(e), r = !0), vl.isEq(t, "br")) return a = 0, void(b.block && s.remove(e));
                            if (b.wrapper && Rv.matchNode(g, e, p, h)) a = 0;
                            else {
                                if (m && !r && b.block && !b.wrapper && vl.isTextBlock(g, t) && vl.isValid(g, n, l)) return e = s.rename(e, l), y(e), d.push(e), void(a = 0);
                                if (b.selector) {
                                    var i = C(v, e);
                                    if (!b.inline || i) return void(a = 0)
                                }!m || r || !vl.isValid(g, l, t) || !vl.isValid(g, n, l) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || Ku(e) || b.inline && s.isBlock(e) ? (a = 0, Cb(Yt.grep(e.childNodes), u), r && (m = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e))
                            }
                        };
                        Cb(e, u)
                    }), !0 === b.links && Cb(d, function (e) {
                        var t = function (e) {
                            "A" === e.nodeName && y(e, b), Cb(Yt.grep(e.childNodes), t)
                        };
                        t(e)
                    }), Cb(d, function (e) {
                        var t, n, r, o, i, a = function (e) {
                            var n = !1;
                            return Cb(e.childNodes, function (e) {
                                if ((t = e) && 1 === t.nodeType && !ml(t) && !Ku(t) && !Do.isBogus(t)) return n = e, !1;
                                var t
                            }), n
                        };
                        n = 0, Cb(e.childNodes, function (e) {
                            vl.isWhiteSpaceNode(e) || ml(e) || n++
                        }), t = n, !(1 < d.length) && s.isBlock(e) || 0 !== t ? (b.inline || b.wrapper) && (b.exact || 1 !== t || ((o = a(r = e)) && !ml(o) && Rv.matchName(s, o, b) && (i = s.clone(o, !1), y(i), s.replace(i, r, !0), s.remove(o, 1)), e = i || r), gb(g, v, h, e), yb(g, b, p, h, e), hb(s, b, h, e), vb(s, b, h, e), bb(s, b, h, e)) : s.remove(e, 1)
                    })
                };
            if ("false" !== i.getContentEditable(n.getNode())) {
                if (b) {
                    if (r) r.nodeType ? C(v, r) || ((t = i.createRng()).setStartBefore(r), t.setEndAfter(r), a(i, _l(g, t, v), 0, !0)) : a(i, r, 0, !0);
                    else if (o && b.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) ! function (e, t, n) {
                        var r, o, i, a, u, s, c = e.selection;
                        a = (r = c.getRng(!0)).startOffset, s = r.startContainer.nodeValue, (o = Xu(e.getBody(), c.getStart())) && (i = Iv(o));
                        var l, f, d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        s && 0 < a && a < s.length && d.test(s.charAt(a)) && d.test(s.charAt(a - 1)) ? (u = c.getBookmark(), r.collapse(!0), r = _l(e, r, e.formatter.get(t)), r = Bv(r), e.formatter.apply(t, n, r), c.moveToBookmark(u)) : (o && i.nodeValue === Ov || (l = e.getDoc(), f = Mv(!0).dom(), i = (o = l.importNode(f, !0)).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), c.setCursorLocation(i, a))
                    }(g, p, h);
                    else {
                        var u = g.selection.getNode();
                        g.settings.forced_root_block || !v[0].defaultBlock || i.getParent(u, i.isBlock) || xb(g, v[0].defaultBlock), g.selection.setRng(rf(g.selection.getRng())), e = $u.getPersistentBookmark(g.selection, !0), a(i, _l(g, n.getRng(), v)), b.styles && pb(i, b, h, u), n.moveToBookmark(e), vl.moveStart(i, n, n.getRng()), g.nodeChanged()
                    }
                    Xv(p, g)
                }
            } else {
                r = n.getNode();
                for (var s = 0, c = v.length; s < c; s++)
                    if (v[s].ceFalseOverride && i.is(r, v[s].selector)) return void y(r, v[s])
            }
        },
        wb = {
            applyFormat: xb
        },
        Nb = Yt.each,
        Eb = function (e, t, n, r, o) {
            var i, a, u, s, c, l, f, d;
            null === t.get() && (a = e, u = {}, (i = t).set({}), a.on("NodeChange", function (n) {
                var r = vl.getParents(a.dom, n.element),
                    o = {};
                r = Yt.grep(r, function (e) {
                    return 1 === e.nodeType && !e.getAttribute("data-mce-bogus")
                }), Nb(i.get(), function (e, n) {
                    Nb(r, function (t) {
                        return a.formatter.matchNode(t, n, {}, e.similar) ? (u[n] || (Nb(e, function (e) {
                            e(!0, {
                                node: t,
                                format: n,
                                parents: r
                            })
                        }), u[n] = e), o[n] = e, !1) : !Rv.matchesUnInheritedFormatSelector(a, t, n) && void 0
                    })
                }), Nb(u, function (e, t) {
                    o[t] || (delete u[t], Nb(e, function (e) {
                        e(!1, {
                            node: n.element,
                            format: t,
                            parents: r
                        })
                    }))
                })
            })), c = n, l = r, f = o, d = (s = t).get(), Nb(c.split(","), function (e) {
                d[e] || (d[e] = [], d[e].similar = f), d[e].push(l)
            }), s.set(d)
        },
        Sb = {
            get: function (r) {
                var t = {
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        inherit: !1,
                        preview: !1,
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        },
                        preview: "font-family font-size"
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: "font-family font-size"
                    }],
                    alignright: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        },
                        preview: "font-family font-size"
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        inherit: !1,
                        defaultBlock: "div",
                        preview: "font-family font-size"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    }],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        links: !0,
                        remove_similar: !0,
                        clear_child_styles: !0
                    },
                    fontname: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontFamily: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize: {
                        inline: "span",
                        toggle: !1,
                        styles: {
                            fontSize: "%value"
                        },
                        clear_child_styles: !0
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function () {
                            return !0
                        },
                        onformat: function (n, e, t) {
                            Yt.each(t, function (e, t) {
                                r.setAttrib(n, t, e)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                };
                return Yt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                    t[e] = {
                        block: e,
                        remove: "all"
                    }
                }), t
            }
        },
        Tb = Yt.each,
        kb = pi.DOM,
        Ab = function (e, t) {
            var n, o, r, m = t && t.schema || ni({}),
                g = function (e) {
                    var t, n, r;
                    return o = "string" == typeof e ? {
                        name: e,
                        classes: [],
                        attrs: {}
                    } : e, t = kb.create(o.name), n = t, (r = o).classes.length && kb.addClass(n, r.classes.join(" ")), kb.setAttribs(n, r.attrs), t
                },
                p = function (n, e, t) {
                    var r, o, i, a, u, s, c, l, f = 0 < e.length && e[0],
                        d = f && f.name;
                    if (u = d, s = "string" != typeof (a = n) ? a.nodeName.toLowerCase() : a, c = m.getElementRule(s), i = !(!(l = c && c.parentsRequired) || !l.length) && (u && -1 !== Yt.inArray(l, u) ? u : l[0])) d === i ? (o = e[0], e = e.slice(1)) : o = i;
                    else if (f) o = e[0], e = e.slice(1);
                    else if (!t) return n;
                    return o && (r = g(o)).appendChild(n), t && (r || (r = kb.create("div")).appendChild(n), Yt.each(t, function (e) {
                        var t = g(e);
                        r.insertBefore(t, n)
                    })), p(r, e, o && o.siblings)
                };
            return e && e.length ? (o = e[0], n = g(o), (r = kb.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : ""
        },
        _b = function (e) {
            var t, a = {
                classes: [],
                attrs: {}
            };
            return "*" !== (e = a.selector = Yt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
                switch (t) {
                    case "#":
                        a.attrs.id = n;
                        break;
                    case ".":
                        a.classes.push(n);
                        break;
                    case ":":
                        -1 !== Yt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
                }
                if ("[" === r) {
                    var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    i && (a.attrs[i[1]] = i[2])
                }
                return ""
            })), a.name = t || "div", a
        },
        Rb = function (e) {
            return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Yt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
                var t = Yt.map(e.split(/(?:~\+|~|\+)/), _b),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            }).reverse()) : []
        },
        Db = function (n, e) {
            var t, r, o, i, a, u, s = "";
            if (!1 === (u = n.settings.preview_styles)) return "";
            "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");
            var c = function (e) {
                return e.replace(/%(\w+)/g, "")
            };
            if ("string" == typeof e) {
                if (!(e = n.formatter.get(e))) return;
                e = e[0]
            }
            return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", (i = Rb(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, r = Ab(i, n)) : r = Ab([t], n), o = kb.select(t, r)[0] || r.firstChild, Tb(e.styles, function (e, t) {
                (e = c(e)) && kb.setStyle(o, t, e)
            }), Tb(e.attributes, function (e, t) {
                (e = c(e)) && kb.setAttrib(o, t, e)
            }), Tb(e.classes, function (e) {
                e = c(e), kb.hasClass(o, e) || kb.addClass(o, e)
            }), n.fire("PreviewFormats"), kb.setStyles(r, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(r), a = kb.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, Tb(u.split(" "), function (e) {
                var t = kb.getStyle(o, e, !0);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = kb.getStyle(n.getBody(), e, !0), "#ffffff" === kb.toHex(t).toLowerCase()) || "color" === e && "#000000" === kb.toHex(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === a) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px"
                    }
                    "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";"
                }
            }), n.fire("AfterPreviewFormats"), kb.remove(r), s)
        },
        Bb = function (e, t, n, r, o) {
            var i = t.get(n);
            !Rv.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? wb.applyFormat(e, n, r, o) : ob(e, n, r, o)
        },
        Ob = function (e) {
            e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        };

    function Pb(e) {
        var t, n, r, o = (t = e, n = {}, (r = function (e, t) {
                e && ("string" != typeof e ? Yt.each(e, function (e, t) {
                    r(t, e)
                }) : (t = t.length ? t : [t], Yt.each(t, function (e) {
                    "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), n[e] = t))
            })(Sb.get(t.dom)), r(t.settings.formats), {
                get: function (e) {
                    return e ? n[e] : n
                },
                register: r,
                unregister: function (e) {
                    return e && n[e] && delete n[e], n
                }
            }),
            i = Bi(null);
        return Ob(e), Hv(e), {
            get: o.get,
            register: o.register,
            unregister: o.unregister,
            apply: b(wb.applyFormat, e),
            remove: b(ob, e),
            toggle: b(Bb, e, o),
            match: b(Rv.match, e),
            matchAll: b(Rv.matchAll, e),
            matchNode: b(Rv.matchNode, e),
            canApply: b(Rv.canApply, e),
            formatChanged: b(Eb, e, i),
            getCssText: b(Db, e)
        }
    }
    var Lb, Ib = Object.prototype.hasOwnProperty,
        Mb = (Lb = function (e, t) {
            return t
        }, function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Can't merge zero objects");
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = e[r];
                for (var i in o) Ib.call(o, i) && (n[i] = Lb(n[i], o[i]))
            }
            return n
        }),
        Fb = {
            register: function (t, s, c) {
                t.addAttributeFilter("data-mce-tabindex", function (e, t) {
                    for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attributes.map["data-mce-tabindex"]), n.attr(t, null)
                }), t.addAttributeFilter("src,href,style", function (e, t) {
                    for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attributes.map[i]) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attributes.map[t], "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null))
                }), t.addAttributeFilter("class", function (e) {
                    for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null))
                }), t.addAttributeFilter("data-mce-type", function (e, t, n) {
                    for (var r, o = e.length; o--;) "bookmark" !== (r = e[o]).attributes.map["data-mce-type"] || n.cleanup || r.remove()
                }), t.addNodeFilter("noscript", function (e) {
                    for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = $o.decode(t.value))
                }), t.addNodeFilter("script,style", function (e, t) {
                    for (var n, r, o, i = e.length, a = function (e) {
                            return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                        }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e")
                }), t.addNodeFilter("#comment", function (e) {
                    for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14))
                }), t.addNodeFilter("xml:namespace,input", function (e, t) {
                    for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || "type" in n.attributes.map || n.attr("type", "text"))
                }), t.addAttributeFilter("data-mce-type", function (e) {
                    F(e, function (e) {
                        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap())
                    })
                }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function (e, t) {
                    for (var n = e.length; n--;) e[n].attr(t, null)
                })
            },
            trimTrailingBr: function (e) {
                var t, n, r = function (e) {
                    return e && "br" === e.name
                };
                r(t = e.lastChild) && r(n = t.prev) && (t.remove(), n.remove())
            }
        },
        Ub = {
            process: function (e, t, n) {
                return f = n, (l = e) && l.hasEventListeners("PreProcess") && !f.no_events ? (o = t, i = n, c = (r = e).dom, o = o.cloneNode(!0), (a = document.implementation).createHTMLDocument && (u = a.createHTMLDocument(""), Yt.each("BODY" === o.nodeName ? o.childNodes : [o], function (e) {
                    u.body.appendChild(u.importNode(e, !0))
                }), o = "BODY" !== o.nodeName ? u.body.firstChild : u.body, s = c.doc, c.doc = u), $g(r, Mb(i, {
                    node: o
                })), s && (c.doc = s), o) : t;
                var r, o, i, a, u, s, c, l, f
            }
        },
        zb = function (e, a, u) {
            e.addNodeFilter("font", function (e) {
                F(e, function (e) {
                    var t, n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, F(["color", "face", "size"], function (e) {
                        t.attr(e, null)
                    })
                })
            })
        },
        Vb = function (e, t) {
            var n, r = oi();
            t.convert_fonts_to_spans && zb(e, r, Yt.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function (e) {
                F(e, function (e) {
                    var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                })
            })
        },
        qb = {
            register: function (e, t) {
                t.inline_styles && Vb(e, t)
            }
        },
        Hb = /^[ \t\r\n]*$/,
        jb = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        },
        $b = function (e, t, n) {
            var r, o, i = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
            if (e[i]) return e[i];
            if (e !== t) {
                if (r = e[a]) return r;
                for (o = e.parent; o && o !== t; o = o.parent)
                    if (r = o[a]) return r
            }
        },
        Wb = function () {
            function a(e, t) {
                this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {})
            }
            return a.create = function (e, t) {
                var n, r;
                if (n = new a(e, jb[e] || 1), t)
                    for (r in t) n.attr(r, t[r]);
                return n
            }, a.prototype.replace = function (e) {
                return e.parent && e.remove(), this.insert(e, this), this.remove(), this
            }, a.prototype.attr = function (e, t) {
                var n, r;
                if ("string" != typeof e) {
                    for (r in e) this.attr(r, e[r]);
                    return this
                }
                if (n = this.attributes) {
                    if (t !== undefined) {
                        if (null === t) {
                            if (e in n.map)
                                for (delete n.map[e], r = n.length; r--;)
                                    if (n[r].name === e) return n = n.splice(r, 1), this;
                            return this
                        }
                        if (e in n.map) {
                            for (r = n.length; r--;)
                                if (n[r].name === e) {
                                    n[r].value = t;
                                    break
                                }
                        } else n.push({
                            name: e,
                            value: t
                        });
                        return n.map[e] = t, this
                    }
                    return n.map[e]
                }
            }, a.prototype.clone = function () {
                var e, t, n, r, o, i = new a(this.name, this.type);
                if (n = this.attributes) {
                    for ((o = []).map = {}, e = 0, t = n.length; e < t; e++) "id" !== (r = n[e]).name && (o[o.length] = {
                        name: r.name,
                        value: r.value
                    }, o.map[r.name] = r.value);
                    i.attributes = o
                }
                return i.value = this.value, i.shortEnded = this.shortEnded, i
            }, a.prototype.wrap = function (e) {
                return this.parent.insert(e, this), e.append(this), this
            }, a.prototype.unwrap = function () {
                var e, t;
                for (e = this.firstChild; e;) t = e.next, this.insert(e, this, !0), e = t;
                this.remove()
            }, a.prototype.remove = function () {
                var e = this.parent,
                    t = this.next,
                    n = this.prev;
                return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
            }, a.prototype.append = function (e) {
                var t;
                return e.parent && e.remove(), (t = this.lastChild) ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
            }, a.prototype.insert = function (e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e
            }, a.prototype.getAll = function (e) {
                var t, n = [];
                for (t = this.firstChild; t; t = $b(t, this)) t.name === e && n.push(t);
                return n
            }, a.prototype.empty = function () {
                var e, t, n;
                if (this.firstChild) {
                    for (e = [], n = this.firstChild; n; n = $b(n, this)) e.push(n);
                    for (t = e.length; t--;)(n = e[t]).parent = n.firstChild = n.lastChild = n.next = n.prev = null
                }
                return this.firstChild = this.lastChild = null, this
            }, a.prototype.isEmpty = function (e, t, n) {
                var r, o, i = this.firstChild;
                if (t = t || {}, i)
                    do {
                        if (1 === i.type) {
                            if (i.attributes.map["data-mce-bogus"]) continue;
                            if (e[i.name]) return !1;
                            for (r = i.attributes.length; r--;)
                                if ("name" === (o = i.attributes[r].name) || 0 === o.indexOf("data-mce-bookmark")) return !1
                        }
                        if (8 === i.type) return !1;
                        if (3 === i.type && !Hb.test(i.value)) return !1;
                        if (3 === i.type && i.parent && t[i.parent.name] && Hb.test(i.value)) return !1;
                        if (n && n(i)) return !1
                    } while (i = $b(i, this));
                return !0
            }, a.prototype.walk = function (e) {
                return $b(this, null, e)
            }, a
        }(),
        Kb = function (e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Wb("br", 1)).shortEnded = !0 : r.empty().append(new Wb("#text", 3)).value = "\xa0"
        },
        Xb = function (e) {
            return Yb(e, "#text") && "\xa0" === e.firstChild.value
        },
        Yb = function (e, t) {
            return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
        },
        Gb = function (r, e, t, n) {
            return n.isEmpty(e, t, function (e) {
                return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
                var t, n
            })
        },
        Jb = function (e, t) {
            return e && (t[e.name] || "br" === e.name)
        },
        Qb = function (e, p) {
            var h = e.schema;
            p.remove_trailing_brs && e.addNodeFilter("br", function (e, t, n) {
                var r, o, i, a, u, s, c, l, f = e.length,
                    d = Yt.extend({}, h.getBlockElements()),
                    m = h.getNonEmptyElements(),
                    g = h.getNonEmptyElements();
                for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                        for (u = o.prev; u;) {
                            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                if ("br" !== s) break;
                                if ("br" === s) {
                                    o = null;
                                    break
                                }
                            }
                            u = u.prev
                        }
                        o && (o.remove(), Gb(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Kb(p, n, d, i)))
                    } else {
                        for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== p.padd_empty_with_br && ((l = new Wb("#text", 3)).value = "\xa0", o.replace(l))
                    }
            }), e.addAttributeFilter("href", function (e) {
                var t, n, r, o = e.length;
                if (!p.allow_unsafe_link_target)
                    for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), r = n ? Yt.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function (e) {
                        return 0 < e.length
                    }).concat(["noopener"]).sort().join(" ")))
            }), p.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
                for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
            }), p.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
                for (var t, n, r = e.length; r--;)
                    if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else {
                            var o = new Wb("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o)
                        }
            }), p.validate && h.getValidClasses() && e.addAttributeFilter("class", function (e) {
                for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
                    for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i)
                }
            })
        },
        Zb = Yt.makeMap,
        ey = Yt.each,
        ty = Yt.explode,
        ny = Yt.extend;

    function ry(T, k) {
        void 0 === k && (k = ni());
        var A = {},
            _ = [],
            R = {},
            D = {};
        (T = T || {}).validate = !("validate" in T) || T.validate, T.root_name = T.root_name || "body";
        var B = function (e) {
                var t, n, r;
                n in A && ((r = R[n]) ? r.push(e) : R[n] = [e]), t = _.length;
                for (; t--;)(n = _[t].name) in e.attributes.map && ((r = D[n]) ? r.push(e) : D[n] = [e]);
                return e
            },
            e = {
                schema: k,
                addAttributeFilter: function (e, n) {
                    ey(ty(e), function (e) {
                        var t;
                        for (t = 0; t < _.length; t++)
                            if (_[t].name === e) return void _[t].callbacks.push(n);
                        _.push({
                            name: e,
                            callbacks: [n]
                        })
                    })
                },
                getAttributeFilters: function () {
                    return [].concat(_)
                },
                addNodeFilter: function (e, n) {
                    ey(ty(e), function (e) {
                        var t = A[e];
                        t || (A[e] = t = []), t.push(n)
                    })
                },
                getNodeFilters: function () {
                    var e = [];
                    for (var t in A) A.hasOwnProperty(t) && e.push({
                        name: t,
                        callbacks: A[t]
                    });
                    return e
                },
                filterNode: B,
                parse: function (e, a) {
                    var t, n, r, o, i, u, s, c, l, f, d, m = [];
                    a = a || {}, R = {}, D = {}, l = ny(Zb("script,style,head,html,body,title,meta,param"), k.getBlockElements());
                    var g = k.getNonEmptyElements(),
                        p = k.children,
                        h = T.validate,
                        v = "forced_root_block" in a ? a.forced_root_block : T.forced_root_block,
                        b = k.getWhiteSpaceElements(),
                        y = /^[ \t\r\n]+/,
                        C = /[ \t\r\n]+$/,
                        x = /[ \t\r\n]+/g,
                        w = /^[ \t\r\n]+$/;
                    f = b.hasOwnProperty(a.context) || b.hasOwnProperty(T.root_name);
                    var N = function (e, t) {
                            var n, r = new Wb(e, t);
                            return e in A && ((n = R[e]) ? n.push(r) : R[e] = [r]), r
                        },
                        E = function (e) {
                            var t, n, r, o, i = k.getBlockElements();
                            for (t = e.prev; t && 3 === t.type;) {
                                if (0 < (r = t.value.replace(C, "")).length) return void(t.value = r);
                                if (n = t.next) {
                                    if (3 === n.type && n.value.length) {
                                        t = t.prev;
                                        continue
                                    }
                                    if (!i[n.name] && "script" !== n.name && "style" !== n.name) {
                                        t = t.prev;
                                        continue
                                    }
                                }
                                o = t.prev, t.remove(), t = o
                            }
                        };
                    t = Qh({
                        validate: h,
                        allow_script_urls: T.allow_script_urls,
                        allow_conditional_comments: T.allow_conditional_comments,
                        self_closing_elements: function (e) {
                            var t, n = {};
                            for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                            return n
                        }(k.getSelfClosingElements()),
                        cdata: function (e) {
                            d.append(N("#cdata", 4)).value = e
                        },
                        text: function (e, t) {
                            var n;
                            f || (e = e.replace(x, " "), Jb(d.lastChild, l) && (e = e.replace(y, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, d.append(n).value = e)
                        },
                        comment: function (e) {
                            d.append(N("#comment", 8)).value = e
                        },
                        pi: function (e, t) {
                            d.append(N(e, 7)).value = t, E(d)
                        },
                        doctype: function (e) {
                            d.append(N("#doctype", 10)).value = e, E(d)
                        },
                        start: function (e, t, n) {
                            var r, o, i, a, u;
                            if (i = h ? k.getElementRule(e) : {}) {
                                for ((r = N(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = p[d.name]) && p[r.name] && !u[r.name] && m.push(r), o = _.length; o--;)(a = _[o].name) in t.map && ((s = D[a]) ? s.push(r) : D[a] = [r]);
                                l[e] && E(r), n || (d = r), !f && b[e] && (f = !0)
                            }
                        },
                        end: function (e) {
                            var t, n, r, o, i;
                            if (n = h ? k.getElementRule(e) : {}) {
                                if (l[e] && !f) {
                                    if ((t = d.firstChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(y, "")).length) t.value = r, t = t.next;
                                        else
                                            for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o;
                                    if ((t = d.lastChild) && 3 === t.type)
                                        if (0 < (r = t.value.replace(C, "")).length) t.value = r, t = t.prev;
                                        else
                                            for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, (0 === r.length || w.test(r)) && (t.remove(), t = o), t = o
                                }
                                if (f && b[e] && (f = !1), n.removeEmpty && Gb(k, g, b, d) && !d.attributes.map.name && !d.attr("id")) return i = d.parent, l[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                                n.paddEmpty && (Xb(d) || Gb(k, g, b, d)) && Kb(T, a, l, d), d = d.parent
                            }
                        }
                    }, k);
                    var S = d = new Wb(a.context || T.root_name, 11);
                    if (t.parse(e), h && m.length && (a.context ? a.invalid = !0 : function (e) {
                            var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h;
                            for (d = Zb("tr,td,th,tbody,thead,tfoot,table"), l = k.getNonEmptyElements(), f = k.getWhiteSpaceElements(), m = k.getTextBlockElements(), g = k.getSpecialElements(), t = 0; t < e.length; t++)
                                if ((n = e[t]).parent && !n.fixed)
                                    if (m[n.name] && "li" === n.parent.name) {
                                        for (p = n.next; p && m[p.name];) p.name = "li", p.fixed = !0, n.parent.insert(p, n.parent), p = p.next;
                                        n.unwrap(n)
                                    } else {
                                        for (o = [n], r = n.parent; r && !k.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r);
                                        if (r && 1 < o.length) {
                                            for (o.reverse(), i = a = B(o[0].clone()), c = 0; c < o.length - 1; c++) {
                                                for (k.isValidChild(a.name, o[c].name) ? (u = B(o[c].clone()), a.append(u)) : u = a, s = o[c].firstChild; s && s !== o[c + 1];) h = s.next, u.append(s), s = h;
                                                a = u
                                            }
                                            Gb(k, l, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], (Gb(k, l, f, r) || Yb(r, "br")) && r.empty().remove()
                                        } else if (n.parent) {
                                            if ("li" === n.name) {
                                                if ((p = n.prev) && ("ul" === p.name || "ul" === p.name)) {
                                                    p.append(n);
                                                    continue
                                                }
                                                if ((p = n.next) && ("ul" === p.name || "ul" === p.name)) {
                                                    p.insert(n, p.firstChild, !0);
                                                    continue
                                                }
                                                n.wrap(B(new Wb("ul", 1)));
                                                continue
                                            }
                                            k.isValidChild(n.parent.name, "div") && k.isValidChild("div", n.name) ? n.wrap(B(new Wb("div", 1))) : g[n.name] ? n.empty().remove() : n.unwrap()
                                        }
                                    }
                        }(m)), v && ("body" === S.name || a.isRootContent) && function () {
                            var e, t, n = S.firstChild,
                                r = function (e) {
                                    e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(y, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")))
                                };
                            if (k.isValidChild(S.name, v.toLowerCase())) {
                                for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !l[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(T.forced_root_block_attrs), S.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                                r(t)
                            }
                        }(), !a.invalid) {
                        for (c in R) {
                            for (s = A[c], i = (n = R[c]).length; i--;) n[i].parent || n.splice(i, 1);
                            for (r = 0, o = s.length; r < o; r++) s[r](n, c, a)
                        }
                        for (r = 0, o = _.length; r < o; r++)
                            if ((s = _[r]).name in D) {
                                for (i = (n = D[s.name]).length; i--;) n[i].parent || n.splice(i, 1);
                                for (i = 0, u = s.callbacks.length; i < u; i++) s.callbacks[i](n, s.name, a)
                            }
                    }
                    return S
                }
            };
        return Qb(e, T), qb.register(e, T), e
    }
    var oy = function (e, t, n) {
            -1 === Yt.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), t.push(n))
        },
        iy = function (e, t, n) {
            var r = Na(n.getInner ? t.innerHTML : e.getOuterHTML(t));
            return n.selection || Co(er.fromDom(t)) ? r : Yt.trim(r)
        },
        ay = function (e, t, n) {
            var r = n.selection ? Mb({
                    forced_root_block: !1
                }, n) : n,
                o = e.parse(t, r);
            return Fb.trimTrailingBr(o), o
        },
        uy = function (e, t, n, r, o) {
            var i, a, u, s, c = (i = r, tf(t, n).serialize(i));
            return a = e, s = c, !(u = o).no_events && a ? Wg(a, Mb(u, {
                content: s
            })).content : s
        };

    function sy(e, t) {
        var a, u, s, c, l, n, r = (a = e, n = ["data-mce-selected"], s = (u = t) && u.dom ? u.dom : pi.DOM, c = u && u.schema ? u.schema : ni(a), a.entity_encoding = a.entity_encoding || "named", a.remove_trailing_brs = !("remove_trailing_brs" in a) || a.remove_trailing_brs, l = ry(a, c), Fb.register(l, a, s), {
            schema: c,
            addNodeFilter: l.addNodeFilter,
            addAttributeFilter: l.addAttributeFilter,
            serialize: function (e, t) {
                var n = Mb({
                        format: "html"
                    }, t || {}),
                    r = Ub.process(u, e, n),
                    o = iy(s, r, n),
                    i = ay(l, o, n);
                return "tree" === n.format ? i : uy(u, a, c, i, n)
            },
            addRules: function (e) {
                c.addValidElements(e)
            },
            setRules: function (e) {
                c.setValidElements(e)
            },
            addTempAttr: b(oy, l, n),
            getTempAttrs: function () {
                return n
            }
        });
        return {
            schema: r.schema,
            addNodeFilter: r.addNodeFilter,
            addAttributeFilter: r.addAttributeFilter,
            serialize: r.serialize,
            addRules: r.addRules,
            setRules: r.setRules,
            addTempAttr: r.addTempAttr,
            getTempAttrs: r.getTempAttrs
        }
    }

    function cy(e) {
        return {
            getBookmark: b(fl, e),
            moveToBookmark: b(dl, e)
        }
    }(cy || (cy = {})).isBookmarkNode = ml;
    var ly = cy,
        fy = Do.isContentEditableFalse,
        dy = Do.isContentEditableTrue,
        my = function (r, a) {
            var u, s, c, l, f, d, m, g, p, h, v, b, i, y, C, x, w, N = a.dom,
                E = Yt.each,
                S = a.getDoc(),
                T = document,
                k = Math.abs,
                A = Math.round,
                _ = a.getBody();
            l = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var e = ".mce-content-body";
            a.contentStyles.push(e + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + e + " .mce-resizehandle:hover {background: #000}" + e + " img[data-mce-selected]," + e + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + e + " .mce-clonedresizable {position: absolute;" + (Re.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + e + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");
            var R = function (e) {
                    return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image"))
                },
                n = function (e) {
                    var t, n, r = e.target;
                    t = e, n = a.selection.getRng(), !R(t.target) || Vh(t.clientX, t.clientY, n) || e.isDefaultPrevented() || (e.preventDefault(), a.selection.select(r))
                },
                D = function (e) {
                    return a.dom.is(e, "figure.image") ? e.querySelector("img") : e
                },
                B = function (e) {
                    var t = a.settings.object_resizing;
                    return !1 !== t && !Re.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && e !== a.getBody() && Lr.is(er.fromDom(e), t))
                },
                O = function (e) {
                    var t, n, r, o;
                    t = e.screenX - d, n = e.screenY - m, y = t * f[2] + h, C = n * f[3] + v, y = y < 5 ? 5 : y, C = C < 5 ? 5 : C, (R(u) && !1 !== a.settings.resize_img_proportional ? !Hh.modifierPressed(e) : Hh.modifierPressed(e) || R(u) && f[2] * f[3] != 0) && (k(t) > k(n) ? (C = A(y * b), y = A(C / b)) : (y = A(C / b), C = A(y * b))), N.setStyles(D(s), {
                        width: y,
                        height: C
                    }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, N.setStyles(c, {
                        left: r,
                        top: o,
                        display: "block"
                    }), c.innerHTML = y + " &times; " + C, f[2] < 0 && s.clientWidth <= y && N.setStyle(s, "left", g + (h - y)), f[3] < 0 && s.clientHeight <= C && N.setStyle(s, "top", p + (v - C)), (t = _.scrollWidth - x) + (n = _.scrollHeight - w) != 0 && N.setStyles(c, {
                        left: r - t,
                        top: o - n
                    }), i || (Yg(a, u, h, v), i = !0)
                },
                P = function () {
                    i = !1;
                    var e = function (e, t) {
                        t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? N.setStyle(D(u), e, t) : N.setAttrib(D(u), e, t))
                    };
                    e("width", y), e("height", C), N.unbind(S, "mousemove", O), N.unbind(S, "mouseup", P), T !== S && (N.unbind(T, "mousemove", O), N.unbind(T, "mouseup", P)), N.remove(s), N.remove(c), o(u), Gg(a, u, y, C), N.setAttrib(u, "style", N.getAttrib(u, "style")), a.nodeChanged()
                },
                o = function (e) {
                    var t, r, o, n, i;
                    L(), F(), t = N.getPos(e, _), g = t.x, p = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, y = C = 0), n = a.fire("ObjectSelected", {
                        target: e
                    }), B(e) && !n.isDefaultPrevented() ? E(l, function (n, e) {
                        var t;
                        (t = N.get("mceResizeHandle" + e)) && N.remove(t), t = N.add(_, "div", {
                            id: "mceResizeHandle" + e,
                            "data-mce-bogus": "all",
                            "class": "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + e + "-resize; margin:0; padding:0"
                        }), 11 === Re.ie && (t.contentEditable = !1), N.bind(t, "mousedown", function (e) {
                            var t;
                            e.stopImmediatePropagation(), e.preventDefault(), d = (t = e).screenX, m = t.screenY, h = D(u).clientWidth, v = D(u).clientHeight, b = v / h, (f = n).startPos = {
                                x: r * n[0] + g,
                                y: o * n[1] + p
                            }, x = _.scrollWidth, w = _.scrollHeight, s = u.cloneNode(!0), N.addClass(s, "mce-clonedresizable"), N.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, N.setStyles(s, {
                                left: g,
                                top: p,
                                margin: 0
                            }), s.removeAttribute("data-mce-selected"), _.appendChild(s), N.bind(S, "mousemove", O), N.bind(S, "mouseup", P), T !== S && (N.bind(T, "mousemove", O), N.bind(T, "mouseup", P)), c = N.add(_, "div", {
                                "class": "mce-resize-helper",
                                "data-mce-bogus": "all"
                            }, h + " &times; " + v)
                        }), n.elm = t, N.setStyles(t, {
                            left: r * n[0] + g - t.offsetWidth / 2,
                            top: o * n[1] + p - t.offsetHeight / 2
                        })
                    }) : L(), u.setAttribute("data-mce-selected", "1")
                },
                L = function () {
                    var e, t;
                    for (e in F(), u && u.removeAttribute("data-mce-selected"), l)(t = N.get("mceResizeHandle" + e)) && (N.unbind(t), N.remove(t))
                },
                I = function (e) {
                    var t, n = function (e, t) {
                        if (e)
                            do {
                                if (e === t) return !0
                            } while (e = e.parentNode)
                    };
                    i || a.removed || (E(N.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                        e.removeAttribute("data-mce-selected")
                    }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = N.$(t).closest("table,img,figure.image,hr")[0], _) && (U(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? o(t) : L())
                },
                M = function (e) {
                    return fy(function (e, t) {
                        for (; t && t !== e;) {
                            if (dy(t) || fy(t)) return t;
                            t = t.parentNode
                        }
                        return null
                    }(a.getBody(), e))
                },
                F = function () {
                    for (var e in l) {
                        var t = l[e];
                        t.elm && (N.unbind(t.elm), delete t.elm)
                    }
                },
                U = function () {
                    try {
                        a.getDoc().execCommand("enableObjectResizing", !1, !1)
                    } catch (e) {}
                };
            return a.on("init", function () {
                U(), Re.ie && 11 <= Re.ie && (a.on("mousedown click", function (e) {
                    var t = e.target,
                        n = t.nodeName;
                    i || !/^(TABLE|IMG|HR)$/.test(n) || M(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged())
                }), a.dom.bind(_, "mscontrolselect", function (e) {
                    var t = function (e) {
                        Le.setEditorTimeout(a, function () {
                            a.selection.select(e)
                        })
                    };
                    if (M(e.target)) return e.preventDefault(), void t(e.target);
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
                }));
                var t = Le.throttle(function (e) {
                    a.composing || I(e)
                });
                a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function (e) {
                    u && "TABLE" === u.nodeName && t(e)
                }), a.on("hide blur", L), a.on("contextmenu", n)
            }), a.on("remove", F), {
                isResizable: B,
                showResizeRect: o,
                hideResizeRect: L,
                updateResizeRect: I,
                destroy: function () {
                    u = s = null
                }
            }
        },
        gy = function (e) {
            return Do.isContentEditableTrue(e) || Do.isContentEditableFalse(e)
        },
        py = function (e, t, n) {
            var r, o, i, a, u, s = n;
            if (s.caretPositionFromPoint)(o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) {
                r = s.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (c) {
                    r = function (e, n, t) {
                        var r, o, i;
                        if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = Yt.toArray(o.getClientRects())).sort(function (e, t) {
                                return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)))
                            })).length) {
                            n = (i[0].bottom + i[0].top) / 2;
                            try {
                                return o.moveToPoint(e, n), o.collapse(!0), o
                            } catch (a) {}
                        }
                        return null
                    }(e, t, n)
                }
                return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, Do.isContentEditableFalse(function (e, t, n) {
                    for (; e && e !== t;) {
                        if (n(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }(u, a, gy)) ? null : i
            }
            return r
        },
        hy = function (n, e) {
            return $(e, function (e) {
                var t = n.fire("GetSelectionRange", {
                    range: e
                });
                return t.range !== e ? t.range : e
            })
        },
        vy = function (e, t) {
            var n = (t || document).createDocumentFragment();
            return F(e, function (e) {
                n.appendChild(e.dom())
            }), er.fromDom(n)
        },
        by = kr("element", "width", "rows"),
        yy = kr("element", "cells"),
        Cy = kr("x", "y"),
        xy = function (e, t) {
            var n = parseInt(hr.get(e, t), 10);
            return isNaN(n) ? 1 : n
        },
        wy = function (e) {
            return z(e, function (e, t) {
                return t.cells().length > e ? t.cells().length : e
            }, 0)
        },
        Ny = function (e, t) {
            for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                    if (Fr.eq(o[i], t)) return A.some(Cy(i, r));
            return A.none()
        },
        Ey = function (e, t, n, r, o) {
            for (var i = [], a = e.rows(), u = n; u <= o; u++) {
                var s = a[u].cells(),
                    c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(yy(a[u].element(), c))
            }
            return i
        },
        Sy = function (e) {
            var o = by(pa(e), 0, []);
            return F(Ki(e, "tr"), function (n, r) {
                F(Ki(n, "td,th"), function (e, t) {
                    ! function (e, t, n, r, o) {
                        for (var i = xy(o, "rowspan"), a = xy(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) {
                            u[s] || (u[s] = yy(ha(r), []));
                            for (var c = t; c < t + a; c++) u[s].cells()[c] = s === n && c === t ? o : pa(o)
                        }
                    }(o, function (e, t, n) {
                        for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++;
                        var r, o, i;
                        return t
                    }(o, t, r), r, n, e)
                })
            }), by(o.element(), wy(o.rows()), o.rows())
        },
        Ty = function (e) {
            return n = $((t = e).rows(), function (e) {
                var t = $(e.cells(), function (e) {
                        var t = ha(e);
                        return hr.remove(t, "colspan"), hr.remove(t, "rowspan"), t
                    }),
                    n = pa(e.element());
                return Ai(n, t), n
            }), r = pa(t.element()), o = er.fromTag("tbody"), Ai(o, n), Ti.append(r, o), r;
            var t, n, r, o
        },
        ky = function (l, e, t) {
            return Ny(l, e).bind(function (c) {
                return Ny(l, t).map(function (e) {
                    return t = l, r = e, o = (n = c).x(), i = n.y(), a = r.x(), u = r.y(), s = i < u ? Ey(t, o, i, a, u) : Ey(t, o, u, a, i), by(t.element(), wy(s), s);
                    var t, n, r, o, i, a, u, s
                })
            })
        },
        Ay = function (n, t) {
            return V(n, function (e) {
                return "li" === sr.name(e) && fh(e, t)
            }).fold(H([]), function (e) {
                return (t = n, V(t, function (e) {
                    return "ul" === sr.name(e) || "ol" === sr.name(e)
                })).map(function (e) {
                    return [er.fromTag("li"), er.fromTag(sr.name(e))]
                }).getOr([]);
                var t
            })
        },
        _y = function (e, t) {
            var n, r = er.fromDom(t.commonAncestorContainer),
                o = Vf(r, e),
                i = U(o, function (e) {
                    return fo(e) || co(e)
                }),
                a = Ay(o, t),
                u = i.concat(a.length ? a : ho(n = r) ? $r.parent(n).filter(po).fold(H([]), function (e) {
                    return [n, e]
                }) : po(n) ? [n] : []);
            return $(u, pa)
        },
        Ry = function () {
            return vy([])
        },
        Dy = function (e, t) {
            return n = er.fromDom(t.cloneContents()), r = _y(e, t), o = z(r, function (e, t) {
                return Ti.append(t, e), t
            }, n), 0 < r.length ? vy([o]) : o;
            var n, r, o
        },
        By = function (e, o) {
            return (t = e, n = o[0], ta(n, "table", b(Fr.eq, t))).bind(function (e) {
                var t = o[0],
                    n = o[o.length - 1],
                    r = Sy(e);
                return ky(r, t, n).map(function (e) {
                    return vy([Ty(e)])
                })
            }).getOrThunk(Ry);
            var t, n
        },
        Oy = function (e, t) {
            var n, r, o = Rm(t, e);
            return 0 < o.length ? By(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? Ry() : Dy(n, r[0]))
        },
        Py = function (e, t) {
            var n, r = e.selection.getRng(),
                o = e.dom.create("body"),
                i = e.selection.getSel(),
                a = hy(e, Em(i));
            if ((t = t || {}).get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content;
            if ("text" === t.format) return e.selection.isCollapsed() ? "" : Na(r.text || (i.toString ? i.toString() : ""));
            r.cloneContents ? (n = t.contextual ? Oy(er.fromDom(e.getBody()), a).dom() : r.cloneContents()) && o.appendChild(n) : r.item !== undefined || r.htmlText !== undefined ? (o.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), o.removeChild(o.firstChild)) : o.innerHTML = r.toString(), t.getInner = !0;
            var u = e.selection.serializer.serialize(o, t);
            return "tree" === t.format ? u : (t.content = e.selection.isCollapsed() ? "" : u, e.fire("GetContent", t), t.content)
        },
        Ly = function (e, t, n) {
            var r, o, i, a = e.selection.getRng(),
                u = e.getDoc();
            if ((n = n || {
                    format: "html"
                }).set = !0, n.selection = !0, n.content = t, n.no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) {
                if (t = n.content, a.insertNode) {
                    t += '<span id="__caret">_</span>', a.startContainer === u && a.endContainer === u ? u.body.innerHTML = t : (a.deleteContents(), 0 === u.body.childNodes.length ? u.body.innerHTML = t : a.createContextualFragment ? a.insertNode(a.createContextualFragment(t)) : (o = u.createDocumentFragment(), i = u.createElement("div"), o.appendChild(i), i.outerHTML = t, a.insertNode(o))), r = e.dom.get("__caret"), (a = u.createRange()).setStartBefore(r), a.setEndBefore(r), e.selection.setRng(a), e.dom.remove("__caret");
                    try {
                        e.selection.setRng(a)
                    } catch (s) {}
                } else a.item && (u.execCommand("Delete", !1, null), a = e.getRng()), /^\s+/.test(t) ? (a.pasteHTML('<span id="__mce_tmp">_</span>' + t), e.dom.remove("__mce_tmp")) : a.pasteHTML(t);
                n.no_events || e.fire("SetContent", n)
            } else e.fire("SetContent", n)
        },
        Iy = function (e, t, n, r, o) {
            var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset;
            return A.from(i).map(er.fromDom).map(function (e) {
                return r && t.collapsed ? e : $r.child(e, o(e, a)).getOr(e)
            }).bind(function (e) {
                return sr.isElement(e) ? A.some(e) : $r.parent(e)
            }).map(function (e) {
                return e.dom()
            }).getOr(e)
        },
        My = function (e, t, n) {
            return Iy(e, t, !0, n, function (e, t) {
                return Math.min($r.childNodesCount(e), t)
            })
        },
        Fy = function (e, t, n) {
            return Iy(e, t, !1, n, function (e, t) {
                return 0 < t ? t - 1 : t
            })
        },
        Uy = function (e, t) {
            for (var n = e; e && Do.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        },
        zy = Yt.each,
        Vy = function (e) {
            return !!e.select
        },
        qy = function (e) {
            return !(!e || !e.ownerDocument) && Fr.contains(er.fromDom(e.ownerDocument), er.fromDom(e))
        },
        Hy = function (u, s, e, c) {
            var n, t, l, f, a, r = function (e, t) {
                    return Ly(c, e, t)
                },
                o = function (e) {
                    var t = m();
                    t.collapse(!!e), i(t)
                },
                d = function () {
                    return s.getSelection ? s.getSelection() : s.document.selection
                },
                m = function () {
                    var e, t, n, r, o = function (e, t, n) {
                        try {
                            return t.compareBoundaryPoints(e, n)
                        } catch (r) {
                            return -1
                        }
                    };
                    if (!s) return null;
                    if (null == (r = s.document)) return null;
                    if (c.bookmark !== undefined && !1 === xp(c)) {
                        var i = Og(c);
                        if (i.isSome()) return i.map(function (e) {
                            return hy(c, [e])[0]
                        }).getOr(r.createRange())
                    }
                    try {
                        (e = d()) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : r.createRange())
                    } catch (a) {}
                    return (t = hy(c, [t])[0]) || (t = r.createRange ? r.createRange() : r.body.createTextRange()), t.setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === o(t.START_TO_START, t, l) && 0 === o(t.END_TO_END, t, l) ? t = f : f = l = null), t
                },
                i = function (e, t) {
                    var n, r;
                    if ((o = e) && (Vy(o) || qy(o.startContainer) && qy(o.endContainer))) {
                        var o, i = Vy(e) ? e : null;
                        if (i) {
                            f = null;
                            try {
                                i.select()
                            } catch (a) {}
                        } else {
                            if (n = d(), e = c.fire("SetSelectionRange", {
                                    range: e,
                                    forward: t
                                }).range, n) {
                                f = e;
                                try {
                                    n.removeAllRanges(), n.addRange(e)
                                } catch (a) {}!1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), l = 0 < n.rangeCount ? n.getRangeAt(0) : null
                            }
                            e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || Re.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), c.fire("AfterSetSelectionRange", {
                                range: e,
                                forward: t
                            })
                        }
                    }
                },
                g = function () {
                    var e, t, n = d();
                    return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0)
                },
                p = {
                    bookmarkManager: null,
                    controlSelection: null,
                    dom: u,
                    win: s,
                    serializer: e,
                    editor: c,
                    collapse: o,
                    setCursorLocation: function (e, t) {
                        var n = u.createRng();
                        e ? (n.setStart(e, t), n.setEnd(e, t), i(n), o(!1)) : (dh(u, n, c.getBody(), !0), i(n))
                    },
                    getContent: function (e) {
                        return Py(c, e)
                    },
                    setContent: r,
                    getBookmark: function (e, t) {
                        return n.getBookmark(e, t)
                    },
                    moveToBookmark: function (e) {
                        return n.moveToBookmark(e)
                    },
                    select: function (e, t) {
                        var r, n, o;
                        return (r = u, n = e, o = t, A.from(n).map(function (e) {
                            var t = r.nodeIndex(e),
                                n = r.createRng();
                            return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (dh(r, n, e, !0), dh(r, n, e, !1)), n
                        })).each(i), e
                    },
                    isCollapsed: function () {
                        var e = m(),
                            t = d();
                        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                    },
                    isForward: g,
                    setNode: function (e) {
                        return r(u.getOuterHTML(e)), e
                    },
                    getNode: function () {
                        return e = c.getBody(), (t = m()) ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Uy(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Uy(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e;
                        var e, t, n, r, o, i, a
                    },
                    getSel: d,
                    setRng: i,
                    getRng: m,
                    getStart: function (e) {
                        return My(c.getBody(), m(), e)
                    },
                    getEnd: function (e) {
                        return Fy(c.getBody(), m(), e)
                    },
                    getSelectedBlocks: function (e, t) {
                        return function (e, t, n, r) {
                            var o, i, a = [];
                            if (i = e.getRoot(), n = e.getParent(n || My(i, t, t.collapsed), e.isBlock), r = e.getParent(r || Fy(i, t, t.collapsed), e.isBlock), n && n !== i && a.push(n), n && r && n !== r)
                                for (var u = new oo(o = n, i);
                                    (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o);
                            return r && n !== r && r !== i && a.push(r), a
                        }(u, m(), e, t)
                    },
                    normalize: function () {
                        var e = m(),
                            t = d();
                        if (!Tm(t) && mh(c)) {
                            var n = rg(u, e);
                            return n.each(function (e) {
                                i(e, g())
                            }), n.getOr(e)
                        }
                        return e
                    },
                    selectorChanged: function (e, t) {
                        var i;
                        return a || (a = {}, i = {}, c.on("NodeChange", function (e) {
                            var n = e.element,
                                r = u.getParents(n, null, u.getRoot()),
                                o = {};
                            zy(a, function (e, n) {
                                zy(r, function (t) {
                                    if (u.is(t, n)) return i[n] || (zy(e, function (e) {
                                        e(!0, {
                                            node: t,
                                            selector: n,
                                            parents: r
                                        })
                                    }), i[n] = e), o[n] = e, !1
                                })
                            }), zy(i, function (e, t) {
                                o[t] || (delete i[t], zy(e, function (e) {
                                    e(!1, {
                                        node: n,
                                        selector: t,
                                        parents: r
                                    })
                                }))
                            })
                        })), a[e] || (a[e] = []), a[e].push(t), p
                    },
                    getScrollContainer: function () {
                        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
                            if (t.scrollHeight > t.clientHeight) {
                                e = t;
                                break
                            }
                            t = t.parentNode
                        }
                        return e
                    },
                    scrollIntoView: function (e, t) {
                        return js(c, e, t)
                    },
                    placeCaretAt: function (e, t) {
                        return i(py(e, t, c.getDoc()))
                    },
                    getBoundingClientRect: function () {
                        var e = m();
                        return e.collapsed ? Su.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                    },
                    destroy: function () {
                        s = l = f = null, t.destroy()
                    }
                };
            return n = ly(p), t = my(p, c), p.bookmarkManager = n, p.controlSelection = t, p
        },
        jy = Do.isContentEditableFalse,
        $y = Za,
        Wy = Xc,
        Ky = Kc,
        Xy = function (e, t) {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        },
        Yy = function (e, t, n, r) {
            var o, i, a, u, s, c, l = e === Nu.Forwards,
                f = l ? Ky : Wy;
            return !r.collapsed && (o = $y(r), jy(o)) ? us(e, t, o, e === Nu.Backwards, !0) : (u = Ta(r.startContainer), f(i = Wc(e, t.getBody(), r)) ? ss(t, i.getNode(!l)) : (i = n(i)) ? f(i) ? us(e, t, i.getNode(!l), l, !0) : f(a = n(i)) && (!(c = Ic(s = i, a)) && Do.isBr(s.getNode()) || c) ? us(e, t, a.getNode(!l), l, !0) : u ? ls(t, i.toRange(), !0) : null : u ? r : null)
        },
        Gy = function (e, t, n, r) {
            var o, i, a, u, s, c, l, f, d;
            if (d = $y(r), o = Wc(e, t.getBody(), r), i = n(t.getBody(), Dh(1), o), a = jt.filter(i, Bh(1)), s = jt.last(o.getClientRects()), (Ky(o) || Yc(o)) && (d = o.getNode()), (Wy(o) || Gc(o)) && (d = o.getNode(!0)), !s) return null;
            if (c = s.left, (u = Fh(a, c)) && jy(u.node)) return l = Math.abs(c - u.left), f = Math.abs(c - u.right), us(e, t, u.node, l < f, !0);
            if (d) {
                var m = function (e, t, n, r) {
                    var o, i, a, u, s, c, l = Ns(t),
                        f = [],
                        d = 0,
                        m = function (e) {
                            return jt.last(e.getClientRects())
                        };
                    1 === e ? (o = l.next, i = Qa, a = Ja, u = Su.after(r)) : (o = l.prev, i = Ja, a = Qa, u = Su.before(r)), c = m(u);
                    do {
                        if (u.isVisible() && !a(s = m(u), c)) {
                            if (0 < f.length && i(s, jt.last(f)) && d++, (s = Xa(s)).position = u, s.line = d, n(s)) return f;
                            f.push(s)
                        }
                    } while (u = o(u));
                    return f
                }(e, t.getBody(), Dh(1), d);
                if (u = Fh(jt.filter(m, Bh(1)), c)) return ls(t, u.position.toRange(), !0);
                if (u = jt.last(jt.filter(m, Bh(0)))) return ls(t, u.position.toRange(), !0)
            }
        },
        Jy = function (e, t, n) {
            var r, o, i, a, u = Ns(e.getBody()),
                s = ya.curry(Xy, u.next),
                c = ya.curry(Xy, u.prev);
            if (n.collapsed && e.settings.forced_root_block) {
                if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? s(Su.fromRangeStart(n)) : c(Su.fromRangeStart(n))) || (a = (i = e).dom.create(i.settings.forced_root_block), (!Re.ie || 11 <= Re.ie) && (a.innerHTML = '<br data-mce-bogus="1">'), o = a, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse())
            }
        },
        Qy = function (l, f) {
            return function () {
                var e, t, n, r, o, i, a, u, s, c = (t = f, r = Ns((e = l).getBody()), o = ya.curry(Xy, r.next), i = ya.curry(Xy, r.prev), a = t ? Nu.Forwards : Nu.Backwards, u = t ? o : i, s = e.selection.getRng(), (n = Yy(a, e, u, s)) ? n : (n = Jy(e, a, s)) || null);
                return !!c && (l.selection.setRng(c), !0)
            }
        },
        Zy = function (u, s) {
            return function () {
                var e, t, n, r, o, i, a = (r = (t = s) ? 1 : -1, o = t ? Rh : _h, i = (e = u).selection.getRng(), (n = Gy(r, e, o, i)) ? n : (n = Jy(e, r, i)) || null);
                return !!a && (u.selection.setRng(a), !0)
            }
        },
        eC = function (e, r) {
            return G($(e, function (e) {
                return Mb({
                    shiftKey: !1,
                    altKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    action: v
                }, e)
            }), function (e) {
                return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
                var t, n
            })
        },
        tC = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Array.prototype.slice.call(arguments, 1);
            return function () {
                return e.apply(null, r)
            }
        },
        nC = function (e, t) {
            return V(eC(e, t), function (e) {
                return e.action()
            })
        },
        rC = function (i, a) {
            i.on("keydown", function (e) {
                var t, n, r, o;
                !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = Qn.detect().os, nC([{
                    keyCode: Hh.RIGHT,
                    action: Qy(t, !0)
                }, {
                    keyCode: Hh.LEFT,
                    action: Qy(t, !1)
                }, {
                    keyCode: Hh.UP,
                    action: Zy(t, !1)
                }, {
                    keyCode: Hh.DOWN,
                    action: Zy(t, !0)
                }, {
                    keyCode: Hh.RIGHT,
                    action: bc(t, !0)
                }, {
                    keyCode: Hh.LEFT,
                    action: bc(t, !1)
                }, {
                    keyCode: Hh.UP,
                    action: yc(t, !1)
                }, {
                    keyCode: Hh.DOWN,
                    action: yc(t, !0)
                }, {
                    keyCode: Hh.RIGHT,
                    action: om.move(t, n, !0)
                }, {
                    keyCode: Hh.LEFT,
                    action: om.move(t, n, !1)
                }, {
                    keyCode: Hh.RIGHT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: om.moveNextWord(t, n)
                }, {
                    keyCode: Hh.LEFT,
                    ctrlKey: !o.isOSX(),
                    altKey: o.isOSX(),
                    action: om.movePrevWord(t, n)
                }], r).each(function (e) {
                    r.preventDefault()
                }))
            })
        },
        oC = function (e) {
            return 1 === $r.children(e).length
        },
        iC = function (e, t, n, r) {
            var o, i, a, u, s = b(jv, t),
                c = $(U(r, s), function (e) {
                    return e.dom()
                });
            if (0 === c.length) md(t, e, n);
            else {
                var l = (o = n.dom(), i = c, a = Mv(!1), u = qv(i, a.dom()), Ti.before(er.fromDom(o), a), Ri.remove(er.fromDom(o)), Su(u, 0));
                t.selection.setRng(l.toRange())
            }
        },
        aC = function (n, r) {
            var t, e = er.fromDom(n.getBody()),
                o = er.fromDom(n.selection.getStart()),
                i = U((t = Vf(o, e), K(t, lo).fold(H(t), function (e) {
                    return t.slice(0, e)
                })), oC);
            return te(i).map(function (e) {
                var t = Su.fromRangeStart(n.selection.getRng());
                return !!Sf(r, t, e.dom()) && (iC(r, n, e, i), !0)
            }).getOr(!1)
        },
        uC = function (e, t) {
            return !!e.selection.isCollapsed() && aC(e, t)
        },
        sC = function (o, i) {
            o.on("keydown", function (e) {
                var t, n, r;
                !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, nC([{
                    keyCode: Hh.BACKSPACE,
                    action: tC(hd, t, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(hd, t, !0)
                }, {
                    keyCode: Hh.BACKSPACE,
                    action: tC(sm, t, n, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(sm, t, n, !0)
                }, {
                    keyCode: Hh.BACKSPACE,
                    action: tC(Vm, t, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(Vm, t, !0)
                }, {
                    keyCode: Hh.BACKSPACE,
                    action: tC(Qf, t, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(Qf, t, !0)
                }, {
                    keyCode: Hh.BACKSPACE,
                    action: tC(Xf, t, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(Xf, t, !0)
                }, {
                    keyCode: Hh.BACKSPACE,
                    action: tC(uC, t, !1)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(uC, t, !0)
                }], r).each(function (e) {
                    r.preventDefault()
                }))
            }), o.on("keyup", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = o, n = e, nC([{
                    keyCode: Hh.BACKSPACE,
                    action: tC(vd, t)
                }, {
                    keyCode: Hh.DELETE,
                    action: tC(vd, t)
                }], n))
            })
        },
        cC = function (e) {
            return A.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock))
        },
        lC = function (e, t) {
            var n, r, o, i = t,
                a = e.dom,
                u = e.schema.getMoveCaretBeforeOnEnterElements();
            if (t) {
                if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                    var s = function (e) {
                        for (; e;) {
                            if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }(t.firstChild);
                    s && /^(UL|OL|DL)$/.test(s.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                }
                if (o = a.createRng(), t.normalize(), t.hasChildNodes()) {
                    for (n = new oo(t, t); r = n.current();) {
                        if (Do.isText(r)) {
                            o.setStart(r, 0), o.setEnd(r, 0);
                            break
                        }
                        if (u[r.nodeName.toLowerCase()]) {
                            o.setStartBefore(r), o.setEndBefore(r);
                            break
                        }
                        i = r, r = n.next()
                    }
                    r || (o.setStart(i, 0), o.setEnd(i, 0))
                } else Do.isBr(t) ? t.nextSibling && a.isBlock(t.nextSibling) ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)) : (o.setStart(t, 0), o.setEnd(t, 0));
                e.selection.setRng(o), a.remove(void 0), e.selection.scrollIntoView(t)
            }
        },
        fC = function (e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        dC = cC,
        mC = function (e) {
            return cC(e).fold(H(""), function (e) {
                return e.nodeName.toUpperCase()
            })
        },
        gC = function (e) {
            return cC(e).filter(function (e) {
                return ho(er.fromDom(e))
            }).isSome()
        },
        pC = function (e, t) {
            return e && e.parentNode && e.parentNode.nodeName === t
        },
        hC = function (e) {
            return e && /^(OL|UL|LI)$/.test(e.nodeName)
        },
        vC = function (e) {
            var t = e.parentNode;
            return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e
        },
        bC = function (e, t, n) {
            for (var r = e[n ? "firstChild" : "lastChild"]; r && !Do.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"];
            return r === t
        },
        yC = function (e, t, n, r, o) {
            var i = e.dom,
                a = e.selection.getRng();
            if (n !== e.getBody()) {
                var u;
                hC(u = n) && hC(u.parentNode) && (o = "LI");
                var s, c, l = o ? t(o) : i.create("BR");
                if (bC(n, r, !0) && bC(n, r, !1)) pC(n, "LI") ? i.insertAfter(l, vC(n)) : i.replace(l, n);
                else if (bC(n, r, !0)) pC(n, "LI") ? (i.insertAfter(l, vC(n)), l.appendChild(i.doc.createTextNode(" ")), l.appendChild(n)) : n.parentNode.insertBefore(l, n);
                else if (bC(n, r, !1)) i.insertAfter(l, vC(n));
                else {
                    n = vC(n);
                    var f = a.cloneRange();
                    f.setStartAfter(r), f.setEndAfter(n);
                    var d = f.extractContents();
                    "LI" === o && (c = "LI", (s = d).firstChild && s.firstChild.nodeName === c) ? (l = d.firstChild, i.insertAfter(d, n)) : (i.insertAfter(d, n), i.insertAfter(l, n))
                }
                i.remove(r), lC(e, l)
            }
        },
        CC = function (e) {
            e.innerHTML = '<br data-mce-bogus="1">'
        },
        xC = function (e, t) {
            return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t
        },
        wC = function (e, t) {
            return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t)
        },
        NC = function (e, t, n) {
            return !1 === Do.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === wa ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === wa ? t.data.length : n
        },
        EC = function (e, t) {
            var n, r, o = e.getRoot();
            for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode;
            return n !== o ? r : o
        },
        SC = function (e, t) {
            var n = ec(e);
            n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, tc(e))
        },
        TC = function (a, e) {
            var t, u, s, i, c, n, r, o, l, f, d, m, g, p, h, v, b, y, C = a.dom,
                x = a.schema,
                w = x.getNonEmptyElements(),
                N = a.selection.getRng(),
                E = function (e) {
                    var t, n, r, o = s,
                        i = x.getTextInlineElements();
                    if (e || "TABLE" === f || "HR" === f ? (t = C.create(e || m), SC(a, t)) : t = c.cloneNode(!1), r = t, !1 === oc(a)) C.setAttrib(t, "style", null), C.setAttrib(t, "class", null);
                    else
                        do {
                            if (i[o.nodeName]) {
                                if (Ku(o)) continue;
                                n = o.cloneNode(!1), C.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n)
                            }
                        } while ((o = o.parentNode) && o !== u);
                    return CC(r), t
                },
                S = function (e) {
                    var t, n, r, o;
                    if (o = NC(e, s, i), Do.isText(s) && (e ? 0 < o : o < s.nodeValue.length)) return !1;
                    if (s.parentNode === c && g && !e) return !0;
                    if (e && Do.isElement(s) && s === c.firstChild) return !0;
                    if (xC(s, "TABLE") || xC(s, "HR")) return g && !e || !g && e;
                    for (t = new oo(s, c), Do.isText(s) && (e && 0 === o ? t.prev() : e || o !== s.nodeValue.length || t.next()); n = t.current();) {
                        if (Do.isElement(n)) {
                            if (!n.getAttribute("data-mce-bogus") && (r = n.nodeName.toLowerCase(), w[r] && "br" !== r)) return !1
                        } else if (Do.isText(n) && !/^[ \t\r\n]*$/.test(n.nodeValue)) return !1;
                        e ? t.prev() : t.next()
                    }
                    return !0
                },
                T = function () {
                    r = /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d ? E(m) : E(), ic(a) && wC(C, l) && C.isEmpty(c) ? r = C.split(l, c) : C.insertAfter(r, c), lC(a, r)
                };
            rg(C, N).each(function (e) {
                N.setStart(e.startContainer, e.startOffset), N.setEnd(e.endContainer, e.endOffset)
            }), s = N.startContainer, i = N.startOffset, m = ec(a), n = e.shiftKey, Do.isElement(s) && s.hasChildNodes() && (g = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = g && Do.isText(s) ? s.nodeValue.length : 0), (u = EC(C, s)) && ((m && !n || !m && n) && (s = function (e, t, n, r, o) {
                var i, a, u, s, c, l, f, d = t || "P",
                    m = e.dom,
                    g = EC(m, r);
                if (!(a = m.getParent(r, m.isBlock)) || !wC(m, a)) {
                    if (l = (a = a || g) === e.getBody() || (f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = m.create(d), SC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;
                    for (s = r; s.parentNode !== a;) s = s.parentNode;
                    for (; s && !m.isBlock(s);) s = (u = s).previousSibling;
                    if (u && e.schema.isValidChild(l, d.toLowerCase())) {
                        for (i = m.create(d), SC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !m.isBlock(s);) c = s.nextSibling, i.appendChild(s), s = c;
                        n.setStart(r, o), n.setEnd(r, o)
                    }
                }
                return r
            }(a, m, N, s, i)), c = C.getParent(s, C.isBlock), l = c ? C.getParent(c.parentNode, C.isBlock) : null, f = c ? c.nodeName.toUpperCase() : "", "LI" !== (d = l ? l.nodeName.toUpperCase() : "") || e.ctrlKey || (l = (c = l).parentNode, f = d), /^(LI|DT|DD)$/.test(f) && C.isEmpty(c) ? yC(a, E, l, c, m) : m && c === a.getBody() || (m = m || "P", Ta(c) ? (r = La(c), C.isEmpty(c) && CC(c), lC(a, r)) : S() ? T() : S(!0) ? (r = c.parentNode.insertBefore(E(), c), lC(a, xC(c, "HR") ? r : c)) : ((t = (b = N, y = b.cloneRange(), y.setStart(b.startContainer, NC(!0, b.startContainer, b.startOffset)), y.setEnd(b.endContainer, NC(!1, b.endContainer, b.endOffset)), y).cloneRange()).setEndAfter(c), function (e) {
                for (; Do.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;);
            }(o = t.extractContents()), r = o.firstChild, C.insertAfter(o, c), function (e, t, n) {
                var r, o = n,
                    i = [];
                if (o) {
                    for (; o = o.firstChild;) {
                        if (e.isBlock(o)) return;
                        Do.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                    }
                    for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = o) && "A" === a.nodeName && 0 === Yt.trim(Na(a.innerText || a.textContent)).length && e.remove(o);
                    var a
                }
            }(C, w, r), p = C, (h = c).normalize(), (v = h.lastChild) && !/^(left|right)$/gi.test(p.getStyle(v, "float", !0)) || p.add(h, "br"), C.isEmpty(c) && CC(c), r.normalize(), C.isEmpty(r) ? (C.remove(r), T()) : lC(a, r)), C.setAttrib(r, "id", ""), a.fire("NewBlock", {
                newBlock: r
            })))
        },
        kC = function (e, t) {
            return dC(e).filter(function (e) {
                return 0 < t.length && Lr.is(er.fromDom(e), t)
            }).isSome()
        },
        AC = function (e) {
            return kC(e, nc(e))
        },
        _C = function (e) {
            return kC(e, rc(e))
        },
        RC = Zf([{
            br: []
        }, {
            block: []
        }, {
            none: []
        }]),
        DC = function (e, t) {
            return _C(e)
        },
        BC = function (n) {
            return function (e, t) {
                return "" === ec(e) === n
            }
        },
        OC = function (n) {
            return function (e, t) {
                return gC(e) === n
            }
        },
        PC = function (n, r) {
            return function (e, t) {
                return mC(e) === n.toUpperCase() === r
            }
        },
        LC = function (e) {
            return PC("pre", e)
        },
        IC = function (n) {
            return function (e, t) {
                return Zs(e) === n
            }
        },
        MC = function (e, t) {
            return AC(e)
        },
        FC = function (e, t) {
            return t
        },
        UC = function (e) {
            var t = ec(e),
                n = fC(e.dom, e.selection.getStart());
            return n && e.schema.isValidChild(n.nodeName, t || "P")
        },
        zC = function (e, t) {
            return function (n, r) {
                return z(e, function (e, t) {
                    return e && t(n, r)
                }, !0) ? A.some(t) : A.none()
            }
        },
        VC = function (e, t) {
            return Ad([zC([DC], RC.none()), zC([PC("summary", !0)], RC.br()), zC([LC(!0), IC(!1), FC], RC.br()), zC([LC(!0), IC(!1)], RC.block()), zC([LC(!0), IC(!0), FC], RC.block()), zC([LC(!0), IC(!0)], RC.br()), zC([OC(!0), FC], RC.br()), zC([OC(!0)], RC.block()), zC([BC(!0), FC, UC], RC.block()), zC([BC(!0)], RC.br()), zC([MC], RC.br()), zC([BC(!1), FC], RC.br()), zC([UC], RC.block())], [e, t.shiftKey]).getOr(RC.none())
        },
        qC = function (e, t) {
            VC(e, t).fold(function () {
                mg(e, t)
            }, function () {
                TC(e, t)
            }, v)
        },
        HC = function (o) {
            o.on("keydown", function (e) {
                var t, n, r;
                e.keyCode === Hh.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function () {
                    !1 === t.selection.isCollapsed() && t.execCommand("Delete"), qC(t, n)
                })))
            })
        },
        jC = function (e, t, n) {
            return u = t, !(!$C(n) || !Do.isText(u.container()) || (r = e, i = (o = t).container(), a = o.offset(), i.insertData(a, "\xa0"), r.selection.setCursorLocation(i, a + 1), 0));
            var r, o, i, a, u
        },
        $C = function (e) {
            return e.fold(H(!1), H(!0), H(!0), H(!1))
        },
        WC = function (e) {
            return !!e.selection.isCollapsed() && (t = e, n = b(wf.isInlineTarget, t), r = Su.fromRangeStart(t.selection.getRng()), Wd(n, t.getBody(), r).map(b(jC, t, r)).getOr(!1));
            var t, n, r
        },
        KC = function (r) {
            r.on("keydown", function (e) {
                var t, n;
                !1 === e.isDefaultPrevented() && (t = r, n = e, nC([{
                    keyCode: Hh.SPACEBAR,
                    action: tC(WC, t)
                }], n).each(function (e) {
                    n.preventDefault()
                }))
            })
        },
        XC = function (e, t) {
            var n;
            t.hasAttribute("data-mce-caret") && (La(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t))
        },
        YC = function (e, t) {
            var n, r = (n = e, na(er.fromDom(n.getBody()), "*[data-mce-caret]").fold(H(null), function (e) {
                return e.dom()
            }));
            if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void XC(e, r)) : void(_a(r) && (XC(e, r), e.undoManager.add()))
        },
        GC = function (e) {
            e.on("keyup compositionstart", b(YC, e))
        },
        JC = function (e) {
            var t = om.setupSelectedState(e);
            GC(e), rC(e, t), sC(e, t), HC(e), KC(e)
        };

    function QC(u) {
        var s, n, r, o = Yt.each,
            c = Hh.BACKSPACE,
            l = Hh.DELETE,
            f = u.dom,
            d = u.selection,
            e = u.settings,
            t = u.parser,
            i = Re.gecko,
            a = Re.ie,
            m = Re.webkit,
            g = "data:text/mce-internal,",
            p = a ? "Text" : "URL",
            h = function (e, t) {
                try {
                    u.getDoc().execCommand(e, !1, t)
                } catch (n) {}
            },
            v = function (e) {
                return e.isDefaultPrevented()
            },
            b = function () {
                u.shortcuts.add("meta+a", null, "SelectAll")
            },
            y = function () {
                u.on("keydown", function (e) {
                    if (!v(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
                        var t = d.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            },
            C = function () {
                u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function (e) {
                    var t;
                    if ("HTML" === e.target.nodeName) {
                        if (11 < Re.ie) return void u.getBody().focus();
                        t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged()
                    }
                }))
            };
        return u.on("keydown", function (e) {
            var t, n, r, o, i;
            if (!v(e) && e.keyCode === Hh.BACKSPACE && (n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n, t.collapsed && 0 === r)) {
                for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode;
                "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t))
            }
        }), s = function (e) {
            var t = f.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), d.serializer.serialize(t, {
                format: "html"
            })
        }, u.on("keydown", function (e) {
            var t, n, r, o, i, a = e.keyCode;
            if (!v(e) && (a === l || a === c)) {
                if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
                if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged()
            }
        }), Re.windowsPhone || u.on("keyup focusin mouseup", function (e) {
            Hh.modifierPressed(e) || d.normalize()
        }, !0), m && (u.settings.content_editable || f.bind(u.getDoc(), "mousedown mouseup", function (e) {
            var t;
            if (e.target === u.getDoc().documentElement)
                if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
                    if (Aa(t.startContainer)) return;
                    d.placeCaretAt(e.clientX, e.clientY)
                } else d.setRng(t)
        }), u.on("click", function (e) {
            var t = e.target;
            /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t))
        }), e.forced_root_block && u.on("init", function () {
            h("DefaultParagraphSeparator", e.forced_root_block)
        }), u.on("init", function () {
            u.dom.bind(u.getBody(), "submit", function (e) {
                e.preventDefault()
            })
        }), y(), t.addNodeFilter("br", function (e) {
            for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
        }), Re.iOS ? (u.inline || u.on("keydown", function () {
            document.activeElement === document.body && u.getWin().focus()
        }), C(), u.on("click", function (e) {
            var t = e.target;
            do {
                if ("A" === t.tagName) return void e.preventDefault()
            } while (t = t.parentNode)
        }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : b()), 11 <= Re.ie && (C(), y()), Re.ie && (b(), h("AutoUrlDetect", !1), u.on("dragstart", function (e) {
            var t, n, r;
            (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = g + escape(u.id) + "," + escape(n), t.dataTransfer.setData(p, r)))
        }), u.on("drop", function (e) {
            if (!v(e)) {
                var t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(g) ? (a = a.substr(g.length).split(","), {
                    id: unescape(a[0]),
                    html: unescape(a[1])
                }) : null;
                if (t && t.id !== u.id) {
                    e.preventDefault();
                    var n = py(e.x, e.y, u.getDoc());
                    d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: o
                    }) : u.execCommand("mceInsertContent", !1, r)
                }
            }
            var r, o, i, a
        })), i && (u.on("keydown", function (e) {
            if (!v(e) && e.keyCode === c) {
                if (!u.getBody().getElementsByTagName("hr").length) return;
                if (d.isCollapsed() && 0 === d.getRng().startOffset) {
                    var t = d.getNode(),
                        n = t.previousSibling;
                    if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                    n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault())
                }
            }
        }), Range.prototype.getClientRects || u.on("mousedown", function (e) {
            if (!v(e) && "HTML" === e.target.nodeName) {
                var t = u.getBody();
                t.blur(), Le.setEditorTimeout(u, function () {
                    t.focus()
                })
            }
        }), n = function () {
            var e = f.getAttribs(d.getStart().cloneNode(!1));
            return function () {
                var t = d.getStart();
                t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function (e) {
                    t.setAttributeNode(e.cloneNode(!0))
                }))
            }
        }, r = function () {
            return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock)
        }, u.on("keypress", function (e) {
            var t;
            if (!v(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1
        }), f.bind(u.getDoc(), "cut", function (e) {
            var t;
            !v(e) && r() && (t = n(), Le.setEditorTimeout(u, function () {
                t()
            }))
        }), e.readonly || u.on("BeforeExecCommand MouseDown", function () {
            h("StyleWithCSS", !1), h("enableInlineTableEditing", !1), e.object_resizing || h("enableObjectResizing", !1)
        }), u.on("SetContent ExecCommand", function (e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function (e) {
                var t = e.parentNode,
                    n = f.getRoot();
                if (t.lastChild === e) {
                    for (; t && !f.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    f.add(t, "br", {
                        "data-mce-bogus": 1
                    })
                }
            })
        }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), Re.mac && u.on("keydown", function (e) {
            !Hh.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"))
        }), y()), {
            refreshContentEditable: function () {},
            isHidden: function () {
                var e;
                return !i || u.removed ? 0 : !(e = u.selection.getSel()) || !e.rangeCount || 0 === e.rangeCount
            }
        }
    }
    var ZC = function (e) {
            return Do.isElement(e) && go(er.fromDom(e))
        },
        ex = function (t) {
            t.on("click", function (e) {
                3 <= e.detail && function (e) {
                    var t = e.selection.getRng(),
                        n = wu.fromRangeStart(t),
                        r = wu.fromRangeEnd(t);
                    if (wu.isElementPosition(n)) {
                        var o = n.container();
                        ZC(o) && rl.firstPositionIn(o).each(function (e) {
                            return t.setStart(e.container(), e.offset())
                        })
                    }
                    wu.isElementPosition(r) && (o = n.container(), ZC(o) && rl.lastPositionIn(o).each(function (e) {
                        return t.setEnd(e.container(), e.offset())
                    })), e.selection.setRng(rf(t))
                }(t)
            })
        },
        tx = function (e) {
            var t, n;
            (t = e).on("click", function (e) {
                t.dom.getParent(e.target, "details") && e.preventDefault()
            }), (n = e).parser.addNodeFilter("details", function (e) {
                F(e, function (e) {
                    e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                })
            }), n.serializer.addNodeFilter("details", function (e) {
                F(e, function (e) {
                    var t = e.attr("data-mce-open");
                    e.attr("open", k(t) ? t : null), e.attr("data-mce-open", null)
                })
            })
        },
        nx = pi.DOM,
        rx = function (e) {
            var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({
                initial: !0
            }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && Le.setEditorTimeout(t, function () {
                var e;
                (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus()
            }, 100)
        },
        ox = function (t, e) {
            var n, r, u, o, i, a, s, c, l, f = t.settings,
                d = t.getElement(),
                m = t.getDoc();
            f.inline || (t.getElement().style.visibility = t.orgVisibility), e || f.content_editable || (m.open(), m.write(t.iframeHTML), m.close()), f.content_editable && (t.on("remove", function () {
                var e = this.getBody();
                nx.removeClass(e, "mce-content-body"), nx.removeClass(e, "mce-edit-focus"), nx.setAttrib(e, "contentEditable", null)
            }), nx.addClass(d, "mce-content-body"), t.contentDocument = m = f.content_document || document, t.contentWindow = f.content_window || window, t.bodyElement = d, f.content_document = f.content_window = null, f.root_name = d.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = f.readonly, t.readonly || (t.inline && "static" === nx.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = oh(t), t.schema = ni(f), t.dom = pi(m, {
                keep_values: !0,
                url_converter: t.convertURL,
                url_converter_scope: t,
                hex_colors: f.force_hex_style_colors,
                class_filter: f.class_filter,
                update_styles: !0,
                root_element: t.inline ? t.getBody() : null,
                collect: f.content_editable,
                schema: t.schema,
                onSetAttrib: function (e) {
                    t.fire("SetAttrib", e)
                }
            }), t.parser = ((o = ry((u = t).settings, u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
                for (var n, r, o, i = e.length, a = u.dom; i--;)
                    if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attributes.map[o]) {
                        if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
                        "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name))
                    }
            }), o.addNodeFilter("script", function (e) {
                for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n)
            }), o.addNodeFilter("#cdata", function (e) {
                for (var t, n = e.length; n--;)(t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]"
            }), o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;)(t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new Wb("br", 1)).shortEnded = !0)
            }), o), t.serializer = sy(f, t), t.selection = Hy(t.dom, t.getWin(), t.serializer, t), t.annotator = Fl(t), t.formatter = Pb(t), t.undoManager = xv(t), t._nodeChangeDispatcher = new gh(t), t._selectionOverrides = Yh(t), tx(t), ex(t), JC(t), sh(t), t.fire("PreInit"), f.browser_spellcheck || f.gecko_spellcheck || (m.body.spellcheck = !1, nx.setAttrib(n, "spellcheck", "false")), t.quirks = QC(t), t.fire("PostRender"), f.directionality && (n.dir = f.directionality), f.nowrap && (n.style.whiteSpace = "nowrap"), f.protect && t.on("BeforeSetContent", function (t) {
                Yt.each(f.protect, function (e) {
                    t.content = t.content.replace(e, function (e) {
                        return "\x3c!--mce:protected " + escape(e) + "--\x3e"
                    })
                })
            }), t.on("SetContent", function () {
                t.addVisual(t.getBody())
            }), t.load({
                initial: !0,
                format: "html"
            }), t.startContent = t.getContent({
                format: "raw"
            }), t.on("compositionstart compositionend", function (e) {
                t.composing = "compositionstart" === e.type
            }), 0 < t.contentStyles.length && (r = "", Yt.each(t.contentStyles, function (e) {
                r += e + "\r\n"
            }), t.dom.addStyle(r)), (i = t, i.inline ? nx.styleSheetLoader : i.dom.styleSheetLoader).loadAll(t.contentCSS, function (e) {
                rx(t)
            }, function (e) {
                rx(t)
            }), f.content_style && (a = t, s = f.content_style, c = er.fromDom(a.getDoc().head), l = er.fromTag("style"), hr.set(l, "type", "text/css"), Ti.append(l, er.fromText(s)), Ti.append(c, l))
        },
        ix = pi.DOM,
        ax = function (e, t) {
            var n, r, o, i, a, u, s, c = e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                l = (n = e.id, r = c, o = t.height, i = Ks(e), s = er.fromTag("iframe"), hr.setAll(s, i), hr.setAll(s, {
                    id: n + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: r
                }), Er(s, {
                    width: "100%",
                    height: (a = o, u = "number" == typeof a ? a + "px" : a, u || ""),
                    display: "block"
                }), s).dom();
            l.onload = function () {
                l.onload = null, e.fire("load")
            };
            var f, d, m, g, p = function (e, t) {
                if (document.domain !== window.location.hostname && Re.ie && Re.ie < 12) {
                    var n = rh.uuid("mce");
                    e[n] = function () {
                        ox(e)
                    };
                    var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                    return ix.setAttrib(t, "src", r), !0
                }
                return !1
            }(e, l);
            return e.contentAreaContainer = t.iframeContainer, e.iframeElement = l, e.iframeHTML = (g = Xs(f = e) + "<html><head>", Ys(f) !== f.documentBaseUrl && (g += '<base href="' + f.documentBaseURI.getURI() + '" />'), g += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', d = Gs(f), m = Js(f), Qs(f) && (g += '<meta http-equiv="Content-Security-Policy" content="' + Qs(f) + '" />'), g += '</head><body id="' + d + '" class="mce-content-body ' + m + '" data-id="' + f.id + '"><br></body></html>'), ix.add(t.iframeContainer, l), p
        },
        ux = function (e, t) {
            var n = ax(e, t);
            t.editorContainer && (ix.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = ix.isHidden(t.editorContainer)), e.getElement().style.display = "none", ix.setAttrib(e.id, "aria-hidden", "true"), n || ox(e)
        },
        sx = pi.DOM,
        cx = function (t, n, e) {
            var r, o, i = zp.get(e);
            if (r = zp.urls[e] || t.documentBaseUrl.replace(/\/$/, ""), e = Yt.trim(e), i && -1 === Yt.inArray(n, e)) {
                if (Yt.each(zp.dependencies(e), function (e) {
                        cx(t, n, e)
                    }), t.plugins[e]) return;
                o = new i(t, r, t.$), (t.plugins[e] = o).init && (o.init(t, r), n.push(e))
            }
        },
        lx = function (e) {
            return e.replace(/^\-/, "")
        },
        fx = function (e) {
            return {
                editorContainer: e,
                iframeContainer: e
            }
        },
        dx = function (e) {
            var t, n, r = e.getElement();
            return e.inline ? fx(null) : (t = r, n = sx.create("div"), sx.insertAfter(n, t), fx(n))
        },
        mx = function (e) {
            var t, n, r, o, i, a, u, s, c, l, f, d = e.settings,
                m = e.getElement();
            return e.orgDisplay = m.style.display, k(d.theme) ? (l = (o = e).settings, f = o.getElement(), i = l.width || sx.getStyle(f, "width") || "100%", a = l.height || sx.getStyle(f, "height") || f.offsetHeight, u = l.min_height || 100, (s = /^[0-9\.]+(|px)$/i).test("" + i) && (i = Math.max(parseInt(i, 10), 100)), s.test("" + a) && (a = Math.max(parseInt(a, 10), u)), c = o.theme.renderUI({
                targetNode: f,
                width: i,
                height: a,
                deltaWidth: l.delta_width,
                deltaHeight: l.delta_height
            }), l.content_editable || (a = (c.iframeHeight || a) + ("number" == typeof a ? c.deltaHeight || 0 : "")) < u && (a = u), c.height = a, c) : O(d.theme) ? (r = (t = e).getElement(), (n = t.settings.theme(t, r)).editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || t.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || t.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : r.offsetHeight, n) : dx(e)
        },
        gx = function (t) {
            var e, n, r, o, i, a, u = t.settings,
                s = t.getElement();
            return t.rtl = u.rtl_ui || t.editorManager.i18n.rtl, t.editorManager.i18n.setCode(u.language), u.aria_label = u.aria_label || sx.getAttrib(s, "aria-label", t.getLang("aria.rich_text_area")), t.fire("ScriptsLoaded"), o = (n = t).settings.theme, k(o) ? (n.settings.theme = lx(o), r = Vp.get(o), n.theme = new r(n, Vp.urls[o]), n.theme.init && n.theme.init(n, Vp.urls[o] || n.documentBaseUrl.replace(/\/$/, ""), n.$)) : n.theme = {}, i = t, a = [], Yt.each(i.settings.plugins.split(/[ ,]/), function (e) {
                cx(i, a, lx(e))
            }), e = mx(t), t.editorContainer = e.editorContainer ? e.editorContainer : null, u.content_css && Yt.each(Yt.explode(u.content_css), function (e) {
                t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
            }), u.content_editable ? ox(t) : ux(t, e)
        },
        px = pi.DOM,
        hx = function (e) {
            return "-" === e.charAt(0)
        },
        vx = function (i, a) {
            var u = Ci.ScriptLoader;
            ! function (e, t, n, r) {
                var o = t.settings,
                    i = o.theme;
                if (k(i)) {
                    if (!hx(i) && !Vp.urls.hasOwnProperty(i)) {
                        var a = o.theme_url;
                        a ? Vp.load(i, t.documentBaseURI.toAbsolute(a)) : Vp.load(i, "themes/" + i + "/theme" + n + ".js")
                    }
                    e.loadQueue(function () {
                        Vp.waitFor(i, r)
                    })
                } else r()
            }(u, i, a, function () {
                var e, t, n, r, o;
                e = u, (n = (t = i).settings).language && "en" !== n.language && !n.language_url && (n.language_url = t.editorManager.baseURL + "/langs/" + n.language + ".js"), n.language_url && !t.editorManager.i18n.data[n.language] && e.add(n.language_url), r = i.settings, o = a, Yt.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), Yt.each(r.external_plugins, function (e, t) {
                    zp.load(t, e), r.plugins += " " + t
                }), Yt.each(r.plugins.split(/[ ,]/), function (e) {
                    if ((e = Yt.trim(e)) && !zp.urls[e])
                        if (hx(e)) {
                            e = e.substr(1, e.length);
                            var t = zp.dependencies(e);
                            Yt.each(t, function (e) {
                                var t = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + o + ".js"
                                };
                                e = zp.createUrl(t, e), zp.load(e.resource, e)
                            })
                        } else zp.load(e, {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + o + ".js"
                        })
                }), u.loadQueue(function () {
                    i.removed || gx(i)
                }, i, function (e) {
                    Ip(i, e[0]), i.removed || gx(i)
                })
            })
        },
        bx = function (t) {
            var e = t.settings,
                n = t.id,
                r = function () {
                    px.unbind(window, "ready", r), t.render()
                };
            if (je.Event.domLoaded) {
                if (t.getElement() && Re.contentEditable) {
                    e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || px.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && (px.insertAfter(px.create("input", {
                        type: "hidden",
                        name: n
                    }), n), t.hasHiddenInput = !0), t.formEventDelegate = function (e) {
                        t.fire(e.type, e)
                    }, px.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function () {
                        t.setContent(t.startContent, {
                            format: "raw"
                        })
                    }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function () {
                        return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o)
                    })), t.windowManager = Dp(t), t.notificationManager = Rp(t), "xml" === e.encoding && t.on("GetContent", function (e) {
                        e.save && (e.content = px.encode(e.content))
                    }), e.add_form_submit_trigger && t.on("submit", function () {
                        t.initialized && t.save()
                    }), e.add_unload_trigger && (t._beforeUnload = function () {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), vx(t, t.suffix)
                }
            } else px.bind(window, "ready", r)
        },
        yx = function (e, t, n) {
            var r = e.sidebars ? e.sidebars : [];
            r.push({
                name: t,
                settings: n
            }), e.sidebars = r
        },
        Cx = Yt.each,
        xx = Yt.trim,
        wx = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        Nx = {
            ftp: 21,
            http: 80,
            https: 443,
            mailto: 25
        },
        Ex = function (r, e) {
            var t, n, o = this;
            if (r = xx(r), t = (e = o.settings = e || {}).base_uri, /^([\w\-]+):([^\/]{2})/i.test(r) || /^\s*#/.test(r)) o.source = r;
            else {
                var i = 0 === r.indexOf("//");
                0 !== r.indexOf("/") || i || (r = (t && t.protocol || "http") + "://mce_host" + r), /^[\w\-]*:?\/\//.test(r) || (n = e.base_uri ? e.base_uri.path : new Ex(document.location.href).directory, "" == e.base_uri.protocol ? r = "//mce_host" + o.toAbsPath(n, r) : (r = /([^#?]*)([#?]?.*)/.exec(r), r = (t && t.protocol || "http") + "://mce_host" + o.toAbsPath(n, r[1]) + r[2])), r = r.replace(/@@/g, "(mce_at)"), r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r), Cx(wx, function (e, t) {
                    var n = r[t];
                    n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
                }), t && (o.protocol || (o.protocol = t.protocol), o.userInfo || (o.userInfo = t.userInfo), o.port || "mce_host" !== o.host || (o.port = t.port), o.host && "mce_host" !== o.host || (o.host = t.host), o.source = ""), i && (o.protocol = "")
            }
        };
    Ex.prototype = {
        setPath: function (e) {
            e = /^(.*?)\/?(\w+)?$/.exec(e), this.path = e[0], this.directory = e[1], this.file = e[2], this.source = "", this.getURI()
        },
        toRelative: function (e) {
            var t;
            if ("./" === e) return e;
            if ("mce_host" !== (e = new Ex(e, {
                    base_uri: this
                })).host && this.host !== e.host && e.host || this.port !== e.port || this.protocol !== e.protocol && "" !== e.protocol) return e.getURI();
            var n = this.getURI(),
                r = e.getURI();
            return n === r || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === r ? n : (t = this.toRelPath(this.path, e.path), e.query && (t += "?" + e.query), e.anchor && (t += "#" + e.anchor), t)
        },
        toAbsolute: function (e, t) {
            return (e = new Ex(e, {
                base_uri: this
            })).getURI(t && this.isSameOrigin(e))
        },
        isSameOrigin: function (e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                var t = Nx[this.protocol];
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        },
        toRelPath: function (e, t) {
            var n, r, o, i = 0,
                a = "";
            if (e = (e = e.substring(0, e.lastIndexOf("/"))).split("/"), n = t.split("/"), e.length >= n.length)
                for (r = 0, o = e.length; r < o; r++)
                    if (r >= n.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (e.length < n.length)
                for (r = 0, o = n.length; r < o; r++)
                    if (r >= e.length || e[r] !== n[r]) {
                        i = r + 1;
                        break
                    }
            if (1 === i) return t;
            for (r = 0, o = e.length - (i - 1); r < o; r++) a += "../";
            for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r];
            return a
        },
        toAbsPath: function (e, t) {
            var n, r, o, i = 0,
                a = [];
            for (r = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), Cx(e, function (e) {
                    e && a.push(e)
                }), e = a, n = t.length - 1, a = []; 0 <= n; n--) 0 !== t[n].length && "." !== t[n] && (".." !== t[n] ? 0 < i ? i-- : a.push(t[n]) : i++);
            return 0 !== (o = (n = e.length - i) <= 0 ? a.reverse().join("/") : e.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o
        },
        getURI: function (e) {
            var t, n = this;
            return n.source && !e || (t = "", e || (n.protocol ? t += n.protocol + "://" : t += "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
        }
    }, Ex.parseDataUri = function (e) {
        var t, n;
        return e = decodeURIComponent(e).split(","), (n = /data:([^;]+)/.exec(e[0])) && (t = n[1]), {
            type: t,
            data: e[1]
        }
    }, Ex.getDocumentBaseUrl = function (e) {
        var t;
        return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
    };
    var Sx = function (e, t, n) {
            var r, o, i, a, u;
            if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = Yt.trim(ev.trimExternal(e.serializer, n.innerHTML));
            else if ("text" === t.format) r = Na(n.innerText || n.textContent);
            else {
                if ("tree" === t.format) return e.serializer.serialize(n, t);
                i = (o = e).serializer.serialize(n, t), a = ec(o), u = new RegExp("^(<" + a + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + a + ">[\r\n]*|<br \\/>[\r\n]*)$"), r = i.replace(u, "")
            }
            return "text" === t.format || Co(er.fromDom(n)) ? t.content = r : t.content = Yt.trim(r), t.no_events || e.fire("GetContent", t), t.content
        },
        Tx = function (e, t) {
            t(e), e.firstChild && Tx(e.firstChild, t), e.next && Tx(e.next, t)
        },
        kx = function (e, t, n) {
            var r = function (e, n, t) {
                var r = {},
                    o = {},
                    i = [];
                for (var a in t.firstChild && Tx(t.firstChild, function (t) {
                        F(e, function (e) {
                            e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        }), F(n, function (e) {
                            "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
                                filter: e,
                                nodes: [t]
                            })
                        })
                    }), r) r.hasOwnProperty(a) && i.push(r[a]);
                for (var a in o) o.hasOwnProperty(a) && i.push(o[a]);
                return i
            }(e, t, n);
            F(r, function (t) {
                F(t.filter.callbacks, function (e) {
                    e(t.nodes, t.filter.name, {})
                })
            })
        },
        Ax = function (e) {
            return e instanceof Wb
        },
        _x = function (e, t) {
            var r;
            e.dom.setHTML(e.getBody(), t), xp(r = e) && rl.firstPositionIn(r.getBody()).each(function (e) {
                var t = e.getNode(),
                    n = Do.isTable(t) ? rl.firstPositionIn(t).getOr(e) : e;
                r.selection.setRng(n.toRange())
            })
        },
        Rx = function (u, s, c) {
            return void 0 === c && (c = {}), c.format = c.format ? c.format : "html", c.set = !0, c.content = Ax(s) ? "" : s, Ax(s) || c.no_events || (u.fire("BeforeSetContent", c), s = c.content), A.from(u.getBody()).fold(H(s), function (e) {
                return Ax(s) ? function (e, t, n, r) {
                    kx(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    var o = tf({
                        validate: e.validate
                    }, e.schema).serialize(n);
                    return r.content = Co(er.fromDom(t)) ? o : Yt.trim(o), _x(e, r.content), r.no_events || e.fire("SetContent", r), n
                }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), (i = ec(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, r = t.dom.createHTML(i, t.settings.forced_root_block_attrs, r)) : r || (r = '<br data-mce-bogus="1">'), _x(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = tf({
                    validate: t.validate
                }, t.schema).serialize(t.parser.parse(r, {
                    isRootContent: !0,
                    insert: !0
                }))), o.content = Co(er.fromDom(n)) ? r : Yt.trim(r), _x(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
                var t, n, r, o, i, a
            })
        },
        Dx = pi.DOM,
        Bx = function (e) {
            return A.from(e).each(function (e) {
                return e.destroy()
            })
        },
        Ox = function (e) {
            if (!e.removed) {
                var t = e._selectionOverrides,
                    n = e.editorUpload,
                    r = e.getBody(),
                    o = e.getElement();
                r && e.save({
                    is_removing: !0
                }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && Dx.remove(o.nextSibling), !e.inline && r && (i = e, Dx.setStyle(i.id, "display", i.orgDisplay)), Kg(e), e.editorManager.remove(e), Dx.remove(e.getContainer()), Bx(t), Bx(n), e.destroy()
            }
            var i
        },
        Px = function (e, t) {
            var n, r, o, i = e.selection,
                a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Bx(i), Bx(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), Dx.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove())
        },
        Lx = pi.DOM,
        Ix = Yt.extend,
        Mx = Yt.each,
        Fx = Yt.resolve,
        Ux = Re.ie,
        zx = function (e, t, n) {
            var r, o, i, a, u, s, c, l = this,
                f = l.documentBaseUrl = n.documentBaseURL,
                d = n.baseURI;
            r = l, o = e, i = f, a = n.defaultSettings, u = t, c = {
                id: o,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: i,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                entity_encoding: "named",
                url_converter: (s = r).convertURL,
                url_converter_scope: s,
                ie7_compat: !0
            }, t = hf(cf, c, a, u), l.settings = t, Ni.language = t.language || "en", Ni.languageLoad = t.language_load, Ni.baseURL = n.baseURL, l.id = e, l.setDirty(!1), l.plugins = {}, l.documentBaseURI = new Ex(t.document_base_url, {
                base_uri: d
            }), l.baseURI = d, l.contentCSS = [], l.contentStyles = [], l.shortcuts = new lp(l), l.loadedCSS = {}, l.editorCommands = new Ug(l), l.suffix = n.suffix, l.editorManager = n, l.inline = t.inline, l.buttons = {}, l.menuItems = {}, t.cache_suffix && (Re.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")), !1 === t.override_viewport && (Re.overrideViewPort = !1), n.fire("SetupEditor", {
                editor: l
            }), l.execCallback("setup", l), l.$ = pn.overrideDefaults(function () {
                return {
                    context: l.inline ? l.getBody() : l.getDoc(),
                    element: l.getBody()
                }
            })
        };
    Ix(zx.prototype = {
        render: function () {
            bx(this)
        },
        focus: function (e) {
            Cp(this, e)
        },
        hasFocus: function () {
            return xp(this)
        },
        execCallback: function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r, o = this.settings[e];
            if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? Fx(r) : 0, o = Fx(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
                func: o,
                scope: r
            }), o.apply(r || this, Array.prototype.slice.call(arguments, 1))
        },
        translate: function (e) {
            if (e && Yt.is(e, "string")) {
                var n = this.settings.language || "en",
                    r = this.editorManager.i18n;
                e = r.data[n + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function (e, t) {
                    return r.data[n + "." + t] || "{#" + t + "}"
                })
            }
            return this.editorManager.translate(e)
        },
        getLang: function (e, t) {
            return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (t !== undefined ? t : "{#" + e + "}")
        },
        getParam: function (e, t, n) {
            return yf(this, e, t, n)
        },
        nodeChanged: function (e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        },
        addButton: function (e, t) {
            var n = this;
            t.cmd && (t.onclick = function () {
                n.execCommand(t.cmd)
            }), t.stateSelector && "undefined" == typeof t.active && (t.active = !1), t.text || t.icon || (t.icon = e), n.buttons = n.buttons, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
        },
        addSidebar: function (e, t) {
            return yx(this, e, t)
        },
        addMenuItem: function (e, t) {
            var n = this;
            t.cmd && (t.onclick = function () {
                n.execCommand(t.cmd)
            }), n.menuItems = n.menuItems, n.menuItems[e] = t
        },
        addContextToolbar: function (e, t) {
            var n, r = this;
            r.contextToolbars = r.contextToolbars || [], "string" == typeof e && (n = e, e = function (e) {
                return r.dom.is(e, n)
            }), r.contextToolbars.push({
                id: rh.uuid("mcet"),
                predicate: e,
                items: t
            })
        },
        addCommand: function (e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        },
        addQueryStateHandler: function (e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        },
        addQueryValueHandler: function (e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        },
        addShortcut: function (e, t, n, r) {
            this.shortcuts.add(e, t, n, r)
        },
        execCommand: function (e, t, n, r) {
            return this.editorCommands.execCommand(e, t, n, r)
        },
        queryCommandState: function (e) {
            return this.editorCommands.queryCommandState(e)
        },
        queryCommandValue: function (e) {
            return this.editorCommands.queryCommandValue(e)
        },
        queryCommandSupported: function (e) {
            return this.editorCommands.queryCommandSupported(e)
        },
        show: function () {
            this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = !0 : (Lx.show(this.getContainer()), Lx.hide(this.id)), this.load(), this.fire("show"))
        },
        hide: function () {
            var e = this,
                t = e.getDoc();
            e.hidden || (Ux && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Lx.hide(e.getContainer()), Lx.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        },
        isHidden: function () {
            return !!this.hidden
        },
        setProgressState: function (e, t) {
            this.fire("ProgressState", {
                state: e,
                time: t
            })
        },
        load: function (e) {
            var t, n = this.getElement();
            return this.removed ? "" : n ? ((e = e || {}).load = !0, t = this.setContent(n.value !== undefined ? n.value : n.innerHTML, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t) : void 0
        },
        save: function (e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, /TEXTAREA|INPUT/i.test(o.nodeName) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = Lx.getParent(r.id, "form")) && Mx(n.elements, function (e) {
                if (e.name === r.id) return e.value = t, !1
            })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        },
        setContent: function (e, t) {
            return Rx(this, e, t)
        },
        getContent: function (e) {
            return t = this, void 0 === (n = e) && (n = {}), A.from(t.getBody()).fold(H("tree" === n.format ? new Wb("body", 11) : ""), function (e) {
                return Sx(t, n, e)
            });
            var t, n
        },
        insertContent: function (e, t) {
            t && (e = Ix({
                content: e
            }, t)), this.execCommand("mceInsertContent", !1, e)
        },
        isDirty: function () {
            return !this.isNotDirty
        },
        setDirty: function (e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        },
        setMode: function (e) {
            var t, n;
            (n = e) !== Zg(t = this) && (t.initialized ? Qg(t, "readonly" === n) : t.on("init", function () {
                Qg(t, "readonly" === n)
            }), Xg(t, n))
        },
        getContainer: function () {
            return this.container || (this.container = Lx.get(this.editorContainer || this.id + "_parent")), this.container
        },
        getContentAreaContainer: function () {
            return this.contentAreaContainer
        },
        getElement: function () {
            return this.targetElm || (this.targetElm = Lx.get(this.id)), this.targetElm
        },
        getWin: function () {
            var e;
            return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow
        },
        getDoc: function () {
            var e;
            return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument
        },
        getBody: function () {
            var e = this.getDoc();
            return this.bodyElement || (e ? e.body : null)
        },
        convertURL: function (e, t, n) {
            var r = this.settings;
            return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host)
        },
        addVisual: function (e) {
            var n, r = this,
                o = r.settings,
                i = r.dom;
            e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), Mx(i.select("table,a", e), function (e) {
                var t;
                switch (e.nodeName) {
                    case "TABLE":
                        return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                    case "A":
                        return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n)))
                }
            }), r.fire("VisualAid", {
                element: e,
                hasVisual: r.hasVisual
            })
        },
        remove: function () {
            Ox(this)
        },
        destroy: function (e) {
            Px(this, e)
        },
        uploadImages: function (e) {
            return this.editorUpload.uploadImages(e)
        },
        _scanForImages: function () {
            return this.editorUpload.scanForImages()
        }
    }, ip);
    var Vx, qx, Hx, jx = {
            isEditorUIElement: function (e) {
                return -1 !== e.className.toString().indexOf("mce-")
            }
        },
        $x = function (n, e) {
            var t, r;
            Qn.detect().browser.isIE() ? (r = n).on("focusout", function () {
                Dg(r)
            }) : (t = e, n.on("mouseup touchend", function (e) {
                t.throttle()
            })), n.on("keyup nodechange", function (e) {
                var t;
                "nodechange" === (t = e).type && t.selectionChange || Dg(n)
            })
        },
        Wx = function (e) {
            var t, n, r, o = Di(function () {
                Dg(e)
            }, 0);
            e.inline && (t = e, n = o, r = function () {
                n.throttle()
            }, pi.DOM.bind(document, "mouseup", r), t.on("remove", function () {
                pi.DOM.unbind(document, "mouseup", r)
            })), e.on("init", function () {
                $x(e, o)
            }), e.on("remove", function () {
                o.cancel()
            })
        },
        Kx = pi.DOM,
        Xx = function (e) {
            return jx.isEditorUIElement(e)
        },
        Yx = function (t, e) {
            var n = t ? t.settings.custom_ui_selector : "";
            return null !== Kx.getParent(e, function (e) {
                return Xx(e) || !!n && t.dom.is(e, n)
            })
        },
        Gx = function (r, e) {
            var t = e.editor;
            Wx(t), t.on("focusin", function () {
                var e = r.focusedEditor;
                e !== this && (e && e.fire("blur", {
                    focusedEditor: this
                }), r.setActive(this), (r.focusedEditor = this).fire("focus", {
                    blurredEditor: e
                }), this.focus(!0))
            }), t.on("focusout", function () {
                var t = this;
                Le.setEditorTimeout(t, function () {
                    var e = r.focusedEditor;
                    Yx(t, function () {
                        try {
                            return document.activeElement
                        } catch (e) {
                            return document.body
                        }
                    }()) || e !== t || (t.fire("blur", {
                        focusedEditor: null
                    }), r.focusedEditor = null)
                })
            }), Vx || (Vx = function (e) {
                var t, n = r.activeEditor;
                t = e.target, n && t.ownerDocument === document && (t === document.body || Yx(n, t) || r.focusedEditor !== n || (n.fire("blur", {
                    focusedEditor: null
                }), r.focusedEditor = null))
            }, Kx.bind(document, "focusin", Vx))
        },
        Jx = function (e, t) {
            e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Kx.unbind(document, "focusin", Vx), Vx = null)
        },
        Qx = function (e) {
            e.on("AddEditor", b(Gx, e)), e.on("RemoveEditor", b(Jx, e))
        },
        Zx = {},
        ew = "en",
        tw = {
            setCode: function (e) {
                e && (ew = e, this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            },
            getCode: function () {
                return ew
            },
            rtl: !1,
            add: function (e, t) {
                var n = Zx[e];
                for (var r in n || (Zx[e] = n = {}), t) n[r] = t[r];
                this.setCode(e)
            },
            translate: function (e) {
                var t = Zx[ew] || {},
                    n = function (e) {
                        return Yt.is(e, "function") ? Object.prototype.toString.call(e) : r(e) ? "" : "" + e
                    },
                    r = function (e) {
                        return "" === e || null === e || Yt.is(e, "undefined")
                    },
                    o = function (e) {
                        return e = n(e), Yt.hasOwn(t, e) ? n(t[e]) : e
                    };
                if (r(e)) return "";
                if (Yt.is(e, "object") && Yt.hasOwn(e, "raw")) return n(e.raw);
                if (Yt.is(e, "array")) {
                    var i = e.slice(1);
                    e = o(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
                        return Yt.hasOwn(i, t) ? n(i[t]) : e
                    })
                }
                return o(e).replace(/{context:\w+}$/, "")
            },
            data: Zx
        },
        nw = pi.DOM,
        rw = Yt.explode,
        ow = Yt.each,
        iw = Yt.extend,
        aw = 0,
        uw = !1,
        sw = [],
        cw = [],
        lw = function (t) {
            ow(Hx.get(), function (e) {
                "scroll" === t.type ? e.fire("ScrollWindow", t) : e.fire("ResizeWindow", t)
            })
        },
        fw = function (e) {
            e !== uw && (e ? pn(window).on("resize scroll", lw) : pn(window).off("resize scroll", lw), uw = e)
        },
        dw = function (t) {
            var e = cw;
            delete sw[t.id];
            for (var n = 0; n < sw.length; n++)
                if (sw[n] === t) {
                    sw.splice(n, 1);
                    break
                }
            return cw = U(cw, function (e) {
                return t !== e
            }), Hx.activeEditor === t && (Hx.activeEditor = 0 < cw.length ? cw[0] : null), Hx.focusedEditor === t && (Hx.focusedEditor = null), e.length !== cw.length
        };
    iw(Hx = {
        defaultSettings: {},
        $: pn,
        majorVersion: "4",
        minorVersion: "8.2",
        releaseDate: "2018-08-09",
        editors: sw,
        i18n: tw,
        activeEditor: null,
        settings: {},
        setup: function () {
            var e, t, n, r, o = "";
            if (t = Ex.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), n = window.tinymce || window.tinyMCEPreInit) e = n.base || n.baseURL, o = n.suffix;
            else {
                for (var i = document.getElementsByTagName("script"), a = 0; a < i.length; a++) {
                    var u = (r = i[a].src).substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== u.indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }!e && document.currentScript && (-1 !== (r = document.currentScript.src).indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/")))
            }
            this.baseURL = new Ex(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new Ex(this.baseURL), this.suffix = o, Qx(this)
        },
        overrideDefaults: function (e) {
            var t, n;
            (t = e.base_url) && (this.baseURL = new Ex(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new Ex(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n);
            var r = (this.defaultSettings = e).plugin_base_urls;
            for (var o in r) Ni.PluginManager.urls[o] = r[o]
        },
        init: function (r) {
            var n, u, s = this;
            u = Yt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
            var c = function (e) {
                    var t = e.id;
                    return t || (t = (t = e.name) && !nw.get(t) ? e.name : nw.uniqueId(), e.setAttribute("id", t)), t
                },
                l = function (e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : nw.hasClass(e, t)
                },
                f = function (e) {
                    n = e
                },
                e = function () {
                    var o, i = 0,
                        a = [],
                        n = function (e, t, n) {
                            var r = new zx(e, t, s);
                            a.push(r), r.on("init", function () {
                                ++i === o.length && f(a)
                            }), r.targetElm = r.targetElm || n, r.render()
                        };
                    nw.unbind(window, "ready", e),
                        function (e) {
                            var t = r[e];
                            t && t.apply(s, Array.prototype.slice.call(arguments, 2))
                        }("onpageload"), o = pn.unique(function (t) {
                            var e, n = [];
                            if (Re.ie && Re.ie < 11) return Up("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                            if (t.types) return ow(t.types, function (e) {
                                n = n.concat(nw.select(e.selector))
                            }), n;
                            if (t.selector) return nw.select(t.selector);
                            if (t.target) return [t.target];
                            switch (t.mode) {
                                case "exact":
                                    0 < (e = t.elements || "").length && ow(rw(e), function (t) {
                                        var e;
                                        (e = nw.get(t)) ? n.push(e): ow(document.forms, function (e) {
                                            ow(e.elements, function (e) {
                                                e.name === t && (t = "mce_editor_" + aw++, nw.setAttrib(e, "id", t), n.push(e))
                                            })
                                        })
                                    });
                                    break;
                                case "textareas":
                                case "specific_textareas":
                                    ow(nw.select("textarea"), function (e) {
                                        t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e)
                                    })
                            }
                            return n
                        }(r)), r.types ? ow(r.types, function (t) {
                            Yt.each(o, function (e) {
                                return !nw.is(e, t.selector) || (n(c(e), iw({}, r, t), e), !1)
                            })
                        }) : (Yt.each(o, function (e) {
                            var t;
                            (t = s.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (dw(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null)
                        }), 0 === (o = Yt.grep(o, function (e) {
                            return !s.get(e.id)
                        })).length ? f([]) : ow(o, function (e) {
                            var t;
                            t = e, r.inline && t.tagName.toLowerCase() in u ? Up("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e)
                        }))
                };
            return s.settings = r, nw.bind(window, "ready", e), new De(function (t) {
                n ? t(n) : f = function (e) {
                    t(e)
                }
            })
        },
        get: function (t) {
            return 0 === arguments.length ? cw.slice(0) : k(t) ? V(cw, function (e) {
                return e.id === t
            }).getOr(null) : P(t) && cw[t] ? cw[t] : null
        },
        add: function (e) {
            var t = this;
            return sw[e.id] === e || (null === t.get(e.id) && ("length" !== e.id && (sw[e.id] = e), sw.push(e), cw.push(e)), fw(!0), t.activeEditor = e, t.fire("AddEditor", {
                editor: e
            }), qx || (qx = function () {
                t.fire("BeforeUnload")
            }, nw.bind(window, "beforeunload", qx))), e
        },
        createEditor: function (e, t) {
            return this.add(new zx(e, t, this))
        },
        remove: function (e) {
            var t, n, r = this;
            if (e) {
                if (!k(e)) return n = e, D(r.get(n.id)) ? null : (dw(n) && r.fire("RemoveEditor", {
                    editor: n
                }), 0 === cw.length && nw.unbind(window, "beforeunload", qx), n.remove(), fw(0 < cw.length), n);
                ow(nw.select(e), function (e) {
                    (n = r.get(e.id)) && r.remove(n)
                })
            } else
                for (t = cw.length - 1; 0 <= t; t--) r.remove(cw[t])
        },
        execCommand: function (e, t, n) {
            var r = this.get(n);
            switch (e) {
                case "mceAddEditor":
                    return this.get(n) || new zx(n, this.settings, this).render(), !0;
                case "mceRemoveEditor":
                    return r && r.remove(), !0;
                case "mceToggleEditor":
                    return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0
            }
            return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
        },
        triggerSave: function () {
            ow(cw, function (e) {
                e.save()
            })
        },
        addI18n: function (e, t) {
            tw.add(e, t)
        },
        translate: function (e) {
            return tw.translate(e)
        },
        setActive: function (e) {
            var t = this.activeEditor;
            this.activeEditor !== e && (t && t.fire("deactivate", {
                relatedTarget: e
            }), e.fire("activate", {
                relatedTarget: t
            })), this.activeEditor = e
        }
    }, jg), Hx.setup();
    var mw, gw = Hx;

    function pw(n) {
        return {
            walk: function (e, t) {
                return Dl(n, e, t)
            },
            split: Bv,
            normalize: function (t) {
                return rg(n, t).fold(H(!1), function (e) {
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0
                })
            }
        }
    }(mw = pw || (pw = {})).compareRanges = Gm, mw.getCaretRangeFromPoint = py, mw.getSelectedNode = Za, mw.getNode = eu;
    var hw, vw, bw = pw,
        yw = Math.min,
        Cw = Math.max,
        xw = Math.round,
        ww = function (e, t, n) {
            var r, o, i, a, u, s;
            return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += xw(s / 2)), "c" === n[1] && (r += xw(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= xw(a / 2)), "c" === n[4] && (r -= xw(i / 2)), Nw(r, o, i, a)
        },
        Nw = function (e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        },
        Ew = {
            inflate: function (e, t, n) {
                return Nw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
            },
            relativePosition: ww,
            findBestRelativePosition: function (e, t, n, r) {
                var o, i;
                for (i = 0; i < r.length; i++)
                    if ((o = ww(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function (e, t) {
                var n, r, o, i;
                return n = Cw(e.x, t.x), r = Cw(e.y, t.y), o = yw(e.x + e.w, t.x + t.w), i = yw(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : Nw(n, r, o - n, i - r)
            },
            clamp: function (e, t, n) {
                var r, o, i, a, u, s, c, l, f, d;
                return u = e.x, s = e.y, c = e.x + e.w, l = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = Cw(0, t.x - u), o = Cw(0, t.y - s), i = Cw(0, c - f), a = Cw(0, l - d), u += r, s += o, n && (c += r, l += o, u -= i, s -= a), Nw(u, s, (c -= i) - u, (l -= a) - s)
            },
            create: Nw,
            fromClientRect: function (e) {
                return Nw(e.left, e.top, e.width, e.height)
            }
        },
        Sw = {},
        Tw = {
            add: function (e, t) {
                Sw[e.toLowerCase()] = t
            },
            has: function (e) {
                return !!Sw[e.toLowerCase()]
            },
            get: function (e) {
                var t = e.toLowerCase(),
                    n = Sw.hasOwnProperty(t) ? Sw[t] : null;
                if (null === n) throw new Error("Could not find module for type: " + e);
                return n
            },
            create: function (e, t) {
                var n;
                if ("string" == typeof e ? (t = t || {}).type = e : e = (t = e).type, e = e.toLowerCase(), !(n = Sw[e])) throw new Error("Could not find control by type: " + e);
                return (n = new n(t)).type = e, n
            }
        },
        kw = Yt.each,
        Aw = Yt.extend,
        _w = function () {};
    _w.extend = hw = function (n) {
        var e, t, r, o = this.prototype,
            i = function () {
                var e, t, n;
                if (!vw && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                    for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
            },
            a = function () {
                return this
            },
            u = function (n, r) {
                return function () {
                    var e, t = this._super;
                    return this._super = o[n], e = r.apply(this, arguments), this._super = t, e
                }
            };
        for (t in vw = !0, e = new this, vw = !1, n.Mixins && (kw(n.Mixins, function (e) {
                for (var t in e) "init" !== t && (n[t] = e[t])
            }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && kw(n.Methods.split(","), function (e) {
                n[e] = a
            }), n.Properties && kw(n.Properties.split(","), function (e) {
                var t = "_" + e;
                n[e] = function (e) {
                    return e !== undefined ? (this[t] = e, this) : this[t]
                }
            }), n.Statics && kw(n.Statics, function (e, t) {
                i[t] = e
            }), n.Defaults && o.Defaults && (n.Defaults = Aw({}, o.Defaults, n.Defaults)), n) "function" == typeof (r = n[t]) && o[t] ? e[t] = u(t, r) : e[t] = r;
        return i.prototype = e, (i.constructor = i).extend = hw, i
    };
    var Rw = Math.min,
        Dw = Math.max,
        Bw = Math.round,
        Ow = function (e, n) {
            var r, o, t, i;
            if (n = n || '"', null === e) return "null";
            if ("string" == (t = typeof e)) return o = "\bb\tt\nn\ff\rr\"\"''\\\\", n + e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function (e, t) {
                return '"' === n && "'" === e ? e : (r = o.indexOf(t)) + 1 ? "\\" + o.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e)
            }) + n;
            if ("object" === t) {
                if (e.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(e)) {
                    for (r = 0, o = "["; r < e.length; r++) o += (0 < r ? "," : "") + Ow(e[r], n);
                    return o + "]"
                }
                for (i in o = "{", e) e.hasOwnProperty(i) && (o += "function" != typeof e[i] ? (1 < o.length ? "," + n : n) + i + n + ":" + Ow(e[i], n) : "");
                return o + "}"
            }
            return "" + e
        },
        Pw = {
            serialize: Ow,
            parse: function (e) {
                try {
                    return JSON.parse(e)
                } catch (t) {}
            }
        },
        Lw = {
            callbacks: {},
            count: 0,
            send: function (t) {
                var n = this,
                    r = pi.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function (e) {
                    r.remove(i), delete n.callbacks[o], t.callback(e)
                }, r.add(r.doc.body, "script", {
                    id: i,
                    src: t.url,
                    type: "text/javascript"
                }), n.count++
            }
        },
        Iw = {
            send: function (e) {
                var t, n = 0,
                    r = function () {
                        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : setTimeout(r, 10)
                    };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", Iw.fire("beforeInitialize", {
                        settings: e
                    }), t = new qp) {
                    if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && Yt.each(e.requestheaders, function (e) {
                            t.setRequestHeader(e.key, e.value)
                        }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = Iw.fire("beforeSend", {
                            xhr: t,
                            settings: e
                        }).xhr).send(e.data), !e.async) return r();
                    setTimeout(r, 10)
                }
            }
        };
    Yt.extend(Iw, jg);
    var Mw, Fw, Uw, zw, Vw = Yt.extend,
        qw = function (e) {
            this.settings = Vw({}, e), this.count = 0
        };
    qw.sendRPC = function (e) {
        return (new qw).send(e)
    }, qw.prototype = {
        send: function (n) {
            var r = n.error,
                o = n.success;
            (n = Vw(this.settings, n)).success = function (e, t) {
                void 0 === (e = Pw.parse(e)) && (e = {
                    error: "JSON Parse error."
                }), e.error ? r.call(n.error_scope || n.scope, e.error, t) : o.call(n.success_scope || n.scope, e.result)
            }, n.error = function (e, t) {
                r && r.call(n.error_scope || n.scope, e, t)
            }, n.data = Pw.serialize({
                id: n.id || "c" + this.count++,
                method: n.method,
                params: n.params
            }), n.content_type = "application/json", Iw.send(n)
        }
    };
    try {
        Mw = window.localStorage
    } catch (Kw) {
        Fw = {}, Uw = [], zw = {
            getItem: function (e) {
                var t = Fw[e];
                return t || null
            },
            setItem: function (e, t) {
                Uw.push(e), Fw[e] = String(t)
            },
            key: function (e) {
                return Uw[e]
            },
            removeItem: function (t) {
                Uw = Uw.filter(function (e) {
                    return e === t
                }), delete Fw[t]
            },
            clear: function () {
                Uw = [], Fw = {}
            },
            length: 0
        }, Object.defineProperty(zw, "length", {
            get: function () {
                return Uw.length
            },
            configurable: !1,
            enumerable: !1
        }), Mw = zw
    }
    var Hw, jw = gw,
        $w = {
            geom: {
                Rect: Ew
            },
            util: {
                Promise: De,
                Delay: Le,
                Tools: Yt,
                VK: Hh,
                URI: Ex,
                Class: _w,
                EventDispatcher: Vg,
                Observable: jg,
                I18n: tw,
                XHR: Iw,
                JSON: Pw,
                JSONRequest: qw,
                JSONP: Lw,
                LocalStorage: Mw,
                Color: function (e) {
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0,
                        t = function (e) {
                            var t;
                            return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function (e, t, n) {
                                var r, o, i, a;
                                if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = Dw(0, Rw(t, 1)), n = Dw(0, Rw(n, 1)), 0 !== t) {
                                    switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                        case 0:
                                            u = o, s = i, c = 0;
                                            break;
                                        case 1:
                                            u = i, s = o, c = 0;
                                            break;
                                        case 2:
                                            u = 0, s = o, c = i;
                                            break;
                                        case 3:
                                            u = 0, s = i, c = o;
                                            break;
                                        case 4:
                                            u = i, s = 0, c = o;
                                            break;
                                        case 5:
                                            u = o, s = 0, c = i;
                                            break;
                                        default:
                                            u = s = c = 0
                                    }
                                    u = Bw(255 * (u + a)), s = Bw(255 * (s + a)), c = Bw(255 * (c + a))
                                } else u = s = c = Bw(255 * n)
                            }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                        };
                    return e && t(e), n.toRgb = function () {
                        return {
                            r: u,
                            g: s,
                            b: c
                        }
                    }, n.toHsv = function () {
                        return e = u, t = s, n = c, o = 0, (i = Rw(e /= 255, Rw(t /= 255, n /= 255))) === (a = Dw(e, Dw(t, n))) ? {
                            h: 0,
                            s: 0,
                            v: 100 * (o = i)
                        } : (r = (a - i) / a, {
                            h: Bw(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
                            s: Bw(100 * r),
                            v: Bw(100 * o)
                        });
                        var e, t, n, r, o, i, a
                    }, n.toHex = function () {
                        var e = function (e) {
                            return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e
                        };
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                }
            },
            dom: {
                EventUtils: je,
                Sizzle: Tt,
                DomQuery: pn,
                TreeWalker: oo,
                DOMUtils: pi,
                ScriptLoader: Ci,
                RangeUtils: bw,
                Serializer: sy,
                ControlSelection: my,
                BookmarkManager: ly,
                Selection: Hy,
                Event: je.Event
            },
            html: {
                Styles: oi,
                Entities: $o,
                Node: Wb,
                Schema: ni,
                SaxParser: Qh,
                DomParser: ry,
                Writer: ef,
                Serializer: tf
            },
            ui: {
                Factory: Tw
            },
            Env: Re,
            AddOnManager: Ni,
            Annotator: Fl,
            Formatter: Pb,
            UndoManager: xv,
            EditorCommands: Ug,
            WindowManager: Dp,
            NotificationManager: Rp,
            EditorObservable: ip,
            Shortcuts: lp,
            Editor: zx,
            FocusManager: jx,
            EditorManager: gw,
            DOM: pi.DOM,
            ScriptLoader: Ci.ScriptLoader,
            PluginManager: Ni.PluginManager,
            ThemeManager: Ni.ThemeManager,
            trim: Yt.trim,
            isArray: Yt.isArray,
            is: Yt.is,
            toArray: Yt.toArray,
            makeMap: Yt.makeMap,
            each: Yt.each,
            map: Yt.map,
            grep: Yt.grep,
            inArray: Yt.inArray,
            extend: Yt.extend,
            create: Yt.create,
            walk: Yt.walk,
            createNS: Yt.createNS,
            resolve: Yt.resolve,
            explode: Yt.explode,
            _addCacheSuffix: Yt._addCacheSuffix,
            isOpera: Re.opera,
            isWebKit: Re.webkit,
            isIE: Re.ie,
            isGecko: Re.gecko,
            isMac: Re.mac
        },
        Ww = jw = Yt.extend(jw, $w);
    Hw = Ww, window.tinymce = Hw, window.tinyMCE = Hw,
        function (e) {
            if ("object" == typeof module) try {
                module.exports = e
            } catch (t) {}
        }(Ww)
}();;
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.1.0-40
 */

! function () {
    (function () {
        "use strict";
        var a = function (a, b) {
                return {
                    isRequired: a,
                    applyPatch: b
                }
            },
            b = function (a, b) {
                return function () {
                    var c = Array.prototype.slice.call(arguments),
                        d = b.apply(this, c),
                        e = "undefined" == typeof d ? c : d;
                    return a.apply(this, e)
                }
            },
            c = function (a, b) {
                return function () {
                    var c = a.apply(this, arguments),
                        d = b(c),
                        e = "undefined" == typeof d ? c : d;
                    return e
                }
            },
            d = function (a, b) {
                if (a)
                    for (var c = 0; c < b.length; c++) b[c].isRequired(a) && b[c].applyPatch(a);
                return a
            },
            e = {
                nu: a,
                before: b,
                after: c,
                applyPatches: d
            },
            f = 0,
            g = 1,
            h = -1,
            i = function (a) {
                return parseInt(a, 10)
            },
            j = function (a) {
                return function () {
                    return a
                }
            },
            k = function (a, b, c) {
                return {
                    major: j(a),
                    minor: j(b),
                    patch: j(c)
                }
            },
            l = function (a) {
                var b = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(a);
                return b ? k(i(b[1]), i(b[2]), i(b[3])) : k(0, 0, 0)
            },
            m = function (a, b) {
                var c = a - b;
                return 0 === c ? f : c > 0 ? g : h
            },
            n = function (a, b) {
                var c = m(a.major(), b.major());
                if (c !== f) return c;
                var d = m(a.minor(), b.minor());
                if (d !== f) return d;
                var e = m(a.patch(), b.patch());
                return e !== f ? e : f
            },
            o = {
                nu: k,
                parse: l,
                compare: n
            },
            p = function (a) {
                var b = [a.majorVersion, a.minorVersion].join(".");
                return b.split(".").slice(0, 3).join(".")
            },
            q = function (a) {
                return a ? o.parse(p(a)) : null
            },
            r = function (a, b) {
                return o.compare(q(a), o.parse(b)) < 0
            },
            s = {
                getVersion: q,
                isLessThan: r
            },
            t = function (a, b) {
                b = b.split(".");
                for (var c = 0; c < b.length && (a = a[b[c]], a); c++);
                return a
            },
            u = {
                resolve: t
            },
            v = function (a) {
                if (null === a) return "null";
                var b = typeof a;
                return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
            },
            w = function (a) {
                return function (b) {
                    return v(b) === a
                }
            },
            x = {
                isString: w("string"),
                isObject: w("object"),
                isArray: w("array"),
                isNull: w("null"),
                isBoolean: w("boolean"),
                isUndefined: w("undefined"),
                isFunction: w("function"),
                isNumber: w("number")
            },
            y = function (a) {
                var b = a.defaultSettings.forced_plugins;
                return b ? b : []
            },
            z = function (a) {
                return x.isUndefined(a) || "" === a ? [] : x.isArray(a) ? a : a.split(" ")
            },
            A = function (a) {
                return function (b) {
                    var c = u.resolve(window, "tinymce.util.Tools"),
                        d = z(b.plugins),
                        e = y(a),
                        f = e.length > 0 ? d.concat(e) : d;
                    return [c.extend({}, b, {
                        plugins: f
                    })]
                }
            },
            B = function (a) {
                return s.isLessThan(a, "4.7.0")
            },
            C = function (a) {
                a.EditorManager.init = e.before(a.EditorManager.init, A(a.EditorManager))
            },
            D = {
                patch: e.nu(B, C)
            },
            E = function () {
                return (new Date).getTime()
            },
            F = function (a, b, c, d, e) {
                var f, g = E();
                f = setInterval(function () {
                    a() && (clearInterval(f), b()), E() - g > e && (clearInterval(f), c())
                }, d)
            },
            G = {
                waitFor: F
            },
            H = function (a, b) {
                var c = a.currentStyle ? a.currentStyle[b] : window.getComputedStyle(a, null)[b];
                return c ? c : ""
            },
            I = function (a) {
                return function () {
                    var b = H(a, "position").toLowerCase();
                    return "absolute" === b || "fixed" === b
                }
            },
            J = function () {
                var a = document.createElement("div");
                return a.style.display = "none", a.className = "mce-floatpanel", a
            },
            K = function (a) {
                a.parentNode.removeChild(a)
            },
            L = function (a, b) {
                var c = J();
                document.body.appendChild(c), G.waitFor(I(c), function () {
                    K(c), a()
                }, function () {
                    K(c), b()
                }, 10, 5e3)
            },
            M = {
                waitForSkinLoaded: L
            },
            N = function (a, b) {
                a.notificationManager ? a.notificationManager.open({
                    text: b,
                    type: "warning",
                    timeout: 0,
                    icon: ""
                }) : a.windowManager.alert(b)
            },
            O = function (a) {
                a.EditorManager.on("AddEditor", function (a) {
                    var b = a.editor,
                        c = b.settings.service_message;
                    c && M.waitForSkinLoaded(function () {
                        N(b, b.settings.service_message)
                    }, function () {
                        alert(c)
                    })
                })
            },
            P = {
                error: N,
                register: O
            },
            Q = function (a) {
                var b, c, d = u.resolve(window, "tinymce.util.URI");
                b = a.base_url, b && (this.baseURL = new d(this.documentBaseURL).toAbsolute(b.replace(/\/+$/, "")), this.baseURI = new d(this.baseURL)), c = a.suffix, a.suffix && (this.suffix = c), this.defaultSettings = a
            },
            R = function (a) {
                var b = u.resolve(window, "tinymce.util.Tools");
                return [b.extend({}, this.defaultSettings, a)]
            },
            S = function (a) {
                return "function" != typeof a.overrideDefaults
            },
            T = function (a) {
                P.register(a), a.overrideDefaults = Q, a.EditorManager.init = e.before(a.EditorManager.init, R)
            },
            U = {
                patch: e.nu(S, T)
            },
            V = function (a) {
                return function (b) {
                    var c = b.plugin_base_urls;
                    for (var d in c) a.PluginManager.urls[d] = c[d]
                }
            },
            W = function (a) {
                return s.isLessThan(a, "4.5.0")
            },
            X = function (a) {
                a.overrideDefaults = e.before(a.overrideDefaults, V(a))
            },
            Y = {
                patch: e.nu(W, X)
            },
            Z = function (a) {
                e.applyPatches(a, [U.patch, Y.patch, D.patch])
            },
            $ = window;
        Z($.tinymce);
        var _ = function () {
            return {
                applyPatches: Z
            }
        };
        return _
    })()
}();;
(function (cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "forced_plugins": ["chiffer", "rain"],
    "suffix": ".min",
    "service_message": "The domain is not supported by your API key. Please review your domain settings <a target=\"_blank\" href=\"https://store.ephox.com/my-account/api-key-manager/\">here</a>.",
    "api_key": "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
    "plugin_base_urls": {
        "advcode": "https://plugins.tinymce.com/advcode/stable",
        "a11ychecker": "https://plugins.tinymce.com/a11ychecker/stable",
        "mediaembed": "https://plugins.tinymce.com/mediaembed/stable",
        "powerpaste": "https://plugins.tinymce.com/powerpaste/stable",
        "linkchecker": "https://plugins.tinymce.com/linkchecker/stable",
        "rain": "https://plugins.tinymce.com/rain/stable",
        "chiffer": "https://plugins.tinymce.com/chiffer/stable",
        "tinymcespellchecker": "https://plugins.tinymce.com/tinymcespellchecker/stable",
        "tinycomments": "https://plugins.tinymce.com/tinycomments/stable"
    },
    "rain_rainmaker_service_url": "https://rainmaker.tinymce.com"
});
/* Ephox chiffer plugin
 *
 * Copyright 2010-2017 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.3.0-46
 */

! function () {
    ! function () {
        "use strict";

        function a(a) {
            var b = 0,
                c = ob;
            return c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + "-" + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]] + c[a[b++]]
        }
        var b = function () {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b]
            },
            c = function (a) {
                return function () {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    return a()
                }
            },
            d = function (a, b) {
                return function () {
                    for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
                    return a(b.apply(null, arguments))
                }
            },
            e = function (a) {
                return function () {
                    return a
                }
            },
            f = function (a) {
                return a
            },
            g = function (a, b) {
                return a === b
            },
            h = function (a) {
                for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                for (var d = new Array(arguments.length - 1), e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
                return function () {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    for (var e = new Array(arguments.length), f = 0; f < e.length; f++) e[f] = arguments[f];
                    var g = d.concat(e);
                    return a.apply(null, g)
                }
            },
            i = function (a) {
                return function () {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    return !a.apply(null, arguments)
                }
            },
            j = function (a) {
                return function () {
                    throw new Error(a)
                }
            },
            k = function (a) {
                return a()
            },
            l = function (a) {
                a()
            },
            m = e(!1),
            n = e(!0),
            o = {
                noop: b,
                noarg: c,
                compose: d,
                constant: e,
                identity: f,
                tripleEquals: g,
                curry: h,
                not: i,
                die: j,
                apply: k,
                call: l,
                never: m,
                always: n
            },
            p = o.never,
            q = o.always,
            r = function () {
                return s
            },
            s = function () {
                var a = function (a) {
                        return a.isNone()
                    },
                    b = function (a) {
                        return a()
                    },
                    c = function (a) {
                        return a
                    },
                    d = function () {},
                    e = {
                        fold: function (a, b) {
                            return a()
                        },
                        is: p,
                        isSome: p,
                        isNone: q,
                        getOr: c,
                        getOrThunk: b,
                        getOrDie: function (a) {
                            throw new Error(a || "error: getOrDie called on none.")
                        },
                        or: c,
                        orThunk: b,
                        map: r,
                        ap: r,
                        each: d,
                        bind: r,
                        flatten: r,
                        exists: p,
                        forall: q,
                        filter: r,
                        equals: a,
                        equals_: a,
                        toArray: function () {
                            return []
                        },
                        toString: o.constant("none()")
                    };
                return Object.freeze && Object.freeze(e), e
            }(),
            t = function (a) {
                var b = function () {
                        return a
                    },
                    c = function () {
                        return f
                    },
                    d = function (b) {
                        return t(b(a))
                    },
                    e = function (b) {
                        return b(a)
                    },
                    f = {
                        fold: function (b, c) {
                            return c(a)
                        },
                        is: function (b) {
                            return a === b
                        },
                        isSome: q,
                        isNone: p,
                        getOr: b,
                        getOrThunk: b,
                        getOrDie: b,
                        or: c,
                        orThunk: c,
                        map: d,
                        ap: function (b) {
                            return b.fold(r, function (b) {
                                return t(b(a))
                            })
                        },
                        each: function (b) {
                            b(a)
                        },
                        bind: e,
                        flatten: b,
                        exists: e,
                        forall: e,
                        filter: function (b) {
                            return b(a) ? f : s
                        },
                        equals: function (b) {
                            return b.is(a)
                        },
                        equals_: function (b, c) {
                            return b.fold(p, function (b) {
                                return c(a, b)
                            })
                        },
                        toArray: function () {
                            return [a]
                        },
                        toString: function () {
                            return "some(" + a + ")"
                        }
                    };
                return f
            },
            u = function (a) {
                return null === a || void 0 === a ? s : t(a)
            },
            v = {
                some: t,
                none: r,
                from: u
            },
            w = function (a) {
                if (null === a) return "null";
                var b = typeof a;
                return "object" === b && Array.prototype.isPrototypeOf(a) ? "array" : "object" === b && String.prototype.isPrototypeOf(a) ? "string" : b
            },
            x = function (a) {
                return function (b) {
                    return w(b) === a
                }
            },
            y = {
                isString: x("string"),
                isObject: x("object"),
                isArray: x("array"),
                isNull: x("null"),
                isBoolean: x("boolean"),
                isUndefined: x("undefined"),
                isFunction: x("function"),
                isNumber: x("number")
            },
            z = function () {
                var a = Array.prototype.indexOf,
                    b = function (b, c) {
                        return a.call(b, c)
                    },
                    c = function (a, b) {
                        return P(a, b)
                    };
                return void 0 === a ? c : b
            }(),
            A = function (a, b) {
                var c = z(a, b);
                return -1 === c ? v.none() : v.some(c)
            },
            B = function (a, b) {
                return z(a, b) > -1
            },
            C = function (a, b) {
                return O(a, b).isSome()
            },
            D = function (a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            },
            E = function (a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            },
            F = function (a, b) {
                for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                    var f = a[e];
                    d[e] = b(f, e, a)
                }
                return d
            },
            G = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    b(a[c], c, a)
                }
            },
            H = function (a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    b(a[c], c, a)
                }
            },
            I = function (a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    (b(g, e, a) ? c : d).push(g)
                }
                return {
                    pass: c,
                    fail: d
                }
            },
            J = function (a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            },
            K = function (a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            },
            L = function (a, b, c) {
                return H(a, function (a) {
                    c = b(c, a)
                }), c
            },
            M = function (a, b, c) {
                return G(a, function (a) {
                    c = b(c, a)
                }), c
            },
            N = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (b(e, c, a)) return v.some(e)
                }
                return v.none()
            },
            O = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    if (b(a[c], c, a)) return v.some(c)
                }
                return v.none()
            },
            P = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1
            },
            Q = Array.prototype.push,
            R = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; ++c) {
                    if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    Q.apply(b, a[c])
                }
                return b
            },
            S = function (a, b) {
                var c = F(a, b);
                return R(c)
            },
            T = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    if (!0 !== b(a[c], c, a)) return !1
                }
                return !0
            },
            U = function (a, b) {
                return a.length === b.length && T(a, function (a, c) {
                    return a === b[c]
                })
            },
            V = Array.prototype.slice,
            W = function (a) {
                var b = V.call(a, 0);
                return b.reverse(), b
            },
            X = function (a, b) {
                return J(a, function (a) {
                    return !B(b, a)
                })
            },
            Y = function (a, b) {
                for (var c = {}, d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    c[String(f)] = b(f, d)
                }
                return c
            },
            Z = function (a) {
                return [a]
            },
            $ = function (a, b) {
                var c = V.call(a, 0);
                return c.sort(b), c
            },
            _ = function (a) {
                return 0 === a.length ? v.none() : v.some(a[0])
            },
            aa = function (a) {
                return 0 === a.length ? v.none() : v.some(a[a.length - 1])
            },
            ba = y.isFunction(Array.from) ? Array.from : function (a) {
                return V.call(a)
            },
            ca = {
                map: F,
                each: G,
                eachr: H,
                partition: I,
                filter: J,
                groupBy: K,
                indexOf: A,
                foldr: L,
                foldl: M,
                find: N,
                findIndex: O,
                flatten: R,
                bind: S,
                forall: T,
                exists: C,
                contains: B,
                equal: U,
                reverse: W,
                chunk: E,
                difference: X,
                mapToObject: Y,
                pure: Z,
                sort: $,
                range: D,
                head: _,
                last: aa,
                from: ba
            },
            da = function (a) {
                var b = v.none(),
                    c = [],
                    d = function (a) {
                        return da(function (b) {
                            e(function (c) {
                                b(a(c))
                            })
                        })
                    },
                    e = function (a) {
                        g() ? i(a) : c.push(a)
                    },
                    f = function (a) {
                        b = v.some(a), h(c), c = []
                    },
                    g = function () {
                        return b.isSome()
                    },
                    h = function (a) {
                        ca.each(a, i)
                    },
                    i = function (a) {
                        b.each(function (b) {
                            setTimeout(function () {
                                a(b)
                            }, 0)
                        })
                    };
                return a(f), {
                    get: e,
                    map: d,
                    isReady: g
                }
            },
            ea = function (a) {
                return da(function (b) {
                    b(a)
                })
            },
            fa = {
                nu: da,
                pure: ea
            },
            ga = function (a) {
                return function () {
                    var b = Array.prototype.slice.call(arguments),
                        c = this;
                    setTimeout(function () {
                        a.apply(c, b)
                    }, 0)
                }
            },
            ha = {
                bounce: ga
            },
            ia = function (a) {
                var b = function (b) {
                    a(ha.bounce(b))
                };
                return {
                    map: function (a) {
                        return ia(function (c) {
                            b(function (b) {
                                var d = a(b);
                                c(d)
                            })
                        })
                    },
                    bind: function (a) {
                        return ia(function (c) {
                            b(function (b) {
                                a(b).get(c)
                            })
                        })
                    },
                    anonBind: function (a) {
                        return ia(function (c) {
                            b(function (b) {
                                a.get(c)
                            })
                        })
                    },
                    toLazy: function () {
                        return fa.nu(b)
                    },
                    get: b
                }
            },
            ja = function (a) {
                return ia(function (b) {
                    b(a)
                })
            },
            ka = {
                nu: ia,
                pure: ja
            },
            la = function () {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                return function () {
                    for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                    if (a.length !== b.length) throw new Error('Wrong number of arguments to struct. Expected "[' + a.length + ']", got ' + b.length + " arguments");
                    var d = {};
                    return ca.each(a, function (a, c) {
                        d[a] = o.constant(b[c])
                    }), d
                }
            },
            ma = function () {
                var a = Object.keys,
                    b = function (a) {
                        var b = [];
                        for (var c in a) a.hasOwnProperty(c) && b.push(c);
                        return b
                    };
                return void 0 === a ? b : a
            }(),
            na = function (a, b) {
                for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                    var f = c[d];
                    b(a[f], f, a)
                }
            },
            oa = function (a, b) {
                return pa(a, function (a, c, d) {
                    return {
                        k: c,
                        v: b(a, c, d)
                    }
                })
            },
            pa = function (a, b) {
                var c = {};
                return na(a, function (d, e) {
                    var f = b(d, e, a);
                    c[f.k] = f.v
                }), c
            },
            qa = function (a, b) {
                var c = {},
                    d = {};
                return na(a, function (a, e) {
                    (b(a, e) ? c : d)[e] = a
                }), {
                    t: c,
                    f: d
                }
            },
            ra = function (a, b) {
                var c = [];
                return na(a, function (a, d) {
                    c.push(b(a, d))
                }), c
            },
            sa = function (a, b) {
                for (var c = ma(a), d = 0, e = c.length; d < e; d++) {
                    var f = c[d],
                        g = a[f];
                    if (b(g, f, a)) return v.some(g)
                }
                return v.none()
            },
            ta = function (a) {
                return ra(a, function (a) {
                    return a
                })
            },
            ua = function (a) {
                return ta(a).length
            },
            va = {
                bifilter: qa,
                each: na,
                map: oa,
                mapToArray: ra,
                tupleMap: pa,
                find: sa,
                keys: ma,
                values: ta,
                size: ua
            },
            wa = function (a) {
                return a.slice(0).sort()
            },
            xa = function (a, b) {
                throw new Error("All required keys (" + wa(a).join(", ") + ") were not specified. Specified keys were: " + wa(b).join(", ") + ".")
            },
            ya = function (a) {
                throw new Error("Unsupported keys for object: " + wa(a).join(", "))
            },
            za = function (a, b) {
                if (!y.isArray(b)) throw new Error("The " + a + " fields must be an array. Was: " + b + ".");
                ca.each(b, function (b) {
                    if (!y.isString(b)) throw new Error("The value " + b + " in the " + a + " fields was not a string.")
                })
            },
            Aa = function (a, b) {
                throw new Error("All values need to be of type: " + b + ". Keys (" + wa(a).join(", ") + ") were not.")
            },
            Ba = function (a) {
                var b = wa(a);
                ca.find(b, function (a, c) {
                    return c < b.length - 1 && a === b[c + 1]
                }).each(function (a) {
                    throw new Error("The field: " + a + " occurs more than once in the combined fields: [" + b.join(", ") + "].")
                })
            },
            Ca = {
                sort: wa,
                reqMessage: xa,
                unsuppMessage: ya,
                validateStrArr: za,
                invalidTypeMessage: Aa,
                checkDupes: Ba
            },
            Da = function (a, b) {
                var c = a.concat(b);
                if (0 === c.length) throw new Error("You must specify at least one required or optional field.");
                return Ca.validateStrArr("required", a), Ca.validateStrArr("optional", b), Ca.checkDupes(c),
                    function (d) {
                        var e = va.keys(d);
                        ca.forall(a, function (a) {
                            return ca.contains(e, a)
                        }) || Ca.reqMessage(a, e);
                        var f = ca.filter(e, function (a) {
                            return !ca.contains(c, a)
                        });
                        f.length > 0 && Ca.unsuppMessage(f);
                        var g = {};
                        return ca.each(a, function (a) {
                            g[a] = o.constant(d[a])
                        }), ca.each(b, function (a) {
                            g[a] = o.constant(Object.prototype.hasOwnProperty.call(d, a) ? v.some(d[a]) : v.none())
                        }), g
                    }
            },
            Ea = {
                immutable: la,
                immutableBag: Da
            },
            Fa = {},
            Ga = {
                exports: Fa
            };
        ! function (a, b, c, d) {
            ! function (d) {
                if ("object" == typeof b && void 0 !== c) c.exports = d();
                else if ("function" == typeof a && a.amd) a([], d);
                else {
                    var e;
                    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.EphoxContactWrapper = d()
                }
            }(function () {
                var a;
                return function a(b, c, e) {
                    function f(h, i) {
                        if (!c[h]) {
                            if (!b[h]) {
                                var j = "function" == typeof d && d;
                                if (!i && j) return j(h, !0);
                                if (g) return g(h, !0);
                                var k = new Error("Cannot find module '" + h + "'");
                                throw k.code = "MODULE_NOT_FOUND", k
                            }
                            var l = c[h] = {
                                exports: {}
                            };
                            b[h][0].call(l.exports, function (a) {
                                var c = b[h][1][a];
                                return f(c || a)
                            }, l, l.exports, a, b, c, e)
                        }
                        return c[h].exports
                    }
                    for (var g = "function" == typeof d && d, h = 0; h < e.length; h++) f(e[h]);
                    return f
                }({
                    1: [function (b, c, d) {
                        ! function (b, d, e) {
                            "function" == typeof a && a.amd ? a(e) : void 0 !== c && c.exports ? c.exports = e() : d.exports ? d.exports = e() : d.Fingerprint2 = e()
                        }(0, this, function () {
                            var a = function (b) {
                                if (!(this instanceof a)) return new a(b);
                                var c = {
                                    swfContainerId: "fingerprintjs2",
                                    swfPath: "flash/compiled/FontList.swf",
                                    detectScreenOrientation: !0,
                                    sortPluginsFor: [/palemoon/i],
                                    userDefinedFonts: []
                                };
                                this.options = this.extend(b, c), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
                            };
                            return a.prototype = {
                                extend: function (a, b) {
                                    if (null == a) return b;
                                    for (var c in a) null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
                                    return b
                                },
                                get: function (a) {
                                    var b = [];
                                    b = this.userAgentKey(b), b = this.languageKey(b), b = this.colorDepthKey(b), b = this.pixelRatioKey(b), b = this.hardwareConcurrencyKey(b), b = this.screenResolutionKey(b), b = this.availableScreenResolutionKey(b), b = this.timezoneOffsetKey(b), b = this.sessionStorageKey(b), b = this.localStorageKey(b), b = this.indexedDbKey(b), b = this.addBehaviorKey(b), b = this.openDatabaseKey(b), b = this.cpuClassKey(b), b = this.platformKey(b), b = this.doNotTrackKey(b), b = this.pluginsKey(b), b = this.canvasKey(b), b = this.webglKey(b), b = this.adBlockKey(b), b = this.hasLiedLanguagesKey(b), b = this.hasLiedResolutionKey(b), b = this.hasLiedOsKey(b), b = this.hasLiedBrowserKey(b), b = this.touchSupportKey(b), b = this.customEntropyFunction(b);
                                    var c = this;
                                    this.fontsKey(b, function (b) {
                                        var d = [];
                                        c.each(b, function (a) {
                                            var b = a.value;
                                            void 0 !== a.value.join && (b = a.value.join(";")), d.push(b)
                                        });
                                        var e = c.x64hash128(d.join("~~~"), 31);
                                        return a(e, b)
                                    })
                                },
                                customEntropyFunction: function (a) {
                                    return "function" == typeof this.options.customFunction && a.push({
                                        key: "custom",
                                        value: this.options.customFunction()
                                    }), a
                                },
                                userAgentKey: function (a) {
                                    return this.options.excludeUserAgent || a.push({
                                        key: "user_agent",
                                        value: this.getUserAgent()
                                    }), a
                                },
                                getUserAgent: function () {
                                    return navigator.userAgent
                                },
                                languageKey: function (a) {
                                    return this.options.excludeLanguage || a.push({
                                        key: "language",
                                        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
                                    }), a
                                },
                                colorDepthKey: function (a) {
                                    return this.options.excludeColorDepth || a.push({
                                        key: "color_depth",
                                        value: screen.colorDepth || -1
                                    }), a
                                },
                                pixelRatioKey: function (a) {
                                    return this.options.excludePixelRatio || a.push({
                                        key: "pixel_ratio",
                                        value: this.getPixelRatio()
                                    }), a
                                },
                                getPixelRatio: function () {
                                    return window.devicePixelRatio || ""
                                },
                                screenResolutionKey: function (a) {
                                    return this.options.excludeScreenResolution ? a : this.getScreenResolution(a)
                                },
                                getScreenResolution: function (a) {
                                    var b;
                                    return b = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== b && a.push({
                                        key: "resolution",
                                        value: b
                                    }), a
                                },
                                availableScreenResolutionKey: function (a) {
                                    return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a)
                                },
                                getAvailableScreenResolution: function (a) {
                                    var b;
                                    return screen.availWidth && screen.availHeight && (b = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== b && a.push({
                                        key: "available_resolution",
                                        value: b
                                    }), a
                                },
                                timezoneOffsetKey: function (a) {
                                    return this.options.excludeTimezoneOffset || a.push({
                                        key: "timezone_offset",
                                        value: (new Date).getTimezoneOffset()
                                    }), a
                                },
                                sessionStorageKey: function (a) {
                                    return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.push({
                                        key: "session_storage",
                                        value: 1
                                    }), a
                                },
                                localStorageKey: function (a) {
                                    return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.push({
                                        key: "local_storage",
                                        value: 1
                                    }), a
                                },
                                indexedDbKey: function (a) {
                                    return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.push({
                                        key: "indexed_db",
                                        value: 1
                                    }), a
                                },
                                addBehaviorKey: function (a) {
                                    return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && a.push({
                                        key: "add_behavior",
                                        value: 1
                                    }), a
                                },
                                openDatabaseKey: function (a) {
                                    return !this.options.excludeOpenDatabase && window.openDatabase && a.push({
                                        key: "open_database",
                                        value: 1
                                    }), a
                                },
                                cpuClassKey: function (a) {
                                    return this.options.excludeCpuClass || a.push({
                                        key: "cpu_class",
                                        value: this.getNavigatorCpuClass()
                                    }), a
                                },
                                platformKey: function (a) {
                                    return this.options.excludePlatform || a.push({
                                        key: "navigator_platform",
                                        value: this.getNavigatorPlatform()
                                    }), a
                                },
                                doNotTrackKey: function (a) {
                                    return this.options.excludeDoNotTrack || a.push({
                                        key: "do_not_track",
                                        value: this.getDoNotTrack()
                                    }), a
                                },
                                canvasKey: function (a) {
                                    return !this.options.excludeCanvas && this.isCanvasSupported() && a.push({
                                        key: "canvas",
                                        value: this.getCanvasFp()
                                    }), a
                                },
                                webglKey: function (a) {
                                    return this.options.excludeWebGL ? a : this.isWebGlSupported() ? (a.push({
                                        key: "webgl",
                                        value: this.getWebglFp()
                                    }), a) : a
                                },
                                adBlockKey: function (a) {
                                    return this.options.excludeAdBlock || a.push({
                                        key: "adblock",
                                        value: this.getAdBlock()
                                    }), a
                                },
                                hasLiedLanguagesKey: function (a) {
                                    return this.options.excludeHasLiedLanguages || a.push({
                                        key: "has_lied_languages",
                                        value: this.getHasLiedLanguages()
                                    }), a
                                },
                                hasLiedResolutionKey: function (a) {
                                    return this.options.excludeHasLiedResolution || a.push({
                                        key: "has_lied_resolution",
                                        value: this.getHasLiedResolution()
                                    }), a
                                },
                                hasLiedOsKey: function (a) {
                                    return this.options.excludeHasLiedOs || a.push({
                                        key: "has_lied_os",
                                        value: this.getHasLiedOs()
                                    }), a
                                },
                                hasLiedBrowserKey: function (a) {
                                    return this.options.excludeHasLiedBrowser || a.push({
                                        key: "has_lied_browser",
                                        value: this.getHasLiedBrowser()
                                    }), a
                                },
                                fontsKey: function (a, b) {
                                    return this.options.excludeJsFonts ? this.flashFontsKey(a, b) : this.jsFontsKey(a, b)
                                },
                                flashFontsKey: function (a, b) {
                                    return this.options.excludeFlashFonts ? b(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? b(a) : void this.loadSwfAndDetectFonts(function (c) {
                                        a.push({
                                            key: "swf_fonts",
                                            value: c.join(";")
                                        }), b(a)
                                    }) : b(a)
                                },
                                jsFontsKey: function (a, b) {
                                    var c = this;
                                    return setTimeout(function () {
                                        var d = ["monospace", "sans-serif", "serif"],
                                            e = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                                            f = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                                        c.options.extendedJsFonts && (e = e.concat(f)), e = e.concat(c.options.userDefinedFonts);
                                        var g = document.getElementsByTagName("body")[0],
                                            h = document.createElement("div"),
                                            i = document.createElement("div"),
                                            j = {},
                                            k = {},
                                            l = function () {
                                                var a = document.createElement("span");
                                                return a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "72px", a.style.lineHeight = "normal", a.innerHTML = "mmmmmmmmmmlli", a
                                            },
                                            m = function (a, b) {
                                                var c = l();
                                                return c.style.fontFamily = "'" + a + "'," + b, c
                                            },
                                            n = function () {
                                                for (var a = [], b = 0, c = d.length; b < c; b++) {
                                                    var e = l();
                                                    e.style.fontFamily = d[b], h.appendChild(e), a.push(e)
                                                }
                                                return a
                                            }();
                                        g.appendChild(h);
                                        for (var o = 0, p = d.length; o < p; o++) j[d[o]] = n[o].offsetWidth, k[d[o]] = n[o].offsetHeight;
                                        var q = function () {
                                            for (var a = {}, b = 0, c = e.length; b < c; b++) {
                                                for (var f = [], g = 0, h = d.length; g < h; g++) {
                                                    var j = m(e[b], d[g]);
                                                    i.appendChild(j), f.push(j)
                                                }
                                                a[e[b]] = f
                                            }
                                            return a
                                        }();
                                        g.appendChild(i);
                                        for (var r = [], s = 0, t = e.length; s < t; s++)(function (a) {
                                            for (var b = !1, c = 0; c < d.length; c++)
                                                if (b = a[c].offsetWidth !== j[d[c]] || a[c].offsetHeight !== k[d[c]]) return b;
                                            return b
                                        })(q[e[s]]) && r.push(e[s]);
                                        g.removeChild(i), g.removeChild(h), a.push({
                                            key: "js_fonts",
                                            value: r
                                        }), b(a)
                                    }, 1)
                                },
                                pluginsKey: function (a) {
                                    return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || a.push({
                                        key: "ie_plugins",
                                        value: this.getIEPlugins()
                                    }) : a.push({
                                        key: "regular_plugins",
                                        value: this.getRegularPlugins()
                                    })), a
                                },
                                getRegularPlugins: function () {
                                    for (var a = [], b = 0, c = navigator.plugins.length; b < c; b++) a.push(navigator.plugins[b]);
                                    return this.pluginsShouldBeSorted() && (a = a.sort(function (a, b) {
                                        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                                    })), this.map(a, function (a) {
                                        var b = this.map(a, function (a) {
                                            return [a.type, a.suffixes].join("~")
                                        }).join(",");
                                        return [a.name, a.description, b].join("::")
                                    }, this)
                                },
                                getIEPlugins: function () {
                                    var a = [];
                                    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
                                        var b = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                                        a = this.map(b, function (a) {
                                            try {
                                                return new ActiveXObject(a), a
                                            } catch (a) {
                                                return null
                                            }
                                        })
                                    }
                                    return navigator.plugins && (a = a.concat(this.getRegularPlugins())), a
                                },
                                pluginsShouldBeSorted: function () {
                                    for (var a = !1, b = 0, c = this.options.sortPluginsFor.length; b < c; b++) {
                                        var d = this.options.sortPluginsFor[b];
                                        if (navigator.userAgent.match(d)) {
                                            a = !0;
                                            break
                                        }
                                    }
                                    return a
                                },
                                touchSupportKey: function (a) {
                                    return this.options.excludeTouchSupport || a.push({
                                        key: "touch_support",
                                        value: this.getTouchSupport()
                                    }), a
                                },
                                hardwareConcurrencyKey: function (a) {
                                    return this.options.excludeHardwareConcurrency || a.push({
                                        key: "hardware_concurrency",
                                        value: this.getHardwareConcurrency()
                                    }), a
                                },
                                hasSessionStorage: function () {
                                    try {
                                        return !!window.sessionStorage
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                hasLocalStorage: function () {
                                    try {
                                        return !!window.localStorage
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                hasIndexedDB: function () {
                                    try {
                                        return !!window.indexedDB
                                    } catch (a) {
                                        return !0
                                    }
                                },
                                getHardwareConcurrency: function () {
                                    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
                                },
                                getNavigatorCpuClass: function () {
                                    return navigator.cpuClass ? navigator.cpuClass : "unknown"
                                },
                                getNavigatorPlatform: function () {
                                    return navigator.platform ? navigator.platform : "unknown"
                                },
                                getDoNotTrack: function () {
                                    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
                                },
                                getTouchSupport: function () {
                                    var a = 0,
                                        b = !1;
                                    void 0 !== navigator.maxTouchPoints ? a = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints);
                                    try {
                                        document.createEvent("TouchEvent"), b = !0
                                    } catch (a) {}
                                    return [a, b, "ontouchstart" in window]
                                },
                                getCanvasFp: function () {
                                    var a = [],
                                        b = document.createElement("canvas");
                                    b.width = 2e3, b.height = 200, b.style.display = "inline";
                                    var c = b.getContext("2d");
                                    return c.rect(0, 0, 10, 10), c.rect(2, 2, 6, 6), a.push("canvas winding:" + (!1 === c.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), c.textBaseline = "alphabetic", c.fillStyle = "#f60", c.fillRect(125, 1, 62, 20), c.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? c.font = "11pt Arial" : c.font = "11pt no-real-font-123", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), c.fillStyle = "rgba(102, 204, 0, 0.2)", c.font = "18pt Arial", c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), c.globalCompositeOperation = "multiply", c.fillStyle = "rgb(255,0,255)", c.beginPath(), c.arc(50, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(0,255,255)", c.beginPath(), c.arc(100, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,255,0)", c.beginPath(), c.arc(75, 100, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,0,255)", c.arc(75, 75, 75, 0, 2 * Math.PI, !0), c.arc(75, 75, 25, 0, 2 * Math.PI, !0), c.fill("evenodd"), a.push("canvas fp:" + b.toDataURL()), a.join("~")
                                },
                                getWebglFp: function () {
                                    var a, b = function (b) {
                                        return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + b[0] + ", " + b[1] + "]"
                                    };
                                    if (!(a = this.getWebglCanvas())) return null;
                                    var c = [],
                                        d = a.createBuffer();
                                    a.bindBuffer(a.ARRAY_BUFFER, d);
                                    var e = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                                    a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW), d.itemSize = 3, d.numItems = 3;
                                    var f = a.createProgram(),
                                        g = a.createShader(a.VERTEX_SHADER);
                                    a.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), a.compileShader(g);
                                    var h = a.createShader(a.FRAGMENT_SHADER);
                                    a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), a.compileShader(h), a.attachShader(f, g), a.attachShader(f, h), a.linkProgram(f), a.useProgram(f), f.vertexPosAttrib = a.getAttribLocation(f, "attrVertex"), f.offsetUniform = a.getUniformLocation(f, "uniformOffset"), a.enableVertexAttribArray(f.vertexPosArray), a.vertexAttribPointer(f.vertexPosAttrib, d.itemSize, a.FLOAT, !1, 0, 0), a.uniform2f(f.offsetUniform, 1, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, d.numItems), null != a.canvas && c.push(a.canvas.toDataURL()), c.push("extensions:" + a.getSupportedExtensions().join(";")), c.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))), c.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))), c.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)), c.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")), c.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)), c.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)), c.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)), c.push("webgl max anisotropy:" + function (a) {
                                        var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                        return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === b && (b = 2), b) : null
                                    }(a)), c.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), c.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)), c.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)), c.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)), c.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), c.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)), c.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)), c.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)), c.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), c.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)), c.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS))), c.push("webgl red bits:" + a.getParameter(a.RED_BITS)), c.push("webgl renderer:" + a.getParameter(a.RENDERER)), c.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)), c.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)), c.push("webgl vendor:" + a.getParameter(a.VENDOR)), c.push("webgl version:" + a.getParameter(a.VERSION));
                                    try {
                                        var i = a.getExtension("WEBGL_debug_renderer_info");
                                        i && (c.push("webgl unmasked vendor:" + a.getParameter(i.UNMASKED_VENDOR_WEBGL)), c.push("webgl unmasked renderer:" + a.getParameter(i.UNMASKED_RENDERER_WEBGL)))
                                    } catch (a) {}
                                    return a.getShaderPrecisionFormat ? (c.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), c.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax),
                                        c.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), c.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), c.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), c.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), c.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), c.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), c.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), c.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), c.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), c.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), c.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), c.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), c.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), c.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), c.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), c.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), c.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), c.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), c.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), c.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), c.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), c.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), c.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), c.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), c.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), c.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), c.join("~")) : c.join("~")
                                },
                                getAdBlock: function () {
                                    var a = document.createElement("div");
                                    a.innerHTML = "&nbsp;", a.className = "adsbox";
                                    var b = !1;
                                    try {
                                        document.body.appendChild(a), b = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(a)
                                    } catch (a) {
                                        b = !1
                                    }
                                    return b
                                },
                                getHasLiedLanguages: function () {
                                    if (void 0 !== navigator.languages) try {
                                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                                    } catch (a) {
                                        return !0
                                    }
                                    return !1
                                },
                                getHasLiedResolution: function () {
                                    return screen.width < screen.availWidth || screen.height < screen.availHeight
                                },
                                getHasLiedOs: function () {
                                    var a, b = navigator.userAgent.toLowerCase(),
                                        c = navigator.oscpu,
                                        d = navigator.platform.toLowerCase();
                                    a = b.indexOf("windows phone") >= 0 ? "Windows Phone" : b.indexOf("win") >= 0 ? "Windows" : b.indexOf("android") >= 0 ? "Android" : b.indexOf("linux") >= 0 ? "Linux" : b.indexOf("iphone") >= 0 || b.indexOf("ipad") >= 0 ? "iOS" : b.indexOf("mac") >= 0 ? "Mac" : "Other";
                                    if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0;
                                    if (void 0 !== c) {
                                        if (c = c.toLowerCase(), c.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0;
                                        if (c.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0;
                                        if (c.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0;
                                        if (0 === c.indexOf("win") && 0 === c.indexOf("linux") && c.indexOf("mac") >= 0 && "other" !== a) return !0
                                    }
                                    return d.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a || (d.indexOf("linux") >= 0 || d.indexOf("android") >= 0 || d.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a || (d.indexOf("mac") >= 0 || d.indexOf("ipad") >= 0 || d.indexOf("ipod") >= 0 || d.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a || 0 === d.indexOf("win") && 0 === d.indexOf("linux") && d.indexOf("mac") >= 0 && "other" !== a || void 0 === navigator.plugins && "Windows" !== a && "Windows Phone" !== a
                                },
                                getHasLiedBrowser: function () {
                                    var a, b = navigator.userAgent.toLowerCase(),
                                        c = navigator.productSub;
                                    if (("Chrome" === (a = b.indexOf("firefox") >= 0 ? "Firefox" : b.indexOf("opera") >= 0 || b.indexOf("opr") >= 0 ? "Opera" : b.indexOf("chrome") >= 0 ? "Chrome" : b.indexOf("safari") >= 0 ? "Safari" : b.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === a || "Opera" === a) && "20030107" !== c) return !0;
                                    var d = eval.toString().length;
                                    if (37 === d && "Safari" !== a && "Firefox" !== a && "Other" !== a) return !0;
                                    if (39 === d && "Internet Explorer" !== a && "Other" !== a) return !0;
                                    if (33 === d && "Chrome" !== a && "Opera" !== a && "Other" !== a) return !0;
                                    var e;
                                    try {
                                        throw "a"
                                    } catch (a) {
                                        try {
                                            a.toSource(), e = !0
                                        } catch (a) {
                                            e = !1
                                        }
                                    }
                                    return !(!e || "Firefox" === a || "Other" === a)
                                },
                                isCanvasSupported: function () {
                                    var a = document.createElement("canvas");
                                    return !(!a.getContext || !a.getContext("2d"))
                                },
                                isWebGlSupported: function () {
                                    if (!this.isCanvasSupported()) return !1;
                                    var a, b = document.createElement("canvas");
                                    try {
                                        a = b.getContext && (b.getContext("webgl") || b.getContext("experimental-webgl"))
                                    } catch (b) {
                                        a = !1
                                    }
                                    return !!window.WebGLRenderingContext && !!a
                                },
                                isIE: function () {
                                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                                },
                                hasSwfObjectLoaded: function () {
                                    return void 0 !== window.swfobject
                                },
                                hasMinFlashInstalled: function () {
                                    return swfobject.hasFlashPlayerVersion("9.0.0")
                                },
                                addFlashDivNode: function () {
                                    var a = document.createElement("div");
                                    a.setAttribute("id", this.options.swfContainerId), document.body.appendChild(a)
                                },
                                loadSwfAndDetectFonts: function (a) {
                                    var b = "___fp_swf_loaded";
                                    window[b] = function (b) {
                                        a(b)
                                    };
                                    var c = this.options.swfContainerId;
                                    this.addFlashDivNode();
                                    var d = {
                                            onReady: b
                                        },
                                        e = {
                                            allowScriptAccess: "always",
                                            menu: "false"
                                        };
                                    swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, d, e, {})
                                },
                                getWebglCanvas: function () {
                                    var a = document.createElement("canvas"),
                                        b = null;
                                    try {
                                        b = a.getContext("webgl") || a.getContext("experimental-webgl")
                                    } catch (a) {}
                                    return b || (b = null), b
                                },
                                each: function (a, b, c) {
                                    if (null !== a)
                                        if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(b, c);
                                        else if (a.length === +a.length) {
                                        for (var d = 0, e = a.length; d < e; d++)
                                            if (b.call(c, a[d], d, a) === {}) return
                                    } else
                                        for (var f in a)
                                            if (a.hasOwnProperty(f) && b.call(c, a[f], f, a) === {}) return
                                },
                                map: function (a, b, c) {
                                    var d = [];
                                    return null == a ? d : this.nativeMap && a.map === this.nativeMap ? a.map(b, c) : (this.each(a, function (a, e, f) {
                                        d[d.length] = b.call(c, a, e, f)
                                    }), d)
                                },
                                x64Add: function (a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] + b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] + b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] + b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] + b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                },
                                x64Multiply: function (a, b) {
                                    a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]], b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]];
                                    var c = [0, 0, 0, 0];
                                    return c[3] += a[3] * b[3], c[2] += c[3] >>> 16, c[3] &= 65535, c[2] += a[2] * b[3], c[1] += c[2] >>> 16, c[2] &= 65535, c[2] += a[3] * b[2], c[1] += c[2] >>> 16, c[2] &= 65535, c[1] += a[1] * b[3], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[2] * b[2], c[0] += c[1] >>> 16, c[1] &= 65535, c[1] += a[3] * b[1], c[0] += c[1] >>> 16, c[1] &= 65535, c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0], c[0] &= 65535, [c[0] << 16 | c[1], c[2] << 16 | c[3]]
                                },
                                x64Rotl: function (a, b) {
                                    return b %= 64, 32 === b ? [a[1], a[0]] : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b] : (b -= 32, [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b])
                                },
                                x64LeftShift: function (a, b) {
                                    return b %= 64, 0 === b ? a : b < 32 ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
                                },
                                x64Xor: function (a, b) {
                                    return [a[0] ^ b[0], a[1] ^ b[1]]
                                },
                                x64Fmix: function (a) {
                                    return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), a = this.x64Xor(a, [0, a[0] >>> 1])
                                },
                                x64hash128: function (a, b) {
                                    a = a || "", b = b || 0;
                                    for (var c = a.length % 16, d = a.length - c, e = [0, b], f = [0, b], g = [0, 0], h = [0, 0], i = [2277735313, 289559509], j = [1291169091, 658871167], k = 0; k < d; k += 16) g = [255 & a.charCodeAt(k + 4) | (255 & a.charCodeAt(k + 5)) << 8 | (255 & a.charCodeAt(k + 6)) << 16 | (255 & a.charCodeAt(k + 7)) << 24, 255 & a.charCodeAt(k) | (255 & a.charCodeAt(k + 1)) << 8 | (255 & a.charCodeAt(k + 2)) << 16 | (255 & a.charCodeAt(k + 3)) << 24], h = [255 & a.charCodeAt(k + 12) | (255 & a.charCodeAt(k + 13)) << 8 | (255 & a.charCodeAt(k + 14)) << 16 | (255 & a.charCodeAt(k + 15)) << 24, 255 & a.charCodeAt(k + 8) | (255 & a.charCodeAt(k + 9)) << 8 | (255 & a.charCodeAt(k + 10)) << 16 | (255 & a.charCodeAt(k + 11)) << 24], g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g), e = this.x64Rotl(e, 27), e = this.x64Add(e, f), e = this.x64Add(this.x64Multiply(e, [0, 5]), [0, 1390208809]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h), f = this.x64Rotl(f, 31), f = this.x64Add(f, e), f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 944331445]);
                                    switch (g = [0, 0], h = [0, 0], c) {
                                        case 15:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                                        case 14:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                                        case 13:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                                        case 12:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                                        case 11:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 10)], 16));
                                        case 10:
                                            h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                                        case 9:
                                            h = this.x64Xor(h, [0, a.charCodeAt(k + 8)]), h = this.x64Multiply(h, j), h = this.x64Rotl(h, 33), h = this.x64Multiply(h, i), f = this.x64Xor(f, h);
                                        case 8:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                                        case 7:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                                        case 6:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                                        case 5:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                                        case 4:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                                        case 3:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                                        case 2:
                                            g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                                        case 1:
                                            g = this.x64Xor(g, [0, a.charCodeAt(k)]), g = this.x64Multiply(g, i), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, j), e = this.x64Xor(e, g)
                                    }
                                    return e = this.x64Xor(e, [0, a.length]), f = this.x64Xor(f, [0, a.length]), e = this.x64Add(e, f), f = this.x64Add(f, e), e = this.x64Fmix(e), f = this.x64Fmix(f), e = this.x64Add(e, f), f = this.x64Add(f, e), ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
                                }
                            }, a.VERSION = "1.5.1", a
                        })
                    }, {}],
                    2: [function (a, b, c) {
                        var d = a("fingerprintjs2");
                        b.exports = {
                            boltExport: d
                        }
                    }, {
                        fingerprintjs2: 1
                    }]
                }, {}, [2])(2)
            })
        }(void 0, Fa, Ga, void 0);
        for (var Ha = Ga.exports.boltExport, Ia = Ea.immutable("hash", "components"), Ja = function () {
                return ka.nu(function (a) {
                    document.body ? a(document.body) : document.addEventListener("DOMContentLoaded", function () {
                        a(document.body)
                    }, !1)
                })
            }, Ka = function () {
                return Ja().bind(function (a) {
                    return ka.nu(function (a) {
                        (new Ha).get(function (b, c) {
                            a(Ia(b, c))
                        })
                    })
                })
            }, La = fa.nu(function (a) {
                Ka().get(a)
            }), Ma = function () {
                return La
            }, Na = {
                getLazyFingerprint: Ma
            }, Oa = function (a, b) {
                return b + a
            }, Pa = function (a, b) {
                return a + b
            }, Qa = function (a, b) {
                return a.substring(b)
            }, Ra = function (a, b) {
                return a.substring(0, a.length - b)
            }, Sa = {
                addToStart: Oa,
                addToEnd: Pa,
                removeFromStart: Qa,
                removeFromEnd: Ra
            }, Ta = function (a, b) {
                return a.substr(0, b)
            }, Ua = function (a, b) {
                return a.substr(a.length - b, a.length)
            }, Va = function (a) {
                return "" === a ? v.none() : v.some(a.substr(0, 1))
            }, Wa = function (a) {
                return "" === a ? v.none() : v.some(a.substring(1))
            }, Xa = {
                first: Ta,
                last: Ua,
                head: Va,
                tail: Wa
            }, Ya = function (a, b, c) {
                return "" === b || !(a.length < b.length) && a.substr(c, c + b.length) === b
            }, Za = function (a, b) {
                var c = function (a) {
                    var b = typeof a;
                    return "string" === b || "number" === b
                };
                return a.replace(/\${([^{}]*)}/g, function (a, d) {
                    var e = b[d];
                    return c(e) ? e : a
                })
            }, $a = function (a, b) {
                return eb(a, b) ? Sa.removeFromStart(a, b.length) : a
            }, _a = function (a, b) {
                return fb(a, b) ? Sa.removeFromEnd(a, b.length) : a
            }, ab = function (a, b) {
                return eb(a, b) ? a : Sa.addToStart(a, b)
            }, bb = function (a, b) {
                return fb(a, b) ? a : Sa.addToEnd(a, b)
            }, cb = function (a, b) {
                return -1 !== a.indexOf(b)
            }, db = function (a) {
                return Xa.head(a).bind(function (b) {
                    return Xa.tail(a).map(function (a) {
                        return b.toUpperCase() + a
                    })
                }).getOr(a)
            }, eb = function (a, b) {
                return Ya(a, b, 0)
            }, fb = function (a, b) {
                return Ya(a, b, a.length - b.length)
            }, gb = function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            }, hb = function (a) {
                return a.replace(/^\s+/g, "")
            }, ib = function (a) {
                return a.replace(/\s+$/g, "")
            }, jb = {
                supplant: Za,
                startsWith: eb,
                removeLeading: $a,
                removeTrailing: _a,
                ensureLeading: ab,
                ensureTrailing: bb,
                endsWith: fb,
                contains: cb,
                trim: gb,
                lTrim: hb,
                rTrim: ib,
                capitalize: db
            }, kb = {
                now: function () {
                    return (new Date).getTime()
                }
            }, lb = function (a) {
                return v.from(a.api_key)
            }, mb = function (a) {
                return a.chiffer_snowplow_service_url
            }, nb = {
                getApiKey: lb,
                getServiceUrl: mb
            }, ob = [], pb = 0; pb < 256; ++pb) ob[pb] = (pb + 256).toString(16).substr(1);
        var qb = function () {
                for (var a, b = new Array(16), c = 0; c < 16; c++) 0 == (3 & c) && (a = 4294967296 * Math.random()), b[c] = a >>> ((3 & c) << 3) & 255;
                return b
            },
            rb = function () {
                var b = qb();
                return b[6] = 15 & b[6] | 64, b[8] = 63 & b[8] | 128, a(b)
            },
            sb = {
                v4: rb
            },
            tb = function (a, b) {
                return {
                    send: function (c, d, e) {
                        var f = jb.supplant("?aid=${aid}&tna=${tna}&p=${p}&dtm=${dtm}&stm=${stm}&tz=${tz}&e=${e}&se_ca=${se_ca}&eid=${eid}&fp=${fp}&tv=${tv}", {
                            aid: b,
                            tna: "tinymce_cloud",
                            p: "web",
                            dtm: d,
                            stm: kb.now(),
                            tz: "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                            e: "se",
                            eid: sb.v4(),
                            se_ca: c,
                            fp: e.hash(),
                            tv: "js-2.6.1"
                        });
                        return ka.nu(function (b) {
                            var c = document.createElement("img");
                            c.src = nb.getServiceUrl(a) + f, c.onload = function () {
                                b(!0)
                            }, c.onerror = function () {
                                b(!1)
                            }
                        })
                    }
                }
            },
            ub = function (a, b) {
                return {
                    sendStat: function (c) {
                        return function () {
                            var d = kb.now();
                            a.get(function (a) {
                                b.send(c, d, a).get(function () {})
                            })
                        }
                    }
                }
            },
            vb = function (a, b) {
                var c = Na.getLazyFingerprint(),
                    d = tb(a, b);
                return ub(c, d)
            };
        return function () {
            var a = tinymce.defaultSettings,
                b = function (b) {
                    var c = vb(a, b);
                    return c.sendStat("script_load")(),
                        function (a, b) {
                            a.once("init", c.sendStat("init")), a.once("focus", c.sendStat("focus"))
                        }
                },
                c = function () {
                    return function () {}
                },
                d = nb.getApiKey(a),
                e = d.fold(c, b);
            tinymce.PluginManager.add("chiffer", e)
        }
    }()()
}();;
/* Ephox rain plugin
 *
 * Copyright 2010-2018 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.0.0-44
 */
! function () {
    ! function () {
        "use strict";
        var a = function () {},
            b = function (a) {
                return function () {
                    return a()
                }
            },
            c = function (a, b) {
                return function () {
                    return a(b.apply(null, arguments))
                }
            },
            d = function (a) {
                return function () {
                    return a
                }
            },
            e = function (a) {
                return a
            },
            f = function (a, b) {
                return a === b
            },
            g = function (a) {
                for (var b = new Array(arguments.length - 1), c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                return function () {
                    for (var c = new Array(arguments.length), d = 0; d < c.length; d++) c[d] = arguments[d];
                    var e = b.concat(c);
                    return a.apply(null, e)
                }
            },
            h = function (a) {
                return function () {
                    return !a.apply(null, arguments)
                }
            },
            i = function (a) {
                return function () {
                    throw new Error(a)
                }
            },
            j = function (a) {
                return a()
            },
            k = function (a) {
                a()
            },
            l = d(!1),
            m = d(!0),
            n = {
                noop: a,
                noarg: b,
                compose: c,
                constant: d,
                identity: e,
                tripleEquals: f,
                curry: g,
                not: h,
                die: i,
                apply: j,
                call: k,
                never: l,
                always: m
            },
            o = n.never,
            p = n.always,
            q = function () {
                return r
            },
            r = function () {
                var a = function (a) {
                        return a.isNone()
                    },
                    b = function (a) {
                        return a()
                    },
                    c = function (a) {
                        return a
                    },
                    d = function () {},
                    e = {
                        fold: function (a, b) {
                            return a()
                        },
                        is: o,
                        isSome: o,
                        isNone: p,
                        getOr: c,
                        getOrThunk: b,
                        getOrDie: function (a) {
                            throw new Error(a || "error: getOrDie called on none.")
                        },
                        or: c,
                        orThunk: b,
                        map: q,
                        ap: q,
                        each: d,
                        bind: q,
                        flatten: q,
                        exists: o,
                        forall: p,
                        filter: q,
                        equals: a,
                        equals_: a,
                        toArray: function () {
                            return []
                        },
                        toString: n.constant("none()")
                    };
                return Object.freeze && Object.freeze(e), e
            }(),
            s = function (a) {
                var b = function () {
                        return a
                    },
                    c = function () {
                        return f
                    },
                    d = function (b) {
                        return s(b(a))
                    },
                    e = function (b) {
                        return b(a)
                    },
                    f = {
                        fold: function (b, c) {
                            return c(a)
                        },
                        is: function (b) {
                            return a === b
                        },
                        isSome: p,
                        isNone: o,
                        getOr: b,
                        getOrThunk: b,
                        getOrDie: b,
                        or: c,
                        orThunk: c,
                        map: d,
                        ap: function (b) {
                            return b.fold(q, function (b) {
                                return s(b(a))
                            })
                        },
                        each: function (b) {
                            b(a)
                        },
                        bind: e,
                        flatten: b,
                        exists: e,
                        forall: e,
                        filter: function (b) {
                            return b(a) ? f : r
                        },
                        equals: function (b) {
                            return b.is(a)
                        },
                        equals_: function (b, c) {
                            return b.fold(o, function (b) {
                                return c(a, b)
                            })
                        },
                        toArray: function () {
                            return [a]
                        },
                        toString: function () {
                            return "some(" + a + ")"
                        }
                    };
                return f
            },
            t = function (a) {
                return null === a || void 0 === a ? r : s(a)
            },
            u = {
                some: s,
                none: q,
                from: t
            },
            v = function () {
                var a = Array.prototype.indexOf,
                    b = function (b, c) {
                        return a.call(b, c)
                    },
                    c = function (a, b) {
                        return L(a, b)
                    };
                return void 0 === a ? c : b
            }(),
            w = function (a, b) {
                var c = v(a, b);
                return -1 === c ? u.none() : u.some(c)
            },
            x = function (a, b) {
                return v(a, b) > -1
            },
            y = function (a, b) {
                return K(a, b).isSome()
            },
            z = function (a, b) {
                for (var c = [], d = 0; d < a; d++) c.push(b(d));
                return c
            },
            A = function (a, b) {
                for (var c = [], d = 0; d < a.length; d += b) {
                    var e = a.slice(d, d + b);
                    c.push(e)
                }
                return c
            },
            B = function (a, b) {
                for (var c = a.length, d = new Array(c), e = 0; e < c; e++) {
                    var f = a[e];
                    d[e] = b(f, e, a)
                }
                return d
            },
            C = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    b(a[c], c, a)
                }
            },
            D = function (a, b) {
                for (var c = a.length - 1; c >= 0; c--) {
                    b(a[c], c, a)
                }
            },
            E = function (a, b) {
                for (var c = [], d = [], e = 0, f = a.length; e < f; e++) {
                    var g = a[e];
                    (b(g, e, a) ? c : d).push(g)
                }
                return {
                    pass: c,
                    fail: d
                }
            },
            F = function (a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    b(f, d, a) && c.push(f)
                }
                return c
            },
            G = function (a, b) {
                if (0 === a.length) return [];
                for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) {
                    var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h)
                }
                return 0 !== e.length && d.push(e), d
            },
            H = function (a, b, c) {
                return D(a, function (a) {
                    c = b(c, a)
                }), c
            },
            I = function (a, b, c) {
                return C(a, function (a) {
                    c = b(c, a)
                }), c
            },
            J = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (b(e, c, a)) return u.some(e)
                }
                return u.none()
            },
            K = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    if (b(a[c], c, a)) return u.some(c)
                }
                return u.none()
            },
            L = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1
            },
            M = Array.prototype.push,
            N = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; ++c) {
                    if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    M.apply(b, a[c])
                }
                return b
            },
            O = function (a, b) {
                var c = B(a, b);
                return N(c)
            },
            P = function (a, b) {
                for (var c = 0, d = a.length; c < d; ++c) {
                    if (!0 !== b(a[c], c, a)) return !1
                }
                return !0
            },
            Q = function (a, b) {
                return a.length === b.length && P(a, function (a, c) {
                    return a === b[c]
                })
            },
            R = Array.prototype.slice,
            S = function (a) {
                var b = R.call(a, 0);
                return b.reverse(), b
            },
            T = function (a, b) {
                return F(a, function (a) {
                    return !x(b, a)
                })
            },
            U = function (a, b) {
                for (var c = {}, d = 0, e = a.length; d < e; d++) {
                    var f = a[d];
                    c[String(f)] = b(f, d)
                }
                return c
            },
            V = function (a) {
                return [a]
            },
            W = function (a, b) {
                var c = R.call(a, 0);
                return c.sort(b), c
            },
            X = function (a) {
                return 0 === a.length ? u.none() : u.some(a[0])
            },
            Y = function (a) {
                return 0 === a.length ? u.none() : u.some(a[a.length - 1])
            },
            Z = {
                map: B,
                each: C,
                eachr: D,
                partition: E,
                filter: F,
                groupBy: G,
                indexOf: w,
                foldr: H,
                foldl: I,
                find: J,
                findIndex: K,
                flatten: N,
                bind: O,
                forall: P,
                exists: y,
                contains: x,
                equal: Q,
                reverse: S,
                chunk: A,
                difference: T,
                mapToObject: U,
                pure: V,
                sort: W,
                range: z,
                head: X,
                last: Y
            },
            $ = function (a) {
                return u.from(a.api_key)
            },
            _ = function (a) {
                return u.from(a.rain_rainmaker_service_url).filter(function (a) {
                    return a.length > 0
                })
            },
            aa = {
                getApiKey: $,
                getServiceUrl: _
            },
            ba = tinymce.util,
            ca = ba.JSON,
            da = ba.URI,
            ea = ba.XHR,
            fa = function (a, b) {
                var c = -1 === a.indexOf("?") ? "?" : "&",
                    d = c + "apiKey=" + encodeURIComponent(b);
                return "string" == typeof b ? a + d : a
            };
        return function () {
            var a = function (a, b) {
                aa.getApiKey(a.settings).bind(function (b) {
                    return aa.getServiceUrl(a.settings).map(function (a) {
                        return fa(a + "/1/messages", b)
                    })
                }).each(function (c) {
                    var d = {
                        url: new da(b).toAbsolute(c),
                        type: "get",
                        content_type: "application/json",
                        success: function (b) {
                            var c = ca.parse(b);
                            c && Z.each(c.messages, function (b) {
                                a.notificationManager.open({
                                    type: "info",
                                    text: b
                                })
                            })
                        },
                        error: function () {}
                    };
                    ea.send(d)
                })
            };
            return tinymce.PluginManager.add("rain", a),
                function () {}
        }
    }()()
}();;
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('a11ychecker', 'The a11ychecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('advcode', 'The advcode enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('linkchecker', 'The linkchecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('mediaembed', 'The mediaembed enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('powerpaste', 'The powerpaste enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('tinycomments', 'The tinycomments enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');
(function (pluginName, message) {
    tinymce.PluginManager.add(pluginName, function (editor) {
        editor.on("skinLoaded", function () {
            editor.notificationManager.open({
                text: message,
                type: 'warning'
            });
        });
    });
})('tinymcespellchecker', 'The tinymcespellchecker enterprise plugin is not enabled on your API key. Please contact <a target="_blank" href="https://store.ephox.com/product-category/tinymce/">Tiny</a> to upgrade your key.');