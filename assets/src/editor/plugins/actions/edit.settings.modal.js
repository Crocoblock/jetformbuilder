
function getActionCallback( editedAction ) {
	for ( let i = 0; i < window.jetFormActionTypes.length; i ++ ) {
		if ( window.jetFormActionTypes[ i ].id === editedAction.type && window.jetFormActionTypes[ i ].callback ) {
			return window.jetFormActionTypes[ i ].callback;
		}
	}

	return false;
}

function EditSettingsModal( props ) {

	var Callback = getActionCallback( editedAction );

	return <ActionModal
		classNames={ [ 'width-60' ] }
		onRequestClose={ closeModal }
		title={ 'Edit Action' }
		onUpdateClick={ () => {
			updateActionObj( editedAction.id, {
				settings: editedAction.settings,
			} );
			closeModal();
		} }
		onCancelClick={ closeModal }
	>
		{ Callback && <Callback
			settings={ getMergedSettings() }
			actionId={ editedAction.id }
			onChange={ ( data ) => {
				setEditedAction( prev => (
					{
						...prev,
						settings: {
							...prev.settings,
							[ editedAction.type ]: data,
						},
					}
				) );
			} }
		/> }
	</ActionModal>;
}

export default EditSettingsModal;