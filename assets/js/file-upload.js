(
	function ( $ ) {

		'use strict';

		var JetFormBuilderFileUpload = {

			init: function () {
				$( document ).on( 'change', '.jet-form-builder-file-upload__input', JetFormBuilderFileUpload.processUpload ).on( 'click', '.jet-form-builder-file-upload__file-remove', JetFormBuilderFileUpload.deleteUpload );

				$( '.jet-form-builder-file-upload__files' ).sortable( {
					items: '.jet-form-builder-file-upload__file',
					forcePlaceholderSize: true,
				} ).bind( 'sortupdate', JetFormBuilderFileUpload.onSortCallback );
			},

			onSortCallback: function ( e, ui ) {
				var $upload = ui.item.closest( '.jet-form-builder-file-upload' ),
					$files = $( e.target ),
					$valueInput = $upload.find( '.jet-form-builder-file-upload__value' ),
					args = $files.data( 'args' ),
					maxFiles = parseInt( args.max_files, 10 ),
					values = [];

				if ( 1 === maxFiles || ! args.insert_attachment ) {
					return;
				}

				$files.find( '.jet-form-builder-file-upload__file' ).each( function () {

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

			deleteUpload: function () {
				const $this = $( this ),
					$file = $this.closest( '.jet-form-builder-file-upload__file' ),
					$upload = $this.closest( '.jet-form-builder-file-upload' );

				const $value = $this.siblings( '.jet-form-builder-file-upload__value' );
				let fileValue = $value.val();

				if ( ! fileValue ) {
					const fileInput = $upload.find( '.jet-form-builder-file-upload__input[type="file"]' );
					JetFormBuilderFileUpload.removeFileFromFileList( fileInput[0], $this.data( 'index' ) );
				}

				//$value.trigger( 'jet-form-builder/on-remove-media-item', [ fileValue ] );

				$file.remove();
				//$value.val( val ).trigger( 'change.JetFormBuilderMain' );
			},

			removeFileFromFileList( input, index ) {
				const dt = new DataTransfer();
				const { files } = input;

				for ( let i = 0; i < files.length; i ++ ) {
					if ( +index !== i ) {
						dt.items.add( files[ i ] );
					}
				}

				input.files = dt.files; // Assign the updates list
			},

			issetMessage: function ( formId, status ) {
				if ( ! window.JetFormBuilderFileUploadConfig.errors[ formId ] ) {
					return false;
				}

				return window.JetFormBuilderFileUploadConfig.errors[ formId ][ status ];
			},

			getMessage: function ( formId, status ) {
				const { __ } = wp.i18n;
				const unknown = __( 'Unknown error.', 'jet-form-builder' );
				const message = JetFormBuilderFileUpload.issetMessage( formId, status );

				return message || unknown;
			},

			getFilePreview: function ( file, fileWrapper, index ) {
				const url = URL.createObjectURL( file );
				let template = fileWrapper.closest( '.field-type-media-field' ).find( '.jet-form-builder__preview-template' ).html();

				template = template.replace( '%file_url%', url );
				template = template.replace( '%file_index%', +index );

				if ( /^image\//.test( file.type ) ) {
					template = template.replace( '<!-- preview -->', `<img src="${ url }" alt="${ file.name }">` );
				}

				return template;
			},

			processUpload: function ( event ) {
				const self = JetFormBuilderFileUpload;

				const wrapper = $( event.target ).closest( '.jet-form-builder-file-upload' ),
					files = event.target.files,
					$errors = wrapper.find( '.jet-form-builder-file-upload__errors' ),
					formId = + wrapper.closest( 'form' ).data( 'form-id' ),
					previews = wrapper.find( '.jet-form-builder-file-upload__files' );

				$errors.html( '' ).addClass( 'is-hidden' );

				for ( const [ index, file ] of Object.entries( files ) ) {
					const previewHtml = self.getFilePreview( file, wrapper, index );

					previews.append( $( previewHtml ) );
				}

				/*try {
				 self.uploadFiles( files, event.target, formId );
				 } catch ( error ) {

				 if ( self.issetMessage( formId, error ) ) {
				 $errors.html( self.getMessage( formId, error ) ).removeClass( 'is-hidden' );
				 } else {
				 $errors.html( error ).removeClass( 'is-hidden' );
				 }

				 event.target.value = '';

				 }*/

			},

			lockButtons: function ( $upload ) {

				var $form = $upload.closest( 'form.jet-form-builder' ),
					$buttons = $form.find( '.jet-form-builder__submit, .jet-form-builder__next-page, .jet-form-builder__prev-page' );

				$buttons.attr( 'disabled', true );

			},

			unlockButtons: function ( $upload ) {

				var $form = $upload.closest( 'form.jet-form-builder' ),
					$buttons = $form.find( '.jet-form-builder__submit, .jet-form-builder__next-page, .jet-form-builder__prev-page' );

				$buttons.attr( 'disabled', false );

			},

			uploadFiles: function ( files, input, formId ) {
				const self = JetFormBuilderFileUpload;

				if ( ! files.length ) {
					return;
				}

				var file, formData, formID, field, xhr, limit, allowedTypes, maxSize;
				var $input = $( input ),
					$upload = $input.closest( '.jet-form-builder-file-upload' ),
					$valueInput = $upload.find( '.jet-form-builder-file-upload__value' ),
					$errors = $upload.find( '.jet-form-builder-file-upload__errors' ),
					currentVal = $valueInput.val();

				limit = input.dataset.max_files || 1;
				limit = parseInt( limit, 10 );

				allowedTypes = input.dataset.allowed_types || false;
				formID = input.dataset.form_id || false;
				field = input.dataset.field || false;
				maxSize = input.dataset.max_size || window.JetFormBuilderFileUploadConfig.max_upload_size;
				maxSize = parseInt( maxSize, 10 );

				if ( currentVal && '' !== currentVal ) {
					currentVal = JSON.parse( currentVal );

					if ( Array.isArray( currentVal ) && currentVal.length && limit < (
						files.length + currentVal.length
					) ) {
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

				for ( var i = 0; i < files.length; i ++ ) {

					file = files.item( i );

					if ( allowedTypes && 0 > allowedTypes.indexOf( file.type ) ) {
						throw 'upload_mime_types';
					}

					if ( file[ 'size' ] > maxSize ) {
						throw 'upload_max_size';
					}

					formData.append( 'file_' + i, file );

				}

				xhr = new XMLHttpRequest();

				$upload.addClass( 'is-loading' );
				JetFormBuilderFileUpload.lockButtons( $upload );

				xhr.open( 'POST', window.JetFormBuilderFileUploadConfig.ajaxurl, true );

				xhr.onload = function ( e, r ) {

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

			updateResults: function ( $upload, responseData ) {

				var $filesContainer = $upload.find( '.jet-form-builder-file-upload__files' ),
					$input = $upload.find( '.jet-form-builder-file-upload__value' ),
					args = $filesContainer.data( 'args' ),
					values = [],
					inputValues = false,
					limit = args.max_files || 1;

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

					for ( var i = 0; i < responseData.value.length; i ++ ) {
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

				$input.trigger( 'jet-form-builder/on-upload-media', [
					responseData.value,
					JSON.parse( oldInputVal || '{}' ),
				] );
			},

		};

		$( JetFormBuilderFileUpload.init() );

	}( jQuery )
);