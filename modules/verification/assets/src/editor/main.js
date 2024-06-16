import PluginVerification from './plugin';
import VerificationActionWatcher from './action/VerificationActionWatcher';
import TokenComputedField from './action/TokenComputedField';
import GeneratedTokenComputedField from './action/GeneratedTokenComputedField';
import TokenIDComputedField from './action/TokenIDComputedField';
import VerificationURLComputedField
	from './action/VerificationURLComputedField';
import ActionItemFooterModifier from './ActionItemFooterModifier';
import { addFilter } from '@wordpress/hooks';
import { subscribe, dispatch } from '@wordpress/data';
import action from './action';

const {
	      addComputedField,
      } = JetFBActions;

window.JetFBComponents = {
	...window.JetFBComponents,
	TokenComputedField,
	TokenIDComputedField,
	VerificationURLComputedField,
};

// Secure token field in Register User action
addComputedField( TokenComputedField, { isScoped: true } );
// Generate for other actions the previous field, if it used in Register User
addComputedField( GeneratedTokenComputedField );
addComputedField( TokenIDComputedField );
addComputedField( VerificationURLComputedField );

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
	'jet-form-builder/footer-notice-for-no-events',
	ActionItemFooterModifier,
);

subscribe( VerificationActionWatcher );

dispatch( 'jet-forms/actions' ).registerAction( action );