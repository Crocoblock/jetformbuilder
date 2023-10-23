import PluginActions from './render';

const {
	      __,
      } = wp.i18n;

const base = {
	name: 'jf-actions-panel',
	jfbApiVersion: 2,
};

const settings = {
	render: PluginActions,
};

export default {
	base,
	settings,
};