/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact\n{\n    constructor(){}\n    \n    ContactLoad()\n    {\n        const content = document.querySelector(\"#content\");\n        content.textContent = \"\";\n\n        const heading = document.createElement(\"h1\")\n        heading.textContent = \"Contact Information\";\n\n        const textContainer = document.createElement(\"div\");\n\n        const address = document.createElement(\"p\");\n        address.textContent = \"Address: Some Number, Some Street, Some City\";\n\n        const phone = document.createElement(\"p\");\n        phone.textContent = \"Phone: XXX...10X's\";\n\n        const email = document.createElement(\"p\");\n        email.textContent = \"Email: SomeName@SomeDomain\";\n\n        textContainer.append(address, phone, email);\n        content.append(heading, textContainer);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC1sb2FkLmpzPzRiZDAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29udGFjdFxue1xuICAgIGNvbnN0cnVjdG9yKCl7fVxuICAgIFxuICAgIENvbnRhY3RMb2FkKClcbiAgICB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiO1xuXG4gICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogU29tZSBOdW1iZXIsIFNvbWUgU3RyZWV0LCBTb21lIENpdHlcIjtcblxuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IFhYWC4uLjEwWCdzXCI7XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBTb21lTmFtZUBTb21lRG9tYWluXCI7XG5cbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmQoYWRkcmVzcywgcGhvbmUsIGVtYWlsKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoaGVhZGluZywgdGV4dENvbnRhaW5lcik7XG4gICAgfVxufVxuXG5leHBvcnQge0NvbnRhY3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact-load.js\n");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _img_home_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home-img.jpg */ \"./src/img/home-img.jpg\");\n\n\nclass Home\n{\n    constructor(){}\n    \n    HomeLoad()\n    {\n        const content = document.querySelector(\"#content\");\n        content.textContent = \"\";\n\n        const homeImg = document.createElement(\"img\");\n        homeImg.src = _img_home_img_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        homeImg.setAttribute(\"height\", \"500px\");\n        homeImg.setAttribute(\"width\", \"1000px\");\n\n        const heading = document.createElement(\"h1\")\n        heading.textContent = \"Ice Creams - Every Single One\";\n\n        const quoteContainer = document.createElement(\"div\");\n        quoteContainer.classList.add(\"quote\");\n\n        const quote = document.createElement(\"p\");\n        quote.textContent = \"You can't buy happiness...\";\n        quote.style.fontStyle = \"italic\";\n\n        const quoteContinued = document.createElement(\"p\");\n        quoteContinued.textContent = \"But you can buy ice creams and that's pretty much the same thing\";\n        quoteContinued.style.fontStyle = \"italic\";\n\n        quoteContainer.append(quote, quoteContinued);\n\n        const textContainer = document.createElement(\"div\");\n\n        const desc = document.createElement(\"p\");\n        desc.textContent = \"Some filler text now...\";\n\n        const filler = document.createElement(\"p\");\n        filler.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea nostrum sapiente unde dignissimos laborum, delectus, a quidem numquam vitae accusamus earum omnis molestiae corporis aperiam est quam, perspiciatis maxime.\";\n\n        textContainer.append(desc, filler);\n        content.append(homeImg, heading, quoteContainer, textContainer);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDhDQUFRO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUtbG9hZC5qcz81MmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBob21lX2ltZyBmcm9tIFwiLi9pbWcvaG9tZS1pbWcuanBnXCI7XG5cbmNsYXNzIEhvbWVcbntcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICBcbiAgICBIb21lTG9hZCgpXG4gICAge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBjb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG9tZUltZy5zcmMgPSBob21lX2ltZztcbiAgICAgICAgaG9tZUltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI1MDBweFwiKTtcbiAgICAgICAgaG9tZUltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMDBweFwiKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkljZSBDcmVhbXMgLSBFdmVyeSBTaW5nbGUgT25lXCI7XG5cbiAgICAgICAgY29uc3QgcXVvdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdW90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVvdGVcIik7XG5cbiAgICAgICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVvdGUudGV4dENvbnRlbnQgPSBcIllvdSBjYW4ndCBidXkgaGFwcGluZXNzLi4uXCI7XG4gICAgICAgIHF1b3RlLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG5cbiAgICAgICAgY29uc3QgcXVvdGVDb250aW51ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcXVvdGVDb250aW51ZWQudGV4dENvbnRlbnQgPSBcIkJ1dCB5b3UgY2FuIGJ1eSBpY2UgY3JlYW1zIGFuZCB0aGF0J3MgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmdcIjtcbiAgICAgICAgcXVvdGVDb250aW51ZWQuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcblxuICAgICAgICBxdW90ZUNvbnRhaW5lci5hcHBlbmQocXVvdGUsIHF1b3RlQ29udGludWVkKTtcblxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBcIlNvbWUgZmlsbGVyIHRleHQgbm93Li4uXCI7XG5cbiAgICAgICAgY29uc3QgZmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZpbGxlci50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVGVuZXR1ciBlYSBub3N0cnVtIHNhcGllbnRlIHVuZGUgZGlnbmlzc2ltb3MgbGFib3J1bSwgZGVsZWN0dXMsIGEgcXVpZGVtIG51bXF1YW0gdml0YWUgYWNjdXNhbXVzIGVhcnVtIG9tbmlzIG1vbGVzdGlhZSBjb3Jwb3JpcyBhcGVyaWFtIGVzdCBxdWFtLCBwZXJzcGljaWF0aXMgbWF4aW1lLlwiO1xuXG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kKGRlc2MsIGZpbGxlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGhvbWVJbWcsIGhlYWRpbmcsIHF1b3RlQ29udGFpbmVyLCB0ZXh0Q29udGFpbmVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7SG9tZX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home-load.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load */ \"./src/home-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n__webpack_require__.e(/*! import() */ \"src_styles_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.css */ \"./src/styles.css\"));\n\n\n\n\nclass SelectTab\n{\n    constructor()\n    {\n        const homeButton = document.querySelector(\"#homeButton\");\n        const menuButton = document.querySelector(\"#menuButton\");\n        const contactButton = document.querySelector(\"#contactButton\");\n        const home = new _home_load__WEBPACK_IMPORTED_MODULE_0__.Home();\n        const menu = new _menu_load__WEBPACK_IMPORTED_MODULE_2__.Menu();\n        const contact = new _contact_load__WEBPACK_IMPORTED_MODULE_1__.Contact();\n\n        homeButton.addEventListener(\"click\", () =>  home.HomeLoad())\n        menuButton.addEventListener(\"click\", () =>  menu.MenuLoad())\n        contactButton.addEventListener(\"click\", () =>   contact.ContactLoad())\n\n        home.HomeLoad();\n    }\n}\n\nconst selector = new SelectTab();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1KQUFzQjtBQUNXO0FBQ007QUFDUDs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQUk7QUFDN0IseUJBQXlCLDRDQUFJO0FBQzdCLDRCQUE0QixrREFBTzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydChcIi4vc3R5bGVzLmNzc1wiKTtcbmltcG9ydCB7SG9tZX0gZnJvbSBcIi4vaG9tZS1sb2FkXCI7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3QtbG9hZFwiO1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi9tZW51LWxvYWRcIlxuXG5jbGFzcyBTZWxlY3RUYWJcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lQnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51QnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0QnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBob21lID0gbmV3IEhvbWUoKTtcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuXG4gICAgICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICBob21lLkhvbWVMb2FkKCkpXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICBtZW51Lk1lbnVMb2FkKCkpXG4gICAgICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICAgY29udGFjdC5Db250YWN0TG9hZCgpKVxuXG4gICAgICAgIGhvbWUuSG9tZUxvYWQoKTtcbiAgICB9XG59XG5cbmNvbnN0IHNlbGVjdG9yID0gbmV3IFNlbGVjdFRhYigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _img_chocolate_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chocolate.jpg */ \"./src/img/chocolate.jpg\");\n/* harmony import */ var _img_vanilla_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/vanilla.jpg */ \"./src/img/vanilla.jpg\");\n/* harmony import */ var _img_butterscotch_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/butterscotch.jpg */ \"./src/img/butterscotch.jpg\");\n/* harmony import */ var _img_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/strawberry.jpg */ \"./src/img/strawberry.jpg\");\n/* harmony import */ var _img_mango_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/mango.jpg */ \"./src/img/mango.jpg\");\n\n\n\n\n\n\nclass Menu\n{\n    constructor(){}\n    \n    MenuLoad()\n    {\n        const content = document.querySelector(\"#content\");\n        content.textContent = \"\";\n        const heading = document.createElement(\"h1\")\n        heading.textContent = \"Menu\";\n        const menus = document.createElement(\"div\");\n        menus.classList.add(\"menus\");\n\n\n        const menuOne = document.createElement(\"div\");\n        const menuOneMainDiv = document.createElement(\"div\");\n        menuOneMainDiv.classList.add(\"main-div\");\n        const menuOneImgDiv = document.createElement(\"div\");\n\n        const menuOneName = document.createElement(\"h3\");\n        menuOneName.textContent = \"Chocolate Icecream\";\n        const menuOnePrice = document.createElement(\"p\");\n        menuOnePrice.textContent = \"$3\";\n        const menuOneImg = document.createElement(\"img\");\n        menuOneImg.src = _img_chocolate_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        menuOneImg.setAttribute(\"height\", \"150px\");\n        menuOneImg.setAttribute(\"width\", \"150px\");\n\n        menuOneMainDiv.append(menuOneName, menuOnePrice);\n        menuOneImgDiv.append(menuOneImg);\n        menuOne.append(menuOneMainDiv, menuOneImgDiv);\n\n\n        const menuTwo = document.createElement(\"div\");\n        const menuTwoMainDiv = document.createElement(\"div\");\n        menuTwoMainDiv.classList.add(\"main-div\");\n        const menuTwoImgDiv = document.createElement(\"div\");\n\n        const menuTwoName = document.createElement(\"h3\");\n        menuTwoName.textContent = \"Vanilla Icecream\";\n        const menuTwoPrice = document.createElement(\"p\");\n        menuTwoPrice.textContent = \"$3\";\n        const menuTwoImg = document.createElement(\"img\");\n        menuTwoImg.src = _img_vanilla_jpg__WEBPACK_IMPORTED_MODULE_1__;\n        menuTwoImg.setAttribute(\"height\", \"150px\");\n        menuTwoImg.setAttribute(\"width\", \"150px\");\n\n        menuTwoMainDiv.append(menuTwoName, menuTwoPrice);\n        menuTwoImgDiv.append(menuTwoImg);\n        menuTwo.append(menuTwoMainDiv, menuTwoImgDiv);\n\n\n        const menuThree = document.createElement(\"div\");\n        const menuThreeMainDiv = document.createElement(\"div\");\n        menuThreeMainDiv.classList.add(\"main-div\");\n        const menuThreeImgDiv = document.createElement(\"div\");\n\n        const menuThreeName = document.createElement(\"h3\");\n        menuThreeName.textContent = \"Butterscotch Icecream\";\n        const menuThreePrice = document.createElement(\"p\");\n        menuThreePrice.textContent = \"$3\";\n        const menuThreeImg = document.createElement(\"img\");\n        menuThreeImg.src = _img_butterscotch_jpg__WEBPACK_IMPORTED_MODULE_2__;\n        menuThreeImg.setAttribute(\"height\", \"150px\");\n        menuThreeImg.setAttribute(\"width\", \"150px\");\n\n        menuThreeMainDiv.append(menuThreeName, menuThreePrice);\n        menuThreeImgDiv.append(menuThreeImg);\n        menuThree.append(menuThreeMainDiv, menuThreeImgDiv);\n\n\n        const menuFour = document.createElement(\"div\");\n        const menuFourMainDiv = document.createElement(\"div\");\n        menuFourMainDiv.classList.add(\"main-div\");\n        const menuFourImgDiv = document.createElement(\"div\");\n\n        const menuFourName = document.createElement(\"h3\");\n        menuFourName.textContent = \"Strawberry Icecream\";\n        const menuFourPrice = document.createElement(\"p\");\n        menuFourPrice.textContent = \"$3\";\n        const menuFourImg = document.createElement(\"img\");\n        menuFourImg.src = _img_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__;\n        menuFourImg.setAttribute(\"height\", \"150px\");\n        menuFourImg.setAttribute(\"width\", \"150px\");\n\n        menuFourMainDiv.append(menuFourName, menuFourPrice);\n        menuFourImgDiv.append(menuFourImg);\n        menuFour.append(menuFourMainDiv, menuFourImgDiv);\n\n\n        const menuFive = document.createElement(\"div\");\n        const menuFiveMainDiv = document.createElement(\"div\");\n        menuFiveMainDiv.classList.add(\"main-div\");\n        const menuFiveImgDiv = document.createElement(\"div\");\n\n        const menuFiveName = document.createElement(\"h3\");\n        menuFiveName.textContent = \"Mango Icecream\";\n        const menuFivePrice = document.createElement(\"p\");\n        menuFivePrice.textContent = \"$3\";\n        const menuFiveImg = document.createElement(\"img\");\n        menuFiveImg.src = _img_mango_jpg__WEBPACK_IMPORTED_MODULE_4__;\n        menuFiveImg.setAttribute(\"height\", \"150px\");\n        menuFiveImg.setAttribute(\"width\", \"150px\");\n\n        menuFiveMainDiv.append(menuFiveName, menuFivePrice);\n        menuFiveImgDiv.append(menuFiveImg);\n        menuFive.append(menuFiveMainDiv, menuFiveImgDiv);\n\n\n        menus.append(menuOne, menuTwo, menuThree, menuFour, menuFive);\n        content.append(heading, menus);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNIO0FBQ1U7QUFDSjtBQUNWOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVE7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQU87QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQVk7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQVU7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQUs7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUtbG9hZC5qcz85OTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGNvbGF0ZSBmcm9tIFwiLi9pbWcvY2hvY29sYXRlLmpwZ1wiO1xuaW1wb3J0IHZhbmlsbGEgZnJvbSBcIi4vaW1nL3ZhbmlsbGEuanBnXCI7XG5pbXBvcnQgYnV0dGVyc2NvdGNoIGZyb20gXCIuL2ltZy9idXR0ZXJzY290Y2guanBnXCI7XG5pbXBvcnQgc3RyYXdiZXJyeSBmcm9tIFwiLi9pbWcvc3RyYXdiZXJyeS5qcGdcIjtcbmltcG9ydCBtYW5nbyBmcm9tIFwiLi9pbWcvbWFuZ28uanBnXCI7XG5cbmNsYXNzIE1lbnVcbntcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICBcbiAgICBNZW51TG9hZCgpXG4gICAge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgIGNvbnN0IG1lbnVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudXMuY2xhc3NMaXN0LmFkZChcIm1lbnVzXCIpO1xuXG5cbiAgICAgICAgY29uc3QgbWVudU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVPbmVNYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudU9uZU1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tZGl2XCIpO1xuICAgICAgICBjb25zdCBtZW51T25lSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBtZW51T25lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbWVudU9uZU5hbWUudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBJY2VjcmVhbVwiO1xuICAgICAgICBjb25zdCBtZW51T25lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbWVudU9uZVByaWNlLnRleHRDb250ZW50ID0gXCIkM1wiO1xuICAgICAgICBjb25zdCBtZW51T25lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWVudU9uZUltZy5zcmMgPSBjaGNvbGF0ZTtcbiAgICAgICAgbWVudU9uZUltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNTBweFwiKTtcbiAgICAgICAgbWVudU9uZUltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xuXG4gICAgICAgIG1lbnVPbmVNYWluRGl2LmFwcGVuZChtZW51T25lTmFtZSwgbWVudU9uZVByaWNlKTtcbiAgICAgICAgbWVudU9uZUltZ0Rpdi5hcHBlbmQobWVudU9uZUltZyk7XG4gICAgICAgIG1lbnVPbmUuYXBwZW5kKG1lbnVPbmVNYWluRGl2LCBtZW51T25lSW1nRGl2KTtcblxuXG4gICAgICAgIGNvbnN0IG1lbnVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBtZW51VHdvTWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVUd29NYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWRpdlwiKTtcbiAgICAgICAgY29uc3QgbWVudVR3b0ltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgbWVudVR3b05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG1lbnVUd29OYW1lLnRleHRDb250ZW50ID0gXCJWYW5pbGxhIEljZWNyZWFtXCI7XG4gICAgICAgIGNvbnN0IG1lbnVUd29QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBtZW51VHdvUHJpY2UudGV4dENvbnRlbnQgPSBcIiQzXCI7XG4gICAgICAgIGNvbnN0IG1lbnVUd29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtZW51VHdvSW1nLnNyYyA9IHZhbmlsbGE7XG4gICAgICAgIG1lbnVUd29JbWcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTUwcHhcIik7XG4gICAgICAgIG1lbnVUd29JbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNTBweFwiKTtcblxuICAgICAgICBtZW51VHdvTWFpbkRpdi5hcHBlbmQobWVudVR3b05hbWUsIG1lbnVUd29QcmljZSk7XG4gICAgICAgIG1lbnVUd29JbWdEaXYuYXBwZW5kKG1lbnVUd29JbWcpO1xuICAgICAgICBtZW51VHdvLmFwcGVuZChtZW51VHdvTWFpbkRpdiwgbWVudVR3b0ltZ0Rpdik7XG5cblxuICAgICAgICBjb25zdCBtZW51VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBtZW51VGhyZWVNYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudVRocmVlTWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1kaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVUaHJlZUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgbWVudVRocmVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbWVudVRocmVlTmFtZS50ZXh0Q29udGVudCA9IFwiQnV0dGVyc2NvdGNoIEljZWNyZWFtXCI7XG4gICAgICAgIGNvbnN0IG1lbnVUaHJlZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG1lbnVUaHJlZVByaWNlLnRleHRDb250ZW50ID0gXCIkM1wiO1xuICAgICAgICBjb25zdCBtZW51VGhyZWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtZW51VGhyZWVJbWcuc3JjID0gYnV0dGVyc2NvdGNoO1xuICAgICAgICBtZW51VGhyZWVJbWcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTUwcHhcIik7XG4gICAgICAgIG1lbnVUaHJlZUltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xuXG4gICAgICAgIG1lbnVUaHJlZU1haW5EaXYuYXBwZW5kKG1lbnVUaHJlZU5hbWUsIG1lbnVUaHJlZVByaWNlKTtcbiAgICAgICAgbWVudVRocmVlSW1nRGl2LmFwcGVuZChtZW51VGhyZWVJbWcpO1xuICAgICAgICBtZW51VGhyZWUuYXBwZW5kKG1lbnVUaHJlZU1haW5EaXYsIG1lbnVUaHJlZUltZ0Rpdik7XG5cblxuICAgICAgICBjb25zdCBtZW51Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVGb3VyTWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVGb3VyTWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1kaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVGb3VySW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBtZW51Rm91ck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG1lbnVGb3VyTmFtZS50ZXh0Q29udGVudCA9IFwiU3RyYXdiZXJyeSBJY2VjcmVhbVwiO1xuICAgICAgICBjb25zdCBtZW51Rm91clByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG1lbnVGb3VyUHJpY2UudGV4dENvbnRlbnQgPSBcIiQzXCI7XG4gICAgICAgIGNvbnN0IG1lbnVGb3VySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWVudUZvdXJJbWcuc3JjID0gc3RyYXdiZXJyeTtcbiAgICAgICAgbWVudUZvdXJJbWcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTUwcHhcIik7XG4gICAgICAgIG1lbnVGb3VySW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTUwcHhcIik7XG5cbiAgICAgICAgbWVudUZvdXJNYWluRGl2LmFwcGVuZChtZW51Rm91ck5hbWUsIG1lbnVGb3VyUHJpY2UpO1xuICAgICAgICBtZW51Rm91ckltZ0Rpdi5hcHBlbmQobWVudUZvdXJJbWcpO1xuICAgICAgICBtZW51Rm91ci5hcHBlbmQobWVudUZvdXJNYWluRGl2LCBtZW51Rm91ckltZ0Rpdik7XG5cblxuICAgICAgICBjb25zdCBtZW51Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVGaXZlTWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVGaXZlTWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1kaXZcIik7XG4gICAgICAgIGNvbnN0IG1lbnVGaXZlSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBtZW51Rml2ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIG1lbnVGaXZlTmFtZS50ZXh0Q29udGVudCA9IFwiTWFuZ28gSWNlY3JlYW1cIjtcbiAgICAgICAgY29uc3QgbWVudUZpdmVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBtZW51Rml2ZVByaWNlLnRleHRDb250ZW50ID0gXCIkM1wiO1xuICAgICAgICBjb25zdCBtZW51Rml2ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1lbnVGaXZlSW1nLnNyYyA9IG1hbmdvO1xuICAgICAgICBtZW51Rml2ZUltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNTBweFwiKTtcbiAgICAgICAgbWVudUZpdmVJbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNTBweFwiKTtcblxuICAgICAgICBtZW51Rml2ZU1haW5EaXYuYXBwZW5kKG1lbnVGaXZlTmFtZSwgbWVudUZpdmVQcmljZSk7XG4gICAgICAgIG1lbnVGaXZlSW1nRGl2LmFwcGVuZChtZW51Rml2ZUltZyk7XG4gICAgICAgIG1lbnVGaXZlLmFwcGVuZChtZW51Rml2ZU1haW5EaXYsIG1lbnVGaXZlSW1nRGl2KTtcblxuXG4gICAgICAgIG1lbnVzLmFwcGVuZChtZW51T25lLCBtZW51VHdvLCBtZW51VGhyZWUsIG1lbnVGb3VyLCBtZW51Rml2ZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRpbmcsIG1lbnVzKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7TWVudX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu-load.js\n");

/***/ }),

/***/ "./src/img/butterscotch.jpg":
/*!**********************************!*\
  !*** ./src/img/butterscotch.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "911179abdbc33d3c6949.jpg";

/***/ }),

/***/ "./src/img/chocolate.jpg":
/*!*******************************!*\
  !*** ./src/img/chocolate.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2154b75a317f246af3f4.jpg";

/***/ }),

/***/ "./src/img/home-img.jpg":
/*!******************************!*\
  !*** ./src/img/home-img.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08fd5f7342c8360cb9c5.jpg";

/***/ }),

/***/ "./src/img/mango.jpg":
/*!***************************!*\
  !*** ./src/img/mango.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7ff60528081949844da.jpg";

/***/ }),

/***/ "./src/img/strawberry.jpg":
/*!********************************!*\
  !*** ./src/img/strawberry.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b17897a63fd1fcda4cb.jpg";

/***/ }),

/***/ "./src/img/vanilla.jpg":
/*!*****************************!*\
  !*** ./src/img/vanilla.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af7af930da7a7279a9bc.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;