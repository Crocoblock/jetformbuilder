import isPresetString from './isPresetString';

const {
	      __,
      } = wp.i18n;

function humanReadablePreset( value ) {
	value = value ?? '';

	if ( !isPresetString( value ) ) {
		return value;
	}

	const parsedPreset = JSON.parse( value );
	const label        = __( 'Preset from', 'jet-form-builder' );

	return `${ label } <code>${ parsedPreset?.from ?? '(empty)' }</code>`;
}

export default humanReadablePreset;