const {
	      useSelect,
	      useDispatch,
      } = wp.data;

function useOpenEditorPanel( panelName ) {
	const { enableComplementaryArea } = useDispatch( 'core/interface' );
	const { toggleEditorPanelOpened } = useDispatch( 'core/edit-post' );

	const isOpened = useSelect(
		select => select( 'core/edit-post' ).isEditorPanelOpened( panelName ),
		[ panelName ],
	);

	return () => {
		// switch from block to post panel
		enableComplementaryArea( 'core/edit-post', 'edit-post/document' );

		if ( isOpened ) {
			return;
		}

		toggleEditorPanelOpened( panelName );
	};
}

export default useOpenEditorPanel;