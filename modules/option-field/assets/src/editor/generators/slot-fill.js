/**
 * Slot/Fill system for generator controls.
 *
 * Provides extensibility points for generator-specific UI controls
 * using WordPress Gutenberg's Slot/Fill pattern.
 *
 * @package JetFormBuilder
 */

const { createSlotFill } = wp.components;

/**
 * Main slot for generator-specific controls.
 *
 * Each generator type can register a Fill for this slot to provide
 * its own custom controls. The Fill receives props via fillProps:
 * - attributes: Block attributes
 * - setAttributes: Function to update attributes
 * - generatorId: Current generator ID
 * - schema: Generator schema definition
 *
 * Usage in a Fill:
 * ```js
 * import { GeneratorControlsFill } from './slot-fill';
 *
 * const MyGeneratorControls = () => (
 *   <GeneratorControlsFill>
 *     { ( { attributes, setAttributes, generatorId, schema } ) => (
 *       generatorId === 'my_generator' && (
 *         <TextControl ... />
 *       )
 *     ) }
 *   </GeneratorControlsFill>
 * );
 * ```
 */
export const {
	Fill: GeneratorControlsFill,
	Slot: GeneratorControlsSlot,
} = createSlotFill( 'JFBGeneratorControls' );

/**
 * Slot for additional/common controls after generator-specific ones.
 *
 * This slot is rendered after the main generator controls and can be used
 * for controls that are common across multiple generators, like:
 * - Value from meta field
 * - Calculated value from meta field
 *
 * Usage:
 * ```js
 * import { GeneratorAdditionalFill } from './slot-fill';
 *
 * const AdditionalControls = () => (
 *   <GeneratorAdditionalFill>
 *     { ( props ) => (
 *       <TextControl ... />
 *     ) }
 *   </GeneratorAdditionalFill>
 * );
 * ```
 */
export const {
	Fill: GeneratorAdditionalFill,
	Slot: GeneratorAdditionalSlot,
} = createSlotFill( 'JFBGeneratorAdditional' );

/**
 * Slot for before generator selector.
 *
 * Can be used to add content before the generator type dropdown,
 * like notices or informational text.
 */
export const {
	Fill: BeforeGeneratorSelectorFill,
	Slot: BeforeGeneratorSelectorSlot,
} = createSlotFill( 'JFBBeforeGeneratorSelector' );

/**
 * Slot for after all generator controls.
 *
 * Rendered at the very end of the generator settings panel.
 * Useful for adding debug info, help links, etc.
 */
export const {
	Fill: AfterGeneratorControlsFill,
	Slot: AfterGeneratorControlsSlot,
} = createSlotFill( 'JFBAfterGeneratorControls' );

/**
 * Export all slots and fills for external use.
 */
export default {
	GeneratorControlsFill,
	GeneratorControlsSlot,
	GeneratorAdditionalFill,
	GeneratorAdditionalSlot,
	BeforeGeneratorSelectorFill,
	BeforeGeneratorSelectorSlot,
	AfterGeneratorControlsFill,
	AfterGeneratorControlsSlot,
};
