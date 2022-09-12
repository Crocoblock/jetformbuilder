import HtmlMacro from './HtmlMacro';
import CheckboxData from '../inputs/CheckboxData';

function CheckboxHtmlMacro() {
	HtmlMacro.call( this );

	this.isSupported       = function ( input ) {
		return input instanceof CheckboxData;
	};
	this.getValueFromField = function ( input ) {
		return [ ...input.value.current ].join( ', ' );
	};
}

CheckboxHtmlMacro.prototype = Object.create( HtmlMacro.prototype );

export default CheckboxHtmlMacro;