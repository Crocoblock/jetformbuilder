( function( $ ) {

	"use strict";

	var JetEngineFileUpload = {

		init: function() {
			$( document )
				.on( 'change', '.jet-engine-file-upload__input', JetEngineFileUpload.processUpload )
				.on( 'click', '.jet-engine-file-upload__file-remove', JetEngineFileUpload.deleteUpload );

			$( '.jet-engine-file-upload__files' ).sortable({
				items: '.jet-engine-file-upload__file',
				forcePlaceholderSize: true,
			} ).bind( 'sortupdate', JetEngineFileUpload.onSortCallback );
		},

		onSortCallback: function( e, ui ) {
			var $upload = ui.item.closest( '.jet-engine-file-upload' ),
				$files = $( e.target ),
				$valueInput = $upload.find( '.jet-engine-file-upload__value' ),
				args = $files.data( 'args' ),
				maxFiles = parseInt( args.max_files, 10 ),
				values = [];

			if ( 1 === maxFiles || ! args.insert_attachment ) {
				return;
			}

			$files.find( '.jet-engine-file-upload__file' ).each( function() {

				var $file = $( this );

				switch ( args.value_format ) {
					case 'id':
						values.push( $file.data( 'id' ) );
						break;

					case 'both':
						values.push( {
							id: $file.data( 'id' ),
							url: $file.data( 'file' ),
						} );
						break;

					default:
						values.push( $file.data( 'file' ) );
						break;
				}

			} );

			$valueInput.val( JSON.stringify( values ) ).trigger( 'change.JetEngine' );

		},

		deleteUpload: function() {
			var $this   = $( this ),
				$file   = $this.closest( '.jet-engine-file-upload__file' ),
				$upload = $this.closest( '.jet-engine-file-upload' ),
				$value  = $upload.find( '.jet-engine-file-upload__value' ),
				val     = $value.val(),
				fileURL = $file.data( 'file' ),
				fileID  = $file.data( 'id' ),
				$errors = $upload.find( '.jet-engine-file-upload__errors' ),
				format  = $file.data( 'format' );


			if ( ! $errors.hasClass( 'is-hidden' ) ) {
				$errors.html( '' ).addClass( 'is-hidden' );
			}

			$file.remove();

			if ( ! val ) {
				return;
			}

			val = JSON.parse( val );

			if ( fileID ) {
				fileID = parseInt( fileID, 10 );
			}

			if ( val.constructor === Array ) {

				var index = -1;

				switch ( format ) {

					case 'url':
						index = val.indexOf( fileURL );
						break;

					case 'id':

						for ( var i = 0; i < val.length; i++ ) {
							val[ i ] = parseInt( val[ i ], 10 );
						};

						index = val.indexOf( fileID );
						break;

					case 'both':

						for ( var i = 0; i < val.length; i++ ) {
							if ( fileURL === val[ i ].url ) {
								index = i;
							}
						}

						break;
				}

				if ( 0 <= index ) {
					val.splice( index, 1 );
				}

				if ( !val[0] ) {
					val = '';
				}

			} else {
				val = '';
			}

			if ( val ) {
				val = JSON.stringify( val )
			}

			$value.val( val ).trigger( 'change.JetEngine' );

		},

		processUpload: function( event ) {

			var files   = event.target.files,
				$errors = $( event.target ).closest( '.jet-engine-file-upload' ).find( '.jet-engine-file-upload__errors' );

			$errors.html( '' ).addClass( 'is-hidden' );

			try {
				JetEngineFileUpload.uploadFiles( files, event.target );
			} catch ( error ) {

				if ( window.JetEngineFileUploadConfig.errors[ error ] ) {
					$errors.html( window.JetEngineFileUploadConfig.errors[ error ] ).removeClass( 'is-hidden' );
				} else {
					$errors.html( error ).removeClass( 'is-hidden' );
				}

				event.target.value = '';

			}

		},

		lockButtons: function( $upload ) {

			var $form    = $upload.closest( 'form.jet-form' ),
				$buttons = $form.find( '.jet-form-builder__submit, .jet-form__next-page, .jet-form__prev-page' );

			$buttons.attr( 'disabled', true );

		},

		unlockButtons: function( $upload ) {

			var $form    = $upload.closest( 'form.jet-form' ),
				$buttons = $form.find( '.jet-form-builder__submit, .jet-form__next-page, .jet-form__prev-page' );

			$buttons.attr( 'disabled', false );

		},

		uploadFiles: function( files, input ) {

			if ( ! files.length ) {
				return;
			}

			var file, formData, formID, field, xhr, limit, allowedTypes, maxSize;
			var $input      = $( input ),
				$upload     = $input.closest( '.jet-engine-file-upload' ),
				$valueInput = $upload.find( '.jet-engine-file-upload__value' ),
				$errors     = $upload.find( '.jet-engine-file-upload__errors' ),
				currentVal  = $valueInput.val();

			limit = input.dataset.max_files || 1;
			limit = parseInt( limit, 10 );

			allowedTypes = input.dataset.allowed_types || false;
			formID       = input.dataset.form_id || false;
			field        = input.dataset.field || false;
			maxSize      = input.dataset.max_size || window.JetEngineFileUploadConfig.max_upload_size;
			maxSize      = parseInt( maxSize, 10 );

			if ( currentVal && '' !== currentVal ) {
				currentVal = JSON.parse( currentVal );

				if ( Array.isArray( currentVal ) && currentVal.length && limit < ( files.length + currentVal.length ) ) {
					throw 'upload_limit';
				}

			}

			if ( limit < files.length ) {
				throw 'upload_limit';
			}

			formData = new FormData();

			formData.append( 'action', window.JetEngineFileUploadConfig.action );
			formData.append( 'nonce', window.JetEngineFileUploadConfig.nonce );
			formData.append( 'form_id', formID );
			formData.append( 'field', field );

			for ( var i = 0; i < files.length; i++ ) {

				file = files.item( i );

				if ( allowedTypes && 0 > allowedTypes.indexOf( file.type ) ) {
					throw 'file_type';
				}

				if ( file['size'] > maxSize ) {
					throw 'file_size';
				}

				formData.append( 'file_' + i, file );

			}

			xhr = new XMLHttpRequest();

			$upload.addClass( 'is-loading' );
			JetEngineFileUpload.lockButtons( $upload );

			xhr.open( 'POST', window.JetEngineFileUploadConfig.ajaxurl, true );

			xhr.onload = function( e, r ) {

				$upload.removeClass( 'is-loading' );
				JetEngineFileUpload.unlockButtons( $upload );

				if ( xhr.status == 200 ) {
					var response = e.currentTarget.response;

					try {
						response = JSON.parse( response );
					} catch ( e ) {
						$errors.html( window.JetEngineFileUploadConfig.errors.internal ).removeClass( 'is-hidden' );
						return false;
					}

					if ( ! response.success ) {
						$errors.html( response.data ).removeClass( 'is-hidden' );
						return;
					} else {
						JetEngineFileUpload.updateResults( $upload, response.data );
						if ( response.data.errors ) {
							$errors.html( response.data.errors ).removeClass( 'is-hidden' );
						} else {
							$errors.html( '' ).addClass( 'is-hidden' );
						}
					}

				} else {
					$errors.html( xhr.status ).removeClass( 'is-hidden' );
				}

			};

			xhr.send( formData );

			input.value = '';

		},

		updateResults: function( $upload, responseData ) {

			var $filesContainer = $upload.find( '.jet-engine-file-upload__files' ),
				$input          = $upload.find( '.jet-engine-file-upload__value' ),
				args            = $filesContainer.data( 'args' ),
				values          = [],
				inputValues     = false,
				limit           = args.max_files || 1;

			limit = parseInt( limit, 10 );

			if ( 1 === limit ) {
				$filesContainer.html( responseData.html );
				$input.val( JSON.stringify( responseData.value ) ).trigger( 'change.JetEngine' );
			} else {

				inputValues = $input.val();

				if ( inputValues ) {
					values = JSON.parse( inputValues );
					if ( ! values ) {
						values = [];
					}
				}

				for ( var i = 0; i < responseData.value.length; i++ ) {
					values.push( responseData.value[ i ] );
				};

				$input.val( JSON.stringify( values ) ).trigger( 'change.JetEngine' );

				$filesContainer.append( responseData.html );
				$filesContainer.sortable( 'destroy' );

				$filesContainer.sortable( {
					items: '.jet-engine-file-upload__file',
					forcePlaceholderSize: true,
				} ).bind( 'sortupdate', JetEngineFileUpload.onSortCallback );
			}

		}

	};

	JetEngineFileUpload.init();

}( jQuery ) );