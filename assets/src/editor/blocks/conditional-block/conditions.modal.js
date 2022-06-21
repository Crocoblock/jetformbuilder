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
} = wp.data;

const EditCustomRenderStates = ( { setShowModal, changeCurrentItem, currentItem } ) => {

	const [ name, setName ] = useState( '' );
	const current = [ ...currentItem.render_state ];

	const addState = () => {
		current.push( name );

		changeCurrentItem( {
			render_state: current,
		} );

		setShowModal( false );
	};

	return <ActionModal
		classNames={ [ 'width-60' ] }
		title={ __( 'Register custom render state' ) }
		onRequestClose={ () => setShowModal( false ) }
	>
		<div className={ 'jet-fb-field-with-button' }>
			<TextControl
				value={ name }
				onChange={ value => setName( value ) }
			/>
			<Button
				variant={ 'secondary' }
				onClick={ () => addState() }
			>
				{ __( 'Add', 'jet-form-builder' ) }
			</Button>
		</div>
	</ActionModal>;
};

const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )( props => {
	const { currentItem, changeCurrentItem } = props;

	const uniqKey = useUniqKey();
	const [ formFields ] = useState( () => getFormFieldsBlocks( [], '--' ) );
	const renderStates = useSelect(
		select => select( 'jet-forms/block-conditions' ).getRenderStatesList(), [],
	);

	const [ showModal, setShowModal ] = useState( false );

	switch ( currentItem.operator ) {
		case 'render_state':
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
				/> }
			</>;
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