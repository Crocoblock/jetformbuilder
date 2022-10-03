/**
 * @param callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected( callbacks ) {
	const results = await Promise.allSettled(
		callbacks.map( current => new Promise( current ) ),
	);

	const invalid = results.filter(
		( { status } ) => 'rejected' === status,
	);

	return invalid.map( ( { reason, value } ) => (
		reason ?? value
	) );
}

export default allRejected;