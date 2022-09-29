import constants from './constants';
import BaseMacro from '../abstract/BaseMacro';

export default {
	[ constants.registerMacro ]( state, action ) {
		const { items, isClient } = action;
		const macros              = Array.isArray( items ) ? items : [ items ];

		for ( const macro of macros ) {
			if ( macro instanceof BaseMacro ) {
				continue;
			}
			console.error( macro );
			throw new Error( '^^^ Invalid macro item ^^^' );
		}

		if ( isClient ) {
			state.clientMacros.push( ...macros );
		}
		else {
			state.serverMacros.push( ...macros );
		}

		return state;
	},
};