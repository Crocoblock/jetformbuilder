import Tools from "../../helpers/tools";
import { getAvailableFields, getFormFieldsBlocks } from "../../helpers/blocks-helper";

const block = 'jet-forms/repeater-field';

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
	InnerBlocks,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	select,
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
	Popover,
	BaseControl,
	ToolbarItem,
	__experimentalNumberControl,
} = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

const keyControls = block + '-controls-edit';
const keyPlaceHolder = block + '-placeholder-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class RepeaterEdit extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.data = window.jetRepeaterFieldData;
		this.state = { showMacrosPopover: false };
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;
		const hasToolbar = Boolean( window.jetFormBuilderControls.toolbar[ block ] && window.jetFormBuilderControls.toolbar[ block ].length );

		const formFields = getAvailableFields( [block] );
		const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		const label = Tools.getLabel( meta, attributes );

		const insertMacros = ( macros ) => {
			const formula = attributes.calc_formula || '';
			props.setAttributes( { calc_formula: formula + '%FIELD::' + macros + '%' } );
		}

		return [
			hasToolbar && (
				<BlockControls key={ keyControls + '-block' }>
					<JetFormToolbar
						values={ attributes }
						controls={ window.jetFormBuilderControls.toolbar[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					>
						{ 'custom' === attributes.repeater_calc_type && <Button
							isTertiary
							isSmall
							icon={ this.state.showMacrosPopover ? 'no-alt' : 'admin-tools' }
							onClick={ () => {
								this.setState( { showMacrosPopover: ! this.state.showMacrosPopover } );
							} }
						/> }
						{ this.state.showMacrosPopover && (
							<Popover
								position={ 'bottom left' }
							>
								{ formFields.length && <PanelBody title={ 'Form Fields' }>
									{ formFields.map( field => {
										return <div key={ 'field_' + field }>
											<Button
												isLink
												onClick={ () => {
													insertMacros( field )
												} }
											>{ '%FIELD::' + field + '%' }</Button>
										</div>;
									} ) }
								</PanelBody> }
							</Popover>
						) }
					</JetFormToolbar>
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
						<SelectControl
							key='manage_items_count'
							label={ __( 'Manage repeater items count' ) }
							labelPosition='top'
							value={ attributes.manage_items_count }
							onChange={ newValue => {
								props.setAttributes( { manage_items_count: newValue } );
							} }
							options={ this.data.manage_items_count }
						/>
						{ 'manually' === attributes.manage_items_count && <TextControl
							key='new_item_label'
							label={ __( 'Add New Item Label' ) }
							value={ attributes.new_item_label }
							onChange={ ( newValue ) => {
								props.setAttributes( { new_item_label: newValue } );
							} }
						/> }
						{ 'dynamically' === attributes.manage_items_count && <SelectControl
							key='manage_items_count_field'
							label={ __( 'Field items count' ) }
							labelPosition='top'
							value={ attributes.manage_items_count_field }
							onChange={ newValue => {
								props.setAttributes( { manage_items_count_field: newValue } );
							} }
							options={ getFormFieldsBlocks( [block], '--' ) }
						/> }

						<SelectControl
							key='repeater_calc_type'
							label={ __( 'Calculate repeater row value' ) }
							labelPosition='top'
							value={ attributes.repeater_calc_type }
							onChange={ newValue => {
								props.setAttributes( { repeater_calc_type: newValue } );
							} }
							options={ this.data.repeater_calc_type }
						/>
						{ 'custom' === attributes.repeater_calc_type && <div className="jet-form-editor__row-notice">
							{ __( 'Set math formula to calculate field value.', 'jet-form-builder' ) }<br/>
							{ __( 'For example:', 'jet-form-builder' ) }<br/><br/>
							%FIELD::quantity%*%META::price%<br/><br/>
							{ __( 'Where:', 'jet-form-builder' ) }<br/>
							-
							{ __( '%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder' ) }<br/>
							-
							{ __( '%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder' ) }<br/><br/>
						</div> }


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
			<React.Fragment>
				{ 'custom' === attributes.repeater_calc_type && <div className="jet-forms__calc-formula-editor">
					<div className="jet-form-editor__macros-wrap">
						<TextareaControl
							key="calc_formula"
							value={ attributes.calc_formula }
							label={ __( 'Calculation Formula for Repeater' ) }

							onChange={ ( newValue ) => {
								props.setAttributes( { calc_formula: newValue } );
							} }
						/>
					</div>
				</div> }
				<BaseControl key={ 'repeater-fields-title' }>
					<BaseControl.VisualLabel>
						<div className={ 'jet-form-builder__label' }>
							{ label.name || 'Repeater field' }
							{ attributes.required && <span className={ 'jet-form-builder__required' }>
								{ label.mark ? label.mark : '*' }
							</span> }
						</div>
					</BaseControl.VisualLabel>
					<div className={ 'components-base-control__help jet-form-builder__desc' }
						 style={ { marginTop: '0px' } }>{ attributes.desc }</div>
				</BaseControl>

				<InnerBlocks
					key={ 'repeater-fields' }
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender/>
					) }
				/>
				<Button
					className={ 'jet-form-builder-repeater__remove' }
					isSecondary
					onClick={ () => {
					} }
				>&times;</Button>
				<div style={ { width: '100%', height: '0.7em' } }/>
				<div className="jet-form-builder-repeater__actions">
					<Button
						className={ 'jet-form-builder-repeater__new' }
						isSecondary
						onClick={ () => {
						} }
					>{ attributes.new_item_label || 'Add New' }</Button>
				</div>

			</React.Fragment>
		];
	}
}