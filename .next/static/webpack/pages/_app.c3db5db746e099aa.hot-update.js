"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction makeServer() {\n    var server1 = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        serializers: {\n            application: miragejs__WEBPACK_IMPORTED_MODULE_1__.ActiveModelSerializer\n        },\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({\n            })\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                name: function(i) {\n                    return \"User \".concat(i + 1);\n                },\n                email: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().internet.email().toLowerCase();\n                },\n                createdAt: function() {\n                    return faker__WEBPACK_IMPORTED_MODULE_0___default().date.recent(10);\n                }\n            })\n        },\n        seeds: function(server) {\n            server.createList('user', 200);\n        },\n        routes: function() {\n            this.namespace = 'api';\n            this.timing = 750;\n            this.get('/users', function(schema, request) {\n                var _queryParams = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _per_page = _queryParams.per_page, per_page = _per_page === void 0 ? 10 : _per_page;\n                var total = schema.all('user').length;\n                var pageStart = (Number(page) - 1) * Number(per_page);\n                var pageEnd = pageStart + Number(per_page);\n                var users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response(200, {\n                    'x-total-count': String(total)\n                }, {\n                    users: users\n                });\n            });\n            this.get('/users/:id');\n            this.post('/users');\n            this.namespace = '';\n            this.passthrough();\n        }\n    });\n    return server1;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdGO0FBQy9EO0FBUWxCLFNBQVNNLFVBQVUsR0FBRyxDQUFDO0lBQzFCLEdBQUssQ0FBQ0MsT0FBTSxHQUFHUCxzREFBWSxDQUFDLENBQUM7UUFDekJRLFdBQVcsRUFBRSxDQUFDO1lBQ1ZDLFdBQVcsRUFBRUwsMkRBQXFCO1FBQ3RDLENBQUM7UUFDRE0sTUFBTSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFVCxrREFBWSxDQUFnQixDQUFDO1lBQUEsQ0FBQztRQUN4QyxDQUFDO1FBQ0RXLFNBQVMsRUFBQyxDQUFDO1lBQ1BGLElBQUksRUFBQ1Ysb0RBQWMsQ0FBQyxDQUFDO2dCQUNqQmEsSUFBSSxFQUFKQSxRQUFRLENBQUhDLENBQVMsRUFBQyxDQUFDO29CQUNaLE1BQU0sQ0FBRSxDQUFLLE9BQU0sT0FBSkEsQ0FBQyxHQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0RDLEtBQUssRUFBTEEsUUFBUSxHQUFELENBQUM7b0JBQ0osTUFBTSxDQUFDWCwyREFBb0IsR0FBR2EsV0FBVztnQkFDN0MsQ0FBQztnQkFDREMsU0FBUyxFQUFUQSxRQUFRLEdBQUcsQ0FBQztvQkFDUixNQUFNLENBQUNkLHdEQUFpQixDQUFDLEVBQUU7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNEaUIsS0FBSyxFQUFMQSxRQUFRLENBQUZmLE1BQU0sRUFBQyxDQUFDO1lBQ1ZBLE1BQU0sQ0FBQ2dCLFVBQVUsQ0FBQyxDQUFNLE9BQUMsR0FBRztRQUNoQyxDQUFDO1FBQ0RDLE1BQU0sRUFBTkEsUUFBUSxJQUFDO1lBQ0wsSUFBSSxDQUFDQyxTQUFTLEdBQUcsQ0FBSztZQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO1lBRWpCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQVEsU0FBRSxRQUFRLENBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQzNDLEdBQUssQ0FBK0JBLFlBQW1CLEdBQW5CQSxPQUFPLENBQUNDLFdBQVcsVUFBbkJELFlBQW1CLENBQS9DRSxJQUFJLEVBQUpBLElBQUksc0JBQUcsQ0FBQyxzQkFBb0JGLFlBQW1CLENBQXJDRyxRQUFRLEVBQVJBLFFBQVEsMEJBQUcsRUFBRTtnQkFFL0IsR0FBSyxDQUFDQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQU0sT0FBRUMsTUFBTTtnQkFFdkMsR0FBSyxDQUFDQyxTQUFTLElBQUlDLE1BQU0sQ0FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSU0sTUFBTSxDQUFDTCxRQUFRO2dCQUN0RCxHQUFLLENBQUNNLE9BQU8sR0FBR0YsU0FBUyxHQUFHQyxNQUFNLENBQUNMLFFBQVE7Z0JBRTNDLEdBQUssQ0FBQ08sS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixNQUFNLENBQUNNLEdBQUcsQ0FBQyxDQUFNLFFBQ3pDSyxLQUFLLENBQ0xFLEtBQUssQ0FBQ0wsU0FBUyxFQUFDRSxPQUFPO2dCQUU1QixNQUFNLENBQUMsR0FBRyxDQUFDbkMsOENBQVEsQ0FDZixHQUFHLEVBQ0gsQ0FBQztvQkFBQyxDQUFlLGdCQUFFdUMsTUFBTSxDQUFDVCxLQUFLO2dCQUFDLENBQUMsRUFDakMsQ0FBQztvQkFBQ00sS0FBSyxFQUFMQSxLQUFLO2dCQUFDLENBQUM7WUFFakIsQ0FBQztZQUVELElBQUksQ0FBQ1osR0FBRyxDQUFDLENBQVk7WUFDckIsSUFBSSxDQUFDZ0IsSUFBSSxDQUFDLENBQVE7WUFFbEIsSUFBSSxDQUFDbEIsU0FBUyxHQUFHLENBQUU7WUFDbkIsSUFBSSxDQUFDbUIsV0FBVztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQ3JDLE9BQU07QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzPzRmMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCwgUmVzcG9uc2UsIEFjdGl2ZU1vZGVsU2VyaWFsaXplciB9IGZyb20gJ21pcmFnZWpzJ1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInXHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoe1xyXG4gICAgICAgIHNlcmlhbGl6ZXJzOiB7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uOiBBY3RpdmVNb2RlbFNlcmlhbGl6ZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlbHM6IHtcclxuICAgICAgICAgICAgdXNlcjogTW9kZWwuZXh0ZW5kPFBhcnRpYWw8VXNlcj4+KHt9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFjdG9yaWVzOntcclxuICAgICAgICAgICAgdXNlcjpGYWN0b3J5LmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lKGk6IG51bWJlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBVc2VyICR7aSsxfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbWFpbCgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0KCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZha2VyLmRhdGUucmVjZW50KDEwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWVkcyhzZXJ2ZXIpe1xyXG4gICAgICAgICAgICBzZXJ2ZXIuY3JlYXRlTGlzdCgndXNlcicsMjAwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm91dGVzKCl7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaSc7XHJcbiAgICAgICAgICAgIHRoaXMudGltaW5nID0gNzUwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXQoJy91c2VycycsIGZ1bmN0aW9uIChzY2hlbWEsIHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IHJlcXVlc3QucXVlcnlQYXJhbXNcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IHNjaGVtYS5hbGwoJ3VzZXInKS5sZW5ndGhcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlU3RhcnQgPSAoTnVtYmVyKHBhZ2UpIC0gMSkgKiBOdW1iZXIocGVyX3BhZ2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZUVuZCA9IHBhZ2VTdGFydCArIE51bWJlcihwZXJfcGFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnNlcmlhbGl6ZShzY2hlbWEuYWxsKCd1c2VyJykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKHBhZ2VTdGFydCxwYWdlRW5kKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgJ3gtdG90YWwtY291bnQnOiBTdHJpbmcodG90YWwpfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHVzZXJzIH1cclxuICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXQoJy91c2Vycy86aWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0KCcvdXNlcnMnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3Rocm91Z2goKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzZXJ2ZXI7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiUmVzcG9uc2UiLCJBY3RpdmVNb2RlbFNlcmlhbGl6ZXIiLCJmYWtlciIsIm1ha2VTZXJ2ZXIiLCJzZXJ2ZXIiLCJzZXJpYWxpemVycyIsImFwcGxpY2F0aW9uIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsImZhY3RvcmllcyIsIm5hbWUiLCJpIiwiZW1haWwiLCJpbnRlcm5ldCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlZEF0IiwiZGF0ZSIsInJlY2VudCIsInNlZWRzIiwiY3JlYXRlTGlzdCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInNjaGVtYSIsInJlcXVlc3QiLCJxdWVyeVBhcmFtcyIsInBhZ2UiLCJwZXJfcGFnZSIsInRvdGFsIiwiYWxsIiwibGVuZ3RoIiwicGFnZVN0YXJ0IiwiTnVtYmVyIiwicGFnZUVuZCIsInVzZXJzIiwic2VyaWFsaXplIiwic2xpY2UiLCJTdHJpbmciLCJwb3N0IiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

/***/ })

});