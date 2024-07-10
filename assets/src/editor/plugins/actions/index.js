import PluginActions from './render';

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