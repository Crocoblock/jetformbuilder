/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./re-captcha-v3/frontend/main.js ***!
  \****************************************/
(function ($) {
  const CaptchaHandler = function (formNode, {
    key
  }, resolve) {
    let script = document.querySelector('script#jet-form-builder-recaptcha-js');
    const captchaFields = formNode.querySelectorAll('[name="_captcha_token"]');
    const captchaField = captchaFields[0];
    const formID = +formNode.dataset.formId;
    function setFormToken() {
      if (!window.grecaptcha) {
        resolve();
        return;
      }
      let captchaPromise;
      try {
        captchaPromise = window.grecaptcha.execute(key, {
          action: 'jet_form_builder_captcha__' + formID
        });
      } catch (error) {
        resolve();
        return;
      }
      captchaPromise.then(function (token) {
        captchaFields.forEach(function (field) {
          field.value = token;
        });
        resolve();
      }).catch(function (error) {
        resolve();
      });
    }
    if (!captchaField) {
      resolve();
      return;
    }
    if (!script) {
      script = document.createElement('script');
      script.id = 'jet-form-builder-recaptcha-js';
      script.src = 'https://www.google.com/recaptcha/api.js?render=' + key;
      captchaField.parentNode.insertBefore(script, captchaField);
      setFormToken();
    } else {
      setFormToken();
    }
  };
  const setUpCaptcha = function (formNode, resolve, reject) {
    const formID = +formNode.dataset.formId;
    const current = window.JetFormBuilderCaptchaConfig?.[formID] || {};
    if (!Object.values(current)?.length) {
      return resolve();
    }
    window.JetFormBuilderCaptcha(formNode, current, resolve, reject);
  };
  const setUpMain = function () {
    let addFilter;
    if (window.JetFormBuilderAbstract) {
      addFilter = window.JetPlugins.hooks.addFilter;
    } else {
      addFilter = wp.hooks.addFilter;
    }
    if (!window.JetFormBuilderCaptcha) {
      window.JetFormBuilderCaptcha = CaptchaHandler;
    }
    addFilter('jet.fb.submit.ajax.promises', 'jet-form-builder-recaptcha', function (promises, $form) {
      promises.push(new Promise((resolve, reject) => {
        setUpCaptcha($form[0], resolve, reject);
      }));
      return promises;
    });
    addFilter('jet.fb.submit.reload.promises', 'jet-form-builder-recaptcha', function (promises, event) {
      promises.push(new Promise((resolve, reject) => {
        setUpCaptcha(event.target, resolve, reject);
      }));
      return promises;
    });
  };
  $(setUpMain);
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmUtY2FwdGNoYS12My9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9yZS1jYXB0Y2hhLXYzL2Zyb250ZW5kL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKFxuXHRmdW5jdGlvbiAoICQgKSB7XG5cdFx0Y29uc3QgQ2FwdGNoYUhhbmRsZXIgPSBmdW5jdGlvbiAoIGZvcm1Ob2RlLCB7IGtleSB9LCByZXNvbHZlICkge1xuXHRcdFx0bGV0IHNjcmlwdCAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0J3NjcmlwdCNqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYS1qcycsXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBjYXB0Y2hhRmllbGRzID0gZm9ybU5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0J1tuYW1lPVwiX2NhcHRjaGFfdG9rZW5cIl0nLFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgY2FwdGNoYUZpZWxkID0gY2FwdGNoYUZpZWxkc1swXTtcblx0XHRcdGNvbnN0IGZvcm1JRCAgICAgICA9ICtmb3JtTm9kZS5kYXRhc2V0LmZvcm1JZDsgIFxuXG5cdFx0XHRmdW5jdGlvbiBzZXRGb3JtVG9rZW4oKSB7XG5cdFx0XHRcdGlmICghd2luZG93LmdyZWNhcHRjaGEpIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYXB0Y2hhUHJvbWlzZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjYXB0Y2hhUHJvbWlzZSA9IHdpbmRvdy5ncmVjYXB0Y2hhLmV4ZWN1dGUoXG5cdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGFjdGlvbjogJ2pldF9mb3JtX2J1aWxkZXJfY2FwdGNoYV9fJyArIGZvcm1JRCxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhcHRjaGFQcm9taXNlXG5cdFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRcdFx0XHRjYXB0Y2hhRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0XHRcdFx0XHRcdGZpZWxkLnZhbHVlID0gdG9rZW47XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gICAgXG5cblx0XHRcdGlmICghY2FwdGNoYUZpZWxkKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICFzY3JpcHQgKSB7XG5cblx0XHRcdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcblxuXHRcdFx0XHRzY3JpcHQuaWQgID0gJ2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhLWpzJztcblx0XHRcdFx0c2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPScgK1xuXHRcdFx0XHRcdGtleTtcblxuXHRcdFx0XHRjYXB0Y2hhRmllbGQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIHNjcmlwdCwgY2FwdGNoYUZpZWxkICk7XG5cblx0XHRcdFx0c2V0Rm9ybVRva2VuKCk7XG5cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzZXRGb3JtVG9rZW4oKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0VXBDYXB0Y2hhID0gZnVuY3Rpb24gKCBmb3JtTm9kZSwgcmVzb2x2ZSwgcmVqZWN0ICkge1xuXHRcdFx0Y29uc3QgZm9ybUlEICA9ICtmb3JtTm9kZS5kYXRhc2V0LmZvcm1JZDtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdIHx8XG5cdFx0XHRcdHt9O1xuXG5cdFx0XHRpZiAoICFPYmplY3QudmFsdWVzKCBjdXJyZW50ICk/Lmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSggZm9ybU5vZGUsIGN1cnJlbnQsIHJlc29sdmUsIHJlamVjdCApO1xuXHRcdH07XG5cblx0XHRjb25zdCBzZXRVcE1haW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgYWRkRmlsdGVyO1xuXG5cdFx0XHRpZiAoIHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ICkge1xuXHRcdFx0XHRhZGRGaWx0ZXIgPSB3aW5kb3cuSmV0UGx1Z2lucy5ob29rcy5hZGRGaWx0ZXI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICF3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhICkge1xuXHRcdFx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhID0gQ2FwdGNoYUhhbmRsZXI7XG5cdFx0XHR9XG5cblx0XHRcdGFkZEZpbHRlcihcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQuYWpheC5wcm9taXNlcycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYScsXG5cdFx0XHRcdGZ1bmN0aW9uICggcHJvbWlzZXMsICRmb3JtICkge1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0XHRcdHNldFVwQ2FwdGNoYShcblx0XHRcdFx0XHRcdFx0JGZvcm1bIDAgXSxcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSxcblx0XHRcdFx0XHRcdFx0cmVqZWN0LFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0fSxcblx0XHRcdCk7XG5cblx0XHRcdGFkZEZpbHRlcihcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQucmVsb2FkLnByb21pc2VzJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhJyxcblx0XHRcdFx0ZnVuY3Rpb24gKCBwcm9taXNlcywgZXZlbnQgKSB7XG5cblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKCBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRVcENhcHRjaGEoXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldCxcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSxcblx0XHRcdFx0XHRcdFx0cmVqZWN0LFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0fSxcblx0XHRcdCk7XG5cblx0XHR9O1xuXG5cdFx0JCggc2V0VXBNYWluICk7XG5cdH1cbikoIGpRdWVyeSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==