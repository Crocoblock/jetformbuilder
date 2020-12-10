import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../tools";
import FieldWrapper from '../../components/field-wrapper';

const block = 'jet-forms/date-field';

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
	Button,
	RangeControl,
	CheckboxControl,
	DateTimePicker,
	Disabled,
	__experimentalInputControl,
} = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}


const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class DateEdit extends wp.element.Component {
	render() {
		const props = this.props;
		const attributes = props.attributes;
		const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

		return [
			hasToolbar && (
				<BlockControls key={ keyControls + '-block' }>
					<JetFormToolbar
						values={ attributes }
						controls={ window.jetFormBuilderControls.toolbar[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/>
				</BlockControls>
			),
			props.isSelected && (
				<InspectorControls
					key={ keyControls }
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
						<ToggleControl
							key='is_timestamp'
							label={ __( 'Is Timestamp' ) }
							checked={ attributes.is_timestamp }
							help={ Tools.getHelpMessage( window.jetFormDateFieldData, 'is_timestamp' ) }
							onChange={ ( newValue ) => {
								props.setAttributes( { is_timestamp: Boolean( newValue ) } );
							} }
						/>
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
			<FieldWrapper
				block={ block }
				attributes={ attributes }
			>
				<TextControl
					onChange={ () => {
					} }
					key={ `place_holder_block_${ block }` }
					placeholder={ 'Input type="date"' }
				/>
			</FieldWrapper>
		];
	}
}