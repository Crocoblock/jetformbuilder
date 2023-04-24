import useJetStyleSupports from './useJetStyleSupports';
import resolveStyle from '../helpers/resolveStyle';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';

function useStyle( cssVar ) {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const jetStyle = useJetStyleSupports();
	const path     = jetStyle[ cssVar ] ?? [];

	if ( !path.length ) {
		return [ '', () => {} ];
	}

	const [ value, getUpdatedValue ] = resolveStyle( attributes, path );

	return [
		value,
		newValue => setAttributes( { style: getUpdatedValue( newValue ) } ),
	];
}

export default useStyle;