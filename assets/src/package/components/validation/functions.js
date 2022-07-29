import GroupedMessages from './GroupedMessages';

const { messages } = window.jetFormValidation;

const sorted = messages.sort( ( prev, next ) => {
	return prev.supported.length - next.supported.length;
} );

const getItemByName = findName => messages.find(
	( { id } ) => findName === id,
);

function getGroupedMessages() {
	const groups = new GroupedMessages();

	for ( const message of sorted ) {
		groups.push( message );
	}

	return groups.items;
}

export { getItemByName, getGroupedMessages };