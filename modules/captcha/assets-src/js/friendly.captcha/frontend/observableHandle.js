const { applyFilters } = JetPlugins.hooks;
import { WidgetInstance } from 'friendly-challenge';

/**
 * @param observable {Observable}
 */
function observableHandle( observable ) {
	if ( observable.parent ) {
		return;
	}

	/**
	 * @type {null|InputData}
	 */
	const token     = observable.getInput( '_captcha_token' );
	const formID    = observable.getSubmit().getFormId();
	const container = token?.nodes?.[ 0 ]?.nextElementSibling;

	let options = (
		window?.JetFormBuilderCaptchaConfig?.[ formID ] ?? false
	);

	if ( !container || !options ) {
		return;
	}

	// for correct applying validation logics
	token.isVisible = () => true;

	options = {
		...options,
		doneCallback( responseHash ) {
			token.value.current = responseHash;
			token.loading.end();
		},
		startedCallback: () => token.loading.start(),
		errorCallback: () => token.loading.end(),
	};

	options = applyFilters(
		'jet.fb.friendlyCaptcha.options',
		options,
		observable,
	);

	const widget = new WidgetInstance( container, options );

	observable.getSubmit().submitter?.status?.watch?.( () => {
		widget.reset();
		token.onClear();
	} );
}

export default observableHandle;