import useFields from '../../blocks/hooks/useFields';

const {
	      SelectControl,
	      withFilters,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const BeforeConditionOptions = withFilters( 'jet.fb.block.conditions.options' )(
	props => {
		const { currentItem, changeCurrentItem } = props;

		const formFields = useFields( { placeholder: '--' } );

		switch ( currentItem.operator ) {
			case 'render_state':
				return null;
			default:
				return <SelectControl
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