import { SelectRadioCheckPlaceholder } from '../../components/base-select-check-radio/select-radio-check-placeholder';
import SelectRadioCheck
	from '../../components/base-select-check-radio/select-radio-check';

const {
	      __,
      } = wp.i18n;
const {
	      ToolBarFields,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
	      BlockPlaceholder,
	      BlockAddPrevButton,
	      BlockPrevButtonLabel,
	      BlockVisibility,
	      BlockClassName,
	      FieldControl,
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      ToggleControl,
	      SelectControl,
	      PanelBody,
	      TextControl,
	      RangeControl,
      } = wp.components;

/**
 * @param props
 * @returns {JSX.Element[]}
 * @constructor
 */
export default function SelectEdit( props ) {

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const blockProps = useBlockProps();

	useUniqueNameOnDuplicate();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<BlockAdvancedValue/>
			</PanelBody>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<BlockPlaceholder/>
				{ (
					!!attributes.placeholder.length
				) && <ToggleControl
					key={ uniqKey( 'is_disabled_placeholder' ) }
					label={ __( 'Disable placeholder', 'jet-form-builder' ) }
					checked={ attributes.is_disabled_placeholder }
					onChange={ is_disabled_placeholder => setAttributes(
						{ is_disabled_placeholder } ) }
				/> }
				<BlockAddPrevButton/>
				<BlockPrevButtonLabel/>
				<BlockVisibility/>
				<BlockClassName/>
			</PanelBody>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<SelectRadioCheckPlaceholder
				scriptData={ window.JetFormSelectFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<ToggleControl
					key="switch_on_change"
					label={ __( 'Switch page on change' ) }
					checked={ attributes.switch_on_change }
					help={ attrHelp( 'switch_on_change' ) }
					onChange={ ( newValue ) => {
						setAttributes(
							{ switch_on_change: Boolean( newValue ) } );
					} }
				/>
				<ToggleControl
					key="multiple"
					label={ __( 'Is multiple', 'jet-form-builder' ) }
					checked={ attributes.multiple }
					help={ attrHelp( 'multiple' ) }
					onChange={ multiple => setAttributes( { multiple } ) }
				/>
				{ attributes.multiple && <RangeControl
					label={ __( 'Rows count', 'jet-form-builder' ) }
					value={ attributes.multiple_size ?? 4 }
					onChange={ multiple_size => setAttributes(
						{ multiple_size } ) }
					allowReset
					resetFallbackValue={ 4 }
					min={ 1 }
					max={ 25 }
				/> }
				<FieldControl
					type="custom_settings"
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>,
	];
}