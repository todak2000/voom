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
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./src/components/Seo.tsx":
/*!********************************!*\
  !*** ./src/components/Seo.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst defaultMeta = {\n    title: \"TechTime\",\n    siteName: \"TechTime\",\n    description: \"Build your future with our quality education. the best and largest all-in-one online tutoring platform in the world \",\n    /** Without additional '/' on the end, e.g. https://theodorusclarence.com */ url: \"https://techtime-226q.onrender.com\",\n    type: \"website\",\n    robots: \"follow, index\",\n    /**\n   * No need to be filled, will be populated with openGraph function\n   * If you wish to use a normal image, just specify the path below\n   */ image: \"https://techtime-226q.onrender.com/images/large-og.png\"\n};\nfunction Seo(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const meta = {\n        ...defaultMeta,\n        ...props\n    };\n    meta[\"title\"] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: meta.title\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"robots\",\n                content: meta.robots\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: meta.description,\n                name: \"description\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:url\",\n                content: `${meta.url}${router.asPath}`\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"canonical\",\n                href: `${meta.url}${router.asPath}`\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: meta.type\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:site_name\",\n                content: meta.siteName\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:description\",\n                content: meta.description\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:title\",\n                content: meta.title\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"image\",\n                property: \"og:image\",\n                content: meta.image\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:site\",\n                content: \"@todak\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:title\",\n                content: meta.title\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:description\",\n                content: meta.description\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:image\",\n                content: meta.image\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            meta.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"article:published_time\",\n                        content: meta.date\n                    }, void 0, false, {\n                        fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"publish_date\",\n                        property: \"og:publish_date\",\n                        content: meta.date\n                    }, void 0, false, {\n                        fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Daniel Olagunju\",\n                        property: \"article:author\",\n                        content: \"Daniel Olagunju\"\n                    }, void 0, false, {\n                        fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            favicons.map((linkProps)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    ...linkProps\n                }, linkProps.href, false, {\n                    fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"msapplication-TileColor\",\n                content: \"#ffffff\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"msapplication-config\",\n                content: \"/favicon/browserconfig.xml\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"theme-color\",\n                content: \"#ffffff\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/todak/Desktop/talentplus/voom/src/components/Seo.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\nconst favicons = [\n    {\n        rel: \"apple-touch-icon\",\n        sizes: \"180x180\",\n        href: \"/favicon/apple-touch-icon.png\"\n    },\n    {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"32x32\",\n        href: \"/favicon/favicon-32x32.png\"\n    },\n    {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/favicon/favicon-16x16.png\"\n    },\n    {\n        rel: \"manifest\",\n        href: \"/favicon/site.webmanifest\"\n    },\n    {\n        rel: \"mask-icon\",\n        href: \"/favicon/safari-pinned-tab.svg\",\n        color: \"#00e887\"\n    },\n    {\n        rel: \"shortcut icon\",\n        href: \"/favicon/favicon.ico\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5RDtRQUNFSCxLQUFLO1FBQ0xNLE9BQU87UUFDUEwsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsS0FBSztRQUNMYixNQUFNO1FBQ05tQixPQUFPO1FBQ1BMLE1BQU07SUFDUjtJQUNBO1FBQ0VELEtBQUs7UUFDTGIsTUFBTTtRQUNObUIsT0FBTztRQUNQTCxNQUFNO0lBQ1I7SUFDQTtRQUFFRCxLQUFLO1FBQVlDLE1BQU07SUFBNEI7SUFDckQ7UUFDRUQsS0FBSztRQUNMQyxNQUFNO1FBQ05NLE9BQU87SUFDVDtJQUNBO1FBQUVQLEtBQUs7UUFBaUJDLE1BQU07SUFBdUI7Q0FDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b29tLy4vc3JjL2NvbXBvbmVudHMvU2VvLnRzeD85YzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBkZWZhdWx0TWV0YSA9IHtcbiAgdGl0bGU6IFwiVGVjaFRpbWVcIixcbiAgc2l0ZU5hbWU6IFwiVGVjaFRpbWVcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJCdWlsZCB5b3VyIGZ1dHVyZSB3aXRoIG91ciBxdWFsaXR5IGVkdWNhdGlvbi4gdGhlIGJlc3QgYW5kIGxhcmdlc3QgYWxsLWluLW9uZSBvbmxpbmUgdHV0b3JpbmcgcGxhdGZvcm0gaW4gdGhlIHdvcmxkIFwiLFxuICAvKiogV2l0aG91dCBhZGRpdGlvbmFsICcvJyBvbiB0aGUgZW5kLCBlLmcuIGh0dHBzOi8vdGhlb2RvcnVzY2xhcmVuY2UuY29tICovXG4gIHVybDogXCJodHRwczovL3RlY2h0aW1lLTIyNnEub25yZW5kZXIuY29tXCIsXG4gIHR5cGU6IFwid2Vic2l0ZVwiLFxuICByb2JvdHM6IFwiZm9sbG93LCBpbmRleFwiLFxuICAvKipcbiAgICogTm8gbmVlZCB0byBiZSBmaWxsZWQsIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggb3BlbkdyYXBoIGZ1bmN0aW9uXG4gICAqIElmIHlvdSB3aXNoIHRvIHVzZSBhIG5vcm1hbCBpbWFnZSwganVzdCBzcGVjaWZ5IHRoZSBwYXRoIGJlbG93XG4gICAqL1xuICBpbWFnZTogXCJodHRwczovL3RlY2h0aW1lLTIyNnEub25yZW5kZXIuY29tL2ltYWdlcy9sYXJnZS1vZy5wbmdcIixcbn07XG5cbnR5cGUgU2VvUHJvcHMgPSB7XG4gIGRhdGU/OiBzdHJpbmc7XG4gIHRlbXBsYXRlVGl0bGU/OiBzdHJpbmc7XG59ICYgUGFydGlhbDx0eXBlb2YgZGVmYXVsdE1ldGE+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8ocHJvcHM6IFNlb1Byb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBtZXRhID0ge1xuICAgIC4uLmRlZmF1bHRNZXRhLFxuICAgIC4uLnByb3BzLFxuICB9O1xuICBtZXRhW1widGl0bGVcIl0gPSBwcm9wcy50ZW1wbGF0ZVRpdGxlXG4gICAgPyBgJHtwcm9wcy50ZW1wbGF0ZVRpdGxlfSB8ICR7bWV0YS5zaXRlTmFtZX1gXG4gICAgOiBtZXRhLnRpdGxlO1xuXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e21ldGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PXttZXRhLnJvYm90c30gLz5cbiAgICAgIDxtZXRhIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Ake21ldGEudXJsfSR7cm91dGVyLmFzUGF0aH1gfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7bWV0YS51cmx9JHtyb3V0ZXIuYXNQYXRofWB9IC8+XG4gICAgICB7LyogT3BlbiBHcmFwaCAqL31cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e21ldGEudHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17bWV0YS5zaXRlTmFtZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cbiAgICAgIHsvKiBUd2l0dGVyICovfVxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQHRvZGFrXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17bWV0YS5pbWFnZX0gLz5cbiAgICAgIHttZXRhLmRhdGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiIGNvbnRlbnQ9e21ldGEuZGF0ZX0gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInB1Ymxpc2hfZGF0ZVwiXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnB1Ymxpc2hfZGF0ZVwiXG4gICAgICAgICAgICBjb250ZW50PXttZXRhLmRhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cIkRhbmllbCBPbGFndW5qdVwiXG4gICAgICAgICAgICBwcm9wZXJ0eT1cImFydGljbGU6YXV0aG9yXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJEYW5pZWwgT2xhZ3VuanVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgey8qIEZhdmljb25zICovfVxuICAgICAge2Zhdmljb25zLm1hcCgobGlua1Byb3BzKSA9PiAoXG4gICAgICAgIDxsaW5rIGtleT17bGlua1Byb3BzLmhyZWZ9IHsuLi5saW5rUHJvcHN9IC8+XG4gICAgICApKX1cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5jb25zdCBmYXZpY29uczogQXJyYXk8UmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwibGlua1wiPj4gPSBbXG4gIHtcbiAgICByZWw6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgIHNpemVzOiBcIjE4MHgxODBcIixcbiAgICBocmVmOiBcIi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwiaWNvblwiLFxuICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgc2l6ZXM6IFwiMzJ4MzJcIixcbiAgICBocmVmOiBcIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwiaWNvblwiLFxuICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgc2l6ZXM6IFwiMTZ4MTZcIixcbiAgICBocmVmOiBcIi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCIsXG4gIH0sXG4gIHsgcmVsOiBcIm1hbmlmZXN0XCIsIGhyZWY6IFwiL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIH0sXG4gIHtcbiAgICByZWw6IFwibWFzay1pY29uXCIsXG4gICAgaHJlZjogXCIvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIixcbiAgICBjb2xvcjogXCIjMDBlODg3XCIsXG4gIH0sXG4gIHsgcmVsOiBcInNob3J0Y3V0IGljb25cIiwgaHJlZjogXCIvZmF2aWNvbi9mYXZpY29uLmljb1wiIH0sXG5dO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJkZWZhdWx0TWV0YSIsInRpdGxlIiwic2l0ZU5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsInR5cGUiLCJyb2JvdHMiLCJpbWFnZSIsIlNlbyIsInByb3BzIiwicm91dGVyIiwibWV0YSIsInRlbXBsYXRlVGl0bGUiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwiYXNQYXRoIiwibGluayIsInJlbCIsImhyZWYiLCJkYXRlIiwiZmF2aWNvbnMiLCJtYXAiLCJsaW5rUHJvcHMiLCJzaXplcyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Seo.tsx\n");

