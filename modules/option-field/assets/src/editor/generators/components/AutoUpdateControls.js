/**
 * Auto-Update Controls Component.
 *
 * Renders controls for enabling cascading/auto-update behavior when a generator
 * supports dynamic updates based on other field values.
 *
 * @package JetFormBuilder
 */

const { ToggleControl, SelectControl, TextControl } = wp.components;
const { __ } = wp.i18n;
const { Fragment, useMemo } = wp.element;
const { select } = wp.data;

/**
 * Get form fields from block editor.
 * Extracts field name and label from all field blocks in the current form.
 *
 * @return {Array} Array of { name, label } objects.
 */
function getFormFields() {
	const blocks = select( 'core/block-editor' )?.getBlocks() ?? [];
	const fields = [];

	const extractFields = ( blocksList ) => {
		blocksList.forEach( ( block ) => {
			// Check if block has a 'name' attribute (it's a field)
			if ( block.attributes?.name ) {
				fields.push( {
					name: block.attributes.name,
					label: block.attributes.label || block.attributes.name,
					type: block.name,
				} );
			}

			// Recursively check inner blocks
			if ( block.innerBlocks?.length ) {
				extractFields( block.innerBlocks );
			}
		} );
	};

	extractFields( blocks );
	return fields;
}

/**
 * Auto-Update Controls.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {boolean}  props.supportsUpdate Whether generator supports auto-update.
 *
 * @return {JSX.Element|null} Controls or null if not supported.
 */
function AutoUpdateControls( { attributes, setAttributes, supportsUpdate } ) {
	if ( ! supportsUpdate ) {
		return null;
	}

	const {
		generator_auto_update: autoUpdate = false,
		generator_listen_field: listenField = '',
		generator_cache_timeout: cacheTimeout = 60,
	} = attributes;

	// Normalize listen_field to array for consistent handling
	const listenFieldArray = Array.isArray( listenField )
		? listenField
		: ( listenField ? [ listenField ] : [] );

	// Get available form fields for listening
	// useMemo to avoid recalculating on every render
	const fieldOptions = useMemo( () => {
		const formFields = getFormFields();

		return formFields.map( ( field ) => ( {
			value: field.name,
			label: `${ field.label } (${ field.name })`,
		} ) );
	}, [] ); // Empty deps - will be calculated once on mount

	return (
		<Fragment>
			<ToggleControl
				label={ __( 'Enable Auto-Update', 'jet-form-builder' ) }
				help={ __(
					'Update options dynamically when another field value changes.',
					'jet-form-builder'
				) }
				checked={ autoUpdate }
				onChange={ ( value ) => {
					setAttributes( {
						generator_auto_update: value,
						// Clear listen field if disabling
						...( ! value && { generator_listen_field: '' } ),
					} );
				} }
				className="jfb-auto-update-toggle"
			/>

			{ autoUpdate && (
				<SelectControl
					label={ __( 'Listen to Fields', 'jet-form-builder' ) }
					help={ __(
						'Select one or more fields to watch for changes.',
						'jet-form-builder'
					) }
					multiple
					value={ listenFieldArray }
					onChange={ ( values ) => {
						// Handle empty selection
						if ( ! values || values.length === 0 ) {
							setAttributes( { generator_listen_field: '' } );
							return;
						}

						// Store as string if single, array if multiple (backwards compat)
						setAttributes( {
							generator_listen_field: values.length === 1 ? values[ 0 ] : values,
						} );
					} }
					options={ fieldOptions }
					className="jfb-auto-update-field-selector"
				/>
			) }

		{ autoUpdate && (
			<TextControl
				label={ __( 'Cache Timeout (seconds)', 'jet-form-builder' ) }
				help={ __(
					'How long to cache results. Set to 0 to disable caching.',
					'jet-form-builder'
				) }
				type="number"
				min={ 0 }
				value={ cacheTimeout }
				onChange={ ( value ) => {
					setAttributes( {
						generator_cache_timeout: parseInt( value ) || 0,
					} );
				} }
			/>
		) }
		</Fragment>
	);
}

export default AutoUpdateControls;
