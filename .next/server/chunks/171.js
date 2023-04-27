exports.id = 171;
exports.ids = [171];
exports.modules = {

/***/ 6761:
/***/ ((module) => {

// Exports
module.exports = {
	"eclipse-first": "BackGround_eclipse-first__wUnB7",
	"eclipse-two": "BackGround_eclipse-two__3vPu9",
	"eclipse-footer": "BackGround_eclipse-footer___BQo1",
	"eclipse-footer-two": "BackGround_eclipse-footer-two__rC_Uj",
	"mini-eclipse": "BackGround_mini-eclipse__4QIOL",
	"left": "BackGround_left__9LPln",
	"question-left": "BackGround_question-left__XWBcf",
	"right": "BackGround_right__vbPDW",
	"question-right": "BackGround_question-right__KkKQ_",
	"for-step": "BackGround_for-step__sX3Om",
	"left-step": "BackGround_left-step___4kyM",
	"right-step": "BackGround_right-step__OjRwL",
	"bg-img": "BackGround_bg-img__iuLAw",
	"inst": "BackGround_inst__qhZ4L",
	"purple-circle": "BackGround_purple-circle__D9PnH",
	"red-circle": "BackGround_red-circle__xKGx3",
	"likes": "BackGround_likes__WatZ0",
	"heart": "BackGround_heart__77W6V",
	"bookmark": "BackGround_bookmark__1VHPD",
	"people": "BackGround_people__oMnSi"
};


/***/ }),

/***/ 7261:
/***/ ((module) => {

// Exports
module.exports = {
	"button-link": "Buttons_button-link__NMO7k",
	"button-popup": "Buttons_button-popup__szbXJ"
};


/***/ }),

/***/ 1267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Moduls_LinkA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3533);
/* harmony import */ var _public_assets_css_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7261);
/* harmony import */ var _public_assets_css_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ButtonLink = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Moduls_LinkA__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: (_public_assets_css_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default()["button-link"]) + " d-flex items-center pos-relative " + props.className,
        href: props.href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "d-flex",
            children: [
                props.text,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: "ok",
                    src: "/assets/img/ok.svg"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLink);


/***/ }),

/***/ 4253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_css_BackGround_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6761);
/* harmony import */ var _public_assets_css_BackGround_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_BackGround_module_css__WEBPACK_IMPORTED_MODULE_1__);


const EclipseMainTop = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_public_assets_css_BackGround_module_css__WEBPACK_IMPORTED_MODULE_1___default()["eclipse-first"]) + " pos-absolute " + (_public_assets_css_BackGround_module_css__WEBPACK_IMPORTED_MODULE_1___default())[props.addName]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EclipseMainTop);


/***/ }),

/***/ 3533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const LinkA = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: props.onClick,
            target: props.target,
            rel: props.rel,
            className: props.className,
            children: props.children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkA);


/***/ })

};
;