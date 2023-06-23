import { SelectRadioCheckPlaceholder } from '../../components/base-select-check-radio/select-radio-check-placeholder';
import SelectRadioCheck
	from '../../components/base-select-check-radio/select-radio-check';
import CustomTemplateControls
	from '../../components/base-select-check-radio/custom-template';
import preview from './preview';

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
	      AdvancedFields,
	      FieldControl,
	      SwitchPageOnChangeControls,
      } = JetFBComponents;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      ToggleControl,
	      PanelBody,
      } = wp.components;

const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

export default function RadioEdit( props ) {

	const {
		      isSelected,
		      attributes,
		      editProps: { uniqKey },
	      } = props;

	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <>
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>
		<SwitchPageOnChangeControls/>
		{ isSelected && <InspectorControls
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
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls> }
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ window.JetFormRadioFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<CustomTemplateControls
					listingTypes={ window.JetFormRadioFieldData.listings_list }
					{ ...props }
				/>
				<FieldControl
					type="custom_settings"
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>
	</>;
}