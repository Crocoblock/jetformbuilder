const {
		  BaseControl,
	  } = wp.components;

const {
		  useSelect,
	  } = wp.data;

const {
		  RichText,
	  } = wp.blockEditor;

const { useState } = wp.element;

const { useMetaState } = JetFBHooks;

function FieldWrapper( props ) {

	const {
			  attributes,
			  editProps: { uniqKey },
			  children,
			  wrapClasses       = [],
			  valueIfEmptyLabel = '',
			  setAttributes,
		  } = props;

	/*const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );*/

	const [ formArgs, setFormArgs ] = useMetaState( '_jf_args' );

	//const label = Tools.getLabel( meta, attributes );

	return (
		<BaseControl key={ uniqKey( 'placeHolder_block' ) }
					 className={ `jet-form-builder__field-wrap jet-form-builder-row ${ wrapClasses.join( ' ' ) }` }>
			<BaseControl.VisualLabel>
				<RichText
					className='jet-form-builder__label'
					placeholder='Field Name'
					allowedFormats={ [] }
					value={ attributes.label ? attributes.label : valueIfEmptyLabel }
					onChange={ newLabel => setAttributes( { label: newLabel } ) }
				/>
				{ attributes.required && <RichText
					tagName='span'
					className='jet-form-builder__required'
					placeholder='(required)'
					allowedFormats={ [] }
					value={ formArgs.required_mark }
					onChange={ required_mark => setFormArgs( prevArgs => ( { ...prevArgs, required_mark } ) ) }
				/> }
			</BaseControl.VisualLabel>
			{ children }
			<BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
				<small className={ 'components-base-control__help' }
					   style={ { marginTop: '0px' } }>{ attributes.desc }</small>
			</BaseControl>
		</BaseControl>
	);
}

export default FieldWrapper;