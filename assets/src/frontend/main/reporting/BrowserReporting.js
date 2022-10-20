import ReportingInterface from './ReportingInterface';
import NativeRestriction from './restrictions/NativeRestriction';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported     = function ( node, input ) {
		return true;
	};
	this.report          = function ( validationErrors ) {
		this.getNode().reportValidity();
	};
	this.setRestrictions = function () {
		this.restrictions = [ NativeRestriction ];
	};
	this.clearReport     = function () {
		// browser automatically hide tooltip messages
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;