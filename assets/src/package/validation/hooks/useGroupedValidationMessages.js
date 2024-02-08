import ValidationMessages from '../classes/ValidationMessages';

const { messages } = window.jetFormValidation;
const { useState } = wp.element;

const sorted = messages.sort( ( prev, next ) => {
	return prev.supported.length - next.supported.length;
} );

function getGroupedMessages() {
	const groups = new ValidationMessages();

	for ( const message of sorted ) {
		groups.push( message );
	}

	return groups.items;
}

function useGroupedValidationMessages() {
	const [ localMessages ] = useState( getGroupedMessages );

	return localMessages;
}

export default useGroupedValidationMessages;