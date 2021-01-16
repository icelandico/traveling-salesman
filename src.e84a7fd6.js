parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    jxSm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.inputsTemplate = void 0);
        var e = function (e) {
          return '\n      <div class="coordinates__set-container coordinates__set-'
            .concat(e, ' coordinates__set-added" id="')
            .concat(e, '">\n        <span class="coordinates__set-counter">')
            .concat(
              e,
              '.</span>\n        <label>\n          X\n          <input type="text" class="coords coordinate-x">\n        </label>\n        <label>\n          Y\n          <input type="text" class="coords coordinate-y">\n        </label>\n        '
            )
            .concat(
              e >= 1 &&
                '<span class="button button--danger coordinates__remove">Remove</span>',
              "\n      </div>    \n      "
            );
        };
        exports.inputsTemplate = e;
      },
      {},
    ],
    Q7RM: [
      function (require, module, exports) {
        "use strict";
        function i(i, t) {
          if (!(i instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(i, t, s) {
          return (
            t in i
              ? Object.defineProperty(i, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (i[t] = s),
            i
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var s = function s() {
          i(this, s),
            t(this, "canvas", document.getElementById("chart-grid")),
            t(this, "grid_size", 17),
            t(this, "canvas_width", this.canvas.width),
            t(this, "canvas_height", this.canvas.height),
            t(
              this,
              "num_lines_x",
              Math.floor(this.canvas_height / this.grid_size)
            ),
            t(
              this,
              "num_lines_y",
              Math.floor(this.canvas_width / this.grid_size)
            ),
            t(
              this,
              "x_axis_distance_grid_lines",
              Math.floor(this.num_lines_x / 2)
            ),
            t(
              this,
              "y_axis_distance_grid_lines",
              Math.floor(this.num_lines_y / 2)
            );
        };
        exports.default = s;
      },
      {},
    ],
    JRVk: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = e(require("./Canvas"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function n(t) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function o(t, e, n) {
          return e && i(t.prototype, e), n && i(t, n), t;
        }
        function a(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && s(t, e);
        }
        function s(t, e) {
          return (s =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function c(t) {
          var e = l();
          return function () {
            var n,
              r = y(t);
            if (e) {
              var i = y(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return u(this, n);
          };
        }
        function u(t, e) {
          return !e || ("object" !== n(e) && "function" != typeof e) ? f(t) : e;
        }
        function f(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function l() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function y(t) {
          return (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function h(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var p = (function (e) {
          a(i, t.default);
          var n = c(i);
          function i() {
            var t;
            r(this, i);
            for (var e = arguments.length, o = new Array(e), a = 0; a < e; a++)
              o[a] = arguments[a];
            return (
              h(
                f((t = n.call.apply(n, [this].concat(o)))),
                "canvasPoints",
                document.getElementById("chart-points")
              ),
              h(f(t), "canvasPointsContext", t.canvasPoints.getContext("2d")),
              t
            );
          }
          return (
            o(i, [
              {
                key: "translateGrid",
                value: function () {
                  this.canvasPointsContext.translate(
                    this.y_axis_distance_grid_lines * this.grid_size,
                    this.x_axis_distance_grid_lines * this.grid_size
                  );
                },
              },
              {
                key: "drawPoint",
                value: function (t, e) {
                  this.canvasPointsContext.moveTo(
                    this.grid_size * t + 0.5,
                    this.grid_size * e + 0.5
                  ),
                    this.canvasPointsContext.arc(
                      this.grid_size * t + 0.5,
                      this.grid_size * e * -1 + 0.5,
                      6,
                      0,
                      2 * Math.PI,
                      !0
                    );
                },
              },
              {
                key: "clearCanvasContext",
                value: function () {
                  this.canvasPointsContext.restore(),
                    this.canvasPointsContext.clearRect(
                      -this.x_axis_distance_grid_lines * -this.grid_size,
                      -this.y_axis_distance_grid_lines * this.grid_size,
                      this.canvas_width,
                      this.canvas_height
                    );
                },
              },
              {
                key: "drawPointsLayer",
                value: function (t) {
                  var e = this;
                  this.clearCanvasContext(),
                    t.forEach(function (t) {
                      e.canvasPointsContext.beginPath(),
                        e.drawPoint(t.x, t.y),
                        (e.canvasPointsContext.fillStyle = "#1e3383"),
                        e.canvasPointsContext.fill();
                    });
                },
              },
            ]),
            i
          );
        })();
        exports.default = p;
      },
      { "./Canvas": "Q7RM" },
    ],
    qCm6: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("./templates/inputsTemplate"),
          t = n(require("./CanvasPoints"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function a(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e;
        }
        function u(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var i = (function () {
          function n() {
            r(this, n),
              u(this, "counter", 1),
              u(this, "addPoint", document.querySelector("#add-point")),
              u(this, "clearValues", document.querySelector("#clear")),
              u(
                this,
                "inputContainer",
                document.querySelector(".coordinates__inputs-container")
              ),
              u(this, "calculatePath", document.querySelector("#calculate")),
              u(
                this,
                "removeCoordinatesButton",
                document.querySelectorAll(".coordinates__remove")
              ),
              u(this, "pointCoordinates", []),
              (this.canvasPoints = new t.default());
          }
          return (
            a(n, [
              {
                key: "initListeners",
                value: function () {
                  var e = this;
                  this.calculatePath.addEventListener("click", function () {
                    return e.getPath();
                  }),
                    this.addPoint.addEventListener("click", function () {
                      return e.createInput();
                    }),
                    this.clearValues.addEventListener("click", function () {
                      return e.clearEntries();
                    }),
                    this.removeCoordinatesButton.forEach(function (t) {
                      return t.addEventListener("click", function () {
                        return e.removeCoordinates();
                      });
                    });
                },
              },
              {
                key: "createInput",
                value: function () {
                  this.areInputsNotEmpty()
                    ? (this.inputContainer.insertAdjacentHTML(
                        "beforeend",
                        (0, e.inputsTemplate)(this.counter)
                      ),
                      (this.counter += 1),
                      this.canvasPoints.drawPointsLayer(this.getCoordinates()))
                    : alert("Fill X and Y");
                },
              },
              { key: "removeCoordinates", value: function () {} },
              {
                key: "areInputsNotEmpty",
                value: function () {
                  var e = document.querySelectorAll(
                    ".coordinates__set-".concat(this.counter - 1, " .coords")
                  );
                  return (
                    2 ===
                    Array.from(e)
                      .map(function (e) {
                        return !!e.value;
                      })
                      .filter(Boolean).length
                  );
                },
              },
              {
                key: "getPath",
                value: function () {
                  var e = this.getCoordinates(),
                    t = 0;
                  e.forEach(function (e) {
                    return !!Object.values(e).includes(NaN) && (t += 1);
                  }),
                    t || 1 === e.length
                      ? alert("Fill all inputs or type at least two points!")
                      : this.calculateDistances(e),
                    this.canvasPoints.drawPointsLayer(this.getCoordinates());
                },
              },
              {
                key: "calculateDistances",
                value: function (e) {
                  var t = this.showAllPaths(),
                    n = this.middleSegments(t);
                  this.showPathsNumber(t);
                  var r = n.map(function (t) {
                      return t.map(function (t) {
                        return Math.hypot(
                          e[t[1]].x - e[t[0]].x,
                          e[t[1]].y - e[t[0]].y
                        );
                      });
                    }),
                    o = r.map(function (e) {
                      return e.reduce(function (e, t) {
                        return e + t;
                      });
                    });
                  this.getShortestPathStats(o, t, r);
                },
              },
              {
                key: "middleSegments",
                value: function (e) {
                  return e.map(function (e) {
                    for (var t = [], n = 0; n < e.length - 1; n++)
                      t.push([e[n], e[n + 1]]);
                    return t;
                  });
                },
              },
              {
                key: "getShortestPathStats",
                value: function (e, t, n) {
                  var r = Math.min.apply(null, e),
                    o = e.indexOf(r),
                    a = t[o],
                    u = n[o];
                  this.showShortestPathStats(a, r, u);
                },
              },
              {
                key: "showShortestPathStats",
                value: function (e, t, n) {
                  this.clearParagraphValues();
                  var r = document.querySelector(".path-distance"),
                    o = document.querySelector(".path-order"),
                    a = document.querySelector(".path-segments");
                  e.forEach(function (e) {
                    o.innerHTML += " " + e;
                  }),
                    n.forEach(function (e) {
                      a.innerHTML += " " + parseFloat(e.toFixed(2));
                    }),
                    (r.innerHTML = parseFloat(t.toFixed(2)));
                },
              },
              {
                key: "showPathsNumber",
                value: function (e) {
                  document.querySelector(".paths-number").innerHTML = e.length;
                },
              },
              {
                key: "getCoordinates",
                value: function () {
                  var e = Array.from(
                      document.querySelectorAll(".coordinate-x")
                    ),
                    t = Array.from(document.querySelectorAll(".coordinate-y")),
                    n = e.map(function (e) {
                      return parseFloat(e.value);
                    }),
                    r = t.map(function (e) {
                      return parseFloat(e.value);
                    });
                  return n.map(function (e, t) {
                    return { id: t, x: e, y: r[t] };
                  });
                },
              },
              {
                key: "showCombinations",
                value: function (e) {
                  var t = [],
                    n = e.slice();
                  return (
                    (function e(r) {
                      if (1 === r) t.push(n.slice());
                      else
                        for (var o = 0; o <= r - 1; o++)
                          e(r - 1),
                            (u = r - 1),
                            (i = void 0),
                            (i = n[(a = r % 2 == 0 ? o : 0)]),
                            (n[a] = n[u]),
                            (n[u] = i);
                      var a, u, i;
                    })(n.length),
                    t
                  );
                },
              },
              {
                key: "showAllPaths",
                value: function () {
                  for (
                    var e = Array.from(
                        document.querySelectorAll(".coordinates__set-container")
                      ).map(function (e) {
                        return parseInt(e.id);
                      }),
                      t = this.showCombinations(e.slice(1)),
                      n = 0;
                    n < t.length;
                    n++
                  )
                    t[n].unshift(e[0]), t[n].push(e[0]);
                  return t;
                },
              },
              {
                key: "clearParagraphValues",
                value: function () {
                  document.querySelectorAll(".path-info").forEach(function (e) {
                    return (e.innerHTML = "");
                  });
                },
              },
              {
                key: "clearEntries",
                value: function () {
                  document.querySelectorAll(".result").forEach(function (e) {
                    e.innerHTML = "";
                  }),
                    this.removeInputs(),
                    this.canvasPoints.drawPointsLayer(this.getCoordinates());
                },
              },
              {
                key: "removeInputs",
                value: function () {
                  var e = document.querySelectorAll(".coordinates__set-added"),
                    t = document.querySelectorAll(".coords");
                  e.forEach(function (e) {
                    return e.remove();
                  }),
                    t.forEach(function (e) {
                      return (e.value = "");
                    }),
                    (this.counter = 1);
                },
              },
            ]),
            n
          );
        })();
        exports.default = i;
      },
      { "./templates/inputsTemplate": "jxSm", "./CanvasPoints": "JRVk" },
    ],
    O34x: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = e(require("./Canvas"));
        function e(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function i(t) {
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function o(t, e, i) {
          return e && r(t.prototype, e), i && r(t, i), t;
        }
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && a(t, e);
        }
        function a(t, e) {
          return (a =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function l(t) {
          var e = f();
          return function () {
            var i,
              n = _(t);
            if (e) {
              var r = _(this).constructor;
              i = Reflect.construct(n, arguments, r);
            } else i = n.apply(this, arguments);
            return c(this, i);
          };
        }
        function c(t, e) {
          return !e || ("object" !== i(e) && "function" != typeof e) ? u(t) : e;
        }
        function u(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function _(t) {
          return (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function h(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        var d = (function (e) {
          s(r, t.default);
          var i = l(r);
          function r() {
            var t;
            n(this, r);
            for (var e = arguments.length, o = new Array(e), s = 0; s < e; s++)
              o[s] = arguments[s];
            return (
              h(
                u((t = i.call.apply(i, [this].concat(o)))),
                "canvas",
                document.getElementById("chart-grid")
              ),
              t
            );
          }
          return (
            o(r, [
              {
                key: "drawGrid",
                value: function () {
                  for (
                    var t = this.canvas.getContext("2d"), e = 0;
                    e <= this.num_lines_x;
                    e++
                  )
                    t.beginPath(),
                      (t.lineWidth = 1),
                      e === this.x_axis_distance_grid_lines
                        ? (t.strokeStyle = "#000000")
                        : (t.strokeStyle = "#acacac"),
                      e === this.num_lines_x
                        ? (t.moveTo(0, this.grid_size * e),
                          t.lineTo(this.canvas_width, this.grid_size * e))
                        : (t.moveTo(0, this.grid_size * e + 0.5),
                          t.lineTo(
                            this.canvas_width,
                            this.grid_size * e + 0.5
                          )),
                      t.stroke();
                  for (var i = 0; i <= this.num_lines_y; i++)
                    t.beginPath(),
                      (t.lineWidth = 1),
                      i === this.y_axis_distance_grid_lines
                        ? (t.strokeStyle = "#121418")
                        : (t.strokeStyle = "#acacac"),
                      i === this.num_lines_y
                        ? (t.moveTo(this.grid_size * i, 0),
                          t.lineTo(this.grid_size * i, this.canvas_height))
                        : (t.moveTo(this.grid_size * i + 0.5, 0),
                          t.lineTo(
                            this.grid_size * i + 0.5,
                            this.canvas_height
                          )),
                      t.stroke();
                  t.translate(
                    this.y_axis_distance_grid_lines * this.grid_size,
                    this.x_axis_distance_grid_lines * this.grid_size
                  );
                  for (
                    var n = 1;
                    n < this.num_lines_y - this.y_axis_distance_grid_lines;
                    n++
                  )
                    t.beginPath(),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "#000000"),
                      t.moveTo(this.grid_size * n + 0.5, -3),
                      t.lineTo(this.grid_size * n + 0.5, 3),
                      t.stroke(),
                      (t.font = "11px Consolas"),
                      (t.textAlign = "start"),
                      t.fillText("".concat(1 * n), this.grid_size * n - 2, 15);
                  for (var r = 1; r < this.y_axis_distance_grid_lines; r++)
                    t.beginPath(),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "#000000"),
                      t.moveTo(-this.grid_size * r + 0.5, -3),
                      t.lineTo(-this.grid_size * r + 0.5, 3),
                      t.stroke(),
                      (t.font = "11px Consolas"),
                      (t.textAlign = "end"),
                      t.fillText(
                        "".concat(-1 * r),
                        -this.grid_size * r + 3,
                        15
                      );
                  for (
                    var o = 1;
                    o < this.num_lines_x - this.x_axis_distance_grid_lines;
                    o++
                  )
                    t.beginPath(),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "#000000"),
                      t.moveTo(-3, this.grid_size * o + 0.5),
                      t.lineTo(3, this.grid_size * o + 0.5),
                      t.stroke(),
                      (t.font = "11px Consolas"),
                      (t.textAlign = "start"),
                      t.fillText("".concat(-1 * o), 8, this.grid_size * o + 3);
                  for (var s = 1; s < this.x_axis_distance_grid_lines; s++)
                    t.beginPath(),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "#000000"),
                      t.moveTo(-3, -this.grid_size * s + 0.5),
                      t.lineTo(3, -this.grid_size * s + 0.5),
                      t.stroke(),
                      (t.font = "11px Consolas"),
                      (t.textAlign = "start"),
                      t.fillText("".concat(1 * s), 8, -this.grid_size * s + 3);
                },
              },
            ]),
            r
          );
        })();
        exports.default = d;
      },
      { "./Canvas": "Q7RM" },
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        var e = s(require("./../assets/CoordinateSolver")),
          r = s(require("../assets/CanvasGrid"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var t = new e.default(),
          a = new r.default();
        t.initListeners(), a.drawGrid();
      },
      {
        "./../assets/CoordinateSolver": "qCm6",
        "../assets/canvasGrid": "O34x",
      },
    ],
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=/traveling-salesman/src.e84a7fd6.js.map
