import './blocks/form-fields';
import './form-actions/send-email';
import './form-actions/insert-post';
import './form-actions/register-user';
import './form-actions/update-user';
import './form-actions/update-options';
import './form-actions/call-hook';
import './form-actions/call-webhook';
import './form-actions/redirect-to-page';
import './form-actions/mailchimp';
import './form-actions/getresponse';
import './form-actions/activecampaign';
import RegisterPlugins from "./plugins/manager";
import RegisterFormFields from "./blocks/form-fields";

const { event } = JetFBActions;

event( 'jet-form-builder-initialize' )();

window.jetFormActionTypes.forEach( function ( action, index ) {
	if ( window.jetFormDefaultActions && window.jetFormDefaultActions[ action.id ] ) {
		window.jetFormActionTypes[ index ].callback = window.jetFormDefaultActions[ action.id ];
	}
} );

RegisterPlugins();
RegisterFormFields();

event( 'jet-form-builder-initialized' )();
