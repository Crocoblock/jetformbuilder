import PagesActions from '../modules/page-actions';
import { config } from './functions';

function PageActionsPlugin( store ) {
	const { actions = [] } = config();

	store.registerModule( 'actions', PagesActions );
	store.commit( 'actions/setPageActions', [ ...actions ] );
}

export default PageActionsPlugin;