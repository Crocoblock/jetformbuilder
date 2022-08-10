const {
	      SelectControl,
	      TextControl,
      } = wp.components;
const {
	      useState,
	      useEffect,
	      useContext,
      } = wp.element;
const {
	      CurrentActionEditContext,
	      ActionFieldsMapContext,
      } = JetFBComponents;

function taxPrefix( suffix = '' ) {
	return 'jet_tax__' + suffix;
}

const getMapValue = value => {
	return [ 'post_meta', 'post_terms' ].includes( value ) ? '' : value;
};

function PropertySelect() {
	// context with action props
	const {
		      source,
		      settings,
		      setMapField,
		      getMapField,
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
		let resultValue = 'post_meta';

		for ( const property of source.properties ) {
			if ( value === property.value ) {
				resultValue = value;
				break;
			}
		}

		if ( value.includes( taxPrefix() ) ) {
			resultValue = 'post_terms';
		}

		return resultValue;
	}

	const [ currentProp, setCurrentProp ] = useState(
		() => getTypeFieldValue( fields_map[ name ] ?? '' ),
	);

	const FieldSelect = () => (
		<SelectControl
			key={ name + index }
			value={ currentProp }
			onChange={ value => {
				const prop = getTypeFieldValue( value );

				setCurrentProp( prop );
				setMapField( {
					nameField: name,
					value: getMapValue( value ),
				} );
			} }
			options={ source.properties }
		/>
	);

	switch ( currentProp ) {
		case 'post_meta':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				<FieldSelect/>
				<TextControl
					key={ name + index + '_text' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
				/>
			</div>;
		case 'post_terms':
			return <div
				className="components-base-control jet-margin-bottom-wrapper"
			>
				<FieldSelect/>
				<SelectControl
					key={ name + index + '_select' }
					value={ getMapField( { name } ) }
					onChange={ value => setMapField(
						{ nameField: name, value },
					) }
					options={ source.taxonomies }
				/>
			</div>;
		default:
			return <FieldSelect/>;
	}
}

export default PropertySelect;