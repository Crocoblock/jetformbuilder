import useCurrentSanitizer from '../hooks/useCurrentSanitizer';

const {
	      isEmpty,
      } = JetFBActions;

const {
	      Button,
      } = wp.components;

function SanitizeValueButton() {
	const {
		      control,
		      remove,
		      current,
		      addNew,
	      } = useCurrentSanitizer();

	const isActive = !isEmpty( current );

	return <Button
		onClick={ ( event ) => {
			event.stopPropagation();

			isActive ? remove() : addNew();
		} }
		className={ [
			'components-dropdown-menu__menu-item',
			'has-text',
			isActive ? 'is-active' : '',
		].join( ' ' ) }
		icon={ control.icon }
		aria-checked={ isActive }
		role="menuitemcheckbox"
		shortcut={ control.help || '' }
	>
		{ control.label }
	</Button>;
}

export default SanitizeValueButton;