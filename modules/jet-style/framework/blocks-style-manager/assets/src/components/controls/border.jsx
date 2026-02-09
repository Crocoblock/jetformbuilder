import { BorderBoxControl } from '@wordpress/components';
import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';
import { isObject } from '../../helpers/utils';

/**
 * Value format:
 * {
 *   border: {
 *     color: string,
 *     style: string,
 *     width: string,
 *   },
 *   radius: {
 *     top: string,
 *     right: string,
 *     bottom: string,
 *     left: string,
 *   }
 * }
 *
 * or
 *
 * {
 *   border: {
 *    top: {
 *      color: string,
 *      style: string,
 *      width: string,
 *    },
 *    right: {
 *      color: string,
 *      style: string,
 *      width: string,
 *    },
 *  },
 *  radius: string,
 * }
 */
const ControlBorder = ( { control, value, handleChange } ) => {

	const colorsList = wp.data.select( 'core/block-editor' ).getSettings().colors;
	const currentValue = value || {};

	const isRadiusAllowed = () => {

		if ( undefined === control.hide_radius ) {
			return true;
		}

		if ( control.hide_radius ) {
			return false;
		}

		return true;
	}

	const updateValue = ( property, newValue ) => {

		const newBorderValue = {
			...currentValue,
		}

		var defaultStyle = false;

		if ( isObject( newValue ) ) {

			const curretSubValue = currentValue[ property ] || {};

			if ( 'border' === property ) {

				if ( newValue.color || newValue.style || newValue.width ) {
					delete curretSubValue.top;
					delete curretSubValue.right;
					delete curretSubValue.bottom;
					delete curretSubValue.left;

					if ( newValue.width && ! newValue.style ) {
						defaultStyle = 'solid';
					} else if ( newValue.style ) {
						defaultStyle = newValue.style;
					}
				}

				if ( newValue.top || newValue.right || newValue.bottom || newValue.left ) {

					if ( curretSubValue.color || curretSubValue.style || curretSubValue.width ) {
						newValue.top = { ...curretSubValue, ...newValue.top };
						newValue.right = { ...curretSubValue, ...newValue.right };
						newValue.bottom = { ...curretSubValue, ...newValue.bottom };
						newValue.left = { ...curretSubValue, ...newValue.left };
					}

					delete curretSubValue.color;
					delete curretSubValue.style;
					delete curretSubValue.width;
				}

				if (
					newValue.hasOwnProperty( 'style' )
					&& newValue.hasOwnProperty( 'color' )
					&& undefined === newValue.style
					&& undefined === newValue.color
				) {
					delete newValue.style;
					delete newValue.color;
					delete newValue.width;
					delete curretSubValue.width;
					delete curretSubValue.style;
					delete curretSubValue.color;
					defaultStyle = false;
				}
			}

			if ( defaultStyle ) {
				newValue.style = defaultStyle;
			}

			newBorderValue[ property ] = {
				...curretSubValue,
				...newValue
			};
		} else {
			newBorderValue[ property ] = newValue;
		}

		if ( ! isRadiusAllowed() && newBorderValue.radius ) {
			delete newBorderValue.radius;
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
			{ isRadiusAllowed() && <BorderRadiusControl
				label={ 'Radius' }
				values={ currentValue.radius }
				value={ currentValue.radius }
				onChange={ ( newValue ) => updateValue( 'radius', newValue ) }
				className="crocoblock-style-manager__border-radius-control"
				__experimentalIsRenderedInSidebar={ true }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/> }
		</>
	);
}

export default ControlBorder;