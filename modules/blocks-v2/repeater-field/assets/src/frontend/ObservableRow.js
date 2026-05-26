const {
	      Observable,
	      CalculatedFormula,
      } = JetFormBuilderAbstract;

function cloneObservedValue( value ) {
	if ( Array.isArray( value ) ) {
		return [ ...value ];
	}

	if ( value && 'object' === typeof value ) {
		return { ...value };
	}

	return value;
}

function isNativeDateLikeInput( input ) {
	const [ node ] = input?.nodes ?? [];

	return [ 'date', 'time', 'datetime-local' ].includes( node?.type );
}

function stampObservedInputs( row ) {
	row._observeVersion = ( row._observeVersion || 0 ) + 1;

	for ( const input of row.getInputs() ) {
		input._observeVersion = row._observeVersion;
	}
}

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
	const prevValues = {};
	const prevNodeValues = {};

	for ( const [ fieldName, value ] of Object.entries( this.value?.current || {} ) ) {
		prevValues[ fieldName ] = cloneObservedValue( value );
	}

	for ( const input of this.getInputs() ) {
		const fieldName = input.getName();

		prevValues[ input.getName() ] = cloneObservedValue( input.getValue() );

		if ( isNativeDateLikeInput( input ) ) {
			prevNodeValues[ fieldName ] = input.nodes?.[ 0 ]?.value ?? '';
		}
	}

	this.dataInputs  = {};
	Observable.prototype.observe.call( this, root );
	stampObservedInputs( this );

	for ( const input of this.getInputs() ) {
		const fieldName = input.getName();

		if ( !Object.prototype.hasOwnProperty.call( prevValues, fieldName ) ) {
			continue;
		}

		if ( isNativeDateLikeInput( input ) ) {
			const [ node ] = input.nodes;

			if ( Object.prototype.hasOwnProperty.call( prevNodeValues, fieldName ) && node ) {
				node.value = prevNodeValues[ fieldName ];
			}

			input.reQueryValue();
			continue;
		}

		input.silenceSet( cloneObservedValue( prevValues[ fieldName ] ) );
	}

	this.parent.lastObserved.current = this;
};

ObservableRow.prototype.observe = function ( root ) {
	Observable.prototype.observe.call( this, root );
	stampObservedInputs( this );

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
