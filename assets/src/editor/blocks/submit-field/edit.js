const {
		  GeneralFields,
		  AdvancedFields,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  Button,
		  SelectControl,
	  } = wp.components;

const {
		  RichText,
	  } = wp.blockEditor;

const { useState, useEffect } = wp.element;

const defaultClasses = [ 'jet-form-builder__action-button' ];

export default function ActionButtonEdit( props ) {

	const {
			  attributes,
			  setAttributes,
			  isSelected,
			  editProps: { uniqKey },
		  } = props;

	const classesButton = () => {
		if ( ! attributes.action_type ) {
			return defaultClasses;
		}
		const action = JetFormActionButton.actions.find( elem => attributes.action_type === elem.value )

		if ( ! action ) {
			return defaultClasses;
		}
		if ( ! attributes.label ) {
			setAttributes( { label: action.preset_label } );
		}

		return [ ...defaultClasses, action.button_class ];
	};

	const classesWrapper = () => {
		if ( ! attributes.action_type ) {
			return [];
		}
		const action = JetFormActionButton.actions.find( elem => attributes.action_type === elem.value );

		if ( ! action ) {
			return [];
		}

		return [ ...defaultClasses, action.wrapper_class ];
	};

	const [ buttonClasses, setButtonClasses ] = useState( classesButton );
	const [ wrapperClasses, setWrapperClasses ] = useState( classesWrapper );

	useEffect( () => {
		setButtonClasses( classesButton() );
		setWrapperClasses( classesWrapper() );
	}, [ attributes.action_type ] );

	const blockProps = useBlockProps( { className: wrapperClasses.join( ' ' ) } );

	return [
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				autoCompleteLabel={ false }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props } key={ uniqKey( 'FieldSettingsWrapper' ) }>
				<SelectControl
					key={ uniqKey( 'action_type' ) }
					label={ __( 'Button Action Type', 'jet-form-builder' ) }
					value={ attributes.action_type }
					options={ JetFormActionButton.actions }
					onChange={ action_type => setAttributes( { action_type } ) }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div
			key={ uniqKey( 'submit-wrap' ) }
			{ ...blockProps }
		>
			<Button
				isPrimary
				className={ buttonClasses.join( ' ' ) }
				key={ uniqKey( 'place_holder_block' ) }
			>
				<RichText
					placeholder='Input Submit label...'
					allowedFormats={ [] }
					value={ attributes.label }
					onChange={ label => setAttributes( { label } ) }
				/>
			</Button>
		</div>,
	];
}