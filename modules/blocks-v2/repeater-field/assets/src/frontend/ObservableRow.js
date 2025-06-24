const {
	      Observable,
	      CalculatedFormula,
      } = JetFormBuilderAbstract;

function ObservableRow( parent ) {
	Observable.call( this, parent );

	// By default we return the number of repeater rows
	this.calc       = 1;
	this.initedCalc = false;
}

ObservableRow.prototype            = Object.create( Observable.prototype );
ObservableRow.prototype.calc       = 1;
ObservableRow.prototype.initedCalc = false;

ObservableRow.prototype.reObserve = function ( root ) {
	this.isObserved = false;

	const prevValues = { ...this.value.current };
	this.dataInputs  = {};
	Observable.prototype.observe.call( this, root );

	this.value.current = prevValues;
};

ObservableRow.prototype.observe = function ( root ) {
	Observable.prototype.observe.call( this, root );

	this.parent.lastObserved.current = this;
};

ObservableRow.prototype.removeManually = function () {
	this.parent.reQueryValue();

	const otherRows   = this.parent.value.current.filter( row => row !== this );
	const otherValues = otherRows.map( row => ( {
		node: row.rootNode,
		values: { ...row.value.current }
	} ) );

	this.remove();

	this.parent.remove( this );
	this.rootNode.remove();

	otherRows.forEach( ( row, index ) => {
		if ( otherValues[index] ) {
			Object.assign( row.value.current, otherValues[index].values );

			const inputs = row.getInputs();
			inputs.forEach( input => {
				if ( input.value.current !== undefined ) {
					input.reQueryValue();
				}
			} );
		}
	} );
};

ObservableRow.prototype.initCalc = function () {
	if ( this.initedCalc ) {
		return;
	}

	this.initedCalc     = true;
	const [ node ]      = this.parent.nodes;
	const formulaString = node.dataset?.formula;

	if ( !formulaString || 'default' === this.parent.calcType ) {
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
	formula.emptyValue      = function () {
		return 0;
	};

	this.calc = formula.calculate();
	this.parent.silenceNotify();
};

export default ObservableRow;