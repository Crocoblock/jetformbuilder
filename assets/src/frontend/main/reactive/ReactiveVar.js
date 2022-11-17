function ReactiveVar( value = null ) {
	this.current    = value;
	this.signals    = [];
	this.sanitizers = [];
	this.isDebug    = false;
	this.isSilence  = false;
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( {
			signal: callable.bind( this ),
			trace: new Error().stack,
		} );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	sanitize: function ( callable ) {
		this.sanitizers.push( callable.bind( this ) );

		const index = this.sanitizers.length - 1;

		return () => this.sanitizers.splice( index, 1 );
	},
	make: function () {
		let current   = this.current;
		let prevValue = null;
		const self    = this;

		Object.defineProperty( this, 'current', {
			get() {
				return current;
			},
			set( newVal ) {
				if ( current === newVal ) {
					return;
				}
				prevValue = current;
				if ( self.isDebug ) {
					console.group( 'ReactiveVar has changed' );
					console.log( 'current:', current );
					console.log( 'newVal:', newVal );
					console.groupEnd();
					debugger;
				}
				current = self.applySanitizers( newVal );

				if ( self.isSilence ) {
					return;
				}
				self.notify( prevValue );
			},
		} );
	},
	notify: function ( prevValue = null ) {
		this.signals.forEach( ( { signal } ) => signal( prevValue ) );
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