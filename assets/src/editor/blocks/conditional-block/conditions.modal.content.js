const {
	      Repeater,
	      RepeaterAddNew,
	      RepeaterAddOrOperator,
	      RepeaterHeadContext,
	      RepeaterButtonsContext,
	      ConditionItem,
	      RepeaterState,
	      ToggleControl,
	      ConditionsRepeaterContextProvider,
      } = JetFBComponents;
const {
	      humanReadableCondition,
      } = JetFBActions;
const {
	      useState,
      } = wp.element;
const {
	      useBlockAttributes,
	      useBlockConditions,
	      useUniqKey,
	      useOnUpdateModal,
      } = JetFBHooks;
const {
	      SelectControl,
	      ButtonGroup,
	      withFilters,
	      Button,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

const {
	      addFilter,
      } = wp.hooks;

const getFuncSettings = current => {
	if (
		!current.func_type ||
		!current?.func_settings?.hasOwnProperty( current.func_type )
	) {
		return {};
	}

	return current?.func_settings[ current.func_type ];
};

addFilter(
	'jet.fb.block.condition.settings',
	'jet-form-builder',
	( DefaultComponent ) => props => {
		const { current, settings, update } = props;

		if ( ![ 'show', 'hide' ].includes( current.func_type ) ) {
			return <DefaultComponent { ...props }/>;
		}

		return <ToggleControl
			checked={ settings?.dom ?? false }
			onChange={ val => update( { dom: Boolean( val ) } ) }
		>
			{ __( 'Remove hidden elements from page HTML',
				'jet-form-builder' ) + ' ' }
			<Button
				isLink
				onClick={ () => {} }
				label={ __(
					`If this block is removed from the HTML, then when sending 
the form, the values from the inner fields will be empty`,
					'jet-form-builder',
				) }
				showTooltip
			>(?)</Button>
		</ToggleControl>;
	},
);

const BlockFunctionSettings = withFilters( 'jet.fb.block.condition.settings' )(
	props => null,
);

export default function () {
	const [ attributes, setAttributes ] = useBlockAttributes();
	const [ current, setCurrent ]       = useState( () => attributes );
	const { functions }                 = useBlockConditions();
	const uniqKey                       = useUniqKey();

	const updateConditions = conditions => {
		const update = 'function' === typeof conditions
		               ? conditions( current.conditions )
		               : conditions;

		setCurrent( prev => (
			{
				...prev, conditions: update,
			}
		) );
	};

	useOnUpdateModal( () => setAttributes( current ) );

	const funcSettings    = getFuncSettings( current );
	const setFuncSettings = props => setCurrent( prev => (
		{
			...prev, func_settings: {
				...prev?.func_settings ?? {},
				[ prev.func_type ]: {
					...funcSettings,
					...props,
				},
			},
		}
	) );

	return <>
		<SelectControl
			key={ uniqKey( 'SelectControl-operator' ) }
			label={ __( 'Which function need execute?', 'jet-form-builder' ) }
			labelPosition="side"
			value={ current.func_type }
			options={ functions }
			onChange={ func_type => setCurrent( prev => (
				{
					...prev, func_type,
				}
			) ) }
		/>
		<BlockFunctionSettings
			current={ current }
			settings={ funcSettings }
			update={ setFuncSettings }
		/>
		<ConditionsRepeaterContextProvider>
			<Repeater
				items={ current.conditions ?? [] }
				onSetState={ updateConditions }
			>
				<ConditionItem/>
			</Repeater>
		</ConditionsRepeaterContextProvider>
		<RepeaterState state={ updateConditions }>
			<ButtonGroup
				style={ {
					display: 'flex',
				} }
			>
				<RepeaterAddNew>
					{ __( 'Add Condition', 'jet-form-builder' ) }
				</RepeaterAddNew>
				{ Boolean( current?.conditions?.length ) && (
					<RepeaterAddOrOperator>
						{ __( 'Add OR Operator', 'jet-form-builder' ) }
					</RepeaterAddOrOperator>
				) }
			</ButtonGroup>
		</RepeaterState>
	</>;
}