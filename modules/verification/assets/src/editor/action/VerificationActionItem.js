const {
	      useLoopedAction,
      } = JetFBHooks;

const {
	      EditActionSettingsButton,
	      ActionItemWrapper,
	      ActionTitle,
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
			<ActionTitle/>
			<Flex style={ { marginTop: '0.5em' } } justify="space-between">
				<EditActionSettingsButton/>
				<ActionItemMoreButton exclude={ [ 'up', 'down', 'off-on' ] }/>
			</Flex>
		</CardBody>
	</ActionItemWrapper>;
};

export default VerificationActionItem;