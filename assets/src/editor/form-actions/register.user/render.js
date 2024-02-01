const {
	      WrapperRequiredControl,
	      ActionMessages,
      } = JetFBComponents;
const {
	      Tools: { withPlaceholder },
	      convertListToFieldsMap,
      } = JetFBActions;

const {
	      useFields,
      } = JetFBHooks;

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

const {
	      useState,
	      useEffect,
      } = wp.element;

// eslint-disable-next-line max-lines-per-function, complexity
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

	const fields = useFields( { withInner: false } );

	const [ fieldsWithRequest, setFieldsWithRequest ] = useState( [] );

	useEffect( () => {
		setFieldsWithRequest(
			convertListToFieldsMap( fields, requestFields ),
		);

		if ( settings.add_user_id ) {
			onChangeSettingObj(
				{ requestFields: [ source.requestFields.user_id ] } );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const userFields = Object.entries( source.userFields );

	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<>
			<ToggleControl
				key="allow_register"
				label={ label( 'allow_register' ) }
				checked={ settings.allow_register }
				onChange={ val => onChangeSettingObj(
					{ allow_register: val },
				) }
			/>
			{ settings.allow_register && <SelectControl
				key="role_can_register"
				label={ label( 'role_can_register' ) }
				labelPosition="side"
				value={ settings.role_can_register }
				options={ source.allUserRoles }
				onChange={ val => onChangeSettingObj(
					{ role_can_register: val },
				) }
			/> }
			{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */ }
			<BaseControl
				label={ label( 'fields_map' ) }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					<span
						className={ 'description-controls' }>{ __(
						'Set form fields names to get user data from',
						'jet-form-builder' ) }</span>
					{ userFields.map( ( [ value, data ] ) => {

						return <WrapperRequiredControl
							field={ [ value, data ] }
							key={ `user_fields_${ value }` }
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
				onChange={ val => onChangeSettingObj( { user_role: val } ) }
			/>
			{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */ }
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
							key={ `form_fields_${ name }` }
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
				onChange={ val => onChangeSettingObj( { log_in: val } ) }
			/>
			{ settings.log_in && <SelectControl
				key="remember_me_field"
				label={ label( 'remember_me_field' ) }
				labelPosition="side"
				value={ settings.remember_me_field }
				options={ withPlaceholder( fields ) }
				onChange={ val => onChangeSettingObj(
					{ remember_me_field: val },
				) }
			/> }
			<ToggleControl
				key="add_user_id_control"
				label={ label( 'add_user_id' ) }
				checked={ settings.add_user_id }
				onChange={ val => onChangeSettingObj( {
					add_user_id: val,
					requestFields: val
					               ? [ source.requestFields.user_id ]
					               : [],
				} ) }
				help={ help( 'add_user_id' ) }
			/>
			<ActionMessages { ...props } />
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default RegisterUserRender;
