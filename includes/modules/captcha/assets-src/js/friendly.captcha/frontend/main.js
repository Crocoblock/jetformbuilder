import observableHandle from './observableHandle';

const { addAction } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/friendly.captcha',
	observableHandle,
);