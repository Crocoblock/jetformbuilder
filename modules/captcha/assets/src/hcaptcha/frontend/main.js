import observableHandle from './observableHandle';

window.jfbHCaptchaOnLoad = function () {
	const { addAction } = JetPlugins.hooks;

	for ( const observable of Object.values( window.JetFormBuilder ) ) {
		if ( !observable.hasOwnProperty( 'isObserved' ) ) {
			continue;
		}
		observableHandle( observable );
	}

	addAction(
		'jet.fb.observe.after',
		'jet-form-builder/hCaptcha',
		observableHandle,
	);
};