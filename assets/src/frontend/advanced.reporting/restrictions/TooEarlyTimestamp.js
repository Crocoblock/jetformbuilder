import AdvancedRestriction from './AdvancedRestriction';

const { getTimestamp } = JetFormBuilderFunctions;

function TooEarlyTimestamp() {
	AdvancedRestriction.call( this );

	this.watchedAttrs.push( 'min' );

	this.isSupported = function ( node, reporting ) {
		const { min = false } = reporting.input.attrs;

		return (
			false !== min &&
			[ 'time', 'date', 'datetime-local' ].includes( node.type )
		);
	};

	this.validate = function () {
		const value = this.getValue();

		if ( !value ) {
			return true;
		}

		const { min }           = this.reporting.input.attrs;
		const { time }          = getTimestamp( value );
		const { time: minTime } = getTimestamp( min.value.current );

		return time >= minTime;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'date_min' );
	};
}

TooEarlyTimestamp.prototype = Object.create( AdvancedRestriction.prototype );

export default TooEarlyTimestamp;