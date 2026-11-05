import { sprintf, __ } from '@wordpress/i18n';
import { BaseComputedField } from 'jet-form-builder-actions';
import {
	getInsertedFieldLabel,
	getInsertedFieldName,
	isActionAvailable,
	getActionLabel,
	getTaxonomy,
} from './insertedTermNames';

/**
 * Fields of the Insert/Update Term actions placed before the current one:
 * inserted_term_id_{taxonomy}_{action ID}, inserted_term_title_{taxonomy}_{action ID}.
 * Every macro belongs to exactly one action, so it does not depend on the order of actions.
 */
function DynamicInsertedTermID() {
	BaseComputedField.call( this );

	this.prefix = 'inserted_term_id_';

	this.getSupportedActions = function () {
		return [ 'insert_term' ];
	};

	this.isSupported = function ( action ) {
		return (
			BaseComputedField.prototype.isSupported.call( this, action ) &&
			getTaxonomy( action ) &&
			isActionAvailable( action )
		);
	};

	this.getName = function () {
		return getInsertedFieldName( this.prefix, this.action );
	};

	this.getLabel = function () {
		return getInsertedFieldLabel( this.prefix, this.action );
	};

	this.getHelp = function () {
		return sprintf(
			// translators: 1 - taxonomy, 2 - action name and ID
			__(
				'ID of the "%1$s" term from the <b>%2$s</b> action.',
				'jet-form-builder',
			),
			getTaxonomy( this.action ),
			getActionLabel( this.action ),
		);
	};
}

DynamicInsertedTermID.prototype = Object.create( BaseComputedField.prototype );

export default DynamicInsertedTermID;
