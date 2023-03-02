const {
	      useBlockEditContext,
      } = wp.blockEditor;

function useUniqKey() {
	const { clientId } = useBlockEditContext();

	return slug => (
		slug + '-' + clientId
	);
}

export default useUniqKey;