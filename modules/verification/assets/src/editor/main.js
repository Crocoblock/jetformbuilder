import PluginVerification from './plugin';
import VerificationRender from './action/VerificationRender';
import VerificationActionItem from './action/VerificationActionItem';
import VerificationActionWatcher from './action/VerificationActionWatcher';
import { ACTION, FAILED_EVENT, SUCCESS_EVENT } from './constants';
import TokenComputedField from './action/TokenComputedField';
import GeneratedTokenComputedField from './action/GeneratedTokenComputedField';
import TokenIDComputedField from './action/TokenIDComputedField';
import VerificationURLComputedField
	from './action/VerificationURLComputedField';
import ActionItemFooterModifier from './ActionItemFooterModifier';

const {
	      addFilter,
      } = wp.hooks;

const {
	      addAction,
	      addComputedField,
      } = JetFBActions;

const {
	      subscribe,
	      dispatch,
      } = wp.data;

window.JetFBComponents = {
	...window.JetFBComponents,
	TokenComputedField,
	TokenIDComputedField,
	VerificationURLComputedField,
};

addAction( ACTION, VerificationRender );
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
	'jet-form-builder/verification-action',
	VerificationActionItem,
);

addFilter(
	'jet.fb.action.item',
	'jet-form-builder/footer-notice-for-no-events',
	ActionItemFooterModifier
)

subscribe( VerificationActionWatcher );

dispatch( 'jet-forms/actions' ).editAction(
	ACTION,
	{
		provideEvents: () => [ SUCCESS_EVENT, FAILED_EVENT ],
	},
);