import ColorEditControls from './ColorEditControls';
import useJetStyleSupports from '../hooks/useJetStyleSupports';

const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      useMemo,
      } = wp.element;

/**
 * @since 3.1.0 Introduced. Supports only color-family controls
 *
 * @param optionVars {Object} Property: CSS-var name => Value: object with
 *     options
 * @param optionVars.$cssVar {Object} Instead of $cssVar can be any CSS
 *     variable (two hyphens are required)
 * @param optionVars.$cssVar.label {String} Name of control
 * @returns {JSX.Element|null}
 */
function StyleManagerEditControls( { optionVars = {} } ) {
	const jetStyle     = useJetStyleSupports();
	const { clientId } = useBlockEditContext();

	const { color } = useMemo(
		() => {
			const response = {};

			for ( const [ cssVar, jetStylePath ] of Object.entries( jetStyle )
				) {
				if ( !jetStylePath.includes( 'color' ) ) {
					continue;
				}
				response.color = response.color ?? {};

				response.color[ cssVar ] = {
					path: jetStylePath,
					...(
						optionVars[ cssVar ] ?? {}
					),
				};
			}

			return response;
		},
		[ clientId ],
	);

	if ( !color ) {
		return null;
	}

	return <>
		<ColorEditControls cssVars={ color }/>
	</>;
}

export default StyleManagerEditControls;