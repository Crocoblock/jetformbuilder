import useJetStyleSupports from './useJetStyleSupports';

function useCssVarPath( varName ) {
	const jetStyle = useJetStyleSupports();

	return jetStyle[ varName ] ?? [];
}

export default useCssVarPath;