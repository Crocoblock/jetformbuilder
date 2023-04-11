import { name } from './index';
import Placeholder from './placeholder';

const { __ } = wp.i18n;

let {
	    InspectorControls,
	    useBlockProps,
	    useInnerBlocksProps,
	    BlockControls,
	    __experimentalColorGradientSettingsDropdown,
	    ColorGradientSettingsDropdown,
	    __experimentalUseMultipleOriginColorsAndGradients,
	    useMultipleOriginColorsAndGradients,
    } = wp.blockEditor;

ColorGradientSettingsDropdown = (
	ColorGradientSettingsDropdown || __experimentalColorGradientSettingsDropdown
);

useMultipleOriginColorsAndGradients = (
	useMultipleOriginColorsAndGradients ||
	__experimentalUseMultipleOriginColorsAndGradients
);

const {
	      ToolBarFields,
	      BlockLabel,
	      BlockName,
	      BlockDescription,
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

const {
	      useStyle,
      } = JetFBHooks;

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

	const blockProps       = useBlockProps( {
		className: 'jet-form-builder-choice',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? <Placeholder/> : DefaultPlaceHolder,
	} );

	const [ itemBackGround, setItemBackGround ] = useStyle( [
		'.jet-form-builder-choice--item',
		'color',
		'background',
	] );

	const [ checkedBackGround, setCheckedBackGround ] = useStyle( [
		'.jet-form-builder-choice--item',
		'.is-checked',
		'color',
		'background',
	] );

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return <>
		<ToolBarFields/>
		<InspectorControls>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
		</InspectorControls>
		<InspectorControls group={ 'color' }>
			<ColorGradientSettingsDropdown
				__experimentalIsRenderedInSidebar
				settings={ [
					{
						colorValue: itemBackGround,
						label: __( 'Choice Background', 'jet-form-builder' ),
						onColorChange: setItemBackGround,
						resetAllFilter: () => setItemBackGround(),
					},
					{
						colorValue: checkedBackGround,
						label: __( 'Checked Item Background' ),
						onColorChange: setCheckedBackGround,
						resetAllFilter: () => setCheckedBackGround(),
					},

				] }
				panelId={ blockProps[ 'data-block' ] }
				{ ...colorGradientSettings }
				gradients={ [] }
				disableCustomGradients={ true }
			/>
		</InspectorControls>
		<ul { ...innerBlocksProps } />
	</>;
}