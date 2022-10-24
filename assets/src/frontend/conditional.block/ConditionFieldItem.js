import ConditionItem from './ConditionItem';

const { CalculatedFormula } = JetFormBuilderAbstract;

/**
 * @property  operator
 *
 * @constructor
 */
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
	this.setOptions = function ( options ) {
		this.field        = options.field;
		this.operator     = options.operator;
		this.render_state = options.render_state;
		this.use_preset   = options.use_preset;

		let value;

		if ( !Array.isArray( options?.value ) ) {
			value = options.value.split( ',' ).map( item => item.trim() );
		}

		if ( this.use_preset ) {
			this.value = value;

			return;
		}

		this.value = {};

		for ( const [ index, formula ] of Object.entries( value ) ) {
			const current = new CalculatedFormula( formula, this.list.root );

			current.setResult = () => {
				this.value[ index ] = '' + current.calculate();
				this.list.onChangeRelated();
			};
			current.setResult();
		}

		this.value = Object.values( this.value );
	};
}

ConditionFieldItem.prototype = Object.create( ConditionItem.prototype );

ConditionFieldItem.prototype.field = null;
/**
 * @type {Array}
 */
ConditionFieldItem.prototype.value = null;
/**
 * @type {'equal'|'greater'|'less'|'between'|'one_of'|'contain'}
 */
ConditionFieldItem.prototype.operator = null;
/**
 * @type {Boolean}
 */
ConditionFieldItem.prototype.use_preset = null;

export default ConditionFieldItem;