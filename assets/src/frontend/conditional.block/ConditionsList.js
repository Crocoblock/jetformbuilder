import { createConditionItem } from './functions';
import OrOperatorItem from './OrOperatorItem';

function ConditionsList( conditions, root ) {
	this.root = root;
	this.setConditions( conditions );
}

ConditionsList.prototype = {
	/**
	 * @type {Observable}
	 */
	root: null,
	conditions: [],
	invalid: [],
	/**
	 * You can override this callback.
	 * It used in ConditionFieldItem.
	 *
	 * Runs every time, when conditions is match
	 */
	onChangeRelated() {
		if ( !this.getResult() ) {
			return;
		}
		this.calculate();
	},
	calculate() {},
	observe() {
		for ( const condition of this.getConditions() ) {
			condition.observe();
		}
	},
	setConditions( conditions ) {
		if ( 'string' === typeof conditions ) {
			conditions = JSON.parse( conditions );
		}

		this.conditions = conditions.map(
			item => createConditionItem( item, this ),
		).filter( item => item );
	},
	getResult() {
		this.invalid   = [];
		let groups     = {};
		let groupIndex = 0;

		for ( const condition of this.getConditions() ) {
			if ( condition instanceof OrOperatorItem ) {
				groupIndex++;

				continue;
			}
			groups[ groupIndex ] = groups[ groupIndex ] ?? [];
			groups[ groupIndex ].push( condition );
		}

		groups = Object.values( groups );

		if ( !groups.length ) {
			return true;
		}

		for ( const group of groups ) {
			if ( this.isValidGroup( group ) ) {
				return true;
			}
		}

		return false;
	},
	isValidGroup( conditionsGroup ) {
		for ( const condition of conditionsGroup ) {
			if ( condition.isPassed() ) {
				continue;
			}
			this.invalid.push( condition );

			return false;
		}

		return true;
	},
	/**
	 * @returns {array<ConditionFieldItem|ConditionPageStateItem>}
	 */
	getConditions() {
		return this.conditions;
	},
};

export default ConditionsList;