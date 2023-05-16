import * as captchaBlock from './captcha-container-block';
import captchaPlugin from './captcha-plugin';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/captcha',
	function ( blocks ) {
		blocks.push( captchaBlock );

		return blocks;
	},
);

addFilter(
	'jet.fb.register.plugin.jf-validation-panel.after',
	'jet-form-builder/captcha',
	function ( plugins ) {
		plugins.push( captchaPlugin );

		return plugins;
	},
);