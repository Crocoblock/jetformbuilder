const {
		  GeneralFields,
		  AdvancedFields,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
		  RichText,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  TextareaControl,
		  TextControl,
		  PanelBody,
		  SelectControl,
		  Button,
		  ToggleControl,
	  } = wp.components;

const { useState, useEffect } = wp.element;

const defaultClasses = [ 'jet-form-builder__action-button' ];

export default function ActionButton( props ) {

	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  editProps: { uniqKey, attrHelp },
			  context,
		  } = props;

	const [ buttonClasses, setButtonClasses ] = useState();

	useEffect( () => {
		setButtonClasses( () => {
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
		} );
	}, [ attributes.action_type ] )

	return [
		props.isSelected && <InspectorControls
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
					label={ __( 'Button Action Type' ) }
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
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<Button
				isSecondary
				key="next_page_button"
				className={ buttonClasses }
			>
				<RichText
					placeholder='Label...'
					allowedFormats={ [] }
					value={ attributes.label }
					onChange={ label => setAttributes( { label } ) }
				/>
			</Button>
		</div>,
	];

}