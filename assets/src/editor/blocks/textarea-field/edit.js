import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../tools/tools";
import WrapperControl from "../../tools/wrapper-control";

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
} = wp.blockEditor;

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

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = function NumberEdit( props ) {

	const attributes = props.attributes;
	const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const label = Tools.getLabel( meta, attributes );

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
						label={ __( 'Min length (symbols)' ) }
						labelPosition='top'
						key='minlength'
						min={ 1 }
						value={ attributes.minlength }
						onChange={ ( newValue ) => {
							props.setAttributes( { minlength: parseInt( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Max length (symbols)' ) }
						labelPosition='top'
						key='maxlength'
						min={ 1 }
						value={ attributes.maxlength }
						onChange={ ( newValue ) => {
							props.setAttributes( { maxlength: parseInt( newValue ) } );
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
		<WrapperControl
            block={ block }
            attributes={ attributes }
        >
            <TextareaControl
                key={ `place_holder_block_${ block }` }
				placeholder={ attributes.placeholder }
				onChange={ () => {} }
            />
        </WrapperControl>

	];
}
