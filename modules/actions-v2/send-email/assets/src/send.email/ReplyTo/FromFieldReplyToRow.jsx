import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function FromFieldReplyToRow( { settings, onChangeSettingObj } ) {

	const formFields = useFields( { withInner: false } );


	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'Reply To Email From Field', 'jet-form-builder' ) }
			</Label>
			<SelectControl
				id={ id }
				value={ settings.reply_from_field }
				options={ [
					{ value: '', label: '--' },
					...formFields,
				] }
				onChange={ reply_from_field => onChangeSettingObj(
					{ reply_from_field },
				) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default FromFieldReplyToRow;