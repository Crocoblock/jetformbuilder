import { BoxControl } from '@wordpress/components';
import { isObject } from '../../helpers/utils';

const ControlDimensions = ( { control, value, handleChange } ) => {

	return (
		<BoxControl
			label={ control.label }
			values={ value }
			value={ value }
			onChange={ ( newValue ) => handleChange( newValue ) }
			className="crocoblock-style-manager__dimensions-control"
			__experimentalIsRenderedInSidebar={ true }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	);
}

export default ControlDimensions;