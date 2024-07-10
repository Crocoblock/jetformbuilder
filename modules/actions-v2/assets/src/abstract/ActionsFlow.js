import BaseAction from './BaseAction';

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
	 * @param  type {String}
	 * @return {boolean}
	 */
	hasType( type ) {
		return this.list.some( current => current.type === type );
	},
	add( props ) {
		if ( 'string' === typeof props ) {
			props = { type: props };
		}

		this.list.push( new BaseAction( props ) );
	},
};

// backward compatibility
window.JetFBComponents = window.JetFBComponents || {};
window.JetFBComponents.ActionsFlow = ActionsFlow;

export default ActionsFlow;