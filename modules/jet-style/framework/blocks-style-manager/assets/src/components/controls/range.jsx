import {
	BaseControl,
	RangeControl,
	__experimentalHStack as HStack,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Allowed units format:
 * [
 *     { value: 'px', intervals: { step: 1, min: 1, max: 1000 } },
 *     { value: '%', intervals: { step: 1, min: 1, max: 100 } },
 *     { value: 'vw', intervals: { step: 1, min: 1, max: 100 } },
 * ]
 */
const ControlRange = ( { control, value, handleChange } ) => {

	const withoutUnits = ( value ) => {
		// Remove units from the value
		return value ? parseFloat( value ) : 0;
	}

	const sanitizeValue = ( val ) => {

		// Sanitize the value based on min and max
		let sanitizedValue = val;

		const min = control.min || 0;
		const max = control.max || 100;

		if ( typeof sanitizedValue === 'number' ) {
			if ( sanitizedValue < min ) {
				sanitizedValue = min;
			} else if ( sanitizedValue > max ) {
				sanitizedValue = max;
			}
		}

		if ( typeof sanitizedValue === 'object' && sanitizedValue !== null ) {

			let result = '';

			for ( const key in sanitizedValue ) {
				if ( sanitizedValue.hasOwnProperty( key ) ) {
					result += sanitizeValue( sanitizedValue[ key ] );
				}
			}

			sanitizedValue = result;
		}

		if ( true === control.cut_units ) {
			// Remove units from the value
			sanitizedValue = withoutUnits( sanitizedValue );
		}

		return sanitizedValue;
	}

	const [ currentValue, setCurrentValue ] = useState( sanitizeValue( value ) );

	const getDefaultUnit = () => {
		// Return the first unit from the allowed units or 'px' if no units are specified
		return control.units && control.units.length > 0 ? control.units[ 0 ].value : '';
	}

	const getCurrentUnit = () => {

		if ( true === control.cut_units ) {
			return '';
		}

		if ( currentValue ) {

			// adjust current value to string in case it's number
			let currentValueStr = typeof currentValue === 'number' ? currentValue.toString() : currentValue;

			const match = currentValueStr.match( /[a-zA-Z%]+/ );

			if ( match && match.length > 0 ) {
				return match[ 0 ];
			}
		}

		return getDefaultUnit();
	}

	const addUnits = ( value ) => {

		// Get current unit from current value
		const currentUnit = getCurrentUnit();
		const result = currentUnit ? `${ value }${ currentUnit }` : value;

		return result;
	}

	const allowedUnits = () => {

		// Return allowed units list in the format required by UnitControl
		const units = [];

		if ( control.units && control.units.length > 0 ) {
			for ( const unit of control.units ) {
				units.push( {
					value: unit.value,
					label: unit.label || unit.value,
					default: unit.default || 0,
				} );
			}
		}

		return units;
	}

	const getCurrentUnitMin = () => {
		// Get the minimum value for the current unit
		const currentUnit = getCurrentUnit();
		const unit = control.units.find( ( u ) => u.value === currentUnit );

		return unit && unit.intervals ? unit.intervals.min : 0;
	}


	const getCurrentUnitMax = () => {
		// Get the maximum value for the current unit
		const currentUnit = getCurrentUnit();
		const unit = control.units.find( ( u ) => u.value === currentUnit );

		return unit && unit.intervals ? unit.intervals.max : 100;
	}

	// Return simple RangeControl if no units are specified
	if ( ! control.units ) {

		const min = control.min || 0;
		const max = control.max || 100;

		return (
			<RangeControl
				label={ control.label }
				value={ currentValue }
				onChange={ ( newValue ) => {
					setCurrentValue( newValue );
					handleChange( newValue );
				} }
				placeholder={ control.placeholder }
				className="crocoblock-style-manager__text-control"
				help={ control.help }
				min={ min }
				max={ max }
				disabled={ control.disabled }
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>
		);
	}

	// Return RangeControl with units if specified
	return (
		<BaseControl
			label={ control.label }
			help={ control.help }
			className="crocoblock-style-manager__range-control"
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		>
			<HStack
				className="crocoblock-style-manager__range-control__hstack"
				alignment="center"
			>
				<div
					style={ {
						flex: '1 1 0%',
					} }
				>
					<RangeControl
						value={ withoutUnits( currentValue ) }
						onChange={ ( newValue ) => {
							setCurrentValue( addUnits( newValue ) );
							handleChange( addUnits( newValue ) );
						} }
						placeholder={ control.placeholder }
						className="crocoblock-style-manager__text-control"
						withInputField={ false }
						min={ getCurrentUnitMin() }
						max={ getCurrentUnitMax() }
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</div>
				<div
					style={ {
						flex: '0 0 80px',
					} }
				>
					<UnitControl
						value={ currentValue }
						onChange={ ( newValue ) => {
							handleChange( newValue );
							setCurrentValue( newValue );
						} }
						units={ allowedUnits() }
						className="crocoblock-style-manager__unit-control"
						__nextHasNoMarginBottom
						__next40pxDefaultSize
					/>
				</div>
			</HStack>
		</BaseControl>
	);
}

export default ControlRange;