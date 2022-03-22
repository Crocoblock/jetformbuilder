import NoticesModule from '../modules/notices';
import { config } from './functions';


export default function NoticesPlugin( store ) {
	store.registerModule( 'notices', NoticesModule );
	const { notices } = config();

	store.commit( 'insertNotices', notices );
}