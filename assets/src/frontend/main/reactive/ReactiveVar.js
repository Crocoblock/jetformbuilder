import { isEmpty } from '../functions';

function ReactiveVar( value = null ) {
	this.current    = value;
	this.signals    = [];
	this.sanitizers = [];
	this.isDebug    = false;
	this.isSilence  = false;
}

ReactiveVar.prototype = {
	watchOnce: function ( callable ) {
		if ( 'function' !== typeof callable ) {
			return;
		}
		const clearWatcher = this.watch( () => {
			clearWatcher();
			callable();
		} );
	},
	watch: function ( callable ) {
		if ( 'function' !== typeof callable ) {
			return false;
		}

		this.signals.push( {
			signal: callable.bind( this ),
			trace: new Error().stack,
		} );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	sanitize: function ( callable ) {
		if ( 'function' !== typeof callable ) {
			return false;
		}

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
		if ( !isEmpty( this.current ) ) {
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