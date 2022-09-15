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
      } = wp.element;
const {
	      SelectControl,
	      TextareaControl,
	      FlexItem,
	      Button,
	      Flex,
      } = wp.components;

const help = [
	{
		key: 'commas',
		render: () => <li>{ __(
			`If this field support multiple values, 
			you can separate them by commas`,
			'jet-form-builder',
		) }</li>,
	},
	{
		key: 'macros',
		render: () => <li>
			{ __( `You can use the following macros:`, 'jet-form-builder' ) }
			<ul className={ 'jet-fb-ul-revert-layer' }>
				<li>{
					__(
						`%this% - returns value of current field`,
						'jet-form-builder',
					)
				}</li>
				<li>{
					__(
						`%field_name% - where "field_name" 
					is value in Field Name option`,
						'jet-form-builder',
					)
				}</li>
			</ul>
		</li>,
	},
];

function DynamicItemBody() {
	const {
		      current: currentValue,
		      update,
	      } = useContext( BlockValueItemContext );

	const [ current, setCurrent ] = useState( () => currentValue );

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

	const [ showDetails, setShowDetails ] = useState( false );

	return <>
		<SelectControl
			options={ [
				{
					value: 'on_change',
					label: __(
						'On change conditions result',
						'jet-form-builder',
					),
				},
				{
					value: 'once',
					label: __( 'Once', 'jet-form-builder' ),
				},
				{
					value: 'always',
					label: __( 'Always', 'jet-form-builder' ),
				},
			] }
			value={ current.frequency ?? 'always' }
			label={ __( 'Choose a frequency', 'jet-form-builder' ) }
			labelPosition={ 'side' }
			onChange={ frequency => updateCurrent( { frequency } ) }
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
					<Button
						icon={ 'editor-help' }
						variant="tertiary"
						isSmall
						className={ 'jet-fb-is-thick' }
						onClick={ () => setShowDetails( prev => !prev ) }
					/>
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
				{ showDetails && <BaseHelp>
					<ul className={ 'jet-fb-ul-revert-layer' }>
						{ help.map( helpItem => <Fragment key={ helpItem.key }>
							{ helpItem.render() }
						</Fragment> ) }
					</ul>
				</BaseHelp> }
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