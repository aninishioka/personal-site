"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/pages/projects/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/projects/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProjectsPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_projects_index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/projects-index.module.css */ \"./src/styles/projects-index.module.css\");\n/* harmony import */ var _styles_projects_index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_project_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/project-card */ \"./src/components/project-card.jsx\");\n\n\n\n\n\nvar __N_SSG = true;\nfunction ProjectsPage(param) {\n    var projectData = param.projectData;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_projects_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectsContainer),\n        children: projectData.map(function(project) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, project), void 0, false, {\n                fileName: \"/Users/anissa/Projects/personal-site/src/pages/projects/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/anissa/Projects/personal-site/src/pages/projects/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ProjectsPage;\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQztBQUNKOztBQVd6QyxTQUFTRyxhQUFhLEtBQWUsRUFBRTtRQUFqQixvQkFBRUM7O0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCw0RkFBd0I7a0JBQ3JDRyxZQUFZSSxHQUFHLENBQUMsU0FBQ0M7aUNBQ2hCLDhEQUFDUCxnRUFBV0EsRUFBQUEsNkRBQUFBLEtBQUtPOzs7Ozs7Ozs7OztBQUl6QixDQUFDO0tBUnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMvaW5kZXguanN4PzNhMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3Byb2plY3RzLWluZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9qZWN0LWNhcmRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IHByb2plY3REYXRhIH0gPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9kYXRhL3Byb2plY3QtZGF0YS5qc29uXCIpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9qZWN0RGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0c1BhZ2UoeyBwcm9qZWN0RGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0c0NvbnRhaW5lcn0+XG4gICAgICB7cHJvamVjdERhdGEubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgIDxQcm9qZWN0Q2FyZCB7Li4ucHJvamVjdH0+PC9Qcm9qZWN0Q2FyZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0c1BhZ2UiLCJwcm9qZWN0RGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInByb2plY3RzQ29udGFpbmVyIiwibWFwIiwicHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects/index.jsx\n"));

/***/ })

});