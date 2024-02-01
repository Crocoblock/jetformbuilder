const {
	      useContext,
      } = wp.element;
const {
	      TextControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

const {
	      RepeaterItemContext,
      } = JetFBComponents;

function FromManualOptionItem() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	return <>
		<TextControl
			label={ __( 'Label', 'jet-form-builder' ) }
			value={ currentItem.label }
			onChange={ label => changeCurrentItem( { label } ) }
		/>
		<TextControl
			label={ __( 'Value', 'jet-form-builder' ) }
			value={ currentItem.value }
			onChange={ value => changeCurrentItem( { value } ) }
		/>
		<TextControl
			label={ __( 'Calculate', 'jet-form-builder' ) }
			value={ currentItem.calculate }
			onChange={ calculate => changeCurrentItem( { calculate } ) }
		/>
	</>;
}

export default FromManualOptionItem;