import ArgsMeta from './meta/arguments';
import ActionsMeta from './meta/actions';
import PresetMeta from './meta/preset';
import MessagesMeta from './meta/messages';
import Captcha from "./meta/captcha";
import Gateways from "./meta/gateways";

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
import { event } from "./helpers/tools";


event( 'jet-form-builder-initialize' )();

window.jetFormActionTypes.forEach( function ( action, index ) {
	if ( window.jetFormDefaultActions && window.jetFormDefaultActions[ action.id ] ) {
		window.jetFormActionTypes[ index ].callback = window.jetFormDefaultActions[ action.id ];
	}
} );

ArgsMeta();
Captcha();
Gateways();
ActionsMeta();
PresetMeta();
MessagesMeta();

event( 'jet-form-builder-initialized' )();
