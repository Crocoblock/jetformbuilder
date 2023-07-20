/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./plugins/main.js":
/*!*************************!*\
  !*** ./plugins/main.js ***!
  \*************************/
/***/ (() => {

eval("const pluginSlug = JetFBPluginConfig.slug;\nconst modalSlug = 'modal-' + pluginSlug;\nconst modal = document.querySelector('#' + modalSlug);\nconst exit = modal.querySelector('.jet-form-builder-modal-exit');\nconst closeButton = modal.querySelector('.button.close');\nconst continueButton = modal.querySelector('.button.continue');\nlet deactivateLink = '';\nmodal.addEventListener('click', event => {\n  if ([closeButton, exit].includes(event.target)) {\n    modal.classList.remove('open');\n    return;\n  }\n  if (continueButton === event.target) {\n    window.location = deactivateLink;\n  }\n});\ndocument.querySelector('#bulk-action-form').addEventListener('click', function (event) {\n  if ('A' !== event.target.nodeName || !event.target?.id?.includes?.('deactivate-') || !event.target.closest(`tr.active[data-slug=\"${pluginSlug}\"]`)) {\n    return;\n  }\n  event.preventDefault();\n  deactivateLink = event.target.href;\n  modal.style.display = 'flex';\n  modal.classList.add('open');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL21haW4uanMiLCJuYW1lcyI6WyJwbHVnaW5TbHVnIiwiSmV0RkJQbHVnaW5Db25maWciLCJzbHVnIiwibW9kYWxTbHVnIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleGl0IiwiY2xvc2VCdXR0b24iLCJjb250aW51ZUJ1dHRvbiIsImRlYWN0aXZhdGVMaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm5vZGVOYW1lIiwiaWQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWRtaW4vLi9wbHVnaW5zL21haW4uanM/NmM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbHVnaW5TbHVnID0gSmV0RkJQbHVnaW5Db25maWcuc2x1ZztcclxuY29uc3QgbW9kYWxTbHVnICA9ICdtb2RhbC0nICsgcGx1Z2luU2x1ZztcclxuXHJcbmNvbnN0IG1vZGFsICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbW9kYWxTbHVnICk7XHJcbmNvbnN0IGV4aXQgICAgICAgICAgID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLW1vZGFsLWV4aXQnICk7XHJcbmNvbnN0IGNsb3NlQnV0dG9uICAgID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5idXR0b24uY2xvc2UnICk7XHJcbmNvbnN0IGNvbnRpbnVlQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5idXR0b24uY29udGludWUnICk7XHJcblxyXG5sZXQgZGVhY3RpdmF0ZUxpbmsgPSAnJztcclxuXHJcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRpZiAoIFsgY2xvc2VCdXR0b24sIGV4aXQgXS5pbmNsdWRlcyggZXZlbnQudGFyZ2V0ICkgKSB7XHJcblx0XHRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCAnb3BlbicgKTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGNvbnRpbnVlQnV0dG9uID09PSBldmVudC50YXJnZXQgKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24gPSBkZWFjdGl2YXRlTGluaztcclxuXHR9XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYnVsay1hY3Rpb24tZm9ybScgKS5cclxuXHRhZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHQnQScgIT09IGV2ZW50LnRhcmdldC5ub2RlTmFtZSB8fFxyXG5cdFx0XHQhZXZlbnQudGFyZ2V0Py5pZD8uaW5jbHVkZXM/LiggJ2RlYWN0aXZhdGUtJyApIHx8XHJcblx0XHRcdCFldmVudC50YXJnZXQuY2xvc2VzdCggYHRyLmFjdGl2ZVtkYXRhLXNsdWc9XCIkeyBwbHVnaW5TbHVnIH1cIl1gIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZGVhY3RpdmF0ZUxpbmsgPSBldmVudC50YXJnZXQuaHJlZjtcclxuXHJcblx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LmFkZCggJ29wZW4nICk7XHJcblx0fSApOyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxpQkFBaUIsQ0FBQ0MsSUFBSTtBQUN6QyxNQUFNQyxTQUFTLEdBQUksUUFBUSxHQUFHSCxVQUFVO0FBRXhDLE1BQU1JLEtBQUssR0FBWUMsUUFBUSxDQUFDQyxhQUFhLENBQUUsR0FBRyxHQUFHSCxTQUFVLENBQUM7QUFDaEUsTUFBTUksSUFBSSxHQUFhSCxLQUFLLENBQUNFLGFBQWEsQ0FBRSw4QkFBK0IsQ0FBQztBQUM1RSxNQUFNRSxXQUFXLEdBQU1KLEtBQUssQ0FBQ0UsYUFBYSxDQUFFLGVBQWdCLENBQUM7QUFDN0QsTUFBTUcsY0FBYyxHQUFHTCxLQUFLLENBQUNFLGFBQWEsQ0FBRSxrQkFBbUIsQ0FBQztBQUVoRSxJQUFJSSxjQUFjLEdBQUcsRUFBRTtBQUV2Qk4sS0FBSyxDQUFDTyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUVDLEtBQUssSUFBSTtFQUN6QyxJQUFLLENBQUVKLFdBQVcsRUFBRUQsSUFBSSxDQUFFLENBQUNNLFFBQVEsQ0FBRUQsS0FBSyxDQUFDRSxNQUFPLENBQUMsRUFBRztJQUNyRFYsS0FBSyxDQUFDVyxTQUFTLENBQUNDLE1BQU0sQ0FBRSxNQUFPLENBQUM7SUFFaEM7RUFDRDtFQUVBLElBQUtQLGNBQWMsS0FBS0csS0FBSyxDQUFDRSxNQUFNLEVBQUc7SUFDdENHLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHUixjQUFjO0VBQ2pDO0FBQ0QsQ0FBRSxDQUFDO0FBRUhMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLG1CQUFvQixDQUFDLENBQzVDSyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsVUFBV0MsS0FBSyxFQUFHO0VBQzdDLElBQ0MsR0FBRyxLQUFLQSxLQUFLLENBQUNFLE1BQU0sQ0FBQ0ssUUFBUSxJQUM3QixDQUFDUCxLQUFLLENBQUNFLE1BQU0sRUFBRU0sRUFBRSxFQUFFUCxRQUFRLEdBQUksYUFBYyxDQUFDLElBQzlDLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxDQUFDTyxPQUFPLENBQUcsd0JBQXdCckIsVUFBWSxJQUFJLENBQUMsRUFDaEU7SUFDRDtFQUNEO0VBQ0FZLEtBQUssQ0FBQ1UsY0FBYyxDQUFDLENBQUM7RUFDdEJaLGNBQWMsR0FBR0UsS0FBSyxDQUFDRSxNQUFNLENBQUNTLElBQUk7RUFFbENuQixLQUFLLENBQUNvQixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQzVCckIsS0FBSyxDQUFDVyxTQUFTLENBQUNXLEdBQUcsQ0FBRSxNQUFPLENBQUM7QUFDOUIsQ0FBRSxDQUFDIn0=\n//# sourceURL=webpack-internal:///./plugins/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./plugins/main.js"]();
/******/ 	
/******/ })()
;