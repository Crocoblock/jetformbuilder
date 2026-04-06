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
	 * @param {HTMLElement}      fieldElement Field element (select/input container).
	 * @param {Array}            options      New options array.
	 * @param {HTMLElement|null} formNode     Form element (needed for re-initialization).
	 */
	updateOptions( fieldElement, options, formNode = null ) {
		const fieldType = this.getFieldType( fieldElement );

		switch ( fieldType ) {
			case 'select':
				this.updateSelectOptions( fieldElement, options );
				break;
			case 'checkbox':
			case 'radio':
				this.updateChoiceOptions( fieldElement, options, fieldType, formNode );
				break;
			default:
				break;
		}
	}

	/**
	 * Get field type from element.
	 *
	 * Reads data-field-type first (injected server-side), so detection works
	 * even when the container is empty (no options rendered yet).
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 *
	 * @return {string} Field type (select/checkbox/radio).
	 */
	getFieldType( fieldElement ) {
		if ( fieldElement.tagName === 'SELECT' ) {
			return 'select';
		}

		const dataType = fieldElement.dataset.fieldType;
		if ( dataType ) {
			if ( dataType === 'checkbox-field' ) { return 'checkbox'; }
			if ( dataType === 'radio-field' ) { return 'radio'; }
			if ( dataType === 'select-field' ) { return 'select'; }
		}

		const firstInput = fieldElement.querySelector( 'input[type="checkbox"], input[type="radio"]' );
		if ( firstInput ) {
			return firstInput.type;
		}

		return 'unknown';
	}

	/**
	 * Update select field options.
	 *
	 * For Select2 autocomplete fields, we skip DOM rebuild and instead
	 * clear the current selection so that Select2 AJAX fires fresh
	 * (with updated context from autocomplete-bridge.js).
	 *
	 * @param {HTMLSelectElement} selectElement Select element.
	 * @param {Array}             options       New options array.
	 */
	updateSelectOptions( selectElement, options ) {
		const isAutocompleteSelect = selectElement.classList.contains( 'jet-select-autocomplete' );
		const isAjaxAutocomplete   = isAutocompleteSelect && selectElement.hasAttribute( 'data-ajax--url' );
		const $select              = isAutocompleteSelect ? jQuery( selectElement ) : null;
		const hasSelect2           = Boolean( $select?.data( 'select2' ) );

		if (
			isAjaxAutocomplete
		) {
			if ( hasSelect2 ) {
				$select.val( null ).trigger( 'change' );
				return;
			}
		}

		const isMultiple    = selectElement.multiple;
		const currentValues = isMultiple
			? Array.from( selectElement.selectedOptions ).map( ( opt ) => opt.value )
			: [ selectElement.value ];
		const hadSelection  = currentValues.some( Boolean );
		const nextValues    = [];
		let fallbackValue   = '';

		const firstOption = selectElement.options[ 0 ];
		const hasPlaceholderOption = Boolean(
			firstOption
			&& firstOption.value === ''
			&& (
				firstOption.disabled
				|| firstOption.textContent.trim() !== ''
			)
		);
		const placeholderOption = hasPlaceholderOption
			? firstOption.cloneNode( true )
			: null;

		selectElement.innerHTML = '';

		if ( placeholderOption ) {
			selectElement.appendChild( placeholderOption );
		}

		options.forEach( ( option ) => {
			const optionElement = document.createElement( 'option' );
			optionElement.value = option.value || option.val || '';
			optionElement.textContent = option.label || option.value || '';

			if ( ! fallbackValue && optionElement.value !== '' ) {
				fallbackValue = optionElement.value;
			}

			if ( currentValues.includes( optionElement.value ) ) {
				optionElement.selected = true;
				nextValues.push( optionElement.value );
			}

			if ( option.calculate ) {
				optionElement.dataset.calculate = option.calculate;
			}

			selectElement.appendChild( optionElement );
		} );

		const hasMatchingSelection = nextValues.length > 0;

		if ( isMultiple ) {
			Array.from( selectElement.options ).forEach( ( option ) => {
				option.selected = nextValues.includes( option.value );
			} );
		} else if ( hasMatchingSelection ) {
			selectElement.value = nextValues[ 0 ];
		} else if ( ! placeholderOption && selectElement.options.length ) {
			selectElement.selectedIndex = 0;
			if ( selectElement.options[ 0 ] ) {
				selectElement.options[ 0 ].selected = true;
			}
			if ( fallbackValue ) {
				selectElement.value = fallbackValue;
			}
		} else if ( placeholderOption ) {
			selectElement.value = '';
		} else {
			selectElement.selectedIndex = -1;
		}

		if ( isAutocompleteSelect && hasSelect2 ) {
			$select.select2( 'destroy' );

			const select2Options = wp.hooks.applyFilters(
				'jet.fb.select_autocomplete.options',
				{
					dropdownParent: $select.parent(),
					width: '100%',
				},
				$select
			);

			$select.select2( select2Options );

			if ( isMultiple ) {
				$select.val( nextValues ).trigger( 'change' );
			} else if ( hasMatchingSelection ) {
				$select.val( nextValues[ 0 ] ).trigger( 'change' );
			} else if ( ! placeholderOption && selectElement.options.length ) {
				const nextValue = fallbackValue || selectElement.options[ 0 ].value;

				Array.from( selectElement.options ).forEach( ( option ) => {
					option.selected = option.value === nextValue;
				} );
				selectElement.value = nextValue;

				$select.val( nextValue ).trigger( 'change' );
			} else {
				$select.val( null ).trigger( 'change' );
			}

		}

		selectElement.dispatchEvent( new Event( 'change', { bubbles: true } ) );
	}

	/**
	 * Update checkbox/radio field options.
	 *
	 * containerElement is the outer .checkradio-wrap div (has data-jfb-auto-update).
	 * Each option row is a child div (.checkboxes-wrap/.radio-wrap .checkradio-wrap)
	 * containing a <label class="jet-form-builder__field-label for-checkbox|for-radio">
	 *   <input type="checkbox|radio" ...><span>label text</span>
	 * </label>.
	 *
	 * @param {HTMLElement}      containerElement Outer .checkradio-wrap element.
	 * @param {Array}            options          New options array.
	 * @param {string}           fieldType        Field type (checkbox/radio).
	 * @param {HTMLElement|null} formNode         Form element (for re-initialization).
	 */
	updateChoiceOptions( containerElement, options, fieldType, formNode = null ) {
		// Get field name from data attribute (most reliable source)
		const fieldName = containerElement.getAttribute( 'data-field-name' );
		if ( ! fieldName ) {
			return;
		}

		const currentValues = Array.from(
			containerElement.querySelectorAll( `input[type="${ fieldType }"]:checked` )
		).map( ( input ) => input.value );

		// Preserve custom-option rows (e.g. "Add New" button)
		containerElement
			.querySelectorAll( ':scope > .jet-form-builder__field-wrap:not(.custom-option)' )
			.forEach( ( row ) => row.remove() );

		const inputName  = fieldType === 'checkbox' ? `${ fieldName }[]` : fieldName;
		const labelClass = fieldType === 'checkbox' ? 'for-checkbox' : 'for-radio';
		const rowClass   = fieldType === 'checkbox'
			? 'jet-form-builder__field-wrap checkboxes-wrap checkradio-wrap'
			: 'jet-form-builder__field-wrap radio-wrap checkradio-wrap';

		const customOptionRow = containerElement.querySelector( ':scope > .custom-option' );

		const inputClass = fieldType === 'checkbox'
			? 'jet-form-builder__field checkboxes-field checkradio-field'
			: 'jet-form-builder__field radio-field checkradio-field';

		const fragment = document.createDocumentFragment();
		let hasCustomTemplates = false;

		options.forEach( ( option ) => {
			const value     = option.value || option.val || '';
			const label     = option.label || value;
			const isChecked = currentValues.includes( value );

			const inputElement = document.createElement( 'input' );
			inputElement.type  = fieldType;
			inputElement.name  = inputName;
			inputElement.value = value;
			inputElement.className = inputClass;
			inputElement.setAttribute( 'data-field-name', fieldName );
			inputElement.checked = isChecked;

			if ( option.calculate ) {
				inputElement.dataset.calculate = option.calculate;
			}

			const rowElement = document.createElement( 'div' );
			rowElement.className = rowClass;

			// JetEngine custom template HTML (pre-rendered server-side)
			if ( option.html ) {
				hasCustomTemplates = true;
				const templateWrapper = document.createElement( 'div' );
				templateWrapper.innerHTML = option.html;
				while ( templateWrapper.firstChild ) {
					rowElement.appendChild( templateWrapper.firstChild );
				}
			}

			const spanElement = document.createElement( 'span' );
			spanElement.textContent = label;

			const labelElement = document.createElement( 'label' );
			labelElement.className = `jet-form-builder__field-label ${ labelClass }`;
			labelElement.appendChild( inputElement );
			labelElement.appendChild( spanElement );

			rowElement.appendChild( labelElement );

			fragment.appendChild( rowElement );
		} );

		if ( customOptionRow ) {
			containerElement.insertBefore( fragment, customOptionRow );
		} else {
			containerElement.appendChild( fragment );
		}

		if ( hasCustomTemplates ) {
			const $container = jQuery( containerElement );

			if ( window.JetEngine && window.JetEngine.initElementsHandlers ) {
				window.JetEngine.initElementsHandlers( $container );
			} else if ( window.JetPlugins ) {
				window.JetPlugins.init( $container );
			}
		}

		const reInited = this.reInitField( containerElement, formNode );

		if ( ! reInited ) {
			const firstInput = containerElement.querySelector( `input[type="${ fieldType }"]` );
			if ( firstInput ) {
				firstInput.dispatchEvent( new Event( 'change', { bubbles: true } ) );
			}
		}
	}

	/**
	 * Re-initialize a field via JFB's standard Observable.observeInput() API.
	 *
	 * After DOM changes (new options with custom templates), the field's InputData
	 * must be replaced so that createInput() re-evaluates and picks the correct
	 * handler (e.g. DynamicCheckboxData instead of plain CheckboxData).
	 * observeInput() also fires jet.fb.input.makeReactive, which lets
	 * listing.options bind template clicks and --checked class toggling.
	 *
	 * @param {HTMLElement}      fieldElement The [data-jfb-sync] container element.
	 * @param {HTMLElement|null} formNode     The form element.
	 *
	 * @return {boolean} True if re-initialization succeeded.
	 */
	reInitField( fieldElement, formNode ) {
		if ( ! formNode ) {
			return false;
		}

		// Root Observable.observeInput() intentionally skips fields inside repeater
		// rows, because they belong to row-scoped observables. Calling it here would
		// return undefined and crash on input.makeReactive(). For repeater targets,
		// fall back to DOM update + synthetic change event below.
		if ( fieldElement.closest( '.jet-form-builder-repeater__row' ) ) {
			return false;
		}

		const syncNode = fieldElement.hasAttribute( 'data-jfb-sync' )
			? fieldElement
			: fieldElement.querySelector( '[data-jfb-sync]' );

		if ( ! syncNode ) {
			return false;
		}

		const formId     = formNode.dataset.formId;
		const observable = formId && window.JetFormBuilder ? window.JetFormBuilder[ formId ] : null;

		if ( ! observable || ! observable.observeInput ) {
			return false;
		}

		observable.observeInput( syncNode, true );

		return true;
	}

	/**
	 * Get the visual wrapper for loading/error state classes.
	 *
	 * For select elements the wrapper is the closest .jet-form-builder__field-wrap ancestor.
	 * For checkbox/radio, fieldElement IS the outer .checkradio-wrap div
	 * (class jet-form-builder__fields-group), so we use it directly.
	 *
	 * @param {HTMLElement} fieldElement Field element (select or .checkradio-wrap div).
	 *
	 * @return {HTMLElement|null} Wrapper element.
	 */
	getStateWrapper( fieldElement ) {
		// If it's the .checkradio-wrap container itself, use it directly
		if ( fieldElement.classList.contains( 'checkradio-wrap' ) ) {
			return fieldElement;
		}

		return fieldElement.closest( '.jet-form-builder__field-wrap' ) || fieldElement.parentElement;
	}

	/**
	 * Set loading state for a field.
	 *
	 * @param {HTMLElement} fieldElement Field element.
	 * @param {boolean}     isLoading    Loading state.
	 */
	setLoadingState( fieldElement, isLoading ) {
		const wrapper = this.getStateWrapper( fieldElement );

		if ( ! wrapper ) {
			return;
		}

		if ( isLoading ) {
			wrapper.classList.add( 'jfb-auto-update-loading' );

			if ( ! wrapper.querySelector( '.jfb-auto-update-spinner' ) ) {
				const spinner = document.createElement( 'span' );
				spinner.className = 'jfb-auto-update-spinner';
				spinner.setAttribute( 'aria-label', 'Loading options...' );
				wrapper.appendChild( spinner );
			}
		} else {
			wrapper.classList.remove( 'jfb-auto-update-loading' );

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
		const wrapper = this.getStateWrapper( fieldElement );

		if ( ! wrapper ) {
			return;
		}

		wrapper.classList.add( 'jfb-auto-update-error' );

		let errorElement = wrapper.querySelector( '.jfb-auto-update-error-message' );

		if ( ! errorElement ) {
			errorElement = document.createElement( 'div' );
			errorElement.className = 'jfb-auto-update-error-message';
			wrapper.appendChild( errorElement );
		}

		errorElement.textContent = errorMessage;

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
		const wrapper = this.getStateWrapper( fieldElement );

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
