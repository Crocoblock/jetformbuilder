const { __ } = wp.i18n;

const { Tools } = JetFBActions;

const { globalTab } = JetFBActions;
const currentTab    = globalTab( { slug: 'captcha-tab' } );
const captchaItems  = Tools.withPlaceholder(
	window.JetFormEditorData[ 'captcha-tab-config' ],
	__( 'Without protection', 'jet-form-builder' ),
);

export { captchaItems, currentTab };