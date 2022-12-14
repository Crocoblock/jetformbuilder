import RenderStateOptions from './RenderStateOptions';;
import useUniqKey from '../../blocks/hooks/useUniqKey';
import ClientSideMacros from '../../macros.button/components/ClientSideMacros';
import AdvancedModalControl from '../../components/AdvancedModalControl';

const {
	      TextareaControl,
	      withFilters,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

const ConditionOptions = withFilters( 'jet.fb.block.conditions.options' )(
	props => {
		const { currentItem, changeCurrentItem } = props;

		const uniqKey = useUniqKey();

		if ( [ 'empty', 'not_empty' ].includes( currentItem.operator ) ) {
			return null;
		}

		switch ( currentItem.operator ) {
			case 'render_state':
				return <RenderStateOptions
					key={ uniqKey( 'RenderStateOptions' ) }
					changeCurrentItem={ changeCurrentItem }
					currentItem={ currentItem }
				/>;
			default:
				return <ClientSideMacros>
					<AdvancedModalControl
						value={ currentItem.value }
						label={ __( 'Value to compare', 'jet-form-builder' ) }
						onChangePreset={ value => changeCurrentItem(
							{ value } ) }
						onChangeMacros={ name => changeCurrentItem( {
							value: (
								currentItem.value ?? ''
							) + name,
						} ) }
					>
						{ ( { instanceId } ) => <TextareaControl
							id={ instanceId }
							value={ currentItem.value }
							onChange={ value => changeCurrentItem( { value } ) }
						/> }
					</AdvancedModalControl>
				</ClientSideMacros>;
		}
	} );

export default ConditionOptions;