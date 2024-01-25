const { get } = window._;

/**
 * @param blockSettings {Object} from block.json
 * @param supportsPath  {String|Array}
 */
function getSupport( blockSettings, supportsPath ) {
	if ( !Array.isArray( supportsPath ) ) {
		supportsPath = [ supportsPath ];
	}

	return get(
		blockSettings,
		[ 'supports', ...supportsPath ],
		false,
	);
}

export default getSupport;