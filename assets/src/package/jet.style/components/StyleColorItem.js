import StylePanelItemContext from './StylePanelItemContext';
import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';

let {
	    __experimentalColorGradientSettingsDropdown,
	    ColorGradientSettingsDropdown,
	    __experimentalUseMultipleOriginColorsAndGradients,
	    useMultipleOriginColorsAndGradients,
    } = wp.blockEditor;


const {
	      useContext,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

ColorGradientSettingsDropdown = (
	ColorGradientSettingsDropdown || __experimentalColorGradientSettingsDropdown
);

useMultipleOriginColorsAndGradients = (
	useMultipleOriginColorsAndGradients ||
	__experimentalUseMultipleOriginColorsAndGradients
);

function UnCompleteStyleColorItem( { label } ) {
	const {
		      panelId,
		      resetAllFilter,
		      cssValue,
		      updateCss,
	      } = useContext( BlockJetStyleItemContext );

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const settings = [
		{
			colorValue: cssValue,
			onColorChange: updateCss,
			label: label ?? __( 'Color', 'jet-form-builder' ),
			resetAllFilter,
		},
	];

	return <ColorGradientSettingsDropdown
		__experimentalIsRenderedInSidebar
		settings={ settings }
		panelId={ panelId }
		{ ...colorGradientSettings }
		gradients={ [] }
		disableCustomGradients={ true }
	/>;
}

/**
 * @since 3.1.0
 *
 * @param cssVar
 * @param defaultValue
 * @param props
 * @returns {JSX.Element}
 */
function StyleColorItem( { cssVar, ...props } ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
	>
		<UnCompleteStyleColorItem { ...props } />
	</StylePanelItemContext>;
}

export default StyleColorItem;