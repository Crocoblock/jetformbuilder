import BlockValueItemContext from '../../context/block.value.item.context';
import ActionModalContext from '../../context/action.modal';
import Repeater from '../fields/repeater';
import RepeaterAddNew from '../fields/repeater.add.new';
import BaseHelp from '../controls/base-help';
import ActionModal from '../action-modal';
import DynamicPreset from '../presets/dynamic-preset';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useContext,
	      useEffect,
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
	const {
		      actionClick,
		      onRequestClose,
	      } = useContext( ActionModalContext );

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

	useEffect( () => {
		// update field attributes
		if ( actionClick ) {
			update( current );
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
	}, [ actionClick ] );

	const [ showDetails, setShowDetails ] = useState( false );
	const [ showPreset, setShowPreset ]   = useState( false );

	return <>
		<SelectControl
			options={ [
				{
					value: 'conditions_met',
					label: __( 'On conditions met', 'jet-form-builder' ),
				},
				{
					value: 'value_change',
					label: __( 'On value change', 'jet-form-builder' ),
				},
			] }
			value={ current.method ?? 'conditions_met' }
			label={ __( 'Choose a method of application', 'jet-form-builder' ) }
			labelPosition={ 'side' }
			onChange={ method => updateCurrent( { method } ) }
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
					<Button
						icon={ 'database' }
						variant="tertiary"
						isSmall
						className={ 'jet-fb-is-thick' }
						onClick={ () => setShowPreset( prev => !prev ) }
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
		{ showPreset && <ActionModal
			classNames={ [ 'width-60' ] }
			title={ __( 'Edit Preset for Dynamic Value', 'jet-form-builder' ) }
			onRequestClose={ () => setShowPreset( false ) }
		>
			<DynamicPreset
				key={ 'dynamic_key_preset' }
				value={ current.to_set }
				onSavePreset={ to_set => updateCurrent( { to_set } ) }
			/>
		</ActionModal> }
		{ 'value_change' === current.method ? <>
		</> : <>
			  <Repeater
				  onSetState={ updateConditions }
				  items={ current.conditions ?? [] }
			  >
				  Тут могло бы быть ваше условие
			  </Repeater>
			  <RepeaterAddNew
				  onSetState={ updateConditions }
			  >
				  { __( 'Add New Condition', 'jet-form-builder' ) }
			  </RepeaterAddNew>
		  </> }
	</>;
}

export default DynamicItemBody;