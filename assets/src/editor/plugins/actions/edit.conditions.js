import { conditionSettings } from './options';
import { useCurrentAction, useUpdateCurrentAction, useUpdateCurrentActionMeta } from './hooks';

const {
	RepeaterWithState,
	FieldWithPreset,
	DynamicPreset,
	ActionModalContext,
	RepeaterItemContext,
	Repeater,
	RepeaterAddNew,
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

const { useEffect, useState, useContext } = wp.element;

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

function RepeaterItem( { formFields } ) {
	const { currentItem, changeCurrentItem } = useContext( RepeaterItemContext );

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
}

function EditConditions( props ) {
	const { eventTypes } = props;

	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		setFormFields( getFormFieldsBlocks( [], '--' ) );
	}, [] );

	const { currentAction } = useCurrentAction();
	const { setCurrentAction, updateCurrentConditions } = useUpdateCurrentAction();

	return <>
		<BaseControl
			label={ __( 'Condition type', 'jet-form-builder' ) }
			className={ 'control-flex field-display-grid' }
		>
			<ToggleGroupControl
				hideLabelFromVision
				value={ currentAction.check_type ?? 'field' }
				onChange={ check_type => setCurrentAction( { ...currentAction, check_type } ) }
			>
				<ToggleGroupControlOption
					value="field"
					label={ __( 'Fields comparison', 'jet-form-builder' ) }
				/>
				<ToggleGroupControlOption
					value="event"
					label={ __( 'Events match', 'jet-form-builder' ) }
				/>
			</ToggleGroupControl>
		</BaseControl>
		{ 'event' === currentAction.check_type ? <>
			<BaseControl
				label={ __( 'Choose events', 'jet-form-builder' ) }
				className={ 'control-flex' }
			>
				<FormTokenField
					label={ __( 'Add event', 'jet-form-builder' ) }
					value={ currentAction.events ?? [] }
					suggestions={ eventTypes }
					onChange={ events => setCurrentAction( { ...currentAction, events } ) }
					tokenizeOnSpace
				/>
			</BaseControl>
		</> : <>
			<SelectControl
				key={ 'SelectControl-operator' }
				label={ __( 'Condition Operator', 'jet-form-builder' ) }
				labelPosition="side"
				value={ currentAction.condition_operator || 'and' }
				options={ operators }
				onChange={ condition_operator => setCurrentAction( { ...currentAction, condition_operator } ) }
			/>
			<Repeater
				onSetState={ updateCurrentConditions }
				items={ currentAction.conditions ?? [] }
			>
				<RepeaterItem formFields={ formFields }/>
			</Repeater>
			<RepeaterAddNew
				onSetState={ updateCurrentConditions }
			>
				{ __( 'Add New Condition', 'jet-form-builder' ) }
			</RepeaterAddNew>
		</> }
	</>;
}

export default compose(
	withSelect( withRequestEvents ),
)( EditConditions );