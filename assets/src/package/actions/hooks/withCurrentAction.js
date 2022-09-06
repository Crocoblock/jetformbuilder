function withCurrentAction( select ) {
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	return { currentAction };
}

export default withCurrentAction;