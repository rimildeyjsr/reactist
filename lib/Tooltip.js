!(function(t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e(
              require('prop-types'),
              require('react'),
              require('classnames')
          ))
        : 'function' == typeof define && define.amd
        ? define('reactist', ['prop-types', 'react', 'classnames'], e)
        : 'object' == typeof exports
        ? (exports.reactist = e(
              require('prop-types'),
              require('react'),
              require('classnames')
          ))
        : (t.reactist = e(t['prop-types'], t.React, t.classnames))
})(window, function(t, e, o) {
    return (function(t) {
        var e = {}
        function o(n) {
            if (e[n]) return e[n].exports
            var r = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
        }
        return (
            (o.m = t),
            (o.c = e),
            (o.d = function(t, e, n) {
                o.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: n })
            }),
            (o.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (o.t = function(t, e) {
                if ((1 & e && (t = o(t)), 8 & e)) return t
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t
                var n = Object.create(null)
                if (
                    (o.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var r in t)
                        o.d(
                            n,
                            r,
                            function(e) {
                                return t[e]
                            }.bind(null, r)
                        )
                return n
            }),
            (o.n = function(t) {
                var e =
                    t && t.__esModule
                        ? function() {
                              return t.default
                          }
                        : function() {
                              return t
                          }
                return o.d(e, 'a', e), e
            }),
            (o.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (o.p = ''),
            o((o.s = 5))
        )
    })([
        function(e, o) {
            e.exports = t
        },
        function(t, o) {
            t.exports = e
        },
        function(t, e) {
            t.exports = o
        },
        ,
        ,
        function(t, e, o) {
            'use strict'
            o.r(e)
            o(6)
            var n = o(1),
                r = o.n(n),
                i = o(0),
                a = o.n(i),
                l = o(2),
                s = o.n(l),
                u = function(t, e, o, n, r) {
                    var i =
                            arguments.length > 5 && void 0 !== arguments[5]
                                ? arguments[5]
                                : 0,
                        a = t.height,
                        l = t.width,
                        s = e.height,
                        u = e.width,
                        f = o.height,
                        h = o.width,
                        d = n.x,
                        y = n.y,
                        m = p(n, o, e),
                        b = c(n, o, e),
                        g = m >= 0 && m + u <= l,
                        v = b >= 0 && b + s <= a
                    return 'top' === r
                        ? g && y - s - i >= 0
                        : 'right' === r
                        ? v && d + h + u + i <= l
                        : 'left' === r
                        ? v && d - u - i >= 0
                        : 'bottom' === r && (g && y + f + s + i <= a)
                },
                p = function(t, e, o) {
                    return t.x + (e.width - o.width) / 2
                },
                c = function(t, e, o) {
                    return t.y + (e.height - o.height) / 2
                },
                f = function(t, e, o, n) {
                    var r =
                        arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 0
                    return 'top' === t
                        ? (function(t, e, o) {
                              var n =
                                  arguments.length > 3 &&
                                  void 0 !== arguments[3]
                                      ? arguments[3]
                                      : 0
                              return { x: p(e, t, o), y: e.y - o.height - n }
                          })(e, o, n, r)
                        : 'right' === t
                        ? (function(t, e, o) {
                              var n =
                                  arguments.length > 3 &&
                                  void 0 !== arguments[3]
                                      ? arguments[3]
                                      : 0
                              return { x: e.x + t.width + n, y: c(e, t, o) }
                          })(e, o, n, r)
                        : 'bottom' === t
                        ? (function(t, e, o) {
                              var n =
                                  arguments.length > 3 &&
                                  void 0 !== arguments[3]
                                      ? arguments[3]
                                      : 0
                              return { x: p(e, t, o), y: e.y + t.height + n }
                          })(e, o, n, r)
                        : 'left' === t
                        ? (function(t, e, o) {
                              var n =
                                  arguments.length > 3 &&
                                  void 0 !== arguments[3]
                                      ? arguments[3]
                                      : 0
                              return { x: e.x - o.width - n, y: c(e, t, o) }
                          })(e, o, n, r)
                        : o
                }
            function h(t) {
                return (h =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t
                          }
                        : function(t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t
                          })(t)
            }
            function d(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o]
                    ;(n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        'value' in n && (n.writable = !0),
                        Object.defineProperty(t, n.key, n)
                }
            }
            function y(t) {
                return (y = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function m(t, e) {
                return (m =
                    Object.setPrototypeOf ||
                    function(t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function b(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    )
                return t
            }
            function g(t, e, o) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = o),
                    t
                )
            }
            var v = (function(t) {
                function e(t, o) {
                    var n
                    return (
                        (function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                )
                        })(this, e),
                        g(
                            b(
                                b(
                                    (n = (function(t, e) {
                                        return !e ||
                                            ('object' !== h(e) &&
                                                'function' != typeof e)
                                            ? b(t)
                                            : e
                                    })(this, y(e).call(this, t, o)))
                                )
                            ),
                            '_show',
                            function() {
                                n._delayAction(function() {
                                    n.setState(function() {
                                        return { visible: !0 }
                                    }),
                                        n.props.hideOnScroll &&
                                            n._initScrollListener()
                                }, n.props.delayShow)
                            }
                        ),
                        g(b(b(n)), '_hide', function() {
                            n._delayAction(function() {
                                n._clearDelayTimeout(),
                                    n.setState(function() {
                                        return { visible: !1 }
                                    }),
                                    n.props.hideOnScroll &&
                                        n._removeScrollListener()
                            }, n.props.delayHide)
                        }),
                        g(b(b(n)), '_updateTooltipPosition', function() {
                            for (
                                var t = n.props,
                                    e = t.position,
                                    o = t.allowVaguePositioning,
                                    r = t.gapSize,
                                    i = n.wrapper.getBoundingClientRect(),
                                    a = n.tooltip.getBoundingClientRect(),
                                    l = document.documentElement,
                                    s = n.wrapper,
                                    p = !1;
                                !p;

                            ) {
                                'absolute' !==
                                    getComputedStyle(s).getPropertyValue(
                                        'position'
                                    ) &&
                                s !== l &&
                                s.parentElement
                                    ? (s = s.parentElement)
                                    : (p = !0)
                            }
                            for (
                                var c = s.getBoundingClientRect(),
                                    h = { height: c.height, width: c.width },
                                    d = { height: a.height, width: a.width },
                                    y = { height: i.height, width: i.width },
                                    m = {
                                        x: i.left - c.left,
                                        y: i.top - c.top
                                    },
                                    b = { x: i.left, y: i.top },
                                    g =
                                        'auto' === e
                                            ? [
                                                  'top',
                                                  'right',
                                                  'bottom',
                                                  'left',
                                                  'top'
                                              ]
                                            : [e],
                                    v = 0;
                                v < g.length;
                                v++
                            ) {
                                var w = g[v]
                                if (u(h, d, y, m, w, r) || v === g.length - 1) {
                                    var _ = f(w, y, b, d, r)
                                    ;(n.tooltip.style.top = ''.concat(
                                        _.y,
                                        'px'
                                    )),
                                        (n.tooltip.style.left =
                                            _.x < 0 && o
                                                ? ''.concat(2 * r, 'px')
                                                : ''.concat(_.x, 'px')),
                                        w !== e &&
                                            (n.tooltip.className = n._getClassNameForPosition(
                                                w
                                            ))
                                    break
                                }
                            }
                        }),
                        g(b(b(n)), '_getClassNameForPosition', function(t) {
                            var e = n.state.visible,
                                o = n.props,
                                r = o.tooltipClassName,
                                i = o.inverted,
                                a = s()(
                                    'reactist tooltip',
                                    { visible: e, inverted: i },
                                    r
                                )
                            return e
                                ? s()(a, {
                                      arrow_top: 'bottom' === t,
                                      arrow_right: 'left' === t,
                                      arrow_bottom: 'auto' === t || 'top' === t,
                                      arrow_left: 'right' === t
                                  })
                                : a
                        }),
                        (n.state = { visible: !1 }),
                        n
                    )
                }
                return (
                    (function(t, e) {
                        if ('function' != typeof e && null !== e)
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            )
                        ;(t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            e && m(t, e)
                    })(e, r.a.Component),
                    (function(t, e, o) {
                        e && d(t.prototype, e), o && d(t, o)
                    })(e, [
                        {
                            key: 'shouldComponentUpdate',
                            value: function(t, e) {
                                return (
                                    this.state.visible !== e.visible ||
                                    this.props.position !== t.position ||
                                    this.props.text !== t.text ||
                                    this.props.hideOnScroll !==
                                        t.hideOnScroll ||
                                    this.props.delayShow !== t.delayShow ||
                                    this.props.delayHide !== t.delayHide ||
                                    this.props.gapSize !== t.gapSize ||
                                    this.props.children !== t.children
                                )
                            }
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function() {
                                this.wrapper &&
                                    this.state.visible &&
                                    this._updateTooltipPosition()
                            }
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function() {
                                this._clearDelayTimeout(),
                                    this._removeScrollListener()
                            }
                        },
                        {
                            key: '_initScrollListener',
                            value: function() {
                                document.addEventListener(
                                    'scroll',
                                    this._hide,
                                    !0
                                )
                            }
                        },
                        {
                            key: '_removeScrollListener',
                            value: function() {
                                document.removeEventListener(
                                    'scroll',
                                    this._hide,
                                    !0
                                )
                            }
                        },
                        {
                            key: '_clearDelayTimeout',
                            value: function() {
                                this.delayTimeout &&
                                    clearTimeout(this.delayTimeout)
                            }
                        },
                        {
                            key: '_delayAction',
                            value: function(t, e) {
                                this._clearDelayTimeout(),
                                    (this.delayTimeout = setTimeout(t, e))
                            }
                        },
                        {
                            key: 'render',
                            value: function() {
                                var t = this
                                if (!this.props.text)
                                    return r.a.createElement(
                                        'div',
                                        {
                                            className:
                                                'reactist tooltip__wrapper'
                                        },
                                        this.props.children
                                    )
                                var e = this._getClassNameForPosition(
                                        this.props.position
                                    ),
                                    o = s()(
                                        'reactist tooltip__wrapper',
                                        this.props.wrapperClassName
                                    )
                                return r.a.createElement(
                                    'span',
                                    {
                                        className: o,
                                        onMouseEnter: this._show,
                                        onMouseLeave: this._hide,
                                        ref: function(e) {
                                            return (t.wrapper = e)
                                        }
                                    },
                                    this.props.children,
                                    r.a.createElement(
                                        'span',
                                        {
                                            className: e,
                                            ref: function(e) {
                                                return (t.tooltip = e)
                                            }
                                        },
                                        r.a.createElement(
                                            'span',
                                            { className: 'tooltip__text' },
                                            this.props.text
                                        )
                                    )
                                )
                            }
                        }
                    ]),
                    e
                )
            })()
            ;(v.displayName = 'Tooltip'),
                (v.defaultProps = {
                    position: 'auto',
                    hideOnScroll: !0,
                    delayShow: 500,
                    delayHide: 0,
                    allowVaguePositioning: !1,
                    inverted: !1,
                    gapSize: 5
                }),
                (v.propTypes = {
                    position: a.a.oneOf([
                        'auto',
                        'top',
                        'right',
                        'bottom',
                        'left'
                    ]),
                    allowVaguePositioning: a.a.bool,
                    text: a.a.oneOfType([
                        a.a.string,
                        a.a.arrayOf(a.a.node),
                        a.a.node
                    ]).isRequired,
                    hideOnScroll: a.a.bool,
                    delayShow: a.a.number,
                    delayHide: a.a.number,
                    children: a.a.oneOfType([
                        a.a.string,
                        a.a.arrayOf(a.a.node),
                        a.a.node
                    ]),
                    wrapperClassName: a.a.string,
                    tooltipClassName: a.a.string,
                    inverted: a.a.bool,
                    gapSize: a.a.number
                })
            e.default = v
        },
        function(t, e, o) {}
    ])
})
//# sourceMappingURL=Tooltip.map
