import SignalSelect from './SignalSelect';
import SignalHiddenArray from './SignalHiddenArray';
import SignalRange from './SignalRange';
import SignalText from './SignalText';
import SignalRenderState from './SignalRenderState';

const {
	      applyFilters,
      } = JetPlugins.hooks;

const getSignalTypes = () => applyFilters(
	'jet.fb.signals',
	[
		SignalRange,
		SignalSelect,
		SignalRenderState,
		SignalHiddenArray,
		SignalText,
	],
);

/**
 * @type {(BaseSignal)[]}
 */
let signalTypes = [];

/**
 * @param node {HTMLElement}
 * @param input {InputData}
 * @return {BaseSignal}
 */
function getSignal( node, input ) {
	if ( !signalTypes.length ) {
		signalTypes = getSignalTypes();
	}

	for ( const signalType of signalTypes ) {
		const current = new signalType();

		if ( !current.isSupported( node, input ) ) {
			continue;
		}

		return current;
	}

	return null;
}

export { getSignal };