( function( $ ) {

	"use strict";

	const { __ } = wp.i18n;

	var JetFormBuilderFileUpload = {

		init: function() {
			$( document )
				.on( 'change', '.jet-form-builder-file-upload__input', JetFormBuilderFileUpload.processUpload )
				.on( 'click', '.jet-form-builder-file-upload__file-remove', JetFormBuilderFileUpload.deleteUpload );

			$( '.jet-form-builder-file-upload__files' ).sortable( {
				items: '.jet-form-builder-file-upload__file',
				forcePlaceholderSize: true,
			} ).bind( 'sortupdate', JetFormBuilderFileUpload.onSortCallback );
		},

		onSortCallback: function( e, ui ) {
			var $upload     = ui.item.closest( '.jet-form-builder-file-upload' ),
				$files      = $( e.target ),
				$valueInput = $upload.find( '.jet-form-builder-file-upload__value' ),
				args        = $files.data( 'args' ),
				maxFiles    = parseInt( args.max_files, 10 ),
				values      = [];

			if ( 1 === maxFiles || ! args.insert_attachment ) {
				return;
			}

			$files.find( '.jet-form-builder-file-upload__file' ).each( function() {

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

			$valueInput.val( JSON.stringify( values ) ).trigger( 'change.JetFormBuilderMain' );

		},

		deleteUpload: function() {
			var $this   = $( this ),
				$file   = $this.closest( '.jet-form-builder-file-upload__file' ),
				$upload = $this.closest( '.jet-form-builder-file-upload' ),
				$value  = $upload.find( '.jet-form-builder-file-upload__value' ),
				val     = $value.val(),
				fileURL = $file.data( 'file' ),
				fileID  = $file.data( 'id' ),
				$errors = $upload.find( '.jet-form-builder-file-upload__errors' ),
				format  = $file.data( 'format' );

			if ( ! $errors.hasClass( 'is-hidden' ) ) {
				$errors.html( '' ).addClass( 'is-hidden' );
			}

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
						}

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

				if ( ! val[ 0 ] ) {
					val = '';
				}

			} else {
				val = '';
			}

			if ( val ) {
				val = JSON.stringify( val )
			}

			$value.trigger( 'jet-form-builder/on-remove-media-item', [ fileURL, fileID ] );

			$file.remove();
			$value.val( val ).trigger( 'change.JetFormBuilderMain' );

		},

		issetMessage: function( formId, status ) {
			if ( ! window.JetFormBuilderFileUploadConfig.errors[ formId ] ) {
				return false;
			}

			return window.JetFormBuilderFileUploadConfig.errors[ formId ][ status ];
		},

		getMessage: function( formId, status ) {
			const unknown = __( 'Unknown error.', 'jet-form-builder' );
			const message = JetFormBuilderFileUpload.issetMessage( formId, status );

			return message || unknown;
		},

		processUpload: function( event ) {
			const self = JetFormBuilderFileUpload;

			var files   = event.target.files,
				$errors = $( event.target ).closest( '.jet-form-builder-file-upload' ).find( '.jet-form-builder-file-upload__errors' ),
				formId  = +$( event.target ).closest( 'form' ).data( 'form-id' );

			$errors.html( '' ).addClass( 'is-hidden' );

			try {
				self.uploadFiles( files, event.target, formId );
			} catch ( error ) {

				if ( self.issetMessage( formId, error ) ) {
					$errors.html( self.getMessage( formId, error ) ).removeClass( 'is-hidden' );
				} else {
					$errors.html( error ).removeClass( 'is-hidden' );
				}

				event.target.value = '';

			}

		},

		lockButtons: function( $upload ) {

			var $form    = $upload.closest( 'form.jet-form-builder' ),
				$buttons = $form.find( '.jet-form-builder__submit, .jet-form-builder__next-page, .jet-form-builder__prev-page' );

			$buttons.attr( 'disabled', true );

		},

		unlockButtons: function( $upload ) {

			var $form    = $upload.closest( 'form.jet-form-builder' ),
				$buttons = $form.find( '.jet-form-builder__submit, .jet-form-builder__next-page, .jet-form-builder__prev-page' );

			$buttons.attr( 'disabled', false );

		},

		uploadFiles: function( files, input, formId ) {
			const self = JetFormBuilderFileUpload;

			if ( ! files.length ) {
				return;
			}

			var file, formData, formID, field, xhr, limit, allowedTypes, maxSize;
			var $input      = $( input ),
				$upload     = $input.closest( '.jet-form-builder-file-upload' ),
				$valueInput = $upload.find( '.jet-form-builder-file-upload__value' ),
				$errors     = $upload.find( '.jet-form-builder-file-upload__errors' ),
				currentVal  = $valueInput.val();

			limit = input.dataset.max_files || 1;
			limit = parseInt( limit, 10 );

			allowedTypes = input.dataset.allowed_types || false;
			formID = input.dataset.form_id || false;
			field = input.dataset.field || false;
			maxSize = input.dataset.max_size || window.JetFormBuilderFileUploadConfig.max_upload_size;
			maxSize = parseInt( maxSize, 10 );

			if ( currentVal && '' !== currentVal ) {
				currentVal = JSON.parse( currentVal );

				if ( Array.isArray( currentVal ) && currentVal.length && limit < ( files.length + currentVal.length ) ) {
					throw 'upload_max_files';
				}

			}

			if ( limit < files.length ) {
				throw 'upload_max_files';
			}

			formData = new FormData();

			formData.append( 'action', window.JetFormBuilderFileUploadConfig.action );
			formData.append( 'nonce', window.JetFormBuilderFileUploadConfig.nonce );
			formData.append( 'form_id', formID );
			formData.append( 'field', field );

			for ( var i = 0; i < files.length; i++ ) {

				file = files.item( i );

				if ( allowedTypes && 0 > allowedTypes.indexOf( file.type ) ) {
					throw 'upload_mime_types';
				}

				if ( file[ 'size' ] > maxSize ) {
					throw 'upload_mime_types';
				}

				formData.append( 'file_' + i, file );

			}

			xhr = new XMLHttpRequest();

			$upload.addClass( 'is-loading' );
			JetFormBuilderFileUpload.lockButtons( $upload );

			xhr.open( 'POST', window.JetFormBuilderFileUploadConfig.ajaxurl, true );

			xhr.onload = function( e, r ) {

				$upload.removeClass( 'is-loading' );
				JetFormBuilderFileUpload.unlockButtons( $upload );

				if ( xhr.status === 200 ) {
					var response = e.currentTarget.response;

					try {
						response = JSON.parse( response );
					} catch ( e ) {
						$errors.html( self.getMessage( formId, 'internal_error' ) ).removeClass( 'is-hidden' );
						return false;
					}

					if ( ! response.success ) {
						$errors.html( response.data ).removeClass( 'is-hidden' );
						return;
					} else {
						JetFormBuilderFileUpload.updateResults( $upload, response.data );
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

			var $filesContainer = $upload.find( '.jet-form-builder-file-upload__files' ),
				$input          = $upload.find( '.jet-form-builder-file-upload__value' ),
				args            = $filesContainer.data( 'args' ),
				values          = [],
				inputValues     = false,
				limit           = args.max_files || 1;

			limit = parseInt( limit, 10 );

			const oldInputVal = $input.val();

			if ( 1 === limit ) {
				$filesContainer.html( responseData.html );
				$input.val( JSON.stringify( responseData.value ) ).trigger( 'change.JetFormBuilderMain' );
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
				}

				$input.val( JSON.stringify( values ) );

				if ( inputValues ) {
					$input.trigger( 'change.JetFormBuilderMain', [ JSON.parse( inputValues ) ] );
				}

				$filesContainer.append( responseData.html );
				$filesContainer.sortable( 'destroy' );

				$filesContainer.sortable( {
					items: '.jet-form-builder-file-upload__file',
					forcePlaceholderSize: true,
				} ).bind( 'sortupdate', JetFormBuilderFileUpload.onSortCallback );
			}

			$input.trigger( 'jet-form-builder/on-upload-media', [ responseData.value,
				JSON.parse( oldInputVal || '{}' ) ] )
		},

	};

	JetFormBuilderFileUpload.init();

}( jQuery ) );