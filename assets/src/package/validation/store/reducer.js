import dispatchers from './dispatchers';
import humanReadablePreset from '../../preset/helpers/humanReadablePreset';

const {
	      select,
      } = wp.data;
const {
	      __,
      } = wp.i18n;

const DEFAULT_STATE = {
	messages: [],
	ssrCallbacks: [],
	formats: [],
	ruleTypes: [],
	ruleReaders: {
		default: function ( rule ) {
			const ruleOptions = select( 'jet-forms/validation' ).getRule(
				rule.type,
			);

			if ( !ruleOptions ) {
				return '';
			}

			let value = rule?.field || rule?.value || '';

			value = (
				humanReadablePreset( value, 'b' ) || '(no value)'
			);

			return [
				ruleOptions.label,
				`<code>${ value }</code>`,
			].join( ' ' );
		},
		ssr: function ( rule ) {
			return [
				__( 'Function:', 'jet-form-builder' ),
				rule?.value,
			].join( ' ' );
		},
	},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}