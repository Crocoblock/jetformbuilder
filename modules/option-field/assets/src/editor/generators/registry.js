/**
 * Generator Controls Registry.
 *
 * Manages registration and retrieval of custom control components
 * for different generator types.
 *
 * @package JetFormBuilder
 */

/**
 * Internal storage for registered generator controls.
 *
 * @type {Object.<string, Function>}
 */
const generatorControls = {};

/**
 * Internal storage for registered generator validators.
 *
 * @type {Object.<string, Function>}
 */
const generatorValidators = {};

/**
 * Internal storage for generator metadata (from third parties).
 *
 * @type {Object.<string, Object>}
 */
const generatorMeta = {};

/**
 * Register a custom control component for a generator type.
 *
 * Use this when the schema-based auto-generated controls are not sufficient
 * and you need custom UI logic (e.g., dynamic selectors, API calls, etc.).
 *
 * @param {string}   generatorId Generator ID (e.g., 'jet_engine_query', 'my_custom')
 * @param {Function} Component   React component receiving:
 *                               - attributes: Current block attributes
 *                               - setAttributes: Function to update attributes
 *                               - schema: Generator schema definition
 *                               - generatorId: Current generator ID
 *
 * @example
 * ```js
 * registerGeneratorControls( 'my_generator', ( { attributes, setAttributes, schema } ) => {
 *   return (
 *     <TextControl
 *       label="My Field"
 *       value={ attributes.gen_my_generator_field }
 *       onChange={ ( val ) => setAttributes( { gen_my_generator_field: val } ) }
 *     />
 *   );
 * } );
 * ```
 */
export function registerGeneratorControls( generatorId, Component ) {
	if ( typeof Component !== 'function' ) {
		console.error(
			`JetFormBuilder: Generator controls for "${ generatorId }" must be a function/component.`
		);
		return;
	}

	generatorControls[ generatorId ] = Component;
}

/**
 * Unregister controls for a generator type.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if unregistered, false if not found.
 */
export function unregisterGeneratorControls( generatorId ) {
	if ( generatorId in generatorControls ) {
		delete generatorControls[ generatorId ];
		return true;
	}
	return false;
}

/**
 * Get registered control component for a generator.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Function|null} Control component or null if not registered.
 */
export function getGeneratorControls( generatorId ) {
	return generatorControls[ generatorId ] || null;
}

/**
 * Check if a generator has custom controls registered.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if custom controls are registered.
 */
export function hasCustomControls( generatorId ) {
	return generatorId in generatorControls;
}

/**
 * Get all registered generator control IDs.
 *
 * @return {string[]} Array of generator IDs with custom controls.
 */
export function getRegisteredGeneratorIds() {
	return Object.keys( generatorControls );
}

/**
 * Register a validator function for a generator type.
 *
 * Validators are called before saving to ensure settings are valid.
 *
 * @param {string}   generatorId Generator ID.
 * @param {Function} validator   Function receiving settings, returning { valid: boolean, errors: Object }.
 *
 * @example
 * ```js
 * registerGeneratorValidator( 'my_generator', ( settings ) => {
 *   const errors = {};
 *   if ( ! settings.api_url ) {
 *     errors.api_url = 'API URL is required';
 *   }
 *   return { valid: Object.keys( errors ).length === 0, errors };
 * } );
 * ```
 */
export function registerGeneratorValidator( generatorId, validator ) {
	if ( typeof validator !== 'function' ) {
		console.error(
			`JetFormBuilder: Generator validator for "${ generatorId }" must be a function.`
		);
		return;
	}

	generatorValidators[ generatorId ] = validator;
}

/**
 * Get validator for a generator type.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Function|null} Validator function or null.
 */
export function getGeneratorValidator( generatorId ) {
	return generatorValidators[ generatorId ] || null;
}

/**
 * Validate generator settings.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} settings    Settings to validate.
 *
 * @return {Object} Validation result { valid: boolean, errors: Object }.
 */
