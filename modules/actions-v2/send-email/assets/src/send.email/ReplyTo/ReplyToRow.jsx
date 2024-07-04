import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

const emailOptions = [
	{
		value: '',
		label: '--',
	},
	{
		value: 'form',
		label: __( 'Email from submitted form field', 'jet-form-builder' ),
	},
	{
		value: 'custom',
		label: __( 'Custom email', 'jet-form-builder' ),
	},
];

function ReplyToRow( { settings, onChangeSettingObj } ) {

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'Reply To', 'jet-form-builder' ) }
			</Label>
			<SelectControl
				id={ id }
				value={ settings.reply_to }
				options={ emailOptions }
				onChange={ reply_to => onChangeSettingObj( { reply_to } ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default ReplyToRow;