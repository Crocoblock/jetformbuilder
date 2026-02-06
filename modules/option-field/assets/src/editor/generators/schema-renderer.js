/**
 * Schema-Based Control Renderer.
 *
 * Automatically generates form controls based on generator schema definitions.
 * Used as the default renderer when no custom controls are registered.
 *
 * @package JetFormBuilder
 */

const {
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	BaseControl,
	__experimentalNumberControl,
} = wp.components;

const { __ } = wp.i18n;
const { Fragment } = wp.element;

// Handle NumberControl availability (experimental in some WP versions)
let NumberControl = wp.components.NumberControl;
if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

/**
 * Renders a single control based on field definition.
 *
 * @param {Object}   props             Component props.
 * @param {string}   props.fieldKey    Field key from schema.
 * @param {Object}   props.fieldDef    Field definition from schema.
 * @param {*}        props.value       Current field value.
 * @param {Function} props.onChange    Change handler.
 * @param {string}   props.generatorId Generator ID (for unique keys).
 *
 * @return {JSX.Element|null} Control element or null.
 */
function SchemaControl( { fieldKey, fieldDef, value, onChange, generatorId } ) {
	const {
		type = 'string',
		label = fieldKey,
		help,
		placeholder,
		control = 'text',
		options = [],
		min,
		max,
		step = 1,
		rows = 3,
		disabled = false,
		multiple = false,
	} = fieldDef;

	const controlKey = `${ generatorId }-${ fieldKey }`;

	switch ( control ) {
		case 'number':
			return (
				<BaseControl
					key={ controlKey }
					label={ label }
					help={ help }
					className="jfb-generator-control jfb-generator-control--number"
				>
					<NumberControl
						value={ value ?? '' }
						onChange={ ( newValue ) => {
							// NumberControl returns string, convert to number if needed
							const numValue = newValue === '' ? '' : Number( newValue );
							onChange( numValue );
						} }
						step={ step }
						min={ min }
						max={ max }
						disabled={ disabled }
					/>
				</BaseControl>
			);

		case 'select':
			// Normalize options to { value, label } format
			const normalizedOptions = options.map( ( opt ) => {
				if ( typeof opt === 'string' ) {
					return { value: opt, label: opt };
				}
				return opt;
			} );

			return (
				<SelectControl
					key={ controlKey }
					label={ label }
					help={ help }
					value={ multiple ? ( value ?? [] ) : ( value ?? '' ) }
					onChange={ onChange }
					options={ normalizedOptions }
					multiple={ multiple }
					disabled={ disabled }
					className="jfb-generator-control jfb-generator-control--select"
				/>
			);

		case 'toggle':
			return (
				<ToggleControl
					key={ controlKey }
					label={ label }
					help={ help }
					checked={ !! value }
					onChange={ onChange }
					disabled={ disabled }
					className="jfb-generator-control jfb-generator-control--toggle"
				/>
			);

		case 'textarea':
			return (
				<TextareaControl
					key={ controlKey }
					label={ label }
					help={ help }
					value={ value ?? '' }
					onChange={ onChange }
					placeholder={ placeholder }
					rows={ rows }
					disabled={ disabled }
					className="jfb-generator-control jfb-generator-control--textarea"
				/>
			);

		case 'text':
		default:
			return (
				<TextControl
					key={ controlKey }
					label={ label }
					help={ help }
					value={ value ?? '' }
					onChange={ onChange }
					placeholder={ placeholder }
					type={ type === 'number' ? 'number' : 'text' }
					disabled={ disabled }
					className="jfb-generator-control jfb-generator-control--text"
				/>
			);
	}
}

/**
 * Renders all controls for a generator based on its schema.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.generatorId   Generator ID.
 * @param {Object}   props.schema        Generator schema definition.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 *
 * @return {JSX.Element|null} Controls or null if no schema.
 */
