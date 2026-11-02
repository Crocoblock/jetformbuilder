import dispatchers from './dispatchers';
import humanReadablePreset from '../../preset/helpers/humanReadablePreset';
import escapeText from '../../preset/helpers/escapeText';

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
		default ( rule ) {
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
		ssr ( rule ) {
			return [
				__( 'Function:', 'jet-form-builder' ),
				escapeText( rule?.value ),
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