import Tools from "../../helpers/tools";

function FieldWrapper( {
						   attributes,
						   editProps: { uniqKey },
						   children,
						   wrapClasses = [],
						   valueIfEmptyLabel = '',
					   } ) {
	const {
			  BaseControl,
		  } = wp.components;

	const {
			  useSelect,
		  } = wp.data;

	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const label = Tools.getLabel( meta, attributes );

	return (
		<BaseControl key={ uniqKey( 'placeHolder_block' ) }
					 className={ `jet-form-builder__field-wrap jet-form-builder-row ${ wrapClasses.join( ' ' ) }` }>
			<BaseControl.VisualLabel>
				<div className={ 'jet-form-builder__label' } style={ { flex: 1 } }>
					{ label.name ? label.name : valueIfEmptyLabel }
					{ attributes.required && <span className={ 'jet-form-builder__required' }>
                        { label.mark ? label.mark : '*' }
                    </span> }
				</div>
			</BaseControl.VisualLabel>
			{ children }
			<div
				key={ 'custom_help_description' }
				className={ 'jet-form-builder__desc' }
				style={ {
					flex: '1',
					marginBottom: '8px',
				} }
			>
				<small className={ 'components-base-control__help' }
					   style={ { marginTop: '0px' } }>{ attributes.desc }</small>
			</div>
		</BaseControl>
	);
}

export default FieldWrapper;