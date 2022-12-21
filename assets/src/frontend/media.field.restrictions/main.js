import MaxFilesRestriction from './MaxFilesRestriction';
import SingleFileRestriction from './SingleFileRestriction';
import SizeFormatFilter from './SizeFormatFilter';

const { addFilter } = JetPlugins.hooks;

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