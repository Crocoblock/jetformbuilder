import { __ } from '@wordpress/i18n';
import {
	TextControl,
	ToggleControl,
	PanelBody,
	SelectControl,
	BaseControl,
} from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import globeIcon from '../../../lib/img/globe@2x.webp';
import PhoneFieldVisualPreview from './preview';

const {
	ToolBarFields,
	BlockName,
	BlockLabel,
	BlockDescription,
	AdvancedFields,
	FieldWrapper,
	BlockAdvancedValue,
} = JetFBComponents;

const {
	useUniqueNameOnDuplicate,
} = JetFBHooks;

export default function IntlPhoneEdit( props ) {
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
		isSelected && (
			<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
				<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
					<BlockLabel />
					<BlockName />
					<BlockDescription />
				</PanelBody>

				<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
					<BlockAdvancedValue />
				</PanelBody>

				<PanelBody
					title={ __( 'Field', 'jet-form-builder' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Default Country', 'jet-form-builder' ) }
						value={ attributes.default_country }
						onChange={ ( newValue ) => setAttributes( { default_country: newValue } ) }
						help={ __( 'ISO country code (e.g., "US", "UA") or "auto" for IP detection.', 'jet-form-builder' ) }
					/>

					<BaseControl
						label={ __( 'Preferred Countries', 'jet-form-builder' ) }
						help={ __( 'Comma-separated country codes (e.g., "US, GB, UA").', 'jet-form-builder' ) }
					>
						<TextControl
							value={ attributes.preferred_countries }
							onChange={ ( newValue ) => {
								setAttributes( { preferred_countries: newValue } );
							} }
							placeholder="US, GB, UA"
						/>
					</BaseControl>

					<BaseControl
						label={ __( 'Only Countries', 'jet-form-builder' ) }
						help={ __( 'Show only these countries (e.g., "US, CA, MX").', 'jet-form-builder' ) }
					>
						<TextControl
							value={ attributes.only_countries }
							onChange={ ( newValue ) => {
								setAttributes( { only_countries: newValue } );
							} }
							placeholder="US, CA, MX"
						/>
					</BaseControl>

					{ attributes.only_countries.length <= 0 && (
						<BaseControl
							label={ __( 'Exclude Countries', 'jet-form-builder' ) }
							help={ __( 'Exclude these countries (e.g., "US, BY")', 'jet-form-builder' ) }
						>
							<TextControl
								value={ attributes.exclude_countries }
								onChange={ ( newValue ) => {
									setAttributes( { exclude_countries: newValue } );
								} }
								placeholder="US, BY"
							/>
						</BaseControl>
					) }

					<ToggleControl
						label={ __( 'Separate Dial Code', 'jet-form-builder' ) }
						checked={ attributes.separate_dial_code }
						onChange={ () => setAttributes( { separate_dial_code: ! attributes.separate_dial_code } ) }
						help={ __(
								"Display the selected country's international dial code next to the input, so it looks like it's part of the typed number.",
								'jet-form-builder'
							)
						}
					/>

					<SelectControl
						label={ __( 'Save Format', 'jet-form-builder' ) }
						value={ attributes.save_format }
						options={ [
							{ label: __( 'E.164', 'jet-form-builder' ), value: 'e164' },
							{ label: __( 'International', 'jet-form-builder' ), value: 'international' },
						] }
						onChange={ ( newValue ) => setAttributes( { save_format: newValue } ) }
						help={ __(
							'Save format: E.164 (+12015553333) or International (+1 201-555-3333).',
							'jet-form-builder'
						) }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Additional Settings', 'jet-form-builder' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Use Global ipinfo.io Token', 'jet-form-builder' ) }
						checked={ attributes.use_global }
						onChange={ () => setAttributes( { use_global: ! attributes.use_global } ) }
						help={
							<>
								{ __( 'Use', 'jet-form-builder' ) + ' ' }
								<a
									href={ window.JetFormEditorData?.global_settings_url + '#phone-field-tab' }
									target="_blank"
									rel="noopener noreferrer"
								>
									{ __( 'Global Settings', 'jet-form-builder' ) }
								</a>
							</>
						}
					/>

					{ ! attributes.use_global && (
						<TextControl
							label={ __( 'ipinfo.io API Token', 'jet-form-builder' ) }
							value={ attributes.ipinfo_token }
							onChange={ ( newValue ) => setAttributes( { ipinfo_token: newValue } ) }
							help={ __( 'Optional: API token for IP-based country detection (50k free requests/month)', 'jet-form-builder' ) }
						/>
					) }
				</PanelBody>

				<PanelBody
					title={ __( 'Validation Messages', 'jet-form-builder' ) }
					initialOpen={ false }
				>
					<TextControl
						label={ __( 'Required Field Message', 'jet-form-builder' ) }
						value={ attributes.validation_message_required }
						onChange={ ( newValue ) => setAttributes( { validation_message_required: newValue } ) }
						placeholder={ __( 'Required field is empty', 'jet-form-builder' ) }
					/>

					<TextControl
						label={ __( 'Invalid Phone Message', 'jet-form-builder' ) }
						value={ attributes.validation_message_invalid }
						onChange={ ( newValue ) => setAttributes( { validation_message_invalid: newValue } ) }
						placeholder={ __( 'Please enter a valid phone number', 'jet-form-builder' ) }
					/>
				</PanelBody>

				<AdvancedFields { ...props } />
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<PhoneFieldVisualPreview
					separateDialCode={ attributes.separate_dial_code }
					globeIcon={globeIcon}
					placeholder={ attributes.default }
				/>
			</FieldWrapper>
		</div>,
	];
}
