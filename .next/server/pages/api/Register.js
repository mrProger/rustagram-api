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
exports.id = "pages/api/Register";
exports.ids = ["pages/api/Register"];
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

/***/ "(api)/./pages/api/Register.js":
/*!*******************************!*\
  !*** ./pages/api/Register.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register),\n/* harmony export */   \"getSession\": () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-session */ \"next-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_session__WEBPACK_IMPORTED_MODULE_2__]);\nnext_session__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst getSession = (0,next_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst { PrismaClient  } = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nconst prisma = new PrismaClient();\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"GET\",\n        \"HEAD\",\n        \"POST\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function Register(req, res) {\n    await runMiddleware(req, res, cors);\n    if (req.method === \"POST\") {\n        if (!req.body[\"login\"] || !req.body[\"password\"]) {\n            res.status(403).send(\"Not found login or password\");\n            return;\n        }\n        try {\n            let user = await prisma.account.create({\n                data: {\n                    login: req.body[\"login\"],\n                    password: md5(req.body[\"password\"])\n                }\n            });\n            const session = await getSession(req, res);\n            session.user = user;\n            await session.commit();\n            res.status(200).send(session.user);\n        } catch (error) {\n            res.status(403).send(error);\n        }\n    } else {\n        res.status(404).send(\"Supports only POST method\");\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvUmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUMrQjtBQUNoQjtBQUNoQyxNQUFNSSxVQUFVLEdBQUdELHdEQUFXLEVBQUUsQ0FBQztBQUN4QyxNQUFNLEVBQUVFLFlBQVksR0FBRSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFnQixDQUFDO0FBQ2xELE1BQU1DLE1BQU0sR0FBRyxJQUFJRixZQUFZLEVBQUU7QUFDakMsTUFBTUcsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFMUIsTUFBTUcsSUFBSSxHQUFHVCwyQ0FBSSxDQUFDO0lBQ2RVLE9BQU8sRUFBRTtRQUFDLEtBQUs7UUFBRSxNQUFNO1FBQUUsTUFBTTtLQUFDO0NBQ25DLENBQUM7QUFFRixTQUFTQyxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDakMsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDcENILEVBQUUsQ0FBQ0YsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQ0ssTUFBTSxHQUFLO1lBQ3JCLElBQUlBLE1BQU0sWUFBWUMsS0FBSyxFQUFFO2dCQUN6QixPQUFPRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBRUQsT0FBT0YsT0FBTyxDQUFDRSxNQUFNLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTjtBQUVjLGVBQWVFLFFBQVEsQ0FBQ1IsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTUYsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUosSUFBSSxDQUFDLENBQUM7SUFFcEMsSUFBSUcsR0FBRyxDQUFDUyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLElBQUksQ0FBQ1QsR0FBRyxDQUFDVSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQ1YsR0FBRyxDQUFDVSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDN0NULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNwRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBQ0EsSUFBSUMsSUFBSSxHQUFHLE1BQU1sQixNQUFNLENBQUNtQixPQUFPLENBQUNDLE1BQU0sQ0FBQztnQkFDbkNDLElBQUksRUFBRTtvQkFDRkMsS0FBSyxFQUFFakIsR0FBRyxDQUFDVSxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN4QlEsUUFBUSxFQUFFdEIsR0FBRyxDQUFDSSxHQUFHLENBQUNVLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEM7YUFDSixDQUFDO1lBRUYsTUFBTVMsT0FBTyxHQUFHLE1BQU0zQixVQUFVLENBQUNRLEdBQUcsRUFBRUMsR0FBRyxDQUFDO1lBQzFDa0IsT0FBTyxDQUFDTixJQUFJLEdBQUdBLElBQUksQ0FBQztZQUNwQixNQUFNTSxPQUFPLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBRXZCbkIsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ08sT0FBTyxDQUFDTixJQUFJLENBQUMsQ0FBQztTQUN0QyxDQUFDLE9BQU9RLEtBQUssRUFBRTtZQUNacEIsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1MsS0FBSyxDQUFDLENBQUM7U0FDL0I7S0FDSixNQUFNO1FBQ0hwQixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7S0FDckQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9SZWdpc3Rlci5qcz9kMjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IG5leHRTZXNzaW9uIGZyb20gXCJuZXh0LXNlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gbmV4dFNlc3Npb24oKTtcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudCcpO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuY29uc3QgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XG5cbmNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgICBtZXRob2RzOiBbJ0dFVCcsICdIRUFEJywgJ1BPU1QnXSxcbn0pO1xuXG5mdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBSZWdpc3RlcihyZXEsIHJlcykge1xuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBpZiAoIXJlcS5ib2R5Wydsb2dpbiddIHx8ICFyZXEuYm9keVsncGFzc3dvcmQnXSkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ05vdCBmb3VuZCBsb2dpbiBvciBwYXNzd29yZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hLmFjY291bnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiByZXEuYm9keVsnbG9naW4nXSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG1kNShyZXEuYm9keVsncGFzc3dvcmQnXSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgYXdhaXQgc2Vzc2lvbi5jb21taXQoKTtcblxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoc2Vzc2lvbi51c2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdTdXBwb3J0cyBvbmx5IFBPU1QgbWV0aG9kJyk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJDb3JzIiwiTmV4dEFwaVJlcXVlc3QiLCJOZXh0QXBpUmVzcG9uc2UiLCJuZXh0U2Vzc2lvbiIsImdldFNlc3Npb24iLCJQcmlzbWFDbGllbnQiLCJyZXF1aXJlIiwicHJpc21hIiwibWQ1IiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiUmVnaXN0ZXIiLCJtZXRob2QiLCJib2R5Iiwic3RhdHVzIiwic2VuZCIsInVzZXIiLCJhY2NvdW50IiwiY3JlYXRlIiwiZGF0YSIsImxvZ2luIiwicGFzc3dvcmQiLCJzZXNzaW9uIiwiY29tbWl0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/Register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/Register.js"));
module.exports = __webpack_exports__;

})();