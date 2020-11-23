import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
import Tools from "../../tools/tools";

const block = 'jet-forms/text-field';

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

const localizeData = window.JetFormTextFieldData;

window.jetFormBuilderBlockCallbacks[ block ].edit = class TextEdit extends wp.element.Component {
	render() {

		const props = this.props;
		const attributes = props.attributes;

		return [
			( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length &&
				<BlockControls
					key={ keyControls }
				>
					<JetFormToolbar
						values={ attributes }
						controls={ window.jetFormBuilderControls.toolbar[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/>
				</BlockControls> ),
			props.isSelected && (
				<InspectorControls
					key={ 'inspector' }
				>
					{ window.jetFormBuilderControls.general[ block ] && window.jetFormBuilderControls.general[ block ].length &&
					<JetFormGeneral
						key={ keyGeneral }
						values={ attributes }
						controls={ window.jetFormBuilderControls.general[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/> }
					<PanelBody
						title={ __( 'Field Settings' ) }
					>
						<SelectControl
							key='field_type'
							label={ __( 'Field Type' ) }
							labelPosition='top'
							value={ attributes.field_type }
							onChange={ newValue => {
								props.setAttributes( { field_type: newValue } );
							} }
							options={ localizeData.field_types_list }
						/>
						<ToggleControl
							key={ 'enable_input_mask' }
							label={ __( 'Set Input Mask' ) }
							checked={ attributes.enable_input_mask }
							help={ __( 'Check this to setup specific input format for the current field' ) }
							onChange={ newVal => {
								props.setAttributes( {
									enable_input_mask: newVal,
								} );
							} }
						/>
						{ attributes.enable_input_mask && <SelectControl
							key='mask_type'
							label={ __( 'Mask type' ) }
							labelPosition='top'
							value={ attributes.mask_type }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_type: newValue } );
							} }
							options={ localizeData.mask_types_list }
						/> }
						{ attributes.enable_input_mask && <TextControl
							key='input_mask'
							label={ __( 'Input mask' ) }
							help={ Tools.getHelpMessage( localizeData, 'input_mask' ) }
							value={ attributes.input_mask }
							onChange={ ( newValue ) => {
								props.setAttributes( { input_mask: newValue } );
							} }
						/> }
						{ attributes.enable_input_mask && <SelectControl
							key='mask_visibility'
							label={ __( 'Mask visibility' ) }
							labelPosition='top'
							value={ attributes.mask_visibility }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_visibility: newValue } );
							} }
							options={ localizeData.mask_visibilities_list }
						/> }
						{ attributes.enable_input_mask && <SelectControl
							key='mask_placeholder'
							label={ __( 'Mask placeholder' ) }
							labelPosition='top'
							value={ attributes.mask_placeholder }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_placeholder: newValue } );
							} }
							options={ localizeData.mask_placeholders_list }
						/> }

					</PanelBody>
					{ window.jetFormBuilderControls.advanced[ block ] && window.jetFormBuilderControls.advanced[ block ].length &&
					<JetFormAdvanced
						values={ attributes }
						controls={ window.jetFormBuilderControls.advanced[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/> }
				</InspectorControls>
			),
			<TextControl
				key={ `place_holder_block_${ block }` }
				label={ attributes.label }
			/>
		];
	}
};
