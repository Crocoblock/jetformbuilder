const {
	      set,
      } = JetFBActions;

function resolveStyle( attributes, path ) {
	const currentRoot = attributes?.style ?? {};
	const { get }     = window._;

	const getUpdatedStyle = value => {
		return set(
			JSON.parse( JSON.stringify( currentRoot ) ),
			path,
			value,
		);
	};

	return [ get( currentRoot, path ), getUpdatedStyle ];
}

export default resolveStyle;