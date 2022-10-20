import FileData from './input';
import SignalFile from './signal';
import MaxFilesRestriction from './restrictions/MaxFilesRestriction';
import SingleFileRestriction from './restrictions/SingleFileRestriction';
import SizeFormatFilter from './filters/SizeFormatFilter';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/media-field',
	function ( inputs ) {
		inputs = [ FileData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/media-field',
	function ( signals ) {
		signals = [ SignalFile, ...signals ];

		return signals;
	},
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/media-field',
	function ( restrictions ) {
		restrictions = [
			MaxFilesRestriction,
			SingleFileRestriction,
			...restrictions,
		];

		return restrictions;
	},
);

addFilter(
	'jet.fb.restrictions.filters',
	'jet-form-builder/media-field',
	function ( filters ) {
		filters.push( SizeFormatFilter );

		return filters;
	},
);