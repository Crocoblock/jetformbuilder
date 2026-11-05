import { Flex, CardBody } from '@wordpress/components';
import { dragHandle, Icon } from '@wordpress/icons';
import ActionTitle from './ActionTitle';
import EditActionSettingsButton from './EditActionSettingsButton';
import EditActionConditionsButton from './EditActionConditionsButton';
import ToggleActionExecutionButton from './ToggleActionExecutionButton';
import DeleteActionButton from './DeleteActionButton';
import { styled } from '@linaria/react';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import useLoopedAction from '../hooks/useLoopedAction';
import { isChildAction } from '../helpers/actionRelations';

const CursoredIcon = styled( Icon )`
	cursor: not-allowed;
	opacity: 0.3;
	flex-shrink: 0;

	.jet-form-action.draggable & {
		cursor: grab;
		opacity: 1;
	}
`;

const FlexActionButtons = styled( Flex )`
	flex-shrink: 0;

	&& {
		display: none;
		width: auto;
	}
`;

const ActionCardBody = styled( CardBody )`
	display: flex;
	align-items: center;
	gap: 4px;

	&:hover:not([data-title-editing="true"]) {
		${ FlexActionButtons } {
			display: flex;
		}
	}

	&[data-title-editing="true"] {
		${ FlexActionButtons } {
			display: none;
		}
	}
`;

const ActionContent = styled( Flex )`
	flex: 1;
	min-width: 0;
	min-height: 40px;
`;

const ActionTitleWrap = styled( Flex )`
	flex: 1;
	min-width: 0;
`;

function ActionItemBody() {
	const { action } = useLoopedAction();
	const isChild = isChildAction( action );
	const [ isTitleEditing, setIsTitleEditing ] = useState( false );

	const actionType = useSelect( select => (
		select( 'jet-forms/actions' ).getAction( action.type )
	), [ action.type ] );

	return <ActionCardBody data-title-editing={ isTitleEditing ? 'true' : undefined }>
		{ undefined === actionType && <Flex align="center" justify="space-between">
			<small>Action <b>&quot;{ action.type }&quot;</b> is not supported</small>
			<DeleteActionButton/>
		</Flex> }

		{ undefined !== actionType && <>
			<ActionContent align="center" justify="flex-start" gap={ 1 }>
				{ !isChild && <CursoredIcon
					className={ 'jfb-action-handle' }
					icon={ dragHandle }
				/> }
				<ActionTitleWrap align="center" justify="flex-start">
					<ActionTitle onEditingChange={ setIsTitleEditing }/>
				</ActionTitleWrap>
			</ActionContent>

			<FlexActionButtons justify="flex-end">
				<EditActionSettingsButton/>
				{ !isChild && <>
					{ !actionType.disableConditions && <EditActionConditionsButton/> }
					<ToggleActionExecutionButton/>
					<DeleteActionButton/>
				</> }
			</FlexActionButtons>
		</> }
	</ActionCardBody>;
}

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionItemBody = ActionItemBody;

export default ActionItemBody;
