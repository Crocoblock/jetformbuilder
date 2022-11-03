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

	this.getErrors = async function () {
		if (
			this.input.loading.current ||
			!this.input.isVisible()
		) {
			return [];
		}

		if ( !this.hasChangedValue() ) {
			return this.errors ?? [];
		}

		this.errors    = [];
		const promises = this.getPromises();

		if ( !promises.length ) {
			return this.errors;
		}

		this.errors    = await allRejected( promises );
		this.valuePrev = this.input.getValue();

		return this.errors;
	};

	this.validateOnChangeState = function ( silence = false ) {
		return silence ? this.validate() : this.validateWithNotice();
	};
}

BrowserReporting.prototype = Object.create( ReportingInterface.prototype );

export default BrowserReporting;