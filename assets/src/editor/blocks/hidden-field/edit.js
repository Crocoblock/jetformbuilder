import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
const block = 'jet-forms/hidden-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	ServerSideRender,
	BlockControls,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	RangeControl,
	CheckboxControl,
	Disabled,
} = wp.components;

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class HiddenEdit extends wp.element.Component {
	render() {

		const props      = this.props;
		const attributes = props.attributes;
		const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

		return [
			hasToolbar && (
				<BlockControls >
					<JetFormToolbar
						values={ attributes }
						controls={ window.jetFormBuilderControls.toolbar[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						}}
					/>
				</BlockControls>
			),
			props.isSelected && (
				<InspectorControls
					key={ keyControls }
				>
					{ window.jetFormBuilderControls.general[ block ] && window.jetFormBuilderControls.general[ block ].length && <JetFormGeneral
						values={ attributes }
						controls={ window.jetFormBuilderControls.general[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						}}
					/> }
					<PanelBody
						title={ __( 'Field Settings' ) }
					>
						<SelectControl
							key='field_value'
							label="Field Value"
							labelPosition="top"
							value={ attributes.field_value }
							onChange={ ( newValue ) => {
								props.setAttributes( { field_value: newValue } );
							} }
							options={ window.jetFormHiddenFieldData.values }
						/>
						{ 'post_meta' === attributes.field_value && <TextControl
							key="hidden_value_field"
							label="Meta Field to Get Value From"
							value={ attributes.hidden_value_field }
							onChange={ ( newValue ) => {
								props.setAttributes( { hidden_value_field: newValue } );
							} }
						/> }
						{ 'query_var' === attributes.field_value && <TextControl
							key="query_var_key"
							label="Query Variable Key"
							value={ attributes.query_var_key }
							onChange={ ( newValue ) => {
								props.setAttributes( { query_var_key: newValue } );
							} }
						/> }
						{ 'current_date' === attributes.field_value && <TextControl
							key="date_format"
							label="Format"
							value={ attributes.date_format }
							onChange={ ( newValue ) => {
								props.setAttributes( { date_format: newValue } );
							} }
						/> }
						{ 'manual_input' === attributes.field_value && <TextControl
							key="hidden_value"
							label="Value"
							value={ attributes.hidden_value }
							onChange={ ( newValue ) => {
								props.setAttributes( { hidden_value: newValue } );
							} }
						/> }
					</PanelBody>
					{ window.jetFormBuilderControls.advanced[ block ] && window.jetFormBuilderControls.advanced[ block ].length && <JetFormAdvanced
						values={ attributes }
						controls={ window.jetFormBuilderControls.advanced[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						}}
					/> }
				</InspectorControls>
			),
			<JetFieldPlaceholder
				key={ keyPlaceHolder }
				title={ 'Hidden Field' }
				subtitle={ [ attributes.name ] }
				isRequired={ attributes.required }
			/>
		];
	}
};
