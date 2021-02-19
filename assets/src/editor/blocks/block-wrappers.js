import baseMetaData from "./base-block.json";

export function getEditWrapperProps( props ) {
	const { attributes } = baseMetaData;

	return { ...attributes, ...props };
}

export function withCustomProps( EditComponent, additional ) {
	return props => <EditComponent { ...props } fieldCustom={ { ...additional } }/>;
}