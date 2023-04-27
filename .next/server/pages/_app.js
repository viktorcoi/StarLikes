(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 474:
/***/ ((module) => {

// Exports
module.exports = {
	"burger": "Burger_burger__G1eyL",
	"open": "Burger_open__ExP_t"
};


/***/ }),

/***/ 1392:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__YdoVU",
	"for-button": "Footer_for-button__Ww3P3"
};


/***/ }),

/***/ 7743:
/***/ ((module) => {

// Exports
module.exports = {
	"right_left_0": "Header_right_left_0__3LeXp",
	"header": "Header_header__y0FKo",
	"for-navigation": "Header_for-navigation__yZ6Xq",
	"language": "Header_language__6Jb12",
	"two-language": "Header_two-language__Esbxv",
	"open": "Header_open___Lmq5",
	"bg-menu": "Header_bg-menu__mC5JO",
	"for-language": "Header_for-language__USzEY"
};


/***/ }),

/***/ 1991:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "Logo_logo__rcLYB",
	"footer": "Logo_footer__XidYl",
	"header": "Logo_header__aWsF1"
};


/***/ }),

/***/ 2552:
/***/ ((module) => {

// Exports
module.exports = {
	"bg-popup": "Popups_bg-popup__PP3V_",
	"open": "Popups_open__5voUa",
	"popup": "Popups_popup__mevki",
	"for-close": "Popups_for-close__fxRkV",
	"close": "Popups_close__Z6d2T",
	"view-password": "Popups_view-password__4p2tx",
	"for-choose-popup": "Popups_for-choose-popup___FiYA",
	"not-open": "Popups_not-open__A15DJ",
	"for-hint": "Popups_for-hint__YJsgg",
	"blue": "Popups_blue__ZHouC",
	"create-acc": "Popups_create-acc___STAr"
};


/***/ }),

/***/ 4046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/Assets/Moduls/LinkA.js
var LinkA = __webpack_require__(3533);
// EXTERNAL MODULE: ./public/assets/css/Logo.module.css
var Logo_module = __webpack_require__(1991);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
;// CONCATENATED MODULE: ./components/Assets/Header/Logo.js



const Logo = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkA/* default */.Z, {
        className: (Logo_module_default()).logo + " d-flex " + (Logo_module_default())[props.className],
        href: "/",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                href: "/",
                children: "star likes"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "logo",
                src: "/assets/img/logo.svg"
            })
        ]
    }));
};
/* harmony default export */ const Header_Logo = (Logo);

;// CONCATENATED MODULE: ./components/Assets/Header/NavigationPanel.js


const NavigationPanel = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "d-flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LinkA/* default */.Z, {
                onClick: props.clickClose,
                href: "/",
                children: "Главная"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LinkA/* default */.Z, {
                onClick: props.clickClose,
                href: "#about-us",
                children: "О нас"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LinkA/* default */.Z, {
                onClick: props.clickClose,
                href: "#FAQ",
                children: "FAQ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LinkA/* default */.Z, {
                onClick: props.clickClose,
                href: "#steps-launch",
                children: "Как начать работать"
            })
        ]
    }));
};
/* harmony default export */ const Header_NavigationPanel = (NavigationPanel);

// EXTERNAL MODULE: ./public/assets/css/Header.module.css
var Header_module = __webpack_require__(7743);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Assets/Header/ChooseLanguage.js


