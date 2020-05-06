webpackHotUpdate("static/development/pages/react-markers.js",{

/***/ "./src/google-map.js":
/*!***************************!*\
  !*** ./src/google-map.js ***!
  \***************************/
/*! exports provided: Map, useMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMap", function() { return useMap; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/ice/ext/npm/rgm/src/google-map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


// $FlowFixMe
var MapContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"](null);

var warnOnce = function () {
  var map = {};
  return function (str) {
    if (map[str] == null) {
      map[str] = true;
      console.warn(str);
    }
  };
}();

var STYLE = {
  width: '100%',
  height: '100%'
};
var Map = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
  var element = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var guardRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      map = _React$useState2[0],
      setMap = _React$useState2[1];

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var apiRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](props.api); // eslint-disable-next-line react-hooks/rules-of-hooks

    var optionsRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](props.options);

    if (apiRef.current !== props.api) {
      warnOnce("\n        api prop has changed.\n        If it's desired behaviour please remount your component\n        using key={hash(api)} on your component.\n      ");
    }

    if (optionsRef.current !== props.options) {
      warnOnce("\n        options prop has changed.\n        If it's desired behaviour please use imperative api, i.e.\n\n        mapRef.current.apply(map =>  map.setOptions({...}));\n      ");
    }
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"](ref, function () {
    return map;
  }, [map]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (element.current && !guardRef.current) {
      var _props$options;

      var lmap = new props.api.Map(element.current, (_props$options = props.options) !== null && _props$options !== void 0 ? _props$options : {});
      setMap(lmap);
      guardRef.current = true;
      return function () {};
    }
  }, [props.api, props.options]);
  var ctxValue = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return {
      map: map,
      api: props.api
    };
  }, [map, props.api]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(MapContext.Provider, {
    value: ctxValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: STYLE,
    ref: element,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), map && props.children);
});
var useMap = function useMap() {
  return react__WEBPACK_IMPORTED_MODULE_1__["useContext"](MapContext);
};

/***/ })

})
//# sourceMappingURL=react-markers.js.14afbb6a2a8a9ea71ec7.hot-update.js.map