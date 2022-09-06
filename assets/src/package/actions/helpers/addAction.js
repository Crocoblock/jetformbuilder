function addAction( actionType, actionInstance ) {
	wp.data.dispatch( 'jet-forms/actions' ).addCallback( actionType, actionInstance );
}

export default addAction;