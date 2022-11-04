function ReactiveVar( value = null ) {
	this.current    = value;
	this.signals    = [];
	this.sanitizers = [];
	this.isDebug    = false;
	this.isSilence  = false;
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( callable.bind( this ) );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	sanitize: function ( callable ) {
		this.sanitizers.push( callable.bind( this ) );

		const index = this.sanitizers.length - 1;

		return () => this.sanitizers.splice( index, 1 );
	},
	make: function () {
		let current = this.current;
		const self  = this;

		Object.defineProperty( this, 'current', {
			get() {
				return current;
			},
			set( newVal ) {
				if ( current === newVal || self.isSilence ) {
					return;
				}
				if ( self.isDebug ) {
					console.group( 'ReactiveVar has changed' );
					console.log( 'current:', current );
					console.log( 'newVal:', newVal );
					console.groupEnd();
					debugger;
				}
				current = self.applySanitizers( newVal );
				self.notify();
			},
		} );
	},
	notify: function () {
		this.signals.forEach( signal => signal() );
	},
	applySanitizers: function ( value ) {
		for ( const sanitizer of this.sanitizers ) {
			value = sanitizer( value );
		}

		return value;
	},
	setIfEmpty( newValue ) {
		if (
			null === this.current ||
			undefined === this.current ||
			!this.current?.length
		) {
			return;
		}

		this.current = newValue;
	},
	debug() {
		this.isDebug = !this.isDebug;
	},
	silence() {
		this.isSilence = !this.isSilence;
	},
};

export default ReactiveVar;