const ChooseLanguage = (props)=>{
    const en = "EN";
    const ru = "RU";
    const { 0: valueEN , 1: setvalueEN  } = (0,external_react_.useState)(en);
    const { 0: valueRU , 1: setvalueRU  } = (0,external_react_.useState)(ru);
    const handleClick = ()=>{
        if (valueEN == "EN") {
            en = "RU";
            setvalueEN("RU", valueEN);
            ru = "EN";
            setvalueRU("EN", valueRU);
        } else {
            en = "EN";
            setvalueEN("EN", valueEN);
            ru = "RU";
            setvalueRU("RU", valueEN);
        }
    };
    const { 0: choose , 1: open_choose  } = (0,external_react_.useState)(false);
    const OpenChoose = ()=>{
        open_choose(!choose);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: props.mainClass + ' pos-relative',
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>OpenChoose(choose)
                ,
                className: props.className + " d-flex items-center border-7px cursor-pointer transition_0_3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "language",
                        src: `/assets/img/${valueRU}.svg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: valueRU
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>{
                    handleClick(), OpenChoose(choose);
                },
                className: props.className + " d-flex pos-absolute items-center cursor-pointer transition_0_3 " + props.class + " " + (choose ? props.addClass : ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "language",
                        src: `/assets/img/${valueEN}.svg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: valueEN
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Header_ChooseLanguage = (ChooseLanguage);

// EXTERNAL MODULE: ./public/assets/css/Burger.module.css
var Burger_module = __webpack_require__(474);
var Burger_module_default = /*#__PURE__*/__webpack_require__.n(Burger_module);
;// CONCATENATED MODULE: ./components/Assets/Header/Burger.js


const Burger = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: props.onClick,
        className: (Burger_module_default()).burger + " pos-relative between transition_0_3 cursor-pointer " + (Burger_module_default())[props.className],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pos-absolute transition_0_3 border-circle"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pos-absolute transition_0_3 border-circle"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pos-absolute transition_0_3 border-circle"
            })
        ]
    }));
};
/* harmony default export */ const Header_Burger = (Burger);

;// CONCATENATED MODULE: ./components/Assets/Header/Header.js








function Header(props) {
    const { 0: menu , 1: open_menu  } = (0,external_react_.useState)(false);
    const OpenMenu = (set, i)=>{
        set(!i);
    };
    (0,external_react_.useEffect)(()=>{
        if (window.innerWidth <= 999) {
            document.body.style.position = menu ? 'fixed' : 'unset';
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: "Smm сервис с высоким качеством услуг!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "StarLikes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "StarLikes - это интернет магазин, где люди могут купить все виды SMM - услуг на различные социальные сети."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: "/assets/img/logo.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "StarLikes, накрутка социальных сетей, smm сервис"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/assets/img/logo.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "StarLikes - это интернет магазин, где люди могут купить все виды SMM - услуг на различные социальные сети."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "StarLikes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "StarLikes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "YOUR.SITE/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "YOUR.SITE/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).header + " d-flex between items-center margin-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Logo, {
                            className: "header"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>OpenMenu(open_menu, menu)
                            ,
                            className: (Header_module_default())["bg-menu"] + " transition_0_3 " + (menu ? (Header_module_default()).open : "")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Header_module_default())["for-navigation"] + ' d-flex between transition_0_3 ' + (menu ? (Header_module_default()).open : ""),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Header_NavigationPanel, {
                                    clickClose: ()=>OpenMenu(open_menu, menu)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Header_ChooseLanguage, {
                                            mainClass: (Header_module_default())["for-language"],
                                            addClass: (Header_module_default()).open,
                                            className: (Header_module_default()).language,
                                            class: (Header_module_default())["two-language"]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: ()=>OpenMenu(open_menu, menu)
                                            ,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: props.onClick,
                                                className: "d-flex items-center border-7px",
                                                children: [
                                                    "Войти",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/img/enter.svg",
                                                        alt: "enter"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Burger, {
                            onClick: ()=>OpenMenu(open_menu, menu)
                            ,
                            className: menu ? "open" : ""
                        })
                    ]
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: external "react/cjs/react.production.min"
var react_production_min_ = __webpack_require__(2865);
// EXTERNAL MODULE: external "react-breakpoints"
var external_react_breakpoints_ = __webpack_require__(3942);
// EXTERNAL MODULE: ./public/assets/css/Footer.module.css
var Footer_module = __webpack_require__(1392);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./components/Assets/Eclipses/EclipseMainTop.js
var EclipseMainTop = __webpack_require__(4253);
// EXTERNAL MODULE: ./components/Assets/ButtonLink.js
var ButtonLink = __webpack_require__(1267);
;// CONCATENATED MODULE: ./components/Assets/ChangePlace/ChangeFooter.js







class ChangeFooter extends react_production_min_.Component {
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_breakpoints_.Media, {
            children: ({ breakpoints , currentBreakpoint  })=>breakpoints[currentBreakpoint] < breakpoints.footer ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).footer + " d-flex margin-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "\xa9 STARLIKES 2022 -",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        "Copyright. All Rights Reserved."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Header_Logo, {
                                    className: "footer"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EclipseMainTop/* default */.Z, {
                            addName: "eclipse-footer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EclipseMainTop/* default */.Z, {
                            addName: "eclipse-footer-two"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).footer + " d-flex between items-center margin-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Header_Logo, {
                                    className: "footer"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "\xa9 STARLIKES 2022 - Copyright. All Rights Reserved."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Footer_module_default())["for-button"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink/* default */.Z, {
                                        href: "",
                                        text: "Заказать раскрутку"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EclipseMainTop/* default */.Z, {
                            addName: "eclipse-footer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(EclipseMainTop/* default */.Z, {
                            addName: "eclipse-footer-two"
                        })
                    ]
                })
        }));
    }
}
/* harmony default export */ const ChangePlace_ChangeFooter = (ChangeFooter);

