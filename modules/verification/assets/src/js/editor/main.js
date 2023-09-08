import PluginVerification from './plugin';
import VerificationRender from './action/VerificationRender';
import VerificationActionItem from './action/VerificationActionItem';
import VerificationActionWatcher from './action/VerificationActionWatcher';

const {
	      addFilter,
      } = wp.hooks;

const {
	      addAction,
      } = JetFBActions;

const {
	      subscribe,
      } = wp.data;

addAction( 'verification', VerificationRender );

addFilter(
	'jet.fb.register.plugin.jf-actions-panel.before',
	'jet-form-builder/verification',
	function ( plugins ) {
		plugins.push( PluginVerification );

		return plugins;
	},
);

addFilter(
	'jet.fb.action.item',
	'jet-form-builder/verification-action',
	VerificationActionItem,
);

subscribe( VerificationActionWatcher );