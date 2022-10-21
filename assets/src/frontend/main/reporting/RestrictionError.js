function RestrictionError( message ) {
	Error.call( this, message );

	if ( Error.captureStackTrace ) {
		Error.captureStackTrace( this, RestrictionError );
	}
	else {
		this.stack = (
			new Error()
		).stack;
	}
}

RestrictionError.prototype = Object.create( Error.prototype );

export default RestrictionError;