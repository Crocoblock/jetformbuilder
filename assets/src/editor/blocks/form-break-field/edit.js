import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../helpers/tools";

const block = 'jet-forms/form-break-field';

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
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	Button,
} = wp.components;

const uniqKey = suffix => `${ block }-${ suffix }`;

window.jetFormBuilderBlockCallbacks[ block ].edit = class FormBreakEdit extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.data = window.jetFormBreakFieldData;
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;

		return [
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
						<TextControl
							label={ __( 'Label of progress' ) }
							value={ attributes.label_progress }
							help={ __( 'To set/change a last progress name add a Form Break Field at the very end of the form.' ) }
							onChange={ ( newValue ) => {
								props.setAttributes( { label_progress: newValue } );
							} }
						/>
						<TextareaControl
							key="page_break_disabled"
							value={ attributes.page_break_disabled }
							label={ __( 'Disabled message' ) }
							help={ Tools.getHelpMessage( this.data, 'page_break_disabled' ) }
							onChange={ ( newValue ) => {
								props.setAttributes( { page_break_disabled: newValue } );
							} }
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
			<div className={ 'jet-form-builder__next-page-wrap' } key={ uniqKey( 'next-page-wrap' ) }>
				<Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>{ attributes.label || 'Next' }</Button>

				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>{ attributes.prev_label || 'Prev' }</Button> }
			</div>
		];
	}
}