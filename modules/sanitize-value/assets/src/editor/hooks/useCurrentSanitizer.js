import SanitizerContext from '../components/SanitizerContext';

const { useContext } = wp.element;

function useCurrentSanitizer() {
	return useContext( SanitizerContext );
}

export default useCurrentSanitizer;