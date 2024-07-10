import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import AdvancedRulesIsEmpty from './AdvancedRulesIsEmpty';
import ContainersList from '../../components/ContainersList';
import AdvancedRuleItem from './AdvancedRuleItem';

const {
	      __,
      } = wp.i18n;
const {
	      Children,
	      cloneElement,
      } = wp.element;

const renderGroup = ( current, index ) => <>
	<b>{ __( 'AND', 'jet-form-builder' ) }</b>
	<AdvancedRuleItem
		rule={ current }
		index={ index }
	/>
</>;

function getRulesList( rules ) {
	const andRules = rules.filter(
		( c, index ) => 0 !== index,
	);

	return [
		<AdvancedRuleItem
			rule={ rules[ 0 ] }
			key="first_item"
		/>,
		...andRules.map(
			( item, index ) => renderGroup( item, index + 1 ),
		),
	];
}

function AdvancedRulesList() {
	const [ attributes ] = useBlockAttributes();

	if ( !attributes?.validation?.rules?.length ) {
		return <AdvancedRulesIsEmpty/>;
	}

	return <ContainersList>
		{ Children.map(
			getRulesList( attributes.validation.rules ),
			cloneElement,
		) }
	</ContainersList>;
}

export default AdvancedRulesList;