;// CONCATENATED MODULE: ./components/Assets/Footer/Footer.js


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "pos-relative",
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChangePlace_ChangeFooter, {
        })
    }));
}

// EXTERNAL MODULE: ./public/assets/css/Buttons.module.css
var Buttons_module = __webpack_require__(7261);
var Buttons_module_default = /*#__PURE__*/__webpack_require__.n(Buttons_module);
;// CONCATENATED MODULE: ./components/Assets/Popups/ButtonPopup.js


const ButtonPopup = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (Buttons_module_default())["button-popup"] + " pos-relative " + props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: props.text
        })
    }));
};
/* harmony default export */ const Popups_ButtonPopup = (ButtonPopup);

// EXTERNAL MODULE: ./public/assets/css/Popups.module.css
var Popups_module = __webpack_require__(2552);
var Popups_module_default = /*#__PURE__*/__webpack_require__.n(Popups_module);
;// CONCATENATED MODULE: ./components/Assets/Popups/AuthorizationPopup.js




const AuthorizationPopup = (props)=>{
    const text = "password";
    const { 0: valueText , 1: setvalueText  } = (0,external_react_.useState)(text);
    const handleClick = ()=>{
        if (valueText == "password") {
            text = "text";
            setvalueText("text", valueText);
        } else {
            text = "password";
            setvalueText("password", valueText);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Popups_module_default())["bg-popup"] + " d-flex transition_0_3 " + (Popups_module_default())[props.className],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: props.ClickClose,
                className: (Popups_module_default())["for-close"]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Popups_module_default()).popup + " margin-auto pos-relative transition_0_3 border-7px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        onClick: props.ClickClose,
                        className: (Popups_module_default()).close + ' pos-absolute cursor-pointer transition_0_3',
                        src: "/assets/img/close.svg",
                        alt: "view password"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Popups_module_default())["for-choose-popup"] + ' d-flex between',
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Авторизация"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: props.clickRegistration,
                                className: (Popups_module_default())["not-open"] + ' cursor-pointer transition_0_3',
                                children: "Регистрация"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "login",
                                type: "text",
                                placeholder: "Введите логин",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pos-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "password",
                                        type: valueText,
                                        placeholder: "Введите пароль",
                                        required: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        onClick: handleClick,
                                        className: (Popups_module_default())["view-password"] + ' pos-absolute cursor-pointer transition_0_3',
                                        src: "/assets/img/eye.svg",
                                        alt: "view password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Popups_ButtonPopup, {
                                text: "Авторизоваться"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Popups_module_default())["for-hint"] + " d-flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Новый пользователь? ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: props.clickRegistration,
                                        className: (Popups_module_default()).blue + " cursor-pointer transition_0_3 " + (Popups_module_default())["create-acc"],
                                        children: "Создать учётную запись"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Popups_module_default()).blue + " cursor-pointer transition_0_3",
                                children: "Забыли пароль?"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Popups_AuthorizationPopup = (AuthorizationPopup);

;// CONCATENATED MODULE: ./components/Assets/Popups/RegistrationPopup.js




