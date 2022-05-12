const {
	useSelect,
	useDispatch,
} = wp.data;

const useCurrentAction = () => {
	const settings = useSelect( ( select ) => {
		return select( 'jet-forms/actions' ).getCurrentSettings();
	} );

	const {
		updateCurrentSettings: updateSettings,
	} = useDispatch( 'jet-forms/actions', [ settings ] );

	return [ settings, updateSettings ];
};

export {
	useCurrentAction
};