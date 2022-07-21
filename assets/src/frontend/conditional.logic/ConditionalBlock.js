import ConditionItem from './ConditionItem';

class ConditionalBlock {
	constructor( node, observable ) {
		this.node = node;
		/**
		 * @type {Observable}
		 */
		this.root = observable;
		this.invalid         = [];
		this.undefinedFields = [];
		this.isObserved      = false;

		this.setConditions();
	}

	setConditions() {
		this.conditions = JSON.parse( this.node.dataset.jfbConditional ).map(
			item => new ConditionItem( item, this ),
		);
	}

	observe() {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;

		// separated array for field's names, for prevent
		// multiple watchers to one field
		const fields = [];

		for ( const condition of this.getConditions() ) {
			const input = this.getInputByCondition( condition );

			if ( !input ) {
				this.undefinedFields.push( condition.field );
				continue;
			}

			if ( fields.includes( condition.field ) ) {
				continue;
			}

			fields.push( condition.field );
			input.watch( () => this.calculate() );
		}
	}

	/**
	 *
	 * @param condition {ConditionItem}
	 * @returns {InputData|boolean}
	 */
	getInputByCondition( condition ) {
		return (
			this.root.dataInputs[ condition.field ] ??
			this.root.parent.dataInputs[ condition.field ] ?? false
		);
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