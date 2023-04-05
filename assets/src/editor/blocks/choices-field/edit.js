import { name } from './index';
import Placeholder from './placeholder';

const { __ } = wp.i18n;

let {
	    InspectorControls,
	    useBlockProps,
	    useInnerBlocksProps,
	    BlockControls,
    } = wp.blockEditor;


const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      AdvancedInspectorControl,
	      ClientSideMacros,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;

const {
	      useSelect,
      } = wp.data;

const {
	      useEffect,
	      useState,
      } = wp.element;

const {
	      PanelBody,
      } = wp.components;

const ALLOWED_BLOCKS = [ 'jet-forms/choice' ];

const DefaultPlaceHolder = (
	<>
		<li className="jet-form-builder-choice--item">
			{ __( 'Yes', 'jet-form-builder' ) }
		</li>
		<li className="jet-form-builder-choice--item">
			{ __( 'No', 'jet-form-builder' ) }
		</li>
	</>
);

export default function EditAdvancedChoicesField( props ) {
	const {
		      attributes,
		      setAttributes,
		      isSelected,
	      } = props;

	const blockProps       = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? Placeholder : DefaultPlaceHolder,
	} );

	return <>
		<ToolBarFields/>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
		</InspectorControls>
		<ul { ...innerBlocksProps } />
	</>;
}