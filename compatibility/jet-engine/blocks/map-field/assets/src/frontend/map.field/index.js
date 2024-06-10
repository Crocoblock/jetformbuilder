import MapFieldData from './input';
import SignalMapField from './signal';
import NotEmptyMapRestriction from './NotEmptyMapRestriction';
import RequiredMapRestriction from './RequiredMapRestriction';
import './index.pcss';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/map-field',
	function ( inputs ) {
		inputs = [ MapFieldData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/map-field',
	function ( signals ) {
		signals = [ SignalMapField, ...signals ];

		return signals;
	},
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/map-field',
	function ( restrictions ) {
		restrictions.push( NotEmptyMapRestriction );

		return restrictions;
	},
);

addFilter(
	'jet.fb.restrictions.default',
	'jet-form-builder/map-field',
	function ( restrictions ) {
		restrictions.push( RequiredMapRestriction );

		return restrictions;
	},
);
