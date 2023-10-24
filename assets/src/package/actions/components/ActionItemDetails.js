import MacrosButtonTemplate
	from '../../macros.button/components/MacrosButtonTemplate';
import useLoopedAction from '../hooks/useLoopedAction';
import ActionItemDetailsSlotFill from './ActionItemDetailsSlotFill';

const {
	      __,
      } = wp.i18n;

function ActionItemDetails() {
	const { action } = useLoopedAction();

	return <MacrosButtonTemplate
		variant={ null }
		isSmall={ false }
		icon={ 'editor-help' }
		label={ __(
			'Show details about selected action',
			'jet-form-builder',
		) }
	>
		<div
			className="jet-fb p-06em flex flex-dir-column gap-default">
			<div
				data-title={ __( 'ID:', 'jet-form-builder' ) }
			>
				<b>{ action.id }</b>
			</div>
			<ActionItemDetailsSlotFill.Slot
				fillProps={ { type: action.type } }
			/>
		</div>
	</MacrosButtonTemplate>;
}

export default ActionItemDetails;