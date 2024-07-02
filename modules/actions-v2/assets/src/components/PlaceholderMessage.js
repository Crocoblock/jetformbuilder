function PlaceholderMessage( { style, children } ) {
	const propStyle = {
		fontSize: '1.5em',
		padding: '2em',
		textAlign: 'center',
		backgroundColor: 'aliceblue',
		...style,
	};

	return <p style={ propStyle }>{ children }</p>;
}

// backward compatibility
window.JetFBComponents                    = window?.JetFBComponents ?? {};
window.JetFBComponents.PlaceholderMessage = PlaceholderMessage;

export default PlaceholderMessage;