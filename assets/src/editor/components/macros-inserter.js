const {
	TextControl,
	TextareaControl,
	SelectControl,
	Button,
	Popover,
	PanelBody,
	PanelRow
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

function MacrosInserter( {
							 children,
							 fields,
							 onFieldClick,
							 customMacros,
						 } ) {

	const [ showPopover, setPopoverState ] = useState( () => false );

	return <div className="jet-form-editor__macros-inserter">
		<Button
			isTertiary
			isSmall
			icon={ showPopover ? 'no-alt' : 'admin-tools' }
			label={ 'Insert macros' }
			className="jet-form-editor__macros-trigger"
			onClick={ () => {
				setPopoverState( prev => ! prev );
			} }
		/>
		{ showPopover && (
			<Popover
				position={ 'bottom left' }
			>
				{ fields.length && <PanelBody title={ 'Form Fields' }>
					{ fields.map( field => {
						return <div key={ 'field_' + field.name }>
							<Button
								isLink
								onClick={ () => {
									onFieldClick( field.name )
								} }
							>{ '%' + field.name + '%' }</Button>
						</div>;
					} ) }
				</PanelBody> }
				{ customMacros && <PanelBody title={ 'Custom Macros' }>
					{ customMacros.map( macros => {
						return <div key={ 'macros_' + macros }>
							<Button
								isLink
								onClick={ () => {
									onFieldClick( macros )
								} }
							>{ '%' + macros + '%' }</Button>
						</div>;
					} ) }
				</PanelBody> }
			</Popover>
		) }
	</div>;
}

export default MacrosInserter;