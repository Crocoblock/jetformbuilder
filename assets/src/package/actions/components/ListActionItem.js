import ActionItemWrapper from './ActionItemWrapper';
import ActionItemFooter from './ActionItemFooter';
import ActionItemHeader from './ActionItemHeader';
import ActionItemBody from './ActionItemBody';

function ListActionItem() {
	return <>
		<ActionItemWrapper>
			<ActionItemHeader/>
			<ActionItemBody/>
			<ActionItemFooter/>
		</ActionItemWrapper>
	</>;
}

export default ListActionItem;