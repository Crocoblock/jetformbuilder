import { options } from './options';

const {
	Button,
	ToolbarGroup,
	TextareaControl,
	SelectControl,
	TextControl,
	withFilters,
	BaseControl,
	FormTokenField,
	ButtonGroup,
} = wp.components;

const {
	RepeaterWithState,
	ActionModal,
	FieldWithPreset,
	DynamicPreset,
} = JetFBComponents;

const {
	getFormFieldsBlocks,
} = JetFBActions;

const {
	useBlockConditions,
	useUniqKey,
} = JetFBHooks;

const { __ } = wp.i18n;

const {
	useState,
	useEffect,
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;

const { apiFetch } = wp;

const {
	rest_add_state,
} = window.jetFormBlockConditions;

const EditCustomRenderStates = ( { setShowModal, changeCurrentItem, currentItem } ) => {

	const [ buttonTooltip, setButtonTooltip ] = useState( '' );
	const [ isLoading, setButtonLoading ] = useState( false );
	const [ value, setValue ] = useState( '' );
	const current = [ ...currentItem.render_state ];
	const { addRenderState } = useDispatch( 'jet-forms/block-conditions', [] );

	const customStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).getCustomRenderStates(),
		[ isLoading ],
	);

	const addState = () => {
		setButtonLoading( true );
		rest_add_state.data = { value };

		apiFetch( rest_add_state ).then( response => {
			onSuccessAdd( response.state );
		} ).catch( error => {
			setButtonTooltip( error.message );
			setTimeout( () => setButtonTooltip( '' ), 4000 );
		} ).finally( () => {
			setButtonLoading( false );
		} );
	};

	const onSuccessAdd = state => {
		addRenderState( state );
		current.push( state.value );

		changeCurrentItem( {
			render_state: current,
		} );

		setShowModal( false );
	};

	return <ActionModal
		title={ __( 'Register custom render state' ) }
		onRequestClose={ () => setShowModal( false ) }
	>
		<div className={ 'jet-fb-field-with-button' }>
			<TextControl
				value={ value }
				onChange={ newValue => setValue( newValue ) }
			/>
			<Button
				variant={ 'secondary' }
				onClick={ addState }
				disabled={ isLoading }
				isBusy={ isLoading }
				showTooltip={ !! buttonTooltip.length }
				shortcut={ buttonTooltip }
			>
				{ __( 'Add', 'jet-form-builder' ) }
			</Button>
		</div>
		<div className={ 'jet-fb-buttons-flex' }>
			{ customStates.map( state => <Button
				key={ state.value }
				icon={ 'no-alt' }
				iconPosition={ 'right' }
			>
				{ state.label }
			</Button> ) }
		</div>
	</ActionModal>;
};

const RenderStateOptions = ( { currentItem, changeCurrentItem } ) => {
	const [ showModal, setShowModal ] = useState( false );

	const renderStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).getRenderStatesList(),
		[ showModal ],
	);

	return <>
		<BaseControl
			label={ __( 'Render State', 'jet-form-builder' ) }
			className={ 'control-flex' }
		>
			<div className={ 'jet-fb-field-with-button' }>
				<FormTokenField
					label={ __( 'Add render state', 'jet-form-builder' ) }
					value={ currentItem.render_state }
					suggestions={ renderStates }
					onChange={ render_state => changeCurrentItem( { render_state } ) }
					tokenizeOnSpace
					__experimentalExpandOnFocus
				/>
				<Button
					variant={ 'secondary' }
					icon={ 'plus-alt2' }
					onClick={ () => setShowModal( true ) }
				/>
			</div>
		</BaseControl>
		{ showModal && <EditCustomRenderStates
			setShowModal={ setShowModal }
			changeCurrentItem={ changeCurrentItem }
			currentItem={ currentItem }
		/> }
	</>;
};

