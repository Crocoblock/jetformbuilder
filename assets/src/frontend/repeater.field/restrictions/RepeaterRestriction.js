import { isRepeater } from '../functions';

let {
	    AdvancedRestriction,
	    Restriction,
    } = JetFormBuilderAbstract;

AdvancedRestriction = AdvancedRestriction || Restriction;

function RepeaterRestriction() {
	AdvancedRestriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return isRepeater( node );
	};

	this.validate = function () {
		return true;
	};

	this.getRawMessage = function () {
		return '';
	};
}

RepeaterRestriction.prototype = Object.create( AdvancedRestriction.prototype );

export default RepeaterRestriction;