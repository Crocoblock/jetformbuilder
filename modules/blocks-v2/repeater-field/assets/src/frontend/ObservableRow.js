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
	if ( this._isRemoving ) {
		return;
	}

	this._isRemoving = true;

	const otherRows = this.parent.value.current.filter( row => row !== this && !row._isRemoving );

	const otherValues = otherRows.map( row => {
		// Try to get values from dataInputs if value.current is empty
		const deepCopyValues = {};

		// First, try from value.current
		for ( const [key, value] of Object.entries( row.value.current || {} ) ) {
			if ( Array.isArray( value ) ) {
				deepCopyValues[key] = [...value];
			} else {
				deepCopyValues[key] = value;
			}
		}

		// If value.current is empty, try to get from dataInputs
		if ( 0 === Object.keys( deepCopyValues ).length && row.dataInputs ) {
			for ( const [key, input] of Object.entries( row.dataInputs ) ) {
				if ( input && input.getValue ) {
					const inputValue = input.getValue();
					if ( Array.isArray( inputValue ) ) {
						deepCopyValues[key] = [...inputValue];
					} else {
						deepCopyValues[key] = inputValue;
					}
				}
			}
		}

		return {
			node: row.rootNode,
			values: deepCopyValues
		};
	} );

	otherRows.forEach( ( row, index ) => {
		if ( otherValues[index] ) {
			const valuesToRestore = otherValues[index].values;

			for ( const [key, value] of Object.entries( valuesToRestore ) ) {
				row.value.current[key] = value;
			}

			setTimeout( () => {
				const inputs = row.getInputs();

				inputs.forEach( input => {
					if ( input.updatePreviews && typeof input.updatePreviews === 'function' ) {
						input.updatePreviews();
					}
				} );

				// Reinitialize row formula after reindexing
				row.initedCalc = false; // Reset the flag to allow re-initialization
				row.initCalc(); // Re-initialize the formula with new field names
			}, 50 );
		}
	} );

	this.remove();
	this.parent.remove( this );
	this.rootNode.remove();
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