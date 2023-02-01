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
	 * @type {CalculatedFormula[]}
	 */
	formulas: [],
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
		this.formulas     = [];

		this.observeSetValue( conditions, input );

		const list = new ConditionsList( conditions, input.root );

		if ( list.conditions?.length ) {
			list.onChangeRelated = () => this.applyValue( list );
			list.observe();
			list.onChangeRelated();

			return;
		}

		for ( const formula of this.formulas ) {
			const resultCallback = formula.setResult.bind( formula );

			formula.setResult = () => {
				resultCallback();
				this.applyValue( false, true );
			};
			formula.setResult();
		}
	},
	observeSetValue( conditions, input ) {
		const formula = new CalculatedFormula( input );

		formula.observe( this.to_set );
		formula.setResult = () => {
			this.to_set = '' + formula.calculate();
		};
		formula.setResult();

		this.formulas.push( formula );
	},
	/**
	 * @param list {ConditionsList|boolean}
	 * @param forceResult {boolean|null}
	 */
	applyValue( list, forceResult = null ) {
		let result = false;

		if ( list ) {
			result = list.getResult();
		}
		else {
			result = forceResult;
		}

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

				if ( list ) {
					list.onChangeRelated = () => {};
				}

				this.formulas.forEach( current => current.clearWatchers() );

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