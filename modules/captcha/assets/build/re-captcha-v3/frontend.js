/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./re-captcha-v3/frontend/main.js ***!
  \****************************************/
(function ($) {
  const CaptchaHandler = function (formNode, {
    key
  }, resolve) {
    let script = document.querySelector('script#jet-form-builder-recaptcha-js');
    const captchaField = formNode.querySelector('[name="_captcha_token"]');
    const formID = +formNode.dataset.formId;
    function setFormToken() {
      if (window.grecaptcha) {
        window.grecaptcha.execute(key, {
          action: 'jet_form_builder_captcha__' + formID
        }).then(function (token) {
          captchaField.value = token;
          resolve();
        });
      } else {
        resolve();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmUtY2FwdGNoYS12My9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vcmUtY2FwdGNoYS12My9mcm9udGVuZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihcblx0ZnVuY3Rpb24gKCAkICkge1xuXHRcdGNvbnN0IENhcHRjaGFIYW5kbGVyID0gZnVuY3Rpb24gKCBmb3JtTm9kZSwgeyBrZXkgfSwgcmVzb2x2ZSApIHtcblx0XHRcdGxldCBzY3JpcHQgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCdzY3JpcHQjamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEtanMnLFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGNhcHRjaGFGaWVsZCA9IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCdbbmFtZT1cIl9jYXB0Y2hhX3Rva2VuXCJdJyxcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBmb3JtSUQgICAgICAgPSArZm9ybU5vZGUuZGF0YXNldC5mb3JtSWQ7XG5cblx0XHRcdGZ1bmN0aW9uIHNldEZvcm1Ub2tlbigpIHtcblx0XHRcdFx0aWYgKCB3aW5kb3cuZ3JlY2FwdGNoYSApIHtcblx0XHRcdFx0XHR3aW5kb3cuZ3JlY2FwdGNoYS5leGVjdXRlKFxuXHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdqZXRfZm9ybV9idWlsZGVyX2NhcHRjaGFfXycgKyBmb3JtSUQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCkudGhlbiggZnVuY3Rpb24gKCB0b2tlbiApIHtcblx0XHRcdFx0XHRcdGNhcHRjaGFGaWVsZC52YWx1ZSA9IHRva2VuO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhc2NyaXB0ICkge1xuXG5cdFx0XHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICk7XG5cblx0XHRcdFx0c2NyaXB0LmlkICA9ICdqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYS1qcyc7XG5cdFx0XHRcdHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP3JlbmRlcj0nICtcblx0XHRcdFx0XHRrZXk7XG5cblx0XHRcdFx0Y2FwdGNoYUZpZWxkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBzY3JpcHQsIGNhcHRjaGFGaWVsZCApO1xuXG5cdFx0XHRcdHNldEZvcm1Ub2tlbigpO1xuXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2V0Rm9ybVRva2VuKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHNldFVwQ2FwdGNoYSA9IGZ1bmN0aW9uICggZm9ybU5vZGUsIHJlc29sdmUsIHJlamVjdCApIHtcblx0XHRcdGNvbnN0IGZvcm1JRCAgPSArZm9ybU5vZGUuZGF0YXNldC5mb3JtSWQ7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSB8fFxuXHRcdFx0XHR7fTtcblxuXHRcdFx0aWYgKCAhT2JqZWN0LnZhbHVlcyggY3VycmVudCApPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGEoIGZvcm1Ob2RlLCBjdXJyZW50LCByZXNvbHZlLCByZWplY3QgKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0VXBNYWluID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IGFkZEZpbHRlcjtcblxuXHRcdFx0aWYgKCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCApIHtcblx0XHRcdFx0YWRkRmlsdGVyID0gd2luZG93LkpldFBsdWdpbnMuaG9va3MuYWRkRmlsdGVyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGFkZEZpbHRlciA9IHdwLmhvb2tzLmFkZEZpbHRlcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhd2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSApIHtcblx0XHRcdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSA9IENhcHRjaGFIYW5kbGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRGaWx0ZXIoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LmFqYXgucHJvbWlzZXMnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEnLFxuXHRcdFx0XHRmdW5jdGlvbiAoIHByb21pc2VzLCAkZm9ybSApIHtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKCBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRVcENhcHRjaGEoXG5cdFx0XHRcdFx0XHRcdCRmb3JtWyAwIF0sXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUsXG5cdFx0XHRcdFx0XHRcdHJlamVjdCxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdH0sXG5cdFx0XHQpO1xuXG5cdFx0XHRhZGRGaWx0ZXIoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LnJlbG9hZC5wcm9taXNlcycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYScsXG5cdFx0XHRcdGZ1bmN0aW9uICggcHJvbWlzZXMsIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaCggbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0VXBDYXB0Y2hhKFxuXHRcdFx0XHRcdFx0XHRldmVudC50YXJnZXQsXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUsXG5cdFx0XHRcdFx0XHRcdHJlamVjdCxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdH0sXG5cdFx0XHQpO1xuXG5cdFx0fTtcblxuXHRcdCQoIHNldFVwTWFpbiApO1xuXHR9XG4pKCBqUXVlcnkgKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=