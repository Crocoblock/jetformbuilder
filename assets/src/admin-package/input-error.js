class ApiInputError extends Error {
	constructor( noticeOptions = false, message = '' ) {
		super( message )

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if ( Error.captureStackTrace ) {
			Error.captureStackTrace( this, ApiInputError )
		}

		this.name = 'ApiInputError'
		this.noticeOptions = noticeOptions
	}
}

export default ApiInputError;