import ReportingInterface from './ReportingInterface';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported = function ( node, input ) {
		return true;
	};
	this.report      = function ( validationErrors ) {
		this.getNode().reportValidity();
	};
	this.isValid     = async function () {
		if ( !this.getNode()?.checkValidity ) {
			return [];
		}
		return this.getNode().checkValidity() ? [] : [ true ];
	};
	this.clearReport = function () {
		// browser automatically hide tooltip messages
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;