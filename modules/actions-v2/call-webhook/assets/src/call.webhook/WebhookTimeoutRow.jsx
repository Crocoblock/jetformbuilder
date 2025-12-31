import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';
import { StyledTextControl } from 'jet-form-builder-components';

function WebhookTimeoutRow( { settings, onChangeSettingObj } ) {
	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label htmlFor={ id }>
			{ __( 'Timeout in seconds', 'jet-form-builder' ) }
		</Label>
		<StyledTextControl
			id={ id }
			type="number"
			min={0}  
			value={ settings.webhook_timeout ?? 10}
			onChange={ webhook_timeout => onChangeSettingObj(
				{ webhook_timeout },
			) }
		/>
	</RowControl>;
}

export default WebhookTimeoutRow;