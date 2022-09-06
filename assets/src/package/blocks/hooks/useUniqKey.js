const {
	      useBlockProps,
      } = wp.blockEditor;

function useUniqKey() {
	const blockProps = useBlockProps();

	return slug => (
		slug + '-' + blockProps[ 'data-block' ]
	);
}

export default useUniqKey;