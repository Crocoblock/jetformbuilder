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

	const DocumentSettingPanel = () => {

		const meta = useSelect( ( select ) => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		} );

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const [ actions, setActions ] = useState( JSON.parse( meta._jf_actions ) );

		useEffect( () => {

			editPost({
				meta: ( {
					...meta,
					_jf_actions: JSON.stringify( actions )
				} )
			});

		} );

		const getRandomID = () => {
			return Math.floor( Math.random() * 8999 ) + 1000;
		};

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
				} else {
					return action;
				}
			} ) );
		};

		const [ isEdit, setEdit ] = useState( false );
		const [ editedAction, setEditedAction ] = useState( {} );

		const closeModal = () => { setEdit( false ) };

		const actionTypes = window.jetFormActionTypes.map( function( action ) {
			return {
				value: action.id,
				label: action.name,
			};
		} );

		const updateActionFromModal = () => {
			updateAction( editedAction.id, 'settings', editedAction.settings );
			closeModal();
		}

		useEffect( () => {
			if ( editedAction.type ) {
				setEdit( true );
			}
		}, [ editedAction ] );

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
										<div></div>
									</Flex>
								</FlexItem>
								<FlexItem>
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
								</FlexItem>
							</Flex>
						</CardBody>
					</Card>
				})}
				<Button
					isPrimary
					onClick={ () => {
						setActions([
							...actions,
							{
								type: 'send_email',
								id: getRandomID(),
								settings: {},
							}
						]);
					} }
				>
					{ '+ New Action' }
				</Button>;
				{ isEdit && (
					<Modal
						onRequestClose={ closeModal }
						style={ { width: '60vw' } }
						title={ 'Edit Action' }
					>
						<div>
							{ window.jetFormActionTypes.map( function( actionType ) {
								if ( actionType.id === editedAction.type && actionType.callback ) {
									return actionType.callback( editedAction, ( data ) => {
										setEditedAction( ( prevData ) => ( {
											...prevData,
											settings: data
										} ) );
									} );
								}
							} ) }
						</div>
						<ButtonGroup
							className="jet-form-edit-actions"
							style={ {
								position: 'sticky',
								bottom: '0',
								margin: '20px -24px -24px',
								padding: '18px 24px 20px',
								backgroundColor: '#fff',
								width: 'calc( 100% + 48px )',
								borderTop: '1px solid #ddd',
							} }
						>
							<Button
								isPrimary
								onClick={ updateActionFromModal }
							>
								Update
							</Button>
							<Button
								isSecondary
								style={ {
									margin: '0 0 0 10px'
								} }
								onClick={ closeModal }
							>
								Cancel
							</Button>
						</ButtonGroup>
					</Modal>
				) }
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-actions-panel', {
		render: DocumentSettingPanel,
		icon: null,
	} );
}

export default ActionsMeta;
