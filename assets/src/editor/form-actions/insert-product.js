import PropertySelect from '../components/property.select';

const {
	      addAction,
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
      } = JetFBComponents;

const { withRequestFields } = JetFBHooks;

/**
 * Internal dependencies
 */
const {
	      BaseControl,
	      SelectControl,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
	      useEffect,
      } = wp.element;

const { withSelect } = wp.data;

function InsertProductAction( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      help,
		      label,
		      requestFields,
	      } = props;

	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		onChangeSettingObj(
			{ requestFields: [ source.requestFields.inserted_product_id ] },
		);
		setFormFields(
			convertListToFieldsMap( getFormFieldsBlocks(), requestFields ),
		);
	}, [] );

	/* eslint-disable jsx-a11y/no-onchange */

	return (
		<>
			<SelectControl
				key="post_status"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ post_status => onChangeSettingObj(
					{ post_status },
				) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				key="user_fields_map"
				fields={ formFields }
			>
				<WrapperRequiredControl>
					<PropertySelect/>
				</WrapperRequiredControl>
			</ActionFieldsMap>
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction(
	'insert_product',
	withSelect( withRequestFields )( InsertProductAction ),
);
