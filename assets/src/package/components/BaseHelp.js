function BaseHelp( {
	children,
	className = '',
	style = {},
	...props
} ) {
	return <p
		className={ 'jet-fb-base-control__help' + (
			className ? ` ${ className }` : ''
		) }
		style={ {
			fontSize: '12px',
			fontStyle: 'normal',
			color: 'rgb(117, 117, 117)',
			marginTop: '0px',
			...style,
		} }
		{ ...props }
	>
		{ children }
	</p>;
}

export default BaseHelp;