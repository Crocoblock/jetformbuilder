function ReactiveHook() {
	this.handlers = [];
}

ReactiveHook.prototype = {
	addFilter( callable ) {
		this.handlers.push( callable );

		const index = this.handlers.length - 1;

		return () => this.handlers.splice( index, 1 );
	},
	applyFilters( ...params ) {
		let current     = params[ 0 ];
		const newParams = params.slice( 1 );

		for ( const handler of this.handlers ) {
			current = handler( current, ...newParams );
		}

		return current;
	},
};

export default ReactiveHook;
