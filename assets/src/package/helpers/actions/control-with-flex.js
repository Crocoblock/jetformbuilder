function controlWithFlex( Instance ) {

	return props => <Instance
		baseProps={ {
			style: {
				display: 'flex',
				alignItems: 'center',
			},
			labelProps: {
				style: { flex: '1' },
			},
			className: 'jet-fb-with-border',
		} }
		style={ {
			flex: '2',
		} }
		{ ...props }
	/>
}

export default controlWithFlex;