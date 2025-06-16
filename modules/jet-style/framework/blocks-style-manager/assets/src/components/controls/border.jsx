import { BorderBoxControl } from '@wordpress/components';
import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';
import { isObject } from '../../helpers/utils';

const ControlBorder = ( { control, value, handleChange } ) => {

	const colorsList = wp.data.select( 'core/block-editor' ).getSettings().colors;
	const currentValue = value || {};

	const updateValue = ( property, newValue ) => {

		const newBorderValue = {
			...currentValue,
		}

		if ( isObject( newValue ) ) {
			const curretSubValue = currentValue[ property ] || {};

			newBorderValue[ property ] = {
				...curretSubValue,
				...newValue
			};
		} else {
			newBorderValue[ property ] = newValue;
		}

		handleChange( newBorderValue );
	}

	return (
		<>
			<BorderBoxControl
				label={ control.label }
				value={ currentValue.border }
				onChange={ ( newValue ) => updateValue( 'border', newValue ) }
				className="crocoblock-style-manager__border-control crocoblock-style-manager__with-spacing"
				help={ control.help }
				colors={ colorsList }
				enableStyle={ true }
				__experimentalIsRenderedInSidebar={ true }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<BorderRadiusControl
				label={ 'Radius' }
				values={ currentValue.radius }
				value={ currentValue.radius }
				onChange={ ( newValue ) => updateValue( 'radius', newValue ) }
				className="crocoblock-style-manager__border-radius-control"
				__experimentalIsRenderedInSidebar={ true }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</>
	);
}

export default ControlBorder;