import PluginVerification from './verification-plugin/render';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.plugin.jf-actions-panel.before',
	'jet-form-builder/verification',
	function ( plugins ) {
		plugins.push( PluginVerification );

		return plugins;
	},
);