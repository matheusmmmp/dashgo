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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationItem */ \"./src/components/Pagination/PaginationItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar siblingsCount = 1;\nfunction generatePagesArray(from, to) {\n    return _toConsumableArray(new Array(to - from)).map(function(_, index) {\n        return from + index + 1;\n    }).filter(function(page) {\n        return page > 0;\n    });\n}\nfunction Pagination(param) {\n    var totalCountOfRegisters = param.totalCountOfRegisters, _registerPerPage = param.registerPerPage, registerPerPage = _registerPerPage === void 0 ? 10 : _registerPerPage, _currentPage = param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, onPageChange = param.onPageChange;\n    var lastPage = Math.floor(totalCountOfRegisters / registerPerPage);\n    var previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];\n    var nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        direction: [\n            \"column\",\n            \"row\"\n        ],\n        spacing: \"6\",\n        mt: \"8\",\n        justify: \"space-between\",\n        align: \"center\",\n        __source: {\n            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"0\"\n                    }),\n                    \" - \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 38\n                        },\n                        __self: this,\n                        children: \"10\"\n                    }),\n                    \" de \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 61\n                        },\n                        __self: this,\n                        children: \"100\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                direction: \"row\",\n                spacing: \"2\",\n                __source: {\n                    fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 1,\n                        isCurrent: true,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 2,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 3,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 4,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 5,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PaginationItem__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        number: 6,\n                        __source: {\n                            fileName: \"D:\\\\Project\\\\RocketSeat\\\\04-dashgo\\\\src\\\\components\\\\Pagination\\\\index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNqRCxHQUFLLENBQUNHLGFBQWEsR0FBRyxDQUFDO1NBRWRDLGtCQUFrQixDQUFDQyxJQUFZLEVBQUVDLEVBQVUsRUFBQyxDQUFDO0lBQ2xELE1BQU0sb0JBQUssR0FBRyxDQUFDQyxLQUFLLENBQUNELEVBQUUsR0FBR0QsSUFBSSxHQUN6QkcsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFDQyxLQUFLLEVBQUksQ0FBQztRQUNkLE1BQU0sQ0FBQ0wsSUFBSSxHQUFHSyxLQUFLLEdBQUcsQ0FBQztJQUMzQixDQUFDLEVBQ0FDLE1BQU0sQ0FBQ0MsUUFBUUEsQ0FBUkEsSUFBSTtRQUFJQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztBQUNoQyxDQUFDO0FBRU0sU0FBU0MsVUFBVSxDQUFDLEtBS1QsRUFBRSxDQUFDO1FBSmpCQyxxQkFBcUIsR0FERSxLQUtULENBSmRBLHFCQUFxQixxQkFERSxLQUtULENBSGRDLGVBQWUsRUFBZkEsZUFBZSxpQ0FBRyxFQUFFLG9DQUZHLEtBS1QsQ0FGZEMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLENBQUMsaUJBQ2ZDLFlBQVksR0FKVyxLQUtULENBRGRBLFlBQVk7SUFFWixHQUFLLENBQUNDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLHFCQUFxQixHQUFDQyxlQUFlO0lBRWpFLEdBQUssQ0FBQ00sYUFBYSxHQUFHTCxXQUFXLEdBQUcsQ0FBQyxHQUMvQlosa0JBQWtCLENBQUNZLFdBQVcsR0FBRyxDQUFDLEdBQUdiLGFBQWEsRUFBRWEsV0FBVyxHQUFHLENBQUMsSUFDbkUsQ0FBQyxDQUFDO0lBQ1IsR0FBSyxDQUFDTSxTQUFTLEdBQUdOLFdBQVcsR0FBR0UsUUFBUSxHQUNsQ2Qsa0JBQWtCLENBQUNZLFdBQVcsRUFBQ0csSUFBSSxDQUFDSSxHQUFHLENBQUNQLFdBQVcsR0FBR2IsYUFBYSxFQUFFZSxRQUFRLEtBQzdFLENBQUMsQ0FBQztJQUNSLE1BQU0sdUVBQ0RsQixtREFBSztRQUNOd0IsU0FBUyxFQUFFLENBQUM7WUFBQSxDQUFRO1lBQUMsQ0FBSztRQUFBLENBQUM7UUFDdkJDLE9BQU8sRUFBQyxDQUFHO1FBQ1hDLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE9BQU8sRUFBQyxDQUFlO1FBQ3ZCQyxLQUFLLEVBQUMsQ0FBUTs7Ozs7Ozs7a0ZBRWIzQixpREFBRzs7Ozs7Ozs7eUZBQ0M0QixDQUFNOzs7Ozs7O2tDQUFDLENBQUM7O29CQUFTLENBQUc7eUZBQUNBLENBQU07Ozs7Ozs7a0NBQUMsQ0FBRTs7b0JBQVMsQ0FBSTt5RkFBQ0EsQ0FBTTs7Ozs7OztrQ0FBQyxDQUFHOzs7O2tGQUUxRDdCLG1EQUFLO2dCQUFDd0IsU0FBUyxFQUFDLENBQUs7Z0JBQUNDLE9BQU8sRUFBQyxDQUFHOzs7Ozs7Ozt5RkFDL0J2QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDO3dCQUFFQyxTQUFTOzs7Ozs7Ozt5RkFDbkM3QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEI1QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEI1QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEI1QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozt5RkFDeEI1QiwyREFBYzt3QkFBQzRCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7QUFJdkMsQ0FBQztLQW5DZWpCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC50c3g/YzFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjaywgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbSB9IGZyb20gXCIuL1BhZ2luYXRpb25JdGVtXCI7XHJcblxyXG5pbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcclxuICAgIHRvdGFsQ291bnRPZlJlZ2lzdGVyczogbnVtYmVyO1xyXG4gICAgcmVnaXN0ZXJQZXJQYWdlPzogbnVtYmVyO1xyXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XHJcbiAgICBvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IHNpYmxpbmdzQ291bnQgPSAxO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlc0FycmF5KGZyb206IG51bWJlciwgdG86IG51bWJlcil7XHJcbiAgICByZXR1cm4gWy4uLm5ldyBBcnJheSh0byAtIGZyb20pXVxyXG4gICAgICAgIC5tYXAoKF8saW5kZXgpID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gZnJvbSArIGluZGV4ICsgMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIocGFnZSA9PiBwYWdlID4gMClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2luYXRpb24oe1xyXG4gICAgdG90YWxDb3VudE9mUmVnaXN0ZXJzLFxyXG4gICAgcmVnaXN0ZXJQZXJQYWdlID0gMTAsXHJcbiAgICBjdXJyZW50UGFnZSA9IDEsXHJcbiAgICBvblBhZ2VDaGFuZ2UsXHJcbn06IFBhZ2luYXRpb25Qcm9wcykge1xyXG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsQ291bnRPZlJlZ2lzdGVycy9yZWdpc3RlclBlclBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzUGFnZXMgPSBjdXJyZW50UGFnZSA+IDFcclxuICAgICAgICA/IGdlbmVyYXRlUGFnZXNBcnJheShjdXJyZW50UGFnZSAtIDEgLSBzaWJsaW5nc0NvdW50LCBjdXJyZW50UGFnZSAtIDEpXHJcbiAgICAgICAgOiBbXVxyXG4gICAgY29uc3QgbmV4dFBhZ2VzID0gY3VycmVudFBhZ2UgPCBsYXN0UGFnZVxyXG4gICAgICAgID8gZ2VuZXJhdGVQYWdlc0FycmF5KGN1cnJlbnRQYWdlLE1hdGgubWluKGN1cnJlbnRQYWdlICsgc2libGluZ3NDb3VudCwgbGFzdFBhZ2UpKVxyXG4gICAgICAgIDogW11cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPXtbXCJjb2x1bW5cIixcInJvd1wiXX1cclxuICAgICAgICAgICAgc3BhY2luZz1cIjZcIlxyXG4gICAgICAgICAgICBtdD1cIjhcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjA8L3N0cm9uZz4gLSA8c3Ryb25nPjEwPC9zdHJvbmc+IGRlIDxzdHJvbmc+MTAwPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz1cIjJcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17MX0gaXNDdXJyZW50IC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17Mn0gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXszfSAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBudW1iZXI9ezR9IC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25JdGVtIG51bWJlcj17NX0gLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gbnVtYmVyPXs2fSAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlN0YWNrIiwiQm94IiwiUGFnaW5hdGlvbkl0ZW0iLCJzaWJsaW5nc0NvdW50IiwiZ2VuZXJhdGVQYWdlc0FycmF5IiwiZnJvbSIsInRvIiwiQXJyYXkiLCJtYXAiLCJfIiwiaW5kZXgiLCJmaWx0ZXIiLCJwYWdlIiwiUGFnaW5hdGlvbiIsInRvdGFsQ291bnRPZlJlZ2lzdGVycyIsInJlZ2lzdGVyUGVyUGFnZSIsImN1cnJlbnRQYWdlIiwib25QYWdlQ2hhbmdlIiwibGFzdFBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJwcmV2aW91c1BhZ2VzIiwibmV4dFBhZ2VzIiwibWluIiwiZGlyZWN0aW9uIiwic3BhY2luZyIsIm10IiwianVzdGlmeSIsImFsaWduIiwic3Ryb25nIiwibnVtYmVyIiwiaXNDdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.tsx\n");

/***/ })

});