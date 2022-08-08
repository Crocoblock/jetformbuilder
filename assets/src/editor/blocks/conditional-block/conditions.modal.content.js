import ConditionOptions from './condition.options';

const {
	      ActionModalContext,
	      Repeater,
	      RepeaterAddNew,
	      RepeaterItemContext,
	      RepeaterCustomLayoutContext,
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

	if ( currentItem.or_operator ) {
		return <h2>Or</h2>;
	}

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
		<RepeaterCustomLayoutContext.Provider
			value={ {
				isSupported: item => item.or_operator,
				render: ( { children } ) => children,
			} }
		>
			<Repeater
				onSetState={ updateConditions }
				items={ current.conditions ?? [] }
			>
				<RepeaterItem/>
			</Repeater>
		</RepeaterCustomLayoutContext.Provider>
		<RepeaterAddNew
			onSetState={ updateConditions }
		>
			{ __( 'Add New Condition', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;
}