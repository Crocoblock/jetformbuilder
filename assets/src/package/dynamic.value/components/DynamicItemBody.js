import BlockValueItemContext from '../../context/block.value.item.context';
import Repeater from '../../repeater/components/repeater';
import RepeaterAddNew from '../../repeater/components/repeater.add.new';
import BaseHelp from '../../components/BaseHelp';
import RepeaterState from '../../repeater/components/repeater.state';
import useOnUpdateModal from '../../action-modal/hooks/useOnUpdateModal';
import PresetButton from '../../preset/components/PresetButton';
import MacrosFields from '../../macros.button/components/MacrosFields';
import ConditionItem from '../../block-conditions/components/ConditionItem';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useContext,
	      Fragment,
	      useEffect,
      } = wp.element;
const {
	      SelectControl,
	      TextareaControl,
	      FlexItem,
	      Button,
	      Flex,
	      ToggleControl,
      } = wp.components;

const help = [
	{
		key: 'commas',
		render: () => <li>{ __(
			`If this field supports multiple values, 
			you can separate them with commas`,
			'jet-form-builder',
		) }</li>,
	},
];

const options = [
	{
		value: 'on_change',
		label: __(
			'On change conditions result',
			'jet-form-builder',
		),
		help: __(
			`The value will be applied if condition check-ups return a result 
different from the first check-up's cached value`,
			'jet-form-builder'
		)
	},
	{
		value: 'once',
		label: __( 'Once', 'jet-form-builder' ),
		help: __(
			`The value will be applied only the first time 
the condition is matched`,
			'jet-form-builder'
		)
	},
	{
		value: 'always',
		label: __( 'Always', 'jet-form-builder' ),
		help: __(
			`The value will be applied every time the condition is matched`,
			'jet-form-builder'
		)
	},
];

const getHelp = frequency => {
	const option = options.find( current => {
		return current.value === (
			frequency ?? 'on_change'
		);
	} );

	return option.help;
};

function DynamicItemBody() {
	const {
		      current: currentValue,
		      update,
	      } = useContext( BlockValueItemContext );

	const [ current, setCurrent ] = useState( () => currentValue );

	const [ currentHelp, setCurrentHelp ] = useState(
		() => getHelp( current.frequency ),
	);

	useEffect( () => {
		setCurrentHelp( getHelp( current.frequency ) );
	}, [ current.frequency ] );

	const updateCurrent = settings => {
		setCurrent( prev => (
			{
				...prev,
				...settings,
			}
		) );
	};

	const updateConditions = conditions => {
		updateCurrent( {
			conditions: 'function' === typeof conditions
			            ? conditions( current.conditions ?? [] )
			            : conditions,
		} );
	};

	useOnUpdateModal( () => update( current ) );

	return <>
		<SelectControl
			options={ options }
			value={ current.frequency ?? 'on_change' }
			label={ __( 'Apply value', 'jet-form-builder' ) }
			labelPosition={ 'side' }
			onChange={ frequency => updateCurrent( { frequency } ) }
			help={ currentHelp }
		/>
		<ToggleControl
			label={ __(
				'Set value only if field is empty',
				'jet-form-builder',
			) }
			checked={ current.set_on_empty ?? false }
			onChange={ set_on_empty => updateCurrent( { set_on_empty } ) }
		/>
		<Flex
			align={ 'flex-start' }
			className={ 'components-base-control__field' }
		>
			<FlexItem isBlock>
				<Flex
					align={ 'center' }
					justify={ 'flex-start' }
				>
					<span>{ __( 'Value to set', 'jet-form-builder' ) }</span>
					<PresetButton
						value={ current.to_set }
						onChange={ to_set => updateCurrent( { to_set } ) }
					/>
					<MacrosFields
						onClick={ name => updateCurrent( {
							to_set: (
								current.to_set ?? ''
							) + `%${ name }%`,
						} ) }
					/>
				</Flex>
				<BaseHelp>
					<ul>
						{ help.map( helpItem => <Fragment key={ helpItem.key }>
							{ helpItem.render() }
						</Fragment> ) }
					</ul>
				</BaseHelp>
			</FlexItem>
			<FlexItem isBlock style={ { flex: 3, marginLeft: 'unset' } }>
				<TextareaControl
					className={ 'jet-control-clear' }
					hideLabelFromVision
					value={ current.to_set ?? '' }
					onChange={ to_set => updateCurrent( { to_set } ) }
				/>
			</FlexItem>
		</Flex>

		<RepeaterState state={ updateConditions }>
			<Repeater items={ current.conditions ?? [] }>
				<ConditionItem/>
			</Repeater>
			<RepeaterAddNew>
				{ __( 'Add New Condition', 'jet-form-builder' ) }
			</RepeaterAddNew>
		</RepeaterState>
	</>;
}

export default DynamicItemBody;