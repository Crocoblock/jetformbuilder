import { useActions } from "../../helpers/hooks-helper";
import { getFormFieldsBlocks } from "../../helpers/blocks-helper";
import ActionModal from "../../components/actions/action-modal";
import RepeaterWithState from "../../components/repeater-with-state";
import FieldWithPreset from "../../components/field-with-preset";
import DynamicPreset from "../../components/presets/dynamic-preset";
import {
	conditionOperators,
	defaultActions,
	getRandomID,
	newItemCondition
} from "./options";

const {
	TextareaControl,
	ToggleControl,
	SelectControl,
	Button,
	Card,
	CardBody,
	DropdownMenu,
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

const { __ } = wp.i18n;

export default function PluginActions() {

	const [ actions, setActions ] = useActions( true );

	useEffect( () => {
		if ( 0 === actions.length ) {
			setActions( defaultActions );
		}
	}, [] );

	const moveAction = ( fromIndex, toIndex ) => {

		var item = JSON.parse( JSON.stringify( actions[ fromIndex ] ) ),
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
			}
			else {
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

	const actionTypes = window.jetFormActionTypes.map( function ( action ) {
		return {
			value: action.id,
			label: action.name,
		};
	} );

	var Callback = false;

	for ( var i = 0; i < window.jetFormActionTypes.length; i ++ ) {

		if ( window.jetFormActionTypes[ i ].id === editedAction.type && window.jetFormActionTypes[ i ].callback ) {
			Callback = window.jetFormActionTypes[ i ].callback;
			break;
		}
	}

	const updateActionSettings = action => {
		updateAction( action.id, 'settings', action.settings );
		closeModal();
	}

	const updateActionCondition = items => {
		updateAction( processedAction.id, 'conditions', items );
		setEditProcessAction( false );
	}

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

	return <>
		{ actions && actions.map( ( action, index ) => {
			return <Card
				key={ action.id }
				size={ 'extraSmall' }
				className={ 'jet-form-action' }
			>
				<CardBody>
					<SelectControl
						value={ action.type }
						options={ actionTypes }
						onChange={ ( newType ) => {
							updateAction( action.id, 'type', newType );
						} }
					/>
					<Button
						icon='edit'
						label={ 'Edit Action' }
						onClick={ () => {
							setEditedAction( () => ( {
								...action
							} ) );
						} }
					/>
					<div/>
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
								}
							},
							{
								title: 'Down',
								icon: 'arrow-down',
								disabled: index === actions.length,
								onClick: () => {
									if ( ( actions.length - 1 ) !== index ) {
										moveAction( index, index + 1 );
									}
								}
							},
							{
								title: 'Delete',
								icon: 'trash',
								onClick: () => {
									deleteAction( index );
								}
							}
						] }
					/>

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
					}
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
				settings={ editedAction.settings }
				onChange={ ( data ) => {
					setEditedAction( prev => ( {
						...prev,
						settings: data
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
						helpKey: 'conditional_action'
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
									label="Value to Compare"
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
};