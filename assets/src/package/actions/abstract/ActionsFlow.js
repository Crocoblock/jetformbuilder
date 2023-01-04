function ActionsFlow( list = null ) {
	/**
	 * @type {BaseAction[]}
	 */
	this.list = list;
}

ActionsFlow.prototype = {
	setList( list ) {
		this.list = list;
	},
	resetID() {
		for ( const action of this.list ) {
			action.resetID();
		}
	},
	/**
	 * @param type {String}
	 * @returns {boolean}
	 */
	hasType( type ) {
		return this.list.some( current => current.type === type );
	},
};

export default ActionsFlow;