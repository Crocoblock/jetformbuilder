import ReportingInterface from './ReportingInterface';
import { allRejected } from '../functions';
import { createDefaultRestrictions } from './functions';

function BrowserReporting() {
	ReportingInterface.call( this );

	this.isSupported = function () {
		return true;
	};

	this.reportRaw   = function ( errors = [] ) {
		const message = errors.find( error => typeof error.getMessage === 'function' )?.getMessage();

		this.reportedInline = Boolean(
			message && typeof this.input.showError === 'function' && this.input.showError( message ) !== false,
		);
		return this.reportedInline;
	};
	this.reportFirst = function ( errors = [] ) {
		if ( this.reportRaw( errors ) ) {
			return;
		}

		this.getNode().reportValidity();
	};

	this.setRestrictions  = function () {
		const [ node ] = this.input.nodes;

		createDefaultRestrictions( this, node );
	};
	this.clearReport      = function () {
		this.reportedInline = false;
		this.input.clearError?.();
	};
	this.validateOnChange = function () {
		this.getErrors().then( errors => {
			this.validityState.current = !Boolean( errors.length );

			if ( !errors.length ) {
				this.clearReport();
			}
		} ).catch( () => {} );
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
		return !this.reportedInline && this.input.hasAutoScroll();
	};

	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	this.getNode = function () {
		return this.input.getReportingNode();
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );
BrowserReporting.prototype.reportedInline = false;

export default BrowserReporting;
