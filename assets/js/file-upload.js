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
					$upload = $this.closest( '.jet-form-builder-file-upload' ),
					// main input
					fileInput = $upload.find( '.jet-form-builder-file-upload__input[type="file"]' ),
					// hidden input with preset
					$value = $this.siblings( '.jet-form-builder-file-upload__value' );

				let fileValue = $value.val();

				try {
					fileValue = JSON.parse( fileValue );
				} catch ( e ) {
					fileValue = {};
				}

				if ( ! Object.keys( fileValue ).length ) {
					fileValue = JetFormBuilderFileUpload.removeFileFromFileList( fileInput[0], $this.data( 'index' ) );

					$file.trigger( 'change.JetFormBuilderMain' );
				}

				$file.trigger( 'jet-form-builder/on-remove-media-item', [ fileValue ] );

				$file.remove();
			},

			removeFileFromFileList( input, index ) {
				const dt = new DataTransfer();
				const { files } = input;
				let removedFile;

				for ( let i = 0; i < files.length; i ++ ) {
					if ( +index !== i ) {
						dt.items.add( files[ i ] );
					} else {
						removedFile = files[ i ];
					}
				}

				input.files = dt.files; // Assign the updates list

				return removedFile;
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
				const { files } = event.target;

				const wrapper = $( event.target ).closest( '.jet-form-builder-file-upload' ),
					$errors = wrapper.find( '.jet-form-builder-file-upload__errors' ),
					previews = wrapper.find( '.jet-form-builder-file-upload__files' ),
					settings = previews.data( 'args' );

				if ( ! ( settings.max_files > 1 ) ) {
					previews.find( '.jet-form-builder-file-upload__file' ).remove();
				}

				$errors.html( '' ).addClass( 'is-hidden' );

				for ( const [ index, file ] of Object.entries( files ) ) {
					const previewHtml = self.getFilePreview( file, wrapper, index );

					previews.append( $( previewHtml ) );
				}
			},
		};

		$( JetFormBuilderFileUpload.init() );

	}( jQuery )
);