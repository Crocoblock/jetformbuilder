import {
	Label,
	RowControl,
	StyledFormTokenFieldControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

const { useFields } = JetFBHooks;

function RedirectArgsRow( { settings, onChangeSettingObj } ) {

	const fields = useFields( { withInner: false } ).map(
		( { value } ) => value,
	);

	return <RowControl createId={ false }>
		<Label>
			{ __( 'URL Query arguments', 'jet-form-builder' ) }
		</Label>
		<StyledFormTokenFieldControl
			label={ __( 'Add field', 'jet-form-builder' ) }
			value={ settings.redirect_args }
			suggestions={ fields }
			onChange={ redirect_args => onChangeSettingObj(
				{ redirect_args },
			) }
			__experimentalExpandOnFocus
		/>
	</RowControl>;
}

export default RedirectArgsRow;