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
      if (window.grecaptcha) {
        window.grecaptcha.execute(key, {
          action: 'jet_form_builder_captcha__' + formID
        }).then(function (token) {
          captchaFields.forEach(function (field) {
            field.value = token;
          });
          resolve();
        });
      } else {
        resolve();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmUtY2FwdGNoYS12My9mcm9udGVuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9yZS1jYXB0Y2hhLXYzL2Zyb250ZW5kL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKFxuXHRmdW5jdGlvbiAoICQgKSB7XG5cdFx0Y29uc3QgQ2FwdGNoYUhhbmRsZXIgPSBmdW5jdGlvbiAoIGZvcm1Ob2RlLCB7IGtleSB9LCByZXNvbHZlICkge1xuXHRcdFx0bGV0IHNjcmlwdCAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0J3NjcmlwdCNqZXQtZm9ybS1idWlsZGVyLXJlY2FwdGNoYS1qcycsXG5cdFx0XHQpO1xuXG5cblx0XHRcdGNvbnN0IGNhcHRjaGFGaWVsZHMgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHQnW25hbWU9XCJfY2FwdGNoYV90b2tlblwiXScsXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBjYXB0Y2hhRmllbGQgPSBjYXB0Y2hhRmllbGRzWzBdO1xuXHRcdFx0Y29uc3QgZm9ybUlEICAgICAgID0gK2Zvcm1Ob2RlLmRhdGFzZXQuZm9ybUlkOyAgXG5cblx0XHRcdGZ1bmN0aW9uIHNldEZvcm1Ub2tlbigpIHtcblx0XHRcdFx0aWYgKCB3aW5kb3cuZ3JlY2FwdGNoYSApIHtcblx0XHRcdFx0XHR3aW5kb3cuZ3JlY2FwdGNoYS5leGVjdXRlKFxuXHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdqZXRfZm9ybV9idWlsZGVyX2NhcHRjaGFfXycgKyBmb3JtSUQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCkudGhlbiggZnVuY3Rpb24gKCB0b2tlbiApIHtcblx0XHRcdFx0XHRcdGNhcHRjaGFGaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRcdFx0XHRcdFx0ZmllbGQudmFsdWUgPSB0b2tlbjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjYXB0Y2hhRmllbGQpIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXNjcmlwdCApIHtcblxuXHRcdFx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xuXG5cdFx0XHRcdHNjcmlwdC5pZCAgPSAnamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEtanMnO1xuXHRcdFx0XHRzY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JyArXG5cdFx0XHRcdFx0a2V5O1xuXG5cdFx0XHRcdGNhcHRjaGFGaWVsZC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggc2NyaXB0LCBjYXB0Y2hhRmllbGQgKTtcblxuXHRcdFx0XHRzZXRGb3JtVG9rZW4oKTtcblxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNldEZvcm1Ub2tlbigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBzZXRVcENhcHRjaGEgPSBmdW5jdGlvbiAoIGZvcm1Ob2RlLCByZXNvbHZlLCByZWplY3QgKSB7XG5cdFx0XHRjb25zdCBmb3JtSUQgID0gK2Zvcm1Ob2RlLmRhdGFzZXQuZm9ybUlkO1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWc/LlsgZm9ybUlEIF0gfHxcblx0XHRcdFx0e307XG5cblx0XHRcdGlmICggIU9iamVjdC52YWx1ZXMoIGN1cnJlbnQgKT8ubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhKCBmb3JtTm9kZSwgY3VycmVudCwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHNldFVwTWFpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBhZGRGaWx0ZXI7XG5cblx0XHRcdGlmICggd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgKSB7XG5cdFx0XHRcdGFkZEZpbHRlciA9IHdpbmRvdy5KZXRQbHVnaW5zLmhvb2tzLmFkZEZpbHRlcjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhZGRGaWx0ZXIgPSB3cC5ob29rcy5hZGRGaWx0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGEgKSB7XG5cdFx0XHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNhcHRjaGEgPSBDYXB0Y2hhSGFuZGxlcjtcblx0XHRcdH1cblxuXHRcdFx0YWRkRmlsdGVyKFxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5hamF4LnByb21pc2VzJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItcmVjYXB0Y2hhJyxcblx0XHRcdFx0ZnVuY3Rpb24gKCBwcm9taXNlcywgJGZvcm0gKSB7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaCggbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0VXBDYXB0Y2hhKFxuXHRcdFx0XHRcdFx0XHQkZm9ybVsgMCBdLFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlLFxuXHRcdFx0XHRcdFx0XHRyZWplY3QsXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHR9LFxuXHRcdFx0KTtcblxuXHRcdFx0YWRkRmlsdGVyKFxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5yZWxvYWQucHJvbWlzZXMnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci1yZWNhcHRjaGEnLFxuXHRcdFx0XHRmdW5jdGlvbiAoIHByb21pc2VzLCBldmVudCApIHtcblxuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0XHRcdHNldFVwQ2FwdGNoYShcblx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlLFxuXHRcdFx0XHRcdFx0XHRyZWplY3QsXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKSApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHR9LFxuXHRcdFx0KTtcblxuXHRcdH07XG5cblx0XHQkKCBzZXRVcE1haW4gKTtcblx0fVxuKSggalF1ZXJ5ICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9