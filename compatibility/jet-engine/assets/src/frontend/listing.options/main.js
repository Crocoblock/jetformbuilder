const {
	      addAction,
      } = JetPlugins.hooks;

const { isEmpty } = JetFormBuilderFunctions;

/**
 * @param input {InputData}
 */
function isSupported( input ) {
	for ( const node of input.nodes ) {
		if (
			[ 'radio', 'checkbox' ].includes( node?.type ) &&
			node.classList.contains( 'checkradio-field' )
		) {
			return true;
		}
	}

	return false;
}

function ListingTemplateClick( { pointerId, target } ) {
	// prevent recursive call by .click()
	if ( -1 === pointerId ) {
		return;
	}

	if ( !target.classList.contains(
		'jet-form-builder__field-template',
	) ) {
		target = target.closest(
			'.jet-form-builder__field-template',
		);
	}

	// Find the associated input element more reliably
	const fieldWrap = target.closest('.jet-form-builder__field-wrap');
	if (!fieldWrap) {
		return;
	}

	// Look for the input element within the field wrap
	const inputElement = fieldWrap.querySelector('input.checkradio-field');
	if (!inputElement) {
		return;
	}

	// Handle radio vs checkbox differently
	const isRadio = inputElement.type === 'radio';
	const wasAlreadyChecked = inputElement.checked;

	if (isRadio && wasAlreadyChecked) {
		// For already selected radio buttons, attempt to advance to the next page
		const form = inputElement.closest('form');
		const formId = form.dataset.formId;

		// Check if multistep navigation is available
		if (!window.JetFormBuilder || !window.JetFormBuilder[ formId ] || !window.JetFormBuilder[ formId ].multistep) {
			return;
		}

		const multistep = window.JetFormBuilder[ formId ].multistep;
		const currentPage = multistep.getCurrentPage();
		
		// Only advance if the current page allows switching (validation passed)
		// This respects any required fields or validation rules on the current page
		if (currentPage && currentPage.canSwitch && currentPage.canSwitch.current) {
			multistep.index.current = multistep.index.current + 1;
		}
		// If canSwitch is false, let the normal validation/error handling take place

		return;
	}

	// Toggle the input checkbox/radio normally
	inputElement.checked = !inputElement.checked;

	// Use the form builder's InputData object to properly update the reactive value
	const inputData = inputElement.jfbSync;

	if (inputData) {
		// Call setValue() directly - this will read checked states and update reactive value
		inputData.setValue();
	} else {
		// Try to dispatch change event with error handling
		try {
			const changeEvent = new Event('change', { bubbles: true });
			inputElement.dispatchEvent(changeEvent);
		} catch (error) {
			// Silently handle error
		}

		// Also trigger manual visual update as backup
		listingAddTemplateWatcherManual(inputElement);
	}
}

/**
 * @param input {InputData}
 */
function ListingAddTemplateWatcher( input ) {
	input.watch( () => {
		const [ node ] = input.nodes;
		const row      = node.closest( '.jet-form-builder-row' );

		for ( const inputNode of row.querySelectorAll( 'input.checkradio-field' ) ) {
			const currentTemp = inputNode.closest(
				'.jet-form-builder__field-wrap',
			).querySelector(
				'.jet-form-builder__field-template',
			);

			currentTemp.classList.toggle(
				'jet-form-builder__field-template--checked',
				inputNode.checked,
			);
		}
	} );
}

// Manual watcher function for when InputData is not available
function listingAddTemplateWatcherManual(inputElement) {
	const row = inputElement.closest('.jet-form-builder-row');

	if (!row) {
		return;
	}

	for (const node of row.querySelectorAll('input.checkradio-field')) {
		const currentTemp = node.closest(
			'.jet-form-builder__field-wrap',
		).querySelector(
			'.jet-form-builder__field-template',
		);

		if (currentTemp) {
			currentTemp.classList.toggle(
				'jet-form-builder__field-template--checked',
				node.checked,
			);
		}
	}
}

addAction(
	'jet.fb.input.makeReactive',
	'jet-form-builder/listing-options',
	/**
	 * @param input {InputData}
	 */
	function ( input ) {
		if ( !isSupported( input ) ) {
			return;
		}

		let template = null;

		for ( const node of input.nodes ) {
			/**
			 * @type {Element}
			 */
			template = node.closest(
				'.jet-form-builder__field-wrap',
			).querySelector(
				'.jet-form-builder__field-template',
			);

			if ( !template ) {
				continue;
			}

			template.addEventListener( 'click', ListingTemplateClick );
		}

		if ( !template ) {
			return;
		}

		ListingAddTemplateWatcher( input );

		if ( !isEmpty( input.getValue() ) ) {
			input.value.notify();
		}
	},
);

window.JetFormBuilderFunctions = {
	...(
		window.JetFormBuilderFunctions ?? {}
	),
	ListingAddTemplateWatcher,
	ListingTemplateClick,
};