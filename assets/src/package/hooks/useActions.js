import useMetaState from './useMetaState';

function useActions() {
	return useMetaState( '_jf_actions' )
}

export default useActions;