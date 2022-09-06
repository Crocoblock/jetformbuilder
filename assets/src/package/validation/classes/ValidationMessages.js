import MessageItem from './MessageItem';

class ValidationMessages {

	constructor() {
		this.items = [];
	}

	push( message ) {
		this.items.push( new MessageItem( message ) );
	}

}

export default ValidationMessages;