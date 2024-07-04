const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      __,
      } = wp.i18n;

function StaticInsertedPostID() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'insert_post' ];
	};

	this.getName = function () {
		return 'inserted_post_id';
	};

	this.getHelp = function () {
		return __(
			'A computed field from the <b>Insert/Update Post</b> action.',
			'jet-form-builder',
		);
	};
}

StaticInsertedPostID.prototype = Object.create( BaseComputedField.prototype );

export default StaticInsertedPostID;