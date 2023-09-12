import PluginVerification from './plugin';
import VerificationRender from './action/VerificationRender';
import VerificationActionItem from './action/VerificationActionItem';
import VerificationActionWatcher from './action/VerificationActionWatcher';
import { ACTION, FAILED_EVENT, SUCCESS_EVENT } from './constants';

const {
	      addFilter,
      } = wp.hooks;

const {
	      addAction,
      } = JetFBActions;

const {
	      subscribe,
	      dispatch,
      } = wp.data;

addAction( ACTION, VerificationRender );

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

dispatch( 'jet-forms/actions' ).editAction(
	ACTION,
	{
		provideEvents: () => [ SUCCESS_EVENT, FAILED_EVENT ],
	},
);