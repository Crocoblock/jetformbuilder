import { isEmpty } from '../functions';

function ReactiveVar( value = null ) {
	this.current    = value;
	this.signals    = [];
	this.sanitizers = [];
	this.isSilence  = false;
	this.isMaked    = false;
}

ReactiveVar.prototype = {
	watchOnce( callable ) {
		if ( 'function' !== typeof callable ) {
			return;
		}
		const clearWatcher = this.watch( () => {
			clearWatcher();
			callable();
		} );
	},
	watch( callable ) {
		if ( 'function' !== typeof callable ) {
			return false;
		}

		if ( this.signals.some( ( { signal } ) => signal === callable ) ) {
			return true;
		}

		this.signals.push( {
			signal: callable,
			trace: new Error().stack,
		} );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	sanitize( callable ) {
		if ( 'function' !== typeof callable ) {
			return false;
		}

		if ( -1 !== this.sanitizers.indexOf( callable ) ) {
			return true;
		}

		this.sanitizers.push( callable );

		const index = this.sanitizers.length - 1;

		return () => this.sanitizers.splice( index, 1 );
	},
	make() {
		if ( this.isMaked ) {
			return;
		}
		this.isMaked  = true;
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
				current   = self.applySanitizers( newVal );

				if ( self.isSilence ) {
					return;
				}
				self.notify( prevValue );
			},
		} );
	},
	notify( prevValue = null ) {
		this.signals.forEach(
			( { signal } ) => signal.call( this, prevValue ) );
	},
	applySanitizers( value ) {
		for ( const sanitizer of this.sanitizers ) {
			value = sanitizer.call( this, value );
		}

		return value;
	},
	setIfEmpty( newValue ) {
		if ( !isEmpty( this.current ) ) {
			return;
		}

		this.current = newValue;
	},
	silence() {
		this.isSilence = !this.isSilence;
	},
};

export default ReactiveVar;