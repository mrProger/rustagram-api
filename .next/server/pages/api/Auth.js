"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/Auth";
exports.ids = ["pages/api/Auth"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-session");;

/***/ }),

/***/ "(api)/./pages/api/Auth.js":
/*!***************************!*\
  !*** ./pages/api/Auth.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auth),\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_2__]);\nnext_session__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"HEAD\",\n        \"POST\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function Auth(req, res) {\n    await runMiddleware(req, res, cors);\n    if (req.method === \"POST\") {\n        if (!req.body[\"login\"] || !req.body[\"password\"]) {\n            res.status(403).send(\"Not found login or password\");\n            return;\n        }\n        try {\n            let user = await prisma.account.findFirst({\n                where: {\n                    login: {\n                        contains: req.body[\"login\"]\n                    },\n                    password: {\n                        contains: md5(req.body[\"password\"])\n                    }\n                }\n            });\n            const session = await getSession(req, res);\n            session.user = user != null ? user : \"Incorrect login or password\";\n            await session.commit();\n            res.status(200).send(session.user);\n        } catch (error) {\n            res.status(403).send(error.message);\n        }\n    } else {\n        res.status(404).send(\"\\n\" + \"Supports only POST method\");\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgbmV4dFNlc3Npb24gZnJvbSBcIm5leHQtc2Vzc2lvblwiO1xuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBuZXh0U2Vzc2lvbigpO1xuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoJ0BwcmlzbWEvY2xpZW50Jyk7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5jb25zdCBtZDUgPSByZXF1aXJlKCdtZDUnKTtcblxuY29uc3QgY29ycyA9IENvcnMoe1xuICAgIG1ldGhvZHM6IFsnR0VUJywgJ0hFQUQnLCAnUE9TVCddLFxufSk7XG5cbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEF1dGggKHJlcSwgcmVzKSB7XG4gICAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycyk7XG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGlmICghcmVxLmJvZHlbJ2xvZ2luJ10gfHwgIXJlcS5ib2R5WydwYXNzd29yZCddKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnTm90IGZvdW5kIGxvZ2luIG9yIHBhc3N3b3JkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBwcmlzbWEuYWNjb3VudC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiB7IGNvbnRhaW5zOiByZXEuYm9keVsnbG9naW4nXSB9LFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBjb250YWluczogbWQ1KHJlcS5ib2R5WydwYXNzd29yZCddKSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxLCByZXMpO1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdXNlciAhPSBudWxsID8gdXNlciA6IFwiSW5jb3JyZWN0IGxvZ2luIG9yIHBhc3N3b3JkXCI7XG4gICAgICAgICAgICBhd2FpdCBzZXNzaW9uLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzZXNzaW9uLnVzZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgnXFxuJyArICdTdXBwb3J0cyBvbmx5IFBPU1QgbWV0aG9kJyk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDb3JzIiwiTmV4dEFwaVJlcXVlc3QiLCJOZXh0QXBpUmVzcG9uc2UiLCJuZXh0U2Vzc2lvbiIsImdldFNlc3Npb24iLCJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwibWQ1IiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiQXV0aCIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwidXNlciIsImFjY291bnQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImxvZ2luIiwiY29udGFpbnMiLCJwYXNzd29yZCIsInNlc3Npb24iLCJjb21taXQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Auth.js"));
module.exports = __webpack_exports__;

})();