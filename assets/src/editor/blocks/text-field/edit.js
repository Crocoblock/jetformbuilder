import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../helpers/tools";
import FieldWrapper from "../../components/field-wrapper";

const block = 'jet-forms/text-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
	BlockControls,
	InspectorControls,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	__experimentalNumberControl,
} = wp.components;

let { NumberControl, InputControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

const uniqKey = suffix => `${ block }-${ suffix }`;

const localizeData = window.JetFormTextFieldData;

window.jetFormBuilderBlockCallbacks[ block ].edit = function TextEdit( props ) {
	const attributes = props.attributes;

	const changeNumberValue = ( key, newValue ) => {
		const value = ( newValue && newValue > 0 ) ? parseInt( newValue ) : null;

		props.setAttributes( { [ key ]: value } );
	}

	return [
		( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length &&
			<BlockControls
				key={ uniqKey( 'BlockControls' ) }
			>
				<JetFormToolbar
					key={ uniqKey( 'JetFormToolbar' ) }
					values={ attributes }
					controls={ window.jetFormBuilderControls.toolbar[ block ] }
					onChange={ ( newValues ) => {
						props.setAttributes( newValues );
					} }
				/>
			</BlockControls> ),
		props.isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				{ window.jetFormBuilderControls.general[ block ] && window.jetFormBuilderControls.general[ block ].length &&
				<JetFormGeneral
					key={ uniqKey( 'JetFormGeneral' ) }
					values={ attributes }
					controls={ window.jetFormBuilderControls.general[ block ] }
					onChange={ ( newValues ) => {
						props.setAttributes( newValues );
					} }
				/> }
				<PanelBody
					title={ __( 'Field Settings' ) }
					className={ 'jet-form-builder__field-settings' }
					key={ uniqKey( 'PanelBody' ) }
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
					<NumberControl
						label={ __( 'Min length (symbols)' ) }
						labelPosition='top'
						key='minlength'
						min={ 1 }
						value={ attributes.minlength }
						onChange={ ( newValue ) => changeNumberValue( 'minlength', newValue ) }
					/>
					<NumberControl
						label={ __( 'Max length (symbols)' ) }
						labelPosition='top'
						key='maxlength'
						min={ 1 }
						value={ attributes.maxlength }
						onChange={ ( newValue ) => changeNumberValue( 'maxlength', newValue ) }
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
					{ attributes.enable_input_mask && <React.Fragment>
						<SelectControl
							key='mask_type'
							label={ __( 'Mask type' ) }
							labelPosition='top'
							value={ attributes.mask_type }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_type: newValue } );
							} }
							options={ localizeData.mask_types_list }
						/>
						<TextControl
							key='input_mask'
							label={ __( 'Input mask' ) }
							/*help={ Tools.getHelpMessage( localizeData, 'input_mask-default' ) }*/
							value={ attributes.input_mask }
							onChange={ ( newValue ) => {
								props.setAttributes( { input_mask: newValue } );
							} }
						/>
						{ ( ! attributes.mask_type ) && <div className={ 'help-input' }>
							{ Tools.getHelpMessage( localizeData, 'input_mask_default' ) }
						</div> }

						{ 'datetime' === attributes.mask_type && <div className={ 'help-input' }>
							{ __( 'Examples:', 'jet-form-builder' ) } dd/mm/yyyy, mm/dd/yyyy<br/>
							{ __( 'More info - ', 'jet-form-builder' ) }
							<a href={ localizeData.help_messages.input_mask_datetime_link }
							   target='_blank'>{ __( 'here', 'jet-form-builder' ) }</a>
						</div> }

						<SelectControl
							key='mask_visibility'
							label={ __( 'Mask visibility' ) }
							labelPosition='top'
							value={ attributes.mask_visibility }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_visibility: newValue } );
							} }
							options={ localizeData.mask_visibilities_list }
						/>
						<SelectControl
							key='mask_placeholder'
							label={ __( 'Mask placeholder' ) }
							labelPosition='top'
							value={ attributes.mask_placeholder }
							onChange={ ( newValue ) => {
								props.setAttributes( { mask_placeholder: newValue } );
							} }
							options={ localizeData.mask_placeholders_list }
						/>
					</React.Fragment> }

				</PanelBody>
				{ window.jetFormBuilderControls.advanced[ block ] && window.jetFormBuilderControls.advanced[ block ].length &&
				<JetFormAdvanced
					key={ uniqKey( 'JetFormAdvanced' ) }
					values={ attributes }
					controls={ window.jetFormBuilderControls.advanced[ block ] }
					onChange={ ( newValues ) => {
						props.setAttributes( newValues );
					} }
				/> }
			</InspectorControls>
		),
		<FieldWrapper
			key={ uniqKey( 'FieldWrapper' ) }
			block={ block }
			attributes={ attributes }
		>
			<TextControl
				placeholder={ attributes.placeholder }
				key={ `place_holder_block_${ block }_control` }
				onChange={ () => {} }
			/>
		</FieldWrapper>
	];
};
