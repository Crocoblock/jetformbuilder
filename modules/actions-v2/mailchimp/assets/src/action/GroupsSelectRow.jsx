import {
	FormLabeledTokenField,
	RowControl,
	Label,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

export function transformGroupsToArray( groups ) {
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

function GroupsSelectRow( { settings, onChangeSettingObj, listId } ) {
	const groups = useSelect( select => {
		const allGroups = select( STORE_NAME ).getGroups();

		return allGroups?.[ listId ] ?? [];
	}, [ listId ] );

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Groups', 'jet-form-builder' ) }
		</Label>
		<FormLabeledTokenField
			label={ __( 'Choose a group', 'jet-form-builder' ) }
			value={ settings.groups_ids }
			onChange={ groups_ids => onChangeSettingObj(
				{ groups_ids },
			) }
			suggestions={ groups }
			__experimentalValidateInput={ group => (
				groups.some( ( { value } ) => value === group )
			) }
			__experimentalExpandOnFocus
			__experimentalShowHowTo={ false }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	</RowControl>;
}

export default GroupsSelectRow;
