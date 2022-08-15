import CurrentActionEditContext from '../context/current.action.edit';
import ActionFieldsMapContext from '../context/action.fields.map.context';
import CurrentPropertyMapContext from '../context/current.property.map';

const {
	      useState,
	      useContext,
      } = wp.element;

const {
	      SelectControl,
      } = wp.components;

function DynamicPropertySelect( {
	dynamic = [],
	parseValue = val => val,
	children = null,
	properties = null,
} ) {

	// context with action props
	const {
		      source,
		      settings,
		      setMapField,
	      } = useContext( CurrentActionEditContext );
	// context with current field in fields map
	const {
		      name,
		      index,
	      } = useContext( ActionFieldsMapContext );

	const {
		      fields_map = {},
	      } = settings;

	function getTypeFieldValue( value ) {
		let resultValue = dynamic[ 0 ] ?? '';

		for ( const property of (
			properties ?? source.properties
		) ) {
			if ( value === property.value ) {
				resultValue = value;
				break;
			}
		}

		resultValue = parseValue( resultValue );

		return resultValue;
	}

	const [ currentProp, setCurrentProp ] = useState(
		() => getTypeFieldValue( fields_map[ name ] ?? '' ),
	);

	const FieldSelect = (
		<SelectControl
			key={ name + index }
			value={ currentProp }
			onChange={ value => {
				const prop = getTypeFieldValue( value );

				setCurrentProp( prop );
				setMapField( {
					nameField: name,
					value: dynamic.includes( value ) ? '' : value,
				} );
			} }
			options={ properties ?? source.properties }
		/>
	);

	return <CurrentPropertyMapContext.Provider value={ {
		FieldSelect,
		property: currentProp,
	} }>
		{ children }
	</CurrentPropertyMapContext.Provider>;
}

export default DynamicPropertySelect;