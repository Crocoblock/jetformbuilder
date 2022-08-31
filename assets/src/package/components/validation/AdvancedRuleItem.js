import RepeaterItemContext from '../../context/repeater.item';
import Tools from '../../helpers/tools';
import { useUniqKey } from '../../helpers/hooks/blocks';

const {
	      SelectControl,
	      withFilters,
	      TextControl,
      } = wp.components;
const {
	      useContext,
      } = wp.element;
const {
	      __,
      } = wp.i18n;
const {
	      rule_types,
      } = window.jetFormValidation;

/**
 *
 * @param currentItem
 * @param changeCurrentItem
 * @param currentIndex
 * @param uniqKey
 * @returns {JSX.Element|null}
 * @constructor
 */
let CustomSettings = function ( {
	currentItem,
	changeCurrentItem,
	currentIndex,
	uniqKey,
} ) {

	let label;
	switch ( currentItem.type ) {
		case 'contain':
		case 'contain_not':
			label = __( 'Symbols', 'jet-form-builder' );
			break;
		case 'regexp':
		case 'regexp_not':
			label = __( 'Regular expression', 'jet-form-builder' );
			break;
	}

	switch ( currentItem.type ) {
		case 'contain':
		case 'contain_not':
		case 'regexp':
		case 'regexp_not':
			return <TextControl
				key={ uniqKey( 'custom-settings-control-' + currentIndex ) }
				label={ label }
				value={ currentItem.value }
				onChange={ value => changeCurrentItem( { value } ) }
			/>;
		default:
			return null;
	}
};

function AdvancedRuleItem() {
	const {
		      currentItem,
		      changeCurrentItem,
		      currentIndex,
	      } = useContext( RepeaterItemContext );

	const uniqKey = useUniqKey();

	return <>
		<SelectControl
			labelPosition="side"
			options={ Tools.withPlaceholder( rule_types ) }
			label={ __( 'Rule type', 'jet-form-builder' ) }
			value={ currentItem.type }
			onChange={ type => changeCurrentItem( { type } ) }
		/>
		<CustomSettings
			key={ uniqKey( 'custom-settings-' + currentIndex ) }
			uniqKey={ uniqKey }
			currentIndex={ currentIndex }
			currentItem={ currentItem }
			changeCurrentItem={ changeCurrentItem }
		/>
	</>;
}

export default AdvancedRuleItem;