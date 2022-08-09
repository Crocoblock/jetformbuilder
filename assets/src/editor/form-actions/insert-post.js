import JetDefaultMetaControl from '../blocks/controls/default-meta';

const {
	      addAction,
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
      } = JetFBComponents;

const { useRequestFields, withRequestFields } = JetFBHooks;

/**
 * Internal dependencies
 */
const {
	      BaseControl,
	      TextControl,
	      SelectControl,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
	      useEffect,
      } = wp.element;

const { withSelect } = wp.data;

function taxPrefix( suffix = '' ) {
	return 'jet_tax__' + suffix;
}

function InsertPostAction( props ) {

	const {
		      settings,
		      onChangeSetting,
		      source,
		      help,
		      label,
		      getMapField,
		      setMapField,
		      requestFields,
	      } = props;

	const getFilteredProperties = () => {
		return source.fieldsMapOptions.filter(
			current => {
				return (
					!current?.supported?.length ||
					current?.supported.includes( settings.post_type )
				);
			},
		);
	};

	const [ propertiesOptions, setPropertiesOptions ] = useState(
		() => getFilteredProperties(),
	);

	const [ fieldType, setTypeField ]   = useState( {} );
	const [ taxonomies, setTaxonomies ] = useState( [] );
	const [ formFields, setFormFields ] = useState( [] );

	function getPreparedTaxonomies() {
		const preparedTaxes = [];
		if ( !source.taxonomies.length ) {
			return [];
		}

		for ( const taxonomy of source.taxonomies ) {
			preparedTaxes.push( {
				...taxonomy,
				value: taxPrefix( taxonomy.value ),
			} );
		}

		return preparedTaxes;
	}

	useEffect( () => {
		setTypeField( () => {
			const result = {};

			for ( const fieldsMapKey in settings.fields_map ) {
				result[ fieldsMapKey ] = getTypeFieldValue(
					settings.fields_map[ fieldsMapKey ],
				);
			}

			return result;
		} );
		setTaxonomies( getPreparedTaxonomies() );
		onChangeSetting(
			[ source.requestFields.inserted_post_id ],
			'requestFields',
		);
		setFormFields(
			convertListToFieldsMap( getFormFieldsBlocks(), requestFields ),
		);
	}, [] );

	useEffect( () => {
		setPropertiesOptions( getFilteredProperties() );
	}, [ settings.post_type ] );

	function getTypeFieldValue( value ) {
		let resultValue = 'post_meta';

		for ( const fieldsMapOption of propertiesOptions ) {
			if ( value === fieldsMapOption.value ) {
				resultValue = value;
				break;
			}
		}

		if ( value.includes( taxPrefix() ) ) {
			resultValue = 'post_terms';
		}

		return resultValue;
	}

	function setTypeFieldValue( prev, fieldID, value ) {
		const resultValue = getTypeFieldValue( value );

		if ( [ 'post_meta', 'post_terms' ].includes( resultValue ) ) {
			setMapField( { nameField: fieldID, value: '' } );
		}
		else {
			setMapField( { nameField: fieldID, value: resultValue } );
		}

		return {
			...prev,
			[ fieldID ]: resultValue,
		};
	}

	/* eslint-disable jsx-a11y/no-onchange */

	const getFieldSelect = ( fieldId, index ) => (
		<SelectControl
			key={ fieldId + index }
			value={ fieldType[ fieldId ] }
			onChange={ value => {
				setTypeField(
					prev => setTypeFieldValue( prev, fieldId, value ) );
			} }
			options={ propertiesOptions }
		/>
	);

	return (
		<>
			<SelectControl
				key="post_type"
				className="full-width"
				labelPosition="side"
				value={ settings.post_type }
				options={ source.postTypes }
				label={ label( 'post_type' ) }
				help={ help( 'post_type' ) }
				onChange={ newValue => onChangeSetting( newValue,
					'post_type' ) }
			/>
			<SelectControl
				key="post_status"
				className="full-width"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ newValue => onChangeSetting( newValue,
					'post_status' ) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				key="user_fields_map"
				fields={ formFields }
			>
				{ ( { fieldId, fieldData, index } ) => {
					return <WrapperRequiredControl
						field={ [ fieldId, fieldData ] }
					>

						{ 'post_meta' === fieldType[ fieldId ] &&
						<div
							className="components-base-control jet-margin-bottom-wrapper">
							{ getFieldSelect( fieldId, index ) }
							<TextControl
								key={ fieldId + index + '_text' }
								value={ getMapField( { name: fieldId } ) }
								onChange={ value => setMapField(
									{ nameField: fieldId, value } ) }
							/>
						</div> }
						{ 'post_terms' === fieldType[ fieldId ] &&
						<div
							className="components-base-control jet-margin-bottom-wrapper">
							{ getFieldSelect( fieldId, index ) }
							<SelectControl
								key={ fieldId + index + '_text' }
								value={ getMapField( { name: fieldId } ) }
								onChange={ value => setMapField(
									{ nameField: fieldId, value } ) }
								options={ taxonomies }
							/>
						</div> }
						{ ![
							'post_meta',
							'post_terms',
						].includes( fieldType[ fieldId ] ) &&
						getFieldSelect( fieldId, index ) }
					</WrapperRequiredControl>;
				} }
			</ActionFieldsMap>
			<BaseControl
				label={ label( 'default_meta' ) }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ newValue => onChangeSetting( newValue,
						'default_meta' ) }
				/>
			</BaseControl>
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction( 'insert_post', withSelect( withRequestFields )( InsertPostAction ) );
