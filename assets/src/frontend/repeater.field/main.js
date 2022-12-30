import RepeaterData from './input';
import SignalRepeater from './signal';
import NotEmptyRepeater from './restrictions/NotEmptyRepeater';
import RepeaterRestriction from './restrictions/RepeaterRestriction';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/repeater-field',
	function ( inputs ) {
		inputs = [ RepeaterData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/repeater-field',
	function ( signals ) {
		signals = [ SignalRepeater, ...signals ];

		return signals;
	},
);

const addRestriction = ( restrictions ) => {
	restrictions.push(
		NotEmptyRepeater,
		RepeaterRestriction,
	);

	return restrictions;
};

addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/repeater-field',
	addRestriction
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/repeater-field',
	addRestriction
);