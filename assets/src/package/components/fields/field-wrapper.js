import {
	classnames,
	getConvertedName,
} from '../../helpers/tools';

const {
		  BaseControl,
	  } = wp.components;

const {
		  withSelect,
	  } = wp.data;

const {
		  RichText,
	  } = wp.blockEditor;

const { __ } = wp.i18n;

function RichDescription( content ) {
	return <small style={ {
		whiteSpace: 'nowrap',
		padding: '0.2em 0.8em 0 0',
		color: '#8e8a8a',
	} }>
		{ content }
	</small>;
}

function FieldWrapper( props ) {

	const {
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
			{ RichDescription( __( 'input label:', 'jet-form-builder' ) ) }
			<div onBlur={ setDynamicName } className='jet-form-builder__label'>
				<RichText
					key={ uniqKey( 'rich-label' ) }
					placeholder='Label...'
					allowedFormats={ [] }
					value={ attributes.label ? attributes.label : valueIfEmptyLabel }
					onChange={ newLabel => setAttributes( { label: newLabel } ) }
				/>
				{ attributes.required && <span className={ 'jet-form-builder__required' }>
					{ _jf_args.required_mark ? _jf_args.required_mark : '*' }
				</span> }
			</div>
		</BaseControl.VisualLabel>;
	}

	function renderDescription() {
		return <div className='jet-form-builder__desc--wrapper'>
			{ RichDescription( __( 'input description:', 'jet-form-builder' ) ) }
			<BaseControl key={ 'custom_help_description' } className={ 'jet-form-builder__desc' }>
				<div className='components-base-control__help'>
					<RichText
						key={ uniqKey( 'rich-description' ) }
						tagName='small'
						placeholder='Description...'
						allowedFormats={ [] }
						value={ attributes.desc }
						onChange={ desc => setAttributes( { desc } ) }
						style={ { marginTop: '0px' } }
					/>
				</div>
			</BaseControl>
		</div>;
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
				<div className='jet-form-builder-row__flex--label'>
					{ renderLabel() }
					{ renderDescription() }
				</div>
				<div className='jet-form-builder-row__flex--content'>{ children }</div>
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