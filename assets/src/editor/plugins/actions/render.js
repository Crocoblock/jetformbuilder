import { conditionSettings, defaultAction, defaultActions, getRandomID } from './options';

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

const { withDispatch, useDispatch } = wp.data;
const { compose } = wp.compose;

const actionTypes = window.jetFormActionTypes.map( function ( action ) {
	return {
		value: action.id,
		label: action.name,
		disabled: action.disabled,
	};
} );

function getActionCallback( editedAction ) {
	for ( let i = 0; i < window.jetFormActionTypes.length; i ++ ) {
		if ( window.jetFormActionTypes[ i ].id === editedAction.type && window.jetFormActionTypes[ i ].callback ) {
			return window.jetFormActionTypes[ i ].callback;
		}
	}

	return false;
}

function getConditionOptionFrom( from, value ) {
	const option = conditionSettings[ from ].find( item => item.value === value );

	return ( optionName, ifNot = '' ) => option ? (
		option[ optionName ] || ifNot
	) : ifNot;
}

function getOperatorOption( operator ) {
	return getConditionOptionFrom( 'operators', operator );
}

function getTransformerOption( value ) {
	return getConditionOptionFrom( 'compare_value_formats', value );
}

const operators = [
	{ value: 'and', label: __( 'AND (ALL conditions must be met)', 'jet-form-builder' ) },
	{ value: 'or', label: __( 'OR (at least ONE condition must be met)', 'jet-form-builder' ) },
];

const operatorLabel = __( 'Condition Operator', 'jet-form-builder' );

let PluginActions = ( { setCurrentAction } ) => {

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
			} else {
				return action;
			}
		} ) );
	};

	const updateActionObj = ( id, props ) => {
		setActions( actions => actions.map( current => {
			if ( id !== current.id ) {
				return current;
			}
			return {
				...JSON.parse( JSON.stringify( current ) ),
				...props,
			};
		} ) );
	};

	const [ isEdit, setEdit ] = useState( false );
	const [ editedAction, setEditedAction ] = useState( {} );

	const [ isEditProcessAction, setEditProcessAction ] = useState( false );
	const [ processedAction, setProcessedAction ] = useState( {} );

	const [ formFields, setFormFields ] = useState( [] );

	const closeModal = () => {
		setEdit( false );
		setCurrentAction( {} );
	};

	var Callback = getActionCallback( editedAction );

	const updateActionSettings = action => {
		updateActionObj( action.id, {
			settings: action.settings,
		} );
		closeModal();
	};

	const updateActionCondition = items => {
		updateAction( processedAction.id, 'conditions', items );
		setEditProcessAction( false );
	};

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
			setFormFields( getFormFieldsBlocks( [], '--' ) );
		}
	}, [ processedAction ] );

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
					>
						{ actionTypes.map( type => <option
							key={ action.id + '__' +type.value }
							value={ type.value }
							disabled={ type.disabled }
							dangerouslySetInnerHTML={ { __html: type.label } }
						/> ) }
					</SelectControl>
					{ applyFilters( `jet.fb.section.actions.afterSelect.${ action.type }`, null, action, actions ) }
					<Flex style={ { marginTop: '0.5em' } } justify='space-around'>
						<Button
							disabled={ ! getActionCallback( action ) }
							icon='edit'
							label={ 'Edit Action' }
							onClick={ () => {
								setEditedAction( () => (
									{
										...action,
									}
								) );
								setCurrentAction( { ...action, index } );
							} }
						/>
						<Button
							icon='randomize'
							label={ 'Conditions' }
							onClick={ () => {
								setProcessedAction( () => (
									{ ...action }
								) );
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
										if ( (
											     actions.length - 1
										     ) !== index ) {
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
			</Card>;
		} ) }
		<div className='jfb-button-group'>
			<Button
				isPrimary
				onClick={ () => {
					setActions( [
						...actions,
						{
							...JSON.parse( JSON.stringify( defaultAction ) ),
							id: getRandomID(),
						},
					] );
				} }
			>
				{ __( '+ New Action', 'jet-form-builder' ) }
			</Button>
			{ ( ! JetFormEditorData.isActivePro ) && <Button
				href='#'
				variant='link'
			>
				{ __( 'All PRO Actions', 'jet-form-builder' ) }
			</Button> }
		</div>
		{ isEdit && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ closeModal }
			title={ 'Edit Action' }
			onUpdateClick={ () => {
				updateActionSettings( editedAction );
			} }
			onCancelClick={ closeModal }
		>
			{ Callback && <Callback
				settings={ getMergedSettings() }
				actionId={ editedAction.id }
				onChange={ ( data ) => {
					setEditedAction( prev => (
						{
							...prev,
							settings: {
								...prev.settings,
								[ editedAction.type ]: data,
							},
						}
					) );
				} }
			/> }
		</ActionModal> }
		{ isEditProcessAction && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ __( 'Edit Action Conditions', 'jet-form-builder' ) }
			onRequestClose={ () => setEditProcessAction( false ) }
			onCancelClick={ () => setEditProcessAction( false ) }
		>
			{ ( { actionClick, onRequestClose } ) => {
				return <RepeaterWithState
					items={ processedAction.conditions }
					newItem={ conditionSettings.item }
					onUnMount={ onRequestClose }
					isSaveAction={ actionClick }
					onSaveItems={ conditions => {
						updateActionObj( processedAction.id, {
							conditions,
							condition_operator: processedAction.condition_operator,
						} );
						setProcessedAction( false );
					} }
					addNewButtonLabel={ __( 'Add New Condition', 'jet-form-builder' ) }
					additionalControls={ <SelectControl
						key={ 'SelectControl-operator' }
						label={ operatorLabel }
						labelPosition="side"
						value={ processedAction.condition_operator || 'and' }
						options={ operators }
						onChange={ condition_operator => {
							setProcessedAction( prev => (
								{ ...prev, condition_operator }
							) );
						} }
					/> }
				>
					{ ( { currentItem, changeCurrentItem } ) => {
						let executeLabel = __( 'To fulfill this condition, the result of the check must be', 'jet-form-builder' ) + ' ';
						executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';

						const transformerOption = getTransformerOption( currentItem.compare_value_format );
						const operatorOption = getOperatorOption( currentItem.operator );

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
								help={ operatorOption( 'help' ) }
								value={ currentItem.operator }
								options={ conditionSettings.operators }
								onChange={ operator => changeCurrentItem( { operator } ) }
							/>
							<SelectControl
								label="Field"
								labelPosition="side"
								value={ currentItem.field }
								options={ formFields }
								onChange={ field => changeCurrentItem( { field } ) }
							/>
							<SelectControl
								label={ __( 'Type transform comparing value', 'jet-form-builder' ) }
								labelPosition="side"
								value={ currentItem.compare_value_format }
								options={ conditionSettings.compare_value_formats }
								onChange={ compare_value_format => {
									changeCurrentItem( { compare_value_format } );
								} }
							/>
							{ transformerOption( 'help' ).length > 0 && <p
								className={ 'components-base-control__help' }
								style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
								dangerouslySetInnerHTML={ { __html: transformerOption( 'help' ) } }
							/> }
							<FieldWithPreset
								baseControlProps={ {
									label: 'Value to Compare',
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
									help={ operatorOption( 'need_explode' )
										? conditionSettings.help_for_exploding_compare
										: '' }
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
	</>;
};

PluginActions = compose(
	withDispatch( dispatch => {
		return {
			setCurrentAction( action ) {
				dispatch( 'jet-forms/actions' ).setCurrentAction( action );
			},
		};
	} ),
)( PluginActions );

export default PluginActions;