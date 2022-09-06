const {
	      useBlockProps,
      } = wp.blockEditor;

const { useSelect } = wp.data;

/**
 * @returns {{functions, operators}}
 */
function useBlockConditions() {
	const blockProps = useBlockProps();

	const [ operators, functions ] = useSelect( select => {
		return [
			select( 'jet-forms/block-conditions' ).getOperators(),
			select( 'jet-forms/block-conditions' ).getFunctions(),
		];
	}, [] );

	if ( 'jet-forms/conditional-block' !== blockProps[ 'data-type' ] ) {
		return { operators, functions };
	}

	const filteredFunctions = useSelect(
		select => select( 'jet-forms/block-conditions' ).getFilteredFunctions( blockProps ),
		[],
	);

	return {
		operators,
		functions: filteredFunctions,
	};
}

export default useBlockConditions;