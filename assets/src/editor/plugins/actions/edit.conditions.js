import { conditionSettings } from './options';

const {
	RepeaterWithState,
	FieldWithPreset,
	DynamicPreset,
} = JetFBComponents;

const {
	withRequestEvents,
} = JetFBHooks;

const {
	getFormFieldsBlocks,
} = JetFBActions;

const {
	SelectControl,
	TextareaControl,
	ToggleControl,
	FormTokenField,
	BaseControl,
	__experimentalToggleGroupControl: ToggleGroupControl,
	__experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;

const { __ } = wp.i18n;

const {
	withDispatch,
	withSelect,
} = wp.data;

const { compose } = wp.compose;

const operators = [
	{ value: 'and', label: __( 'AND (ALL conditions must be met)', 'jet-form-builder' ) },
	{ value: 'or', label: __( 'OR (at least ONE condition must be met)', 'jet-form-builder' ) },
];

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

function EditConditions( props ) {

	const {
		actionClick,
		onRequestClose,
		eventTypes,
	} = props;

	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		setFormFields( getFormFieldsBlocks( [], '--' ) );
	}, [] );


	return <RepeaterWithState
		items={ action.conditions }
		newItem={ conditionSettings.item }
		onUnMount={ onRequestClose }
		isSaveAction={ actionClick }
		onSaveItems={ conditions => {
			updateActionObj( action.id, {
				conditions,
				condition_operator: action.condition_operator,
			} );
			setAction( false );
		} }
		addNewButtonLabel={ __( 'Add New Condition', 'jet-form-builder' ) }
		additionalControls={ <SelectControl
			key={ 'SelectControl-operator' }
			label={ __( 'Condition Operator', 'jet-form-builder' ) }
			labelPosition="side"
			value={ action.condition_operator || 'and' }
			options={ operators }
			onChange={ condition_operator => {
				setAction( prev => (
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
				<BaseControl
					label={ __( 'Condition type', 'jet-form-builder' ) }
					className={ 'control-flex field-display-grid' }
				>
					<ToggleGroupControl
						hideLabelFromVision
						value={ currentItem.type ?? 'field' }
						onChange={ type => changeCurrentItem( { type } ) }
					>
						<ToggleGroupControlOption
							value="field"
							label={ __( 'Field comparison', 'jet-form-builder' ) }
						/>
						<ToggleGroupControlOption
							value="event"
							label={ __( 'Event match', 'jet-form-builder' ) }
						/>
					</ToggleGroupControl>
				</BaseControl>
				{ 'field' === (
					currentItem.type ?? 'field'
				) ? <>
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
				</> : <>
					<BaseControl
						label={ __( 'Choose events', 'jet-form-builder' ) }
						className={ 'control-flex' }
					>
						<FormTokenField
							label={ __( 'Add event', 'jet-form-builder' ) }
							value={ currentItem.events ?? [] }
							suggestions={ eventTypes }
							onChange={ events => changeCurrentItem( { events } ) }
							tokenizeOnSpace
						/>
					</BaseControl>
				</> }
			</>;
		} }
	</RepeaterWithState>;
}

export default compose(
	withSelect( withRequestEvents ),
)( EditConditions );