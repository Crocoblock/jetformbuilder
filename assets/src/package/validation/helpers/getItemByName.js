const { messages } = window.jetFormValidation;

function getItemByName( findName ) {
	return messages.find(
		( { id } ) => findName === id,
	);

}

export default getItemByName;
