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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/project-card.jsx\",\"import\":\"Space_Mono\",\"arguments\":[{\"weight\":\"400\",\"style\":[\"normal\",\"italic\"],\"subsets\":[\"latin\"]}],\"variableName\":\"space_mono\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/project-card.jsx\\\",\\\"import\\\":\\\"Space_Mono\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"style\\\":[\\\"normal\\\",\\\"italic\\\"],\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"space_mono\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/project-card.module.css */ \"./src/styles/project-card.module.css\");\n/* harmony import */ var _styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProjectCard(param) {\n    var title = param.title, description = param.description, assets = param.assets, tags = param.tags, inProgress = param.inProgress, github = param.github;\n    var handleClick = function handleClick() {\n        setActive(function(prevState) {\n            return !prevState;\n        });\n    };\n    var renderAssets = function renderAssets() {\n        var _this = this;\n        if (assets === undefined || assets.length == 0) return;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().assetContainer)),\n            children: assets.map(function(asset, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(asset.src)),\n                    alt: asset.alt,\n                    width: \"80%\",\n                    height: \"100%\"\n                }, i, false, {\n                    fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this);\n    };\n    var renderTags = function renderTags() {\n        return tags.join(\", \");\n    };\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), active = _useState[0], setActive = _useState[1];\n    console.log(inProgress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\\n            \".concat((next_font_google_target_css_path_src_components_project_card_jsx_import_Space_Mono_arguments_weight_400_style_normal_italic_subsets_latin_variableName_space_mono___WEBPACK_IMPORTED_MODULE_6___default().className), \" \").concat((_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardTitle), \" \\n            \").concat(active ? (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardTitleActive) : null),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: active ? (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardBodyActive) : (_styles_project_card_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardBody),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            inProgress ? \"IN PROGRESS. Building\" : \"Built\",\n                            \" with \",\n                            renderTags(),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    renderAssets(),\n                    github ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"See the code on \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: github,\n                                children: \"Github\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anissa/Projects/personal-site/src/components/project-card.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectCard, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = ProjectCard;\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTU1BO0FBTmtDO0FBQ2U7QUFFeEI7QUFDRjtBQVFkLFNBQVNNLFlBQVksS0FPbkMsRUFBRTtRQU5EQyxRQURrQyxNQUNsQ0EsT0FDQUMsY0FGa0MsTUFFbENBLGFBQ0FDLFNBSGtDLE1BR2xDQSxRQUNBQyxPQUprQyxNQUlsQ0EsTUFDQUMsYUFMa0MsTUFLbENBLFlBQ0FDLFNBTmtDLE1BTWxDQTtRQUlTQyxjQUFULFNBQVNBLGNBQWM7UUFDckJDLFVBQVUsU0FBQ0MsV0FBYztZQUN2QixPQUFPLENBQUNBO1FBQ1Y7SUFDRjtRQUVTQyxlQUFULFNBQVNBLGVBQWU7O1FBQ3RCLElBQUlQLFdBQVdRLGFBQWFSLE9BQU9TLE1BQU0sSUFBSSxHQUFHO1FBQ2hELHFCQUNFLDhEQUFDQztZQUFJQyxXQUFXLEdBQXlCLE9BQXRCakIsdUZBQXFCO3NCQUNyQ00sT0FBT2EsR0FBRyxDQUFDLFNBQUNDLE9BQU9DLEdBQU07Z0JBQ3hCLHFCQUNFLDhEQUFDcEIsbURBQUtBO29CQUNKcUIsS0FBS0MsOERBQVEsS0FBdUIsT0FBVkgsTUFBTUUsR0FBRztvQkFDbkNFLEtBQUtKLE1BQU1JLEdBQUc7b0JBRWRDLE9BQU07b0JBQ05DLFFBQU87bUJBRkZMOzs7OztZQUtYOzs7Ozs7SUFHTjtRQUVTTSxhQUFULFNBQVNBLGFBQWE7UUFDcEIsT0FBT3BCLEtBQUtxQixJQUFJLENBQUM7SUFDbkI7O0lBN0JBLElBQTRCN0IsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEtBQUssT0FBbkM4QixTQUFxQjlCLGNBQWJZLFlBQWFaO0lBK0I1QitCLFFBQVFDLEdBQUcsQ0FBQ3ZCO0lBRVoscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVcsR0FBZSxPQUFaakIsNkVBQVc7OzBCQUM1Qiw4REFBQ2lDO2dCQUFPQyxTQUFTeEI7MEJBQ2YsNEVBQUNNO29CQUNDQyxXQUFXLGlCQUNpQmpCLE9BQXhCSCxxTkFBb0IsRUFBQyxLQUNyQmdDLE9BRHdCN0Isa0ZBQWdCLEVBQUMsbUJBQ0YsT0FBdkM2QixTQUFTN0Isd0ZBQXNCLEdBQUcsSUFBSTs4QkFFMUMsNEVBQUNxQztrQ0FBSWpDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDWTtnQkFBSUMsV0FBV1ksU0FBUzdCLHVGQUFxQixHQUFHQSxpRkFBZTs7a0NBQzlELDhEQUFDZ0I7OzRCQUNFUixhQUFhLDBCQUEwQixPQUFPOzRCQUFDOzRCQUFPbUI7NEJBQWE7Ozs7Ozs7a0NBRXRFLDhEQUFDWDtrQ0FBS1g7Ozs7OztvQkFDTFE7b0JBQ0FKLHVCQUNDLDhEQUFDTzs7NEJBQUk7MENBQ2EsOERBQUNkLGtEQUFJQTtnQ0FBQ3NDLE1BQU0vQjswQ0FBUTs7Ozs7OzRCQUFhOzs7Ozs7K0JBRWpELElBQUk7Ozs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQztHQWxFdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtY2FyZC5qc3g/MDE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wcm9qZWN0LWNhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgU3BhY2VfTW9ubyB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3Qgc3BhY2VfbW9ubyA9IFNwYWNlX01vbm8oe1xuICB3ZWlnaHQ6IFwiNDAwXCIsXG4gIHN0eWxlOiBbXCJub3JtYWxcIiwgXCJpdGFsaWNcIl0sXG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDYXJkKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBhc3NldHMsXG4gIHRhZ3MsXG4gIGluUHJvZ3Jlc3MsXG4gIGdpdGh1Yixcbn0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBzZXRBY3RpdmUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuICFwcmV2U3RhdGU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJBc3NldHMoKSB7XG4gICAgaWYgKGFzc2V0cyA9PT0gdW5kZWZpbmVkIHx8IGFzc2V0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFzc2V0Q29udGFpbmVyfWB9PlxuICAgICAgICB7YXNzZXRzLm1hcCgoYXNzZXQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vYXNzZXRzLyR7YXNzZXQuc3JjfWApfVxuICAgICAgICAgICAgICBhbHQ9e2Fzc2V0LmFsdH1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB3aWR0aD1cIjgwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJUYWdzKCkge1xuICAgIHJldHVybiB0YWdzLmpvaW4oXCIsIFwiKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGluUHJvZ3Jlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfWB9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICR7c3BhY2VfbW9uby5jbGFzc05hbWV9ICR7c3R5bGVzLmNhcmRUaXRsZX0gXG4gICAgICAgICAgICAke2FjdGl2ZSA/IHN0eWxlcy5jYXJkVGl0bGVBY3RpdmUgOiBudWxsfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YWN0aXZlID8gc3R5bGVzLmNhcmRCb2R5QWN0aXZlIDogc3R5bGVzLmNhcmRCb2R5fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aW5Qcm9ncmVzcyA/IFwiSU4gUFJPR1JFU1MuIEJ1aWxkaW5nXCIgOiBcIkJ1aWx0XCJ9IHdpdGgge3JlbmRlclRhZ3MoKX0uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAge3JlbmRlckFzc2V0cygpfVxuICAgICAgICB7Z2l0aHViID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTZWUgdGhlIGNvZGUgb24gPExpbmsgaHJlZj17Z2l0aHVifT5HaXRodWI8L0xpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInNwYWNlX21vbm8iLCJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMaW5rIiwiUHJvamVjdENhcmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXNzZXRzIiwidGFncyIsImluUHJvZ3Jlc3MiLCJnaXRodWIiLCJoYW5kbGVDbGljayIsInNldEFjdGl2ZSIsInByZXZTdGF0ZSIsInJlbmRlckFzc2V0cyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImFzc2V0Q29udGFpbmVyIiwibWFwIiwiYXNzZXQiLCJpIiwic3JjIiwicmVxdWlyZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyVGFncyIsImpvaW4iLCJhY3RpdmUiLCJjb25zb2xlIiwibG9nIiwiY2FyZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYXJkVGl0bGUiLCJjYXJkVGl0bGVBY3RpdmUiLCJoMSIsImNhcmRCb2R5QWN0aXZlIiwiY2FyZEJvZHkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/project-card.jsx\n"));

/***/ })

});