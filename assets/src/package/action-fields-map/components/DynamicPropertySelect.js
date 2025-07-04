import { CurrentActionEditContext } from 'jet-form-builder-actions';
import ActionFieldsMapContext from '../context/ActionFieldsMapContext';
import CurrentPropertyMapContext from '../context/CurrentPropertyMapContext';
import { useState, useContext } from '@wordpress/element';
import { StyledSelectControl } from 'jet-form-builder-components';


// eslint-disable-next-line max-lines-per-function
function DynamicPropertySelect( {
	dynamic = [],
	parseValue = null,
	children = null,
	properties = null,
} ) {

	// context with action props
	const {
		      source,
		      settings,
		      setMapField,
	      } = useContext( CurrentActionEditContext );

	properties = (
		properties ?? source.properties
	);

	// context with current field in a field map
	const {
		      name,
		      index,
	      } = useContext( ActionFieldsMapContext );

	const {
		      fields_map: fieldsMap = {},
	      } = settings;

	function getTypeFieldValue( value ) {
		for ( const property of properties ) {
			if ( value === property.value ) {
				return value;
			}
		}

		return parseValue ? parseValue( value ) : dynamic[ 0 ] ?? '';
	}

	const [ currentProp, setCurrentProp ] = useState(
		() => getTypeFieldValue( fieldsMap[ name ] ?? '' ),
	);

	const getHelp = () => {
		const property = properties.find(
			( { value } ) => value === currentProp,
		);

		return property?.help ?? '';
	};

	const FieldSelect = (
		<StyledSelectControl
			key={ name + index }
			value={ currentProp }
			options={ properties }
			help={ getHelp() }
			onChange={ value => {
				const prop = getTypeFieldValue( value );

				setCurrentProp( prop );
				setMapField( {
					nameField: name,
					value: dynamic.includes( value ) ? '' : value,
				} );
			} }
		/>
	);

	return <CurrentPropertyMapContext.Provider value={ {
		FieldSelect,
		property: currentProp,
	} }>
		{ children && children }
		{ !children && FieldSelect }
	</CurrentPropertyMapContext.Provider>;
}

export default DynamicPropertySelect;