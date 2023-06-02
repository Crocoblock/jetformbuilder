import './blocks/form-fields';
import './form-actions/send.email/index';
import './form-actions/insert.post/index';
import './form-actions/register.user/index';
import './form-actions/update.user/index';
import './form-actions/call.hook/index';
import './form-actions/call.webhook/index';
import './form-actions/redirect.to.page/index';
import './form-actions/mailchimp/index';
import './form-actions/getresponse/index';
import './form-actions/activecampaign/index';
import './form-actions/save.record/index';

import RegisterPlugins from './plugins/manager';
import RegisterFormFields from './blocks/form-fields';

const { event } = JetFBActions;

event( 'jet-form-builder-initialize' )();

RegisterPlugins();
RegisterFormFields();

event( 'jet-form-builder-initialized' )();
