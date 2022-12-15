function DetailsContainer( { children } ) {
	return <div
		className={ [
			'jet-fb',
			'flex',
			'flex-dir-column',
			'container',
			'gap-1em',
		].join( ' ' ) }
	>
		{ children }
	</div>;
}

export default DetailsContainer;