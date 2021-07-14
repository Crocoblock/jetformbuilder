import Tools, { getConvertedName } from '../../helpers/tools';

const {
		  BaseControl,
		  Tooltip,
	  } = wp.components;

const {
		  useSelect,
	  } = wp.data;

const {
		  RichText,
	  } = wp.blockEditor;

const {
		  useState,
		  useEffect,
	  } = wp.element;

function FieldWrapper( props ) {

	const {
			  attributes,
			  editProps: { uniqKey },
			  children,
			  wrapClasses       = [],
			  valueIfEmptyLabel = '',
			  setAttributes,
			  childrenPosition  = 'between',
		  } = props;

	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const label = Tools.getLabel( meta, attributes );

	const setDynamicName = () => {
		if ( 1 < attributes.label.length
			&& ( ! attributes.name || 'field_name' === attributes.name )
		) {
			setAttributes( { name: getConvertedName( attributes.label ) } )
		}
	};

	return (
		<BaseControl key={ uniqKey( 'placeHolder_block' ) }
					 className={ `jet-form-builder__field-wrap jet-form-builder-row ${ wrapClasses.join( ' ' ) }` }>
			{ 'top' === childrenPosition && children }
			<BaseControl.VisualLabel>
				<Tooltip text="Input Label" position="top right">
					<div onBlur={ setDynamicName }>
						<RichText
							isSelected
							className='jet-form-builder__label'
							placeholder='Field Label...'
							allowedFormats={ [] }
							value={ attributes.label ? attributes.label : valueIfEmptyLabel }
							onChange={ newLabel => setAttributes( { label: newLabel } ) }
						/>
					</div>
				</Tooltip>
				{ attributes.required && <span className={ 'jet-form-builder__required' }>
					{ label.mark ? label.mark : '*' }
				</span> }
			</BaseControl.VisualLabel>
			{ 'between' === childrenPosition && children }
			<BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
				<Tooltip text="Input Description" position="top right">
					<div className='components-base-control__help'>
						<RichText
							tagName='small'
							placeholder='Description...'
							allowedFormats={ [] }
							value={ attributes.desc }
							onChange={ desc => setAttributes( { desc } ) }
							style={ { marginTop: '0px' } }
							onBlur={ () => console.log( 'desc' ) }
						/>
					</div>
				</Tooltip>
			</BaseControl>
			{ 'bottom' === childrenPosition && children }
		</BaseControl>
	);
}

export default FieldWrapper;