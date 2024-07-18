import { Button, CardFooter, Flex, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import warnIcon from '@root/assets/src/editor/warnIcon';

const {
	      useLoopedAction,
	      useActionsEdit,
	      useActions,
	      useEvents,
      } = JetFBHooks;

const {
	      ActionItemWrapper,
	      ActionItemBody,
      } = JetFBComponents;

const ActionItemFooterModifier = ( DefaultItem ) => () => {
	/* eslint-disable react-hooks/rules-of-hooks */
	const { action }          = useLoopedAction();
	const { updateActionObj } = useActionsEdit();
	const [ actions ]         = useActions();
	const events              = useEvents( action );
	/* eslint-enable react-hooks/rules-of-hooks */

	const hasVerification = actions.some(
		current => current.type === 'verification',
	);

	if ( action?.events?.length ||
		'verification' === action.type ||
		!hasVerification ||
		1 >= events.length
	) {
		return <DefaultItem/>;
	}

	return <ActionItemWrapper>
		<ActionItemBody/>
		<CardFooter>
			<Flex
				justify="flex-start"
				style={ {
					flex: 1,
				} }
			>
				<Icon size={ 20 } icon={ warnIcon }/>
				{ __( 'Runs on verification', 'jet-form-builder' ) }
			</Flex>
			<Button
				isLink
				onClick={ () => updateActionObj(
					action.id,
					{ events: [ 'DEFAULT.PROCESS' ] },
				) }
				style={ {
					textDecoration: 'none',
					borderBottom: '2px dotted var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))',
				} }
			>
				{ __( 'Run always', 'jet-form-builder' ) }
			</Button>
		</CardFooter>
	</ActionItemWrapper>;
};

export default ActionItemFooterModifier;