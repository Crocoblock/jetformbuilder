import {
	conditionOperators,
	defaultActions,
	getRandomID,
	newItemCondition,
} from "./options";

const {
		  getFormFieldsBlocks,
	  } = JetFBActions;

const {
		  ActionModal,
		  RepeaterWithState,
		  FieldWithPreset,
		  DynamicPreset,
	  } = JetFBComponents;

const { useActions } = JetFBHooks;

const {
		  TextareaControl,
		  ToggleControl,
		  SelectControl,
		  Button,
		  Card,
		  CardBody,
		  CardHeader,
		  DropdownMenu,
		  Flex,
	  } = wp.components;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const { __ } = wp.i18n;

const { applyFilters } = wp.hooks;

const actionTypes = window.jetFormActionTypes.map( function( action ) {
	return {
		value: action.id,
		label: action.name,
	};
} );

function getActionCallback( editedAction ) {
	for ( let i = 0; i < window.jetFormActionTypes.length; i++ ) {
		if ( window.jetFormActionTypes[ i ].id === editedAction.type && window.jetFormActionTypes[ i ].callback ) {
			return window.jetFormActionTypes[ i ].callback;
		}
	}

	return false;
}

export default function PluginActions() {

	const [ actions, setActions ] = useActions( true );

	useEffect( () => {
		if ( 0 === actions.length ) {
			setActions( defaultActions );
		}
	}, [] );

	const moveAction = ( fromIndex, toIndex ) => {

		var item         = JSON.parse( JSON.stringify( actions[ fromIndex ] ) ),
			replacedItem = JSON.parse( JSON.stringify( actions[ toIndex ] ) );

		actions.splice( toIndex, 1, item );
		actions.splice( fromIndex, 1, replacedItem );

		setActions( [ ...actions ] );

	};

	const deleteAction = ( index ) => {
		actions.splice( index, 1 );
		setActions( [ ...actions ] );
	};

	const updateAction = ( id, key, value ) => {
		setActions( actions.map( ( action, index ) => {
			if ( action.id === id ) {
				var newAction = JSON.parse( JSON.stringify( action ) );
				newAction[ key ] = value;
				return newAction;
			} else {
				return action;
			}
		} ) );
	};

	const [ isEdit, setEdit ] = useState( false );
	const [ editedAction, setEditedAction ] = useState( {} );

	const [ isEditProcessAction, setEditProcessAction ] = useState( false );
	const [ processedAction, setProcessedAction ] = useState( {} );

	const closeModal = () => {
		setEdit( false )
	};

	var Callback = getActionCallback( editedAction );

	const updateActionSettings = action => {
		updateAction( action.id, 'settings', action.settings );
		closeModal();
	}

	const updateActionCondition = items => {
		updateAction( processedAction.id, 'conditions', items );
		setEditProcessAction( false );
	}

	const updateActionType = ( id, type ) => {
		setActions( prev => prev.map( prevItem => {
			if ( prevItem.id === id ) {
				var newAction = JSON.parse( JSON.stringify( prevItem ) );
				newAction.type = type;
				newAction.settings = newAction.settings || {};
				newAction.settings[ type ] = newAction.settings[ type ] || {};

				return newAction;
			} else {
				return prevItem;
			}
		} ) );
	};

	useEffect( () => {
		if ( editedAction.type ) {
			setEdit( true );
		}
	}, [ editedAction ] );

	useEffect( () => {
		if ( processedAction.type ) {
			setEditProcessAction( true );
		}
	}, [ processedAction ] );

	const formFields = getFormFieldsBlocks( [], '--' );

	const getMergedSettings = () => {
		return editedAction.settings[ editedAction.type ] || editedAction.settings;
	};

	return <>
		{ actions && actions.map( ( action, index ) => {
			const header = applyFilters( `jet.fb.section.actions.header.${ action.type }`, null, action, actions );
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
						onChange={ newType => updateActionType( action.id, newType ) }
					/>
					{ applyFilters( `jet.fb.section.actions.afterSelect.${ action.type }`, null, action, actions ) }
					<Flex style={ { marginTop: '0.5em' } } justify='space-around'>
						<Button
							disabled={ ! getActionCallback( action ) }
							icon='edit'
							label={ 'Edit Action' }
							onClick={ () => {
								setEditedAction( () => ( {
									...action,
								} ) );
							} }
						/>
						<Button
							icon='randomize'
							label={ 'Conditions' }
							onClick={ () => {
								setProcessedAction( () => ( { ...action } ) );
							} }
						/>
						<DropdownMenu
							icon={ 'ellipsis' }
							label={ 'Edit, move or delete' }
							controls={ [
								{
									title: 'Up',
									icon: 'arrow-up',
									disabled: true,
									onClick: () => {
										if ( 0 !== index ) {
											moveAction( index, index - 1 );
										}
									},
								},
								{
									title: 'Down',
									icon: 'arrow-down',
									disabled: index === actions.length,
									onClick: () => {
										if ( ( actions.length - 1 ) !== index ) {
											moveAction( index, index + 1 );
										}
									},
								},
								{
									title: 'Delete',
									icon: 'trash',
									onClick: () => {
										deleteAction( index );
									},
								},
							] }
						/>
					</Flex>

				</CardBody>
			</Card>
		} ) }
		<Button
			isPrimary
			onClick={ () => {
				setActions( [
					...actions,
					{
						type: 'send_email',
						id: getRandomID(),
						settings: {},
					},
				] );
			} }
		>
			{ '+ New Action' }
		</Button>
		{ isEdit && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ closeModal }
			title={ 'Edit Action' }
			onUpdateClick={ () => {
				updateActionSettings( editedAction )
			} }
			onCancelClick={ closeModal }
		>
			{ Callback && <Callback
				settings={ getMergedSettings() }
				onChange={ ( data ) => {
					setEditedAction( prev => ( {
						...prev,
						settings: {
							...prev.settings,
							[ editedAction.type ]: data,
						},
					} ) );
				} }
			/> }
		</ActionModal> }
		{ isEditProcessAction && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ 'Edit Action Conditions' }
			onRequestClose={ () => setEditProcessAction( false ) }
			onCancelClick={ () => setEditProcessAction( false ) }
		>
			{ ( { actionClick, onRequestClose } ) => {
				return <RepeaterWithState
					items={ processedAction.conditions }
					newItem={ newItemCondition }
					onUnMount={ onRequestClose }
					isSaveAction={ actionClick }
					onSaveItems={ updateActionCondition }
					addNewButtonLabel={ __( 'Add New Condition' ) }
					help={ {
						helpVisible: conditions => conditions.length > 1,
						helpSource: window.JetFormEditorData.helpForRepeaters,
						helpKey: 'conditional_action',
					} }
				>
					{ ( { currentItem, changeCurrentItem } ) => {
						let executeLabel = __( 'To fulfill this condition, the result of the check must be', 'jet-form-builder' ) + ' ';
						executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';

						return <>
							<ToggleControl
								label={ executeLabel }
								checked={ currentItem.execute }
								onChange={ newValue => {
									changeCurrentItem( { execute: newValue } );
								} }
							/>
							<SelectControl
								label="Operator"
								labelPosition="side"
								value={ currentItem.operator }
								options={ conditionOperators }
								onChange={ newValue => {
									changeCurrentItem( { operator: newValue } );
								} }
							/>
							<SelectControl
								label="Field"
								labelPosition="side"
								value={ currentItem.field }
								options={ formFields }
								onChange={ newValue => {
									changeCurrentItem( { field: newValue } );
								} }
							/>
							<FieldWithPreset
								baseControlProps={ {
									label: "Value to Compare",
								} }
								ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
									value={ currentItem.default }
									isSaveAction={ actionClick }
									onSavePreset={ newValue => {
										changeCurrentItem( { default: newValue } );
									} }
									excludeSources={ [ 'query_var' ] }
									onUnMount={ onRequestClose }
								/> }
								triggerClasses={ [ 'trigger__textarea' ] }
							>
								<TextareaControl
									className={ 'jet-control-clear jet-user-fields-map__list' }
									value={ currentItem.default }
									onChange={ newValue => {
										changeCurrentItem( { default: newValue } );
									} }
								/>
							</FieldWithPreset>
						</>;
					} }
				</RepeaterWithState>;
			} }
		</ActionModal> }
	</>
}