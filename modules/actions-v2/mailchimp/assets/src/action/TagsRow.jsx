import {
	RowControl,
	Label,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { FormTokenField } from '@wordpress/components';

function TagsRow( { settings, onChangeSettingObj } ) {

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/10783
	 */
	const tagsValue = Array.isArray(settings.tags) ? settings.tags : []; 

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Tags', 'jet-form-builder' ) }
		</Label>
		<FormTokenField
			value={ tagsValue }
			onChange={ tags => onChangeSettingObj(
				{ tags },
			) }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	</RowControl>;
}

export default TagsRow;
