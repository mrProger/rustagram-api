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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auth),\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_2__]);\nnext_session__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"HEAD\",\n        \"POST\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function Auth(req, res) {\n    await runMiddleware(req, res, cors);\n    if (req.method === \"POST\") {\n        if (!req.body[\"login\"] || !req.body[\"password\"]) {\n            res.status(403).send(\"Not found login or password\");\n            return;\n        }\n        try {\n            let user = await prisma.account.findFirst({\n                where: {\n                    login: {\n                        contains: req.body[\"login\"]\n                    },\n                    password: {\n                        contains: md5(req.body[\"password\"])\n                    }\n                }\n            });\n            const session = await getSession(req, res);\n            session.user = user != null ? user : \"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B\\u0435 \\u043B\\u043E\\u0433\\u0438\\u043D \\u0438\\u043B\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\";\n            await session.commit();\n            res.status(200).send(session.user);\n        } catch (error) {\n            res.status(403).send(error.message);\n        }\n    } else {\n        res.status(404).send(\"\\u041F\\u043E\\u0434\\u0434\\u0435\\u0440\\u0436\\u0438\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F \\u0442\\u043E\\u043B\\u044C\\u043A\\u043E POST \\u043C\\u0435\\u0442\\u043E\\u0434\");\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IG5leHRTZXNzaW9uIGZyb20gXCJuZXh0LXNlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oKTtcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuY29uc3QgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgICBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJywgJ1BPU1QnXSxcbn0pO1xuXG5mdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBBdXRoIChyZXEsIHJlcykge1xuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBpZiAoIXJlcS5ib2R5Wydsb2dpbiddIHx8ICFyZXEuYm9keVsncGFzc3dvcmQnXSkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ05vdCBmb3VuZCBsb2dpbiBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICBsb2dpbjogeyBjb250YWluczogcmVxLmJvZHlbJ2xvZ2luJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgY29udGFpbnM6IG1kNShyZXEuYm9keVsncGFzc3dvcmQnXSkgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSwgcmVzKTtcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHVzZXIgIT0gbnVsbCA/IHVzZXIgOiBcItCd0LXQstC10YDQvdGL0LUg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMXCI7XG4gICAgICAgICAgICBhd2FpdCBzZXNzaW9uLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzZXNzaW9uLnVzZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgn0J/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDRgtC+0LvRjNC60L4gUE9TVCDQvNC10YLQvtC0Jyk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDb3JzIiwiTmV4dEFwaVJlcXVlc3QiLCJOZXh0QXBpUmVzcG9uc2UiLCJuZXh0U2Vzc2lvbiIsImdldFNlc3Npb24iLCJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwibWQ1IiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiQXV0aCIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwidXNlciIsImFjY291bnQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImxvZ2luIiwiY29udGFpbnMiLCJwYXNzd29yZCIsInNlc3Npb24iLCJjb21taXQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Auth.js\n");

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