export function validateGeneratorSettings( generatorId, settings ) {
	const validator = getGeneratorValidator( generatorId );

	if ( ! validator ) {
		return { valid: true, errors: {} };
	}

	return validator( settings );
}

/**
 * Register additional metadata for a generator.
 *
 * Can be used to add custom data that controls might need.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} meta        Metadata object.
 */
export function registerGeneratorMeta( generatorId, meta ) {
	generatorMeta[ generatorId ] = {
		...( generatorMeta[ generatorId ] || {} ),
		...meta,
	};
}

/**
 * Get metadata for a generator.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Object} Metadata object or empty object.
 */
export function getGeneratorMeta( generatorId ) {
	return generatorMeta[ generatorId ] || {};
}

/**
 * Helper function to get attribute name with generator prefix.
 *
 * @param {string} generatorId Generator ID.
 * @param {string} fieldKey    Field key from schema.
 *
 * @return {string} Prefixed attribute name.
 */
export function getAttributeName( generatorId, fieldKey ) {
	return `gen_${ generatorId }_${ fieldKey }`;
}

/**
 * Helper function to parse settings from attributes.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} attributes  Block attributes.
 * @param {Object} schema      Generator schema.
 *
 * @return {Object} Parsed settings.
 */
export function parseSettingsFromAttributes( generatorId, attributes, schema ) {
	const settings = {};
	const prefix = `gen_${ generatorId }_`;

	Object.keys( schema ).forEach( ( fieldKey ) => {
		const attrName = prefix + fieldKey;
		const fieldDef = schema[ fieldKey ];

		if ( attrName in attributes ) {
			settings[ fieldKey ] = attributes[ attrName ];
		} else {
			settings[ fieldKey ] = fieldDef.default ?? '';
		}
	} );

	return settings;
}

/**
 * Helper function to create setAttributes wrapper for a generator.
 *
 * @param {string}   generatorId   Generator ID.
 * @param {Function} setAttributes Original setAttributes function.
 *
 * @return {Function} Wrapped setAttributes that auto-prefixes keys.
 */
export function createGeneratorSetAttributes( generatorId, setAttributes ) {
	return ( settings ) => {
		const prefixedSettings = {};

		Object.entries( settings ).forEach( ( [ key, value ] ) => {
			// If key is already prefixed, use as-is
			if ( key.startsWith( 'gen_' ) ) {
				prefixedSettings[ key ] = value;
			} else {
				prefixedSettings[ getAttributeName( generatorId, key ) ] = value;
			}
		} );

		setAttributes( prefixedSettings );
	};
}

/**
 * Export registry to global window object for external access.
 *
 * Third-party developers can use:
 * - window.JetFBGenerators.registerControls( id, Component )
 * - window.JetFBGenerators.registerValidator( id, validator )
 * - window.JetFBGenerators.registerMeta( id, meta )
 */
if ( typeof window !== 'undefined' ) {
	window.JetFBGenerators = window.JetFBGenerators || {};

	Object.assign( window.JetFBGenerators, {
		registerControls: registerGeneratorControls,
		unregisterControls: unregisterGeneratorControls,
		getControls: getGeneratorControls,
		hasCustomControls,
		getRegisteredIds: getRegisteredGeneratorIds,
		registerValidator: registerGeneratorValidator,
		getValidator: getGeneratorValidator,
		validate: validateGeneratorSettings,
		registerMeta: registerGeneratorMeta,
		getMeta: getGeneratorMeta,
		getAttributeName,
		parseSettings: parseSettingsFromAttributes,
		createSetAttributes: createGeneratorSetAttributes,
	} );
}

export default {
	registerGeneratorControls,
	unregisterGeneratorControls,
	getGeneratorControls,
	hasCustomControls,
	getRegisteredGeneratorIds,
	registerGeneratorValidator,
	getGeneratorValidator,
	validateGeneratorSettings,
	registerGeneratorMeta,
	getGeneratorMeta,
	getAttributeName,
	parseSettingsFromAttributes,
	createGeneratorSetAttributes,
};
