import { sprintf, __ } from '@wordpress/i18n';
import { BaseComputedField } from 'jet-form-builder-actions';

const getPostType = action => {
	const { insert_post: insertPost = {} } = action?.settings;

	return insertPost.post_type;
};

function DynamicInsertedPostID() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'insert_post' ];
	};

	this.isSupported = function ( action ) {
		return (
			BaseComputedField.prototype.isSupported.call( this, action ) &&
			getPostType( action )
		);
	};

	this.getName = function () {
		const lastPart = this.hasInList ? `_${ this.action.id }` : '';

		return `inserted_${ getPostType( this.action ) }` + lastPart;
	};

	this.getHelp = function () {
		return sprintf(
			// translators: %s - action ID
			__(
				'A computed field from the <b>Insert/Update Post (%s)</b> action.',
				'jet-form-builder',
			),
			this.action.id,
		);
	};
}

DynamicInsertedPostID.prototype = Object.create( BaseComputedField.prototype );

export default DynamicInsertedPostID;