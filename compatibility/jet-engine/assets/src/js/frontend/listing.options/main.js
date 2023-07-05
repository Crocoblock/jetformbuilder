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

	// click on <label> programmatically
	// it has <input> inside
	target.nextElementSibling.click();
}

/**
 * @param input {InputData}
 */
function ListingAddTemplateWatcher( input ) {
	input.watch( () => {
		const [ node ] = input.nodes;
		const row      = node.closest( '.jet-form-builder-row' );

		for ( const node of row.querySelectorAll( 'input.checkradio-field' ) ) {
			const currentTemp = node.closest(
				'.jet-form-builder__field-wrap',
			).querySelector(
				'.jet-form-builder__field-template',
			);

			currentTemp.classList.toggle(
				'jet-form-builder__field-template--checked',
				node.checked,
			);
		}
	} );
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