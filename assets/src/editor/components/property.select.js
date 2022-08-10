const {
	      SelectControl,
      } = wp.components;
const {
	      useState,
	      useEffect,
	      useContext,
      } = wp.element;

function taxPrefix( suffix = '' ) {
	return 'jet_tax__' + suffix;
}

function PropertySelect( {} ) {
	const [ currentProp, setCurrentProp ] = useState();
	const { source }                      = useContext();

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
}

export default PropertySelect;