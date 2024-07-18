import {
	Label, LabelWithActions,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

const {
	      MacrosFields,
      } = JetFBComponents;

function EmailReplyToRow( { settings, onChangeSettingObj } ) {
	return <RowControl>
		{ ( { id } ) => <>
			<LabelWithActions>
				<Label htmlFor={ id }>
					{ __( 'Reply to Email Address', 'jet-form-builder' ) }
				</Label>
				<MacrosFields
					onClick={ name => onChangeSettingObj( {
						reply_to_email: (
							settings.reply_to_email ?? ''
						) + name,
					} ) }
					withCurrent
				/>
			</LabelWithActions>
			<TextControl
				id={ id }
				value={ settings.reply_to_email }
				onChange={ reply_to_email => onChangeSettingObj(
					{ reply_to_email },
				) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default EmailReplyToRow;