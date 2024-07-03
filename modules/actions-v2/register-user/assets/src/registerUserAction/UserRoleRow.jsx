import {
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

function UserRoleRow( { settings, onChangeSettingObj } ) {

	return <RowControl>
		{ ( { id } ) => <>
			<Label htmlFor={ id }>
				{ __( 'User Role', 'jet-form-builder' ) }
			</Label>
			<SelectControl
				id={ id }
				value={ settings.user_role }
				options={ JetFBRegisterAction.userRoles }
				onChange={ user_role => onChangeSettingObj(
					{ user_role },
				) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</> }

	</RowControl>;
}

export default UserRoleRow;