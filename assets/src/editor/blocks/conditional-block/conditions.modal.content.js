import ConditionOptions from './condition.options';

const {
	      ActionModalContext,
	      Repeater,
	      RepeaterAddNew,
	      RepeaterAddOrOperator,
	      RepeaterItemContext,
	      RepeaterState,
	      RepeaterHeadContext,
	      RepeaterButtonsContext,
      } = JetFBComponents;
const {
	      useEffect,
	      useState,
	      useContext,
      } = wp.element;
const {
	      useBlockAttributes,
	      useBlockConditions,
	      useUniqKey,
      } = JetFBHooks;
const {
	      SelectControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function RepeaterItem() {

	const {
		      currentItem,
		      changeCurrentItem,
	      }             = useContext( RepeaterItemContext );
	const uniqKey       = useUniqKey();
	const { operators } = useBlockConditions();

	return <>
		<SelectControl
			key={ uniqKey( 'SelectControl-operator' ) }
			label="Operator"
			labelPosition="side"
			value={ currentItem.operator }
			options={ operators }
			onChange={ newValue => changeCurrentItem( { operator: newValue } ) }
		/>
		<ConditionOptions
			currentItem={ currentItem }
			changeCurrentItem={ changeCurrentItem }
		/>
	</>;
}

export default function () {
	const { actionClick, onRequestClose } = useContext( ActionModalContext );
	const [ attributes, setAttributes ]   = useBlockAttributes();
	const [ current, setCurrent ]         = useState( () => attributes );
	const { functions }                   = useBlockConditions();
	const uniqKey                         = useUniqKey();

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

	useEffect( () => {
		if ( actionClick ) {
			setAttributes( current );
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
	}, [ actionClick ] );

	const FullRepeater = <RepeaterState state={ updateConditions }>
		<Repeater
			items={ current.conditions ?? [] }
		>
			<RepeaterItem/>
		</Repeater>
	</RepeaterState>;

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
		<RepeaterState state={ updateConditions }>
			<RepeaterAddNew>
				{ __( 'Add New Condition', 'jet-form-builder' ) }
			</RepeaterAddNew>
			<RepeaterAddOrOperator>
				{ __( 'Add OR Operator', 'jet-form-builder' ) }
			</RepeaterAddOrOperator>
		</RepeaterState>
	</>;
}