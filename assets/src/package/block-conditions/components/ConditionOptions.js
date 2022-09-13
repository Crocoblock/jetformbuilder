import RenderStateOptions from './RenderStateOptions';
import MacrosFields from '../../macros.button/components/MacrosFields';
import PresetButton from '../../preset/components/PresetButton';
import getFormFieldsBlocks from '../../blocks/helpers/getFormFieldsBlocks';
import useUniqKey from '../../blocks/hooks/useUniqKey';

const {
	      TextareaControl,
	      SelectControl,
	      withFilters,
	      Flex,
	      FlexItem,
      } = wp.components;
const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;

const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )(
	props => {
		const { currentItem, changeCurrentItem } = props;

		const uniqKey        = useUniqKey();
		const [ formFields ] = useState(
			() => getFormFieldsBlocks( [], '--' ) );

		switch ( currentItem.operator ) {
			case 'render_state':
				return <RenderStateOptions
					key={ uniqKey( 'RenderStateOptions' ) }
					changeCurrentItem={ changeCurrentItem }
					currentItem={ currentItem }
				/>;
			default:
				return <>
					<SelectControl
						key={ uniqKey( 'SelectControl-field' ) }
						label={ __( 'Field', 'jet-form-builder' ) }
						labelPosition="side"
						value={ currentItem.field }
						options={ formFields }
						onChange={ newValue => {
							changeCurrentItem( { field: newValue } );
						} }
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
							<span>
								{ __( 'Value to compare', 'jet-form-builder' ) }
							</span>
								<PresetButton
									value={ currentItem.value }
									onChange={ value => changeCurrentItem(
										{ value } ) }
								/>
								<MacrosFields
									onClick={ name => changeCurrentItem( {
										value: (
											currentItem.value ?? ''
										) + `%${ name }%`,
									} ) }
								/>
							</Flex>
						</FlexItem>
						<FlexItem isBlock
						          style={ { flex: 3, marginLeft: 'unset' } }>
							<TextareaControl
								className={ 'jet-control-clear' }
								hideLabelFromVision
								value={ currentItem.value ?? '' }
								onChange={ value => changeCurrentItem(
									{ value },
								) }
							/>
						</FlexItem>
					</Flex>
				</>;
		}
	} );

export default ConditionOptions;