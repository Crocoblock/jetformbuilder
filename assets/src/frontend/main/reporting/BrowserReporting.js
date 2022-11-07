import ReportingInterface from './ReportingInterface';
import NativeRestriction from './restrictions/NativeRestriction';
import RequiredRestriction from './restrictions/RequiredRestriction';
import { allRejected } from '../functions';

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

		if ( !node.checkValidity ) {
			return;
		}
		this.restrictions = [
			new NativeRestriction(),
			new RequiredRestriction(),
		].filter(
			current => current.isSupported( node, this ),
		);

		this.restrictions.forEach( current => current.setReporting( this ) );
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