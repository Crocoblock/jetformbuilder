import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
const block = 'jet-forms/text-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
	InspectorControls,
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	ServerSideRender,
	BlockControls,
} = wp.editor;
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

window.jetFormBuilderBlockCallbacks[ block ].edit = class extends wp.element.Component {
	render() {

		const props      = this.props;
		const attributes = props.attributes;

		return [
			( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length && <BlockControls>
				<JetFormToolbar
					values={ attributes }
					controls={ window.jetFormBuilderControls.toolbar[ block ] }
					onChange={ ( newValues ) => {
						props.setAttributes( newValues );
					}}
				/>
			</BlockControls> ),
			props.isSelected && (
					<InspectorControls
						key={ 'inspector' }
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
			<Disabled>
				<ServerSideRender
					block={ block }
					attributes={ attributes }
				/>
			</Disabled>
		];
	}
};
