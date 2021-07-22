import Tools, {
	classnames,
	getConvertedName,
} from '../../helpers/tools';

const {
		  BaseControl,
		  Popover,
	  } = wp.components;

const {
		  //useSelect,
		  withSelect,
	  } = wp.data;

const {
		  RichText,
	  } = wp.blockEditor;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const { __ } = wp.i18n;

const { applyFilters } = wp.hooks;

function FieldWrapper( props ) {

	const {
			  isSelected,
			  attributes,
			  editProps: { uniqKey, blockName = '' },
			  children,
			  wrapClasses       = [],
			  valueIfEmptyLabel = '',
			  setAttributes,
			  childrenPosition  = 'between',
			  _jf_args,
		  } = props;

	const setDynamicName = () => {
		if ( 1 < attributes.label.length
			&& ( ! attributes.name || 'field_name' === attributes.name )
		) {
			setAttributes( { name: getConvertedName( attributes.label ) } )
		}
	};

	function renderLabel() {
		return <BaseControl.VisualLabel>
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
					position='middle right'
					noArrow={ false }
				>
					<div
						style={ {
							padding: '0.3em 0.5em',
							whiteSpace: 'nowrap',
						} }
					>
						{ __( 'Input Label', 'jet-form-builder' ) }
					</div>
				</Popover> }
			</div>
			{ attributes.required && <span className={ 'jet-form-builder__required' }>
					{ _jf_args.required_mark ? _jf_args.required_mark : '*' }
				</span> }
		</BaseControl.VisualLabel>;
	}

	function renderDescription() {
		return <BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
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
					position='bottom center'
					noArrow={ false }
				>
					<div
						style={ {
							padding: '0.3em 0.5em',
							whiteSpace: 'nowrap',
						} }
					>
						{ __( 'Input Description', 'jet-form-builder' ) }
					</div>
				</Popover> }
			</div>
		</BaseControl>;
	}

	if ( 'row' === _jf_args.fields_layout ) {
		wrapClasses.push( 'jet-form-builder-row__flex' );
	}

	return (
		<BaseControl
			key={ uniqKey( 'placeHolder_block' ) }
			className={ classnames(
				'jet-form-builder__field-wrap',
				'jet-form-builder-row',
				wrapClasses,
			) }
		>
			{ 'row' !== _jf_args.fields_layout && <>
				{ 'top' === childrenPosition && children }
				{ renderLabel() }
				{ 'between' === childrenPosition && children }
				{ renderDescription() }
				{ 'bottom' === childrenPosition && children }
			</> }
			{ 'row' === _jf_args.fields_layout && <>
				<div style={ { flex: 1 } }>
					{ renderLabel() }
					{ renderDescription() }
				</div>
				<div style={ { flex: 3 } }>{ children }</div>
			</> }
		</BaseControl>
	);
}

export default withSelect( select => {
	const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

	return {
		_jf_args: JSON.parse( meta._jf_args || {} ),
	}
} )( FieldWrapper );