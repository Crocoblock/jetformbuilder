import useSiteOption from './useSiteOption';

function useSiteOptionJSON( optionName ) {
	const [ setting, onChangeSetting ] = useSiteOption( optionName );

	return [
		JSON.parse( setting ),
		props => onChangeSetting( JSON.stringify( { ...props } ) ),
	];
}

export default useSiteOptionJSON;