import registerAttribute from './registerAttribute';
import SwitchPageOnChangeControls from './SwitchPageOnChangeControls';
import SwitchPageOnChangeButton from './SwitchPageOnChangeButton';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'blocks.registerBlockType',
	'jet-form-builder/switch-page-on-change-support',
	registerAttribute,
);

window.JetFBComponents = {
	...window.JetFBComponents,
	SwitchPageOnChangeControls,
	SwitchPageOnChangeButton,
};