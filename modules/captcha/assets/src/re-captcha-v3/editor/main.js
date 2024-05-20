import GoogleProvider from './GoogleProvider';
import variation from './variation';

const {
	      registerPlugin,
      } = wp.plugins;

const {
	      registerBlockVariation,
      } = wp.blocks;

registerBlockVariation( 'jet-forms/captcha-container', variation );

registerPlugin(
	'jf-re-captcha-v3',
	{
		render: GoogleProvider,
	},
);