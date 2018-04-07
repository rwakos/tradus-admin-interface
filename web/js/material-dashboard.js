/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId])
        /******/ 			return installedModules[moduleId].exports;
        /******/
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/ 	__webpack_require__.i = function(value) { return value; };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "./";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 67);
    /******/ })
/************************************************************************/
/******/ ({

    /***/ 32:
    /***/ (function(module, exports) {

        /*
         * arrive.js
         * v2.4.1
         * https://github.com/uzairfarooq/arrive
         * MIT licensed
         *
         * Copyright (c) 2014-2017 Uzair Farooq
         */

        var Arrive = function (e, t, n) {
            "use strict";
            function r(e, t, n) {
                l.addMethod(t, n, e.unbindEvent), l.addMethod(t, n, e.unbindEventWithSelectorOrCallback), l.addMethod(t, n, e.unbindEventWithSelectorAndCallback);
            }function i(e) {
                e.arrive = f.bindEvent, r(f, e, "unbindArrive"), e.leave = d.bindEvent, r(d, e, "unbindLeave");
            }if (e.MutationObserver && "undefined" != typeof HTMLElement) {
                var o = 0,
                    l = function () {
                        var t = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;return { matchesSelector: function matchesSelector(e, n) {
                            return e instanceof HTMLElement && t.call(e, n);
                        }, addMethod: function addMethod(e, t, r) {
                            var i = e[t];e[t] = function () {
                                return r.length == arguments.length ? r.apply(this, arguments) : "function" == typeof i ? i.apply(this, arguments) : n;
                            };
                        }, callCallbacks: function callCallbacks(e, t) {
                            t && t.options.onceOnly && 1 == t.firedElems.length && (e = [e[0]]);for (var n, r = 0; n = e[r]; r++) {
                                n && n.callback && n.callback.call(n.elem, n.elem);
                            }t && t.options.onceOnly && 1 == t.firedElems.length && t.me.unbindEventWithSelectorAndCallback.call(t.target, t.selector, t.callback);
                        }, checkChildNodesRecursively: function checkChildNodesRecursively(e, t, n, r) {
                            for (var i, o = 0; i = e[o]; o++) {
                                n(i, t, r) && r.push({ callback: t.callback, elem: i }), i.childNodes.length > 0 && l.checkChildNodesRecursively(i.childNodes, t, n, r);
                            }
                        }, mergeArrays: function mergeArrays(e, t) {
                            var n,
                                r = {};for (n in e) {
                                e.hasOwnProperty(n) && (r[n] = e[n]);
                            }for (n in t) {
                                t.hasOwnProperty(n) && (r[n] = t[n]);
                            }return r;
                        }, toElementsArray: function toElementsArray(t) {
                            return n === t || "number" == typeof t.length && t !== e || (t = [t]), t;
                        } };
                    }(),
                    c = function () {
                        var e = function e() {
                            this._eventsBucket = [], this._beforeAdding = null, this._beforeRemoving = null;
                        };return e.prototype.addEvent = function (e, t, n, r) {
                            var i = { target: e, selector: t, options: n, callback: r, firedElems: [] };return this._beforeAdding && this._beforeAdding(i), this._eventsBucket.push(i), i;
                        }, e.prototype.removeEvent = function (e) {
                            for (var t, n = this._eventsBucket.length - 1; t = this._eventsBucket[n]; n--) {
                                if (e(t)) {
                                    this._beforeRemoving && this._beforeRemoving(t);var r = this._eventsBucket.splice(n, 1);r && r.length && (r[0].callback = null);
                                }
                            }
                        }, e.prototype.beforeAdding = function (e) {
                            this._beforeAdding = e;
                        }, e.prototype.beforeRemoving = function (e) {
                            this._beforeRemoving = e;
                        }, e;
                    }(),
                    a = function a(t, r) {
                        var i = new c(),
                            o = this,
                            a = { fireOnAttributesModification: !1 };return i.beforeAdding(function (n) {
                            var i,
                                l = n.target;(l === e.document || l === e) && (l = document.getElementsByTagName("html")[0]), i = new MutationObserver(function (e) {
                                r.call(this, e, n);
                            });var c = t(n.options);i.observe(l, c), n.observer = i, n.me = o;
                        }), i.beforeRemoving(function (e) {
                            e.observer.disconnect();
                        }), this.bindEvent = function (e, t, n) {
                            t = l.mergeArrays(a, t);for (var r = l.toElementsArray(this), o = 0; o < r.length; o++) {
                                i.addEvent(r[o], e, t, n);
                            }
                        }, this.unbindEvent = function () {
                            var e = l.toElementsArray(this);i.removeEvent(function (t) {
                                for (var r = 0; r < e.length; r++) {
                                    if (this === n || t.target === e[r]) return !0;
                                }return !1;
                            });
                        }, this.unbindEventWithSelectorOrCallback = function (e) {
                            var t,
                                r = l.toElementsArray(this),
                                o = e;t = "function" == typeof e ? function (e) {
                                for (var t = 0; t < r.length; t++) {
                                    if ((this === n || e.target === r[t]) && e.callback === o) return !0;
                                }return !1;
                            } : function (t) {
                                for (var i = 0; i < r.length; i++) {
                                    if ((this === n || t.target === r[i]) && t.selector === e) return !0;
                                }return !1;
                            }, i.removeEvent(t);
                        }, this.unbindEventWithSelectorAndCallback = function (e, t) {
                            var r = l.toElementsArray(this);i.removeEvent(function (i) {
                                for (var o = 0; o < r.length; o++) {
                                    if ((this === n || i.target === r[o]) && i.selector === e && i.callback === t) return !0;
                                }return !1;
                            });
                        }, this;
                    },
                    s = function s() {
                        function e(e) {
                            var t = { attributes: !1, childList: !0, subtree: !0 };return e.fireOnAttributesModification && (t.attributes = !0), t;
                        }function t(e, t) {
                            e.forEach(function (e) {
                                var n = e.addedNodes,
                                    i = e.target,
                                    o = [];null !== n && n.length > 0 ? l.checkChildNodesRecursively(n, t, r, o) : "attributes" === e.type && r(i, t, o) && o.push({ callback: t.callback, elem: i }), l.callCallbacks(o, t);
                            });
                        }function r(e, t) {
                            return l.matchesSelector(e, t.selector) && (e._id === n && (e._id = o++), -1 == t.firedElems.indexOf(e._id)) ? (t.firedElems.push(e._id), !0) : !1;
                        }var i = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };f = new a(e, t);var c = f.bindEvent;return f.bindEvent = function (e, t, r) {
                            n === r ? (r = t, t = i) : t = l.mergeArrays(i, t);var o = l.toElementsArray(this);if (t.existing) {
                                for (var a = [], s = 0; s < o.length; s++) {
                                    for (var u = o[s].querySelectorAll(e), f = 0; f < u.length; f++) {
                                        a.push({ callback: r, elem: u[f] });
                                    }
                                }if (t.onceOnly && a.length) return r.call(a[0].elem, a[0].elem);setTimeout(l.callCallbacks, 1, a);
                            }c.call(this, e, t, r);
                        }, f;
                    },
                    u = function u() {
                        function e() {
                            var e = { childList: !0, subtree: !0 };return e;
                        }function t(e, t) {
                            e.forEach(function (e) {
                                var n = e.removedNodes,
                                    i = [];null !== n && n.length > 0 && l.checkChildNodesRecursively(n, t, r, i), l.callCallbacks(i, t);
                            });
                        }function r(e, t) {
                            return l.matchesSelector(e, t.selector);
                        }var i = {};d = new a(e, t);var o = d.bindEvent;return d.bindEvent = function (e, t, r) {
                            n === r ? (r = t, t = i) : t = l.mergeArrays(i, t), o.call(this, e, t, r);
                        }, d;
                    },
                    f = new s(),
                    d = new u();t && i(t.fn), i(HTMLElement.prototype), i(NodeList.prototype), i(HTMLCollection.prototype), i(HTMLDocument.prototype), i(Window.prototype);var h = {};return r(f, h, "unbindAllArrive"), r(d, h, "unbindAllLeave"), h;
            }
        }(window, "undefined" == typeof jQuery ? null : jQuery, void 0);

        /***/ }),

    /***/ 33:
    /***/ (function(module, exports) {

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        /*!
         * Bootstrap v3.3.7 (http://getbootstrap.com)
         * Copyright 2011-2016 Twitter, Inc.
         * Licensed under the MIT license
         */
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
            "use strict";
            var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
        }(jQuery), +function (a) {
            "use strict";
            function b() {
                var a = document.createElement("bootstrap"),
                    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
                    if (void 0 !== a.style[c]) return { end: b[c] };
                }return !1;
            }a.fn.emulateTransitionEnd = function (b) {
                var c = !1,
                    d = this;a(this).one("bsTransitionEnd", function () {
                    c = !0;
                });var e = function e() {
                    c || a(d).trigger(a.support.transition.end);
                };return setTimeout(e, b), this;
            }, a(function () {
                a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                    if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
                } });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var c = a(this),
                        e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
                });
            }var c = '[data-dismiss="alert"]',
                d = function d(b) {
                    a(b).on("click", c, this.close);
                };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger("closed.bs.alert").remove();
                }var e = a(this),
                    f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
            };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
                return a.fn.alert = e, this;
            }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.button"),
                        f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
                });
            }var c = function c(b, d) {
                this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
            };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
                var c = "disabled",
                    d = this.$element,
                    e = d.is("input") ? "val" : "html",
                    f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
                    d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
                }, this), 0);
            }, c.prototype.toggle = function () {
                var a = !0,
                    b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
                    var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
                return a.fn.button = d, this;
            }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
                var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
                a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.carousel"),
                        f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
                        g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
                });
            }var c = function c(b, _c) {
                this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
            };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {case 37:
                        this.prev();break;case 39:
                        this.next();break;default:
                        return;}a.preventDefault();
                }
            }, c.prototype.cycle = function (b) {
                return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
            }, c.prototype.getItemIndex = function (a) {
                return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
            }, c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b),
                    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
                    f = (c + e) % this.$items.length;return this.$items.eq(f);
            }, c.prototype.to = function (a) {
                var b = this,
                    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    b.to(a);
                }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
            }, c.prototype.pause = function (b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
            }, c.prototype.next = function () {
                if (!this.sliding) return this.slide("next");
            }, c.prototype.prev = function () {
                if (!this.sliding) return this.slide("prev");
            }, c.prototype.slide = function (b, d) {
                var e = this.$element.find(".item.active"),
                    f = d || this.getItemForDirection(b, e),
                    g = this.interval,
                    h = "next" == b ? "left" : "right",
                    i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
                    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                    if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
                    }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                            i.$element.trigger(m);
                        }, 0);
                    }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
                }
            };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
                return a.fn.carousel = d, this;
            };var e = function e(c) {
                var d,
                    e = a(this),
                    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
                    var g = a.extend({}, f.data(), e.data()),
                        h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
                }
            };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);b.call(c, c.data());
                });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                var c,
                    d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
            }function c(b) {
                return this.each(function () {
                    var c = a(this),
                        e = c.data("bs.collapse"),
                        f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
                });
            }var d = function d(b, c) {
                this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
            };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
                var a = this.$element.hasClass("width");return a ? "width" : "height";
            }, d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var b,
                        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                            e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                            };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                        }
                    }
                }
            }, d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                    }
                }
            }, d.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }, d.prototype.getParent = function () {
                return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
                    var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
                }, this)).end();
            }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
            };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
                return a.fn.collapse = e, this;
            }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
                var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
                    g = f.data("bs.collapse"),
                    h = g ? "toggle" : e.data();c.call(f, h);
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
            }function c(c) {
                c && 3 === c.which || (a(e).remove(), a(f).each(function () {
                    var d = a(this),
                        e = b(d),
                        f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
                }));
            }function d(b) {
                return this.each(function () {
                    var c = a(this),
                        d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
                });
            }var e = ".dropdown-backdrop",
                f = '[data-toggle="dropdown"]',
                g = function g(b) {
                    a(b).on("click.bs.dropdown", this.toggle);
                };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
                var e = a(this);if (!e.is(".disabled, :disabled")) {
                    var f = b(e),
                        g = f.hasClass("open");if (c(), !g) {
                        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
                    }return !1;
                }
            }, g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                        var e = b(d),
                            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
                            i = e.find(".dropdown-menu" + h);if (i.length) {
                            var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                        }
                    }
                }
            };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
                return a.fn.dropdown = h, this;
            }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
                a.stopPropagation();
            }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
        }(jQuery), +function (a) {
            "use strict";
            function b(b, d) {
                return this.each(function () {
                    var e = a(this),
                        f = e.data("bs.modal"),
                        g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
                });
            }var c = function c(b, _c2) {
                this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
                    this.$element.trigger("loaded.bs.modal");
                }, this));
            };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a);
            }, c.prototype.show = function (b) {
                var d = this,
                    e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                    });
                }), this.backdrop(function () {
                    var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
                        d.$element.trigger("focus").trigger(f);
                    }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
                }));
            }, c.prototype.hide = function (b) {
                b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
            }, c.prototype.enforceFocus = function () {
                a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
                    document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
                }, this));
            }, c.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
                    27 == a.which && this.hide();
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }, c.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
            }, c.prototype.hideModal = function () {
                var a = this;this.$element.hide(), this.backdrop(function () {
                    a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
                });
            }, c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
            }, c.prototype.backdrop = function (b) {
                var d = this,
                    e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                            return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");var g = function g() {
                        d.removeBackdrop(), b && b();
                    };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
                } else b && b();
            }, c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }, c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
            }, c.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }, c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;if (!a) {
                    var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
                }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
            }, c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
            }, c.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad);
            }, c.prototype.measureScrollbar = function () {
                var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
            };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
                return a.fn.modal = d, this;
            }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
                var d = a(this),
                    e = d.attr("href"),
                    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
                    a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                        d.is(":visible") && d.trigger("focus");
                    });
                }), b.call(f, g, this);
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.tooltip"),
                        f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
                });
            }var c = function c(a, b) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
            };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
                if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                    var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                        var h = "hover" == g ? "mouseenter" : "focusin",
                            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                    }
                }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
            }, c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }, c.prototype.getOptions = function (b) {
                return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
            }, c.prototype.getDelegateOptions = function () {
                var b = {},
                    c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
                    c[a] != d && (b[a] = d);
                }), b;
            }, c.prototype.enter = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                }, c.options.delay.show)) : c.show());
            }, c.prototype.isInStateTrue = function () {
                for (var a in this.inState) {
                    if (this.inState[a]) return !0;
                }return !1;
            }, c.prototype.leave = function (b) {
                var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide();
                }, c.options.delay.hide)) : c.hide();
            }, c.prototype.show = function () {
                var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                        f = this.tip(),
                        g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                        i = /\s?auto?\s?/i,
                        j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
                        l = f[0].offsetWidth,
                        m = f[0].offsetHeight;if (j) {
                        var n = h,
                            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
                    }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
                        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
                    };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
                }
            }, c.prototype.applyPlacement = function (b, c) {
                var d = this.tip(),
                    e = d[0].offsetWidth,
                    f = d[0].offsetHeight,
                    g = parseInt(d.css("margin-top"), 10),
                    h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                    d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
                    j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
                    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                    n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
            }, c.prototype.replaceArrow = function (a, b, c) {
                this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
            }, c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
            }, c.prototype.hide = function (b) {
                function d() {
                    "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
                }var e = this,
                    f = a(this.$tip),
                    g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
            }, c.prototype.fixTitle = function () {
                var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
            }, c.prototype.hasContent = function () {
                return this.getTitle();
            }, c.prototype.getPosition = function (b) {
                b = b || this.$element;var c = b[0],
                    d = "BODY" == c.tagName,
                    e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
                    g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
                    h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
                    i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
            }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
            }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
                    g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll,
                        i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
                } else {
                    var j = b.left - f,
                        k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
                }return e;
            }, c.prototype.getTitle = function () {
                var a,
                    b = this.$element,
                    c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
            }, c.prototype.getUID = function (a) {
                do {
                    a += ~~(1e6 * Math.random());
                } while (document.getElementById(a));return a;
            }, c.prototype.tip = function () {
                if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
            }, c.prototype.enable = function () {
                this.enabled = !0;
            }, c.prototype.disable = function () {
                this.enabled = !1;
            }, c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }, c.prototype.toggle = function (b) {
                var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
            }, c.prototype.destroy = function () {
                var a = this;clearTimeout(this.timeout), this.hide(function () {
                    a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
                });
            };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
                return a.fn.tooltip = d, this;
            };
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.popover"),
                        f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
                });
            }var c = function c(a, b) {
                this.init("popover", a, b);
            };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }, c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
            }, c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }, c.prototype.getContent = function () {
                var a = this.$element,
                    b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
            }, c.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow");
            };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
                return a.fn.popover = d, this;
            };
        }(jQuery), +function (a) {
            "use strict";
            function b(c, d) {
                this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
            }function c(c) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.scrollspy"),
                        f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
                });
            }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }, b.prototype.refresh = function () {
                var b = this,
                    c = "offset",
                    d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var b = a(this),
                        e = b.data("target") || b.attr("href"),
                        f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
                }).sort(function (a, b) {
                    return a[0] - b[0];
                }).each(function () {
                    b.offsets.push(this[0]), b.targets.push(this[1]);
                });
            }, b.prototype.process = function () {
                var a,
                    b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.getScrollHeight(),
                    d = this.options.offset + c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
                    g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
                }
            }, b.prototype.activate = function (b) {
                this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                    d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
            }, b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
                return a.fn.scrollspy = d, this;
            }, a(window).on("load.bs.scrollspy.data-api", function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);c.call(b, b.data());
                });
            });
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
                });
            }var c = function c(b) {
                this.element = a(b);
            };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
                var b = this.element,
                    c = b.closest("ul:not(.dropdown-menu)"),
                    d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                    var e = c.find(".active:last a"),
                        f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                        g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                            e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                        });
                    }
                }
            }, c.prototype.activate = function (b, d, e) {
                function f() {
                    g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
                }var g = d.find("> .active"),
                    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
            };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
                return a.fn.tab = d, this;
            };var e = function e(c) {
                c.preventDefault(), b.call(a(this), "show");
            };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
        }(jQuery), +function (a) {
            "use strict";
            function b(b) {
                return this.each(function () {
                    var d = a(this),
                        e = d.data("bs.affix"),
                        f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
                });
            }var c = function c(b, d) {
                this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
            };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop(),
                    f = this.$element.offset(),
                    g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
                    i = h ? e : f.top,
                    j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
            }, c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
                    b = this.$element.offset();return this.pinnedOffset = b.top - a;
            }, c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }, c.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var b = this.$element.height(),
                        d = this.options.offset,
                        e = d.top,
                        f = d.bottom,
                        g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
                    }"bottom" == h && this.$element.offset({ top: g - b - f });
                }
            };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
                return a.fn.affix = d, this;
            }, a(window).on("load", function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this),
                        d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
                });
            });
        }(jQuery);

        /***/ }),

    /***/ 34:
    /***/ (function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        /* Chartist.js 0.9.4
         * Copyright © 2015 Gion Kunz
         * Free to use under the WTFPL license.
         * http://www.wtfpl.net/
         */

        !function (a, b) {
            true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return a.Chartist = b();
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : a.Chartist = b();
        }(this, function () {
            var a = { version: "0.9.4" };return function (a, b, c) {
                "use strict";
                c.noop = function (a) {
                    return a;
                }, c.alphaNumerate = function (a) {
                    return String.fromCharCode(97 + a % 26);
                }, c.extend = function (a) {
                    a = a || {};var b = Array.prototype.slice.call(arguments, 1);return b.forEach(function (b) {
                        for (var d in b) {
                            "object" != _typeof(b[d]) || null === b[d] || b[d] instanceof Array ? a[d] = b[d] : a[d] = c.extend({}, a[d], b[d]);
                        }
                    }), a;
                }, c.replaceAll = function (a, b, c) {
                    return a.replace(new RegExp(b, "g"), c);
                }, c.stripUnit = function (a) {
                    return "string" == typeof a && (a = a.replace(/[^0-9\+-\.]/g, "")), +a;
                }, c.ensureUnit = function (a, b) {
                    return "number" == typeof a && (a += b), a;
                }, c.querySelector = function (a) {
                    return a instanceof Node ? a : b.querySelector(a);
                }, c.times = function (a) {
                    return Array.apply(null, new Array(a));
                }, c.sum = function (a, b) {
                    return a + (b ? b : 0);
                }, c.mapMultiply = function (a) {
                    return function (b) {
                        return b * a;
                    };
                }, c.mapAdd = function (a) {
                    return function (b) {
                        return b + a;
                    };
                }, c.serialMap = function (a, b) {
                    var d = [],
                        e = Math.max.apply(null, a.map(function (a) {
                            return a.length;
                        }));return c.times(e).forEach(function (c, e) {
                        var f = a.map(function (a) {
                            return a[e];
                        });d[e] = b.apply(null, f);
                    }), d;
                }, c.roundWithPrecision = function (a, b) {
                    var d = Math.pow(10, b || c.precision);return Math.round(a * d) / d;
                }, c.precision = 8, c.escapingMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }, c.serialize = function (a) {
                    return null === a || void 0 === a ? a : ("number" == typeof a ? a = "" + a : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = JSON.stringify({ data: a })), Object.keys(c.escapingMap).reduce(function (a, b) {
                        return c.replaceAll(a, b, c.escapingMap[b]);
                    }, a));
                }, c.deserialize = function (a) {
                    if ("string" != typeof a) return a;a = Object.keys(c.escapingMap).reduce(function (a, b) {
                        return c.replaceAll(a, c.escapingMap[b], b);
                    }, a);try {
                        a = JSON.parse(a), a = void 0 !== a.data ? a.data : a;
                    } catch (b) {}return a;
                }, c.createSvg = function (a, b, d, e) {
                    var f;return b = b || "100%", d = d || "100%", Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function (a) {
                        return a.getAttributeNS("http://www.w3.org/2000/xmlns/", c.xmlNs.prefix);
                    }).forEach(function (b) {
                        a.removeChild(b);
                    }), f = new c.Svg("svg").attr({ width: b, height: d }).addClass(e).attr({ style: "width: " + b + "; height: " + d + ";" }), a.appendChild(f._node), f;
                }, c.reverseData = function (a) {
                    a.labels.reverse(), a.series.reverse();for (var b = 0; b < a.series.length; b++) {
                        "object" == _typeof(a.series[b]) && void 0 !== a.series[b].data ? a.series[b].data.reverse() : a.series[b] instanceof Array && a.series[b].reverse();
                    }
                }, c.getDataArray = function (a, b, d) {
                    function e(a) {
                        if (c.isFalseyButZero(a)) return void 0;if ((a.data || a) instanceof Array) return (a.data || a).map(e);if (a.hasOwnProperty("value")) return e(a.value);if (d) {
                            var b = {};return "string" == typeof d ? b[d] = c.getNumberOrUndefined(a) : b.y = c.getNumberOrUndefined(a), b.x = a.hasOwnProperty("x") ? c.getNumberOrUndefined(a.x) : b.x, b.y = a.hasOwnProperty("y") ? c.getNumberOrUndefined(a.y) : b.y, b;
                        }return c.getNumberOrUndefined(a);
                    }return (b && !a.reversed || !b && a.reversed) && (c.reverseData(a), a.reversed = !a.reversed), a.series.map(e);
                }, c.normalizePadding = function (a, b) {
                    return b = b || 0, "number" == typeof a ? { top: a, right: a, bottom: a, left: a } : { top: "number" == typeof a.top ? a.top : b, right: "number" == typeof a.right ? a.right : b, bottom: "number" == typeof a.bottom ? a.bottom : b, left: "number" == typeof a.left ? a.left : b };
                }, c.getMetaData = function (a, b) {
                    var d = a.data ? a.data[b] : a[b];return d ? c.serialize(d.meta) : void 0;
                }, c.orderOfMagnitude = function (a) {
                    return Math.floor(Math.log(Math.abs(a)) / Math.LN10);
                }, c.projectLength = function (a, b, c) {
                    return b / c.range * a;
                }, c.getAvailableHeight = function (a, b) {
                    return Math.max((c.stripUnit(b.height) || a.height()) - (b.chartPadding.top + b.chartPadding.bottom) - b.axisX.offset, 0);
                }, c.getHighLow = function (a, b, d) {
                    function e(a) {
                        if (void 0 === a) return void 0;if (a instanceof Array) for (var b = 0; b < a.length; b++) {
                            e(a[b]);
                        } else {
                            var c = d ? +a[d] : +a;g && c > f.high && (f.high = c), h && c < f.low && (f.low = c);
                        }
                    }b = c.extend({}, b, d ? b["axis" + d.toUpperCase()] : {});var f = { high: void 0 === b.high ? -Number.MAX_VALUE : +b.high, low: void 0 === b.low ? Number.MAX_VALUE : +b.low },
                        g = void 0 === b.high,
                        h = void 0 === b.low;return (g || h) && e(a), (b.referenceValue || 0 === b.referenceValue) && (f.high = Math.max(b.referenceValue, f.high), f.low = Math.min(b.referenceValue, f.low)), f.high <= f.low && (0 === f.low ? f.high = 1 : f.low < 0 ? f.high = 0 : f.low = 0), f;
                }, c.isNum = function (a) {
                    return !isNaN(a) && isFinite(a);
                }, c.isFalseyButZero = function (a) {
                    return !a && 0 !== a;
                }, c.getNumberOrUndefined = function (a) {
                    return isNaN(+a) ? void 0 : +a;
                }, c.getMultiValue = function (a, b) {
                    return c.isNum(a) ? +a : a ? a[b || "y"] || 0 : 0;
                }, c.rho = function (a) {
                    function b(a, c) {
                        return a % c === 0 ? c : b(c, a % c);
                    }function c(a) {
                        return a * a + 1;
                    }if (1 === a) return a;var d,
                        e = 2,
                        f = 2;if (a % 2 === 0) return 2;do {
                        e = c(e) % a, f = c(c(f)) % a, d = b(Math.abs(e - f), a);
                    } while (1 === d);return d;
                }, c.getBounds = function (a, b, d, e) {
                    var f,
                        g,
                        h,
                        i = 0,
                        j = { high: b.high, low: b.low };j.valueRange = j.high - j.low, j.oom = c.orderOfMagnitude(j.valueRange), j.step = Math.pow(10, j.oom), j.min = Math.floor(j.low / j.step) * j.step, j.max = Math.ceil(j.high / j.step) * j.step, j.range = j.max - j.min, j.numberOfSteps = Math.round(j.range / j.step);var k = c.projectLength(a, j.step, j),
                        l = d > k,
                        m = e ? c.rho(j.range) : 0;if (e && c.projectLength(a, 1, j) >= d) j.step = 1;else if (e && m < j.step && c.projectLength(a, m, j) >= d) j.step = m;else for (;;) {
                        if (l && c.projectLength(a, j.step, j) <= d) j.step *= 2;else {
                            if (l || !(c.projectLength(a, j.step / 2, j) >= d)) break;if (j.step /= 2, e && j.step % 1 !== 0) {
                                j.step *= 2;break;
                            }
                        }if (i++ > 1e3) throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
                    }for (g = j.min, h = j.max; g + j.step <= j.low;) {
                        g += j.step;
                    }for (; h - j.step >= j.high;) {
                        h -= j.step;
                    }for (j.min = g, j.max = h, j.range = j.max - j.min, j.values = [], f = j.min; f <= j.max; f += j.step) {
                        j.values.push(c.roundWithPrecision(f));
                    }return j;
                }, c.polarToCartesian = function (a, b, c, d) {
                    var e = (d - 90) * Math.PI / 180;return { x: a + c * Math.cos(e), y: b + c * Math.sin(e) };
                }, c.createChartRect = function (a, b, d) {
                    var e = !(!b.axisX && !b.axisY),
                        f = e ? b.axisY.offset : 0,
                        g = e ? b.axisX.offset : 0,
                        h = a.width() || c.stripUnit(b.width) || 0,
                        i = a.height() || c.stripUnit(b.height) || 0,
                        j = c.normalizePadding(b.chartPadding, d);h = Math.max(h, f + j.left + j.right), i = Math.max(i, g + j.top + j.bottom);var k = { padding: j, width: function width() {
                        return this.x2 - this.x1;
                    }, height: function height() {
                        return this.y1 - this.y2;
                    } };return e ? ("start" === b.axisX.position ? (k.y2 = j.top + g, k.y1 = Math.max(i - j.bottom, k.y2 + 1)) : (k.y2 = j.top, k.y1 = Math.max(i - j.bottom - g, k.y2 + 1)), "start" === b.axisY.position ? (k.x1 = j.left + f, k.x2 = Math.max(h - j.right, k.x1 + 1)) : (k.x1 = j.left, k.x2 = Math.max(h - j.right - f, k.x1 + 1))) : (k.x1 = j.left, k.x2 = Math.max(h - j.right, k.x1 + 1), k.y2 = j.top, k.y1 = Math.max(i - j.bottom, k.y2 + 1)), k;
                }, c.createGrid = function (a, b, d, e, f, g, h, i) {
                    var j = {};j[d.units.pos + "1"] = a, j[d.units.pos + "2"] = a, j[d.counterUnits.pos + "1"] = e, j[d.counterUnits.pos + "2"] = e + f;var k = g.elem("line", j, h.join(" "));i.emit("draw", c.extend({ type: "grid", axis: d, index: b, group: g, element: k }, j));
                }, c.createLabel = function (a, b, d, e, f, g, h, i, j, k, l) {
                    var m,
                        n = {};if (n[f.units.pos] = a + h[f.units.pos], n[f.counterUnits.pos] = h[f.counterUnits.pos], n[f.units.len] = b, n[f.counterUnits.len] = g - 10, k) {
                        var o = '<span class="' + j.join(" ") + '" style="' + f.units.len + ": " + Math.round(n[f.units.len]) + "px; " + f.counterUnits.len + ": " + Math.round(n[f.counterUnits.len]) + 'px">' + e[d] + "</span>";m = i.foreignObject(o, c.extend({ style: "overflow: visible;" }, n));
                    } else m = i.elem("text", n, j.join(" ")).text(e[d]);l.emit("draw", c.extend({ type: "label", axis: f, index: d, group: i, element: m, text: e[d] }, n));
                }, c.getSeriesOption = function (a, b, c) {
                    if (a.name && b.series && b.series[a.name]) {
                        var d = b.series[a.name];return d.hasOwnProperty(c) ? d[c] : b[c];
                    }return b[c];
                }, c.optionsProvider = function (b, d, e) {
                    function f(b) {
                        var f = h;if (h = c.extend({}, j), d) for (i = 0; i < d.length; i++) {
                            var g = a.matchMedia(d[i][0]);g.matches && (h = c.extend(h, d[i][1]));
                        }e && !b && e.emit("optionsChanged", { previousOptions: f, currentOptions: h });
                    }function g() {
                        k.forEach(function (a) {
                            a.removeListener(f);
                        });
                    }var h,
                        i,
                        j = c.extend({}, b),
                        k = [];if (!a.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill.";if (d) for (i = 0; i < d.length; i++) {
                        var l = a.matchMedia(d[i][0]);l.addListener(f), k.push(l);
                    }return f(!0), { removeMediaQueryListeners: g, getCurrentOptions: function getCurrentOptions() {
                        return c.extend({}, h);
                    } };
                };
            }(window, document, a), function (a, b, c) {
                "use strict";
                c.Interpolation = {}, c.Interpolation.none = function () {
                    return function (a, b) {
                        for (var d = new c.Svg.Path(), e = !0, f = 1; f < a.length; f += 2) {
                            var g = b[(f - 1) / 2];void 0 === g.value ? e = !0 : e ? (d.move(a[f - 1], a[f], !1, g), e = !1) : d.line(a[f - 1], a[f], !1, g);
                        }return d;
                    };
                }, c.Interpolation.simple = function (a) {
                    var b = { divisor: 2 };a = c.extend({}, b, a);var d = 1 / Math.max(1, a.divisor);return function (a, b) {
                        for (var e = new c.Svg.Path(), f = !0, g = 2; g < a.length; g += 2) {
                            var h = a[g - 2],
                                i = a[g - 1],
                                j = a[g],
                                k = a[g + 1],
                                l = (j - h) * d,
                                m = b[g / 2 - 1],
                                n = b[g / 2];void 0 === m.value ? f = !0 : (f && e.move(h, i, !1, m), void 0 !== n.value && (e.curve(h + l, i, j - l, k, j, k, !1, n), f = !1));
                        }return e;
                    };
                }, c.Interpolation.cardinal = function (a) {
                    function b(a, b) {
                        for (var c = [], d = !0, e = 0; e < a.length; e += 2) {
                            void 0 === b[e / 2].value ? d = !0 : (d && (c.push({ pathCoordinates: [], valueData: [] }), d = !1), c[c.length - 1].pathCoordinates.push(a[e], a[e + 1]), c[c.length - 1].valueData.push(b[e / 2]));
                        }return c;
                    }var d = { tension: 1 };a = c.extend({}, d, a);var e = Math.min(1, Math.max(0, a.tension)),
                        f = 1 - e;return function g(a, d) {
                        var h = b(a, d);if (h.length > 1) {
                            var i = [];return h.forEach(function (a) {
                                i.push(g(a.pathCoordinates, a.valueData));
                            }), c.Svg.Path.join(i);
                        }if (a = h[0].pathCoordinates, d = h[0].valueData, a.length <= 4) return c.Interpolation.none()(a, d);for (var j, k = new c.Svg.Path().move(a[0], a[1], !1, d[0]), l = 0, m = a.length; m - 2 * !j > l; l += 2) {
                            var n = [{ x: +a[l - 2], y: +a[l - 1] }, { x: +a[l], y: +a[l + 1] }, { x: +a[l + 2], y: +a[l + 3] }, { x: +a[l + 4], y: +a[l + 5] }];j ? l ? m - 4 === l ? n[3] = { x: +a[0], y: +a[1] } : m - 2 === l && (n[2] = { x: +a[0], y: +a[1] }, n[3] = { x: +a[2], y: +a[3] }) : n[0] = { x: +a[m - 2], y: +a[m - 1] } : m - 4 === l ? n[3] = n[2] : l || (n[0] = { x: +a[l], y: +a[l + 1] }), k.curve(e * (-n[0].x + 6 * n[1].x + n[2].x) / 6 + f * n[2].x, e * (-n[0].y + 6 * n[1].y + n[2].y) / 6 + f * n[2].y, e * (n[1].x + 6 * n[2].x - n[3].x) / 6 + f * n[2].x, e * (n[1].y + 6 * n[2].y - n[3].y) / 6 + f * n[2].y, n[2].x, n[2].y, !1, d[(l + 2) / 2]);
                        }return k;
                    };
                }, c.Interpolation.step = function (a) {
                    var b = { postpone: !0 };return a = c.extend({}, b, a), function (b, d) {
                        for (var e = new c.Svg.Path(), f = !0, g = 2; g < b.length; g += 2) {
                            var h = b[g - 2],
                                i = b[g - 1],
                                j = b[g],
                                k = b[g + 1],
                                l = d[g / 2 - 1],
                                m = d[g / 2];void 0 === l.value ? f = !0 : (f && e.move(h, i, !1, l), void 0 !== m.value && (a.postpone ? e.line(j, i, !1, l) : e.line(h, k, !1, m), e.line(j, k, !1, m), f = !1));
                        }return e;
                    };
                };
            }(window, document, a), function (a, b, c) {
                "use strict";
                c.EventEmitter = function () {
                    function a(a, b) {
                        d[a] = d[a] || [], d[a].push(b);
                    }function b(a, b) {
                        d[a] && (b ? (d[a].splice(d[a].indexOf(b), 1), 0 === d[a].length && delete d[a]) : delete d[a]);
                    }function c(a, b) {
                        d[a] && d[a].forEach(function (a) {
                            a(b);
                        }), d["*"] && d["*"].forEach(function (c) {
                            c(a, b);
                        });
                    }var d = [];return { addEventHandler: a, removeEventHandler: b, emit: c };
                };
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a) {
                    var b = [];if (a.length) for (var c = 0; c < a.length; c++) {
                        b.push(a[c]);
                    }return b;
                }function e(a, b) {
                    var d = b || this.prototype || c.Class,
                        e = Object.create(d);c.Class.cloneDefinitions(e, a);var f = function f() {
                        var a,
                            b = e.constructor || function () {};return a = this === c ? Object.create(e) : this, b.apply(a, Array.prototype.slice.call(arguments, 0)), a;
                    };return f.prototype = e, f["super"] = d, f.extend = this.extend, f;
                }function f() {
                    var a = d(arguments),
                        b = a[0];return a.splice(1, a.length - 1).forEach(function (a) {
                        Object.getOwnPropertyNames(a).forEach(function (c) {
                            delete b[c], Object.defineProperty(b, c, Object.getOwnPropertyDescriptor(a, c));
                        });
                    }), b;
                }c.Class = { extend: e, cloneDefinitions: f };
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, d) {
                    return a && (this.data = a, this.eventEmitter.emit("data", { type: "update", data: this.data })), b && (this.options = c.extend({}, d ? this.options : this.defaultOptions, b), this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = c.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), this;
                }function e() {
                    return this.initializeTimeoutId ? a.clearTimeout(this.initializeTimeoutId) : (a.removeEventListener("resize", this.resizeListener), this.optionsProvider.removeMediaQueryListeners()), this;
                }function f(a, b) {
                    return this.eventEmitter.addEventHandler(a, b), this;
                }function g(a, b) {
                    return this.eventEmitter.removeEventHandler(a, b), this;
                }function h() {
                    a.addEventListener("resize", this.resizeListener), this.optionsProvider = c.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), this.eventEmitter.addEventHandler("optionsChanged", function () {
                        this.update();
                    }.bind(this)), this.options.plugins && this.options.plugins.forEach(function (a) {
                        a instanceof Array ? a[0](this, a[1]) : a(this);
                    }.bind(this)), this.eventEmitter.emit("data", { type: "initial", data: this.data }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = void 0;
                }function i(a, b, d, e, f) {
                    this.container = c.querySelector(a), this.data = b, this.defaultOptions = d, this.options = e, this.responsiveOptions = f, this.eventEmitter = c.EventEmitter(), this.supportsForeignObject = c.Svg.isSupported("Extensibility"), this.supportsAnimations = c.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function () {
                        this.update();
                    }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(h.bind(this), 0);
                }c.Base = c.Class.extend({ constructor: i, optionsProvider: void 0, container: void 0, svg: void 0, eventEmitter: void 0, createChart: function createChart() {
                    throw new Error("Base chart type can't be instantiated!");
                }, update: d, detach: e, on: f, off: g, version: c.version, supportsForeignObject: !1 });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, d, e, f, g) {
                    a instanceof Element ? this._node = a : (this._node = b.createElementNS(z, a), "svg" === a && this._node.setAttributeNS(A, c.xmlNs.qualifiedName, c.xmlNs.uri)), d && this.attr(d), e && this.addClass(e), f && (g && f._node.firstChild ? f._node.insertBefore(this._node, f._node.firstChild) : f._node.appendChild(this._node));
                }function e(a, b) {
                    return "string" == typeof a ? b ? this._node.getAttributeNS(b, a) : this._node.getAttribute(a) : (Object.keys(a).forEach(function (d) {
                        void 0 !== a[d] && (b ? this._node.setAttributeNS(b, [c.xmlNs.prefix, ":", d].join(""), a[d]) : this._node.setAttribute(d, a[d]));
                    }.bind(this)), this);
                }function f(a, b, d, e) {
                    return new c.Svg(a, b, d, this, e);
                }function g() {
                    return this._node.parentNode instanceof SVGElement ? new c.Svg(this._node.parentNode) : null;
                }function h() {
                    for (var a = this._node; "svg" !== a.nodeName;) {
                        a = a.parentNode;
                    }return new c.Svg(a);
                }function i(a) {
                    var b = this._node.querySelector(a);return b ? new c.Svg(b) : null;
                }function j(a) {
                    var b = this._node.querySelectorAll(a);return b.length ? new c.Svg.List(b) : null;
                }function k(a, c, d, e) {
                    if ("string" == typeof a) {
                        var f = b.createElement("div");f.innerHTML = a, a = f.firstChild;
                    }a.setAttribute("xmlns", B);var g = this.elem("foreignObject", c, d, e);return g._node.appendChild(a), g;
                }function l(a) {
                    return this._node.appendChild(b.createTextNode(a)), this;
                }function m() {
                    for (; this._node.firstChild;) {
                        this._node.removeChild(this._node.firstChild);
                    }return this;
                }function n() {
                    return this._node.parentNode.removeChild(this._node), this.parent();
                }function o(a) {
                    return this._node.parentNode.replaceChild(a._node, this._node), a;
                }function p(a, b) {
                    return b && this._node.firstChild ? this._node.insertBefore(a._node, this._node.firstChild) : this._node.appendChild(a._node), this;
                }function q() {
                    return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) : [];
                }function r(a) {
                    return this._node.setAttribute("class", this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function (a, b, c) {
                        return c.indexOf(a) === b;
                    }).join(" ")), this;
                }function s(a) {
                    var b = a.trim().split(/\s+/);return this._node.setAttribute("class", this.classes(this._node).filter(function (a) {
                        return -1 === b.indexOf(a);
                    }).join(" ")), this;
                }function t() {
                    return this._node.setAttribute("class", ""), this;
                }function u(a, b) {
                    try {
                        return a.getBBox()[b];
                    } catch (c) {}return 0;
                }function v() {
                    return this._node.clientHeight || Math.round(u(this._node, "height")) || this._node.parentNode.clientHeight;
                }function w() {
                    return this._node.clientWidth || Math.round(u(this._node, "width")) || this._node.parentNode.clientWidth;
                }function x(a, b, d) {
                    return void 0 === b && (b = !0), Object.keys(a).forEach(function (e) {
                        function f(a, b) {
                            var f,
                                g,
                                h,
                                i = {};a.easing && (h = a.easing instanceof Array ? a.easing : c.Svg.Easing[a.easing], delete a.easing), a.begin = c.ensureUnit(a.begin, "ms"), a.dur = c.ensureUnit(a.dur, "ms"), h && (a.calcMode = "spline", a.keySplines = h.join(" "), a.keyTimes = "0;1"), b && (a.fill = "freeze", i[e] = a.from, this.attr(i), g = c.stripUnit(a.begin || 0), a.begin = "indefinite"), f = this.elem("animate", c.extend({ attributeName: e }, a)), b && setTimeout(function () {
                                try {
                                    f._node.beginElement();
                                } catch (b) {
                                    i[e] = a.to, this.attr(i), f.remove();
                                }
                            }.bind(this), g), d && f._node.addEventListener("beginEvent", function () {
                                d.emit("animationBegin", { element: this, animate: f._node, params: a });
                            }.bind(this)), f._node.addEventListener("endEvent", function () {
                                d && d.emit("animationEnd", { element: this, animate: f._node, params: a }), b && (i[e] = a.to, this.attr(i), f.remove());
                            }.bind(this));
                        }a[e] instanceof Array ? a[e].forEach(function (a) {
                            f.bind(this)(a, !1);
                        }.bind(this)) : f.bind(this)(a[e], b);
                    }.bind(this)), this;
                }function y(a) {
                    var b = this;this.svgElements = [];for (var d = 0; d < a.length; d++) {
                        this.svgElements.push(new c.Svg(a[d]));
                    }Object.keys(c.Svg.prototype).filter(function (a) {
                        return -1 === ["constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width"].indexOf(a);
                    }).forEach(function (a) {
                        b[a] = function () {
                            var d = Array.prototype.slice.call(arguments, 0);return b.svgElements.forEach(function (b) {
                                c.Svg.prototype[a].apply(b, d);
                            }), b;
                        };
                    });
                }var z = "http://www.w3.org/2000/svg",
                    A = "http://www.w3.org/2000/xmlns/",
                    B = "http://www.w3.org/1999/xhtml";c.xmlNs = { qualifiedName: "xmlns:ct", prefix: "ct", uri: "http://gionkunz.github.com/chartist-js/ct" }, c.Svg = c.Class.extend({ constructor: d, attr: e, elem: f, parent: g, root: h, querySelector: i, querySelectorAll: j, foreignObject: k, text: l, empty: m, remove: n, replace: o, append: p, classes: q, addClass: r, removeClass: s, removeAllClasses: t, height: v, width: w, animate: x }), c.Svg.isSupported = function (a) {
                    return b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + a, "1.1");
                };var C = { easeInSine: [.47, 0, .745, .715], easeOutSine: [.39, .575, .565, 1], easeInOutSine: [.445, .05, .55, .95], easeInQuad: [.55, .085, .68, .53], easeOutQuad: [.25, .46, .45, .94], easeInOutQuad: [.455, .03, .515, .955], easeInCubic: [.55, .055, .675, .19], easeOutCubic: [.215, .61, .355, 1], easeInOutCubic: [.645, .045, .355, 1], easeInQuart: [.895, .03, .685, .22], easeOutQuart: [.165, .84, .44, 1], easeInOutQuart: [.77, 0, .175, 1], easeInQuint: [.755, .05, .855, .06], easeOutQuint: [.23, 1, .32, 1], easeInOutQuint: [.86, 0, .07, 1], easeInExpo: [.95, .05, .795, .035], easeOutExpo: [.19, 1, .22, 1], easeInOutExpo: [1, 0, 0, 1], easeInCirc: [.6, .04, .98, .335], easeOutCirc: [.075, .82, .165, 1], easeInOutCirc: [.785, .135, .15, .86], easeInBack: [.6, -.28, .735, .045], easeOutBack: [.175, .885, .32, 1.275], easeInOutBack: [.68, -.55, .265, 1.55] };c.Svg.Easing = C, c.Svg.List = c.Class.extend({ constructor: y });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, d, e, f, g) {
                    var h = c.extend({ command: f ? a.toLowerCase() : a.toUpperCase() }, b, g ? { data: g } : {});d.splice(e, 0, h);
                }function e(a, b) {
                    a.forEach(function (c, d) {
                        u[c.command.toLowerCase()].forEach(function (e, f) {
                            b(c, e, d, f, a);
                        });
                    });
                }function f(a, b) {
                    this.pathElements = [], this.pos = 0, this.close = a, this.options = c.extend({}, v, b);
                }function g(a) {
                    return void 0 !== a ? (this.pos = Math.max(0, Math.min(this.pathElements.length, a)), this) : this.pos;
                }function h(a) {
                    return this.pathElements.splice(this.pos, a), this;
                }function i(a, b, c, e) {
                    return d("M", { x: +a, y: +b }, this.pathElements, this.pos++, c, e), this;
                }function j(a, b, c, e) {
                    return d("L", { x: +a, y: +b }, this.pathElements, this.pos++, c, e), this;
                }function k(a, b, c, e, f, g, h, i) {
                    return d("C", { x1: +a, y1: +b, x2: +c, y2: +e, x: +f, y: +g }, this.pathElements, this.pos++, h, i), this;
                }function l(a, b, c, e, f, g, h, i, j) {
                    return d("A", { rx: +a, ry: +b, xAr: +c, lAf: +e, sf: +f, x: +g, y: +h }, this.pathElements, this.pos++, i, j), this;
                }function m(a) {
                    var b = a.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function (a, b) {
                        return b.match(/[A-Za-z]/) && a.push([]), a[a.length - 1].push(b), a;
                    }, []);"Z" === b[b.length - 1][0].toUpperCase() && b.pop();var d = b.map(function (a) {
                            var b = a.shift(),
                                d = u[b.toLowerCase()];return c.extend({ command: b }, d.reduce(function (b, c, d) {
                                return b[c] = +a[d], b;
                            }, {}));
                        }),
                        e = [this.pos, 0];return Array.prototype.push.apply(e, d), Array.prototype.splice.apply(this.pathElements, e), this.pos += d.length, this;
                }function n() {
                    var a = Math.pow(10, this.options.accuracy);return this.pathElements.reduce(function (b, c) {
                        var d = u[c.command.toLowerCase()].map(function (b) {
                            return this.options.accuracy ? Math.round(c[b] * a) / a : c[b];
                        }.bind(this));return b + c.command + d.join(",");
                    }.bind(this), "") + (this.close ? "Z" : "");
                }function o(a, b) {
                    return e(this.pathElements, function (c, d) {
                        c[d] *= "x" === d[0] ? a : b;
                    }), this;
                }function p(a, b) {
                    return e(this.pathElements, function (c, d) {
                        c[d] += "x" === d[0] ? a : b;
                    }), this;
                }function q(a) {
                    return e(this.pathElements, function (b, c, d, e, f) {
                        var g = a(b, c, d, e, f);(g || 0 === g) && (b[c] = g);
                    }), this;
                }function r(a) {
                    var b = new c.Svg.Path(a || this.close);return b.pos = this.pos, b.pathElements = this.pathElements.slice().map(function (a) {
                        return c.extend({}, a);
                    }), b.options = c.extend({}, this.options), b;
                }function s(a) {
                    var b = [new c.Svg.Path()];return this.pathElements.forEach(function (d) {
                        d.command === a.toUpperCase() && 0 !== b[b.length - 1].pathElements.length && b.push(new c.Svg.Path()), b[b.length - 1].pathElements.push(d);
                    }), b;
                }function t(a, b, d) {
                    for (var e = new c.Svg.Path(b, d), f = 0; f < a.length; f++) {
                        for (var g = a[f], h = 0; h < g.pathElements.length; h++) {
                            e.pathElements.push(g.pathElements[h]);
                        }
                    }return e;
                }var u = { m: ["x", "y"], l: ["x", "y"], c: ["x1", "y1", "x2", "y2", "x", "y"], a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"] },
                    v = { accuracy: 3 };c.Svg.Path = c.Class.extend({ constructor: f, position: g, remove: h, move: i, line: j, curve: k, arc: l, scale: o, translate: p, transform: q, parse: m, stringify: n, clone: r, splitByCommand: s }), c.Svg.Path.elementDescriptions = u, c.Svg.Path.join = t;
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, c, d) {
                    this.units = a, this.counterUnits = a === f.x ? f.y : f.x, this.chartRect = b, this.axisLength = b[a.rectEnd] - b[a.rectStart], this.gridOffset = b[a.rectOffset], this.ticks = c, this.options = d;
                }function e(a, b, d, e, f) {
                    var g = e["axis" + this.units.pos.toUpperCase()],
                        h = this.ticks.map(this.projectValue.bind(this)),
                        i = this.ticks.map(g.labelInterpolationFnc);h.forEach(function (j, k) {
                        var l,
                            m = { x: 0, y: 0 };l = h[k + 1] ? h[k + 1] - j : Math.max(this.axisLength - j, 30), (i[k] || 0 === i[k]) && ("x" === this.units.pos ? (j = this.chartRect.x1 + j, m.x = e.axisX.labelOffset.x, "start" === e.axisX.position ? m.y = this.chartRect.padding.top + e.axisX.labelOffset.y + (d ? 5 : 20) : m.y = this.chartRect.y1 + e.axisX.labelOffset.y + (d ? 5 : 20)) : (j = this.chartRect.y1 - j, m.y = e.axisY.labelOffset.y - (d ? l : 0), "start" === e.axisY.position ? m.x = d ? this.chartRect.padding.left + e.axisY.labelOffset.x : this.chartRect.x1 - 10 : m.x = this.chartRect.x2 + e.axisY.labelOffset.x + 10), g.showGrid && c.createGrid(j, k, this, this.gridOffset, this.chartRect[this.counterUnits.len](), a, [e.classNames.grid, e.classNames[this.units.dir]], f), g.showLabel && c.createLabel(j, l, k, i, this, g.offset, m, b, [e.classNames.label, e.classNames[this.units.dir], e.classNames[g.position]], d, f));
                    }.bind(this));
                }var f = { x: { pos: "x", len: "width", dir: "horizontal", rectStart: "x1", rectEnd: "x2", rectOffset: "y2" }, y: { pos: "y", len: "height", dir: "vertical", rectStart: "y2", rectEnd: "y1", rectOffset: "x1" } };c.Axis = c.Class.extend({ constructor: d, createGridAndLabels: e, projectValue: function projectValue(a, b, c) {
                    throw new Error("Base axis can't be instantiated!");
                } }), c.Axis.units = f;
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, d, e) {
                    var f = e.highLow || c.getHighLow(b.normalized, e, a.pos);this.bounds = c.getBounds(d[a.rectEnd] - d[a.rectStart], f, e.scaleMinSpace || 20, e.onlyInteger), this.range = { min: this.bounds.min, max: this.bounds.max }, c.AutoScaleAxis["super"].constructor.call(this, a, d, this.bounds.values, e);
                }function e(a) {
                    return this.axisLength * (+c.getMultiValue(a, this.units.pos) - this.bounds.min) / this.bounds.range;
                }c.AutoScaleAxis = c.Axis.extend({ constructor: d, projectValue: e });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, d, e) {
                    var f = e.highLow || c.getHighLow(b.normalized, e, a.pos);this.divisor = e.divisor || 1, this.ticks = e.ticks || c.times(this.divisor).map(function (a, b) {
                        return f.low + (f.high - f.low) / this.divisor * b;
                    }.bind(this)), this.range = { min: f.low, max: f.high }, c.FixedScaleAxis["super"].constructor.call(this, a, d, this.ticks, e), this.stepLength = this.axisLength / this.divisor;
                }function e(a) {
                    return this.axisLength * (+c.getMultiValue(a, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
                }c.FixedScaleAxis = c.Axis.extend({ constructor: d, projectValue: e });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, d, e) {
                    c.StepAxis["super"].constructor.call(this, a, d, e.ticks, e), this.stepLength = this.axisLength / (e.ticks.length - (e.stretch ? 1 : 0));
                }function e(a, b) {
                    return this.stepLength * b;
                }c.StepAxis = c.Axis.extend({ constructor: d, projectValue: e });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a) {
                    var b = { raw: this.data, normalized: c.getDataArray(this.data, a.reverseData, !0) };this.svg = c.createSvg(this.container, a.width, a.height, a.classNames.chart);var d,
                        e,
                        g = this.svg.elem("g").addClass(a.classNames.gridGroup),
                        h = this.svg.elem("g"),
                        i = this.svg.elem("g").addClass(a.classNames.labelGroup),
                        j = c.createChartRect(this.svg, a, f.padding);d = void 0 === a.axisX.type ? new c.StepAxis(c.Axis.units.x, b, j, c.extend({}, a.axisX, { ticks: b.raw.labels, stretch: a.fullWidth })) : a.axisX.type.call(c, c.Axis.units.x, b, j, a.axisX), e = void 0 === a.axisY.type ? new c.AutoScaleAxis(c.Axis.units.y, b, j, c.extend({}, a.axisY, { high: c.isNum(a.high) ? a.high : a.axisY.high, low: c.isNum(a.low) ? a.low : a.axisY.low })) : a.axisY.type.call(c, c.Axis.units.y, b, j, a.axisY), d.createGridAndLabels(g, i, this.supportsForeignObject, a, this.eventEmitter), e.createGridAndLabels(g, i, this.supportsForeignObject, a, this.eventEmitter), b.raw.series.forEach(function (f, g) {
                        var i = h.elem("g");i.attr({ "series-name": f.name, meta: c.serialize(f.meta) }, c.xmlNs.uri), i.addClass([a.classNames.series, f.className || a.classNames.series + "-" + c.alphaNumerate(g)].join(" "));var k = [],
                            l = [];b.normalized[g].forEach(function (a, h) {
                            var i = { x: j.x1 + d.projectValue(a, h, b.normalized[g]), y: j.y1 - e.projectValue(a, h, b.normalized[g]) };k.push(i.x, i.y), l.push({ value: a, valueIndex: h, meta: c.getMetaData(f, h) });
                        }.bind(this));var m = { lineSmooth: c.getSeriesOption(f, a, "lineSmooth"), showPoint: c.getSeriesOption(f, a, "showPoint"), showLine: c.getSeriesOption(f, a, "showLine"), showArea: c.getSeriesOption(f, a, "showArea"), areaBase: c.getSeriesOption(f, a, "areaBase") },
                            n = "function" == typeof m.lineSmooth ? m.lineSmooth : m.lineSmooth ? c.Interpolation.cardinal() : c.Interpolation.none(),
                            o = n(k, l);if (m.showPoint && o.pathElements.forEach(function (b) {
                                var h = i.elem("line", { x1: b.x, y1: b.y, x2: b.x + .01, y2: b.y }, a.classNames.point).attr({ value: [b.data.value.x, b.data.value.y].filter(function (a) {
                                    return a;
                                }).join(","), meta: b.data.meta }, c.xmlNs.uri);this.eventEmitter.emit("draw", { type: "point", value: b.data.value, index: b.data.valueIndex, meta: b.data.meta, series: f, seriesIndex: g, axisX: d, axisY: e, group: i, element: h, x: b.x, y: b.y });
                            }.bind(this)), m.showLine) {
                            var p = i.elem("path", { d: o.stringify() }, a.classNames.line, !0);this.eventEmitter.emit("draw", { type: "line", values: b.normalized[g], path: o.clone(), chartRect: j, index: g, series: f, seriesIndex: g, axisX: d, axisY: e, group: i, element: p });
                        }if (m.showArea && e.range) {
                            var q = Math.max(Math.min(m.areaBase, e.range.max), e.range.min),
                                r = j.y1 - e.projectValue(q);o.splitByCommand("M").filter(function (a) {
                                return a.pathElements.length > 1;
                            }).map(function (a) {
                                var b = a.pathElements[0],
                                    c = a.pathElements[a.pathElements.length - 1];return a.clone(!0).position(0).remove(1).move(b.x, r).line(b.x, b.y).position(a.pathElements.length + 1).line(c.x, r);
                            }).forEach(function (h) {
                                var k = i.elem("path", { d: h.stringify() }, a.classNames.area, !0).attr({ values: b.normalized[g] }, c.xmlNs.uri);this.eventEmitter.emit("draw", { type: "area", values: b.normalized[g], path: h.clone(), series: f, seriesIndex: g, axisX: d, axisY: e, chartRect: j, index: g, group: i, element: k });
                            }.bind(this));
                        }
                    }.bind(this)), this.eventEmitter.emit("created", { bounds: e.bounds, chartRect: j, axisX: d, axisY: e, svg: this.svg, options: a });
                }function e(a, b, d, e) {
                    c.Line["super"].constructor.call(this, a, b, f, c.extend({}, f, d), e);
                }var f = { axisX: { offset: 30, position: "end", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: c.noop, type: void 0 }, axisY: { offset: 40, position: "start", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: c.noop, type: void 0, scaleMinSpace: 20, onlyInteger: !1 }, width: void 0, height: void 0, showLine: !0, showPoint: !0, showArea: !1, areaBase: 0, lineSmooth: !0, low: void 0, high: void 0, chartPadding: { top: 15, right: 15, bottom: 5, left: 10 }, fullWidth: !1, reverseData: !1, classNames: { chart: "ct-chart-line", label: "ct-label", labelGroup: "ct-labels", series: "ct-series", line: "ct-line", point: "ct-point", area: "ct-area", grid: "ct-grid", gridGroup: "ct-grids", vertical: "ct-vertical", horizontal: "ct-horizontal", start: "ct-start", end: "ct-end" } };c.Line = c.Base.extend({ constructor: e, createChart: d });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a) {
                    var b,
                        d = { raw: this.data, normalized: a.distributeSeries ? c.getDataArray(this.data, a.reverseData, a.horizontalBars ? "x" : "y").map(function (a) {
                            return [a];
                        }) : c.getDataArray(this.data, a.reverseData, a.horizontalBars ? "x" : "y") };this.svg = c.createSvg(this.container, a.width, a.height, a.classNames.chart + (a.horizontalBars ? " " + a.classNames.horizontalBars : ""));var e = this.svg.elem("g").addClass(a.classNames.gridGroup),
                        g = this.svg.elem("g"),
                        h = this.svg.elem("g").addClass(a.classNames.labelGroup);if (a.stackBars) {
                        var i = c.serialMap(d.normalized, function () {
                            return Array.prototype.slice.call(arguments).map(function (a) {
                                return a;
                            }).reduce(function (a, b) {
                                return { x: a.x + b.x || 0, y: a.y + b.y || 0 };
                            }, { x: 0, y: 0 });
                        });b = c.getHighLow([i], c.extend({}, a, { referenceValue: 0 }), a.horizontalBars ? "x" : "y");
                    } else b = c.getHighLow(d.normalized, c.extend({}, a, { referenceValue: 0 }), a.horizontalBars ? "x" : "y");b.high = +a.high || (0 === a.high ? 0 : b.high), b.low = +a.low || (0 === a.low ? 0 : b.low);var j,
                        k,
                        l,
                        m,
                        n,
                        o = c.createChartRect(this.svg, a, f.padding);k = a.distributeSeries && a.stackBars ? d.raw.labels.slice(0, 1) : d.raw.labels, a.horizontalBars ? (j = m = void 0 === a.axisX.type ? new c.AutoScaleAxis(c.Axis.units.x, d, o, c.extend({}, a.axisX, { highLow: b, referenceValue: 0 })) : a.axisX.type.call(c, c.Axis.units.x, d, o, c.extend({}, a.axisX, { highLow: b, referenceValue: 0 })), l = n = void 0 === a.axisY.type ? new c.StepAxis(c.Axis.units.y, d, o, { ticks: k }) : a.axisY.type.call(c, c.Axis.units.y, d, o, a.axisY)) : (l = m = void 0 === a.axisX.type ? new c.StepAxis(c.Axis.units.x, d, o, { ticks: k }) : a.axisX.type.call(c, c.Axis.units.x, d, o, a.axisX), j = n = void 0 === a.axisY.type ? new c.AutoScaleAxis(c.Axis.units.y, d, o, c.extend({}, a.axisY, { highLow: b, referenceValue: 0 })) : a.axisY.type.call(c, c.Axis.units.y, d, o, c.extend({}, a.axisY, { highLow: b, referenceValue: 0 })));var p = a.horizontalBars ? o.x1 + j.projectValue(0) : o.y1 - j.projectValue(0),
                        q = [];l.createGridAndLabels(e, h, this.supportsForeignObject, a, this.eventEmitter), j.createGridAndLabels(e, h, this.supportsForeignObject, a, this.eventEmitter), d.raw.series.forEach(function (b, e) {
                        var f,
                            h,
                            i = e - (d.raw.series.length - 1) / 2;f = a.distributeSeries && !a.stackBars ? l.axisLength / d.normalized.length / 2 : a.distributeSeries && a.stackBars ? l.axisLength / 2 : l.axisLength / d.normalized[e].length / 2, h = g.elem("g"), h.attr({ "series-name": b.name, meta: c.serialize(b.meta) }, c.xmlNs.uri), h.addClass([a.classNames.series, b.className || a.classNames.series + "-" + c.alphaNumerate(e)].join(" ")), d.normalized[e].forEach(function (g, k) {
                            var r, s, t, u;if (u = a.distributeSeries && !a.stackBars ? e : a.distributeSeries && a.stackBars ? 0 : k, r = a.horizontalBars ? { x: o.x1 + j.projectValue(g && g.x ? g.x : 0, k, d.normalized[e]), y: o.y1 - l.projectValue(g && g.y ? g.y : 0, u, d.normalized[e]) } : { x: o.x1 + l.projectValue(g && g.x ? g.x : 0, u, d.normalized[e]), y: o.y1 - j.projectValue(g && g.y ? g.y : 0, k, d.normalized[e]) }, l instanceof c.StepAxis && (l.options.stretch || (r[l.units.pos] += f * (a.horizontalBars ? -1 : 1)), r[l.units.pos] += a.stackBars || a.distributeSeries ? 0 : i * a.seriesBarDistance * (a.horizontalBars ? -1 : 1)), t = q[k] || p, q[k] = t - (p - r[l.counterUnits.pos]), void 0 !== g) {
                                var v = {};v[l.units.pos + "1"] = r[l.units.pos], v[l.units.pos + "2"] = r[l.units.pos], v[l.counterUnits.pos + "1"] = a.stackBars ? t : p, v[l.counterUnits.pos + "2"] = a.stackBars ? q[k] : r[l.counterUnits.pos], v.x1 = Math.min(Math.max(v.x1, o.x1), o.x2), v.x2 = Math.min(Math.max(v.x2, o.x1), o.x2), v.y1 = Math.min(Math.max(v.y1, o.y2), o.y1), v.y2 = Math.min(Math.max(v.y2, o.y2), o.y1), s = h.elem("line", v, a.classNames.bar).attr({ value: [g.x, g.y].filter(function (a) {
                                    return a;
                                }).join(","), meta: c.getMetaData(b, k) }, c.xmlNs.uri), this.eventEmitter.emit("draw", c.extend({ type: "bar", value: g, index: k, meta: c.getMetaData(b, k), series: b, seriesIndex: e, axisX: m, axisY: n, chartRect: o, group: h, element: s }, v));
                            }
                        }.bind(this));
                    }.bind(this)), this.eventEmitter.emit("created", { bounds: j.bounds, chartRect: o, axisX: m, axisY: n, svg: this.svg, options: a });
                }function e(a, b, d, e) {
                    c.Bar["super"].constructor.call(this, a, b, f, c.extend({}, f, d), e);
                }var f = { axisX: { offset: 30, position: "end", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: c.noop, scaleMinSpace: 30, onlyInteger: !1 }, axisY: { offset: 40, position: "start", labelOffset: { x: 0, y: 0 }, showLabel: !0, showGrid: !0, labelInterpolationFnc: c.noop, scaleMinSpace: 20, onlyInteger: !1 }, width: void 0, height: void 0, high: void 0, low: void 0, onlyInteger: !1, chartPadding: { top: 15, right: 15, bottom: 5, left: 10 }, seriesBarDistance: 15, stackBars: !1, horizontalBars: !1, distributeSeries: !1, reverseData: !1, classNames: { chart: "ct-chart-bar", horizontalBars: "ct-horizontal-bars", label: "ct-label", labelGroup: "ct-labels", series: "ct-series", bar: "ct-bar", grid: "ct-grid", gridGroup: "ct-grids", vertical: "ct-vertical", horizontal: "ct-horizontal", start: "ct-start", end: "ct-end" } };c.Bar = c.Base.extend({ constructor: e, createChart: d });
            }(window, document, a), function (a, b, c) {
                "use strict";
                function d(a, b, c) {
                    var d = b.x > a.x;return d && "explode" === c || !d && "implode" === c ? "start" : d && "implode" === c || !d && "explode" === c ? "end" : "middle";
                }function e(a) {
                    var b,
                        e,
                        f,
                        h,
                        i,
                        j = [],
                        k = a.startAngle,
                        l = c.getDataArray(this.data, a.reverseData);this.svg = c.createSvg(this.container, a.width, a.height, a.donut ? a.classNames.chartDonut : a.classNames.chartPie), e = c.createChartRect(this.svg, a, g.padding), f = Math.min(e.width() / 2, e.height() / 2), i = a.total || l.reduce(function (a, b) {
                        return a + b;
                    }, 0), f -= a.donut ? a.donutWidth / 2 : 0, h = "outside" === a.labelPosition || a.donut ? f : "center" === a.labelPosition ? 0 : f / 2, h += a.labelOffset;var m = { x: e.x1 + e.width() / 2, y: e.y2 + e.height() / 2 },
                        n = 1 === this.data.series.filter(function (a) {
                            return a.hasOwnProperty("value") ? 0 !== a.value : 0 !== a;
                        }).length;a.showLabel && (b = this.svg.elem("g", null, null, !0));for (var o = 0; o < this.data.series.length; o++) {
                        var p = this.data.series[o];j[o] = this.svg.elem("g", null, null, !0), j[o].attr({ "series-name": p.name }, c.xmlNs.uri), j[o].addClass([a.classNames.series, p.className || a.classNames.series + "-" + c.alphaNumerate(o)].join(" "));var q = k + l[o] / i * 360;q - k === 360 && (q -= .01);var r = c.polarToCartesian(m.x, m.y, f, k - (0 === o || n ? 0 : .2)),
                            s = c.polarToCartesian(m.x, m.y, f, q),
                            t = new c.Svg.Path(!a.donut).move(s.x, s.y).arc(f, f, 0, q - k > 180, 0, r.x, r.y);a.donut || t.line(m.x, m.y);var u = j[o].elem("path", { d: t.stringify() }, a.donut ? a.classNames.sliceDonut : a.classNames.slicePie);if (u.attr({ value: l[o], meta: c.serialize(p.meta) }, c.xmlNs.uri), a.donut && u.attr({ style: "stroke-width: " + +a.donutWidth + "px" }), this.eventEmitter.emit("draw", { type: "slice", value: l[o], totalDataSum: i, index: o, meta: p.meta, series: p, group: j[o], element: u, path: t.clone(), center: m, radius: f, startAngle: k, endAngle: q }), a.showLabel) {
                            var v = c.polarToCartesian(m.x, m.y, h, k + (q - k) / 2),
                                w = a.labelInterpolationFnc(this.data.labels ? this.data.labels[o] : l[o], o);if (w || 0 === w) {
                                var x = b.elem("text", { dx: v.x, dy: v.y, "text-anchor": d(m, v, a.labelDirection) }, a.classNames.label).text("" + w);this.eventEmitter.emit("draw", { type: "label", index: o, group: b, element: x, text: "" + w, x: v.x, y: v.y });
                            }
                        }k = q;
                    }this.eventEmitter.emit("created", { chartRect: e, svg: this.svg, options: a });
                }function f(a, b, d, e) {
                    c.Pie["super"].constructor.call(this, a, b, g, c.extend({}, g, d), e);
                }var g = { width: void 0, height: void 0, chartPadding: 5, classNames: { chartPie: "ct-chart-pie", chartDonut: "ct-chart-donut", series: "ct-series", slicePie: "ct-slice-pie", sliceDonut: "ct-slice-donut", label: "ct-label" }, startAngle: 0, total: void 0, donut: !1, donutWidth: 60, showLabel: !0, labelOffset: 0, labelPosition: "inside", labelInterpolationFnc: c.noop, labelDirection: "neutral", reverseData: !1 };c.Pie = c.Base.extend({ constructor: f, createChart: e, determineAnchorPosition: d });
            }(window, document, a), a;
        });
