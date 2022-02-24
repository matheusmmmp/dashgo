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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationItem */ \"./src/components/Pagination/PaginationItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar siblingsCount = 1;\nfunction generatePagesArray(from, to) {\n    return _toConsumableArray(new Array(to - from)).map(function(_, index) {\n        return from + index + 1;\n    }).filter(function(page) {\n        return page > 0;\n    });\n}\nfunction Pagination(param) {\n    var totalCountOfRegisters = param.totalCountOfRegisters, _registerPerPage = param.registerPerPage, registerPerPage = _registerPerPage === void 0 ? 10 : _registerPerPage, _currentPage = param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, onPageChange = param.onPageChange;\n    var lastPage = Math.floor(totalCountOfRegisters / registerPerPage);\n    var previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: [\n            \"column\",\n            \"row\"\n        ],\n        spacing: \"6\",\n        mt: \"8\",\n        justify: \"space-between\",\n        align: \"center\",\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"0\"\n                    }),\n                    \" - \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 38\n                        },\n                        __self: this,\n                        children: \"10\"\n                    }),\n                    \" de \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 61\n                        },\n                        __self: this,\n                        children: \"100\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                spacing: \"2\",\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 1,\n                        isCurrent: true,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 2,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 3,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 4,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 5,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 6,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqRCxHQUFLLENBQUNHLGFBQWEsR0FBRyxDQUFDO1NBRWRDLGtCQUFrQixDQUFDQyxJQUFZLEVBQUVDLEVBQVUsRUFBQyxDQUFDO0lBQ2xELE1BQU0sb0JBQUssR0FBRyxDQUFDQyxLQUFLLENBQUNELEVBQUUsR0FBR0QsSUFBSSxHQUN6QkcsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFDQyxLQUFLLEVBQUksQ0FBQztRQUNkLE1BQU0sQ0FBQ0wsSUFBSSxHQUFHSyxLQUFLLEdBQUcsQ0FBQztJQUMzQixDQUFDLEVBQ0FDLE1BQU0sQ0FBQ0MsUUFBUUEsQ0FBUkEsSUFBSTtRQUFJQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztBQUNoQyxDQUFDO0FBRU0sU0FBU0MsVUFBVSxDQUFDLEtBS1QsRUFBRSxDQUFDO1FBSmpCQyxxQkFBcUIsR0FERSxLQUtULENBSmRBLHFCQUFxQixxQkFERSxLQUtULENBSGRDLGVBQWUsRUFBZkEsZUFBZSxpQ0FBRyxFQUFFLG9DQUZHLEtBS1QsQ0FGZEMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLENBQUMsaUJBQ2ZDLFlBQVksR0FKVyxLQUtULENBRGRBLFlBQVk7SUFFWixHQUFLLENBQUNDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLHFCQUFxQixHQUFDQyxlQUFlO0lBRWpFLEdBQUssQ0FBQ00sYUFBYSxHQUFHTCxXQUFXLEdBQUcsQ0FBQyxHQUMvQlosa0JBQWtCLENBQUNZLFdBQVcsR0FBRyxDQUFDLEdBQUdiLGFBQWEsRUFBRWEsV0FBVyxHQUFHLENBQUMsSUFDbkUsQ0FBQyxDQUFDO0lBRVIsTUFBTSx1RUFDRGhCLG1EQUFLO1FBQ05zQixTQUFTLEVBQUUsQ0FBQztZQUFBLENBQVE7WUFBQyxDQUFLO1FBQUEsQ0FBQztRQUN2QkMsT0FBTyxFQUFDLENBQUc7UUFDWEMsRUFBRSxFQUFDLENBQUc7UUFDTkMsT0FBTyxFQUFDLENBQWU7UUFDdkJDLEtBQUssRUFBQyxDQUFROzs7Ozs7OztrRkFFYnpCLGlEQUFHOzs7Ozs7Ozt5RkFDQzBCLENBQU07Ozs7Ozs7a0NBQUMsQ0FBQzs7b0JBQVMsQ0FBRzt5RkFBQ0EsQ0FBTTs7Ozs7OztrQ0FBQyxDQUFFOztvQkFBUyxDQUFJO3lGQUFDQSxDQUFNOzs7Ozs7O2tDQUFDLENBQUc7Ozs7a0ZBRTFEM0IsbURBQUs7Z0JBQUNzQixTQUFTLEVBQUMsQ0FBSztnQkFBQ0MsT0FBTyxFQUFDLENBQUc7Ozs7Ozs7O3lGQUMvQnJCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7d0JBQUVDLFNBQVM7Ozs7Ozs7O3lGQUNuQzNCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O3lGQUN4QjFCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O3lGQUN4QjFCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O3lGQUN4QjFCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O3lGQUN4QjFCLDJEQUFjO3dCQUFDMEIsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQUl2QyxDQUFDO0tBakNlZixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vaW5kZXgudHN4P2MxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIEJ1dHRvbiwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW0gfSBmcm9tIFwiLi9QYWdpbmF0aW9uSXRlbVwiO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2luYXRpb25Qcm9wcyB7XHJcbiAgICB0b3RhbENvdW50T2ZSZWdpc3RlcnM6IG51bWJlcjtcclxuICAgIHJlZ2lzdGVyUGVyUGFnZT86IG51bWJlcjtcclxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xyXG4gICAgb25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBzaWJsaW5nc0NvdW50ID0gMTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZXNBcnJheShmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpe1xyXG4gICAgcmV0dXJuIFsuLi5uZXcgQXJyYXkodG8gLSBmcm9tKV1cclxuICAgICAgICAubWFwKChfLGluZGV4KSA9PntcclxuICAgICAgICAgICAgcmV0dXJuIGZyb20gKyBpbmRleCArIDE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKHBhZ2UgPT4gcGFnZSA+IDApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHtcclxuICAgIHRvdGFsQ291bnRPZlJlZ2lzdGVycyxcclxuICAgIHJlZ2lzdGVyUGVyUGFnZSA9IDEwLFxyXG4gICAgY3VycmVudFBhZ2UgPSAxLFxyXG4gICAgb25QYWdlQ2hhbmdlLFxyXG59OiBQYWdpbmF0aW9uUHJvcHMpIHtcclxuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5mbG9vcih0b3RhbENvdW50T2ZSZWdpc3RlcnMvcmVnaXN0ZXJQZXJQYWdlKTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c1BhZ2VzID0gY3VycmVudFBhZ2UgPiAxXHJcbiAgICAgICAgPyBnZW5lcmF0ZVBhZ2VzQXJyYXkoY3VycmVudFBhZ2UgLSAxIC0gc2libGluZ3NDb3VudCwgY3VycmVudFBhZ2UgLSAxKVxyXG4gICAgICAgIDogW11cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdGFja1xyXG4gICAgICAgIGRpcmVjdGlvbj17W1wiY29sdW1uXCIsXCJyb3dcIl19XHJcbiAgICAgICAgICAgIHNwYWNpbmc9XCI2XCJcclxuICAgICAgICAgICAgbXQ9XCI4XCJcclxuICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4wPC9zdHJvbmc+IC0gPHN0cm9uZz4xMDwvc3Ryb25nPiBkZSA8c3Ryb25nPjEwMDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9XCIyXCI+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezF9IGlzQ3VycmVudCAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17M30gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXs0fSAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezV9IC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17Nn0gLz5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJTdGFjayIsIkJveCIsIlBhZ2luYXRpb25JdGVtIiwic2libGluZ3NDb3VudCIsImdlbmVyYXRlUGFnZXNBcnJheSIsImZyb20iLCJ0byIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiZmlsdGVyIiwicGFnZSIsIlBhZ2luYXRpb24iLCJ0b3RhbENvdW50T2ZSZWdpc3RlcnMiLCJyZWdpc3RlclBlclBhZ2UiLCJjdXJyZW50UGFnZSIsIm9uUGFnZUNoYW5nZSIsImxhc3RQYWdlIiwiTWF0aCIsImZsb29yIiwicHJldmlvdXNQYWdlcyIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJtdCIsImp1c3RpZnkiLCJhbGlnbiIsInN0cm9uZyIsIm51bWJlciIsImlzQ3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.tsx\n");

/***/ })

});