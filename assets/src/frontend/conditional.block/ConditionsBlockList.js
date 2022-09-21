import ConditionsList from './ConditionsList';

function ConditionsBlockList( conditions, root ) {
	ConditionsList.call( this, conditions, root );
}

ConditionsBlockList.prototype = Object.create( ConditionsList.prototype );
/**
 * @type {ConditionalBlock}
 */
ConditionsBlockList.prototype.block = null;

export default ConditionsBlockList;