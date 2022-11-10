import useUniqKey from '../../blocks/hooks/useUniqKey';
import getFormFieldsBlocks from '../../blocks/helpers/getFormFieldsBlocks';

const {
	      SelectControl,
	      withFilters,
      } = wp.components;

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;

const BeforeConditionOptions = withFilters( 'jet.fb.block.conditions.options' )(
	props => {
		const { currentItem, changeCurrentItem } = props;

		const uniqKey        = useUniqKey();
		const [ formFields ] = useState(
			() => getFormFieldsBlocks( [], '--' ),
		);

		switch ( currentItem.operator ) {
			case 'render_state':
				return null;
			default:
				return <SelectControl
					key={ uniqKey( 'SelectControl-field' ) }
					label={ __( 'Field', 'jet-form-builder' ) }
					labelPosition="side"
					value={ currentItem.field }
					options={ formFields }
					onChange={ newValue => {
						changeCurrentItem( { field: newValue } );
					} }
				/>;
		}
	},
);

export default BeforeConditionOptions;