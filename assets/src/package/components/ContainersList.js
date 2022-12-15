function ContainersList( { children, ...props } ) {
	return <div
		className={ 'jet-fb flex flex-dir-column gap-default' }
		style={ {
			marginBottom: '1em',
		} }
		{ ...props }
	>
		{ children }
	</div>;
}

export default ContainersList;