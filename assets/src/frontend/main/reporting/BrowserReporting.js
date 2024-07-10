import ReportingInterface from './ReportingInterface';
import { allRejected } from '../functions';
import { createDefaultRestrictions } from './functions';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported = function () {
		return true;
	};

	this.reportRaw   = function () {
	};
	this.reportFirst = function () {
		const node = this.getNode();

		node.reportValidity();
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
		const errors   = await allRejected( promises );
		this.valuePrev = this.input.getValue();

		return errors;
	};

	this.validateOnChangeState = function () {
		return this.validate();
	};

	this.hasAutoScroll = function () {
		return this.input.hasAutoScroll();
	};

	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	this.getNode = function () {
		return this.input.getReportingNode();
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;