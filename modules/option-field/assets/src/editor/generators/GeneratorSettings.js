/**
 * Generator Settings Component.
 *
 * Main component for rendering generator configuration UI.
 * Replaces the old FromGeneratorsFields.js with an extensible Slot/Fill architecture.
 *
 * Uses generator_args (object) attribute for storing generator settings.
 * Maintains backward compatibility with legacy generator_field (pipe-delimited string).
 *
 * @package JetFormBuilder
 */

const { SelectControl, PanelBody, Notice } = wp.components;
const { __ } = wp.i18n;
const { Fragment, useEffect, useState, useCallback, useMemo } = wp.element;

import {
	GeneratorControlsSlot,
	GeneratorAdditionalSlot,
	BeforeGeneratorSelectorSlot,
	AfterGeneratorControlsSlot,
} from './slot-fill';

import { getGeneratorControls } from './registry';
import { SchemaBasedControls, NoSchemaNotice } from './schema-renderer';
import LegacyControls from './legacy-controls';
import AutoUpdateControls from './components/AutoUpdateControls';

/**
 * Legacy generators that use pipe-delimited format for generator_field.
 * Used for migrating old data to generator_args.
 * Format: "field1|field2|field3|field4"
 */
const LEGACY_PIPE_FORMAT = {
	get_from_query:            [ 'query_id', 'value_field', 'label_field', 'calc_field' ],
	get_from_field:            [ 'field_name', 'sub_field' ],
	get_from_db:               [ 'meta_key' ],
	num_range:                 [ 'meta_key' ],
	get_from_booking_statuses: [ 'status_group[]' ],
};

/**
 * Get generator schemas from localized data.
 *
 * @return {Object} Generator schemas keyed by ID.
 */
function getGeneratorSchemas() {
	return window.JetFormOptionFieldData?.generator_schemas ?? {};
}

/**
 * Get generators list for select control.
 *
 * @return {Array} Array of { value, label } options.
 */
function getGeneratorsList() {
	return window.JetFormOptionFieldData?.generators_list ?? [];
}

/**
 * Parse legacy pipe-delimited generator_field into object.
 *
 * @param {string} generatorId    Generator ID.
 * @param {string} generatorField Pipe-delimited string.
 *
 * @return {Object} Parsed values as object.
 */
function parseLegacyPipeFormat( generatorId, generatorField ) {
	const fieldKeys = LEGACY_PIPE_FORMAT[ generatorId ];
	if ( ! fieldKeys || ! generatorField ) {
		return {};
	}

	const parts = generatorField.split( '|' );
	const result = {};

	fieldKeys.forEach( ( key, index ) => {
		// Keys ending with [] collect all remaining pipe parts as array
		if ( key.endsWith( '[]' ) ) {
			const realKey = key.slice( 0, -2 );
			const collected = parts.slice( index ).filter( ( v ) => v !== '' );
			if ( collected.length > 0 ) {
				result[ realKey ] = collected;
			}
			return;
		}
		if ( parts[ index ] !== undefined && parts[ index ] !== '' ) {
			result[ key ] = parts[ index ];
		}
	} );

	return result;
}

/**
 * Schema-based controls with generator_args storage.
 *
 * Wraps SchemaBasedControls to save/read from generator_args object attribute.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.generatorId   Generator ID.
 * @param {Object}   props.schema        Generator schema.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 *
 * @return {JSX.Element} Controls with generator_args storage.
 */
function GeneratorArgsControls( { generatorId, schema, attributes, setAttributes } ) {
	// Get current generator_args or empty object
	const generatorArgs = attributes.generator_args || {};

	// Check for legacy data migration on mount
	useEffect( () => {
		// If generator_args is empty but generator_field has data, migrate it
		if (
			Object.keys( generatorArgs ).length === 0 &&
			attributes.generator_field &&
			LEGACY_PIPE_FORMAT[ generatorId ]
		) {
			const migratedArgs = parseLegacyPipeFormat( generatorId, attributes.generator_field );

			// Legacy blocks stored these in separate block attributes
			if ( ! migratedArgs.calc_field && attributes.calculated_value_from_key ) {
				migratedArgs.calc_field = attributes.calculated_value_from_key;
			}

			if ( Object.keys( migratedArgs ).length > 0 ) {
				setAttributes( {
					generator_args: migratedArgs,
					// Keep generator_field for backward compatibility with older PHP
				} );
			}
		}
	}, [ generatorId ] ); // Only run when generator changes

	// Create wrapped setAttributes that updates generator_args
	const argsSetAttributes = useCallback(
		( newAttrs ) => {
			const updates = {};
			const newArgs = { ...generatorArgs };
			let hasArgUpdates = false;

			// Check for prefixed attributes (gen_<id>_<key>) and convert to generator_args
			const prefix = `gen_${ generatorId }_`;

			Object.keys( newAttrs ).forEach( ( attrKey ) => {
				if ( attrKey.startsWith( prefix ) ) {
					const fieldKey = attrKey.replace( prefix, '' );
					newArgs[ fieldKey ] = newAttrs[ attrKey ];
					hasArgUpdates = true;
				} else {
					// Pass through non-generator attributes
					updates[ attrKey ] = newAttrs[ attrKey ];
				}
			} );

			if ( hasArgUpdates ) {
				updates.generator_args = newArgs;
			}

			setAttributes( updates );
		},
		[ setAttributes, generatorArgs, generatorId ]
	);

	// Create virtual attributes with values from generator_args for SchemaBasedControls
	const virtualAttributes = useMemo( () => {
		const virtual = { ...attributes };
		const prefix = `gen_${ generatorId }_`;

		// Map generator_args values to prefixed attributes
		Object.keys( generatorArgs ).forEach( ( key ) => {
			virtual[ prefix + key ] = generatorArgs[ key ];
		} );

		return virtual;
	}, [ attributes, generatorArgs, generatorId ] );

	return (
		<SchemaBasedControls
			generatorId={ generatorId }
			schema={ schema }
			attributes={ virtualAttributes }
			setAttributes={ argsSetAttributes }
		/>
	);
}

