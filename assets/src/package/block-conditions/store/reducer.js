import dispatchers from './dispatchers';

const {
	select
} = wp.data;

const DEFAULT_STATE = {
	functions: [],
	operators: [],
	conditionReaders: {
		default: function ( condition ) {
			const operatorOptions = select( 'jet-forms/block-conditions' ).
				getOperator( condition?.operator );

			if ( ! operatorOptions ) {
				return '';
			}
			const field = condition?.field || '(no field)';




		},
	},
	renderStates: [],
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}