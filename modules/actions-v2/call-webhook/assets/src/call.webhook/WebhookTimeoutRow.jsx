import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';

function WebhookTimeoutRow( { settings, onChangeSettingObj } ) {
	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label htmlFor={ id }>
			{ __( 'Timeout in seconds', 'jet-form-builder' ) }
		</Label>
		<TextControl
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