import {
	RowControl,
	Label,
	StyledFormTokenFieldControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

function TagsRow( { settings, onChangeSettingObj } ) {

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/10783
	 */
	const tagsValue = Array.isArray(settings.tags) ? settings.tags : []; 

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Tags', 'jet-form-builder' ) }
		</Label>
		<StyledFormTokenFieldControl
			value={ tagsValue }
			onChange={ tags => onChangeSettingObj(
				{ tags },
			) }
		/>
	</RowControl>;
}

export default TagsRow;
