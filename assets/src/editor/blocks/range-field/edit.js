import FieldWrapper from '../../components/field-wrapper';
import {
	AdvancedFields,
	GeneralFields,
	ToolBarFields
} from "../controls/field-control";

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextControl,
	PanelBody,
	__experimentalNumberControl,
	__experimentalInputControl
} = wp.components;

const { useState } = wp.element;

let { NumberControl, InputControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function RangeEdit( props ) {

	const blockProps = useBlockProps();

	const [ rangeValue, setRangeValue ] = useState( 50 );

	const {
		attributes,
		setAttributes,
		editProps: { uniqKey, attrHelp }
	} = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		props.isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<PanelBody
					title={ __( 'Field Settings' ) }
					key={ uniqKey( 'PanelBody' ) }
				>
					<NumberControl
						label={ __( 'Min Value' ) }
						labelPosition='top'
						key='min'
						value={ attributes.min }
						onChange={ ( newValue ) => {
							setAttributes( { min: parseInt( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Max Value' ) }
						labelPosition='top'
						key='max'
						value={ attributes.max }
						onChange={ ( newValue ) => {
							setAttributes( { max: parseInt( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Step' ) }
						labelPosition='top'
						key='step'
						value={ attributes.step }
						onChange={ ( newValue ) => {
							setAttributes( { step: parseInt( newValue ) } );
						} }
					/>
					<TextControl
						key='prefix'
						label={ __( 'Value prefix' ) }
						value={ attributes.prefix }
						help={ attrHelp( 'prefix_suffix' ) }
						onChange={ ( newValue ) => {
							setAttributes( { prefix: newValue } );
						} }
					/>
					<TextControl
						key='suffix'
						label={ __( 'Value suffix' ) }
						value={ attributes.suffix }
						help={ attrHelp( 'prefix_suffix' ) }
						onChange={ ( newValue ) => {
							setAttributes( { suffix: newValue } );
						} }
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
				wrapClasses={ [
					'range-wrap'
				] }
				{ ...props }
			>
				<div className="range-flex-wrap">
					<InputControl
						key={ uniqKey( 'placeholder_block' ) }
						type={ 'range' }
						min={ attributes.min || 0 }
						max={ attributes.max || 100 }
						step={ attributes.step || 1 }
						onChange={ setRangeValue }
					/>
					<div className={ 'jet-form-builder__field-value' }>
						<span className={ 'jet-form-builder__field-value-prefix' }>{ attributes.prefix }</span>
						<span>{ rangeValue }</span>
						<span className={ 'jet-form-builder__field-value-suffix' }>{ attributes.suffix }</span>
					</div>
				</div>
			</FieldWrapper>
		</div>
	];
}