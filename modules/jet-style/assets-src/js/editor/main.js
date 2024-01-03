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
import StyleBox from './components/StyleBox';
import registerAttribute from './helpers/registerAttribute';
import StyleSize from './components/StyleSize';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'blocks.registerBlockType',
	'jet-form-builder/jet-style-support',
	registerAttribute,
);

window.JetFBComponents = {
	...window.JetFBComponents,
	StylePanel,
	StylePanelItem,
	StyleColorItem,
	StyleColorItemsWrapper,
	StyleBorderItem,
	StyleBorderRadiusItem,
	StyleBox,
	StyleSize,
};

window.JetFBHooks = {
	...window.JetFBHooks,
	useJetStyle,
	useJetStyleSupports,
	useStyle,
};