const {
	      __,
      } = wp.i18n;

const {
	      useMemo,
      } = wp.element;

const {
	      Button,
	      Tooltip,
      } = wp.components;

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

	const hasVerification = actions.some(
		( { type } ) => 'verification' === type,
	);

	const onAddVerification = () => {
		setActions( [
			{ ...defaultVerification },
			...actions,
		] );
	};

	return <ActionsAfterNewButtonSlotFill.Fill>
		<Tooltip
			text={ hasVerification ? __(
				'You have already added the Verification action',
				'jet-form-builder',
			) : __(
				'Click here to add Verification action',
				'jet-form-builder',
			) }
			delay={ 200 }
			position={ 'top center' }
		>
			<Button
				onClick={ onAddVerification }
				disabled={ hasVerification }
				variant="tertiary"
			>
				{ __( '+ Verification', 'jet-form-builder' ) }
			</Button>
		</Tooltip>
	</ActionsAfterNewButtonSlotFill.Fill>;
}

export default PluginVerification;
