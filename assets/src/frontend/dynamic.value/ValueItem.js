const {
	      CalculatedFormula,
	      ConditionsList,
      } = JetFormBuilderAbstract;

/**
 * @type {Function}
 * @constructor
 */
function ValueItem() {
}

ValueItem.prototype = {
	to_set: '',
	prevResult: null,
	prevValue: null,
	/**
	 * @type {InputData}
	 */
	input: null,
	frequency: '',
	set_on_empty: false,
	/**
	 * @param input {InputData}
	 * @returns {boolean}
	 */
	isSupported( input ) {
		return true;
	},
	/**
	 * @param to_set
	 * @param conditions
	 * @param set_on_empty {Boolean}
	 * @param frequency {'once'|'always'|'on_change'}
	 * @param input {InputData}
	 */
	observe(
		{
			to_set,
			conditions = [],
			set_on_empty = false,
			frequency = 'on_change',
		},
		input,
	) {
		this.input        = input;
		this.frequency    = frequency;
		this.set_on_empty = set_on_empty;
		this.prevResult   = null;
		this.prevValue    = null;
		this.to_set       = to_set;

		this.observeSetValue( conditions, input );

		const list = new ConditionsList( conditions, input.root );

		list.onChangeRelated = () => this.applyValue( list );
		list.observe();
		list.onChangeRelated();
	},
	observeSetValue( conditions, input ) {
		const formula = new CalculatedFormula( this.to_set, input.root );

		formula.setResult = () => {
			this.to_set = '' + formula.calculate();
		};
		formula.setResult();
	},
	/**
	 * @param list {ConditionsList}
	 */
	applyValue( list ) {
		const result = list.getResult();

		switch ( this.frequency ) {
			case 'always':
				this.setValue( result );
				break;
			case 'on_change':
				if ( this.prevResult === result ) {
					break;
				}
				this.prevResult = result;
				this.setValue( result );
				break;
			case 'once':
				if ( !result ) {
					break;
				}
				this.setValue();
				list.onChangeRelated = () => {};
				break;
		}
	},
	setValue( result = true ) {
		if ( !result ) {
			return;
		}
		if ( this.set_on_empty ) {
			this.input.value.setIfEmpty( this.to_set );
		}
		else {
			this.input.value.current = this.to_set;
		}
	},
};

export default ValueItem;