class ReactiveVar {

	constructor( defaultValue ) {
		this.current = defaultValue;
		this.signals = [];
	}

	watch( callable ) {
		this.signals.push( callable.bind( this ) );
	}

	make() {
		let current = this.current;
		const self  = this;

		Object.defineProperty( this, 'current', {
			get() {
				return current;
			},
			set( newVal ) {
				current = newVal;
				self.signals.forEach( signal => signal() );
			},
		} );
	}
}

export default ReactiveVar;