import EventsList from './events.list';

const {
	      useDispatch,
	      useSelect,
      } = wp.data;
const {
	      applyFilters,
      } = wp.hooks;
const {
	      __,
      } = wp.i18n;

const {
	      SelectControl,
	      Button,
	      Card,
	      CardBody,
	      CardHeader,
	      CardFooter,
	      DropdownMenu,
	      Flex,
      } = wp.components;

const {
	      ActionListItemContext,
	      MacrosButtonTemplate,
      } = JetFBComponents;

const {
	      useActionCallback,
	      useActionsEdit,
	      useActionDetail,
      } = JetFBHooks;

const actionTypes = window.jetFormActionTypes.map( function ( action ) {
	return {
		value: action.id,
		label: action.name,
		disabled: action.disabled,
	};
} );

function ListActionItem( props ) {
	const { action, index } = props;

	const {
		      moveAction,
		      deleteAction,
		      actions,
		      updateActionObj,
		      toggleExecute,
	      } = useActionsEdit();

	const ActionCallback = useActionCallback( action.type );
	const ActionDetails  = useActionDetail( action.type );

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions', [] );

	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
	);

	const header = applyFilters(
		`jet.fb.section.actions.header.${ action.type }`, null, action );

	const conditionsIcon = action?.conditions?.length ? <span
		className="dashicon dashicons dashicons-randomize"
		data-count={ action?.conditions.length }
	/> : <span className="dashicon dashicons dashicons-randomize"/>;

	const wrapper   = [ 'jet-form-action' ];
	const isExecute = (
		action.is_execute ?? true
	);

	if ( !isExecute ) {
		wrapper.push( 'is-disabled' );
	}

	if ( currentAction?.id === action.id ) {
		wrapper.push( 'is-current' );
	}

	const ActionDropDown = () => <DropdownMenu
		icon={ 'ellipsis' }
		label={ 'Edit, move or delete' }
		controls={ [
			{
				title: __( 'Up', 'jet-form-builder' ),
				icon: 'arrow-up',
				disabled: 0 === index,
				onClick: () => {
					moveAction( index, index - 1 );
				},
			},
			{
				title: __( 'Down', 'jet-form-builder' ),
				icon: 'arrow-down',
				disabled: (
					actions.length - 1
				) === index,
				onClick: () => {
					moveAction( index, index + 1 );
				},
			},
			{
				title: __( 'Delete', 'jet-form-builder' ),
				icon: 'trash',
				onClick: () => {
					deleteAction( index );
				},
			},
			{
				title: isExecute
				       ? __( 'Turn off', 'jet-form-builder' )
				       : __( 'Turn on', 'jet-form-builder' ),
				icon: isExecute ? 'no-alt' : 'yes',
				onClick: () => {
					toggleExecute( action );
				},
			},
		] }
	/>;

	return <Card
		elevation={ 2 }
		key={ action.id }
		size={ 'extraSmall' }
		className={ wrapper }
	>
		{ header && <CardHeader>
			{ header }
		</CardHeader> }
		<CardBody>
			<SelectControl
				value={ action.type }
				options={ actionTypes }
				onChange={ type => updateActionObj( action.id, { type } ) }
			>
				{ actionTypes.map( type => <option
					key={ action.id + '__' + type.value }
					value={ type.value }
					disabled={ type.disabled }
					dangerouslySetInnerHTML={ { __html: type.label } }
				/> ) }
			</SelectControl>
			{ applyFilters(
				`jet.fb.section.actions.afterSelect.${ action.type }`, null,
				action, actions ) }
			<Flex style={ { marginTop: '0.5em' } } justify="space-around">
				<Button
					disabled={ !ActionCallback }
					icon="edit"
					label={ __( 'Edit Action', 'jet-form-builder' ) }
					onClick={ () => {
						setCurrentAction( { ...action, index } );
						setMeta( { index, modalType: 'settings' } );
					} }
				/>
				<Button
					className={ 'jet-fb-button' }
					icon={ conditionsIcon }
					label={ __(
						'Edit Conditions & Events',
						'jet-form-builder',
					) }
					onClick={ () => {
						setCurrentAction( { ...action, index } );
						setMeta( { index, modalType: 'conditions' } );
					} }
				/>
				<ActionDropDown/>
				<MacrosButtonTemplate
					variant={ null }
					isSmall={ false }
					icon={ 'editor-help' }
					label={ __(
						'Show details about selected action',
						'jet-form-builder',
					) }
				>
					<div
						className="jet-fb p-06em flex flex-dir-column gap-default">
						<div data-title={ __( 'ID:',
							'jet-form-builder' ) }><b>{ action.id }</b></div>
						{ ActionDetails && <ActionDetails/> }
					</div>
				</MacrosButtonTemplate>
			</Flex>
		</CardBody>
		{ Boolean( action.events?.length ) && <CardFooter
			style={ {
				flexWrap: 'wrap',
				rowGap: '0.5em',
			} }
		>
			<ActionListItemContext.Provider value={ { index, action } }>
				<EventsList events={ action.events }/>
			</ActionListItemContext.Provider>
		</CardFooter> }
	</Card>;
}

export default ListActionItem;