import ReportingInterface from './ReportingInterface';
import { allRejected } from '../functions';
import { createDefaultRestrictions } from './functions';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported      = function ( node, input ) {
		return true;
	};
	this.report           = function ( validationErrors ) {
		this.getNode().reportValidity();
	};
	this.setRestrictions  = function () {
		const [ node ] = this.input.nodes;

		createDefaultRestrictions( this, node );
	};
	this.clearReport      = function () {
		// browser automatically hide tooltip messages
	};
	this.validateOnChange = function () {
		this.validate().then( () => {} ).catch( () => {} );
	};

	this.getErrorsRaw = async function ( promises ) {
		this.valuePrev = this.input.getValue();

		return await allRejected( promises );
	};

	this.validateOnChangeState = function ( silence = false ) {
		return silence ? this.validate() : this.validateWithNotice();
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;