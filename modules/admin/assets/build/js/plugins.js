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

eval("const pluginSlug = JetFBPluginConfig.slug;\nconst modalSlug = 'modal-' + pluginSlug;\nconst modal = document.querySelector('#' + modalSlug);\nconst exit = modal.querySelector('.jet-form-builder-modal-exit');\nconst closeButton = modal.querySelector('.button.close');\nconst continueButton = modal.querySelector('.button.continue');\nlet deactivateLink = '';\nmodal.addEventListener('click', event => {\n  if ([closeButton, exit].includes(event.target)) {\n    modal.classList.remove('open');\n    return;\n  }\n  if (continueButton === event.target) {\n    window.location = deactivateLink;\n  }\n});\ndocument.querySelector('#bulk-action-form').addEventListener('click', function (event) {\n  if ('A' !== event.target.nodeName || !event.target?.id?.includes?.('deactivate-') || !event.target.closest(`tr.active[data-slug=\"${pluginSlug}\"]`)) {\n    return;\n  }\n  event.preventDefault();\n  deactivateLink = event.target.href;\n  modal.classList.add('open');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL21haW4uanMiLCJuYW1lcyI6WyJwbHVnaW5TbHVnIiwiSmV0RkJQbHVnaW5Db25maWciLCJzbHVnIiwibW9kYWxTbHVnIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleGl0IiwiY2xvc2VCdXR0b24iLCJjb250aW51ZUJ1dHRvbiIsImRlYWN0aXZhdGVMaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm5vZGVOYW1lIiwiaWQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWRtaW4vLi9wbHVnaW5zL21haW4uanM/NmM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbHVnaW5TbHVnID0gSmV0RkJQbHVnaW5Db25maWcuc2x1ZztcclxuY29uc3QgbW9kYWxTbHVnICA9ICdtb2RhbC0nICsgcGx1Z2luU2x1ZztcclxuXHJcbmNvbnN0IG1vZGFsICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyMnICsgbW9kYWxTbHVnICk7XHJcbmNvbnN0IGV4aXQgICAgICAgICAgID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLW1vZGFsLWV4aXQnICk7XHJcbmNvbnN0IGNsb3NlQnV0dG9uICAgID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5idXR0b24uY2xvc2UnICk7XHJcbmNvbnN0IGNvbnRpbnVlQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvciggJy5idXR0b24uY29udGludWUnICk7XHJcblxyXG5sZXQgZGVhY3RpdmF0ZUxpbmsgPSAnJztcclxuXHJcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRpZiAoIFsgY2xvc2VCdXR0b24sIGV4aXQgXS5pbmNsdWRlcyggZXZlbnQudGFyZ2V0ICkgKSB7XHJcblx0XHRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCAnb3BlbicgKTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGNvbnRpbnVlQnV0dG9uID09PSBldmVudC50YXJnZXQgKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24gPSBkZWFjdGl2YXRlTGluaztcclxuXHR9XHJcbn0gKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYnVsay1hY3Rpb24tZm9ybScgKS5cclxuXHRhZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHQnQScgIT09IGV2ZW50LnRhcmdldC5ub2RlTmFtZSB8fFxyXG5cdFx0XHQhZXZlbnQudGFyZ2V0Py5pZD8uaW5jbHVkZXM/LiggJ2RlYWN0aXZhdGUtJyApIHx8XHJcblx0XHRcdCFldmVudC50YXJnZXQuY2xvc2VzdCggYHRyLmFjdGl2ZVtkYXRhLXNsdWc9XCIkeyBwbHVnaW5TbHVnIH1cIl1gIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZGVhY3RpdmF0ZUxpbmsgPSBldmVudC50YXJnZXQuaHJlZjtcclxuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoICdvcGVuJyApO1xyXG5cdH0gKTsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVUsR0FBR0MsaUJBQWlCLENBQUNDLElBQUk7QUFDekMsTUFBTUMsU0FBUyxHQUFJLFFBQVEsR0FBR0gsVUFBVTtBQUV4QyxNQUFNSSxLQUFLLEdBQVlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLEdBQUcsR0FBR0gsU0FBVSxDQUFDO0FBQ2hFLE1BQU1JLElBQUksR0FBYUgsS0FBSyxDQUFDRSxhQUFhLENBQUUsOEJBQStCLENBQUM7QUFDNUUsTUFBTUUsV0FBVyxHQUFNSixLQUFLLENBQUNFLGFBQWEsQ0FBRSxlQUFnQixDQUFDO0FBQzdELE1BQU1HLGNBQWMsR0FBR0wsS0FBSyxDQUFDRSxhQUFhLENBQUUsa0JBQW1CLENBQUM7QUFFaEUsSUFBSUksY0FBYyxHQUFHLEVBQUU7QUFFdkJOLEtBQUssQ0FBQ08sZ0JBQWdCLENBQUUsT0FBTyxFQUFFQyxLQUFLLElBQUk7RUFDekMsSUFBSyxDQUFFSixXQUFXLEVBQUVELElBQUksQ0FBRSxDQUFDTSxRQUFRLENBQUVELEtBQUssQ0FBQ0UsTUFBTyxDQUFDLEVBQUc7SUFDckRWLEtBQUssQ0FBQ1csU0FBUyxDQUFDQyxNQUFNLENBQUUsTUFBTyxDQUFDO0lBRWhDO0VBQ0Q7RUFFQSxJQUFLUCxjQUFjLEtBQUtHLEtBQUssQ0FBQ0UsTUFBTSxFQUFHO0lBQ3RDRyxNQUFNLENBQUNDLFFBQVEsR0FBR1IsY0FBYztFQUNqQztBQUNELENBQUUsQ0FBQztBQUVITCxRQUFRLENBQUNDLGFBQWEsQ0FBRSxtQkFBb0IsQ0FBQyxDQUM1Q0ssZ0JBQWdCLENBQUUsT0FBTyxFQUFFLFVBQVdDLEtBQUssRUFBRztFQUM3QyxJQUNDLEdBQUcsS0FBS0EsS0FBSyxDQUFDRSxNQUFNLENBQUNLLFFBQVEsSUFDN0IsQ0FBQ1AsS0FBSyxDQUFDRSxNQUFNLEVBQUVNLEVBQUUsRUFBRVAsUUFBUSxHQUFJLGFBQWMsQ0FBQyxJQUM5QyxDQUFDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ08sT0FBTyxDQUFHLHdCQUF3QnJCLFVBQVksSUFBSSxDQUFDLEVBQ2hFO0lBQ0Q7RUFDRDtFQUNBWSxLQUFLLENBQUNVLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCWixjQUFjLEdBQUdFLEtBQUssQ0FBQ0UsTUFBTSxDQUFDUyxJQUFJO0VBQ2xDbkIsS0FBSyxDQUFDVyxTQUFTLENBQUNTLEdBQUcsQ0FBRSxNQUFPLENBQUM7QUFDOUIsQ0FBRSxDQUFDIn0=\n//# sourceURL=webpack-internal:///./plugins/main.js\n");

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