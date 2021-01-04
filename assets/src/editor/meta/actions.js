import Tools from "../tools";
import ActionModal from "../components/action-modal";
import FieldWithPreset from "../components/field-with-preset";
import DynamicPreset from "../components/presets/dynamic-preset";
import RepeaterWithState from "../components/repeater-with-state";

function getRandomID() {
	return Math.floor( Math.random() * 8999 ) + 1000;
}

const defaultActions = [{
	type: 'send_email',
	id: getRandomID(),
	settings: {
		subject: 'New order on website',
		content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
	}
}];

const newItemCondition = {
	execute: false,
	operator: '',
	field: '',
	default: '',
};

const conditionOperators = [
	{ label: '--', value: '' },
	{ label: 'Equal', value: 'equal' },
	{ label: 'Greater than', value: 'greater' },
	{ label: 'Less than', value: 'less' },
	{ label: 'Between', value: 'between' },
	{ label: 'In the list', value: 'one_of' },
	{ label: 'Contain text', value: 'contain' },
];

const {
	TextControl,
	TextareaControl,
	ToggleControl,
	SelectControl,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	DropdownMenu,
	Modal
} = wp.components;

const {
	registerPlugin
} = wp.plugins;

const {
	PluginDocumentSettingPanel
} = wp.editPost;

const {
	useSelect,
	useDispatch
} = wp.data;

const {
	useState,
	useEffect
} = wp.element;

const {
	withState
} = wp.compose;

const { __ } = wp.i18n;

function ActionsMeta() {

	const DocumentSettingPanelActions = () => {

		const meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

		const {
			editPost
		} = useDispatch( 'core/editor' );


		const [actions, setActions] = useState( JSON.parse( meta._jf_actions || '[]' ) );

		const [userAction, setUserAction] = useState( 'load' );

		useEffect( () => {

			editPost( {
				meta: ( {
					...meta,
					_jf_actions: JSON.stringify( actions )
				} )
			} );

			return () => {
				if ( userAction === 'load' && actions.length === 0 ) {
					setUserAction( 0 );
					setActions( defaultActions );
				}
				if ( actions.length !== 0 ) {
					setUserAction( 0 );
				}
			}
		} );


		const moveAction = ( fromIndex, toIndex ) => {

			var item = JSON.parse( JSON.stringify( actions[ fromIndex ] ) ),
				replacedItem = JSON.parse( JSON.stringify( actions[ toIndex ] ) );

			actions.splice( toIndex, 1, item );
			actions.splice( fromIndex, 1, replacedItem );

			setActions( [...actions] );

		};

		const deleteAction = ( index ) => {
			actions.splice( index, 1 );
			setActions( [...actions] );
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

		const [isEdit, setEdit] = useState( false );
		const [editedAction, setEditedAction] = useState( {} );

		const [isEditProcessAction, setEditProcessAction] = useState( false );
		const [processedAction, setProcessedAction] = useState( {} );

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
		}, [editedAction] );

		useEffect( () => {
			if ( processedAction.type ) {
				setEditProcessAction( true );
			}
		}, [processedAction] );

		const formFields = Tools.getFormFieldsBlocksWithPlaceholder();

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-actions' }
				title={ 'Post Submit Actions' }
			>
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
								icon={ 'edit' }
								label={ 'Edit Action' }
								onClick={ () => {
									setEditedAction( () => ( {
										...action
									} ) );
								} }
							/>
							<div/>
							<Button
								icon={ 'admin-generic' }
								label={ 'Process & Manipulate' }
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
					classNames={ ['width-60'] }
					onRequestClose={ closeModal }
					title={ 'Edit Action' }
					onUpdateClick={ () => {
						updateActionSettings( editedAction )
					} }
					onCancelClick={ closeModal }
				>
					<Callback
						settings={ editedAction.settings }
						onChange={ ( data ) => {
							setEditedAction( {
								...editedAction,
								settings: data
							} );
						} }
					/>
				</ActionModal> }
				{ isEditProcessAction && <ActionModal
					classNames={ ['width-60'] }
					title={ 'Edit Process Conditions & Data Manipulation' }
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
							isSafeDeleting
						>
							{ ( { currentItem, changeCurrentItem } ) => {
								return <>
									<ToggleControl
										label={ __( 'Execute an action when the condition is met' ) }
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
										triggerClasses={ ['trigger__textarea'] }
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
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-actions-panel', {
		render: DocumentSettingPanelActions,
		icon: null,
	} );
}

export default ActionsMeta;
