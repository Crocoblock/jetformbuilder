import ActionMessages from "../components/actions/action-messages";

const {
		  addAction,
		  getFormFieldsBlocks,
		  convertListToFieldsMap,
		  Tools: { withPlaceholder },
	  } = JetFBActions;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
	  } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
		  SelectControl,
		  BaseControl,
		  TextControl,
	  } = wp.components;

const { __ } = wp.i18n;

const {
		  useState,
		  useEffect,
	  } = wp.element;

addAction( 'update_user', function UpdateUserAction( props ) {

	const fields = convertListToFieldsMap( getFormFieldsBlocks() );
	const {
			  settings,
			  onChangeSetting,
			  source,
			  label,
			  getMapField,
			  setMapField,
		  } = props;

	const [ fieldType, setTypeField ] = useState( {} );

	useEffect( () => {
		setTypeField( settings.fields_map || {} );
	}, [] );

	/* eslint-disable jsx-a11y/no-onchange */
	return ( <div key="update_user">
		{/*<BaseControl

		>
			<div className='jet-user-meta-rows'>
				{ map( ( field, index ) => {

					const fieldData = getMapField( field.name );

					return <div
						className="jet-user-meta__row"
						key={ 'user_meta_' + field.name + index }
					>
						<JetFieldsMapControl
							key={ field.name + index }
							fieldValue={ fieldData }
							fieldName={ field.name }
							index={ index }
							metaProp='user_meta'
							fieldsMap={ settings.fields_map }
							fieldTypes={ source.userFields }
							onChange={ ( newValue ) => {
								onChangeSetting( newValue, 'fields_map' );
							} }
						/>
					</div>;
				} ) }
			</div>
		</BaseControl>*/ }
		<ActionFieldsMap
			label={ label( 'fields_map' ) }
			key='user_fields_map'
			fields={ fields }
		>
			{ ( { fieldId, fieldData, index } ) => <WrapperRequiredControl
				field={ [ fieldId, fieldData ] }
			>
				{ 'user_meta' === fieldType[ fieldId ] && <div className='components-base-control'>
					<SelectControl
						key={ fieldId + index }
						value={ fieldType ? fieldType[ fieldId ] : '' }
						onChange={ value => {
							setTypeField( prev => ( {
								...prev,
								[ fieldId ]: value,
							} ) );
							setMapField( { nameField: fieldId, value } )
						} }
						options={ source.userFields }
					/>
					<TextControl
						key={ fieldId + index + '_text' }
						value={ getMapField( { name: fieldId } ) }
						onChange={ value => setMapField( { nameField: fieldId, value } ) }
					/>
				</div> }
				{ 'user_meta' !== fieldType[ fieldId ] && <SelectControl
					key={ fieldId + index }
					value={ fieldType ? fieldType[ fieldId ] : '' }
					onChange={ value => {
						setTypeField( prev => ( {
							...prev,
							[ fieldId ]: value,
						} ) );
						setMapField( { nameField: fieldId, value } )
					} }
					options={ withPlaceholder( source.userFields ) }
				/> }
			</WrapperRequiredControl> }
		</ActionFieldsMap>
		<SelectControl
			label={ label( 'user_role' ) }
			labelPosition="side"
			key="user_role_list"
			className="full-width"
			value={ settings.user_role }
			options={ source.userRoles }
			onChange={ newValue => onChangeSetting( newValue, 'user_role' ) }
		/>
		<ActionMessages { ...props } />
	</div> );
	/* eslint-enable jsx-a11y/no-onchange */
} );
