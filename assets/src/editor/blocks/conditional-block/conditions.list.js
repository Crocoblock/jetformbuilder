import ConditionGroupItem from './condition.group.item';
import ConditionsIsEmpty from './conditions.is.empty';

const {
	      __,
      } = wp.i18n;
const {
	      Children,
	      cloneElement,
      } = wp.element;
const {
	      ContainersList,
      } = JetFBComponents;

const renderGroup = currentGroup => <>
	<b>{ __( 'OR', 'jet-form-builder' ) }</b>
	<ConditionGroupItem
		group={ currentGroup }
	/>
</>;

const getGroupsElements = conditions => {
	let groups         = {};
	let groupIndex     = 0;
	let conditionIndex = 0;

	for ( const condition of conditions ) {
		if ( condition.hasOwnProperty( 'or_operator' ) ) {
			groupIndex++;
			conditionIndex++;

			continue;
		}
		groups[ groupIndex ] = groups[ groupIndex ] ?? [];
		groups[ groupIndex ].push( { condition, index: conditionIndex } );

		conditionIndex++;
	}

	groups         = Object.values( groups );
	const orGroups = groups.filter(
		( c, index ) => 0 !== index,
	);

	return [
		<ConditionGroupItem
			group={ groups[ 0 ] }
			key="first_item"
		/>,
		...orGroups.map( renderGroup ),
	];
};

function ConditionsList( { attributes } ) {
	if ( !Boolean( attributes?.conditions?.length ) ) {
		return <ConditionsIsEmpty/>;
	}

	return <ContainersList>
		{ Children.map(
			getGroupsElements( attributes.conditions ),
			cloneElement,
		) }
	</ContainersList>;
}

export default ConditionsList;