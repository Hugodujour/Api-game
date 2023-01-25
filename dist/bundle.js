/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n| font-family: 'Lato', serif;\\n| background-color: #191919;\");\n\n//# sourceURL=webpack://04_gamos/./css/style.css?");

/***/ }),

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/***/ (() => {

eval("const Home = (argument = '') => {\r\n  console.log('Home', argument);\r\n};\n\n//# sourceURL=webpack://04_gamos/./js/home.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst callRoute = () => {\r\n  const { hash } = window.location;\r\n  const pathParts = hash.substring(1).split('/');\r\n\r\n  const pageName = pathParts[0];\r\n  const pageArgument = pathParts[1] || '';\r\n  const pageFunction = routes[pageName];\r\n\r\n  if (pageFunction !== undefined) {\r\n    pageFunction(pageArgument);\r\n  }\r\n};\r\n\r\nwindow.addEventListener('hashchange', () => callRoute());\r\nwindow.addEventListener('DOMContentLoaded', () => callRoute());\n\n//# sourceURL=webpack://04_gamos/./js/index.js?");

/***/ }),

/***/ "./js/pageDetail.js":
/*!**************************!*\
  !*** ./js/pageDetail.js ***!
  \**************************/
/***/ (() => {

eval("const PageDetail = (argument) => {\r\n  const preparePage = () => {\r\n    const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\r\n\r\n    const displayGame = (gameData) => {\r\n      const { name, released, description, website, background_image, genres } = gameData;\r\n      const articleDOM = document.querySelector(\".page-detail .article\");\r\n      articleDOM.querySelector(\"h2.title\").innerHTML = name;\r\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\r\n      articleDOM.querySelector(\"p.description span\").innerHTML = description;\r\n      articleDOM.querySelector(\"p.website span\").innerHTML = website;\r\n      articleDOM.querySelector(\"img\").src = background_image\r\n\r\n    };\r\n\r\n    const fetchGame = (url, argument) => {\r\n      fetch(`${url}/${argument}?key=${API_KEY}`)\r\n        .then((response) => response.json())\r\n        .then((responseData) => {\r\n          displayGame(responseData);\r\n\r\n        });\r\n    };\r\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\r\n  };\r\n\r\n  const render = () => {\r\n    pageContent.innerHTML = `\r\n      <section class=\"page-detail\">\r\n        <div class=\"article\">\r\n          <h2 class=\"title\"></h2>\r\n          <p class=\"release-date\">Release date : <span></span></p>\r\n          <p class=\"description\"><b>Plot</b><br> <span></span></p>\r\n          <p class=\"website\"><b>Website</b><br> <span></span></p>\r\n          <img class=\"img\" src=\"\"/>\r\n        </div>\r\n      </section>\r\n    `;\r\n\r\n    preparePage();\r\n  };\r\n\r\n  render();\r\n};\n\n//# sourceURL=webpack://04_gamos/./js/pageDetail.js?");

/***/ }),

/***/ "./js/pageList.js":
/*!************************!*\
  !*** ./js/pageList.js ***!
  \************************/
/***/ (() => {

eval("\r\n\r\nconst PageList = (argument = '') => {\r\n\r\n  const preparePage = () => {\r\n    const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\r\n\r\n    const displayResults = (articles) => {\r\n\r\n      const resultsContent = articles.map((article) => (\r\n\r\n        `\r\n        <article class=\"cardGame\">\r\n          <div class=\"card\">\r\n            <a href=\"#pagedetail/${article.id}\">\r\n              <img id=\"img-list\" src=\"${article.background_image}\" />\r\n            </a>\r\n            <h2>${article.name}</h2>\r\n            <p>${article.platforms[0].platform.name}</p>\r\n          </div>\r\n        </article>\r\n        `\r\n\r\n\r\n      ));\r\n\r\n      const resultsContainer = document.querySelector('.page-list .articles');\r\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\r\n\r\n    };\r\n    \r\n\r\n    const fetchList = (url, argument) => {\r\n      const finalURL = argument ? `${url}&search=${argument}` : url;\r\n      fetch(finalURL)\r\n        .then((response) => response.json())\r\n        \r\n        .then((responseData) => {\r\n          displayResults(responseData.results)\r\n        });\r\n    };\r\n   \r\n\r\n    fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=${page}&key=${API_KEY}`, cleanedArgument);\r\n\r\n    genialos.addEventListener('input', (e) => {\r\n      const getValue = e.target.value\r\n      fetchList(`https://api.rawg.io/api/games?search=${getValue}&page_size=${page}&key=${API_KEY}`, cleanedArgument);\r\n    })\r\n\r\n    let count = 0\r\n    const showmore = document.getElementById('showmore')\r\n    showmore.addEventListener('click', () =>{\r\n      count++\r\n        if(count === 1){\r\n          fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=18&key=${API_KEY}`)\r\n        }\r\n        if(count === 2){\r\n          fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=27&key=${API_KEY}`)\r\n          showmore.classList.add('hidden')\r\n        }\r\n\r\n    })\r\n    \r\n    function platformSelector(e) {\r\n      const platformSelect = document.getElementById('platformSelect')\r\n      platformSelect.addEventListener('change', (e) =>{\r\n        const selected = e.target.value\r\n        fetchList(`https://api.rawg.io/api/games?parent_platforms=${selected}&search=${genialos.value}&page_size=9&key=${API_KEY}`)\r\n      })\r\n    }\r\n    platformSelector() \r\n\r\n  };\r\n\r\n  const render = () => {\r\n    pageContent.innerHTML = `\r\n      <div>\r\n        <h2>Welcome,</h2>\r\n        <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This text seems familiar.</p>\r\n      </div>\r\n\r\n      <select name=\"pets\" id=\"platformSelect\">\r\n        <option value=\"2\">--Please choose an option--</option>\r\n        <option value=\"2\">Playstation</option>\r\n        <option value=\"3\">Xbox</option>\r\n        <option value=\"6\">Switch</option>\r\n        <option value=\"1\">PC</option>\r\n        <option value=\"6\">Linux</option>\r\n        <option value=\"8,4\">Mobile</option>\r\n      </select>\r\n\r\n        <div class=\"wrapper\">\r\n        <section class=\"page-list\">\r\n          <div class=\"articles\">Loading...</div>\r\n        </section>\r\n        </div>\r\n\r\n        <button class=\"btn\" id=\"showmore\">Show more</button>\r\n    `;\r\n\r\n    preparePage();\r\n  };\r\n\r\n  render();\r\n};\n\n//# sourceURL=webpack://04_gamos/./js/pageList.js?");

/***/ }),

/***/ "./js/pageNumber.js":
/*!**************************!*\
  !*** ./js/pageNumber.js ***!
  \**************************/
/***/ (() => {

eval("let page = 9\n\n//# sourceURL=webpack://04_gamos/./js/pageNumber.js?");

/***/ }),

/***/ "./js/routes.js":
/*!**********************!*\
  !*** ./js/routes.js ***!
  \**********************/
/***/ (() => {

eval("const routes = {\r\n  '': PageList,\r\n  'pagelist': PageList,\r\n  'pagedetail': PageDetail,\r\n};\r\n\r\n\r\n\r\n\r\nconst genialos = document.getElementById('genialos')\n\n//# sourceURL=webpack://04_gamos/./js/routes.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./js/home.js");
/******/ 	__webpack_require__("./js/index.js");
/******/ 	__webpack_require__("./js/pageList.js");
/******/ 	__webpack_require__("./js/pageDetail.js");
/******/ 	__webpack_require__("./js/routes.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/pageNumber.js");
/******/ 	
/******/ })()
;