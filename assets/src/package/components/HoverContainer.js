function HoverContainer( { isHover = false, children } ) {
	return <div
		className={ [
			'jet-fb',
			isHover ? 'show' : 'hide',
			'p-absolute',
			'wh-100',
			'flex-center',
			'gap-05em',
		].join( ' ' ) }
		style={ {
			backgroundColor: '#ffffffcc',
			transition: '0.3s',
		} }
	>
		{ children }
	</div>;
}

export default HoverContainer;