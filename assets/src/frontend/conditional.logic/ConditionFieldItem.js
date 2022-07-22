import ConditionItem from './ConditionItem';

class ConditionFieldItem extends ConditionItem {

	isSupported( options ) {
		return !!options?.field?.length;
	}

	observe() {
		const input      = this.getInput();
		this.block._fields = this.block._fields ?? [];

		if ( !input || this.block._fields.includes( this.field ) ) {
			return;
		}

		this.block._fields.push( this.field );
		input.watch( () => this.block.calculate() );
	}

	/**
	 * @returns {InputData|boolean}
	 */
	getInput() {
		const root = this.block.root;

		return (
			root.dataInputs[ this.field ] ??
			root.parent.dataInputs[ this.field ] ?? false
		);
	}

	isPassed() {
		const root  = this.block.root;
		const input = root.dataInputs[ this.field ] ??
			root.parent.dataInputs[ this.field ] ?? false;

		if ( false === input ) {
			return false;
		}

		return input.checker.check( this, input );
	}

	setOptions( { field, operator, value, render_state } ) {
		this.field        = field;
		this.operator     = operator;
		this.value        = value;
		this.render_state = render_state;
	}
}

export default ConditionFieldItem;