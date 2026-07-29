import SignalHiddenArray from './SignalHiddenArray';
import SignalRange from './SignalRange';
import SignalRenderState from './SignalRenderState';

const {
	      applyFilters,
      } = JetPlugins.hooks;

const getSignalTypes = () => applyFilters(
	'jet.fb.signals',
	[
		SignalRange,
		SignalRenderState,
		SignalHiddenArray,
	],
);

/**
 * @type {(BaseSignal)[]}
 */
let signalTypes = [];

function getPreparedSignalTypes() {
	if ( !signalTypes.length ) {
		signalTypes = getSignalTypes();
	}

	return [ ...signalTypes ];
}

/**
 * @param  node  {HTMLElement}
 * @param  input {InputData}
 * @return {BaseSignal}
 */
function getSignal( node, input ) {
	for ( const signalType of getPreparedSignalTypes() ) {
		const current = new signalType();

		if ( !current.isSupported( node, input ) ) {
			continue;
		}

		return current;
	}

	return null;
}

function resetSignalRegistry() {
	signalTypes = [];
}

export { getSignal, resetSignalRegistry };
