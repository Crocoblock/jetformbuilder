import {
	ToggleControl,
	Flex,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ActionMessages } from 'jet-form-builder-actions';
import { ClearBaseControlStyle } from 'jet-form-builder-components';
import { WideLine } from 'jet-form-builder-components';
import RoleCanRegisterRow from './RoleCanRegisterRow';
import UserFieldsRow from './UserFieldsRow';
import UserRoleRow from './UserRoleRow';
import UserMetaRow from './UserMetaRow';
import RememberMeRow from './RememberMeRow';

function RegisterUserRender( props ) {

	const {
		      settings,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
	      } = props;

	return <Flex direction="column">
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ __(
				'Allow creating new users by existing users',
				'jet-form-builder',
			) }
			checked={ settings.allow_register }
			onChange={ allow_register => onChangeSettingObj(
				{ allow_register },
			) }
			__nextHasNoMarginBottom
		/>
		{ settings.allow_register && <>
			<WideLine/>
			<RoleCanRegisterRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		<WideLine/>
		<UserFieldsRow
			getMapField={ getMapField }
			setMapField={ setMapField }
		/>
		<WideLine/>
		<UserRoleRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ __( 'Log In User after Register:', 'jet-form-builder' ) }
			checked={ settings.log_in }
			onChange={ log_in => onChangeSettingObj( { log_in } ) }
			__nextHasNoMarginBottom
		/>
		{ settings.log_in && <>
			<WideLine/>
			<RememberMeRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ __( 'Add User ID to form data:', 'jet-form-builder' ) }
			checked={ settings.add_user_id }
			onChange={ val => onChangeSettingObj( { add_user_id: val } ) }
			help={ __(
				'Registered user ID will be added to form data. Current user ID will be added to form data only if "Allow creating new users by existing users" option was disabled.',
				'jet-form-builder',
			) }
			__nextHasNoMarginBottom
		/>
		<WideLine/>
		<UserMetaRow
			getMapField={ getMapField }
			setMapField={ setMapField }
		/>
		<WideLine/>
		<ActionMessages { ...props } />
	</Flex>;
}

export default RegisterUserRender;
