import PluginVerification from './verification-plugin';

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