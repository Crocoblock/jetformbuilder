import activeCampaign from './activeCampaign';
import { dispatch, register } from '@wordpress/data';
import store from './store';

register( store );

dispatch( 'jet-forms/actions' ).registerAction( activeCampaign );