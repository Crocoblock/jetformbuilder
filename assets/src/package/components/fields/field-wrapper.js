import Tools, { getConvertedName } from '../../helpers/tools';

const {
		  BaseControl,
		  Popover,
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

const { __ } = wp.i18n;

function FieldWrapper( props ) {

	const {
			  isSelected,
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

	const [ popoverState, setPopoverState ] = useState( { label: false, desc: false } );

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
				<div onBlur={ setDynamicName }>
					<RichText
						isSelected
						className='jet-form-builder__label'
						placeholder='Field Label...'
						allowedFormats={ [] }
						value={ attributes.label ? attributes.label : valueIfEmptyLabel }
						onChange={ newLabel => setAttributes( { label: newLabel } ) }
					/>
					{ isSelected && <Popover
						//position={ 'bottom' === childrenPosition ? 'middle left' : 'bottom right' }
						position='middle right'
						noArrow={ false }
					>
						<div
							style={ {
								padding: '0.5em 0.8em',
								whiteSpace: 'nowrap',
							} }
						>
							{ __( 'Input Label', 'jet-form-builder' ) }
						</div>
					</Popover> }
				</div>
				{ attributes.required && <span className={ 'jet-form-builder__required' }>
					{ label.mark ? label.mark : '*' }
				</span> }
			</BaseControl.VisualLabel>
			{ 'between' === childrenPosition && children }
			<BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
				<div className='components-base-control__help'>
					<RichText
						isSelected
						tagName='small'
						placeholder='Description...'
						allowedFormats={ [] }
						value={ attributes.desc }
						onChange={ desc => setAttributes( { desc } ) }
						style={ { marginTop: '0px' } }
					/>
					{ isSelected && <Popover
						position='middle right'
						noArrow={ false }
					>
						<div
							style={ {
								padding: '0.5em 0.8em',
								whiteSpace: 'nowrap',
							} }
						>
							{ __( 'Input Description', 'jet-form-builder' ) }
						</div>
					</Popover> }
				</div>
			</BaseControl>
			{ 'bottom' === childrenPosition && children }
		</BaseControl>
	);
}

export default FieldWrapper;