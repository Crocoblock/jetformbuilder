import Tools from '../../helpers/tools';
import RepeaterItemContext from '../../context/repeater.item';

const {
	      SelectControl,
	      TextControl,
	      withFilters,
      } = wp.components;
const {
	      useContext,
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
	const indexRule = rule_types.findIndex( ( { value } ) => value === type );
	const fallback  = __( 'Enter value', 'jet-form-builder' );

	if ( -1 === indexRule ) {
		return fallback;
	}

	return rule_types[ indexRule ]?.control_label ?? fallback;
}

function RuleSpecificControls( {
	currentItem,
	changeCurrentItem,
} ) {
	const [ label, setLabel ] = useState( () => getLabel( currentItem.type ) );

	useEffect( () => {
		setLabel( getLabel( currentItem.type ) );
	}, [ currentItem.type ] );

	switch ( currentItem.type ) {
		case 'contain':
		case 'contain_not':
		case 'regexp':
		case 'regexp_not':
			return <TextControl
				label={ label }
				value={ currentItem.value }
				onChange={ value => changeCurrentItem( { value } ) }
			/>;
		default:
			return null;
	}
}

const RuleControls = withFilters(
	'jet.fb.advanced.rule.controls',
)( RuleSpecificControls );

function AdvancedRuleItem() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	return <>
		<SelectControl
			labelPosition="side"
			options={ Tools.withPlaceholder( rule_types ) }
			label={ __( 'Rule type', 'jet-form-builder' ) }
			value={ currentItem.type }
			onChange={ type => changeCurrentItem( { type } ) }
		/>
		<RuleControls
			currentItem={ currentItem }
			changeCurrentItem={ changeCurrentItem }
		/>
		<TextControl
			label={ __( 'Error message', 'jet-form-builder' ) }
			value={ currentItem.message }
			onChange={ message => changeCurrentItem( { message } ) }
		/>
	</>;
}

export default AdvancedRuleItem;