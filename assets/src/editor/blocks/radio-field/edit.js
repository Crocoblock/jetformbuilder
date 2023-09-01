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
	      PanelBody,
	      ToolbarButton,
      } = wp.components;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

export default function RadioEdit( props ) {

	const {
		      isSelected,
		      attributes,
		      editProps: { uniqKey },
		      setAttributes,
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
		<ToolBarFields>
			<ToolbarButton
				icon={ <SVG xmlns="http://www.w3.org/2000/svg"
				            viewBox="0 0 24 24" width="24" height="24"
				            aria-hidden="true" focusable="false">
					<Path
						d="M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm.8-4l.7.7 2-2V12h1V9.2l2 2 .7-.7-2-2H12v-1H9.2l2-2-.7-.7-2 2V4h-1v2.8l-2-2-.7.7 2 2H4v1h2.8l-2 2z"/>
				</SVG> }
				title={ attributes.custom_option
				        ? __(
						'Click to not show option for custom value',
						'jet-form-builder',
					)
				        : __(
						'Click to allow custom value option',
						'jet-form-builder',
					)
				}
				onClick={ () => setAttributes( {
					custom_option: !attributes.custom_option,
				} ) }
				isActive={ attributes.custom_option }
			/>
		</ToolBarFields>
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