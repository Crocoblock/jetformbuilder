import { sprintf, __ } from '@wordpress/i18n';
import DynamicInsertedTermID from './DynamicInsertedTermID';
import { getActionLabel, getTaxonomy } from './insertedTermNames';

function DynamicInsertedTermTitle() {
	DynamicInsertedTermID.call( this );

	this.prefix = 'inserted_term_title_';

	this.getHelp = function () {
		return sprintf(
			// translators: 1 - taxonomy, 2 - action name and ID
			__(
				'Name of the "%1$s" term from the <b>%2$s</b> action.',
				'jet-form-builder',
			),
			getTaxonomy( this.action ),
			getActionLabel( this.action ),
		);
	};
}

DynamicInsertedTermTitle.prototype = Object.create( DynamicInsertedTermID.prototype );

export default DynamicInsertedTermTitle;
