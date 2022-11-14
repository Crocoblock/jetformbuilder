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
};

ObservableRow.prototype.remove = function () {
	for ( const name in this.dataInputs ) {
		if ( !this.dataInputs.hasOwnProperty( name ) ) {
			continue;
		}
		this.dataInputs[ name ].onRemove();
	}

	this.parent.value.current = this.parent.value.current.filter(
		current => current !== this,
	);

	this.rootNode.remove();
};

ObservableRow.prototype.initCalc = function () {
	const [ node ]      = this.parent.nodes;
	const formulaString = node.dataset?.formula;

	if ( !formulaString ) {
		return;
	}

	const formula = new CalculatedFormula( this );

	formula.observe( formulaString );
	formula.setResult       = () => {
		this.calc = formula.calculate();
		this.parent.value.notify();
	};
	formula.relatedCallback = function ( input ) {
		return input.calcValue;
	};
	formula.setResult();
};

export default ObservableRow;