export function SchemaBasedControls( {
	generatorId,
	schema,
	attributes,
	setAttributes,
} ) {
	if ( ! schema || Object.keys( schema ).length === 0 ) {
		return null;
	}

	/**
	 * Gets the attribute key for a schema field.
	 *
	 * @param {string} fieldKey Schema field key.
	 *
	 * @return {string} Block attribute key.
	 */
	const getAttributeKey = ( fieldKey ) => {
		// For legacy generators like num_range_manual, use direct attribute names
		if ( fieldKey.startsWith( 'generator_' ) ) {
			return fieldKey;
		}
		return `gen_${ generatorId }_${ fieldKey }`;
	};

	/**
	 * Gets current value for a schema field.
	 *
	 * @param {string} fieldKey Schema field key.
	 * @param {Object} fieldDef Field definition.
	 *
	 * @return {*} Current value.
	 */
	const getValue = ( fieldKey, fieldDef ) => {
		const attrKey = getAttributeKey( fieldKey );

		if ( attrKey in attributes ) {
			return attributes[ attrKey ];
		}

		return fieldDef.default ?? '';
	};

	/**
	 * Creates onChange handler for a schema field.
	 *
	 * @param {string} fieldKey Schema field key.
	 *
	 * @return {Function} Change handler.
	 */
	const createOnChange = ( fieldKey ) => ( newValue ) => {
		const attrKey = getAttributeKey( fieldKey );
		setAttributes( { [ attrKey ]: newValue } );
	};

	return (
		<Fragment>
			{ Object.entries( schema ).map( ( [ fieldKey, fieldDef ] ) => (
				<SchemaControl
					key={ fieldKey }
					fieldKey={ fieldKey }
					fieldDef={ fieldDef }
					value={ getValue( fieldKey, fieldDef ) }
					onChange={ createOnChange( fieldKey ) }
					generatorId={ generatorId }
				/>
			) ) }
		</Fragment>
	);
}

/**
 * Renders a notice when no schema is available.
 *
 * @param {Object} props               Component props.
 * @param {string} props.generatorId   Generator ID.
 * @param {string} props.generatorName Generator display name.
 *
 * @return {JSX.Element} Notice element.
 */
export function NoSchemaNotice( { generatorId, generatorName } ) {
	return (
		<BaseControl className="jfb-generator-no-schema-notice">
			<p>
				{ __(
					'This generator does not have a configuration schema.',
					'jet-form-builder'
				) }
			</p>
			<p>
				<small>
					{ __( 'Generator ID:', 'jet-form-builder' ) } { generatorId }
				</small>
			</p>
		</BaseControl>
	);
}

/**
 * Validates values against schema definitions.
 *
 * @param {Object} schema   Generator schema.
 * @param {Object} values   Values to validate.
 *
 * @return {Object} Validation result { valid: boolean, errors: Object }.
 */
export function validateAgainstSchema( schema, values ) {
	const errors = {};

	Object.entries( schema ).forEach( ( [ fieldKey, fieldDef ] ) => {
		const value = values[ fieldKey ];

		// Required check
		if ( fieldDef.required && ( value === undefined || value === '' ) ) {
			errors[ fieldKey ] = __( 'This field is required.', 'jet-form-builder' );
			return;
		}

		// Skip further validation if empty and not required
		if ( value === undefined || value === '' ) {
			return;
		}

		// Type-specific validation
		switch ( fieldDef.type ) {
			case 'number':
				if ( isNaN( Number( value ) ) ) {
					errors[ fieldKey ] = __( 'Must be a valid number.', 'jet-form-builder' );
				} else {
					const numValue = Number( value );
					if ( fieldDef.min !== undefined && numValue < fieldDef.min ) {
						errors[ fieldKey ] = `${ __( 'Minimum value:', 'jet-form-builder' ) } ${ fieldDef.min }`;
					}
					if ( fieldDef.max !== undefined && numValue > fieldDef.max ) {
						errors[ fieldKey ] = `${ __( 'Maximum value:', 'jet-form-builder' ) } ${ fieldDef.max }`;
					}
				}
				break;

			case 'boolean':
				if ( typeof value !== 'boolean' ) {
					// Try to coerce
					if ( value !== 'true' && value !== 'false' && value !== 0 && value !== 1 ) {
						errors[ fieldKey ] = __( 'Must be true or false.', 'jet-form-builder' );
					}
				}
				break;
		}
	} );

	return {
		valid: Object.keys( errors ).length === 0,
		errors,
	};
}

export default {
	SchemaBasedControls,
	SchemaControl,
	NoSchemaNotice,
	validateAgainstSchema,
};
