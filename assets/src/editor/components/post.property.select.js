const {
	      SelectControl,
	      TextControl,
      } = wp.components;
const {
	      useContext,
      } = wp.element;
const {
	      CurrentActionEditContext,
	      ActionFieldsMapContext,
	      CurrentPropertyMapContext,
      } = JetFBComponents;

function PostPropertySelect() {
	// context with action props
	const {
		      FieldSelect,
		      property,
	      } = useContext( CurrentPropertyMapContext );
	const {
		      source,
		      setMapField,
		      getMapField,
	      } = useContext( CurrentActionEditContext );
	// context with current field in fields map
	const {
		      name,
		      index,
	      } = useContext( ActionFieldsMapContext );

	switch ( property ) {
		case 'meta_input':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				{ FieldSelect }
				<TextControl
					key={ name + index + '_text' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
				/>
			</div>;
		case 'post_terms':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				{ FieldSelect }
				<SelectControl
					key={ name + index + '_select' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
					options={ source.taxonomies }
				/>
			</div>;
		default:
			return FieldSelect;
	}
}

export default PostPropertySelect;