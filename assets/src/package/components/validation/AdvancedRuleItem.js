import Tools from '../../helpers/tools';
import RepeaterItemContext from '../../context/repeater.item';

const {
	      SelectControl,
	      TextControl,
      } = wp.components;
const {
	      useContext,
	      Fragment,
	      useState,
	      useEffect,
      } = wp.element;
const {
	      __,
      } = wp.i18n;
const {
	      rule_types,
      } = window.jetFormValidation;

function getLabel( type ) {
	switch ( type ) {
		case 'contain':
		case 'contain_not':
			return __( 'Symbols', 'jet-form-builder' );
		case 'regexp':
		case 'regexp_not':
			return __( 'Regular expression', 'jet-form-builder' );

	}
	return '';
}

function AdvancedRuleItem() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	const [ label, setLabel ] = useState( () => getLabel( currentItem.type ) );

	useEffect( () => {
		setLabel( getLabel( currentItem.type ) );
	}, [ currentItem.type ] );

	const Select = <Fragment>
		<SelectControl
			labelPosition="side"
			options={ Tools.withPlaceholder( rule_types ) }
			label={ __( 'Rule type', 'jet-form-builder' ) }
			value={ currentItem.type }
			onChange={ type => changeCurrentItem( { type } ) }
		/>
	</Fragment>;

	let Control;

	switch ( currentItem.type ) {
		case 'contain':
		case 'contain_not':
		case 'regexp':
		case 'regexp_not':
			Control = <TextControl
				label={ label }
				value={ currentItem.value }
				onChange={ value => changeCurrentItem( { value } ) }
			/>;
			break;
		default:
			Control = null;
	}

	return <>
		{ Select }
		{ Control }
	</>;
}

export default AdvancedRuleItem;