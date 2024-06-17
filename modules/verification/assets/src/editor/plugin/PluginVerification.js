import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
import { Button, Tooltip } from '@wordpress/components';
import { plus } from '@wordpress/icons';

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
				icon={ plus }
			>
				{ __( 'Verification', 'jet-form-builder' ) }
			</Button>
		</Tooltip>
	</ActionsAfterNewButtonSlotFill.Fill>;
}

export default PluginVerification;
