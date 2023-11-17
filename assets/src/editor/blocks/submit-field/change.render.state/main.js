import variation from './variation';
import SwitcherRenderStateControls from './SwitcherRenderStateControls';

const {
	      registerBlockVariation,
      } = wp.blocks;

const {
	      addFilter,
      } = wp.hooks;

registerBlockVariation( 'jet-forms/submit-field', variation );

addFilter(
	'jet.fb.block.action-button.edit',
	'jet-form-builder/switch-state-variation',
	( DefaultEdit ) => props => {
		return 'switch-state' !== props.attributes?.action_type
		       ? <DefaultEdit { ...props } />
		       : <SwitcherRenderStateControls { ...props }/>;
	},
);