const RegistrationPopup = (props)=>{
    const text = "password";
    const { 0: valueText , 1: setvalueText  } = (0,external_react_.useState)(text);
    const { 0: valueTextConfirm , 1: setvalueTextConfirm  } = (0,external_react_.useState)(text);
    const handleClick = (set, index)=>{
        if (index == "password") {
            text = "text";
            set("text", index);
        } else {
            text = "password";
            set("password", index);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Popups_module_default())["bg-popup"] + " d-flex transition_0_3 " + (Popups_module_default())[props.className],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: props.ClickClose,
                className: (Popups_module_default())["for-close"]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Popups_module_default()).popup + " margin-auto pos-relative transition_0_3 border-7px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        onClick: props.ClickClose,
                        className: (Popups_module_default()).close + ' pos-absolute cursor-pointer transition_0_3',
                        src: "/assets/img/close.svg",
                        alt: "view password"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Popups_module_default())["for-choose-popup"] + ' d-flex between',
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                onClick: props.clickAuthorization,
                                className: (Popups_module_default())["not-open"] + ' cursor-pointer transition_0_3',
                                children: "Авторизация"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Регистрация"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "d-flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "login-reg",
                                type: "text",
                                placeholder: "Введите логин",
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "mail-reg",
                                type: "text",
                                placeholder: "Введите логин",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pos-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "password-reg",
                                        type: valueText,
                                        placeholder: "Введите пароль",
                                        required: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        onClick: ()=>handleClick(setvalueText, valueText)
                                        ,
                                        className: (Popups_module_default())["view-password"] + ' pos-absolute cursor-pointer transition_0_3',
                                        src: "/assets/img/eye.svg",
                                        alt: "view password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pos-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        name: "password-reg-confirm",
                                        type: valueTextConfirm,
                                        placeholder: "Подтвердите пароль",
                                        required: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        onClick: ()=>handleClick(setvalueTextConfirm, valueTextConfirm)
                                        ,
                                        className: (Popups_module_default())["view-password"] + ' pos-absolute cursor-pointer transition_0_3',
                                        src: "/assets/img/eye.svg",
                                        alt: "view password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Popups_ButtonPopup, {
                                text: "Зарегистрироваться"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Popups_module_default())["for-hint"] + " d-flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "У вас есть аккаунт? ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: props.clickAuthorization,
                                    className: (Popups_module_default()).blue + " cursor-pointer transition_0_3",
                                    children: "Войти"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Popups_RegistrationPopup = (RegistrationPopup);

;// CONCATENATED MODULE: ./components/Layout.js






function Layout({ children  }) {
    const { 0: popupAuth , 1: open_popupAuth  } = (0,external_react_.useState)(false);
    const { 0: popupReg , 1: open_popupReg  } = (0,external_react_.useState)(false);
    const OpenPopup = (set, i)=>{
        set(!i);
    };
    (0,external_react_.useEffect)(()=>{
        if ((popupAuth || popupReg) == true) {
            document.body.style.position = 'fixed';
        }
        if ((popupAuth || popupReg) == false) {
            document.body.style.position = 'unset';
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                onClick: ()=>OpenPopup(open_popupAuth, popupAuth)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Popups_AuthorizationPopup, {
                        ClickClose: ()=>OpenPopup(open_popupAuth, popupAuth)
                        ,
                        className: popupAuth ? "open" : "",
                        clickRegistration: ()=>{
                            OpenPopup(open_popupReg, popupReg), OpenPopup(open_popupAuth, popupAuth);
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Popups_RegistrationPopup, {
                        ClickClose: ()=>OpenPopup(open_popupReg, popupReg)
                        ,
                        className: popupReg ? "open" : "",
                        clickAuthorization: ()=>{
                            OpenPopup(open_popupReg, popupReg), OpenPopup(open_popupAuth, popupAuth);
                        }
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
            })
        ]
    }));
}

;// CONCATENATED MODULE: external "react-breakpoints/lib/ReactBreakpoints"
const ReactBreakpoints_namespaceObject = require("react-breakpoints/lib/ReactBreakpoints");
var ReactBreakpoints_default = /*#__PURE__*/__webpack_require__.n(ReactBreakpoints_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    const breakpoints = {
        mobile: 320,
        footer: 580,
        desktop: 720
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((ReactBreakpoints_default()), {
        breakpoints: breakpoints,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3942:
/***/ ((module) => {

"use strict";
module.exports = require("react-breakpoints");

/***/ }),

/***/ 2865:
/***/ ((module) => {

"use strict";
module.exports = require("react/cjs/react.production.min");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,171], () => (__webpack_exec__(4046)));
module.exports = __webpack_exports__;

})();