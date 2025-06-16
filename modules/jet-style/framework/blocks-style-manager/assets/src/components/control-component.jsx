import ControlText from './controls/text';
import ControlChoose from './controls/choose';
import ControlBorder from './controls/border';
import ControlColor from './controls/color';
import ControlTypography from './controls/typography';
import ControlDimensions from './controls/dimensions';
import ControlRange from './controls/range';
import ControlsTabs from './common/controls-tabs';

import { useSelect } from '@wordpress/data';
import { getBreakpointsHierarchy } from '../helpers/breakpoints';
import { Tooltip } from '@wordpress/components';

/**
 * Renders control depending on it's type and attach attributes handlers.
 */
const ControlComponent = ( { control, props } ) => {

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

	const handleChange = ( value ) => {
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

		if ( ! value ) {
			return null;
		}

		let isUsedForCurrentDevice = false;
		let tooltipText = 'Is inherited from the previous breakpoints';

		// Check if the value is set for the current device
		if ( '__desktop' === device && attributes[ supportName ][ control.id ] ) {
			isUsedForCurrentDevice = true;
			tooltipText = 'Explicitly set for the current device';
		} else if ( attributes[ supportName ]?.[ device ]?.[ control.id ] ) {
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
			value: getResponsiveValue( control.id ),
			handleChange: handleChange,
		};

		switch ( control.type ) {
			case 'text':
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
					<></>
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