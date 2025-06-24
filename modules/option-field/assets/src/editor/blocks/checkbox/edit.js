import preview from './preview';
import { SelectRadioCheckPlaceholder } from '../../components/SelectRadioCheckPlaceholder';
import SelectRadioCheck from '../../components/SelectRadioCheck';
import CustomTemplateControls from '../../components/CustomTemplateControls';

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
      } = wp.components;

const localized = window.JetFormOptionFieldData;

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
		{ isSelected && <BlockSettingsMenuControls/> }
		<ToolBarFields>
			<ToolbarButton
				icon={ attributes.custom_option.allow
					? <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
					<rect width="32" height="32" rx="2" fill="#101517"/>
					<path d="M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z" fill="currentColor"/>
					<path d="M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z" fill="currentColor"/>
					<path d="M21 17.3398L19 19.3398V15H21V17.3398Z" fill="currentColor"/>
					<path d="M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z" fill="currentColor"/>
					</svg>
					: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
					<path d="M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z" fill="currentColor"/>
					<path d="M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z" fill="currentColor"/>
					<path d="M21 17.3398L19 19.3398V15H21V17.3398Z" fill="currentColor"/>
					<path d="M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z" fill="currentColor"/>
					</svg>
				}
				title={ attributes.custom_option.allow
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
					custom_option: {
						...attributes.custom_option,
						allow: !attributes.custom_option.allow,
					},
				} ) }
				isActive={ attributes.custom_option.allow }
			/>
		</ToolBarFields>
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