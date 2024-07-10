function ProgressBar( node, state ) {
	/**
	 * @param node  {HTMLElement}
	 * @param state {MultiStepState}
	 */
	this.node = node;
	this.state = state;

	this.state.index.watch( () => this.updateItems() );

	this.updateItems = function () {
		const { current } = this.state.index;

		for ( const item of this.node.children ) {
			const pageIndex = +item.dataset.page;

			if ( pageIndex < current ) {
				this.makePassed( item );
			}
			else if ( current === pageIndex ) {
				this.makeActive( item );
			}
			else {
				this.makeNotPassed( item );
			}
		}
	};

	/**
	 * @param element {HTMLElement}
	 */
	this.makeActive = function ( element ) {
		element.classList.remove( 'passed-page' );
		element.classList.add( 'active-page' );
	};

	/**
	 * @param element {HTMLElement}
	 */
	this.makePassed = function ( element ) {
		element.classList.add( 'passed-page' );
		element.classList.remove( 'active-page' );
	};

	this.makeNotPassed = function ( element ) {
		element.classList.remove( 'active-page', 'passed-page' );
	};
}

export default ProgressBar;