import ReportingInterface from './ReportingInterface';
import { allRejected } from '../functions';
import { createDefaultRestrictions } from './functions';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported = function ( node, input ) {
		return true;
	};

	this.reportRaw   = function ( validationErrors ) {
	};
	this.reportFirst = function ( validationErrors ) {
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
		const errors   = await allRejected( promises );
		this.valuePrev = this.input.getValue();

		return errors;
	};

	this.validateOnChangeState = function () {
		return this.validate();
	};

	this.hasAutoScroll = function () {
		return true;
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;