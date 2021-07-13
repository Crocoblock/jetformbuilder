const {
		  addAction,
		  getFormFieldsBlocks,
		  convertListToFieldsMap,
		  Tools: { withPlaceholder },
	  } = JetFBActions;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
		  ActionMessages,
	  } = JetFBComponents;

const { withRequestFields } = JetFBHooks;

const { withSelect } = wp.data;

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

function UpdateUserAction( props ) {

	const [ fields, setFields ] = useState( [] );
	const {
			  settings,
			  onChangeSetting,
			  source,
			  label,
			  getMapField,
			  setMapField,
			  requestFields,
		  } = props;

	const [ fieldType, setTypeField ] = useState( {} );

	useEffect( () => {
		setTypeField( () => {
			const result = {};

			for ( const fieldsMapKey in settings.fields_map ) {
				result[ fieldsMapKey ] = getTypeFieldValue( settings.fields_map[ fieldsMapKey ] );
			}

			return result;
		} );

		setFields( convertListToFieldsMap( getFormFieldsBlocks(), requestFields ) )
	}, [] );

	function getTypeFieldValue( value ) {
		let resultValue = 'user_meta';

		for ( const userField of source.userFields ) {
			if ( value === userField.value ) {
				resultValue = value;
				break;
			}
		}

		return resultValue;
	}

	function setTypeFieldValue( prev, fieldID, value ) {
		const resultValue = getTypeFieldValue( value );

		if ( 'user_meta' === resultValue ) {
			setMapField( { nameField: fieldID, value: '' } )
		} else {
			setMapField( { nameField: fieldID, value: resultValue } )
		}

		return {
			...prev,
			[ fieldID ]: resultValue,
		};
	}

	const getFieldSelect = ( fieldId, index ) => ( <SelectControl
		key={ fieldId + index }
		value={ fieldType[ fieldId ] }
		onChange={ value => {
			setTypeField( prev => setTypeFieldValue( prev, fieldId, value ) );
		} }
		options={ source.userFields }
	/> );

	/* eslint-disable jsx-a11y/no-onchange */
	return ( <div key="update_user">
		<ActionFieldsMap
			label={ label( 'fields_map' ) }
			key='user_fields_map'
			fields={ fields }
		>
			{ ( { fieldId, fieldData, index } ) => <WrapperRequiredControl
				field={ [ fieldId, fieldData ] }
			>
				{ 'user_meta' === fieldType[ fieldId ] &&
				<div className='components-base-control jet-margin-bottom-wrapper'>
					{ getFieldSelect( fieldId, index ) }
					<TextControl
						key={ fieldId + index + '_text' }
						value={ getMapField( { name: fieldId } ) }
						onChange={ value => setMapField( { nameField: fieldId, value } ) }
					/>
				</div> }
				{ 'user_meta' !== fieldType[ fieldId ] && getFieldSelect( fieldId, index ) }
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
}

addAction( 'update_user', withSelect( withRequestFields )( UpdateUserAction ) );
