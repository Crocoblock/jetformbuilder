import { SelectRadioCheckPlaceholder } from '../../components/base-select-check-radio/select-radio-check-placeholder';
import SelectRadioCheck
	from '../../components/base-select-check-radio/select-radio-check';
import CustomTemplateControls
	from '../../components/base-select-check-radio/custom-template';
import preview from './preview';

const {
	      AdvancedFields,
	      ToolBarFields,
	      FieldControl,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
      } = JetFBComponents;
const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      PanelBody,
      } = wp.components;

const localized = window.JetFormCheckboxFieldData;

export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	const {
		      isSelected,
		      editProps: { uniqKey },
		      attributes,
	      } = props;

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
			key={ uniqKey( 'JetForm-toolbar' ) }
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
			<AdvancedFields/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ localized }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<CustomTemplateControls
					listingTypes={ localized.listings_list }
					{ ...props }
				/>
				<FieldControl
					type="custom_settings"
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>,
	];
}