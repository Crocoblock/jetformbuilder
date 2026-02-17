import { ToggleControl } from '@wordpress/components';

const ControlToggle = ( { control, value, handleChange } ) => {

	return (
		<ToggleControl
			label={ control.label }
			checked={ value }
			onChange={ handleChange }
			help={ control.help }
			disabled={ control.disabled }
			className="crocoblock-style-manager__toggle-control"
		/>
	);
}

export default ControlToggle;