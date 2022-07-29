const { store: blocksStore } = wp.blocks;

class MessageItem {
	constructor( message ) {
		this.id     = message.id;
		this.blocks = [];

		this.setBlocksMeta( message.supported );
	}

	setBlocksMeta( blocks ) {
		if ( !blocks.length ) {
			return;
		}

		this.blocks = blocks.map( block => {
			const blockType = wp.data.select( blocksStore ).getBlockType(
				`jet-forms/${ block }`,
			);

			return {
				title: blockType.title,
				icon: blockType.icon.src,
			};
		} );
	}
}

class ValidationMessages {

	constructor() {
		this.items = [];
	}

	push( message ) {
		this.items.push( new MessageItem( message ) );
	}

}

export default ValidationMessages;