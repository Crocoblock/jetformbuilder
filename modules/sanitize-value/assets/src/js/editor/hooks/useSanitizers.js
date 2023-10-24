import constants from '../store/constants';

const {
	      useSelect,
      } = wp.data;

function useSanitizers() {
	return useSelect( select => select( constants.store ).getTypes(), [] );
}

export default useSanitizers;