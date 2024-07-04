import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

const formatOptions = [
	{
		value: '',
		label: '--',
	},
	{
		value: 'text/plain',
		label: __( 'Plain text', 'jet-form-builder' ),
	},
	{
		value: 'text/html',
		label: __( 'HTML', 'jet-form-builder' ),
	},
];

function ContentTypeRow( { settings, onChangeSettingObj } ) {

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'Content type', 'jet-form-builder' ) }
			</Label>
			<SelectControl
				id={ id }
				value={ settings.content_type }
				options={ formatOptions }
				onChange={ content_type => onChangeSettingObj(
					{ content_type }
				) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }
	</RowControl>;
}

export default ContentTypeRow;