import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';

function RedirectHashRow( { settings, onChangeSettingObj } ) {
	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label htmlFor={ id }>
			{ __( 'URL Hash', 'jet-form-builder' ) }
		</Label>
		<TextControl
			id={ id }
			value={ settings.redirect_hash }
			onChange={ redirect_hash => onChangeSettingObj(
				{ redirect_hash },
			) }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	</RowControl>;
}

export default RedirectHashRow;