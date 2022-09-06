import useSelectPostMeta from '../../hooks/useSelectPostMeta';
import useBlockAttributes from './useBlockAttributes';

function useIsAdvancedValidation() {
	const { type }       = useSelectPostMeta( '_jf_validation' );
	const [ attributes ] = useBlockAttributes();

	if ( attributes.validation?.type ) {
		return 'advanced' === attributes.validation?.type;
	}

	return 'advanced' === type;
}

export default useIsAdvancedValidation;