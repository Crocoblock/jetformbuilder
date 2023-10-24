import variation from './variation';
import SwitcherRenderStateControls from './SwitcherRenderStateControls';

const {
	      registerBlockVariation,
      } = wp.blocks;

const {
	      registerPlugin,
      } = wp.plugins;

const {
	      ActionButtonBlockEditSlotFills,
      } = JetFBComponents;

registerBlockVariation( 'jet-forms/submit-field', variation );

registerPlugin(
	'jf-action-button-change-state',
	{
		render: () => <ActionButtonBlockEditSlotFills
			action_type="switch-state"
		>
			{ ( props ) => <SwitcherRenderStateControls { ...props }/> }
		</ActionButtonBlockEditSlotFills>,
	},
);