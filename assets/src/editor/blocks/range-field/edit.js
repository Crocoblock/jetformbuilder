import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import JetFieldPlaceholder from '../controls/placeholder';
import Tools from "../../tools";
import FieldWrapper from '../../components/field-wrapper';

const block = 'jet-forms/range-field';

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
	RadioControl,
	Disabled,
	__experimentalNumberControl,
	__experimentalInputControl
} = wp.components;

let { NumberControl, InputControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';


window.jetFormBuilderBlockCallbacks[ block ].edit = class RangeEdit extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.state = {
			rangeValue: 50
		};
	}


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
						<NumberControl
							label={ __( 'Min Value' ) }
							labelPosition='top'
							key='min'
							value={ attributes.min }
							onChange={ ( newValue ) => {
								props.setAttributes( { min: parseInt( newValue ) } );
							} }
						/>
						<NumberControl
							label={ __( 'Max Value' ) }
							labelPosition='top'
							key='max'
							value={ attributes.max }
							onChange={ ( newValue ) => {
								props.setAttributes( { max: parseInt( newValue ) } );
							} }
						/>
						<NumberControl
							label={ __( 'Step' ) }
							labelPosition='top'
							key='step'
							value={ attributes.step }
							onChange={ ( newValue ) => {
								props.setAttributes( { step: parseInt( newValue ) } );
							} }
						/>
						<TextControl
							key='prefix'
							label={ __( 'Value prefix' ) }
							value={ attributes.prefix }
							onChange={ ( newValue ) => {
								props.setAttributes( { prefix: newValue } );
							} }
						/>
						<TextControl
							key='suffix'
							label={ __( 'Value suffix' ) }
							value={ attributes.suffix }
							onChange={ ( newValue ) => {
								props.setAttributes( { suffix: newValue } );
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
				attributes={ attributes }
				block={ block }
				wrapClasses={ [
					'range-wrap'
				] }
			>
				<div className="range-flex-wrap">
					<InputControl
						key={ `place_holder_block_${ block }` }
						type={ 'range' }
						min={ attributes.min || 0 }
						max={ attributes.max || 100 }
						step={ attributes.step || 1 }
						onChange={ rangeValue => this.setState( { rangeValue } ) }
					/>
					<div className={ 'jet-form-builder__field-value' }>
						<span className={ 'jet-form-builder__field-value-prefix' }>{ attributes.prefix }</span>
						<span>&nbsp;{ this.state.rangeValue }&nbsp;</span>
						<span className={ 'jet-form-builder__field-value-suffix' }>{ attributes.suffix }</span>
					</div>
				</div>
			</FieldWrapper>
			
		];
	}
}