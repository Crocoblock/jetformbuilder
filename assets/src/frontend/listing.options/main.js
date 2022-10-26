const {
	      addAction,
      } = wp.hooks;

/**
 * @param input {InputData}
 */
function isSupported( input ) {
	for ( const node of input.nodes ) {
		if ( [ 'radio', 'checkbox' ].includes( node?.type ) ) {
			return true;
		}
	}

	return false;
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

			template.addEventListener( 'click', ( { target } ) => {
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
			} );
		}

		if ( !template ) {
			return;
		}

		input.watch( () => {
			for ( const node of input.nodes ) {
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
	},
);