import isPresetString from './isPresetString';

const {
	      __,
      } = wp.i18n;

function humanReadablePreset( value, highlight = 'code' ) {
	value = value ?? '';

	if ( !isPresetString( value ) ) {
		return value;
	}

	const parsedPreset = JSON.parse( value );
	const label        = __( 'Preset from', 'jet-form-builder' );
	const from         = parsedPreset?.from ?? '(empty)';

	let highlightedFrom;

	switch ( highlight ) {
		case 'code':
			highlightedFrom = `<code>${ from }</code>`;
			break;
		case 'b':
			highlightedFrom = `<b>${ from }</b>`;
			break;
	}

	return [
		label,
		highlightedFrom,
	].join( ' ' );
}

export default humanReadablePreset;