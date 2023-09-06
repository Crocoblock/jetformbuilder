const { __ } = wp.i18n;

const {
	      Tools,
	      getCaptchaProviders,
      } = JetFBActions;

const { globalTab } = JetFBActions;
const currentTab    = globalTab( { slug: 'captcha-tab' } );
const captchaItems  = Tools.withPlaceholder(
	getCaptchaProviders(),
	__( 'Without protection', 'jet-form-builder' ),
);

export { captchaItems, currentTab };