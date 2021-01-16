// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../assets/templates/inputsTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputsTemplate = void 0;

var inputsTemplate = function inputsTemplate(counter) {
  return "\n      <div class=\"coordinates__set-container coordinates__set-".concat(counter, " coordinates__set-added\" id=\"").concat(counter, "\">\n        <span class=\"coordinates__set-counter\">").concat(counter, ".</span>\n        <label>\n          X\n          <input type=\"text\" class=\"coords coordinate-x\">\n        </label>\n        <label>\n          Y\n          <input type=\"text\" class=\"coords coordinate-y\">\n        </label>\n      </div>    \n      ");
};

exports.inputsTemplate = inputsTemplate;
},{}],"../assets/Canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = function Canvas() {
  _classCallCheck(this, Canvas);

  _defineProperty(this, "canvas", document.getElementById("chart-grid"));

  _defineProperty(this, "grid_size", 17);

  _defineProperty(this, "canvas_width", this.canvas.width);

  _defineProperty(this, "canvas_height", this.canvas.height);

  _defineProperty(this, "num_lines_x", Math.floor(this.canvas_height / this.grid_size));

  _defineProperty(this, "num_lines_y", Math.floor(this.canvas_width / this.grid_size));

  _defineProperty(this, "x_axis_distance_grid_lines", Math.floor(this.num_lines_x / 2));

  _defineProperty(this, "y_axis_distance_grid_lines", Math.floor(this.num_lines_y / 2));
};

exports.default = Canvas;
},{}],"../assets/CanvasPointsLabels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Canvas2 = _interopRequireDefault(require("./Canvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CanvasPointsLabels = /*#__PURE__*/function (_Canvas) {
  _inherits(CanvasPointsLabels, _Canvas);

  var _super = _createSuper(CanvasPointsLabels);

  function CanvasPointsLabels() {
    var _this;

    _classCallCheck(this, CanvasPointsLabels);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "canvasPointsLabels", document.getElementById("chart-points-labels"));

    _defineProperty(_assertThisInitialized(_this), "canvasPointsLabelsContext", _this.canvasPointsLabels.getContext("2d"));

    _this.translateGrid();

    return _this;
  }

  _createClass(CanvasPointsLabels, [{
    key: "translateGrid",
    value: function translateGrid() {
      this.canvasPointsLabelsContext.translate(this.y_axis_distance_grid_lines * this.grid_size, this.x_axis_distance_grid_lines * this.grid_size);
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(_ref) {
      var id = _ref.id,
          x = _ref.x,
          y = _ref.y;
      var labelX = this.grid_size * x + 3;
      var labelY = this.grid_size * y * -1 - 5;
      this.canvasPointsLabelsContext.fillStyle = "#292929";
      this.canvasPointsLabelsContext.font = "600 16px Consolas";
      this.canvasPointsLabelsContext.fillText(id, labelX, labelY);
    }
  }, {
    key: "clearCanvasContext",
    value: function clearCanvasContext() {
      this.canvasPointsLabelsContext.restore();
      this.canvasPointsLabelsContext.clearRect(-this.x_axis_distance_grid_lines * this.grid_size, -this.y_axis_distance_grid_lines * this.grid_size, this.canvas_width, this.canvas_height);
    }
  }]);

  return CanvasPointsLabels;
}(_Canvas2.default);

exports.default = CanvasPointsLabels;
},{"./Canvas":"../assets/Canvas.js"}],"../assets/CanvasPoints.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Canvas2 = _interopRequireDefault(require("./Canvas"));

