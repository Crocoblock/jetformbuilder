import ReportingInterface from './ReportingInterface';
import NativeRestriction from './restrictions/NativeRestriction';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported                 = function ( node, input ) {
		return true;
	};
	this.report                      = function ( validationErrors ) {
		this.getNode().reportValidity();
	};
	this.setRestrictions             = function () {
		const [ node ] = this.input.nodes;

		if ( !node.checkValidity ) {
			return;
		}
		this.restrictions = [ new NativeRestriction() ];
		this.restrictions.forEach( current => current.setReporting( this ) );
	};
	this.clearReport                 = function () {
		// browser automatically hide tooltip messages
	};
	this.validateWithNoticeDebounced = function () {
		this.errors = null;
		this.validate().then( () => {} ).catch( () => {} );
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;