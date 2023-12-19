import BlockPlaceholder from './BlockPlaceholder';
import BlockAddPrevButton from './BlockAddPrevButton';
import BlockPrevButtonLabel from './BlockPrevButtonLabel';
import BlockVisibility from './BlockVisibility';
import BlockClassName from './BlockClassName';

const {
	      __,
      } = wp.i18n;

const {
	      InspectorAdvancedControls,
      } = wp.blockEditor;

function AdvancedFields() {
	return <InspectorAdvancedControls>
		<BlockPlaceholder/>
		<BlockAddPrevButton/>
		<BlockPrevButtonLabel/>
		<BlockVisibility/>
		<BlockClassName/>
	</InspectorAdvancedControls>;
}

export default AdvancedFields;