const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )( props => {
	const { currentItem, changeCurrentItem } = props;

	const uniqKey = useUniqKey();
	const [ formFields ] = useState( () => getFormFieldsBlocks( [], '--' ) );

	switch ( currentItem.operator ) {
		case 'render_state':
			return <RenderStateOptions
				key={ uniqKey( 'RenderStateOptions' ) }
				changeCurrentItem={ changeCurrentItem }
				currentItem={ currentItem }
			/>;
		default:
			return <>
				<SelectControl
					key={ uniqKey( 'SelectControl-field' ) }
					label="Field"
					labelPosition="side"
					value={ currentItem.field }
					options={ formFields }
					onChange={ newValue => {
						changeCurrentItem( { field: newValue } );
					} }
				/>
				<FieldWithPreset
					key={ uniqKey( 'FieldWithPreset-value_to_compare' ) }
					baseControlProps={ {
						label: 'Value to Compare',
					} }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						key={ uniqKey( 'DynamicPreset-value_to_compare' ) }
						value={ currentItem.value }
						isSaveAction={ actionClick }
						onSavePreset={ newValue => {
							changeCurrentItem( { value: newValue } );
						} }
						onUnMount={ onRequestClose }
					/> }
					triggerClasses={ [ 'trigger__textarea' ] }
				>
					<TextareaControl
						key={ uniqKey( 'TextareaControl-value' ) }
						className={ 'jet-control-clear jet-user-fields-map__list' }
						value={ currentItem.value }
						onChange={ newValue => {
							changeCurrentItem( { value: newValue } );
						} }
					/>
				</FieldWithPreset>
				{ 'set_value' === currentItem.type && <FieldWithPreset
					key={ uniqKey( 'FieldWithPreset-value_to_set' ) }
					baseControlProps={ {
						label: __( 'Value to Set', 'jet-form-builder' ),
						help: __( 'Separate values with commas', 'jet-form-builder' ),
					} }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						key={ uniqKey( 'DynamicPreset-value_to_set' ) }
						value={ currentItem.set_value }
						isSaveAction={ actionClick }
						onSavePreset={ newValue => {
							changeCurrentItem( { set_value: newValue } );
						} }
						onUnMount={ onRequestClose }
					/> }
					triggerClasses={ [ 'trigger__textarea' ] }
				>
					<TextareaControl
						key={ uniqKey( 'TextareaControl-set_value' ) }
						className={ 'jet-control-clear jet-user-fields-map__list' }
						value={ currentItem.set_value }
						onChange={ newValue => {
							changeCurrentItem( { set_value: newValue } );
						} }
					/>
				</FieldWithPreset> }
			</>;
	}
} );


export default function ConditionsModal( props ) {
	const {
		setShowModal,
		attributes,
		setAttributes,
	} = props;

	const { operators, functions } = useBlockConditions();
	const uniqKey = useUniqKey();

	return <ActionModal
		classNames={ [ 'width-60' ] }
		onRequestClose={ () => setShowModal( false ) }
		title="Conditional Logic"
	>
		{ ( { actionClick, onRequestClose } ) => <RepeaterWithState
			key={ uniqKey( 'RepeaterWithState' ) }
			items={ attributes.conditions }
			isSaveAction={ actionClick }
			onUnMount={ onRequestClose }
			newItem={ options.condition }
			onSaveItems={ conditions => setAttributes( { conditions } ) }
			addNewButtonLabel={ __( 'New Condition', 'jet-form-builder' ) }
		>
			{ ( { currentItem, changeCurrentItem } ) => <>
				<SelectControl
					key={ uniqKey( 'SelectControl-type' ) }
					label="Type"
					labelPosition="side"
					value={ currentItem.type }
					options={ functions }
					onChange={ newValue => {
						changeCurrentItem( { type: newValue } );
					} }
				/>
				<SelectControl
					key={ uniqKey( 'SelectControl-operator' ) }
					label="Operator"
					labelPosition="side"
					value={ currentItem.operator }
					options={ operators }
					onChange={ newValue => {
						changeCurrentItem( { operator: newValue } );
					} }
				/>
				<ConditionOptions
					currentItem={ currentItem }
					changeCurrentItem={ changeCurrentItem }
				/>
			</> }
		</RepeaterWithState> }
	</ActionModal>;
}