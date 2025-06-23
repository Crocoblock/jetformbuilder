import {
	Label,
	RowControl,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';

function RedirectHashRow( { settings, onChangeSettingObj } ) {
	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label htmlFor={ id }>
			{ __( 'URL Hash', 'jet-form-builder' ) }
		</Label>
		<StyledTextControl
			id={ id }
			value={ settings.redirect_hash }
			onChange={ redirect_hash => onChangeSettingObj(
				{ redirect_hash },
			) }
		/>
	</RowControl>;
}

export default RedirectHashRow;