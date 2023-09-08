const {
	      useLoopedAction,
	      useActionsEdit,
      } = JetFBHooks;

const {
	      EditActionSettingsButton,
	      ActionItemWrapper,
	      SelectActionsControl,
	      ActionItemMoreButton,
      } = JetFBComponents;

const {
	      Flex,
	      CardBody,
      } = wp.components;

const VerificationActionItem = ( DefaultItem ) => () => {
	const { action } = useLoopedAction();

	if ( 'verification' !== action.type ) {
		return <DefaultItem/>;
	}

	return <ActionItemWrapper>
		<CardBody>
			<div>
				<SelectActionsControl/>
			</div>
			<Flex style={ { marginTop: '0.5em' } } justify="space-between">
				<EditActionSettingsButton/>
				<ActionItemMoreButton exclude={ [ 'up', 'down', 'off-on' ] }/>
			</Flex>
		</CardBody>
	</ActionItemWrapper>;
};

export default VerificationActionItem;