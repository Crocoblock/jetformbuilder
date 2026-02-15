/**
 * Options Updater for Auto-Update Feature.
 *
 * Handles DOM manipulation to update field options.
 * Supports select, checkbox, and radio field types.
 *
 * @package JetFormBuilder
 */

/**
 * Options Updater Class.
 *
 * Updates field options in the DOM while preserving selected values.
 */
class OptionsUpdater {
	/**
	 * Update options for a field element.
	 *
	 * @param {HTMLElement} fieldElement Field element (select/input container).
	 * @param {Array}       options      New options array.
	 */
	updateOptions( fieldElement, options ) {
		const fieldType = this.getFieldType( fieldElement );

		switch ( fieldType ) {
			case 'select':
				this.updateSelectOptions( fieldElement, options );
				break;
			case 'checkbox':
			case 'radio':
				this.updateChoiceOptions( fieldElement, options, fieldType );
				break;
			default:
				console.warn( '[JFB Auto-Update] Unsupported field type:', fieldType );
		}
	}

	/**
	 * Get field type from element.
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 *
	 * @return {string} Field type (select/checkbox/radio).
	 */
	getFieldType( fieldElement ) {
		if ( fieldElement.tagName === 'SELECT' ) {
			return 'select';
		}

		// For checkbox/radio, element might be the wrapper
		const firstInput = fieldElement.querySelector( 'input[type="checkbox"], input[type="radio"]' );
		if ( firstInput ) {
			return firstInput.type;
		}

		return 'unknown';
	}

	/**
	 * Update select field options.
	 *
	 * @param {HTMLSelectElement} selectElement Select element.
	 * @param {Array}             options       New options array.
	 */
	updateSelectOptions( selectElement, options ) {
		// Store current value
		const currentValue = selectElement.value;
		const isMultiple = selectElement.multiple;
		const currentValues = isMultiple
			? Array.from( selectElement.selectedOptions ).map( ( opt ) => opt.value )
			: [ currentValue ];

		// Store placeholder option if exists
		let placeholderOption = null;
		const firstOption = selectElement.options[ 0 ];
		if ( firstOption && firstOption.value === '' ) {
			placeholderOption = firstOption.cloneNode( true );
		}

		// Clear existing options
		selectElement.innerHTML = '';

		// Restore placeholder
		if ( placeholderOption ) {
			selectElement.appendChild( placeholderOption );
		}

		// Add new options
		options.forEach( ( option ) => {
			const optionElement = document.createElement( 'option' );
			optionElement.value = option.value || option.val || '';
			optionElement.textContent = option.label || option.value || '';

			// Restore selection if value matches
			if ( currentValues.includes( optionElement.value ) ) {
				optionElement.selected = true;
			}

			// Add calculate attribute if present
			if ( option.calculate ) {
				optionElement.dataset.calculate = option.calculate;
			}

			selectElement.appendChild( optionElement );
		} );

		// Trigger change event for reactive updates
		selectElement.dispatchEvent( new Event( 'change', { bubbles: true } ) );
	}

