import ActionItemWrapper from './ActionItemWrapper';
import ActionItemFooter from './ActionItemFooter';
import ActionItemHeader from './ActionItemHeader';
import ActionTitle from './ActionTitle';
import EditActionConditionsButton from './EditActionConditionsButton';
import ActionItemMoreButton from './ActionItemMoreButton';
import { CardBody, Flex, FlexBlock } from '@wordpress/components';
import { dragHandle, Icon } from '@wordpress/icons';
import { styled } from '@linaria/react';

const CursoredIcon = styled( Icon )`
	cursor: grab;
`;

function ListActionItem() {
	return <>
		<ActionItemWrapper>
			<ActionItemHeader/>
			<CardBody>
				<Flex align="center">
					<CursoredIcon
						className="jfb-action-handle"
						icon={ dragHandle }
					/>
					<FlexBlock>
						<ActionTitle/>
						<Flex style={ { marginTop: '0.5em' } }
						      justify="space-between">
							<EditActionConditionsButton/>
							<ActionItemMoreButton/>
						</Flex>
					</FlexBlock>
				</Flex>
			</CardBody>
			<ActionItemFooter/>
		</ActionItemWrapper>
	</>;
}

export default ListActionItem;