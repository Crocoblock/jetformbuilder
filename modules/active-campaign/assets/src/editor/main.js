import activeCampaign from './activeCampaign';
import { dispatch } from '@wordpress/data';

dispatch( 'jet-forms/actions' ).registerAction( activeCampaign );