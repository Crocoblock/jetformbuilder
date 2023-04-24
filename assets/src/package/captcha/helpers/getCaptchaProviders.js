/**
 *
 * @returns {Object[]}
 */
function getCaptchaProviders() {
	return window.JetFormEditorData[ 'captcha-tab-config' ] ?? [];
}

export default getCaptchaProviders;