/**
 * Legacy Controls Component.
 *
 * Provides backward compatibility for generators that don't have
 * new schema definitions. Renders the old-style "Field Name" input
 * and applies existing filter hooks.
 *
 * @package JetFormBuilder
 */

const {
	TextControl,
	BaseControl,
	__experimentalNumberControl,
} = wp.components;

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;
const { Fragment } = wp.element;

// Handle NumberControl availability
let NumberControl = wp.components.NumberControl;
if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

/**
 * Number Range Manual Controls.
 *
 * Special handling for the num_range_manual generator which has
 * dedicated numeric inputs.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 *
 * @return {JSX.Element} Number range controls.
 */
function NumRangeManualControls( { attributes, setAttributes } ) {
	return (
		<Fragment>
			<BaseControl label={ __( 'Start of range', 'jet-form-builder' ) }>
				<NumberControl
					labelPosition="top"
					step={ 0.01 }
					value={ attributes.generator_numbers_min }
					onChange={ ( newValue ) => {
						setAttributes( { generator_numbers_min: Number( newValue ) } );
					} }
				/>
			</BaseControl>

			<BaseControl label={ __( 'End of range', 'jet-form-builder' ) }>
				<NumberControl
					labelPosition="top"
					step={ 0.01 }
					value={ attributes.generator_numbers_max }
					onChange={ ( newValue ) => {
						setAttributes( { generator_numbers_max: Number( newValue ) } );
					} }
				/>
			</BaseControl>

			<BaseControl label={ __( 'Step', 'jet-form-builder' ) }>
				<NumberControl
					labelPosition="top"
					step={ 0.01 }
					value={ attributes.generator_numbers_step }
					onChange={ ( newValue ) => {
						setAttributes( { generator_numbers_step: Number( newValue ) } );
					} }
				/>
			</BaseControl>
		</Fragment>
	);
}

/**
 * Default Legacy Controls.
 *
 * Renders the standard "Field Name" input with additional
 * "Value from meta field" and "Calculated value from meta field" inputs.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 * @param {Object}   props.editProps     Additional edit props.
 * @param {string}   props.generatorId   Generator ID.
 *
 * @return {JSX.Element} Legacy controls.
 */
function DefaultLegacyControls( { attributes, setAttributes, editProps, generatorId } ) {
	const attrHelp = editProps?.attrHelp ?? ( () => '' );

	// Main field control - apply filter for extensions
	const mainControl = applyFilters(
		'jet.fb.select.radio.check.generator.controls',
		<TextControl
			key="generator_field"
			label={ __( 'Field Name', 'jet-form-builder' ) }
			value={ attributes.generator_field || '' }
			help={ attrHelp( 'generator_field', attributes ) }
			onChange={ ( newValue ) => {
				setAttributes( { generator_field: newValue } );
			} }
		/>,
		generatorId,
		{ attributes, setAttributes, editProps }
	);

	// Additional controls - apply filter for extensions
	const additionalControls = applyFilters(
		'jet.fb.select.radio.check.generator.additionalControls',
		<Fragment>
			<TextControl
				key="value_from_key"
				label={ __( 'Value from meta field', 'jet-form-builder' ) }
				help={ attrHelp( 'value_from_meta' ) }
				value={ attributes.value_from_key || '' }
				onChange={ ( value_from_key ) => {
					setAttributes( { value_from_key } );
				} }
			/>
			<TextControl
				key="calculated_value_from_key"
				label={ __( 'Calculated value from meta field', 'jet-form-builder' ) }
				help={ attrHelp( 'calculated_value_from_key' ) }
				value={ attributes.calculated_value_from_key || '' }
				onChange={ ( newValue ) => {
					setAttributes( { calculated_value_from_key: newValue } );
				} }
			/>
		</Fragment>,
		generatorId,
		{ attributes, setAttributes, editProps }
	);

	return (
		<Fragment>
			{ mainControl }
			{ additionalControls }
		</Fragment>
	);
}

/**
 * Legacy Controls Component.
 *
 * Main component that determines which legacy controls to render
 * based on the generator type.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 * @param {Object}   props.editProps     Additional edit props.
 * @param {string}   props.generatorId   Generator ID.
 *
 * @return {JSX.Element} Appropriate legacy controls for the generator.
 */
export function LegacyControls( props ) {
	const { generatorId } = props;

	// Special case: num_range_manual has its own dedicated controls
	if ( generatorId === 'num_range_manual' ) {
		return <NumRangeManualControls { ...props } />;
	}

	// Default legacy controls for all other generators
	return <DefaultLegacyControls { ...props } />;
}

/**
 * Get legacy field value with migration check.
 *
 * Checks if legacy data needs to be migrated and returns
 * the appropriate value.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {string} Field value.
 */
export function getLegacyFieldValue( attributes, generatorId ) {
	// Check for migrated legacy field
	if ( attributes._legacy_generator_field ) {
		return attributes._legacy_generator_field;
	}

	// Return current generator_field value
	return attributes.generator_field || '';
}

/**
 * Check if attributes contain legacy format that can be migrated.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if migration is possible.
 */
export function hasLegacyFormat( attributes, generatorId ) {
	const value = attributes.generator_field || '';

	// JetEngine Query uses pipe-delimited format
	if ( generatorId === 'get_from_query' && value.includes( '|' ) ) {
		return true;
	}

	return false;
}

/**
 * Parse legacy format to structured settings.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {Object} Parsed settings.
 */
export function parseLegacyFormat( attributes, generatorId ) {
	const value = attributes.generator_field || '';

	if ( ! value ) {
		return {};
	}

	switch ( generatorId ) {
		case 'get_from_query':
			const parts = value.split( '|' );
			return {
				query_id: parts[ 0 ] || '',
				value_field: parts[ 1 ] || 'ID',
				label_field: parts[ 2 ] || 'post_title',
				calc_field: parts[ 3 ] || '',
			};

		default:
			return { generator_field: value };
	}
}

/**
 * Migrate legacy attributes to new format.
 *
 * Should be called in useEffect when block loads.
 *
 * @param {Object}   attributes    Block attributes.
 * @param {Function} setAttributes Set attributes function.
 * @param {string}   generatorId   Generator ID.
 */
export function migrateLegacyAttributes( attributes, setAttributes, generatorId ) {
	if ( ! hasLegacyFormat( attributes, generatorId ) ) {
		return;
	}

	const parsed = parseLegacyFormat( attributes, generatorId );

	if ( Object.keys( parsed ).length === 0 ) {
		return;
	}

	// Build new attributes with prefixed keys
	const newAttrs = {};

	Object.entries( parsed ).forEach( ( [ key, value ] ) => {
		// Skip generator_field - it's the original key
		if ( key === 'generator_field' ) {
			return;
		}

		newAttrs[ `gen_${ generatorId }_${ key }` ] = value;
	} );

	// Store original value for reference
	newAttrs._legacy_generator_field = attributes.generator_field;

	// Clear the legacy field to prevent re-migration
	// Actually, we keep it for backward compatibility but mark as migrated
	// newAttrs.generator_field = '';

	setAttributes( newAttrs );
}

export default LegacyControls;
