import ReactiveVar from './ReactiveVar';

function ReactiveSet( value ) {
	ReactiveVar.call( this, value );
}

ReactiveSet.prototype = Object.create( ReactiveVar.prototype );

ReactiveSet.prototype.add = function ( stateName ) {
	if ( this.current.includes( stateName ) ) {
		return;
	}

	// add unique value
	this.current = [
		...new Set( [
			...(
				this.current ?? []
			),
			stateName,
		] ),
	];
};

ReactiveSet.prototype.remove = function ( stateName ) {
	if ( !this.current.includes( stateName ) ) {
		return;
	}
	this.current = this.current.filter(
		item => item !== stateName,
	);
};

// eslint-disable-next-line complexity
ReactiveSet.prototype.toggle = function ( stateName, force = null ) {
	if ( true === force ) {
		this.add( stateName );
	}
	if ( false === force ) {
		this.remove( stateName );
	}

	if ( null !== force ) {
		return;
	}

	if ( this.current.includes( stateName ) ) {
		this.remove( stateName );
	}
	else {
		this.add( stateName );
	}
};

export default ReactiveSet;