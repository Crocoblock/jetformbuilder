const {
	      WrapperRequiredControl,
	      ActionMessages,
      } = JetFBComponents;
const {
	      addAction,
	      getFormFieldsBlocks,
	      Tools: { withPlaceholder },
	      convertListToFieldsMap,
      } = JetFBActions;

const { withRequestFields } = JetFBHooks;

/**
 * Internal dependencies
 */
const {
	      TextControl,
	      ToggleControl,
	      SelectControl,
	      BaseControl,
      } = wp.components;

const { __ } = wp.i18n;

const { withSelect } = wp.data;

const {
	      useState,
	      useEffect,
      } = wp.element;

function RegisterUserRender( props ) {

	const {
		      settings,
		      source,
		      label,
		      help,
		      onChangeSettingObj,
		      getMapField,
		      setMapField,
		      requestFields,
	      } = props;

	const [ fields, setFields ]                       = useState( [] );
	const [ fieldsWithRequest, setFieldsWithRequest ] = useState( [] );

	useEffect( () => {
		const _fields = getFormFieldsBlocks();
		setFields( [ ..._fields, ...requestFields ] );
		setFieldsWithRequest(
			convertListToFieldsMap( _fields, requestFields ) );

		if ( settings.add_user_id ) {
			onChangeSettingObj(
				{ requestFields: [ source.requestFields.user_id ] } );
		}
	}, [] );

	const userFields = Object.entries( source.userFields );

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<React.Fragment key="register_user">
			<ToggleControl
				key="allow_register"
				label={ label( 'allow_register' ) }
				checked={ settings.allow_register }
				onChange={ allow_register => onChangeSettingObj(
					{ allow_register } ) }
			/>
			{ settings.allow_register && <SelectControl
				key="role_can_register"
				label={ label( 'role_can_register' ) }
				labelPosition="side"
				value={ settings.role_can_register }
				options={ source.allUserRoles }
				onChange={ role_can_register => onChangeSettingObj(
					{ role_can_register } ) }
			/> }
			<BaseControl
				label={ label( 'fields_map' ) }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					<span
						className={ 'description-controls' }>{ __(
						'Set form fields names to to get user data from',
						'jet-form-builder' ) }</span>
					{ userFields.map( ( [ value, data ] ) => {

						return <WrapperRequiredControl
							field={ [ value, data ] }
						>
							<SelectControl
								className="full-width"
								key={ `user_fields_${ value }` }
								value={ getMapField( { name: value } ) }
								options={ withPlaceholder( fields ) }
								onChange={ newValue => setMapField(
									{ nameField: value, value: newValue } ) }
							/>
						</WrapperRequiredControl>;
					} ) }
				</div>
			</BaseControl>
			<SelectControl
				key="user_role_list"
				className="full-width"
				label={ label( 'user_role' ) }
				labelPosition="side"
				value={ settings.user_role }
				options={ source.userRoles }
				onChange={ user_role => onChangeSettingObj( { user_role } ) }
			/>
			<BaseControl
				label={ label( 'user_meta' ) }
				key="user_meta_list"
			>
				<div className="jet-user-fields-map__list">
					<span
						className={ 'description-controls' }>{ __(
						'Set user meta fields to save appropriate form fields into',
						'jet-form-builder' ) }</span>
					{ fieldsWithRequest.map( ( [ name, data ] ) => {
						return <WrapperRequiredControl
							field={ [ name, data ] }
						>
							<TextControl
								key={ `form_fields_${ name }` }
								value={ getMapField(
									{ source: 'meta_fields_map', name } ) }
								onChange={ newVal => setMapField( {
									nameField: name,
									value: newVal,
									source: 'meta_fields_map',
								} ) }
							/>
						</WrapperRequiredControl>;
					} ) }
				</div>
			</BaseControl>
			<ToggleControl
				key="log_in"
				label={ label( 'log_in' ) }
				checked={ settings.log_in }
				onChange={ log_in => onChangeSettingObj( { log_in } ) }
			/>
			{ settings.log_in && <SelectControl
				key="remember_me_field"
				label={ label( 'remember_me_field' ) }
				labelPosition="side"
				value={ settings.remember_me_field }
				options={ withPlaceholder( fields ) }
				onChange={ remember_me_field => onChangeSettingObj(
					{ remember_me_field } ) }
			/> }
			<ToggleControl
				key="add_user_id_control"
				label={ label( 'add_user_id' ) }
				checked={ settings.add_user_id }
				onChange={ add_user_id => onChangeSettingObj( {
					add_user_id,
					requestFields: add_user_id
					               ? [ source.requestFields.user_id ]
					               : [],
				} ) }
				help={ help( 'add_user_id' ) }
			/>
			<ActionMessages { ...props } />
		</React.Fragment>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withSelect( withRequestFields )( RegisterUserRender );
