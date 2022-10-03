import Restriction from '../restrictions/Restriction';
import { getFileRestrictions } from './functions';

const {
	      allRejected,
      } = JetFormBuilderFunctions;

function SingleFileRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return (
			'file' === node?.type
		);
	};

	this.runOnlyIfRequired = function () {
		return false;
	};

	this.getRawMessage = function () {
		return '';
	};
}

SingleFileRestriction.prototype = Object.create( Restriction.prototype );

/**
 * @type {BaseFileRestriction[]}
 */
SingleFileRestriction.prototype.singleFileRestrictions = [];

SingleFileRestriction.prototype.setReporting = function ( reporting ) {
	Restriction.prototype.setReporting.call( this, reporting );

	this.singleFileRestrictions = getFileRestrictions( reporting );
};

SingleFileRestriction.prototype.validatePromise = async function () {
	/**
	 * @type {SignalFile}
	 */
	const callable = this.reporting.input.callable;

	const current = Array.from( this.reporting.input.value.current );

	const fieldCallbacks = [];

	for ( const currentFile of current ) {
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

	const results = await allRejected( fieldCallbacks );

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