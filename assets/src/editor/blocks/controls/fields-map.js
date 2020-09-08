/**
 * External dependencies
 */
const { isEmpty } = window.lodash;

/**
 * WordPress dependencies
 */
const { withInstanceId } = wp.compose;

/**
 * Internal dependencies
 */
const {
	SelectControl,
	TextControl
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

function JetFieldsMapControl( {
	instanceId,
	onChange,
	fieldTypes,
	taxonomiesList,
	className,
	metaProp,
	termsProp,
	value,
	type,
	name,
	field,
	fieldsMap,
	index
} ) {

	metaProp  = metaProp || 'post_meta';
	termsProp = termsProp || 'post_terms';

	const id = `inspector-select-control-${ instanceId }`;

	const preparedTaxes = [];

	const taxPrefix = 'jet_tax__';

	for ( var i = 0; i < taxonomiesList.length; i++ ) {
		preparedTaxes.push( {
			value: taxPrefix + taxonomiesList[ i ].value,
			label: taxonomiesList[ i ].label,
		} );
	};

	const getFieldType = ( value ) => {

		if ( ! value ) {
			return '';
		}

		for ( var i = 0; i < fieldTypes.length; i++ ) {
			if ( value === fieldTypes[ i ].value ) {
				return value;
			}
		}

		if ( value.includes( taxPrefix ) ) {
			return termsProp;
		} else {
			return metaProp;
		}

	};

	const getFieldName = ( value ) => {

		if ( ! value ) {
			return '';
		}

		var fieldType = getFieldType( value );

		if ( termsProp === fieldType || metaProp === fieldType ) {
			return value;
		} else {
			return '';
		}

	};

	const onChangeType = ( newValue ) => {
		//value.type = newValue;
		onChange( {
			...fieldsMap,
			[ field ] : {
				type: newValue,
				name: name,
			}
		} );
	};

	const onChangeName = ( newValue ) => {
		//value.name = newValue;
		onChange( {
			...fieldsMap,
			[ field ] : {
				type: type,
				name: newValue,
			}
		} );
	};

	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	return <div
		className="jet-fields-map__row"
	>
		<div className="jet-post-field-control">
			<SelectControl
				key={ 'field_type_' + field + index }
				value={ type }
				onChange={ onChangeType }
				options={ fieldTypes }
				style={ {
					width: '160px'
				} }
			/>
			{ ( metaProp === type ) && <TextControl
				key={ 'field_name_' + field + index }
				value={ name }
				onChange={ onChangeName }
				style={ { width: '200px' } }
			/> }
			{ ( termsProp === type ) && <SelectControl
				key={ 'field_tax_' + field + index }
				value={ name }
				onChange={ onChangeName }
				options={ preparedTaxes }
				style={ { width: '160px' } }
			/> }
		</div>
	</div>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withInstanceId( JetFieldsMapControl );