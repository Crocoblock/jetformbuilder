import dispatchers from './dispatchers';
import humanReadablePreset from '../../preset/helpers/humanReadablePreset';

const {
	      select,
      } = wp.data;
const {
	      __,
      } = wp.i18n;

const emptyCondition = function ( condition ) {
	const operatorOptions = select( 'jet-forms/block-conditions' ).
		getOperator( condition?.operator );

	if ( !operatorOptions ) {
		return '';
	}
	const field = condition?.field || '(no field)';

	return [
		`<code>${ field }</code>`,
		operatorOptions.label,
	].join( ' ' );
};

const DEFAULT_STATE = {
	functions: [],
	operators: [],
	conditionReaders: {
		default ( condition ) {
			const operatorOptions = select( 'jet-forms/block-conditions' ).
				getOperator( condition?.operator );

			if ( !operatorOptions ) {
				return '';
			}
			const field = condition?.field || '(no field)';
			const value = (
				humanReadablePreset( condition.value, 'b' ) || '(no value)'
			);

			return [
				`<code>${ field }</code>`,
				operatorOptions.label,
				`<code>${ value }</code>`,
			].join( ' ' );
		},
		empty: emptyCondition,
		not_empty: emptyCondition,
		render_state ( condition ) {
			const states = (
				condition?.render_state ?? []
			).map(
				current => `<code>${ current }</code>`,
			);

			const label = 1 === states.length
			              ? __( 'Is render state', 'jet-form-builder' )
			              : __(
					'One of the render states',
					'jet-form-builder',
				);

			return [
				label,
				states.join( ', ' ),
			].join( ': ' );
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