/**
 * Main Generator Settings Component.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {Object}   props.editProps     Additional edit props (attrHelp, etc.).
 *
 * @return {JSX.Element} Generator settings UI.
 */
export function GeneratorSettings( props ) {
	const { attributes, setAttributes, editProps = {} } = props;
	const { generator_function: generatorId } = attributes;

	const [ errors, setErrors ] = useState( {} );

	const schemas = getGeneratorSchemas();
	const generatorsList = getGeneratorsList();

	const generatorData = schemas[ generatorId ] ?? {};
	const currentSchema = generatorData.schema ?? {};
	const supportsUpdate = generatorData.supports_update ?? false;
	const isLegacyGenerator = generatorData.legacy === true;

	const CustomControls = getGeneratorControls( generatorId );

	useEffect( () => {
		setErrors( {} );
	}, [ generatorId ] );

	const fillProps = {
		...props,
		generatorId,
		schema: currentSchema,
		errors,
		setErrors,
	};

	/**
	 * Handle generator change - clear old settings.
	 *
	 * @param {string} newGeneratorId New generator ID.
	 */
	const handleGeneratorChange = ( newGeneratorId ) => {
		setAttributes( {
			generator_function: newGeneratorId,
			generator_args: {}, // Clear args when changing generator
			generator_field: '', // Clear legacy field too
		} );
		setErrors( {} );
	};

	return (
		<Fragment>
			<BeforeGeneratorSelectorSlot fillProps={ fillProps } />

			<SelectControl
				label={ __( 'Generator Function', 'jet-form-builder' ) }
				value={ generatorId || '' }
				onChange={ handleGeneratorChange }
				options={ generatorsList }
				className="jfb-generator-selector"
			/>

			{ generatorId && (
				<Fragment>
					{ /* Priority 1: Custom registered controls */ }
					{ CustomControls && (
						<CustomControls
							attributes={ attributes }
							setAttributes={ setAttributes }
							schema={ currentSchema }
							generatorId={ generatorId }
							editProps={ editProps }
						/>
					) }

					{ /* Priority 2: Schema-based controls with generator_args storage */ }
					{ ! CustomControls && ! isLegacyGenerator && Object.keys( currentSchema ).length > 0 && (
						<GeneratorArgsControls
							generatorId={ generatorId }
							schema={ currentSchema }
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					) }

					{ /* Priority 3: Legacy controls fallback */ }
					{ ! CustomControls && isLegacyGenerator && (
						<LegacyControls
							attributes={ attributes }
							setAttributes={ setAttributes }
							editProps={ editProps }
							generatorId={ generatorId }
						/>
					) }

					{ /* No schema notice */ }
					{ ! CustomControls && ! isLegacyGenerator && Object.keys( currentSchema ).length === 0 && (
						<NoSchemaNotice
							generatorId={ generatorId }
							generatorName={ generatorData.name }
						/>
					) }

					<GeneratorControlsSlot fillProps={ fillProps } />
					<GeneratorAdditionalSlot fillProps={ fillProps } />

					<AutoUpdateControls
						attributes={ attributes }
						setAttributes={ setAttributes }
						supportsUpdate={ supportsUpdate }
					/>
				</Fragment>
			) }

			<AfterGeneratorControlsSlot fillProps={ fillProps } />

			{ Object.keys( errors ).length > 0 && (
				<Notice status="error" isDismissible={ false } className="jfb-generator-errors">
					<ul>
						{ Object.entries( errors ).map( ( [ field, message ] ) => (
							<li key={ field }>
								<strong>{ field }:</strong> { message }
							</li>
						) ) }
					</ul>
				</Notice>
			) }
		</Fragment>
	);
}

/**
 * Wrapper component that includes PanelBody.
 *
 * @param {Object} props Component props (same as GeneratorSettings).
 *
 * @return {JSX.Element} Panel with generator settings.
 */
export function GeneratorSettingsPanel( props ) {
	const { attributes } = props;
	const { generator_function: generatorId } = attributes;

	return (
		<PanelBody
			title={ __( 'Generate Options', 'jet-form-builder' ) }
			initialOpen={ !! generatorId }
			className="jfb-generator-settings-panel"
		>
			<GeneratorSettings { ...props } />
		</PanelBody>
	);
}

export default GeneratorSettings;
