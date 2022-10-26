function ReactiveVar( value = null ) {
	this.current = value;
	this.signals = [];
	this.isDebug = false;
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( callable.bind( this ) );

		const index = this.signals.length - 1;

		return () => this.signals.splice( index, 1 );
	},
	make: function () {
		let current = this.current;
		const self  = this;

		Object.defineProperty( this, 'current', {
			get() {
				return current;
			},
			set( newVal ) {
				if ( current === newVal ) {
					return;
				}
				if ( self.isDebug ) {
					debugger;
				}
				current = newVal;
				self.notify();
			},
		} );
	},
	notify: function () {
		this.signals.forEach( signal => signal() );
	},
	setIfEmpty( newValue ) {
		if ( (
				!this.current.hasOwnProperty( 'length' ) && this.current
			) ||
			(
				this.current.hasOwnProperty( 'length' ) && this.current.length
			)
		) {
			return;
		}

		this.current = newValue;
	},
	debug() {
		this.isDebug = !this.isDebug;
	},
};

export default ReactiveVar;