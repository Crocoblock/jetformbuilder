import { registerPlugin } from '@wordpress/plugins';
import PluginRoot from './PluginRoot';
import './index.pcss'

registerPlugin(
	'jfb-use-form',
	{ render: PluginRoot },
);