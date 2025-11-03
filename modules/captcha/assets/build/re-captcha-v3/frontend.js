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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmUtY2FwdGNoYS12My9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vcmUtY2FwdGNoYS12My9mcm9udGVuZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihcclxuXHRmdW5jdGlvbiAoICQgKSB7XHJcblx0XHRjb25zdCBDYXB0Y2hhSGFuZGxlciA9IGZ1bmN0aW9uICggZm9ybU5vZGUsIHsga2V5IH0sIHJlc29sdmUgKSB7XHJcblx0XHRcdGxldCBzY3JpcHQgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0J3NjcmlwdCNqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYS1qcycsXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IGNhcHRjaGFGaWVsZCA9IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0J1tuYW1lPVwiX2NhcHRjaGFfdG9rZW5cIl0nLFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBmb3JtSUQgICAgICAgPSArZm9ybU5vZGUuZGF0YXNldC5mb3JtSWQ7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBzZXRGb3JtVG9rZW4oKSB7XHJcblx0XHRcdFx0aWYgKCB3aW5kb3cuZ3JlY2FwdGNoYSApIHtcclxuXHRcdFx0XHRcdHdpbmRvdy5ncmVjYXB0Y2hhLmV4ZWN1dGUoXHJcblx0XHRcdFx0XHRcdGtleSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGFjdGlvbjogJ2pldF9mb3JtX2J1aWxkZXJfY2FwdGNoYV9fJyArIGZvcm1JRCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCkudGhlbiggZnVuY3Rpb24gKCB0b2tlbiApIHtcclxuXHRcdFx0XHRcdFx0Y2FwdGNoYUZpZWxkLnZhbHVlID0gdG9rZW47XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICFzY3JpcHQgKSB7XHJcblxyXG5cdFx0XHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICk7XHJcblxyXG5cdFx0XHRcdHNjcmlwdC5pZCAgPSAnamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEtanMnO1xyXG5cdFx0XHRcdHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP3JlbmRlcj0nICtcclxuXHRcdFx0XHRcdGtleTtcclxuXHJcblx0XHRcdFx0Y2FwdGNoYUZpZWxkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBzY3JpcHQsIGNhcHRjaGFGaWVsZCApO1xyXG5cclxuXHRcdFx0XHRzZXRGb3JtVG9rZW4oKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2V0Rm9ybVRva2VuKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2V0VXBDYXB0Y2hhID0gZnVuY3Rpb24gKCBmb3JtTm9kZSwgcmVzb2x2ZSwgcmVqZWN0ICkge1xyXG5cdFx0XHRjb25zdCBmb3JtSUQgID0gK2Zvcm1Ob2RlLmRhdGFzZXQuZm9ybUlkO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSB8fFxyXG5cdFx0XHRcdHt9O1xyXG5cclxuXHRcdFx0aWYgKCAhT2JqZWN0LnZhbHVlcyggY3VycmVudCApPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSggZm9ybU5vZGUsIGN1cnJlbnQsIHJlc29sdmUsIHJlamVjdCApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRVcE1haW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxldCBhZGRGaWx0ZXI7XHJcblxyXG5cdFx0XHRpZiAoIHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ICkge1xyXG5cdFx0XHRcdGFkZEZpbHRlciA9IHdpbmRvdy5KZXRQbHVnaW5zLmhvb2tzLmFkZEZpbHRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhZGRGaWx0ZXIgPSB3cC5ob29rcy5hZGRGaWx0ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggIXdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGEgKSB7XHJcblx0XHRcdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ2FwdGNoYSA9IENhcHRjaGFIYW5kbGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhZGRGaWx0ZXIoXHJcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQuYWpheC5wcm9taXNlcycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhJyxcclxuXHRcdFx0XHRmdW5jdGlvbiAoIHByb21pc2VzLCAkZm9ybSApIHtcclxuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0VXBDYXB0Y2hhKFxyXG5cdFx0XHRcdFx0XHRcdCRmb3JtWyAwIF0sXHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSxcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QsXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9ICkgKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGFkZEZpbHRlcihcclxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5yZWxvYWQucHJvbWlzZXMnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYScsXHJcblx0XHRcdFx0ZnVuY3Rpb24gKCBwcm9taXNlcywgZXZlbnQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaCggbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRVcENhcHRjaGEoXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LFxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUsXHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0LFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fSApICk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHQkKCBzZXRVcE1haW4gKTtcclxuXHR9XHJcbikoIGpRdWVyeSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==