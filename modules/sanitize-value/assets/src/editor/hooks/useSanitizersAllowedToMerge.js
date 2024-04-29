import constants from '../store/constants';

const {
	      useSelect,
      } = wp.data;

function useSanitizersAllowedToMerge() {
	return useSelect(
		select => select( constants.store ).getAllowedToMergeTypes(),
		[],
	);
}

export default useSanitizersAllowedToMerge;