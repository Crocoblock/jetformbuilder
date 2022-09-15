function ReactiveVar( value ) {
	this.current = value;
	this.signals = [];
}

ReactiveVar.prototype = {
	watch: function ( callable ) {
		this.signals.push( callable.bind( this ) );
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
	setIfEmpty( newValue ) {
		if ( this.current ) {
			return;
		}

		this.current = newValue;
	},
};

export default ReactiveVar;