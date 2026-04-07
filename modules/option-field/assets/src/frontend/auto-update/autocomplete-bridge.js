/**
 * Autocomplete Bridge for Auto-Update Feature.
 *
 * Integrates the auto-update generator system with the Select Autocomplete addon.
 * When a select field has both autocomplete and auto-update enabled,
 * this module injects dependent field context into the AJAX data function
 * so the addon's PHP handler can use Registry::generate() with context.
 *
 * Uses the `jet.fb.select_autocomplete.options` filter provided by the addon,
 * which passes the full Select2 config (including `ajax`) along with `$field`.
 *
 * @package JetFormBuilder
 */

const { addFilter } = wp.hooks;

/**
 * Parse listen-to field names from a container element.
 *
 * @param {HTMLElement} container Element with data-listen-to attribute.
 *
 * @return {Array} Array of field names.
 */
function parseListenTo( container ) {
	const raw = container.dataset.listenTo;

	if ( ! raw ) {
		return [];
	}

	if ( container.dataset.listenToMultiple === '1' ) {
		try {
			return JSON.parse( raw );
		} catch ( e ) {
			return [];
		}
	}

	return [ raw ];
}

/**
 * Collect current values from listened form fields.
 *
 * @param {Array}       listenTo Array of field names to collect.
 * @param {HTMLElement} formNode Form element.
 *
 * @return {Object} Context object { fieldName: value }.
 */
function collectContext( listenTo, formNode ) {
	const context = {};

	listenTo.forEach( ( fieldName ) => {
		const el = formNode.querySelector( `[data-field-name="${ fieldName }"]` )
			|| formNode.querySelector( `[name="${ fieldName }"]` )
			|| formNode.querySelector( `[name="${ fieldName }[]"]` )
			|| formNode.querySelector( `[name*="[${ fieldName }]"]` );

		if ( ! el ) {
			return;
		}

		const actualName = el.getAttribute( 'name' )
			|| el.querySelector( '[name]' )?.getAttribute( 'name' )
			|| fieldName;

		let input = null;

		if ( window.JetFormBuilderMain?.inputData ) {
			input = window.JetFormBuilderMain.inputData.findInput?.( actualName, formNode )
				|| window.JetFormBuilderMain.inputData.findInput?.( fieldName, formNode )
				|| window.JetFormBuilderMain.inputData.getInput?.( actualName, formNode )
				|| window.JetFormBuilderMain.inputData.getInput?.( fieldName, formNode );

			if ( ! input && window.JetFormBuilderMain.inputData.getAll ) {
				const allInputs = window.JetFormBuilderMain.inputData.getAll( formNode ) || [];
				input = allInputs.find( ( current ) => current.name === actualName )
					|| allInputs.find( ( current ) => current.name === fieldName );
			}
		}

		if ( input ) {
			context[ fieldName ] = input.value.current;
			return;
		}

		const selectMultiple = el.matches( 'select[multiple]' )
			? el
			: el.querySelector( 'select[multiple]' );

		if ( selectMultiple ) {
			context[ fieldName ] = Array.from( selectMultiple.selectedOptions ).map(
				( option ) => option.value
			);
			return;
		}

		context[ fieldName ] = el.value || '';
	} );

	return context;
}

/**
 * Hook into the autocomplete addon's Select2 options filter.
 *
 * Injects dependent field context into the AJAX data function so the addon's
 * PHP handler (BaseAjaxHandler) receives context and can route through
 * Registry::generate() for generator fields with auto-update.
 *
 * Filter signature: applyFilters( 'jet.fb.select_autocomplete.options', select2Options, $field )
 */
addFilter(
	'jet.fb.select_autocomplete.options',
	'jet-form-builder/auto-update-context',
	function ( select2Options, $field ) {
		if ( ! $field ) {
			return select2Options;
		}

		const fieldEl = $field[ 0 ] || $field;

		if ( ! fieldEl || ! fieldEl.dataset || fieldEl.dataset.jfbAutoUpdate !== '1' ) {
			return select2Options;
		}

		if ( ! select2Options.ajax ) {
			return select2Options;
		}

		const formNode = fieldEl.closest( 'form' );

		if ( ! formNode ) {
			return select2Options;
		}

		const listenTo = parseListenTo( fieldEl );

		if ( ! listenTo.length ) {
			return select2Options;
		}

		// Wrap the original data function to inject context
		const originalDataFn = select2Options.ajax.data;

		select2Options.ajax.data = function ( params ) {
			const data = typeof originalDataFn === 'function'
				? originalDataFn( params )
				: params;

			// Collect current values from dependent fields and add as context
			const context = collectContext( listenTo, formNode );
			data.context = JSON.stringify( context );

			return data;
		};

		return select2Options;
	}
);
