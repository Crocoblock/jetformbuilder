import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItem from './StylePanelItem';

const {
	      useContext,
      } = wp.element;

let {
	    __experimentalBorderBoxControl,
	    BorderBoxControl,
    } = wp.components;

BorderBoxControl = (
	BorderBoxControl || __experimentalBorderBoxControl
);

let {
	    __experimentalUseMultipleOriginColorsAndGradients,
	    useMultipleOriginColorsAndGradients,
    } = wp.blockEditor;

useMultipleOriginColorsAndGradients = (
	useMultipleOriginColorsAndGradients ||
	__experimentalUseMultipleOriginColorsAndGradients
);

function UnCompleteStyleBorderItem( {
	enableAlpha = false,
	enableStyle = true,
} ) {
	const {
		      cssValue,
		      updateCss,
	      } = useContext( BlockJetStyleItemContext );

	const { colors } = useMultipleOriginColorsAndGradients();

	return <BorderBoxControl
		colors={ colors }
		onChange={ updateCss }
		enableAlpha={ enableAlpha }
		enableStyle={ enableStyle }
		popoverOffset={ 40 }
		popoverPlacement="left-start"
		value={ cssValue }
		__experimentalIsRenderedInSidebar
	/>;
}

function StyleBorderItem( {
	cssVar,
	enableAlpha = false,
	enableStyle = true,
	...props
} ) {
	return <StylePanelItem
		cssVar={ cssVar }
		{ ...props }
	>
		<UnCompleteStyleBorderItem
			enableAlpha={ enableAlpha }
			enableStyle={ enableStyle }
		/>
	</StylePanelItem>;
}

export default StyleBorderItem;