import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';

const {
	      Children,
	      cloneElement,
      } = wp.element;

const {
	      Flex,
	      withFilters,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      ActionsAfterNewButtonSlotFill,
	      ActionListItemContext,
	      ListActionItem,
	      AllProActionsLink,
	      AddActionButton,
      } = JetFBComponents;
const {
	      useActionsEdit,
      } = JetFBHooks;

const {
	      PluginDocumentSettingPanel,
      } = wp.editPost;

const ListActionItemFiltered = withFilters( 'jet.fb.action.item' )(
	ListActionItem,
);

function PluginActions() {
	const { actions } = useActionsEdit();

	const elements = actions.map(
		( action, index ) => <ActionListItemContext.Provider
			value={ { index, action } }
		>
			<ListActionItemFiltered/>
		</ActionListItemContext.Provider>,
	);

	return <PluginDocumentSettingPanel
		title={ __( 'Post Submit Actions', 'jet-form-builder' ) }
		className="jfb-actions-panel"
	>
		{ Children.map(
			elements,
			cloneElement,
		) }
		<ActionsAfterNewButtonSlotFill.Slot>
			{ fills => <Flex wrap className="jfb-actions-panel--buttons">
				<AddActionButton/>
				{ fills }
			</Flex> }
		</ActionsAfterNewButtonSlotFill.Slot>
		<AllProActionsLink/>
		<EditSettingsModal/>
		<EditConditionsModal/>
	</PluginDocumentSettingPanel>;
}

export default PluginActions;