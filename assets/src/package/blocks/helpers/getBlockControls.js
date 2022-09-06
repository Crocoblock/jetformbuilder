import ControlsSettings from './ControlsSettings';

function getBlockControls( type = 'all' ) {
	if ( !type ) {
		return false;
	}
	const controls = ControlsSettings();

	if ( 'all' === type ) {
		return controls;
	}

	if ( controls[ type ]
		&& controls[ type ].attrs
		&& Array.isArray( controls[ type ].attrs )
		&& 0 < controls[ type ].attrs.length
	) {
		return controls[ type ].attrs;
	}

	return false;
}

export default getBlockControls;