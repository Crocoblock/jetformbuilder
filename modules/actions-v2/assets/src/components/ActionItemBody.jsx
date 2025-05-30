import { Flex, CardBody } from '@wordpress/components';
import { dragHandle, Icon } from '@wordpress/icons';
import ActionTitle from './ActionTitle';
import EditActionSettingsButton from './EditActionSettingsButton';
import EditActionConditionsButton from './EditActionConditionsButton';
import ToggleActionExecutionButton from './ToggleActionExecutionButton';
import DeleteActionButton from './DeleteActionButton';
import { styled } from '@linaria/react';
import { useSelect } from '@wordpress/data';
import useLoopedAction from '../hooks/useLoopedAction';

const CursoredIcon = styled( Icon )`
	cursor: not-allowed;
	opacity: 0.3;

	.jet-form-action.draggable & {
		cursor: grab;
		opacity: 1;
	}
`;

const FlexActionButtons = styled( Flex )`
	position: absolute;
	opacity: 0;
	transition: 0.2s ease-in-out;
	top: 0;
	right: 0;
	height: 100%;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 15%);
	padding: 0 4px 0 25px;

	&& {
		width: auto;
	}

	.rtl & {
		left: 0;
		padding: 0 25px 0 4px;
	}
`;

const ActionCardBody = styled( CardBody )`
	position: relative;

	&:hover {
		${ FlexActionButtons } {
			opacity: 1;
		}
	}
`;

function ActionItemBody() {
	const { action } = useLoopedAction();

	const actionType = useSelect( select => (
		select( 'jet-forms/actions' ).getAction( action.type )
	), [ action.type ] );

	return <ActionCardBody>
		{ undefined === actionType && <small>Action <b>"{ action.type }"</b> is not supported</small> }
		{ undefined !== actionType && <>
			<Flex align="center" justify="flex-start" gap={ 1 }>
				<CursoredIcon
					className={ 'jfb-action-handle' }
					icon={ dragHandle }
				/>
				<ActionTitle/>
			</Flex>
			<FlexActionButtons justify="flex-end">
				<EditActionSettingsButton/>
				{ !actionType.disableConditions && <EditActionConditionsButton/> }
				<ToggleActionExecutionButton/>
				<DeleteActionButton/>
			</FlexActionButtons>
		</> }
	</ActionCardBody>;
}

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionItemBody = ActionItemBody;

export default ActionItemBody;