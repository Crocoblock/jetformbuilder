import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../helpers/tools";
import FieldWrapper from "../../components/field-wrapper";

const block = 'jet-forms/textarea-field';

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
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	useSelect,
	useDispatch
} = wp.data;

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
	Disabled,
	BaseControl,
	__experimentalNumberControl,
} = wp.components;


let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

const uniqKey = suffix => `${ block }-${ suffix }`;

window.jetFormBuilderBlockCallbacks[ block ].edit = function TextareaEdit( props ) {

	const attributes = props.attributes;
	const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

	const changeNumberValue = ( key, newValue ) => {
		const value = ( newValue && newValue > 0 ) ? parseInt( newValue ) : null;

		props.setAttributes( { [ key ]: value } );
	}

	return [
		hasToolbar && (
			<BlockControls key={ uniqKey( 'BlockControls' ) }>
				<JetFormToolbar
					key={ uniqKey( 'JetFormToolbar' ) }
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
					key={ uniqKey( 'PanelBody' ) }
				>
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
			<TextareaControl
				key={ `place_holder_block_${ block }` }
				placeholder={ attributes.placeholder }
				onChange={ () => {
				} }
			/>
		</FieldWrapper>

	];
}
