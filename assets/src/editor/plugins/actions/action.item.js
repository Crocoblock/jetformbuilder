import { useActionsEdit, useActionSingle } from './hooks';

const {
	withDispatch,
	withSelect,
	useDispatch,
} = wp.data;

const { applyFilters } = wp.hooks;

const { __ } = wp.i18n;

const {
	SelectControl,
	Button,
	Card,
	CardBody,
	CardHeader,
	DropdownMenu,
	Flex,
} = wp.components;

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
	} = useActionsEdit();

	const { getCallback, setCurrentAction } = useActionSingle();

	const header = applyFilters( `jet.fb.section.actions.header.${ action.type }`, null, action );

	const conditionsIcon = action?.conditions?.length ? <span
		className="dashicon dashicons dashicons-randomize"
		data-count={ action?.conditions.length }
	/> : <span
		className="dashicon dashicons dashicons-randomize"
	/>;

	const ActionDropDown = <DropdownMenu
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
		] }
	/>;

	return <Card
		key={ action.id }
		size={ 'extraSmall' }
		className={ 'jet-form-action' }
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
			{ applyFilters( `jet.fb.section.actions.afterSelect.${ action.type }`, null, action, actions ) }
			<Flex style={ { marginTop: '0.5em' } } justify='space-around'>
				<Button
					disabled={ ! getCallback( action.type ) }
					icon='edit'
					label={ __( 'Edit Action', 'jet-form-builder' ) }
					onClick={ () => setCurrentAction( { ...action, index } ) }
				/>
				<Button
					icon={ conditionsIcon }
					label={ __( 'Conditions', 'jet-form-builder' ) }
					onClick={ () => setCurrentAction( { ...action, index } ) }
				/>
				<ActionDropDown/>
			</Flex>
		</CardBody>
		<CardFooter>

		</CardFooter>
	</Card>;
}

export default ListActionItem;