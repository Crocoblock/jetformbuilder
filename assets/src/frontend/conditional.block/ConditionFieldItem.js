import ConditionItem from './ConditionItem';

function ConditionFieldItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return !!options?.field?.length;
	};
	this.observe     = function () {
		const input        = this.getInput();
		this.block._fields = this.block._fields ?? [];

		if ( !input || this.block._fields.includes( this.field ) ) {
			return;
		}

		this.block._fields.push( this.field );
		input.watch( () => this.block.calculate() );
	};
	/**
	 * @returns {InputData|boolean}
	 */
	this.getInput = function () {
		return this.block.root.getInput( this.field );
	};
	this.isPassed   = function () {
		const input = this.getInput();

		if ( !input ) {
			return false;
		}

		return input.checker.check( this, input );
	};
	this.setOptions = function ( {
		field,
		operator,
		value,
		render_state,
	} ) {
		this.field        = field;
		this.operator     = operator;
		this.value        = value;
		this.render_state = render_state;
	};
}

ConditionFieldItem.prototype = Object.create( ConditionItem.prototype );

export default ConditionFieldItem;