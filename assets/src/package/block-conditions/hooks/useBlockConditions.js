const { useSelect } = wp.data;

/**
 * @return {{functions, operators}}
 */
function useBlockConditions() {
	const [ operators, functions ] = useSelect( select => {
		return [
			select( 'jet-forms/block-conditions' ).getOperators(),
			select( 'jet-forms/block-conditions' ).getFunctions(),
		];
	}, [] );

	return {
		operators,
		functions,
	};
}

export default useBlockConditions;