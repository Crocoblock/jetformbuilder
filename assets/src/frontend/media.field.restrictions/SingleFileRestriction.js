import { getFileRestrictions } from './functions';
import { escapeHtml } from '../main/html.macro/escapeHtml';

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

	this.invalidRestrictions = [];

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
	for ( const { file, restriction } of this.invalidRestrictions ) {
		const message = restriction.getMessage();

		if ( message?.length ) {
			if ( this.getValue()?.length > 1 ) {
				const format = this.getMessageBySlug( 'file_error_format' ) || '%error_message%';

				return format.replace( /%file_name%|%error_message%/g, macro => (
					'%file_name%' === macro ? escapeHtml( file.name ) : message
				) );
			}

			return message;
		}
	}

	return '';
};

SingleFileRestriction.prototype.setReporting = function ( reporting ) {
	AdvancedRestriction.prototype.setReporting.call( this, reporting );

	this.singleFileRestrictions = getFileRestrictions( reporting );
};

// eslint-disable-next-line max-lines-per-function
SingleFileRestriction.prototype.validatePromise = async function () {
	// Clear the previous failures even when the last file has been removed.
	this.invalidRestrictions = [];

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

	this.invalidRestrictions = results.flatMap( ( { file, rejected } ) => (
		rejected.map( restriction => ( { file, restriction } ) )
	) );

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
