import JetFieldPlaceholder from '../controls/placeholder';
import { AdvancedFields, GeneralFields } from "../controls/field-control";
import { hiddenValues } from "./options";

const { __ } = wp.i18n;

const {
	BlockControls,
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextControl,
	SelectControl,
	PanelBody,
} = wp.components;

export default function HiddenEdit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	const blockProps = useBlockProps();

	return [
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<PanelBody
					title={ __( 'Field Settings' ) }
				>
					<SelectControl
						key='field_value'
						label="Field Value"
						labelPosition="top"
						value={ attributes.field_value }
						onChange={ newValue => {
							setAttributes( { field_value: newValue } );
						} }
						options={ hiddenValues }
					/>
					{ [ 'post_meta', 'user_meta' ].includes( attributes.field_value ) && <TextControl
						key="hidden_value_field"
						label="Meta Field to Get Value From"
						value={ attributes.hidden_value_field }
						onChange={ newValue => {
							setAttributes( { hidden_value_field: newValue } );
						} }
					/> }
					{ 'query_var' === attributes.field_value && <TextControl
						key="query_var_key"
						label="Query Variable Key"
						value={ attributes.query_var_key }
						onChange={ newValue => {
							setAttributes( { query_var_key: newValue } );
						} }
					/> }
					{ 'current_date' === attributes.field_value && <TextControl
						key="date_format"
						label="Format"
						value={ attributes.date_format }
						onChange={ newValue => {
							setAttributes( { date_format: newValue } );
						} }
					/> }
					{ 'manual_input' === attributes.field_value && <TextControl
						key="hidden_value"
						label="Value"
						value={ attributes.hidden_value }
						onChange={ newValue => {
							setAttributes( { hidden_value: newValue } );
						} }
					/> }
				</PanelBody>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<JetFieldPlaceholder
				key={ uniqKey( 'JetFieldPlaceholder' ) }
				title={ 'Hidden Field' }
				subtitle={ [ attributes.name ] }
			/>
		</div>
	];
};