var _CanvasPointsLabels = _interopRequireDefault(require("./CanvasPointsLabels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CanvasPoints = /*#__PURE__*/function (_Canvas) {
  _inherits(CanvasPoints, _Canvas);

  var _super = _createSuper(CanvasPoints);

  function CanvasPoints() {
    var _this;

    _classCallCheck(this, CanvasPoints);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "canvasPoints", document.getElementById("chart-points"));

    _defineProperty(_assertThisInitialized(_this), "canvasPointsContext", _this.canvasPoints.getContext("2d"));

    _this.translateGrid();

    _this.clearCanvasContext = _this.clearCanvasContext.bind(_assertThisInitialized(_this));
    _this.pointsLabels = new _CanvasPointsLabels.default();
    return _this;
  }

  _createClass(CanvasPoints, [{
    key: "translateGrid",
    value: function translateGrid() {
      this.canvasPointsContext.translate(this.y_axis_distance_grid_lines * this.grid_size, this.x_axis_distance_grid_lines * this.grid_size);
    }
  }, {
    key: "drawPoint",
    value: function drawPoint(_ref) {
      var x = _ref.x,
          y = _ref.y;
      // this.canvasPointsContext.moveTo(
      //   this.grid_size * x + 0.5,
      //   this.grid_size * y + 0.5
      // );
      this.canvasPointsContext.arc(this.grid_size * x + 0.5, this.grid_size * y * -1 + 0.5, 6, 0, Math.PI * 2, true);
    }
  }, {
    key: "clearCanvasContext",
    value: function clearCanvasContext() {
      this.pointsLabels.clearCanvasContext();
      this.canvasPointsContext.restore();
      this.canvasPointsContext.clearRect(-this.x_axis_distance_grid_lines * this.grid_size, -this.y_axis_distance_grid_lines * this.grid_size, this.canvas_width, this.canvas_height);
    }
  }, {
    key: "drawPointsLayer",
    value: function drawPointsLayer(points) {
      var _this2 = this;

      this.clearCanvasContext();
      points.forEach(function (point) {
        _this2.canvasPointsContext.beginPath();

        _this2.drawPoint(point);

        _this2.pointsLabels.drawLabel(point);

        _this2.canvasPointsContext.fillStyle = "#1e3383";

        _this2.canvasPointsContext.fill();
      });
    }
  }]);

  return CanvasPoints;
}(_Canvas2.default);

exports.default = CanvasPoints;
},{"./Canvas":"../assets/Canvas.js","./CanvasPointsLabels":"../assets/CanvasPointsLabels.js"}],"../assets/CoordinateSolver.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputsTemplate = require("./templates/inputsTemplate");

