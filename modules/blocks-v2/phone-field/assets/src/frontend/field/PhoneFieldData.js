import { loadCurrentLocaleTranslations } from './i18n-loader';

const {
	InputData,
} = window.JetFormBuilderAbstract;

/**
 * International Phone Field Data Handler
 *
 * Handles intl-tel-input initialization, validation, and data processing
 */
function PhoneFieldData() {
	InputData.call( this );

	this.itiInstance   = null;
	this.isInitialized = false;

	/**
	 * Check if this handler supports the field
	 */
	this.isSupported = function ( node ) {
		const supported = node.classList.contains( 'phone-field' );

		return supported;
	};

	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.initIntlTelInput();
	};

	/**
	 * Initialize intl-tel-input on the field
	 * Loads translations asynchronously before initialization
	 */
	this.initIntlTelInput = async function () {
		const node = this.nodes[ 0 ];
		if ( ! node ) {
			return;
		}
		if ( this.isInitialized ) {
			return;
		}

		const wrapper = this.getWrapperNode();
		const input   = wrapper.querySelector('input.phone-field-intl');


		// Get configuration from data attributes
		const defaultCountry     = node.dataset.defaultCountry || 'auto';
		const preferredCountries = this.parseCountryList( node.dataset.preferredCountries );
		const onlyCountries      = this.parseCountryList( node.dataset.onlyCountries );
		const excludeCountries   = this.parseCountryList( node.dataset.excludeCountries );
		const separateDialCode   = node.dataset.separateDialCode || false;
		const ipinfoToken        = node.dataset.ipinfoToken || '';

		// Determine initial country
		let initialCountry = defaultCountry;

		if ( initialCountry === 'auto' ) {
			initialCountry = this.detectCountryByIP( ipinfoToken ) ||
				this.detectCountryByLanguage() ||
				'us';
		}

		// Load localized country names (async)
		const i18n = await this.getLocalizedCountryNames();

		// Build config object, only include arrays if they have items
		const config = {
			initialCountry: initialCountry,
			separateDialCode: 1 == separateDialCode ? true : false,
			strictMode: true,
			nationalMode: true,
			formatAsYouType: true,
			formatOnDisplay: true,
			autoPlaceholder: 'aggressive',
		};

		// Only add arrays if they have items
		if ( preferredCountries.length ) {
			config.countryOrder = preferredCountries;
		}
		if ( onlyCountries.length ) {
			config.onlyCountries = onlyCountries;
		}
		if ( excludeCountries.length ) {
			config.excludeCountries = excludeCountries;
		}
		if ( Object.keys( i18n ).length ) {
			config.i18n = i18n;
		}

		// Initialize intl-tel-input
		this.itiInstance = window.intlTelInput( input, config );

		this.itiInstance.setNumber( node.value );

		this.isInitialized = true;

	};

	this.normalizeIfInternational = function( input ) {
		const value = input.value.trim();

		if ( !value ) return;
		if ( value[0] === '+' ) {
			this.itiInstance.setNumber( value );

			this.setValue();
		}
	}

	/**
	 * Parse comma-separated country list
	 */
	this.parseCountryList = function ( str ) {
		if ( ! str ) {
			return [];
		}
		return str.split( ',' ).map( c => c.trim().toLowerCase() ).filter( c => c );
	};

	/**
	 * Detect country by IP using ipinfo.io
	 */
	this.detectCountryByIP = function ( token ) {
		// Use cached value if available
		const cached = sessionStorage.getItem( 'jfb_detected_country' );

		if ( cached ) {
			return cached;
		}

		const url = token
			? `https://api.ipinfo.io/lite/me?token=${ token }`
			: 'https://ipinfo.io/json';

		fetch( url )
			.then( response => response.json() )
			.then( data => {
				if ( data.country ) {

					const country = data.country.toLowerCase();
					sessionStorage.setItem( 'jfb_detected_country', country );

					// Update field if still in auto mode
					if ( this.itiInstance ) {
						this.itiInstance.setCountry( country );
					}
				}
			} )
			.catch( error => {
			} );

		return null;
	};

	/**
	 * Detect country by browser language
	 */
	this.detectCountryByLanguage = function () {
		const lang = navigator.language || navigator.userLanguage;
		if ( ! lang ) {
			return null;
		}

		// Extract country code from language (e.g., en-US -> us)
		const parts = lang.split( '-' );
		if ( parts.length > 1 ) {
			return parts[ 1 ].toLowerCase();
		}

		// Language to country mapping
		const langToCountry = {
			'en': 'us',
			'ru': 'ru',
			'uk': 'ua',
			'de': 'de',
			'fr': 'fr',
			'es': 'es',
			'it': 'it',
			'pl': 'pl',
			'pt': 'br',
			'ja': 'jp',
			'ko': 'kr',
			'zh': 'cn',
			'ar': 'sa',
			'he': 'il',
			'hi': 'in',
		};

		return langToCountry[ parts[ 0 ].toLowerCase() ] || null;
	};

	/**
	 * Get localized country names
	 *
	 * Priority order:
	 * 1. Custom WordPress translations (via wp_localize_script and filters)
	 * 2. intl-tel-input library translations (loaded dynamically)
	 * 3. intl-tel-input built-in English names (fallback)
	 */
	this.getLocalizedCountryNames = async function () {

		// Get translations provided by WordPress (via wp_localize_script)
		const wpTranslations = typeof window.jfbPhoneFieldI18n !== 'undefined'
			? window.jfbPhoneFieldI18n
			: {};


		// Load intl-tel-input library translations based on WordPress locale
		let libraryTranslations = {};
		try {
			libraryTranslations = await loadCurrentLocaleTranslations();
		} catch ( error ) {
		}

		// Merge translations: WordPress overrides library translations
		const mergedTranslations = {
			...libraryTranslations,
			...wpTranslations,
		};

		return mergedTranslations;
	};

	/**
	 * Add event listeners
	 */
	this.addListeners = function () {
		InputData.prototype.addListeners.call( this );

		const node = this.nodes[ 0 ]; // Main field (phone)
		if ( ! node ) {
			return;
		}

		const wrapper = this.getWrapperNode();
		const input   = wrapper.querySelector('input.phone-field-intl'); // intl-tel-input field

		if ( ! input ) {
			return;
		}

		// Add form submit listener to validate before submission
		const form = node.closest('form');
		if ( form ) {
			form.addEventListener('submit', () => {
				this.normalizeIfInternational( input );
				this.syncFromIntlInput( input, node );

				// Validate and show error before submit
				const isValid = this.validateAndShowError();
			}, true); // Use capture phase to run before JetFormBuilder
		}

		// Listen for country change
		input.addEventListener( 'countrychange', () => {
			this.syncFromIntlInput( input, node );
			this.validateAndShowError();
		} );

		// Listen for input
		input.addEventListener( 'input', () => {
			this.normalizeIfInternational( input );
			this.syncFromIntlInput( input, node );
			// Clear error while typing
			if ( input.value.trim() ) {
				this.clearError();
			}
		} );

		input.addEventListener('change', () => {
			this.normalizeIfInternational( input );
			this.syncFromIntlInput( input, node );
		});

		// Listen for blur (validate on blur)
		input.addEventListener( 'blur', () => {
			setTimeout(() => {
				this.normalizeIfInternational( input );
				this.syncFromIntlInput( input, node );
				this.validateAndShowError();
			}, 0);
		} );
	};

	/**
	 * Sync value from intl-tel-input field to main field
	 */
	// eslint-disable-next-line no-unused-vars
	this.syncFromIntlInput = function ( intlInput, mainField ) {
		if ( ! this.itiInstance ) {
			return;
		}

		// Determine save format from data attribute
		const saveFormat = mainField.dataset.saveFormat || 'e164';

		let formattedNumber;

		// Get formatted number based on save format
		switch ( saveFormat ) {
			case 'international':
				formattedNumber = this.itiInstance.getNumber( window.intlTelInput.utils.numberFormat.INTERNATIONAL );
				break;
			case 'e164':
			default:
				formattedNumber = this.itiInstance.getNumber(); // E.164 is default
				break;
		}

		// Update main field value (this is what gets submitted)
		mainField.value = formattedNumber || '';

		// Update JetFormBuilder's internal tracking
		this.calcValue     = formattedNumber || '';
		this.value.current = formattedNumber || '';
	};

	/**
	 * Show error message under the phone field
	 */
	this.showError = function ( message ) {
		const wrapper = this.getWrapperNode();

		if ( ! wrapper ) {
			return;
		}

		// Remove existing error first
		this.clearError();

		// Add error class to wrapper
		wrapper.classList.add( 'field-has-error' );

		// Create error element
		const errorDiv = document.createElement( 'div' );

		errorDiv.className   = 'error-message jet-form-builder__error';
		errorDiv.textContent = message;

		// Find where to insert error
		const colEnd = wrapper.querySelector( '.jet-form-builder-col__end' );
		if ( colEnd ) {
			colEnd.appendChild( errorDiv );
		} else {
			wrapper.appendChild( errorDiv );
		}

		// Mark intl input as invalid
		const intlInput = wrapper.querySelector( 'input.phone-field-intl' );
		if ( intlInput ) {
			intlInput.classList.add( 'invalid' );
			intlInput.setAttribute( 'aria-invalid', 'true' );
		}

	};

	/**
	 * Clear error message
	 */
	this.clearError = function () {
		const wrapper = this.getWrapperNode();
		if ( ! wrapper ) {
			return;
		}

		// Remove error class
		wrapper.classList.remove( 'field-has-error' );

		// Remove error message
		const errorDiv = wrapper.querySelector( '.error-message' );
		if ( errorDiv ) {
			errorDiv.remove();
		}

		// Remove invalid class from intl input
		const intlInput = wrapper.querySelector( 'input.phone-field-intl' );
		if ( intlInput ) {
			intlInput.classList.remove( 'invalid' );
			intlInput.removeAttribute( 'aria-invalid' );
		}

	};

	/**
	 * Get validation message from data-attributes or fallback
	 */
	this.getValidationMessage = function ( type ) {
		const mainField = this.nodes[ 0 ];

		// Get custom message from block settings (data-attributes)
		if ( type === 'required' && mainField.dataset.validationMessageRequired ) {
			return mainField.dataset.validationMessageRequired;
		}
		if ( type === 'invalid' && mainField.dataset.validationMessageInvalid ) {
			return mainField.dataset.validationMessageInvalid;
		}

		// Fallback to default messages
		return type === 'required'
			? 'This field is required'
			: 'Please enter a valid phone number';
	};

	/**
	 * Validate phone number and show error if invalid
	 */
	this.validateAndShowError = function () {
		const wrapper   = this.getWrapperNode();
		const intlInput = wrapper?.querySelector( 'input.phone-field-intl' );
		const mainField = this.nodes[ 0 ];

		if ( ! intlInput ) {
			return true;
		}

		const value = intlInput.value.trim();

		// Check if field is required and empty
		if ( mainField.hasAttribute( 'required' ) && ! value ) {
			this.showError( this.getValidationMessage( 'required' ) );

			return false;
		}

		// If field is not empty, validate phone number
		if ( value && this.itiInstance ) {
			const isValid = this.itiInstance.isValidNumber();

			if ( ! isValid ) {
				this.showError( this.getValidationMessage( 'invalid' ) );

				return false;
			}
		}

		// Clear error if valid
		this.clearError();

		return true;
	};

	/**
	 * Override getReportingNode to show errors under intl-tel-input field
	 * Used by BrowserReporting
	 */
	this.getReportingNode = function () {
		const wrapper   = this.getWrapperNode();
		const intlInput = wrapper?.querySelector('input.phone-field-intl');

		// Return intl input if found, otherwise return main node
		return intlInput || this.nodes[ 0 ];
	};

	/**
	 * Override getWrapperNode to ensure correct wrapper is returned
	 */
	this.getWrapperNode = function () {
		const node = this.nodes[ 0 ];
		if ( ! node ) {
			return null;
		}

		// Find the .jet-form-builder-row wrapper
		const wrapper = node.closest( '.jet-form-builder-row' );

		return wrapper;
	};

	/**
	 * Override setValue to get value from intl-tel-input
	 */
	PhoneFieldData.prototype.setValue = function () {
		const node = this.nodes[ 0 ]; // Main field
		if ( ! node ) {
			return '';
		}

		if ( ! this.itiInstance ) {
			// If intl-tel-input not initialized yet, use node value
			this.calcValue     = node.value;
			this.value.current = node.value;
			return node.value;
		}

		// Determine save format from data attribute
		const saveFormat = node.dataset.saveFormat || 'e164';

		let fieldValue;

		// Get formatted number based on save format
		switch ( saveFormat ) {
			case 'international':
				fieldValue = this.itiInstance.getNumber( window.intlTelInputUtils.numberFormat.INTERNATIONAL );
				break;
			case 'e164':
			default:
				fieldValue = this.itiInstance.getNumber(); // E.164 is default
				break;
		}


		node.value = fieldValue || '';

		this.calcValue     = fieldValue || '';
		this.value.current = fieldValue || '';

		return fieldValue;
	};

}

// Set up prototype chain
PhoneFieldData.prototype = Object.create( InputData.prototype );
PhoneFieldData.prototype.constructor = PhoneFieldData;

export default PhoneFieldData;