	/**
	 * Update checkbox/radio field options.
	 *
	 * @param {HTMLElement} containerElement Container element.
	 * @param {Array}       options          New options array.
	 * @param {string}      fieldType        Field type (checkbox/radio).
	 */
	updateChoiceOptions( containerElement, options, fieldType ) {
		// Find the wrapper that contains all options
		const wrapper = containerElement.closest( '.jet-form-builder__field-wrap' ) ||
		                containerElement.querySelector( '.jet-form-builder__field-wrap' );

		if ( ! wrapper ) {
			console.warn( '[JFB Auto-Update] Could not find field wrapper' );
			return;
		}

		// Get field name from first input
		const firstInput = wrapper.querySelector( `input[type="${ fieldType }"]` );
		if ( ! firstInput ) {
			return;
		}

		const fieldName = firstInput.name.replace( '[]', '' ); // Remove array suffix for checkboxes

		// Store current values
		const currentValues = Array.from(
			wrapper.querySelectorAll( `input[type="${ fieldType }"]:checked` )
		).map( ( input ) => input.value );

		// Find the options container
		const optionsContainer = wrapper.querySelector( '.checkboxes-wrap, .radioboxes-wrap' ) || wrapper;

		// Clear existing options (but preserve any non-option elements)
		const labels = optionsContainer.querySelectorAll( 'label' );
		labels.forEach( ( label ) => label.remove() );

		// Create new options
		options.forEach( ( option, index ) => {
			const value = option.value || option.val || '';
			const label = option.label || value;
			const inputId = `${ fieldName }_${ index }_${ Date.now() }`;

			// Create label element
			const labelElement = document.createElement( 'label' );
			labelElement.className = 'jet-form-builder__field-label';
			labelElement.setAttribute( 'for', inputId );

			// Create input element
			const inputElement = document.createElement( 'input' );
			inputElement.type = fieldType;
			inputElement.name = fieldType === 'checkbox' ? `${ fieldName }[]` : fieldName;
			inputElement.value = value;
			inputElement.id = inputId;
			inputElement.className = 'jet-form-builder__field';

			// Restore checked state
			if ( currentValues.includes( value ) ) {
				inputElement.checked = true;
			}

			// Add calculate attribute if present
			if ( option.calculate ) {
				inputElement.dataset.calculate = option.calculate;
			}

			// Create span for custom styling
			const spanElement = document.createElement( 'span' );
			spanElement.className = 'jet-form-builder__field-wrap';

			// Assemble elements
			spanElement.appendChild( inputElement );
			labelElement.appendChild( spanElement );

			const textNode = document.createTextNode( ` ${ label }` );
			labelElement.appendChild( textNode );

			optionsContainer.appendChild( labelElement );

			// Trigger change event if checked
			if ( inputElement.checked ) {
				inputElement.dispatchEvent( new Event( 'change', { bubbles: true } ) );
			}
		} );
	}

	/**
	 * Set loading state for a field.
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 * @param {boolean}     isLoading    Loading state.
	 */
	setLoadingState( fieldElement, isLoading ) {
		const wrapper = fieldElement.closest( '.jet-form-builder__field-wrap' ) ||
		                fieldElement.parentElement;

		if ( ! wrapper ) {
			return;
		}

		if ( isLoading ) {
			wrapper.classList.add( 'jfb-auto-update-loading' );
			fieldElement.disabled = true;

			// Add loading indicator if doesn't exist
			if ( ! wrapper.querySelector( '.jfb-auto-update-spinner' ) ) {
				const spinner = document.createElement( 'span' );
				spinner.className = 'jfb-auto-update-spinner';
				spinner.setAttribute( 'aria-label', 'Loading options...' );
				wrapper.appendChild( spinner );
			}
		} else {
			wrapper.classList.remove( 'jfb-auto-update-loading' );
			fieldElement.disabled = false;

			// Remove loading indicator
			const spinner = wrapper.querySelector( '.jfb-auto-update-spinner' );
			if ( spinner ) {
				spinner.remove();
			}
		}
	}

	/**
	 * Set error state for a field.
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 * @param {string}      errorMessage Error message.
	 */
	setErrorState( fieldElement, errorMessage ) {
		const wrapper = fieldElement.closest( '.jet-form-builder__field-wrap' ) ||
		                fieldElement.parentElement;

		if ( ! wrapper ) {
			return;
		}

		wrapper.classList.add( 'jfb-auto-update-error' );

		// Add error message if doesn't exist
		let errorElement = wrapper.querySelector( '.jfb-auto-update-error-message' );

		if ( ! errorElement ) {
			errorElement = document.createElement( 'div' );
			errorElement.className = 'jfb-auto-update-error-message';
			wrapper.appendChild( errorElement );
		}

		errorElement.textContent = errorMessage;

		// Auto-remove error after 5 seconds
		setTimeout( () => {
			this.clearErrorState( fieldElement );
		}, 5000 );
	}

	/**
	 * Clear error state for a field.
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 */
	clearErrorState( fieldElement ) {
		const wrapper = fieldElement.closest( '.jet-form-builder__field-wrap' ) ||
		                fieldElement.parentElement;

		if ( ! wrapper ) {
			return;
		}

		wrapper.classList.remove( 'jfb-auto-update-error' );

		const errorElement = wrapper.querySelector( '.jfb-auto-update-error-message' );
		if ( errorElement ) {
			errorElement.remove();
		}
	}
}

export default OptionsUpdater;
