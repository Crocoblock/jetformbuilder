import BlockLabel from './BlockLabel';
import BlockName from './BlockName';
import BlockDescription from './BlockDescription';
import BlockDefaultValue from './BlockDefaultValue';

const {
	      PanelBody,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function GeneralFields( { hasMacro = true } ) {
	return <PanelBody title={ __( 'General', 'jet-form-builder' ) }
	                  key={ 'jet-form-general-fields' }>
		<BlockLabel/>
		<BlockName/>
		<BlockDescription/>
		<BlockDefaultValue hasMacro={ hasMacro } />
	</PanelBody>;
}

export default GeneralFields;