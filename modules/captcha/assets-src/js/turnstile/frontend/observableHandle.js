const { applyFilters } = JetPlugins.hooks;

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
	const container = token?.nodes?.[ 0 ]?.parentElement;

	let options = (
		window?.JetFormBuilderCaptchaConfig?.[ formID ] ?? false
	);

	if ( !container || !options ) {
		return;
	}

	// for correct applying validation logic
	token.isVisible = () => true;

	options.callback = ( responseHash ) => {
		token.value.current = responseHash;
	};

	options = applyFilters(
		'jet.fb.turnstile.options',
		options,
		observable,
	);

	const widgetID = turnstile.render( container, options );

	observable.getSubmit().submitter?.status?.watch?.( () => {
		turnstile.reset( widgetID );
		token.onClear();
	} );
}

export default observableHandle;