import { getFileRestrictions } from './functions';

const {
	      allRejected,
      } = JetFormBuilderFunctions;
const {
	      AdvancedRestriction,
      } = JetFormBuilderAbstract;

/**
 * This restriction used for implement file-specific
 * restrictions for each single file
 *
 * @class
 */
function SingleFileRestriction() {
	AdvancedRestriction.call( this );

	this.invalidRestriction = null;

	this.isSupported = function ( node ) {
		return (
			'file' === node?.type
		);
	};

	this.getRawMessage = function () {
		return '';
	};
}

SingleFileRestriction.prototype = Object.create(
	AdvancedRestriction.prototype );

/**
 * @type {BaseFileRestriction[]}
 */
SingleFileRestriction.prototype.singleFileRestrictions = [];

SingleFileRestriction.prototype.getMessage = function () {
	// Macro values can change while reporting reuses the cached validation error.
	return this.invalidRestriction?.getMessage() ?? '';
};

SingleFileRestriction.prototype.setReporting = function ( reporting ) {
	AdvancedRestriction.prototype.setReporting.call( this, reporting );

	this.singleFileRestrictions = getFileRestrictions( reporting );
};

// eslint-disable-next-line max-lines-per-function
SingleFileRestriction.prototype.validatePromise = async function () {
	// Clear the previous failure even when the last file has been removed.
	this.invalidRestriction = null;

	/**
	 * @type {SignalFile}
	 */
	const callable = this.reporting.input.callable;

	const current = Array.from( this.reporting.input.value?.current ?? [] );

	const fieldCallbacks = [];

	for ( const currentFile of current ) {
		if ( !(
			currentFile instanceof File
		) ) {
			continue;
		}
		const fileCallbacks = this.singleFileRestrictions.map(
			item => ( resolve, reject ) => {
				item.setFile( currentFile );

				item.validatePromise().then( resolve ).catch(
					() => reject( item ),
				);
			},
		);

		fieldCallbacks.push( ( resolve, reject ) => {
			const onValidate = values => {
				const rejected = values.filter(
					( { status } ) => 'rejected' === status,
				).map( ( { reason, value } ) => (
					reason ?? value
				) );

				if ( rejected.length ) {
					reject( {
						file: currentFile,
						rejected,
					} );
				}
				else {
					resolve();
				}
			};

			Promise.allSettled(
				fileCallbacks.map( call => new Promise( call ) ),
			).then( onValidate );
		} );
	}

	if ( !fieldCallbacks?.length ) {
		return Promise.resolve();
	}

	const results = await allRejected( fieldCallbacks );

	this.invalidRestriction = results[ 0 ]?.rejected[ 0 ] ?? null;

	for ( const fileCurrent of current ) {
		const fileNode = callable.getFileNode( fileCurrent.name );

		const marker = fileNode.querySelector(
			'.jet-form-builder-file-upload__file-invalid-marker',
		);

		/**
		 * @type {{ file, rejected }}
		 */
		const [ invalidPart = {} ] = results.filter(
			( { file } ) => file === fileCurrent,
		);

		marker.style.display = invalidPart?.rejected?.length
		                       ? 'block'
		                       : 'none';

		marker.title = invalidPart?.rejected?.length
		               ? invalidPart?.rejected[ 0 ].getMessage()
		               : '';

	}

	return Boolean( results.length )
	       ? Promise.reject( 'validate is wrong' )
	       : Promise.resolve();
};

export default SingleFileRestriction;
