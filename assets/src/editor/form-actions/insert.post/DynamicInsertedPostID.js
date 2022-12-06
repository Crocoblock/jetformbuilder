const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      sprintf,
	      __,
      } = wp.i18n;

function DynamicInsertedPostID() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'insert_post' ];
	};

	this.getName = function () {
		return 'inserted_post_' + this.action.id;
	};

	this.getHelp = function () {
		return sprintf(
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