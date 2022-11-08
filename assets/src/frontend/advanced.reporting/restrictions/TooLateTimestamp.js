import AdvancedRestriction from './AdvancedRestriction';

const { getTimestamp } = JetFormBuilderFunctions;

function TooLateTimestamp() {
	AdvancedRestriction.call( this );

	this.watchedAttrs.push( 'max' );

	this.isSupported = function ( node, reporting ) {
		const { max = false } = reporting.input.attrs;

		return (
			false !== max &&
			[ 'time', 'date', 'datetime-local' ].includes( node.type )
		);
	};

	this.validate = function () {
		const value = this.getValue();

		if ( !value ) {
			return true;
		}

		const { max }           = this.reporting.input.attrs;
		const { time }          = getTimestamp( value );
		const { time: maxTime } = getTimestamp( max.value.current );

		return time <= maxTime;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'date_max' );
	};
}

TooLateTimestamp.prototype = Object.create( AdvancedRestriction.prototype );

export default TooLateTimestamp;