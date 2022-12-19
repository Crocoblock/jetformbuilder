import constants from './constants';

const dispatchers = {
	[ constants.register ]( state, action ) {
		const {
			      messages,
			      ssr_callbacks,
			      formats,
			      rule_types,
		      } = action.items;

		state.messages     = JSON.parse( JSON.stringify( messages ) );
		state.ssrCallbacks = JSON.parse( JSON.stringify( ssr_callbacks ) );
		state.formats      = JSON.parse( JSON.stringify( formats ) );
		state.ruleTypes    = JSON.parse( JSON.stringify( rule_types ) );

		return state;
	},
};

export default {
	...dispatchers,
};