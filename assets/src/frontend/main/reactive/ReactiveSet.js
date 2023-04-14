import ReactiveVar from './ReactiveVar';

function ReactiveSet( value ) {
	ReactiveVar.call( this, value );
}

ReactiveSet.prototype = Object.create( ReactiveVar.prototype );

ReactiveSet.prototype.add = function ( stateName ) {
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
	this.current = this.current.filter(
		item => item !== stateName,
	);
};

ReactiveSet.prototype.toggle = function ( stateName, force = null ) {
	if ( null !== force ) {
		force ? this.add( stateName ) : this.remove( stateName );

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