import useBlockAttributes from './useBlockAttributes';

/**
 * @param path {String[]}
 */
function useStyle( path ) {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const { get } = window._;

	let currentRoot = attributes?.style ?? {};

	const updateStyle = value => {
		const newStyle = set(
			JSON.parse( JSON.stringify( currentRoot ) ),
			path,
			value,
		);

		setAttributes( {
			style: newStyle,
		} );

		return newStyle;
	};

	return [ get( currentRoot, path ), updateStyle ];
}

export default useStyle;