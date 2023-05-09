import StylePanelItemContext from './StylePanelItemContext';
import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';

let {
	    __experimentalToolsPanelItem,
	    ToolsPanelItem,
    } = wp.components;

ToolsPanelItem = (
	ToolsPanelItem || __experimentalToolsPanelItem
);

const {
	      useContext,
      } = wp.element;


function UnCompleteStylePanelItem( props ) {
	const {
		      panelId,
		      resetAllFilter,
		      onDeselect,
		      hasValue,
	      } = useContext( BlockJetStyleItemContext );

	return <ToolsPanelItem
		panelId={ panelId }
		resetAllFilter={ resetAllFilter }
		onDeselect={ onDeselect }
		hasValue={ hasValue }
		{ ...props }
	/>;
}

/**
 * @since 3.1.0
 *
 * @param cssVar
 * @param defaultValue
 * @param children
 * @param props
 * @returns {JSX.Element}
 */
function StylePanelItem( { cssVar, defaultValue, ...props } ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
		defaultValue={ defaultValue }
	>
		<UnCompleteStylePanelItem { ...props } />
	</StylePanelItemContext>;
}

export default StylePanelItem;