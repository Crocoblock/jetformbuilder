import {
	RowControl,
	Label,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { FormTokenField } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

function TagsRow( { settings, onChangeSettingObj } ) {

	useEffect( () => {
		if ( !settings.tags || Array.isArray( settings.tags ) ) {
			return;
		}
		onChangeSettingObj( {
			tags: settings.tags.split( ',' ).map( tag => tag.trim() ),
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
