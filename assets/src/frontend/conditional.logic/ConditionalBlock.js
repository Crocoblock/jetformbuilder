import { createConditionItem, createMultiStep } from './functions';

class ConditionalBlock {
	constructor( node, observable ) {
		this.node           = node;
		node.jfbConditional = this;
		/**
		 * @type {Observable}
		 */
		this.root = observable;
		this.invalid         = [];
		this.undefinedFields = [];
		this.isObserved      = false;

		/**
		 * @type {PageState}
		 */
		this.page = null;

		this.setConditions();

		this.multistep = createMultiStep( this );
	}

	setConditions() {
		this.conditions = JSON.parse( this.node.dataset.jfbConditional ).map(
			item => createConditionItem( item, this ),
		).filter( item => item );
	}

	observe() {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;

		for ( const condition of this.getConditions() ) {
			condition.observe();
		}
	}

	calculate() {
		this.runFunction( this.getResult() );
	}

	getResult() {
		this.invalid = [];

		for ( const condition of this.getConditions() ) {
			if ( condition.isPassed() ) {
				continue;
			}
			this.invalid.push( condition );

			return false;
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
				this.showBlockCss( !result );
				break;
			case 'disable':
				this.disableBlock( result );
				break;
		}
	}

	showBlockCss( result ) {
		this.node.style.display = result ? 'block' : 'none';
	}

	disableBlock( result ) {
		this.node.disabled = result;
	}

	/**
	 * @returns {array<ConditionFieldItem|ConditionPageStateItem>}
	 */
	getConditions() {
		return this.conditions;
	}
}

export default ConditionalBlock;