//# sourceMappingURL=chartist.min.js.map

        /***/ }),

    /***/ 35:
    /***/ (function(module, exports) {

        /*!

         =========================================================
         * Material Dashboard - v1.2.0
         =========================================================

         * Product Page: http://www.creative-tim.com/product/material-dashboard
         * Copyright 2017 Creative Tim (http://www.creative-tim.com)
         * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard/blob/master/LICENSE.md)

         =========================================================

         * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

         */

        (function () {
            isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

            if (isWindows) {
                // if we are on windows OS we activate the perfectScrollbar function
                $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

                $('html').addClass('perfect-scrollbar-on');
            } else {
                $('html').addClass('perfect-scrollbar-off');
            }
        })();

        var searchVisible = 0;
        var transparent = true;

        var transparentDemo = true;
        var fixedTop = false;

        var mobile_menu_visible = 0,
            mobile_menu_initialized = false,
            toggle_initialized = false,
            bootstrap_nav_initialized = false;

        var seq = 0,
            delays = 80,
            durations = 500;
        var seq2 = 0,
            delays2 = 80,
            durations2 = 500;

        $(document).ready(function () {

            $sidebar = $('.sidebar');

            $.material.init();

            window_width = $(window).width();

            md.initSidebarsCheck();

            // check if there is an image set for the sidebar's background
            md.checkSidebarImage();

            //  Activate the tooltips
            $('[rel="tooltip"]').tooltip();

            $('.form-control').on("focus", function () {
                $(this).parent('.input-group').addClass("input-group-focus");
            }).on("blur", function () {
                $(this).parent(".input-group").removeClass("input-group-focus");
            });
        });

        $(document).on('click', '.navbar-toggle', function () {
            $toggle = $(this);

            if (mobile_menu_visible == 1) {
                $('html').removeClass('nav-open');

                $('.close-layer').remove();
                setTimeout(function () {
                    $toggle.removeClass('toggled');
                }, 400);

                mobile_menu_visible = 0;
            } else {
                setTimeout(function () {
                    $toggle.addClass('toggled');
                }, 430);

                div = '<div id="bodyClick"></div>';
                $(div).appendTo('body').click(function () {
                    $('html').removeClass('nav-open');
                    mobile_menu_visible = 0;
                    setTimeout(function () {
                        $toggle.removeClass('toggled');
                        $('#bodyClick').remove();
                    }, 550);
                });

                $('html').addClass('nav-open');
                mobile_menu_visible = 1;
            }
        });

// activate collapse right menu when the windows is resized
        $(window).resize(function () {
            md.initSidebarsCheck();
            // reset the seq for charts drawing animations
            seq = seq2 = 0;
        });

        md = {
            misc: {
                navbar_menu_visible: 0,
                active_collapse: true,
                disabled_collapse_init: 0
            },

            checkSidebarImage: function checkSidebarImage() {
                $sidebar = $('.sidebar');
                image_src = $sidebar.data('image');

                if (image_src !== undefined) {
                    sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
                    $sidebar.append(sidebar_container);
                }
            },

            checkScrollForTransparentNavbar: debounce(function () {
                if ($(document).scrollTop() > 260) {
                    if (transparent) {
                        transparent = false;
                        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                    }
                } else {
                    if (!transparent) {
                        transparent = true;
                        $('.navbar-color-on-scroll').addClass('navbar-transparent');
                    }
                }
            }, 17),

            initSidebarsCheck: function initSidebarsCheck() {
                if ($(window).width() <= 991) {
                    if ($sidebar.length != 0) {
                        md.initRightMenu();
                    }
                }
            },

            initRightMenu: debounce(function () {
                $sidebar_wrapper = $('.sidebar-wrapper');

                if (!mobile_menu_initialized) {
                    $navbar = $('nav').find('.navbar-collapse').children('.navbar-nav.navbar-right');

                    mobile_menu_content = '';

                    nav_content = $navbar.html();

                    nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

                    navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

                    $sidebar_nav = $sidebar_wrapper.find(' > .nav');

                    // insert the navbar form before the sidebar list
                    $nav_content = $(nav_content);
                    $navbar_form = $(navbar_form);
                    $nav_content.insertBefore($sidebar_nav);
                    $navbar_form.insertBefore($nav_content);

                    $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function (event) {
                        event.stopPropagation();
                    });

                    // simulate resize so all the charts/maps will be redrawn
                    window.dispatchEvent(new Event('resize'));

                    mobile_menu_initialized = true;
                } else {
                    if ($(window).width() > 991) {
                        // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                        $sidebar_wrapper.find('.navbar-form').remove();
                        $sidebar_wrapper.find('.nav-mobile-menu').remove();

                        mobile_menu_initialized = false;
                    }
                }
            }, 200),

            startAnimationForLineChart: function startAnimationForLineChart(chart) {

                chart.on('draw', function (data) {
                    if (data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                                begin: 600,
                                dur: 700,
                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                to: data.path.clone().stringify(),
                                easing: Chartist.Svg.Easing.easeOutQuint
                            }
                        });
                    } else if (data.type === 'point') {
                        seq++;
                        data.element.animate({
                            opacity: {
                                begin: seq * delays,
                                dur: durations,
                                from: 0,
                                to: 1,
                                easing: 'ease'
                            }
                        });
                    }
                });

                seq = 0;
            },
            startAnimationForBarChart: function startAnimationForBarChart(chart) {

                chart.on('draw', function (data) {
                    if (data.type === 'bar') {
                        seq2++;
                        data.element.animate({
                            opacity: {
                                begin: seq2 * delays2,
                                dur: durations2,
                                from: 0,
                                to: 1,
                                easing: 'ease'
                            }
                        });
                    }
                });

                seq2 = 0;
            }

            // Returns a function, that, as long as it continues to be invoked, will not
            // be triggered. The function will be called after it stops being called for
            // N milliseconds. If `immediate` is passed, trigger the function on the
            // leading edge, instead of the trailing.

        };function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        };

        /***/ }),

    /***/ 36:
    /***/ (function(module, exports) {

        !function (t) {
            function o(t) {
                return "undefined" == typeof t.which ? !0 : "number" == typeof t.which && t.which > 0 ? !t.ctrlKey && !t.metaKey && !t.altKey && 8 != t.which && 9 != t.which && 13 != t.which && 16 != t.which && 17 != t.which && 20 != t.which && 27 != t.which : !1;
            }function i(o) {
                var i = t(o);i.prop("disabled") || i.closest(".form-group").addClass("is-focused");
            }function n(o) {
                o.closest("label").hover(function () {
                    var o = t(this).find("input");o.prop("disabled") || i(o);
                }, function () {
                    e(t(this).find("input"));
                });
            }function e(o) {
                t(o).closest(".form-group").removeClass("is-focused");
            }t.expr[":"].notmdproc = function (o) {
                return t(o).data("mdproc") ? !1 : !0;
            }, t.material = { options: { validate: !0, input: !0, ripples: !0, checkbox: !0, togglebutton: !0, radio: !0, arrive: !0, autofill: !1, withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".footer a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","), inputElements: "input.form-control, textarea.form-control, select.form-control", checkboxElements: ".checkbox > label > input[type=checkbox]", togglebuttonElements: ".togglebutton > label > input[type=checkbox]", radioElements: ".radio > label > input[type=radio]" }, checkbox: function checkbox(o) {
                var i = t(o ? o : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>");n(i);
            }, togglebutton: function togglebutton(o) {
                var i = t(o ? o : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>");n(i);
            }, radio: function radio(o) {
                var i = t(o ? o : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>");n(i);
            }, input: function input(o) {
                t(o ? o : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function () {
                    var o = t(this),
                        i = o.closest(".form-group");0 === i.length && (o.wrap("<div class='form-group'></div>"), i = o.closest(".form-group")), o.attr("data-hint") && (o.after("<p class='help-block'>" + o.attr("data-hint") + "</p>"), o.removeAttr("data-hint"));var n = { "input-lg": "form-group-lg", "input-sm": "form-group-sm" };if (t.each(n, function (t, n) {
                            o.hasClass(t) && (o.removeClass(t), i.addClass(n));
                        }), o.hasClass("floating-label")) {
                        var e = o.attr("placeholder");o.attr("placeholder", null).removeClass("floating-label");var a = o.attr("id"),
                            r = "";a && (r = "for='" + a + "'"), i.addClass("label-floating"), o.after("<label " + r + "class='control-label'>" + e + "</label>");
                    }(null === o.val() || "undefined" == o.val() || "" === o.val()) && i.addClass("is-empty"), i.append("<span class='material-input'></span>"), i.find("input[type=file]").length > 0 && i.addClass("is-fileinput");
                });
            }, attachInputEventHandlers: function attachInputEventHandlers() {
                var n = this.options.validate;t(document).on("change", ".checkbox input[type=checkbox]", function () {
                    t(this).blur();
                }).on("keydown paste", ".form-control", function (i) {
                    o(i) && t(this).closest(".form-group").removeClass("is-empty");
                }).on("keyup change", ".form-control", function () {
                    var o = t(this),
                        i = o.closest(".form-group"),
                        e = "undefined" == typeof o[0].checkValidity || o[0].checkValidity();"" === o.val() ? i.addClass("is-empty") : i.removeClass("is-empty"), n && (e ? i.removeClass("has-error") : i.addClass("has-error"));
                }).on("focus", ".form-control, .form-group.is-fileinput", function () {
                    i(this);
                }).on("blur", ".form-control, .form-group.is-fileinput", function () {
                    e(this);
                }).on("change", ".form-group input", function () {
                    var o = t(this);if ("file" != o.attr("type")) {
                        var i = o.closest(".form-group"),
                            n = o.val();n ? i.removeClass("is-empty") : i.addClass("is-empty");
                    }
                }).on("change", ".form-group.is-fileinput input[type='file']", function () {
                    var o = t(this),
                        i = o.closest(".form-group"),
                        n = "";t.each(this.files, function (t, o) {
                        n += o.name + ", ";
                    }), n = n.substring(0, n.length - 2), n ? i.removeClass("is-empty") : i.addClass("is-empty"), i.find("input.form-control[readonly]").val(n);
                });
            }, ripples: function ripples(o) {
                t(o ? o : this.options.withRipples).ripples();
            }, autofill: function autofill() {
                var o = setInterval(function () {
                    t("input[type!=checkbox]").each(function () {
                        var o = t(this);o.val() && o.val() !== o.attr("value") && o.trigger("change");
                    });
                }, 100);setTimeout(function () {
                    clearInterval(o);
                }, 1e4);
            }, attachAutofillEventHandlers: function attachAutofillEventHandlers() {
                var o;t(document).on("focus", "input", function () {
                    var i = t(this).parents("form").find("input").not("[type=file]");o = setInterval(function () {
                        i.each(function () {
                            var o = t(this);o.val() !== o.attr("value") && o.trigger("change");
                        });
                    }, 100);
                }).on("blur", ".form-group input", function () {
                    clearInterval(o);
                });
            }, init: function init(o) {
                this.options = t.extend({}, this.options, o);var i = t(document);t.fn.ripples && this.options.ripples && this.ripples(), this.options.input && (this.input(), this.attachInputEventHandlers()), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && (this.autofill(), this.attachAutofillEventHandlers()), document.arrive && this.options.arrive && (t.fn.ripples && this.options.ripples && i.arrive(this.options.withRipples, function () {
                    t.material.ripples(t(this));
                }), this.options.input && i.arrive(this.options.inputElements, function () {
                    t.material.input(t(this));
                }), this.options.checkbox && i.arrive(this.options.checkboxElements, function () {
                    t.material.checkbox(t(this));
                }), this.options.radio && i.arrive(this.options.radioElements, function () {
                    t.material.radio(t(this));
                }), this.options.togglebutton && i.arrive(this.options.togglebuttonElements, function () {
                    t.material.togglebutton(t(this));
                }));
            } };
        }(jQuery), function (t, o, i, n) {
            "use strict";
            function e(o, i) {
                r = this, this.element = t(o), this.options = t.extend({}, s, i), this._defaults = s, this._name = a, this.init();
            }var a = "ripples",
                r = null,
                s = {};e.prototype.init = function () {
                var i = this.element;i.on("mousedown touchstart", function (n) {
                    if (!r.isTouch() || "mousedown" !== n.type) {
                        i.find(".ripple-container").length || i.append('<div class="ripple-container"></div>');var e = i.children(".ripple-container"),
                            a = r.getRelY(e, n),
                            s = r.getRelX(e, n);if (a || s) {
                            var l = r.getRipplesColor(i),
                                p = t("<div></div>");p.addClass("ripple").css({ left: s, top: a, "background-color": l }), e.append(p), function () {
                                return o.getComputedStyle(p[0]).opacity;
                            }(), r.rippleOn(i, p), setTimeout(function () {
                                r.rippleEnd(p);
                            }, 500), i.on("mouseup mouseleave touchend", function () {
                                p.data("mousedown", "off"), "off" === p.data("animating") && r.rippleOut(p);
                            });
                        }
                    }
                });
            }, e.prototype.getNewSize = function (t, o) {
                return Math.max(t.outerWidth(), t.outerHeight()) / o.outerWidth() * 2.5;
            }, e.prototype.getRelX = function (t, o) {
                var i = t.offset();return r.isTouch() ? (o = o.originalEvent, 1 === o.touches.length ? o.touches[0].pageX - i.left : !1) : o.pageX - i.left;
            }, e.prototype.getRelY = function (t, o) {
                var i = t.offset();return r.isTouch() ? (o = o.originalEvent, 1 === o.touches.length ? o.touches[0].pageY - i.top : !1) : o.pageY - i.top;
            }, e.prototype.getRipplesColor = function (t) {
                var i = t.data("ripple-color") ? t.data("ripple-color") : o.getComputedStyle(t[0]).color;return i;
            }, e.prototype.hasTransitionSupport = function () {
                var t = i.body || i.documentElement,
                    o = t.style,
                    e = o.transition !== n || o.WebkitTransition !== n || o.MozTransition !== n || o.MsTransition !== n || o.OTransition !== n;return e;
            }, e.prototype.isTouch = function () {
                return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                );
            }, e.prototype.rippleEnd = function (t) {
                t.data("animating", "off"), "off" === t.data("mousedown") && r.rippleOut(t);
            }, e.prototype.rippleOut = function (t) {
                t.off(), r.hasTransitionSupport() ? t.addClass("ripple-out") : t.animate({ opacity: 0 }, 100, function () {
                    t.trigger("transitionend");
                }), t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    t.remove();
                });
            }, e.prototype.rippleOn = function (t, o) {
                var i = r.getNewSize(t, o);r.hasTransitionSupport() ? o.css({ "-ms-transform": "scale(" + i + ")", "-moz-transform": "scale(" + i + ")", "-webkit-transform": "scale(" + i + ")", transform: "scale(" + i + ")" }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : o.animate({ width: 2 * Math.max(t.outerWidth(), t.outerHeight()), height: 2 * Math.max(t.outerWidth(), t.outerHeight()), "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()), "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()), opacity: .2 }, 500, function () {
                    o.trigger("transitionend");
                });
            }, t.fn.ripples = function (o) {
                return this.each(function () {
                    t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new e(this, o));
                });
            };
        }(jQuery, window, document);

        /***/ }),

    /***/ 67:
    /***/ (function(module, exports, __webpack_require__) {

        __webpack_require__(33);
        __webpack_require__(36);
        __webpack_require__(34);
        __webpack_require__(32);
        module.exports = __webpack_require__(35);


        /***/ })

    /******/ });