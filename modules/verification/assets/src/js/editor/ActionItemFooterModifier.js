const {
	      useLoopedAction,
	      useActionsEdit,
	      useActions,
	      useEvents,
      } = JetFBHooks;

const {
	      EditActionSettingsButton,
	      EditActionConditionsButton,
	      ActionItemWrapper,
	      SelectActionsControl,
	      ActionItemMoreButton,
	      ActionItemDetails,
      } = JetFBComponents;

const {
	      Flex,
	      CardBody,
	      CardFooter,
	      Button,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const ActionItemFooterModifier = ( DefaultItem ) => () => {
	const { action }          = useLoopedAction();
	const { updateActionObj } = useActionsEdit();
	const [ actions ]         = useActions();
	const events              = useEvents( action );

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
		<CardBody>
			<div>
				<SelectActionsControl/>
			</div>
			<Flex style={ { marginTop: '0.5em' } } justify="space-between">
				<EditActionSettingsButton/>
				<EditActionConditionsButton/>
				<ActionItemMoreButton/>
				<ActionItemDetails/>
			</Flex>
		</CardBody>
		<CardFooter>
			<Flex
				justify="flex-start"
				style={ {
					width: 'auto',
				} }
			>
				<svg
					xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24"
					width="24"
					height="24"
					aria-hidden="true"
					focusable="false"
					style={ {
						color: 'var( --wp-components-color-accent-darker-10, #9e1313 )',
					} }
				>
					<path
						fill="currentColor"
						d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"/>
				</svg>
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