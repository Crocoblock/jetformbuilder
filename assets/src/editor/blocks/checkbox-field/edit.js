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
	      BlockSettingsMenuControls,
      } = wp.blockEditor;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      PanelBody,
	      TextControl,
	      ToolbarButton,
	      MenuItem,
      } = wp.components;

const localized = window.JetFormCheckboxFieldData;

export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	const {
		      isSelected,
		      editProps: { uniqKey },
		      attributes,
		      setAttributes,
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

	return <>
		{ isSelected && <BlockSettingsMenuControls>
			<MenuItem
				onClick={ () => setAttributes( {
					custom_option: {
						...attributes.custom_option,
						allow: !attributes.custom_option.allow,
					},
				} ) }
				icon={ attributes.custom_option.allow
				       ? <svg xmlns="http://www.w3.org/2000/svg"
				              viewBox="0 0 24 24" width="36" height="36"
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
			>
				{ attributes.custom_option.allow
				  ? __( 'Disable custom options', 'jet-form-builder' )
				  : __( 'Enable custom options', 'jet-form-builder' )
				}
			</MenuItem>
		</BlockSettingsMenuControls> }
		<ToolBarFields/>
		<InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<BlockAdvancedValue/>
				{ attributes.custom_option.allow && <>
					<hr/>
					<TextControl
						label={ __( 'Button label', 'jet-form-builder' ) }
						onChange={ label => setAttributes( {
							custom_option: {
								...attributes.custom_option,
								label,
							},
						} ) }
						help={ __( 'For custom option', 'jet-form-builder' ) }
						value={ attributes.custom_option.label }
					/>
				</> }
			</PanelBody>
			<AdvancedFields/>
		</InspectorControls>
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
		</div>
	</>;
}