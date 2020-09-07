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
	value
} ) {

	metaProp  = metaProp || 'post_meta';
	termsProp = termsProp || 'post_terms';

	const id = `inspector-select-control-${ instanceId }`;

	const [ fieldType, setFieldType ] = useState( '' );
	const [ fieldName, setFieldName ] = useState( '' );

	const preparedTaxes = [];

	const taxPrefix = 'jet_tax__';

	for ( var i = 0; i < taxonomiesList.length; i++ ) {
		preparedTaxes.push( {
			value: taxPrefix + taxonomiesList[ i ].value,
			label: taxonomiesList[ i ].label,
		} );
	};

	const onChangeValue = ( context ) => {

		value = value || {};

		switch ( context ) {
			case 'field_type':
				break;

			case 'field_name':
				break;
		}

		value = newValue;

		onChange( value );

	};

	useEffect( () => {
		onChangeValue( 'field_type' );
	}, [ fieldType ] );

	useEffect( () => {
		onChangeValue( 'field_name' );
	}, [ fieldName ] );

	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	return <div
		className="jet-fields-map__row"
	>
		<div className="jet-post-field-control">
			<SelectControl
				key={ 'field_type' }
				value={ fieldType }
				onChange={ setFieldType }
				options={ fieldTypes }
				style={ {
					width: '160px'
				} }
			/>
			{ ( metaProp === fieldType ) && <TextControl
				key={ 'field_name' }
				value={ fieldName }
				onChange={ setFieldName }
				style={ { width: '200px' } }
			/> }
			{ ( termsProp === fieldType ) && <SelectControl
				key={ 'field_tax' }
				value={ fieldName }
				onChange={ setFieldName }
				options={ preparedTaxes }
				style={ { width: '160px' } }
			/> }
		</div>
	</div>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withInstanceId( JetFieldsMapControl );