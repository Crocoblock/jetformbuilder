import { TextControl } from '@wordpress/components';

const ControlText = ( { control, value, handleChange } ) => {

	return (
		<TextControl
			label={ control.label }
			value={ value }
			onChange={ ( newValue ) => handleChange( newValue ) }
			placeholder={ control.placeholder }
			className="crocoblock-style-manager__text-control"
			help={ control.help }
			disabled={ control.disabled }
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
}

export default ControlText;