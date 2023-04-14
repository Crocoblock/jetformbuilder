import useBlockAttributes from './useBlockAttributes';

function useCssVars() {
	const { get } = window._;

	const [ attributes ] = useBlockAttributes();

	if ( !attributes.hasOwnProperty( 'style' ) ) {
		return {};
	}

}

export default useCssVars;