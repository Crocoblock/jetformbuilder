import Restriction from '../restrictions/Restriction';

function MaxFilesRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return (
			'file' === node?.type
		);
	};

	this.setReporting = function ( reporting ) {
		Restriction.prototype.setReporting.call( this, reporting );
		/**
		 * @type {SignalFile}
		 */
		const callable          = this.reporting.input.callable;
		const { max_files = 1 } = callable.settings;

		this.max = max_files;
	};

	this.runOnlyIfRequired = function () {
		return false;
	};

	this.validate = function () {
		const { current } = this.reporting.input.value;

		return current?.length <= this.max;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'max_files' );
	};
}

MaxFilesRestriction.prototype = Object.create( Restriction.prototype );

MaxFilesRestriction.prototype.max = null;

export default MaxFilesRestriction;