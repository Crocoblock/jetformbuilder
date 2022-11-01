function addDetail( actionType, callback ) {
	return wp.data.dispatch( 'jet-forms/actions' ).
		addDetail( actionType, callback );
}

export default addDetail;