const {
	      CalculatedFormula,
	      ConditionsList,
      } = JetFormBuilderAbstract;

/**
 * @param to_set
 * @param conditions
 * @param input {InputData}
 * @constructor
 */
function ValueItem( { to_set, conditions }, input ) {
	const formula = new CalculatedFormula( to_set, input.root );
	const list    = new ConditionsList( conditions, input.root );

	formula.setResult = () => {
		this.to_set = formula.calculate();
	};
	formula.setResult();

	list.calculate = () => {
		input.value.current = this.to_set;
	};
	list.observe();
	list.onChangeRelated();
}

ValueItem.prototype = {
	to_set: '',
};

export default ValueItem;