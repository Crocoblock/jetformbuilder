import useJetStyleSupports from './useJetStyleSupports';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';

const { get } = window._;

/**
 * @since 3.1.0
 *
 * @returns {{}}
 */
function useJetStyle() {
	const jetStyle       = useJetStyleSupports();
	const [ attributes ] = useBlockAttributes();

	const currentRoot = attributes?.style ?? {};
	const response    = {};

	for ( const [ cssVar, path ] of Object.entries( jetStyle ) ) {
		const value = get( currentRoot, path );

		if ( !value ) {
			continue;
		}
		response[ cssVar ] = value;
	}

	return response;

}

export default useJetStyle;