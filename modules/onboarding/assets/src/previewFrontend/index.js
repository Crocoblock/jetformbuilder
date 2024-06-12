import appendButton from './appendButton';
import './index.pcss';

const { addAction } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/use-form',
	appendButton,
);