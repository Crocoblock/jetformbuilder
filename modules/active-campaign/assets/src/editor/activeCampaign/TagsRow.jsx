import { __ } from '@wordpress/i18n';
import {
	RowControl,
	Label,
	StyledFormTokenFieldControl
} from 'jet-form-builder-components';

function TagsRow( { settings, onChangeSettingObj } ) {
	return <RowControl createId={ false }>
		<Label>
			{ __( 'Tags', 'jet-form-builder' ) }
		</Label>
		<StyledFormTokenFieldControl
			value={ settings.tags }
			onChange={ tags => onChangeSettingObj(
				{ tags },
			) }
		/>
	</RowControl>;
}

export default TagsRow;