/***/ }),

/***/ "./src/components/layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Layout({ children  }) {\n    // Put Header or Footer Here\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQStCO0FBRWhCLFNBQVNDLE9BQU8sRUFBRUMsU0FBUSxFQUFpQyxFQUFFO0lBQzFFLDRCQUE0QjtJQUM1QixxQkFBTztrQkFBR0E7O0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Zvb20vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD9lNjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICAvLyBQdXQgSGVhZGVyIG9yIEZvb3RlciBIZXJlXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.tsx\n");

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Seo */ \"./src/components/Seo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n// import ArrowLink from \"@/components/links/ArrowLink\";\n\n\nconst NotFoundPage = ()=>{\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleHome = ()=>{\n        push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                templateTitle: \"Not Found\"\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"layout flex min-h-screen flex-col items-center justify-center text-center text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiAlarmWarningFill, {\n                                size: 60,\n                                className: \"drop-shadow-glow animate-flicker text-red-500\"\n                            }, void 0, false, {\n                                fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mt-8 text-4xl md:text-6xl\",\n                                children: \"Page Not Found\"\n                            }, void 0, false, {\n                                fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 md:text-lg\",\n                                onClick: handleHome,\n                                children: \"Back to Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\nNotFoundPage.getLayout = (page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/todak/Desktop/talentplus/voom/src/pages/404.tsx\",\n        lineNumber: 36,\n        columnNumber: 36\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3FCO0FBRUo7QUFDaEQsd0RBQXdEO0FBQ3JCO0FBQ0s7QUFHeEMsTUFBTUssZUFBbUMsSUFBTTtJQUM3QyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixzREFBU0E7SUFDMUIsTUFBTUcsYUFBYSxJQUFNO1FBQ3ZCRCxLQUFLO0lBQ1A7SUFDQSxxQkFDRSw4REFBQ0osaUVBQU1BOzswQkFDTCw4REFBQ0MsdURBQUdBO2dCQUFDSyxlQUFjOzs7Ozs7MEJBRW5CLDhEQUFDQzswQkFDQyw0RUFBQ0M7b0JBQVFDLFdBQVU7OEJBQ2pCLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNWLDhEQUFrQkE7Z0NBQ2pCWSxNQUFNO2dDQUNORixXQUFVOzs7Ozs7MENBRVosOERBQUNHO2dDQUFHSCxXQUFVOzBDQUE0Qjs7Ozs7OzBDQUMxQyw4REFBQ0k7Z0NBQUVKLFdBQVU7Z0NBQWtCSyxTQUFTVDswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRTtBQUNBRixhQUFhWSxTQUFTLEdBQUcsQ0FBQ0MscUJBQVMsOERBQUNoQixpRUFBTUE7a0JBQUVnQjs7Ozs7O0FBQzVDLGlFQUFlYixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdm9vbS8uL3NyYy9wYWdlcy80MDQudHN4PzVjNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSaUFsYXJtV2FybmluZ0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbi8vIGltcG9ydCBBcnJvd0xpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9saW5rcy9BcnJvd0xpbmtcIjtcbmltcG9ydCBTZW8gZnJvbSBcIkAvY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZVdpdGhMYXlvdXQgfSBmcm9tIFwiLi9fYXBwXCI7XG5cbmNvbnN0IE5vdEZvdW5kUGFnZTogTmV4dFBhZ2VXaXRoTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVIb21lID0gKCkgPT4ge1xuICAgIHB1c2goXCIvXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U2VvIHRlbXBsYXRlVGl0bGU9XCJOb3QgRm91bmRcIiAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dCBmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgPFJpQWxhcm1XYXJuaW5nRmlsbFxuICAgICAgICAgICAgICBzaXplPXs2MH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcC1zaGFkb3ctZ2xvdyBhbmltYXRlLWZsaWNrZXIgdGV4dC1yZWQtNTAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bFwiPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbWQ6dGV4dC1sZ1wiIG9uQ2xpY2s9e2hhbmRsZUhvbWV9PlxuICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbk5vdEZvdW5kUGFnZS5nZXRMYXlvdXQgPSAocGFnZSkgPT4gPExheW91dD57cGFnZX08L0xheW91dD47XG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSaUFsYXJtV2FybmluZ0ZpbGwiLCJMYXlvdXQiLCJTZW8iLCJ1c2VSb3V0ZXIiLCJOb3RGb3VuZFBhZ2UiLCJwdXNoIiwiaGFuZGxlSG9tZSIsInRlbXBsYXRlVGl0bGUiLCJtYWluIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiLCJoMSIsInAiLCJvbkNsaWNrIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/404.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/404.tsx"));
module.exports = __webpack_exports__;

})();