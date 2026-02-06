/**
 * Generator UI Infrastructure.
 *
 * Main entry point for the generator settings system.
 * Exports all components, utilities, and the Slot/Fill system.
 *
 * @package JetFormBuilder
 */

// Slot/Fill system for extensibility
export {
	GeneratorControlsFill,
	GeneratorControlsSlot,
	GeneratorAdditionalFill,
	GeneratorAdditionalSlot,
	BeforeGeneratorSelectorFill,
	BeforeGeneratorSelectorSlot,
	AfterGeneratorControlsFill,
	AfterGeneratorControlsSlot,
} from './slot-fill';

// Registry for custom controls
export {
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
} from './registry';

// Schema-based control renderer
export {
	SchemaBasedControls,
	NoSchemaNotice,
	validateAgainstSchema,
} from './schema-renderer';

// Main settings component
export {
	GeneratorSettings,
	GeneratorSettingsPanel,
} from './GeneratorSettings';

// Legacy controls for backward compatibility
export {
	LegacyControls,
	getLegacyFieldValue,
	hasLegacyFormat,
	parseLegacyFormat,
	migrateLegacyAttributes,
} from './legacy-controls';
