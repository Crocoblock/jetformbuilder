import useMetaState from '../../hooks/useMetaState';

function useActions( deps = undefined ) {
	return useMetaState( '_jf_actions', '[]', deps );
}

export default useActions;