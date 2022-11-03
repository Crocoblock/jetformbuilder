function isSuccessStatus( status ) {
	return 'success' === status || status?.includes( 'dsuccess|' );
}

export { isSuccessStatus };