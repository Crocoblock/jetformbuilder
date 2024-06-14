import ActionItemWrapper from './ActionItemWrapper';
import ActionItemFooter from './ActionItemFooter';
import ActionItemHeader from './ActionItemHeader';
import ActionTitle from './ActionTitle';
import EditActionConditionsButton from './EditActionConditionsButton';
import { CardBody, Flex } from '@wordpress/components';
import { dragHandle, Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';
import EditActionSettingsButton from './EditActionSettingsButton';
import ToggleActionExecutionButton from './ToggleActionExecutionButton';
import DeleteActionButton from './DeleteActionButton';

const CursoredIcon = styled( Icon )`
    cursor: grab;
`;

const FlexActionButtons = styled( Flex )`
    position: absolute;
    opacity: 0;
    transition: 0.2s ease-in-out;
    top: 0;
    right: 0;
	height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%);
	padding: 0 4px;

    && {
        width: auto;
    }

    .rtl & {
        left: 0;
    }
`;

const ActionCardBody = styled( CardBody )`
    position: relative;

    &:hover {
        ${ FlexActionButtons } {
            opacity: 1;
        }
    }
`

function ListActionItem() {
	return <>
		<ActionItemWrapper>
			<ActionItemHeader/>
			<ActionCardBody>
				<Flex align="center" justify="flex-start">
					<CursoredIcon
						className="jfb-action-handle"
						icon={ dragHandle }
					/>
					<ActionTitle/>
				</Flex>
				<FlexActionButtons justify="flex-end">
					<EditActionSettingsButton/>
					<EditActionConditionsButton/>
					<ToggleActionExecutionButton/>
					<DeleteActionButton/>
				</FlexActionButtons>
			</ActionCardBody>
			<ActionItemFooter/>
		</ActionItemWrapper>
	</>;
}

export default ListActionItem;