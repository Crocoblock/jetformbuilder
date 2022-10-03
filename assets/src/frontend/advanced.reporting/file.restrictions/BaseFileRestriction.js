import Restriction from '../restrictions/Restriction';

function BaseFileRestriction() {
	Restriction.call( this );
}

BaseFileRestriction.prototype = Object.create( Restriction.prototype );

/**
 * @type {File}
 */
BaseFileRestriction.prototype.file = null;

BaseFileRestriction.prototype.setFile = function ( file ) {
	this.file = file;
};

export default BaseFileRestriction;