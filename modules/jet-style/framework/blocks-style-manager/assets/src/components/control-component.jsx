import ControlText from './controls/text';
import ControlChoose from './controls/choose';
import ControlBorder from './controls/border';
import ControlColor from './controls/color';
import ControlTypography from './controls/typography';
import ControlDimensions from './controls/dimensions';
import ControlRange from './controls/range';
import ControlToggle from './controls/toggle';
import ControlHeading from './controls/heading';
import ControlsTabs from './common/controls-tabs';

import { useSelect } from '@wordpress/data';
import { getBreakpointsHierarchy } from '../helpers/breakpoints';
import { valueIsEmpty } from '../helpers/utils';
import { Tooltip } from '@wordpress/components';
import { isVisible, getContextFromProps } from '../helpers/conditions-checker';

/**
 * Renders control depending on it's type and attach attributes handlers.
 */
const ControlComponent = ( { control, props } ) => {

	if ( control.condition && ! isVisible( control.condition, getContextFromProps( props ) ) ) {
		return null;
	}

	const { attributes, setAttributes } = props;
	const supportName = window.crocoStyleEditorData.support_name;

	const prefixedName = ( name ) => {
		return `__${ name.toLowerCase() }`
	}

	const device = useSelect(
		( select ) => {
			const editPost = select( 'core/edit-post' );
			let previewDevice = 'Desktop';

			if ( editPost && typeof editPost.__experimentalGetPreviewDeviceType === 'function' ) {
				previewDevice = editPost.__experimentalGetPreviewDeviceType();
			}

			return prefixedName( previewDevice );
		}, []
	);

	const devicesHierarchy = getBreakpointsHierarchy();

	// Check if the control has a value in the attributes
	if ( ! attributes[ supportName ]?.[ control.id ] ) {
		attributes[ supportName ][ control.id ] = control.defaultValue;
	}

	const findProp = ( obj, search ) => {

		let result = null;

		for ( const [ k, v ] of Object.entries( obj ) ) {
			if ( v === search ) {
				return k;
			} else if ( 'object' === typeof v ) {
				result = findProp( v, search );
				if ( result ) {
					break;
				}
			}
		}

		return result;
	};

	const maybeConvertFromReturnValue = ( value ) => {

		if ( control.return_value ) {

			let found = findProp( control.return_value, value );

			if ( found ) {

				value = found;

				// convert string 'true'/'false' to boolean
				if ( 'true' === value ) {
					value = true;
				} else if ( 'false' === value ) {
					value = false;
				}
			}
		}

		return value;
	};

	const handleChange = ( value ) => {

		if ( control.return_value ) {

			if ( 'boolean' === typeof value ) {
				if ( true === value ) {
					value = control.return_value.true || null;
				} else if ( false === value ) {
					value = control.return_value.false || null;
				} else {
					value = null;
				}
			} else if ( 'string' === typeof value || 'number' === typeof value ) {
				value = control.return_value?.[ value ] || null;
			}
		}

		setStyleAttr( control.id, value );
	};

	const getResponsiveValue = ( attr ) => {
		if ( '__desktop' === device ) {
			return attributes[ supportName ][ attr ];
		} else if ( attributes[ supportName ][ device ]?.[ attr ] ) {
			return attributes[ supportName ][ device ][ attr ];
		} else {

			// If the value is not set for the current device - get previous device value
			const currentDeviceIndex = devicesHierarchy.indexOf( device );
			const prevDeviceIndex = currentDeviceIndex - 1;
			const previousDevice = devicesHierarchy[ prevDeviceIndex ];

			if ( prevDeviceIndex
				&& previousDevice
				&& attributes[ supportName ][ previousDevice ]?.[ attr ]
			) {
				return attributes[ supportName ][ previousDevice ][ attr ];
			}

			// If no previous device value - return desktop value
			return attributes[ supportName ][ attr ];
		}
	};

	const usageMarker = () => {

		const value = getResponsiveValue( control.id );

		if ( control.default && control.default === value ) {
			return null;
		}

		if ( valueIsEmpty( value ) ) {
			return null;
		}

		let isUsedForCurrentDevice = false;
		let tooltipText = 'Is inherited from the previous breakpoints';

		// Check if the value is set for the current device
		if ( '__desktop' === device
			&& ! valueIsEmpty( attributes[ supportName ][ control.id ] )
		) {
			isUsedForCurrentDevice = true;
			tooltipText = 'Explicitly set for the current device';
		} else if ( ! valueIsEmpty( attributes[ supportName ]?.[ device ]?.[ control.id ] ) ) {
			isUsedForCurrentDevice = true;
			tooltipText = 'Explicitly set for the current device';
		}

		return (
			<Tooltip
				text={ tooltipText }
				placement="top"
				delay={ 300 }
			>
				<div className={ `crocoblock-style-manager__usage-marker is-${ isUsedForCurrentDevice ? 'used' : 'inherited' }` }></div>
			</Tooltip>
		);
	}

	const setStyleAttr = ( attr, value ) => {

		let newStyles = {};

		if ( '__desktop' === device ) {
			newStyles = {
				...attributes[ supportName ],
				[ attr ]: value,
			};
		} else {
			newStyles = {
				...attributes[ supportName ],
				[ device ]: {
					...attributes[ supportName ][ device ],
					[ attr ]: value,
				},
			};
		}

		setAttributes( {
			[ supportName ]: newStyles,
		} );
	};

	const renderControl = () => {

		const controlProps = {
			control: control,
			value: maybeConvertFromReturnValue( getResponsiveValue( control.id ) ),
			handleChange: handleChange,
		};

		switch ( control.type ) {
			case 'text':
				return (
					<ControlHeading { ...controlProps }/>
				);
			case 'input':
				return (
					<ControlText { ...controlProps }/>
				);
			case 'color-picker':
				return (
					<ControlColor { ...controlProps }/>
				);
			case 'toggle':
				return (
					<ControlToggle { ...controlProps }/>
				);
			case 'range':
				return (
					<ControlRange { ...controlProps }/>
				);
			case 'choose':
				return (
					<ControlChoose { ...controlProps }/>
				);
			case 'dimensions':
				return (
					<ControlDimensions { ...controlProps }/>
				);
			case 'border':
				return (
					<ControlBorder { ...controlProps }/>
				);
			case 'typography':
				return (
					<ControlTypography { ...controlProps }/>
				);
			case 'select':
				return (
					<></>
				);
			case 'tabs':
				return (
					<ControlsTabs
						control={ control }
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className={ `crocoblock-style-manager__control is-control--${ control.type }` }>
			{ usageMarker() }
			{ renderControl() }
		</div>
	);
};

export default ControlComponent;