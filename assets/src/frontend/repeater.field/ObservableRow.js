const {
	      Observable,
	      CalculatedFormula,
      } = JetFormBuilderAbstract;

function ObservableRow( parent ) {
	Observable.call( this, parent );

	// By default we return the number of repeater rows
	this.calc = 1;
}

ObservableRow.prototype      = Object.create( Observable.prototype );
ObservableRow.prototype.calc = 1;

ObservableRow.prototype.observe = function ( root ) {
	Observable.prototype.observe.call( this, root );

	this.initCalc();
}

ObservableRow.prototype.initCalc = function () {
	const [ node ]      = this.parent.nodes;
	const formulaString = node.dataset?.formula;

	if ( !formulaString ) {
		return;
	}

	const formula = new CalculatedFormula( formulaString, this );

	formula.setResult = () => {
		this.calc = formula.calculate();
		this.parent.value.notify();
	};
	formula.relatedCallback = function ( input ) {
		return input.calcValue;
	};
	formula.setResult();
};

export default ObservableRow;