import Tools from "../helpers/tools";

export default function FieldWrapper( { attributes, block, children, wrapClasses = [], valueIfEmptyLabel = '' } ) {
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
		<BaseControl key={ `place_holder_block_${ block }_label` }
					 className={ `jet-form-builder__field-wrap jet-form-builder-row ${ wrapClasses.join( ' ' ) }` }>
			<BaseControl.VisualLabel>
				<div className={ 'jet-form-builder__label' }>
					{ label.name ? label.name : valueIfEmptyLabel }
					{ attributes.required && <span className={ 'jet-form-builder__required' }>
                        { label.mark ? label.mark : '*' }
                    </span> }
				</div>
			</BaseControl.VisualLabel>
			{ children }
			<BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
				<small className={ 'components-base-control__help' }
					   style={ { marginTop: '0px' } }>{ attributes.desc }</small>
			</BaseControl>
		</BaseControl>
	);
}