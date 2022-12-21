import RepeaterHeadContext
	from '../../repeater/context/repeater.custom.item.head';
import RepeaterButtonsContext
	from '../../repeater/context/repeater.custom.item.buttons';
import humanReadableCondition from '../helpers/humanReadableCondition';

const {
	      __,
      } = wp.i18n;

function ConditionsRepeaterContextProvider( { children } ) {
	return <RepeaterHeadContext.Provider
		value={ {
			isSupported: () => true,
			render: ( { currentItem } ) => <span
				className={ 'repeater-item-title' }
				dangerouslySetInnerHTML={ {
					__html: currentItem?.or_operator
					        ? __( 'OR', 'jet-form-builder' )
					        : humanReadableCondition( currentItem ),
				} }
			/>,
		} }
	>
		<RepeaterButtonsContext.Provider
			value={ {
				edit: item => !item.or_operator,
			} }
		>
			{ children }
		</RepeaterButtonsContext.Provider>
	</RepeaterHeadContext.Provider>;
}

export default ConditionsRepeaterContextProvider;