import HCaptchaProvider from './HCaptchaProvider';
import variation from './variation';

const {
	      registerPlugin,
      } = wp.plugins;

const {
	      registerBlockVariation,
      } = wp.blocks;

registerBlockVariation( 'jet-forms/captcha-container', variation );

registerPlugin(
	'jf-hcaptcha',
	{
		render: HCaptchaProvider,
	},
);