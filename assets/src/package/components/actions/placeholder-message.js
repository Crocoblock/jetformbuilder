function PlaceholderMessage( { style, children } ) {
	const propStyle = {
		fontSize: '1.5em',
		padding: '2em',
		textAlign: 'center',
		backgroundColor: 'aliceblue',
		...style
	};

	return <p style={ propStyle }>{ children }</p>;
}

export default PlaceholderMessage;