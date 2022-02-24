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

/***/ "./src/services/hooks/useUsers.ts":
/*!****************************************!*\
  !*** ./src/services/hooks/useUsers.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"useUsers\": function() { return /* binding */ useUsers; }\n/* harmony export */ });\n/* harmony import */ var D_Project_RocketSeat_04_dashgo_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Project_RocketSeat_04_dashgo_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Project_RocketSeat_04_dashgo_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction getUsers(page) {\n    return _getUsers.apply(this, arguments);\n}\nfunction _getUsers() {\n    _getUsers = _asyncToGenerator(D_Project_RocketSeat_04_dashgo_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n        var ref, data, headers, totalCount, users;\n        return D_Project_RocketSeat_04_dashgo_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api__WEBPACK_IMPORTED_MODULE_2__.api.get('users', {\n                        params: {\n                            page: page\n                        }\n                    });\n                case 2:\n                    ref = _ctx.sent;\n                    data = ref.data;\n                    headers = ref.headers;\n                    totalCount = Number(headers['x-total-count']);\n                    users = data.users.map(function(user) {\n                        return {\n                            id: user.id,\n                            name: user.name,\n                            email: user.email,\n                            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {\n                                day: '2-digit',\n                                month: 'long',\n                                year: 'numeric'\n                            })\n                        };\n                    });\n                    return _ctx.abrupt(\"return\", {\n                        users: users,\n                        totalCount: totalCount\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getUsers.apply(this, arguments);\n}\nfunction useUsers(page, options) {\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        'users',\n        page\n    ], function() {\n        return getUsers(page);\n    }, _objectSpread({\n        staleTime: 1000 * 60 * 10\n    }, options));\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvaG9va3MvdXNlVXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3JCLFNBQWVFLFFBQVEsQ0FBQ0MsSUFBVztXQUFwQkQsU0FBUTs7U0FBUkEsU0FBUTtJQUFSQSxTQUFRLDhKQUF2QixRQUFRLFNBQWdCQyxJQUFXLEVBQTZCLENBQUM7WUFDMUMsR0FJeEIsRUFKTUMsSUFBSSxFQUFFQyxPQUFPLEVBTWZDLFVBQVUsRUFFVkMsS0FBSzs7Ozs7MkJBUnFCTix5Q0FBTyxDQUFDLENBQU8sUUFBRSxDQUFDO3dCQUM5Q1EsTUFBTSxFQUFFLENBQUM7NEJBQ0xOLElBQUksRUFBSkEsSUFBSTt3QkFDUixDQUFDO29CQUNMLENBQUM7O29CQUp5QixHQUl4QjtvQkFKTUMsSUFBSSxHQUFjLEdBSXhCLENBSk1BLElBQUk7b0JBQUVDLE9BQU8sR0FBSyxHQUl4QixDQUpZQSxPQUFPO29CQU1mQyxVQUFVLEdBQUdJLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDLENBQWU7b0JBRTNDRSxLQUFLLEdBQUdILElBQUksQ0FBQ0csS0FBSyxDQUFDSSxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxDQUFDOzRCQUNKQyxFQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFBRTs0QkFDWEMsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7NEJBQ2ZDLEtBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUFLOzRCQUNqQkMsU0FBUyxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJLENBQUNJLFNBQVMsRUFBRUUsa0JBQWtCLENBQUMsQ0FBTyxRQUFFLENBQUM7Z0NBQzdEQyxHQUFHLEVBQUUsQ0FBUztnQ0FDZEMsS0FBSyxFQUFFLENBQU07Z0NBQ2JDLElBQUksRUFBRSxDQUFTOzRCQUNuQixDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztpREFFTSxDQUFDO3dCQUNKZCxLQUFLLEVBQUxBLEtBQUs7d0JBQ0xELFVBQVUsRUFBVkEsVUFBVTtvQkFDZCxDQUFDOzs7Ozs7SUFDTCxDQUFDO1dBMUJxQkosU0FBUTs7QUE0QnZCLFNBQVNvQixRQUFRLENBQUNuQixJQUFZLEVBQUVvQixPQUF3QixFQUFFLENBQUM7SUFDOUQsTUFBTSxDQUFDdkIscURBQVEsQ0FBQyxDQUFDO1FBQUEsQ0FBTztRQUFFRyxJQUFJO0lBQUEsQ0FBQyxFQUFFLFFBQVE7UUFBRkQsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7O1FBQ2hEcUIsU0FBUyxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRTtPQUN0QkQsT0FBTztBQUVsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9ob29rcy91c2VVc2Vycy50cz9jMGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBVc2VRdWVyeU9wdGlvbnMgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2FwaVwiO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBHZXRVc2Vyc1Jlc3BvbnNlID0ge1xyXG4gICAgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gICAgdXNlcnM6IFVzZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKHBhZ2U6bnVtYmVyKTogUHJvbWlzZTxHZXRVc2Vyc1Jlc3BvbnNlPiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGhlYWRlcnMgfSA9IGF3YWl0IGFwaS5nZXQoJ3VzZXJzJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdG90YWxDb3VudCA9IE51bWJlcihoZWFkZXJzWyd4LXRvdGFsLWNvdW50J10pXHJcblxyXG4gICAgY29uc3QgdXNlcnMgPSBkYXRhLnVzZXJzLm1hcCh1c2VyID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSh1c2VyLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicsIHtcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJzLFxyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VycyhwYWdlOiBudW1iZXIsIG9wdGlvbnM6IFVzZVF1ZXJ5T3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHVzZVF1ZXJ5KFsndXNlcnMnLCBwYWdlXSwgKCkgPT4gZ2V0VXNlcnMocGFnZSksIHtcclxuICAgICAgICBzdGFsZVRpbWU6IDEwMDAgKiA2MCAqIDEwLFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiYXBpIiwiZ2V0VXNlcnMiLCJwYWdlIiwiZGF0YSIsImhlYWRlcnMiLCJ0b3RhbENvdW50IiwidXNlcnMiLCJnZXQiLCJwYXJhbXMiLCJOdW1iZXIiLCJtYXAiLCJ1c2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwidXNlVXNlcnMiLCJvcHRpb25zIiwic3RhbGVUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/hooks/useUsers.ts\n");

/***/ })

});