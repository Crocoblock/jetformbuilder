import preview from './preview';
import SelectRadioCheck from '../../components/SelectRadioCheck';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	ToggleControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import SelectView from './SelectView';

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
	      SwitchPageOnChangeControls,
	      StylePanel,
	      StyleColorItem,
	      StyleColorItemsWrapper,
	      StyleBorderItem,
	      StyleBorderRadiusItem,
	      StyleBox,
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
	      useJetStyle,
      } = JetFBHooks;

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

	const jetStyle   = useJetStyle?.() ?? {};
	const blockProps = useBlockProps( jetStyle );

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
		{ !attributes.multiple && <SwitchPageOnChangeControls/> }
		{ isSelected && <>
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
				</PanelBody>
				<PanelBody
					title={ __( 'Advanced', 'jet-form-builder' ) }
				>
					<BlockPlaceholder/>
					{ (
						!!attributes.placeholder.length
					) && <ToggleControl
						key={ uniqKey( 'is_disabled_placeholder' ) }
						label={ __( 'Disable placeholder',
							'jet-form-builder' ) }
						checked={ attributes.is_disabled_placeholder }
						onChange={ is_disabled_placeholder => setAttributes(
							{ is_disabled_placeholder } ) }
					/> }
					<BlockAddPrevButton/>
					<BlockPrevButtonLabel/>
					<BlockVisibility/>
					<BlockClassName/>
				</PanelBody>
			</InspectorControls>
			{ Boolean( StylePanel ) && <InspectorControls group="styles">
				<StylePanel
					label={ __( 'Colors', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-input-text"
							label={ __( 'Text color', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--jfb-input-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
				</StylePanel>
				<StylePanel
					label={ __( 'Border', 'jet-form-builder' ) }
				>
					<StyleBorderItem
						cssVar="--jfb-input-border"
						label={ __( 'Border', 'jet-form-builder' ) }
						enableAlpha
						labelForControl
					/>
					<StyleBorderRadiusItem
						cssVar="--jfb-input-border-radius"
						label={ __( 'Radius', 'jet-form-builder' ) }
					/>
				</StylePanel>
				<StylePanel
					label={ __( 'Dimensions', 'jet-form-builder' ) }
				>
					<StyleBox
						cssVar="--jfb-input-padding"
						label={ __( 'Padding', 'jet-form-builder' ) }
					/>
					<StyleBox
						cssVar="--jfb-input-margin"
						label={ __( 'Margin', 'jet-form-builder' ) }
					/>
				</StylePanel>
			</InspectorControls> }
		</> }
		<div { ...blockProps }>
			<SelectView attributes={ attributes }/>
			<SelectRadioCheck { ...props }>
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
		</div>
	</>;
}