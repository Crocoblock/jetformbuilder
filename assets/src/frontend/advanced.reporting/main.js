import AdvancedReporting from './AdvancedReporting';
import SizeFormatFilter from './file.macro/SizeFormatFilter';
import MaxFilesRestriction from './file.restrictions/MaxFilesRestriction';
import SingleFileRestriction from './file.restrictions/SingleFileRestriction';

const { addFilter } = wp.hooks;

addFilter(
	'jet.fb.reporting',
	'jet-form-builder/advanced-reporting',
	function ( reporting ) {
		reporting = [ AdvancedReporting, ...reporting ];

		return reporting;
	},
);

addFilter(
	'jet.fb.restrictions',
	'jet-form-builder/advanced-reporting',
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
	'jet-form-builder/advanced-reporting',
	function ( filters ) {
		filters.push( SizeFormatFilter );

		return filters;
	},
);