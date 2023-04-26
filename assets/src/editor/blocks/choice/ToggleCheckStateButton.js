import useCheckedChoiceState from './useCheckedChoiceState';

const {
	      ToolbarButton,
      } = wp.components;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      __,
      } = wp.i18n;

function ToggleCheckStateButton() {
	const [ isChecked, toggleChecked ] = useCheckedChoiceState();

	return <ToolbarButton
		icon={ <SVG xmlns="http://www.w3.org/2000/svg"
		            viewBox="0 0 24 24">
			<Path
				d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"/>
		</SVG> }
		title={ isChecked
		        ? __( 'Show unchecked state', 'jet-form-builder' )
		        : __( 'Show checked state', 'jet-form-builder' )
		}
		onClick={ () => toggleChecked() }
		isActive={ isChecked }
	/>;
}

export default ToggleCheckStateButton;