import ReactiveVar from './ReactiveVar';

function ReactiveSet( value ) {
	ReactiveVar.call( this, value );
}

ReactiveSet.prototype = Object.create( ReactiveVar.prototype );

ReactiveSet.prototype.add = function ( stateName ) {
	if ( !this.current.hasOwnProperty( 'length' ) ) {
		this.current = [];
	}
	// add unique value
	this.current = [ ...new Set( [ ...this.current, stateName ] ) ];
};

ReactiveSet.prototype.remove = function ( stateName ) {
	this.current = this.current.filter(
		item => item !== stateName,
	);
};

ReactiveSet.prototype.toggle = function ( stateName ) {
	if ( this.current.includes( stateName ) ) {
		this.remove( stateName );
	}
	else {
		this.add( stateName );
	}
};

export default ReactiveSet;