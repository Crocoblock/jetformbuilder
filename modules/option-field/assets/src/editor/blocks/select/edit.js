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
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
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
		{ !attributes.multiple && <SwitchPageOnChangeControls/> }
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
		</InspectorControls> }
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