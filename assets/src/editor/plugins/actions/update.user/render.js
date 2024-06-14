import UserPropertySelect from '../../../components/user.property.select';

const {
	      addAction,
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      ActionMessages,
	      DynamicPropertySelect,
      } = JetFBComponents;
const {
	      withRequestFields,
	      useSanitizeFieldsMap,
      } = JetFBHooks;

const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
const {
	      SelectControl,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
	      useEffect,
      } = wp.element;

function UpdateUserRender( props ) {

	const [ fields, setFields ] = useState( [] );

	const {
		      settings,
		      onChangeSetting,
		      source,
		      label,
		      requestFields,
	      } = props;

	useEffect( () => {
		setFields(
			convertListToFieldsMap( getFormFieldsBlocks(), requestFields ),
		);
	}, [] );

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<div key="update_user">
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				key="user_fields_map"
				fields={ fields }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'user_meta' ] }
					>
						<UserPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			<SelectControl
				label={ label( 'user_role' ) }
				labelPosition="side"
				key="user_role_list"
				className="full-width"
				value={ settings.user_role }
				options={ source.userRoles }
				onChange={ newValue => onChangeSetting( newValue,
					'user_role' ) }
			/>
			<ActionMessages { ...props } />
		</div>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withSelect( withRequestFields )( UpdateUserRender );
