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

/***/ "./src/components/project-card.jsx":
/*!*****************************************!*\
  !*** ./src/components/project-card.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/project-card.jsx\",\"import\":\"Space_Mono\",\"arguments\":[{\"weight\":\"400\",\"style\":[\"normal\",\"italic\"],\"subsets\":[\"latin\"]}],\"variableName\":\"space_mono\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/project-card.jsx\\\",\\\"import\\\":\\\"Space_Mono\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"],\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"space_mono\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/project-card.module.css */ \"./src/styles/project-card.module.css\");\n/* harmony import */ var _styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProjectCard(param) {\n    var title = param.title, description = param.description, assets = param.assets, tags = param.tags, inProgress = param.inProgress;\n    var handleClick = function handleClick() {\n        setActive(function(prevState) {\n            return !prevState;\n        });\n    };\n    var renderAssets = function renderAssets() {\n        var _this = this;\n        if (assets === undefined || assets.length == 0) return;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().assetContainer)),\n            children: assets.map(function(asset, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(asset.src)),\n                    alt: asset.alt,\n                    width: \"80%\",\n                    height: \"100%\"\n                }, i, false, {\n                    fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    };\n    var renderTags = function renderTags() {\n        return tags.join(\", \");\n    };\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), active = _useState[0], setActive = _useState[1];\n    console.log(inProgress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\\n            \".concat((next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_5___default().className), \" \").concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardTitle), \" \\n            \").concat(active ? (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardTitleActive) : null),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: active ? (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBodyActive) : (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardBody),\n                children: [\n                    inProgress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"CURRENTLY IN PROGRESS.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 23\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Built with \",\n                            renderTags(),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    renderAssets()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectCard, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtNQTtBQUxrQztBQUNlO0FBRXhCO0FBUWhCLFNBQVNLLFlBQVksS0FNbkMsRUFBRTtRQUxEQyxRQURrQyxNQUNsQ0EsT0FDQUMsY0FGa0MsTUFFbENBLGFBQ0FDLFNBSGtDLE1BR2xDQSxRQUNBQyxPQUprQyxNQUlsQ0EsTUFDQUMsYUFMa0MsTUFLbENBO1FBSVNDLGNBQVQsU0FBU0EsY0FBYztRQUNyQkMsVUFBVSxTQUFDQyxXQUFjO1lBQ3ZCLE9BQU8sQ0FBQ0E7UUFDVjtJQUNGO1FBRVNDLGVBQVQsU0FBU0EsZUFBZTs7UUFDdEIsSUFBSU4sV0FBV08sYUFBYVAsT0FBT1EsTUFBTSxJQUFJLEdBQUc7UUFDaEQscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVcsR0FBeUIsT0FBdEJmLHVGQUFxQjtzQkFDckNLLE9BQU9ZLEdBQUcsQ0FBQyxTQUFDQyxPQUFPQyxHQUFNO2dCQUN4QixxQkFDRSw4REFBQ2xCLG1EQUFLQTtvQkFDSm1CLEtBQUtDLDhEQUFRLEtBQXVCLE9BQVZILE1BQU1FLEdBQUc7b0JBQ25DRSxLQUFLSixNQUFNSSxHQUFHO29CQUVkQyxPQUFNO29CQUNOQyxRQUFPO21CQUZGTDs7Ozs7WUFLWDs7Ozs7O0lBR047UUFFU00sYUFBVCxTQUFTQSxhQUFhO1FBQ3BCLE9BQU9uQixLQUFLb0IsSUFBSSxDQUFDO0lBQ25COztJQTdCQSxJQUE0QjNCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxLQUFLLE9BQW5DNEIsU0FBcUI1QixjQUFiVSxZQUFhVjtJQStCNUI2QixRQUFRQyxHQUFHLENBQUN0QjtJQUVaLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXLEdBQWUsT0FBWmYsNkVBQVc7OzBCQUM1Qiw4REFBQytCO2dCQUFPQyxTQUFTeEI7MEJBQ2YsNEVBQUNNO29CQUNDQyxXQUFXLGlCQUNpQmYsT0FBeEJILHFOQUFvQixFQUFDLEtBQ3JCOEIsT0FEd0IzQixrRkFBZ0IsRUFBQyxtQkFDRixPQUF2QzJCLFNBQVMzQix3RkFBc0IsR0FBRyxJQUFJOzhCQUUxQyw0RUFBQ21DO2tDQUFJaEM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNXO2dCQUFJQyxXQUFXWSxTQUFTM0IsdUZBQXFCLEdBQUdBLGlGQUFlOztvQkFDN0RPLDJCQUFhLDhEQUFDTztrQ0FBSTs7Ozs7K0JBQStCLElBQUk7a0NBQ3RELDhEQUFDQTs7NEJBQUk7NEJBQVlXOzRCQUFhOzs7Ozs7O2tDQUM5Qiw4REFBQ1g7a0NBQUtWOzs7Ozs7b0JBQ0xPOzs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztHQTNEdUJUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtY2FyZC5qc3g/MDE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wcm9qZWN0LWNhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgU3BhY2VfTW9ubyB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3Qgc3BhY2VfbW9ubyA9IFNwYWNlX01vbm8oe1xuICB3ZWlnaHQ6IFwiNDAwXCIsXG4gIHN0eWxlOiBbXCJub3JtYWxcIiwgXCJpdGFsaWNcIl0sXG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDYXJkKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBhc3NldHMsXG4gIHRhZ3MsXG4gIGluUHJvZ3Jlc3MsXG59KSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgc2V0QWN0aXZlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiAhcHJldlN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQXNzZXRzKCkge1xuICAgIGlmIChhc3NldHMgPT09IHVuZGVmaW5lZCB8fCBhc3NldHMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hc3NldENvbnRhaW5lcn1gfT5cbiAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoYC4uL2Fzc2V0cy8ke2Fzc2V0LnNyY31gKX1cbiAgICAgICAgICAgICAgYWx0PXthc3NldC5hbHR9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgd2lkdGg9XCI4MCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFncygpIHtcbiAgICByZXR1cm4gdGFncy5qb2luKFwiLCBcIik7XG4gIH1cblxuICBjb25zb2xlLmxvZyhpblByb2dyZXNzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH1gfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAke3NwYWNlX21vbm8uY2xhc3NOYW1lfSAke3N0eWxlcy5jYXJkVGl0bGV9IFxuICAgICAgICAgICAgJHthY3RpdmUgPyBzdHlsZXMuY2FyZFRpdGxlQWN0aXZlIDogbnVsbH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZSA/IHN0eWxlcy5jYXJkQm9keUFjdGl2ZSA6IHN0eWxlcy5jYXJkQm9keX0+XG4gICAgICAgIHtpblByb2dyZXNzID8gPGRpdj5DVVJSRU5UTFkgSU4gUFJPR1JFU1MuPC9kaXY+IDogbnVsbH1cbiAgICAgICAgPGRpdj5CdWlsdCB3aXRoIHtyZW5kZXJUYWdzKCl9LjwvZGl2PlxuICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAge3JlbmRlckFzc2V0cygpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3BhY2VfbW9ubyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIlByb2plY3RDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFzc2V0cyIsInRhZ3MiLCJpblByb2dyZXNzIiwiaGFuZGxlQ2xpY2siLCJzZXRBY3RpdmUiLCJwcmV2U3RhdGUiLCJyZW5kZXJBc3NldHMiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJhc3NldENvbnRhaW5lciIsIm1hcCIsImFzc2V0IiwiaSIsInNyYyIsInJlcXVpcmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlclRhZ3MiLCJqb2luIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsImNhcmQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2FyZFRpdGxlIiwiY2FyZFRpdGxlQWN0aXZlIiwiaDEiLCJjYXJkQm9keUFjdGl2ZSIsImNhcmRCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/project-card.jsx\n"));

/***/ })

});