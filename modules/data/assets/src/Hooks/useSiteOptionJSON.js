import useSiteOption from './useSiteOption';

/**
 * @param  optionName
 * @return {{isResolving: boolean, onChange: (function(*): void), value:
 *     Object}}
 */
function useSiteOptionJSON( optionName ) {
	const { value, onChange, ...otherProps } = useSiteOption( optionName );

	return {
		value: otherProps.isResolving ? {} : JSON.parse( value ),
		onChange: props => onChange( JSON.stringify( { ...props } ) ),
		...otherProps,
	};
}

export default useSiteOptionJSON;