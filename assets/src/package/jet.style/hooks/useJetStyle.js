import useJetStyleSupports from './useJetStyleSupports';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import compileDeclarations from '../helpers/compileDeclarations';

const {
	      useMemo,
      } = wp.element;

/**
 * @since 3.1.0
 *
 * @param style
 * @param className
 * @param props
 * @returns {{style: (*), className: string}}
 */
function useJetStyle( { style, className, ...props } = {} ) {
	const jetStyle       = useJetStyleSupports();
	const [ attributes ] = useBlockAttributes();

	const compiled = useMemo(
		() => compileDeclarations( attributes?.style, jetStyle ),
		[ attributes?.style, jetStyle ],
	);

	return {
		style: {
			...compiled.style,
			...(
				style ?? {}
			),
		},
		className: [ className, compiled.className ].
			filter( Boolean ).
			join( ' ' ),
		...props,
	};

}

export default useJetStyle;