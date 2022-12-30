import { isRepeater } from '../functions';

let {
	    AdvancedRestriction,
	    Restriction,
    } = JetFormBuilderAbstract;

AdvancedRestriction = AdvancedRestriction || Restriction;

function NotEmptyRepeater() {
	AdvancedRestriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return reporting.input.isRequired && isRepeater( node );
	};
	this.validate    = function () {
		const value = this.getValue();

		return !!value?.length;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'empty' );
	};
}

NotEmptyRepeater.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEmptyRepeater;