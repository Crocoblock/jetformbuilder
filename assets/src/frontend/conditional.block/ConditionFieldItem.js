import ConditionItem from './ConditionItem';

const { CalculatedFormula } = JetFormBuilderAbstract;

function ConditionFieldItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return !!options?.field?.length;
	};
	this.observe     = function () {
		const input       = this.getInput();
		this.list._fields = this.list._fields ?? [];

		if ( !input || this.list._fields.includes( this.field ) ) {
			return;
		}

		this.list._fields.push( this.field );
		input.watch( () => this.list.onChangeRelated() );
	};
	/**
	 * @returns {InputData|boolean}
	 */
	this.getInput = function () {
		return this.list.root.getInput( this.field );
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
		this.render_state = render_state;

		const formula = new CalculatedFormula( value, this.list.root );

		formula.setResult = () => {
			this.value = '' + formula.calculate();
			this.list.onChangeRelated();
		};
		formula.setResult();
	};
}

ConditionFieldItem.prototype = Object.create( ConditionItem.prototype );

export default ConditionFieldItem;