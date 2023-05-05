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
	label = '',
} ) {
	const {
		      cssValue,
		      updateCss,
	      } = useContext( BlockJetStyleItemContext );

	const { colors } = useMultipleOriginColorsAndGradients();

	return <BorderBoxControl
		label={ label }
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
	label = 'Border',
	labelForControl = false,
	...props
} ) {
	return <StylePanelItem
		cssVar={ cssVar }
		label={ label }
		{ ...props }
	>
		<UnCompleteStyleBorderItem
			enableAlpha={ enableAlpha }
			enableStyle={ enableStyle }
			label={ labelForControl ? label : '' }
		/>
	</StylePanelItem>;
}

export default StyleBorderItem;