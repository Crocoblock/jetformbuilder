import { registerPlugin } from '@wordpress/plugins';
import UseFormButton from './UseFormButton';
import './index.pcss'

registerPlugin(
	'jfb-use-form',
	{ render: UseFormButton },
);