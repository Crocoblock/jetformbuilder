import useJetStyle from './hooks/useJetStyle';
import useJetStyleSupports from './hooks/useJetStyleSupports';
import useStyle from './hooks/useStyle';
import StylePanel from './components/StylePanel';
import StylePanelItem from './components/StylePanelItem';
import StyleColorItem from './components/StyleColorItem';
import StyleColorItemsWrapper
	from './components/StyleColorItemsWrapper';
import StyleBorderItem from './components/StyleBorderItem';
import StyleBorderRadiusItem
	from './components/StyleBorderRadiusItem';

window.JetFBComponents = {
	...window.JetFBComponents,
	StylePanel,
	StylePanelItem,
	StyleColorItem,
	StyleColorItemsWrapper,
	StyleBorderItem,
	StyleBorderRadiusItem,
};

window.JetFBHooks = {
	...window.JetFBHooks,
	useJetStyle,
	useJetStyleSupports,
	useStyle,
};