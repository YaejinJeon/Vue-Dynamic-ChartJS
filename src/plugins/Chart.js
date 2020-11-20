! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("chart.js")) : "function" == typeof define && define.amd ? define("VueChartJs", ["chart.js"], e) : "object" == typeof exports ? exports.VueChartJs = e(require("chart.js")) : t.VueChartJs = e(t.Chart)
}("undefined" != typeof self ? self : this, function (t) {
    return function (t) {
        function e(a) {
            if (r[a]) return r[a].exports;
            var n = r[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return t[a].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function (t, r, a) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, e.n = function (t) {
            var r = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
    }([function (t, e, r) {
        "use strict";

        function a(t, e) {
            if (e) {
                var r = this.$data._chart,
                    a = t.datasets.map(function (t) {
                        return t.label
                    }),
                    n = e.datasets.map(function (t) {
                        return t.label
                    }),
                    s = JSON.stringify(n);
                JSON.stringify(a) === s && e.datasets.length === t.datasets.length ? (t.datasets.forEach(function (t, a) {
                    var n = Object.keys(e.datasets[a]),
                        s = Object.keys(t);
                    n.filter(function (t) {
                        return "_meta" !== t && -1 === s.indexOf(t)
                    }).forEach(function (t) {
                        delete r.data.datasets[a][t]
                    });
                    for (var i in t) t.hasOwnProperty(i) && (r.data.datasets[a][i] = t[i])
                }), t.hasOwnProperty("labels") && (r.data.labels = t.labels, this.$emit("labels:update")), t.hasOwnProperty("xLabels") && (r.data.xLabels = t.xLabels, this.$emit("xlabels:update")), t.hasOwnProperty("yLabels") && (r.data.yLabels = t.yLabels, this.$emit("ylabels:update")), r.update(), this.$emit("chart:update")) : (r && (r.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render"))
            } else this.$data._chart && (this.$data._chart.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render")
        }

        function n(t, e) {
            return {
                render: function (t) {
                    return t("div", {
                        style: this.styles,
                        class: this.cssClasses
                    }, [t("canvas", {
                        attrs: {
                            id: this.chartId,
                            width: this.width,
                            height: this.height
                        },
                        ref: "canvas"
                    })])
                },
                props: {
                    chartId: {
                        default: t,
                        type: String
                    },
                    width: {
                        default: 400,
                        type: Number
                    },
                    height: {
                        default: 400,
                        type: Number
                    },
                    cssClasses: {
                        type: String,
                        default: ""
                    },
                    styles: {
                        type: Object
                    },
                    plugins: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                data: function () {
                    return {
                        _chart: null,
                        _plugins: this.plugins
                    }
                },
                methods: {
                    addPlugin: function (t) {
                        this.$data._plugins.push(t)
                    },
                    generateLegend: function () {
                        if (this.$data._chart) return this.$data._chart.generateLegend()
                    },
                    renderChart: function (t, r) {
                        if (this.$data._chart && this.$data._chart.destroy(), !this.$refs.canvas) throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");
                        this.$data._chart = new c.a(this.$refs.canvas.getContext("2d"), {
                            type: e,
                            data: t,
                            options: r,
                            plugins: this.$data._plugins
                        })
                    }
                },
                beforeDestroy: function () {
                    this.$data._chart && this.$data._chart.destroy()
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
                data: function () {
                    return {
                        chartData: null
                    }
                },
                watch: {
                    chartData: a
                }
            },
            i = {
                props: {
                    chartData: {
                        type: Object,
                        required: !0,
                        default: function () {}
                    }
                },
                watch: {
                    chartData: a
                }
            },
            o = {
                reactiveData: s,
                reactiveProp: i
            },
            u = r(1),
            c = r.n(u),
            h = n("bar-chart", "bar"),
            d = n("horizontalbar-chart", "horizontalBar"),
            l = n("doughnut-chart", "doughnut"),
            f = n("line-chart", "line"),
            p = n("pie-chart", "pie"),
            b = n("polar-chart", "polarArea"),
            y = n("radar-chart", "radar"),
            g = n("bubble-chart", "bubble"),
            m = n("scatter-chart", "scatter");
        r.d(e, "VueCharts", function () {
            return v
        }), r.d(e, "Bar", function () {
            return h
        }), r.d(e, "HorizontalBar", function () {
            return d
        }), r.d(e, "Doughnut", function () {
            return l
        }), r.d(e, "Line", function () {
            return f
        }), r.d(e, "Pie", function () {
            return p
        }), r.d(e, "PolarArea", function () {
            return b
        }), r.d(e, "Radar", function () {
            return y
        }), r.d(e, "Bubble", function () {
            return g
        }), r.d(e, "Scatter", function () {
            return m
        }), r.d(e, "mixins", function () {
            return o
        }), r.d(e, "generateChart", function () {
            return n
        });
        var v = {
            Bar: h,
            HorizontalBar: d,
            Doughnut: l,
            Line: f,
            Pie: p,
            PolarArea: b,
            Radar: y,
            Bubble: g,
            Scatter: m,
            mixins: o,
            generateChart: n,
            render: function () {
                return console.error("[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start")
            }
        };
        e.default = v
    }, function (e, r) {
        e.exports = t
    }])
});
// # sourceMappingURL=vue-chartjs.min.js.map