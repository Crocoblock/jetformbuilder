import HeaderControls from './HeaderControls';
import FooterControls from './FooterControls';

const {
	      useBlockAttributes,
      } = JetFBHooks;
const {
	      SelectControl,
      } = wp.components;

function FieldSettings() {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const setDynamicName = newValue => {
		if ( newValue
			&& (
				!attributes.name || 'hidden_field_name' === attributes.name
			)
		) {
			setAttributes( { name: newValue } );
		}
	};

	return <>
		<HeaderControls
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>
		<SelectControl
			key="field_value"
			label="Field Value"
			labelPosition="top"
			value={ attributes.field_value }
			onChange={ newValue => {
				setAttributes( { field_value: newValue } );
				setDynamicName( newValue );
			} }
			options={ JetFormHiddenField.sources }
		/>
		<FooterControls
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>
	</>;
}

export default FieldSettings;