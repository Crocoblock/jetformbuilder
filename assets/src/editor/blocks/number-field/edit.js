const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
} = JFBComponents;


const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	PanelBody,
	__experimentalInputControl,
	__experimentalNumberControl,
} = wp.components;

let { InputControl, NumberControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function NumberEdit( props ) {
	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;
	
	const changeNumberValue = ( key, newValue ) => {
		props.setAttributes( { [ key ]: newValue ? parseFloat( newValue ) : null } );
	}

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<PanelBody
					key={ uniqKey( 'PanelBody' ) }
					title={ __( 'Field Settings' ) }
				>
					<NumberControl
						label={ __( 'Min Value' ) }
						labelPosition='top'
						key='min'
						value={ attributes.min }
						onChange={ newValue => changeNumberValue( 'min', newValue ) }
					/>
					<NumberControl
						label={ __( 'Max Value' ) }
						labelPosition='top'
						key='max'
						value={ attributes.max }
						onChange={ newValue => changeNumberValue( 'max', newValue ) }
					/>
					<NumberControl
						label={ __( 'Step' ) }
						labelPosition='top'
						key='step'
						step={ 0.01 }
						value={ attributes.step }
						onChange={ newValue => changeNumberValue( 'step', newValue ) }
					/>
				</PanelBody>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<NumberControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					min={ attributes.min || 0 }
					max={ attributes.max || 1000 }
					step={ attributes.step || 1 }
				/>
			</FieldWrapper>
		</div>
	];
}