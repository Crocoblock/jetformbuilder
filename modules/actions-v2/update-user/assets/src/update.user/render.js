import UserPropertySelect from '../components/UserPropertySelect';
import {
	useSanitizeFieldsMap,
	useFields,
} from 'jet-form-builder-blocks-to-actions';
import {
	convertListToFieldsMap,
	useActionValidatorProvider,
	ActionMessages,
} from 'jet-form-builder-actions';
import { Flex, Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	IconText,
	Label,
	RowControl,
	WideLine,
	StyledSelectControl
	} from 'jet-form-builder-components';

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;

// eslint-disable-next-line max-lines-per-function
function UpdateUserRender( props ) {

	const formFields = convertListToFieldsMap(
		useFields( { withInner: false } ),
	);

	const {
		      settings,
		      onChangeSetting,
		      source,
		      label,
	      } = props;

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	const { hasError } = useActionValidatorProvider( {
		isSupported: error => 'field_id' === error?.property,
	} );

	const hasRoleMapping = Object.values( settings?.fields_map ?? {} )
		.includes( 'role' );
	const staticRoles = Array.isArray( settings?.user_role )
		? settings.user_role
		: ( settings?.user_role ? [ settings.user_role ] : [] );
	const selectedStaticRoles = staticRoles.filter( Boolean );
	const configuredSelfPromotableRoles = source.globalSelfPromotableRoles ?? [];
	const hasStaticRoleOutsideAllowlist = selectedStaticRoles.some(
		role => ! configuredSelfPromotableRoles.includes( role )
	);

	return (
		<Flex direction="column">
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ formFields }
				customHelp={ () => hasError && <IconText>
					{ __(
						'Please select a field for User ID',
						'jet-form-builder',
					) }
				</IconText> }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'user_meta' ] }
					>
						<UserPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			{ ( hasRoleMapping || hasStaticRoleOutsideAllowlist ) && <Notice
				status="warning"
				isDismissible={ false }
			>
				{ hasRoleMapping && __(
					'Note: The selected roles are not in the global Self-Promotable Roles list. Regular users will not receive this role upon form submission.',
					'jet-form-builder',
				) }
				{ hasRoleMapping && hasStaticRoleOutsideAllowlist && ' ' }
				{ hasStaticRoleOutsideAllowlist && __(
					'Selected User Role values outside the global Self-Promotable Roles list may be skipped for users without the promote_users capability.',
					'jet-form-builder',
				) }
				{ ' ' }
				<a
					href={ source.globalSettingsUrl }
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Manage in JetFormBuilder Settings.', 'jet-form-builder' ) }
				</a>
			</Notice> }
			<WideLine/>
			<RowControl>
				{ ( { id } ) => <>
					<Label htmlFor={ id }>
						{ __( 'User role', 'jet-form-builder' ) }
					</Label>
					<StyledSelectControl
						multiple
						id={ id }
						value={ settings.user_role }
						options={ source.userRoles }
						onChange={ newValue => onChangeSetting( newValue,
							'user_role' ) }
						help={ __( 'Hold Ctrl (Windows) or Command (Mac) to select multiple roles.', 'jet-form-builder' ) }
					/>
				</> }
			</RowControl>
			<WideLine/>
			<ActionMessages { ...props } />
		</Flex>
	);
}

export default UpdateUserRender;
