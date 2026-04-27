import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	Dashicon,
} from '@wordpress/components';

const ControlChoose = ( { control, value, handleChange } ) => {

	let controlValue = value;

	if ( undefined === controlValue && control.options ) {
		// If the value is undefined, set it to the first option
		controlValue = Object.keys( control.options )[ 0 ];
	}

	return (
		<ToggleGroupControl
			label={ control.label }
			value={ value }
			onChange={ handleChange }
			isBlock
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		>
			{ control.options && Object.entries( control.options ).map( ( [ optionValue, optionData ] ) => {

				var icon = optionData.icon || false;

				if ( icon ) {
					if ( icon.includes( 'dashicons-' ) ) {
						icon = icon.replace( 'dashicons-', '' );
					}

					icon = <Dashicon icon={ icon } />;
				}

				if ( icon ) {
					return ( <ToggleGroupControlOptionIcon
						icon={ icon }
						value={ optionValue }
						label={ optionData.label }
						aria-label={ optionData.label }
					/> );
				} else {
					return ( <ToggleGroupControlOption
						key={ optionValue }
						value={ optionValue }
						label={ optionData.label }
						aria-label={ optionData.label }
					/> );
				}

 			} ) }
		</ToggleGroupControl>
	);
}

export default ControlChoose;