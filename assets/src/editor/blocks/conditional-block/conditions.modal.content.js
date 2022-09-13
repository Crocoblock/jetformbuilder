const {
	      Repeater,
	      RepeaterAddNew,
	      RepeaterAddOrOperator,
	      RepeaterHeadContext,
	      RepeaterButtonsContext,
	      ConditionItem,
      } = JetFBComponents;
const {
	      useState,
	      useContext,
      } = wp.element;
const {
	      useBlockAttributes,
	      useBlockConditions,
	      useUniqKey,
	      useOnUpdateModal,
      } = JetFBHooks;
const {
	      SelectControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

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

	const FullRepeater = <>
		<Repeater
			items={ current.conditions ?? [] }
			onSetState={ updateConditions }
		>
			<ConditionItem/>
		</Repeater>
	</>;

	const RepeaterWithHead = <RepeaterHeadContext.Provider
		value={ {
			isSupported: item => item.or_operator,
			render: () => <span
				className={ 'repeater-item-title' }
			>
				{ __( 'OR', 'jet-form-builder' ) }
			</span>,
		} }
	>
		{ FullRepeater }
	</RepeaterHeadContext.Provider>;

	const RepeaterComplete = <RepeaterButtonsContext.Provider
		value={ {
			edit: item => !item.or_operator,
		} }
	>
		{ RepeaterWithHead }
	</RepeaterButtonsContext.Provider>;

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
		{ RepeaterComplete }
		<RepeaterAddNew onSetState={ updateConditions }>
			{ __( 'Add New Condition', 'jet-form-builder' ) }
		</RepeaterAddNew>
		<RepeaterAddOrOperator onSetState={ updateConditions }>
			{ __( 'Add OR Operator', 'jet-form-builder' ) }
		</RepeaterAddOrOperator>
	</>;
}