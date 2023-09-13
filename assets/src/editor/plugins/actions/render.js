import { defaultActions } from './options';
import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';

const {
	      useEffect,
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
	      useSelect,
      } = wp.data;

const {
	      PluginDocumentSettingPanel,
      } = wp.editPost;

let isSetDefault = false;

const ListActionItemFiltered = withFilters( 'jet.fb.action.item' )(
	ListActionItem,
);

function PluginActions() {
	const { actions, setActions } = useActionsEdit();

	const isNewPost = useSelect(
		select => select( 'core/editor' ).isEditedPostNew(),
		[],
	);

	useEffect( () => {
		if ( 0 === actions.length && isNewPost && !isSetDefault ) {
			setActions( defaultActions );
			isSetDefault = true;
		}
	}, [] );

	const elements = actions.map(
		( action, index ) => <ActionListItemContext.Provider
			value={ { index, action } }
		>
			<ListActionItemFiltered/>
		</ActionListItemContext.Provider>,
	);

	return <PluginDocumentSettingPanel
		title={ __( 'Post Submit Actions', 'jet-form-builder' ) }
		icon="admin-plugins"
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