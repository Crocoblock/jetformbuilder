import { __ } from '@wordpress/i18n';
import { BaseComputedField } from 'jet-form-builder-actions';
import { getAvailableInsertTermActions } from './insertedTermNames';

function StaticInsertedTermID() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'insert_term' ];
	};

	/**
	 * With several Insert/Update Term actions only the per-taxonomy fields are shown,
	 * so it is clear which term is meant.
	 */
	this.isSupported = function ( action ) {
		return (
			BaseComputedField.prototype.isSupported.call( this, action ) &&
			getAvailableInsertTermActions().length < 2
		);
	};

	this.getName = function () {
		return 'inserted_term_id';
	};

	this.getHelp = function () {
		return __(
			'A computed field from the <b>Insert/Update Term</b> action.',
			'jet-form-builder',
		);
	};
}

StaticInsertedTermID.prototype = Object.create( BaseComputedField.prototype );

export default StaticInsertedTermID;
