import {
	calcType,
	manageItemsCount,
} from './options';
import preview from './preview';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
      } = JetFBComponents;

const {
	      Tools,
      } = JetFBActions;

const {
	      useUniqueNameOnDuplicate,
	      useFields,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      InnerBlocks,
	      useBlockProps,
	      RichText,
      } = wp.blockEditor;

const {
	      useState,
      } = wp.element;

const {
	      TextControl,
	      TextareaControl,
	      SelectControl,
	      PanelBody,
	      Button,
	      Popover,
	      BaseControl,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function RepeaterEdit( props ) {
	const blockProps = useBlockProps();

	const [ showMacros, setShowMacros ] = useState( false );
	useUniqueNameOnDuplicate();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	const formFields = useFields( { excludeCurrent: true } );

	const insertMacros = ( macros ) => {
		const formula = attributes.calc_formula || '';
		props.setAttributes( { calc_formula: formula + '%' + macros + '%' } );
	};

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		>
			{ 'custom' === attributes.repeater_calc_type && <>
				<Button
					key={ uniqKey( 'Button' ) }
					isTertiary
					isSmall
					icon={ showMacros ? 'no-alt' : 'admin-tools' }
					onClick={ () => setShowMacros( toggle => !toggle ) }
				/>
				{ showMacros && <Popover
					key={ uniqKey( 'Popover' ) }
					placement={ 'bottom-end' }
				>
					{ formFields.length && <PanelBody title={ 'Form Fields' }>
						{ formFields.map( ( { value }, index ) => <div
							key={ uniqKey( 'field_' + value + index ) }
						>
							<Button
								isLink
								onClick={ () => {
									insertMacros( value );
								} }
							>{ '%FIELD::' + value + '%' }</Button>
						</div> ) }
					</PanelBody> }
				</Popover> }
			</> }
		</ToolBarFields>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields hasMacro={ false }/>
			<PanelBody
				title={ __( 'Field', 'jet-form-builder' ) }
				key={ uniqKey( 'PanelBody' ) }
			>
				<SelectControl
					key="manage_items_count"
					label={ __( 'Manage repeater items count' ) }
					labelPosition="top"
					value={ attributes.manage_items_count }
					onChange={ newValue => {
						props.setAttributes( { manage_items_count: newValue } );
					} }
					options={ manageItemsCount }
				/>
				{ 'manually' === attributes.manage_items_count && <TextControl
					key="new_item_label"
					label={ __( 'Add New Item Label' ) }
					value={ attributes.new_item_label }
					onChange={ ( newValue ) => {
						props.setAttributes( { new_item_label: newValue } );
					} }
				/> }
				{ 'dynamically' === attributes.manage_items_count &&
				<SelectControl
					key="manage_items_count_field"
					label={ __( 'Field items count' ) }
					labelPosition="top"
					value={ attributes.manage_items_count_field }
					onChange={ newValue => {
						props.setAttributes(
							{ manage_items_count_field: newValue } );
					} }
					options={ Tools.withPlaceholder( formFields ) }
				/> }

				<SelectControl
					key="repeater_calc_type"
					label={ __( 'Calculate repeater row value' ) }
					labelPosition="top"
					value={ attributes.repeater_calc_type }
					onChange={ newValue => {
						props.setAttributes( { repeater_calc_type: newValue } );
					} }
					options={ calcType }
				/>
				{ 'custom' === attributes.repeater_calc_type &&
				<div className="jet-form-editor__row-notice">
					{ __( 'Set math formula to calculate field value.',
						'jet-form-builder' ) }<br/>
					{ __( 'For example:', 'jet-form-builder' ) }<br/><br/>
					%FIELD::quantity%*%META::price%<br/><br/>
					{ __( 'Where:', 'jet-form-builder' ) }<br/>
					-
					{ __(
						'%FIELD::quantity% - macro for form field value. "quantity" - is a field name to get value from',
						'jet-form-builder' ) }<br/>
					-
					{ __(
						'%META::price% - macro for current post meta value. "price" - is a meta key to get value from',
						'jet-form-builder' ) }<br/><br/>
				</div> }


			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'Fragment' ) } { ...blockProps }>
			{ 'custom' === attributes.repeater_calc_type &&
			<div className="jet-forms__calc-formula-editor">
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
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				childrenPosition="bottom"
				{ ...props }
			>
				<InnerBlocks
					key={ uniqKey( 'repeater-fields' ) }
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
					>
						<RichText
							placeholder="Add New"
							allowedFormats={ [] }
							value={ attributes.new_item_label }
							onChange={ new_item_label => setAttributes(
								{ new_item_label } ) }
						/>
					</Button>
				</div>
			</FieldWrapper>
		</div>,
	];
}