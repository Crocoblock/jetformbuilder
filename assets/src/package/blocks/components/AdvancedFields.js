import BlockPlaceholder from './BlockPlaceholder';
import BlockAddPrevButton from './BlockAddPrevButton';
import BlockPrevButtonLabel from './BlockPrevButtonLabel';
import BlockVisibility from './BlockVisibility';
import BlockClassName from './BlockClassName';

const {
	      __,
      } = wp.i18n;

const {
	      InspectorControls,
      } = wp.blockEditor;

function AdvancedFields() {
	return <InspectorControls group="advanced">
		<BlockPlaceholder/>
		<BlockAddPrevButton/>
		<BlockPrevButtonLabel/>
		<BlockVisibility/>
		<BlockClassName/>
	</InspectorControls>;
}

export default AdvancedFields;