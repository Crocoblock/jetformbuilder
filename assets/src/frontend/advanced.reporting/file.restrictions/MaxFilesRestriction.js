import Restriction from '../restrictions/Restriction';

function MaxFilesRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return (
			'file' === node?.type
		);
	};

	this.runOnlyIfRequired = function () {
		return false;
	};

	this.validate = function () {
		/**
		 * @type {SignalFile}
		 */
		const callable    = this.reporting.input.callable;
		const { current } = this.reporting.input.value;

		const { max_files = 1 } = callable.settings;

		return current?.length <= max_files;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'max_files' );
	};
}

MaxFilesRestriction.prototype = Object.create( Restriction.prototype );

export default MaxFilesRestriction;