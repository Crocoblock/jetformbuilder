import isPresetString from './isPresetString';
import escapeText from './escapeText';

const {
	      __,
      } = wp.i18n;

function humanReadablePreset( value, highlight = 'code' ) {
	value = value ?? '';

	// Returns HTML: plain values and the preset source are escaped.
	if ( !isPresetString( value ) ) {
		return escapeText( value );
	}

	const parsedPreset = JSON.parse( value );
	const label        = __( 'Preset from', 'jet-form-builder' );
	const from         = escapeText( parsedPreset?.from ?? '(empty)' );

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