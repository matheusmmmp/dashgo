"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./src/components/Pagination/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationItem */ \"./src/components/Pagination/PaginationItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Pagination(param) {\n    var totalCountOfRegisters = param.totalCountOfRegisters, _registerPerPage = param.registerPerPage, registerPerPage = _registerPerPage === void 0 ? 10 : _registerPerPage, _currentPage = param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, onPageChange = param.onPageChange;\n    var lastPage = Math.floor(totalCountOfRegisters / registerPerPage);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: [\n            \"column\",\n            \"row\"\n        ],\n        spacing: \"6\",\n        mt: \"8\",\n        justify: \"space-between\",\n        align: \"center\",\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"0\"\n                    }),\n                    \" - \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 38\n                        },\n                        __self: this,\n                        children: \"10\"\n                    }),\n                    \" de \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 61\n                        },\n                        __self: this,\n                        children: \"100\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                spacing: \"2\",\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 1,\n                        isCurrent: true,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 2,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 3,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 4,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 5,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 6,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0o7QUFTMUMsU0FBU0csVUFBVSxDQUFDLEtBS1QsRUFBRSxDQUFDO1FBSmpCQyxxQkFBcUIsR0FERSxLQUtULENBSmRBLHFCQUFxQixxQkFERSxLQUtULENBSGRDLGVBQWUsRUFBZkEsZUFBZSxpQ0FBRyxFQUFFLG9DQUZHLEtBS1QsQ0FGZEMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLENBQUMsaUJBQ2ZDLFlBQVksR0FKVyxLQUtULENBRGRBLFlBQVk7SUFFWixHQUFLLENBQUNDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLHFCQUFxQixHQUFDQyxlQUFlO0lBRWpFLE1BQU0sdUVBQ0RMLG1EQUFLO1FBQ05XLFNBQVMsRUFBRSxDQUFDO1lBQUEsQ0FBUTtZQUFDLENBQUs7UUFBQSxDQUFDO1FBQ3ZCQyxPQUFPLEVBQUMsQ0FBRztRQUNYQyxFQUFFLEVBQUMsQ0FBRztRQUNOQyxPQUFPLEVBQUMsQ0FBZTtRQUN2QkMsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7O2tGQUViZCxpREFBRzs7Ozs7Ozs7eUZBQ0NlLENBQU07Ozs7Ozs7a0NBQUMsQ0FBQzs7b0JBQVMsQ0FBRzt5RkFBQ0EsQ0FBTTs7Ozs7OztrQ0FBQyxDQUFFOztvQkFBUyxDQUFJO3lGQUFDQSxDQUFNOzs7Ozs7O2tDQUFDLENBQUc7Ozs7a0ZBRTFEaEIsbURBQUs7Z0JBQUNXLFNBQVMsRUFBQyxDQUFLO2dCQUFDQyxPQUFPLEVBQUMsQ0FBRzs7Ozs7Ozs7eUZBQy9CViwyREFBYzt3QkFBQ2UsTUFBTSxFQUFFLENBQUM7d0JBQUVDLFNBQVM7Ozs7Ozs7O3lGQUNuQ2hCLDJEQUFjO3dCQUFDZSxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7eUZBQ3hCZiwyREFBYzt3QkFBQ2UsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O3lGQUN4QmYsMkRBQWM7d0JBQUNlLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEJmLDJEQUFjO3dCQUFDZSxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7eUZBQ3hCZiwyREFBYzt3QkFBQ2UsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQUl2QyxDQUFDO0tBN0JlZCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vaW5kZXgudHN4P2MxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW0gfSBmcm9tIFwiLi9QYWdpbmF0aW9uSXRlbVwiO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2luYXRpb25Qcm9wcyB7XHJcbiAgICB0b3RhbENvdW50T2ZSZWdpc3RlcnM6IG51bWJlcjtcclxuICAgIHJlZ2lzdGVyUGVyUGFnZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xyXG4gICAgb25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbih7XHJcbiAgICB0b3RhbENvdW50T2ZSZWdpc3RlcnMsXHJcbiAgICByZWdpc3RlclBlclBhZ2UgPSAxMCxcclxuICAgIGN1cnJlbnRQYWdlID0gMSxcclxuICAgIG9uUGFnZUNoYW5nZSxcclxufTogUGFnaW5hdGlvblByb3BzKSB7XHJcbiAgICBjb25zdCBsYXN0UGFnZSA9IE1hdGguZmxvb3IodG90YWxDb3VudE9mUmVnaXN0ZXJzL3JlZ2lzdGVyUGVyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e1tcImNvbHVtblwiLFwicm93XCJdfVxyXG4gICAgICAgICAgICBzcGFjaW5nPVwiNlwiXHJcbiAgICAgICAgICAgIG10PVwiOFwiXHJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MDwvc3Ryb25nPiAtIDxzdHJvbmc+MTA8L3N0cm9uZz4gZGUgPHN0cm9uZz4xMDA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPVwiMlwiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXsxfSBpc0N1cnJlbnQgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXsyfSAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezN9IC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17NH0gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXs1fSAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezZ9IC8+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiU3RhY2siLCJCb3giLCJQYWdpbmF0aW9uSXRlbSIsIlBhZ2luYXRpb24iLCJ0b3RhbENvdW50T2ZSZWdpc3RlcnMiLCJyZWdpc3RlclBlclBhZ2UiLCJjdXJyZW50UGFnZSIsIm9uUGFnZUNoYW5nZSIsImxhc3RQYWdlIiwiTWF0aCIsImZsb29yIiwiZGlyZWN0aW9uIiwic3BhY2luZyIsIm10IiwianVzdGlmeSIsImFsaWduIiwic3Ryb25nIiwibnVtYmVyIiwiaXNDdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.tsx\n");

/***/ })

});