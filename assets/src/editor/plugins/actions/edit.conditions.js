import { conditionSettings } from './options';

const {
	      RepeaterItemContext,
	      Repeater,
	      RepeaterAddNew,
	      AdvancedModalControl,
	      RepeaterState,
	      BaseHelp,
      } = JetFBComponents;

const {
	      useRequestEvents,
	      useCurrentAction,
	      useUpdateCurrentAction,
      } = JetFBHooks;

const {
	      getFormFieldsBlocks,
      } = JetFBActions;

const {
	      SelectControl,
	      TextareaControl,
	      ToggleControl,
	      FormTokenField,
	      TabPanel,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const {
	      useSelect,
      } = wp.data;

const {
	      useEffect,
	      useState,
	      useContext,
	      RawHTML,
      } = wp.element;

const operators = [
	{
		value: 'and',
		label: __( 'AND (ALL conditions must be met)', 'jet-form-builder' ),
	},
	{
		value: 'or',
		label: __( 'OR (at least ONE condition must be met)',
			'jet-form-builder' ),
	},
];

const excludedEvents = window.JetFormEditorData.actionConditionExcludeEvents;

function getConditionOptionFrom( from, value ) {
	const option = conditionSettings[ from ].find(
		item => item.value === value );

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

// eslint-disable-next-line max-lines-per-function
function RepeaterItem( { formFields } ) {
	const { currentItem, changeCurrentItem } = useContext(
		RepeaterItemContext );

	let executeLabel = __(
		'To fulfill this condition, the result of the check must be',
		'jet-form-builder' ) + ' ';
	executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';

	const transformerOption = getTransformerOption(
		currentItem.compare_value_format );
	const operatorOption    = getOperatorOption( currentItem.operator );

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
			onChange={ val => {
				changeCurrentItem( { compare_value_format: val } );
			} }
		/>
		{ transformerOption( 'help' ).length > 0 && <p
			className={ 'components-base-control__help' }
			style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }
			dangerouslySetInnerHTML={ { __html: transformerOption( 'help' ) } }
		/> }
		<AdvancedModalControl
			value={ currentItem.default }
			label={ __( 'Value to Compare', 'jet-form-builder' ) }
			macroWithCurrent
			onChangePreset={ newValue => {
				changeCurrentItem( { default: newValue } );
			} }
		>
			{ ( { instanceId } ) => <TextareaControl
				id={ instanceId }
				value={ currentItem.default }
				help={ operatorOption( 'need_explode' )
				       ? conditionSettings.help_for_exploding_compare
				       : '' }
				onChange={ newValue => {
					changeCurrentItem( { default: newValue } );
				} }
			/> }
		</AdvancedModalControl>
	</>;
}

function EditEvents( { events } ) {
	const { currentAction }               = useCurrentAction();
	const { setCurrentAction }            = useUpdateCurrentAction();
	const [ showDetails, setShowDetails ] = useState( false );

	const helpMap = useSelect(
		select => select( 'jet-forms/events' ).getHelpMap(),
	);

	useEffect( () => {
		if ( excludedEvents[currentAction.type] && currentAction.events.length ) {
			const newCurrentActionEvents = currentAction.events.filter(
				( item ) => !excludedEvents[currentAction.type].includes( item )
			);

			if (
				currentAction.events.some(
					(item) => !newCurrentActionEvents.includes( item )
				)
			) {
				setCurrentAction( {
					...currentAction,
					events: newCurrentActionEvents,
				} );
			}
		}
	}, [currentAction, setCurrentAction] );

	return <>
		<FormTokenField
			label={ __( 'Add event', 'jet-form-builder' ) }
			value={ currentAction.events ?? [] }
			suggestions={ events }
			onChange={ newEvents => setCurrentAction(
				{ ...currentAction, events: newEvents } ) }
			tokenizeOnSpace
			__experimentalExpandOnFocus
			__experimentalShowHowTo={ '' }
		/>
		<BaseHelp>
			{ __( 'Separate with commas or the Enter key.',
				'jet-form-builder' ) + ' ' }
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
			<a
				href="#"
				role="button"
				onClick={ () => setShowDetails( prev => !prev ) }
			>
				{ showDetails
				  ? __( 'Hide', 'jet-form-builder' )
				  : __( 'Details', 'jet-form-builder' ) }
			</a>
		</BaseHelp>
		{ showDetails && <ul className={ 'jet-fb-ul-revert-layer' }>
			{ events.map(
				event => <li key={ event }>
					<b>{ event }</b>: <RawHTML>{ helpMap[ event ] }</RawHTML>
				</li>,
			) }
		</ul> }
	</>;
}

function EditFields() {
	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		setFormFields( getFormFieldsBlocks( [], '--' ) );
	}, [] );

	const { currentAction } = useCurrentAction();

	const {
		      setCurrentAction,
		      updateCurrentConditions,
	      } = useUpdateCurrentAction();

	return <>
		<SelectControl
			key={ 'SelectControl-operator' }
			label={ __( 'Condition Operator', 'jet-form-builder' ) }
			labelPosition="side"
			value={ currentAction.condition_operator || 'and' }
			options={ operators }
			onChange={ conditionOperator => setCurrentAction(
				{ ...currentAction, condition_operator: conditionOperator },
			) }
		/>
		<RepeaterState state={ updateCurrentConditions }>
			<Repeater items={ currentAction.conditions ?? [] }>
				<RepeaterItem formFields={ formFields }/>
			</Repeater>
			<RepeaterAddNew item={ { execute: true } }>
				{ __( 'Add New Condition', 'jet-form-builder' ) }
			</RepeaterAddNew>
		</RepeaterState>
	</>;
}

function EditConditions() {
	let provideEvents       = useRequestEvents();
	const { currentAction } = useCurrentAction();

	if ( excludedEvents[ currentAction.type ] ) {
		provideEvents = provideEvents.filter( item => !excludedEvents[ currentAction.type ].includes( item ) );
	}

	if ( 1 === provideEvents.length ) {
		return <EditFields/>;
	}

	return <>
		<TabPanel
			className="jfb-conditions-tab-panel"
			initialTabName={ 'fields' }
			tabs={ [
				{
					name: 'fields',
					title: __( 'Fields comparison', 'jet-form-builder' ),
					edit: <EditFields/>,
				},
				{
					name: 'events',
					title: __( 'Events match', 'jet-form-builder' ),
					edit: <EditEvents events={ provideEvents }/>,
				},
			] }
		>
			{ tab => tab.edit }
		</TabPanel>
	</>;
}

export default EditConditions;