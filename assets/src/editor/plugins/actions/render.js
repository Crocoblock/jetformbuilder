import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';
import {
	Flex,
	withFilters,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { Sortable } from 'jet-form-builder-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@linaria/react';
import {
	AddActionButton,
	AllProActionsLink,
	ListActionItem,
	ActionListItemContext,
	ActionsAfterNewButtonSlotFill,
	useActions,
	getActionGroups,
	flattenActionGroups,
} from 'jet-form-builder-actions';

const ListActionItemFiltered = withFilters('jet.fb.action.item')(
	ListActionItem,
);

const FlexSortable = styled(Sortable)`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const ActionsPanel = styled(PluginDocumentSettingPanel)`
	border: 1px solid var(
		--wp-components-color-accent,
		var(--wp-admin-theme-color, #3858e9)
	);
	margin-bottom: 1px;

	.components-panel__body-title {
		background-color: var(
			--wp-components-color-accent,
			var(--wp-admin-theme-color, #3858e9)
		);

		.components-button {
			color: var(--wp-components-color-accent-inverted, #fff);
		}
	}

	&.is-opened {
		background-color: rgba(var(--wp-admin-theme-color--rgb), 0.07);

		.components-panel__body-title {
			background-color: transparent;

			.components-button {
				color: #1e1e1e;
			}
		}
	}

	.components-panel__body-title:hover {
		background-color: var(
			--wp-components-color-accent,
			var(--wp-admin-theme-color, #3858e9)
		);
		opacity: 0.7;

		.components-button {
			color: var(--wp-components-color-accent-inverted, #fff);
		}
	}
`;

const StyledFlex = styled(Flex)`
	&.buddypress-active {
		height: auto;
	}
`;

const ActionGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	&.has-children {
		padding: 8px;
		background-color: #fff;
		border: 1px solid #ddd;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
	}

	&.has-children > .jet-form-action:not(:first-child) {
		margin-left: 24px;
		padding-left:5px;
		width: calc(100% - 24px);
	}

	&.sortable-chosen {
		box-shadow:
			var(
				--wp-components-color-accent,
				var(--wp-admin-theme-color, #3858e9)
			)
			0 1px 5px;
	}
`;

function PluginActions() {
	const [actions, setActions] = useActions();
	const actionGroups = getActionGroups(actions);

	const isBuddypress = document.body.classList.contains('wp-admin') &&
		(
			document.body.classList.contains('buddypress') ||
			document.body.classList.contains('theme-buddyboss-theme')
		);

	return (
		<ActionsPanel
			title={__('Post Submit Actions', 'jet-form-builder')}
		>
			<StyledFlex
				direction="column"
				gap={3}
				className={isBuddypress ? 'buddypress-active' : ''}
			>
				<FlexSortable
					list={actionGroups}
					setList={groups => setActions(
						flattenActionGroups(groups),
					)}
					direction="vertical"
					handle=".jfb-action-handle"
					draggable=".jet-form-action-group"
				>
					{actionGroups.map(group => {
						const hasChildren = 1 < group.items.length;

						return (
							<ActionGroup
								key={group.id}
								className={[
									'jet-form-action-group',
									hasChildren && 'has-children',
								].filter(Boolean).join(' ')}
							>
								{group.items.map(
									({ action, index }) => (
										<ActionListItemContext.Provider
											key={action.id}
											value={{ index, action }}
										>
											<ListActionItemFiltered />
										</ActionListItemContext.Provider>
									),
								)}
							</ActionGroup>
						);
					})}
				</FlexSortable>

				<ActionsAfterNewButtonSlotFill.Slot>
					{fills => (
						<Flex className="jfb-actions-panel--buttons">
							<AddActionButton />
							{fills}
						</Flex>
					)}
				</ActionsAfterNewButtonSlotFill.Slot>
			</StyledFlex>

			<AllProActionsLink />
			<EditSettingsModal />
			<EditConditionsModal />
		</ActionsPanel>
	);
}

export default PluginActions;