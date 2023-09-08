const {
	      __,
      } = wp.i18n;

const {
	      useMemo,
      } = wp.element;

const {
	      Button,
      } = wp.components;

const {
	      useDispatch,
      } = wp.data;

const {
	      useActionsEdit,
      } = JetFBHooks;

const {
	      ActionsAfterNewButtonSlotFill,
      } = JetFBComponents;

const {
	      Tools,
      } = JetFBActions;

const getDefaultVerification = () => (
	{
		id: Tools.getRandomID(),
		type: 'verification',
		settings: {},
	}
);

function PluginVerification() {
	const { actions, setActions } = useActionsEdit();

	const defaultVerification = useMemo(
		getDefaultVerification,
		[],
	);

	const noVerification = actions.every(
		( { type } ) => 'verification' !== type,
	);

	const onAddVerification = () => {
		setActions( [
			{ ...defaultVerification },
			...actions,
		] );
	};

	return noVerification && <>
		<ActionsAfterNewButtonSlotFill.Fill>
			<Button
				onClick={ onAddVerification }
			>
				{ __( '+ Verification', 'jet-form-builder' ) }
			</Button>
		</ActionsAfterNewButtonSlotFill.Fill>
	</>;
}

export default PluginVerification;
