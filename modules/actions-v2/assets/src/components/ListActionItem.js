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

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ListActionItem = ListActionItem;

export default ListActionItem;