var _CanvasPoints = _interopRequireDefault(require("./CanvasPoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CoordinateSolver = /*#__PURE__*/function () {
  function CoordinateSolver() {
    _classCallCheck(this, CoordinateSolver);

    _defineProperty(this, "counter", 1);

    _defineProperty(this, "addPoint", document.querySelector("#add-point"));

    _defineProperty(this, "clearValues", document.querySelector("#clear"));

    _defineProperty(this, "inputContainer", document.querySelector(".coordinates__inputs-container"));

    _defineProperty(this, "calculatePath", document.querySelector("#calculate"));

    _defineProperty(this, "removeCoordinatesButton", document.querySelectorAll(".coordinates__remove"));

    _defineProperty(this, "pointCoordinates", []);

    this.canvasPoints = new _CanvasPoints.default();
  }

  _createClass(CoordinateSolver, [{
    key: "initListeners",
    value: function initListeners() {
      var _this = this;

      this.calculatePath.addEventListener("click", function () {
        return _this.getPath();
      });
      this.addPoint.addEventListener("click", function () {
        return _this.createInput();
      });
      this.clearValues.addEventListener("click", function () {
        return _this.clearEntries();
      });
    }
  }, {
    key: "createInput",
    value: function createInput() {
      if (!this.areInputsNotEmpty()) {
        alert("Fill X and Y");
        return;
      }

      this.inputContainer.insertAdjacentHTML("beforeend", (0, _inputsTemplate.inputsTemplate)(this.counter));
      this.counter += 1;
      this.canvasPoints.drawPointsLayer(this.getCoordinates());
    }
  }, {
    key: "areInputsNotEmpty",
    value: function areInputsNotEmpty() {
      var lastInputs = document.querySelectorAll(".coordinates__set-".concat(this.counter - 1, " .coords"));
      return Array.from(lastInputs).map(function (el) {
        return !!el.value;
      }).filter(Boolean).length === 2;
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var coordinates = this.getCoordinates();
      var emptyInputs = 0;
      coordinates.forEach(function (item) {
        return Object.values(item).includes(NaN) ? emptyInputs += 1 : false;
      });
      emptyInputs || coordinates.length === 1 ? alert("Fill all inputs or type at least two points!") : this.calculateDistances(coordinates);
      this.canvasPoints.drawPointsLayer(this.getCoordinates());
    }
  }, {
    key: "calculateDistances",
    value: function calculateDistances(coordinates) {
      var paths = this.showAllPaths();
      var segments = this.middleSegments(paths);
      this.showPathsNumber(paths);
      var segmentDistances = segments.map(function (segment) {
        return segment.map(function (pair) {
          return Math.hypot(coordinates[pair[1]].x - coordinates[pair[0]].x, coordinates[pair[1]].y - coordinates[pair[0]].y);
        });
      });
      var sumDistances = segmentDistances.map(function (segment) {
        return segment.reduce(function (a, b) {
          return a + b;
        });
      });
      this.getShortestPathStats(sumDistances, paths, segmentDistances);
    }
  }, {
    key: "middleSegments",
    value: function middleSegments(segments) {
      return segments.map(function (path) {
        var result = [];

        for (var i = 0; i < path.length - 1; i++) {
          result.push([path[i], path[i + 1]]);
        }

        return result;
      });
    }
  }, {
    key: "getShortestPathStats",
    value: function getShortestPathStats(distances, paths, segments) {
      var shortestDistance = Math.min.apply(null, distances);
      var shortestPathIndex = distances.indexOf(shortestDistance);
      var shortestPath = paths[shortestPathIndex];
      var shortestPathSegments = segments[shortestPathIndex];
      this.showShortestPathStats(shortestPath, shortestDistance, shortestPathSegments);
    }
  }, {
    key: "showShortestPathStats",
    value: function showShortestPathStats(path, distance, segments) {
      this.clearParagraphValues();
      var paragraphDistance = document.querySelector(".path-distance");
      var paragraphOrder = document.querySelector(".path-order");
      var pathsSegments = document.querySelector(".path-segments");
      path.forEach(function (point) {
        paragraphOrder.innerHTML += " " + point;
      });
      segments.forEach(function (segment) {
        pathsSegments.innerHTML += " " + parseFloat(segment.toFixed(2));
      });
      paragraphDistance.innerHTML = parseFloat(distance.toFixed(2));
    }
  }, {
    key: "showPathsNumber",
    value: function showPathsNumber(paths) {
      var paragraphPaths = document.querySelector(".paths-number");
      paragraphPaths.innerHTML = paths.length;
    }
  }, {
    key: "getCoordinates",
    value: function getCoordinates() {
      var inputValuesX = Array.from(document.querySelectorAll(".coordinate-x"));
      var inputValuesY = Array.from(document.querySelectorAll(".coordinate-y"));
      var valuesX = inputValuesX.map(function (item) {
        return parseFloat(item.value);
      });
      var valuesY = inputValuesY.map(function (item) {
        return parseFloat(item.value);
      });
      return valuesX.map(function (x, index) {
        return {
          id: index,
          x: x,
          y: valuesY[index]
        };
      });
    }
  }, {
    key: "showCombinations",
    value: function showCombinations(points) {
      var combinations = [];
      var array = points.slice();

      function swap(a, b) {
        var temporary = array[a];
        array[a] = array[b];
        array[b] = temporary;
      }

      function generate(n) {
        if (n === 1) {
          combinations.push(array.slice());
        } else {
          for (var i = 0; i <= n - 1; i++) {
            generate(n - 1, array);
            swap(n % 2 === 0 ? i : 0, n - 1);
          }
        }
      }

      generate(array.length, array);
      return combinations;
    }
  }, {
    key: "showAllPaths",
    value: function showAllPaths() {
      var pointsElements = Array.from(document.querySelectorAll(".coordinates__set-container"));
      var points = pointsElements.map(function (item) {
        return parseInt(item.id);
      });
      var pointsArray = this.showCombinations(points.slice(1));

      for (var i = 0; i < pointsArray.length; i++) {
        pointsArray[i].unshift(points[0]);
        pointsArray[i].push(points[0]);
      }

      return pointsArray;
    }
  }, {
    key: "clearParagraphValues",
    value: function clearParagraphValues() {
      var paragraphs = document.querySelectorAll(".path-info");
      paragraphs.forEach(function (paragraph) {
        return paragraph.innerHTML = "";
      });
    }
  }, {
    key: "clearEntries",
    value: function clearEntries() {
      var results = document.querySelectorAll(".result");
      results.forEach(function (item) {
        item.innerHTML = "";
      });
      this.canvasPoints.clearCanvasContext();
      this.removeInputs();
      this.canvasPoints.drawPointsLayer(this.getCoordinates());
    }
  }, {
    key: "removeInputs",
    value: function removeInputs() {
      var addedElements = document.querySelectorAll(".coordinates__set-added");
      var initialInput = document.querySelectorAll(".coords");
      addedElements.forEach(function (item) {
        return item.remove();
      });
      initialInput.forEach(function (item) {
        return item.value = "";
      });
      this.counter = 1;
    }
  }]);

  return CoordinateSolver;
}();

exports.default = CoordinateSolver;
},{"./templates/inputsTemplate":"../assets/templates/inputsTemplate.js","./CanvasPoints":"../assets/CanvasPoints.js"}],"../assets/CanvasGrid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Canvas2 = _interopRequireDefault(require("./Canvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CanvasGrid = /*#__PURE__*/function (_Canvas) {
  _inherits(CanvasGrid, _Canvas);

  var _super = _createSuper(CanvasGrid);

  function CanvasGrid() {
    var _this;

    _classCallCheck(this, CanvasGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "canvas", document.getElementById("chart-grid"));

    return _this;
  }

  _createClass(CanvasGrid, [{
    key: "drawGrid",
    value: function drawGrid() {
      var ctx = this.canvas.getContext("2d");
      var x_axis_starting_point = 1;
      var y_axis_starting_point = 1;

      for (var i = 0; i <= this.num_lines_x; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        if (i === this.x_axis_distance_grid_lines) ctx.strokeStyle = "#000000";else ctx.strokeStyle = "#acacac";

        if (i === this.num_lines_x) {
          ctx.moveTo(0, this.grid_size * i);
          ctx.lineTo(this.canvas_width, this.grid_size * i);
        } else {
          ctx.moveTo(0, this.grid_size * i + 0.5);
          ctx.lineTo(this.canvas_width, this.grid_size * i + 0.5);
        }

        ctx.stroke();
      }

      for (var _i = 0; _i <= this.num_lines_y; _i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;

        if (_i === this.y_axis_distance_grid_lines) {
          ctx.strokeStyle = "#121418";
        } else {
          ctx.strokeStyle = "#acacac";
        }

        if (_i === this.num_lines_y) {
          ctx.moveTo(this.grid_size * _i, 0);
          ctx.lineTo(this.grid_size * _i, this.canvas_height);
        } else {
          ctx.moveTo(this.grid_size * _i + 0.5, 0);
          ctx.lineTo(this.grid_size * _i + 0.5, this.canvas_height);
        }

        ctx.stroke();
      }

      ctx.translate(this.y_axis_distance_grid_lines * this.grid_size, this.x_axis_distance_grid_lines * this.grid_size);

      for (var _i2 = 1; _i2 < this.num_lines_y - this.y_axis_distance_grid_lines; _i2++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.moveTo(this.grid_size * _i2 + 0.5, -3);
        ctx.lineTo(this.grid_size * _i2 + 0.5, 3);
        ctx.stroke();
        ctx.font = "11px Consolas";
        ctx.textAlign = "start";
        ctx.fillText("".concat(x_axis_starting_point * _i2), this.grid_size * _i2 - 2, 15);
      }

      for (var _i3 = 1; _i3 < this.y_axis_distance_grid_lines; _i3++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.moveTo(-this.grid_size * _i3 + 0.5, -3);
        ctx.lineTo(-this.grid_size * _i3 + 0.5, 3);
        ctx.stroke();
        ctx.font = "11px Consolas";
        ctx.textAlign = "end";
        ctx.fillText("".concat(-x_axis_starting_point * _i3), -this.grid_size * _i3 + 3, 15);
      }

      for (var _i4 = 1; _i4 < this.num_lines_x - this.x_axis_distance_grid_lines; _i4++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.moveTo(-3, this.grid_size * _i4 + 0.5);
        ctx.lineTo(3, this.grid_size * _i4 + 0.5);
        ctx.stroke();
        ctx.font = "11px Consolas";
        ctx.textAlign = "start";
        ctx.fillText("".concat(-y_axis_starting_point * _i4), 8, this.grid_size * _i4 + 3);
      }

      for (var _i5 = 1; _i5 < this.x_axis_distance_grid_lines; _i5++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.moveTo(-3, -this.grid_size * _i5 + 0.5);
        ctx.lineTo(3, -this.grid_size * _i5 + 0.5);
        ctx.stroke();
        ctx.font = "11px Consolas";
        ctx.textAlign = "start";
        ctx.fillText("".concat(y_axis_starting_point * _i5), 8, -this.grid_size * _i5 + 3);
      }
    }
  }]);

  return CanvasGrid;
}(_Canvas2.default);

exports.default = CanvasGrid;
},{"./Canvas":"../assets/Canvas.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _CoordinateSolver = _interopRequireDefault(require("./../assets/CoordinateSolver"));

var _CanvasGrid = _interopRequireDefault(require("../assets/CanvasGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coordinateSolver = new _CoordinateSolver.default();
var canvasGrid = new _CanvasGrid.default();
coordinateSolver.initListeners();
canvasGrid.drawGrid();
},{"./../assets/CoordinateSolver":"../assets/CoordinateSolver.js","../assets/CanvasGrid":"../assets/CanvasGrid.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54487" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map