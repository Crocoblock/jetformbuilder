import Tools from '../../tools';
import RepeaterItemContext from '../../repeater/context/repeater.item';
import getFieldsWithoutCurrent
	from '../../blocks/helpers/getFieldsWithoutCurrent';

const {
	      SelectControl,
      } = wp.components;
const {
	      useContext,
	      useMemo,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function ChooseRelatedField() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	const fields = useMemo(
		() => getFieldsWithoutCurrent(
			__( 'Custom value', 'jet-form-builder' ),
		),
		[],
	);

	return <SelectControl
		labelPosition="side"
		options={ fields }
		label={ __( 'Choose field', 'jet-form-builder' ) }
		value={ currentItem.field }
		onChange={ type => changeCurrentItem( { type } ) }
	/>;
}

export default ChooseRelatedField;