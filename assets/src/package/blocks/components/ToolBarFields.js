import ToolBarDefault from './ToolBarDefault';
import BlockRequired from './BlockRequired';

function ToolBarFields( { children = null } ) {
	return <>
		<ToolBarDefault>
			{ children }
		</ToolBarDefault>
		<BlockRequired/>
	</>;
}

export default ToolBarFields;