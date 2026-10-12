const HTML_ESCAPE_MAP = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#039;',
};

/**
 * Marks a string that was already built from trusted markup with its
 * dynamic parts escaped (e.g. the repeater macro), so it must not be
 * escaped a second time.
 */
class SafeHtml {
	constructor( html ) {
		this.html = String( html );
	}

	toString() {
		return this.html;
	}
}

function escapeHtml( value ) {
	return String( value ).replace( /[&<>"']/g, char => HTML_ESCAPE_MAP[ char ] );
}

export { SafeHtml, escapeHtml };
