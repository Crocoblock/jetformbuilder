import FileSizeRestriction from './FileSizeRestriction';
import FileExtensionRestriction from './FileExtensionRestriction';

const {
	      applyFilters,
      } = wp.hooks;

const getSingleFileRestrictions = () => applyFilters(
	'jet.fb.restrictions.file',
	[
		FileSizeRestriction,
		FileExtensionRestriction,
	],
);

/**
 * @type {BaseFileRestriction[]}
 */
let restrictions = [];

/**
 * @param reporting {AdvancedReporting}
 */
function getFileRestrictions( reporting ) {
	if ( !restrictions.length ) {
		restrictions = getSingleFileRestrictions();
	}

	const response = [];

	for ( const restriction of restrictions ) {
		/**
		 * @type {BaseFileRestriction}
		 */
		const current = new restriction();

		if ( !current.isSupported( reporting.getNode(), reporting ) ) {
			continue;
		}

		current.setReporting( reporting );
		current.onReady();

		response.push( current );
	}

	return response;

}

export {
	getSingleFileRestrictions,
	getFileRestrictions,
};