const {
	      AdvancedRestriction,
      } = JetFormBuilderAbstract;

function BaseFileRestriction() {
	AdvancedRestriction.call( this );
}

BaseFileRestriction.prototype = Object.create( AdvancedRestriction.prototype );

/**
 * @type {File}
 */
BaseFileRestriction.prototype.file = null;

BaseFileRestriction.prototype.setFile = function ( file ) {
	this.file = file;
};

export default BaseFileRestriction;