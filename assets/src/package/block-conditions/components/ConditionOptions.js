import RenderStateOptions from './RenderStateOptions';
import MacrosFields from '../../macros.button/components/MacrosFields';
import PresetButton from '../../preset/components/PresetButton';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import ClientSideMacros from '../../macros.button/components/ClientSideMacros';

const {
	      TextareaControl,
	      withFilters,
	      Flex,
	      FlexItem,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )(
	props => {
		const { currentItem, changeCurrentItem } = props;

		const uniqKey = useUniqKey();

		switch ( currentItem.operator ) {
			case 'render_state':
				return <RenderStateOptions
					key={ uniqKey( 'RenderStateOptions' ) }
					changeCurrentItem={ changeCurrentItem }
					currentItem={ currentItem }
				/>;
			default:
				return <Flex
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
							<ClientSideMacros>
								<MacrosFields
									onClick={ name => changeCurrentItem( {
										value: (
											currentItem.value ?? ''
										) + `%${ name }%`,
									} ) }
								/>
							</ClientSideMacros>
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
				</Flex>;
		}
	} );

export default ConditionOptions;