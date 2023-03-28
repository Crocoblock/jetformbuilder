import ToolBarDefault from './ToolBarDefault';
import BlockRequired from './BlockRequired';

function ToolBarFields( { children = null } ) {
	return <ToolBarDefault>
		<BlockRequired/>
		{ children }
	</ToolBarDefault>;
}

export default ToolBarFields;