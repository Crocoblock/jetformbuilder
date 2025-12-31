import {
	Label,
	RowControl,
	StyledSelectControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';

function UserRoleRow( { settings, onChangeSettingObj } ) {

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id } >
				{ __( 'User Role', 'jet-form-builder' ) }
			</Label>
			<StyledSelectControl
				multiple
				id={ id }
				value={ settings.user_role }
				options={ JetFBRegisterAction.userRoles }
				onChange={ user_role => onChangeSettingObj(
					{ user_role },
				) }
				help={ __( 'Hold Ctrl (Windows) or Command (Mac) to select multiple roles.', 'jet-form-builder' ) }
			/>
		</> }

	</RowControl>;
}

export default UserRoleRow;