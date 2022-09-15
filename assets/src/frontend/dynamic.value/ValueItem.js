const {
	      CalculatedFormula,
	      ConditionsList,
      } = JetFormBuilderAbstract;

/**
 * @param to_set
 * @param conditions
 * @param frequency {'once'|'always'|'on_change'}
 * @param input {InputData}
 * @constructor
 */
function ValueItem( { to_set, conditions, frequency }, input ) {
	const formula = new CalculatedFormula( to_set, input.root );
	const list    = new ConditionsList( conditions, input.root );

	formula.setResult = () => {
		this.to_set = formula.calculate();
	};
	formula.setResult();

	list.onChangeRelated = () => {
		const currentResult = list.getResult();

		switch ( frequency ) {
			case 'always':
				if ( !currentResult ) {
					break;
				}
				input.value.current = this.to_set;
				break;
			case 'on_change':
				if ( this.prevResult === currentResult || !currentResult ) {
					break;
				}
				input.value.current = this.to_set;
				this.prevResult     = currentResult;
				break;
			case 'once':
				if ( !currentResult ) {
					break;
				}
				input.value.current = this.to_set;
				list.unObserve();
				break;
		}
	};

	list.observe();
	list.onChangeRelated();
}

ValueItem.prototype = {
	to_set: '',
	prevResult: null,
};

export default ValueItem;