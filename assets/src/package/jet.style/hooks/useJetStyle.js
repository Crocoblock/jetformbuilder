import useJetStyleSupports from './useJetStyleSupports';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import compileDeclarations from '../helpers/compileDeclarations';

const {
	      useMemo,
      } = wp.element;

/**
 * @since 3.1.0
 *
 * @returns {{}}
 */
function useJetStyle() {
	const jetStyle       = useJetStyleSupports();
	const [ attributes ] = useBlockAttributes();

	return useMemo(
		() => {
			let response = {};

			for ( const entire of Object.entries( jetStyle ) ) {
				compileDeclarations(
					attributes?.style,
					response,
					...entire,
				);
			}

			return response;
		},
		[ attributes?.style, jetStyle ],
	);

}

export default useJetStyle;