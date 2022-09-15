function ReactiveVar( value ) {
	this.current = value;
	this.signals = [];
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( callable.bind( this ) );
	},
	unWatch: function ( callable ) {
		for ( const [ signal, index ] of Object.entries( this.signals ) ) {
			if ( signal !== callable ) {
				continue;
			}

			this.signals.splice( index, 1 );
		}
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
				current = newVal;
				self.notify();
			},
		} );
	},
	notify: function () {
		this.signals.forEach( signal => signal() );
	},
};

export default ReactiveVar;