import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItem from './StylePanelItem';

const {
	      useContext,
      } = wp.element;

let {
	    __experimentalBorderRadiusControl,
	    BorderRadiusControl,
    } = wp.blockEditor;

BorderRadiusControl = (
	BorderRadiusControl || __experimentalBorderRadiusControl
);

function UnCompleteStyleBorderRadiusItem() {
	const {
		      cssValue,
		      updateCss,
	      } = useContext( BlockJetStyleItemContext );

	return <BorderRadiusControl
		values={ cssValue }
		onChange={ updateCss }
	/>;
}

function StyleBorderRadiusItem( {
	cssVar,
	...props
} ) {
	return <StylePanelItem
		cssVar={ cssVar }
		{ ...props }
	>
		<UnCompleteStyleBorderRadiusItem/>
	</StylePanelItem>;
}

export default StyleBorderRadiusItem;