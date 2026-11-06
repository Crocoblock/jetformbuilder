const ESCAPE_MAP = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#039;',
};

/**
 * Escapes form configuration values (field names, condition values, preset
 * sources...) before they are joined into the HTML strings that the editor
 * shows with dangerouslySetInnerHTML. A form can be imported or generated,
 * so its settings are not trusted markup.
 *
 * @param  value {*}
 * @return {string}
 */
function escapeText( value ) {
	return String( value ?? '' ).replace( /[&<>"']/g, ( char ) => ESCAPE_MAP[ char ] );
}

export default escapeText;
