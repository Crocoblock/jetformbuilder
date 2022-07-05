import ConditionItem from './ConditionItem';

class ConditionalBlock {
	constructor( node, observable ) {
		this.node = node;
		/**
		 * @type {Observable}
		 */
		this.root = observable;

		this.setConditions();
	}

	setConditions() {
		this.conditions = JSON.parse( this.node.dataset.jfbConditional ).map(
			item => new ConditionItem( item, this ),
		);
	}

	calculate() {
		this.runFunction( this.getResult() );
	}

	getResult() {
		for ( const condition of this.getConditions() ) {
			if ( ! condition.isPassed() ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * @param result {boolean}
	 */
	runFunction( result ) {
		switch ( this.node.dataset.jfbFunc ) {
			case 'show':
				this.showBlockCss( result );
				break;
			case 'hide':
				this.showBlockCss( ! result );
				break;
		}
	}

	showBlockCss( result ) {
		this.node.style.display = result ? 'block' : 'none';
	}

	/**
	 * @returns {array<ConditionItem>}
	 */
	getConditions() {
		return this.conditions;
	}
}

export default ConditionalBlock;