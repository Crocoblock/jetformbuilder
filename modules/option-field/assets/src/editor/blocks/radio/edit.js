import preview from './preview';
import { SelectRadioCheckPlaceholder } from '../../components/SelectRadioCheckPlaceholder';
import SelectRadioCheck from '../../components/SelectRadioCheck';
import CustomTemplateControls from '../../components/CustomTemplateControls';

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
	      BlockSettingsMenuControls,
      } = wp.blockEditor;

const {
	      PanelBody,
	      ToolbarButton,
      } = wp.components;

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
		{ isSelected && <BlockSettingsMenuControls/> }
		<ToolBarFields>
			<ToolbarButton
				icon={ attributes.custom_option
					? <svg xmlns="http://www.w3.org/2000/svg"
						   viewBox="0 0 24 24" width="24" height="24"
						   aria-hidden="true" focusable="false">
						<path
							d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"/>
					</svg>
					: <svg xmlns="http://www.w3.org/2000/svg"
						   viewBox="0 0 24 24" width="36" height="36"
						   aria-hidden="true" focusable="false">
						<path
							d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"/>
					</svg>
				}
				title={ attributes.custom_option
						? __(
						'Disable custom options',
						'jet-form-builder',
					)
						: __(
						'Enable custom options',
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
				scriptData={ window.JetFormOptionFieldData }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<CustomTemplateControls
					listingTypes={ window.JetFormOptionFieldData.listings_list }
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