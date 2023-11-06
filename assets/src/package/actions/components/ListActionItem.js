import EditActionSettingsButton from './EditActionSettingsButton';
import ActionItemWrapper from './ActionItemWrapper';
import ActionItemFooter from './ActionItemFooter';
import ActionItemHeader from './ActionItemHeader';
import SelectActionsControl from './SelectActionsControl';
import EditActionConditionsButton from './EditActionConditionsButton';
import ActionItemDetails from './ActionItemDetails';
import ActionItemMoreButton from './ActionItemMoreButton';

const {
	      CardBody,
	      Flex,
      } = wp.components;

function ListActionItem() {
	return <ActionItemWrapper>
		<ActionItemHeader/>
		<CardBody>
			<div>
				<SelectActionsControl/>
			</div>
			<Flex style={ { marginTop: '0.5em' } } justify="space-between">
				<EditActionSettingsButton/>
				<EditActionConditionsButton/>
				<ActionItemMoreButton/>
				<ActionItemDetails/>
			</Flex>
		</CardBody>
		<ActionItemFooter/>
	</ActionItemWrapper>;
}

export default ListActionItem;