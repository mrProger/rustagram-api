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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auth),\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_1__]);\nnext_session__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nasync function Auth(req, res) {\n    if (req.method === \"POST\") {\n        if (!req.body[\"login\"] || !req.body[\"password\"]) {\n            res.status(403).send(\"Not found login or password\");\n            return;\n        }\n        try {\n            let user = await prisma.account.findFirst({\n                where: {\n                    login: {\n                        contains: req.body[\"login\"]\n                    },\n                    password: {\n                        contains: md5(req.body[\"password\"])\n                    }\n                }\n            });\n            const session = await getSession(req, res);\n            session.user = user != null ? user : \"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B\\u0435 \\u043B\\u043E\\u0433\\u0438\\u043D \\u0438\\u043B\\u0438 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\";\n            await session.commit();\n            res.status(200).send(session.user);\n        } catch (error) {\n            res.status(403).send(error.message);\n        }\n    } else {\n        res.status(404).send(\"\\u041F\\u043E\\u0434\\u0434\\u0435\\u0440\\u0436\\u0438\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F \\u0442\\u043E\\u043B\\u044C\\u043A\\u043E POST \\u043C\\u0435\\u0442\\u043E\\u0434\");\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNoQjtBQUNoQyxNQUFNRyxVQUFVLEdBQUdELHdEQUFXLEVBQUUsQ0FBQztBQUN4QyxNQUFNLEVBQUVFLFlBQVksR0FBRSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFnQixDQUFDO0FBQ2xELE1BQU1DLE1BQU0sR0FBRyxJQUFJRixZQUFZLEVBQUU7QUFDakMsTUFBTUcsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFWCxlQUFlRyxJQUFJLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzFDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2QixJQUFJLENBQUNGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdDRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNWO1FBRUQsSUFBSTtZQUNBLElBQUlDLElBQUksR0FBRyxNQUFNVCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO2dCQUN0Q0MsS0FBSyxFQUFFO29CQUNIQyxLQUFLLEVBQUU7d0JBQUVDLFFBQVEsRUFBRVgsR0FBRyxDQUFDRyxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUFFO29CQUN0Q1MsUUFBUSxFQUFFO3dCQUFFRCxRQUFRLEVBQUViLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQUU7aUJBQ3BEO2FBQ0osQ0FBQztZQUVGLE1BQU1VLE9BQU8sR0FBRyxNQUFNbkIsVUFBVSxDQUFDTSxHQUFHLEVBQUVDLEdBQUcsQ0FBQztZQUMxQ1ksT0FBTyxDQUFDUCxJQUFJLEdBQUdBLElBQUksSUFBSSxJQUFJLEdBQUdBLElBQUksR0FBRyx5SUFBMkIsQ0FBdUI7WUFDakUsTUFBaEJPLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFFdkJiLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNRLE9BQU8sQ0FBQ1AsSUFBSSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7WUFDWmQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1UsS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQztTQUN2QztLQUNKLE1BQU07UUFDSGYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQywrSkFBa0MsQ0FBQyxDQUFDO0tBQzVEO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvQXV0aC5qcz82NTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IG5leHRTZXNzaW9uIGZyb20gXCJuZXh0LXNlc3Npb25cIjtcclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBuZXh0U2Vzc2lvbigpO1xyXG5jb25zdCB7IFByaXNtYUNsaWVudCB9ID0gcmVxdWlyZSgnQHByaXNtYS9jbGllbnQnKTtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5jb25zdCBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEF1dGggKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgaWYgKCFyZXEuYm9keVsnbG9naW4nXSB8fCAhcmVxLmJvZHlbJ3Bhc3N3b3JkJ10pIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ05vdCBmb3VuZCBsb2dpbiBvciBwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS5hY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiB7IGNvbnRhaW5zOiByZXEuYm9keVsnbG9naW4nXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGNvbnRhaW5zOiBtZDUocmVxLmJvZHlbJ3Bhc3N3b3JkJ10pIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSwgcmVzKTtcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdXNlciAhPSBudWxsID8gdXNlciA6IFwi0J3QtdCy0LXRgNC90YvQtSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcIjtcclxuICAgICAgICAgICAgYXdhaXQgc2Vzc2lvbi5jb21taXQoKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHNlc3Npb24udXNlcik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgn0J/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDRgtC+0LvRjNC60L4gUE9TVCDQvNC10YLQvtC0Jyk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dEFwaVJlcXVlc3QiLCJOZXh0QXBpUmVzcG9uc2UiLCJuZXh0U2Vzc2lvbiIsImdldFNlc3Npb24iLCJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwibWQ1IiwiQXV0aCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwidXNlciIsImFjY291bnQiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImxvZ2luIiwiY29udGFpbnMiLCJwYXNzd29yZCIsInNlc3Npb24iLCJjb21taXQiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Auth.js\n");

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