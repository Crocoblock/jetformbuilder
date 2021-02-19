export function uniqIdWithBlockName( blockName ) {
	return (
		component = 'default',
		suffix = ( new Date() ).getTime()
	) => `${ blockName }/${ component }/${ suffix }`;
}