import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';
import {
	Flex,
	withFilters,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Sortable } from 'jet-form-builder-components';
import { Fragment } from '@wordpress/element';
import { styled } from '@linaria/react';

const {
	      ActionsAfterNewButtonSlotFill,
	      ActionListItemContext,
	      ListActionItem,
	      AllProActionsLink,
	      AddActionButton,
      } = JetFBComponents;
const {
	      useActions,
      } = JetFBHooks;

const ListActionItemFiltered = withFilters( 'jet.fb.action.item' )(
	ListActionItem,
);

const FlexSortable = styled( Sortable )`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

function PluginActions() {
	const [ actions, setActions ] = useActions();

	return <PluginDocumentSettingPanel
		title={ __( 'Post Submit Actions', 'jet-form-builder' ) }
		className="jfb-actions-panel"
	>
		<FlexSortable
			list={ actions }
			setList={ setActions }
			direction="vertical"
			handle=".jfb-action-handle"
		>
			{ actions.map( ( action, index ) => <Fragment key={ action.id }>
					<ActionListItemContext.Provider
						value={ { index, action } }
					>
						<ListActionItemFiltered/>
					</ActionListItemContext.Provider>
				</Fragment>,
			) }
		</FlexSortable>
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