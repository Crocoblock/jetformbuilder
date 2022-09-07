import BlockPlaceholder from './BlockPlaceholder';
import BlockAddPrevButton from './BlockAddPrevButton';
import BlockPrevButtonLabel from './BlockPrevButtonLabel';
import BlockVisibility from './BlockVisibility';
import BlockClassName from './BlockClassName';

const {
	      PanelBody,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function AdvancedFields() {
	return <PanelBody
		title={ __( 'Advanced', 'jet-form-builder' ) }
		key={ 'jet-form-advanced-fields' }
		initialOpen={ false }
	>
		<BlockPlaceholder/>
		<BlockAddPrevButton/>
		<BlockPrevButtonLabel/>
		<BlockVisibility/>
		<BlockClassName/>
	</PanelBody>;
}

export default AdvancedFields;