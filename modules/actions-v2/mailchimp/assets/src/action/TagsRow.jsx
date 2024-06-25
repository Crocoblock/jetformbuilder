import {
	RowControl,
	Label,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { FormTokenField } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

function transformTagsToArray( groups ) {
	const groupEntries = Object.entries( groups );
	const result       = [];

	for ( const [ groupId, isActive ] of groupEntries ) {
		if ( !isActive ) {
			continue;
		}
		result.push( groupId );
	}

	return result;
}

function TagsRow( { settings, onChangeSettingObj } ) {

	useEffect( () => {
		if ( !settings.tags || Array.isArray( settings.tags ) ) {
			return;
		}
		onChangeSettingObj( {
			tags: transformTagsToArray( settings.tags ),
		} );
	}, [] );

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Tags', 'jet-form-builder' ) }
		</Label>
		<FormTokenField
			value={ settings.tags }
			onChange={ tags => onChangeSettingObj(
				{ tags },
			) }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	</RowControl>;
}

export default TagsRow;
