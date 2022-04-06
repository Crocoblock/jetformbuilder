import MessagesModule from '../modules/messages';
import { config } from './functions';


export default function MessagesPlugin( store ) {
	store.registerModule( 'messages', MessagesModule );
	const { messages } = config();

	store.commit( 'messages/insert', messages );
}