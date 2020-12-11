import ActionModal from "../components/action-modal";
import Repeater from "../components/repeater";

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

function ActionsMeta() {

	const {
		TextControl,
		SelectControl,
		Button,
		ButtonGroup,
		Card,
		CardBody,
		Flex,
		FlexItem,
		DropdownMenu,
		Panel,
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

	const DocumentSettingPanel = () => {

		const meta = useSelect( ( select ) => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		} );

		const {
			editPost
		} = useDispatch( 'core/editor' );


		const [actions, setActions] = useState( JSON.parse( meta._jf_actions ) );

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
		const [isEditProcessAction, setEditProcessAction] = useState( false );
		const [editedAction, setEditedAction] = useState( {} );
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

		const updateActionFromModal = ( action ) => {
			updateAction( action.id, 'settings', action.settings );
			closeModal();
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

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-actions' }
				title={ 'Post Submit Actions' }
			>
				{ actions.map( ( action, index ) => {
					return <Card
						key={ action.id }
						size={ 'extraSmall' }
						className={ 'jet-form-action' }
					>
						<CardBody>
							<Flex
								align={ 'center' }
								justify={ 'space-between' }
							>
								<FlexItem>
									<Flex
										align={ 'center' }
										justify={ 'space-between' }
									>
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
									</Flex>
								</FlexItem>
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
							}
						] );
					} }
				>
					{ '+ New Action' }
				</Button>
				{ isEdit && <ActionModal
					onRequestClose={ closeModal }
					title={ 'Edit Action' }
					onUpdateClick={ () => {
						updateActionFromModal( editedAction )
					} }
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
					onRequestClose={ () => setEditProcessAction( false ) }
					title={ 'Edit Process Conditions & Data Manipulation' }
					onUpdateClick={ () => setEditProcessAction( false ) }
				>
					<Repeater
						items={ [1, 2, 34, 56] }
						addNewButtonLabel={ __( 'Add New Condition' ) }
						ItemTemplate={ ( { currentItem, index } ) => {
							return <>
								<SelectControl
									value=''
									label={ `${ currentItem }_${ index }` }
									options={ [{ label: '--' }, { label: '++' }] }
									onChange={ () => {
									} }
								/>
								<SelectControl
									value=''
									label={ `${ currentItem }_${ index }` }
									options={ [{ label: '11' }, { label: '22' }] }
									onChange={ () => {
									} }
								/>
							</>;
						} }
					/>
				</ActionModal> }
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-actions-panel', {
		render: DocumentSettingPanel,
		icon: null,
	} );
}

export default ActionsMeta;
