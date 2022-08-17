(
	function ( $ ) {

		'use strict';

		const createFileList = ( inputFileArray ) => {
			const transfer = new DataTransfer();

			for ( const file of inputFileArray ) {
				transfer.items.add( file );
			}

			return transfer.files;
		};

		const convertFields = scope => {
			scope.find( '.jet-form-builder-file-upload' ).each( function () {
				const wrapper = $( this );
				const input   = wrapper.find(
					'.jet-form-builder-file-upload__input' );

				const files = wrapper.find(
					'.jet-form-builder-file-upload__file' );
				const urls  = [];

				for ( const preview of files ) {
					const url        = $( preview ).data( 'file' );
					const removeNode = $( preview ).find(
						'.jet-form-builder-file-upload__file-remove',
					);

					urls.push( [ url, removeNode.data( 'file-name' ) ] );
				}

				if ( !urls.length ) {
					return;
				}

				Promise.allSettled( urls.map( ( [ url, fileName ] ) => (
					new Promise( ( resolve, reject ) => {
						fetch( url ).then(
							response => response.blob(),
						).then(
							blob => resolve(
								new File( [ blob ], fileName, blob ),
							),
						).catch( reject );
					} )
				) ) ).then( values => {
					const files = values.map( ( { value } ) => value );

					addFileToInput( input[ 0 ], files );
					input.trigger( 'change.JetFormBuilderMain' );
				} );
			} );
		};

		const addFileToInput = ( input, newFiles ) => {
			input.files        = createFileList( [ ...newFiles ] );
			input.jfbPrevFiles = createFileList( [ ...input.files ] );
		};

		var JetFormBuilderFileUpload = {

			init: function ( event, scope ) {
				$( '.jet-form-builder-file-upload__files', scope ).
					sortable( {
						items: '.jet-form-builder-file-upload__file',
						forcePlaceholderSize: true,
					} ).
					bind( 'sortupdate',
						JetFormBuilderFileUpload.onSortCallback );

				convertFields( scope );
			},

			onSortCallback: function ( e, ui ) {
				const transfer  = new DataTransfer();
				const field     = $( e.target ).
					closest( '.jet-form-builder-file-upload' );
				const input     = field.find(
					'.jet-form-builder-file-upload__input' );
				const { files } = input[ 0 ];

				$( e.target ).
					find( '.jet-form-builder-file-upload__file-remove' ).
					each( function () {
						const name = $( this ).data( 'file-name' );

						for ( const file of files ) {
							if ( file.name !== name ) {
								continue;
							}

							transfer.items.add( file );
						}

					} );

				input[ 0 ].files = transfer.files;
			},

			deleteUpload: function () {
				const action = new DeleteAction( this );

				action.remove();
				action.showErrors();
			},

			issetMessage: function ( formId, status ) {
				if ( !window.JetFormBuilderFileUploadConfig.errors[ formId ] ) {
					return false;
				}

				return window.JetFormBuilderFileUploadConfig.errors[ formId ][ status ];
			},

			getMessage: function ( formId, status ) {
				const { __ }  = wp.i18n;
				const unknown = __( 'Unknown error.', 'jet-form-builder' );
				const message = JetFormBuilderFileUpload.issetMessage( formId,
					status );

				return message || unknown;
			},

			processUpload: function ( event ) {
				const upload = new UploadAction( event );

				upload.loadFiles();
				upload.removeSingle();
				upload.insertPreviews();
				upload.sortable();

				upload.showErrors();
			},
		};

		class ChangeFiles {
			constructor( event ) {
				this.uploadEl   = $( event.target ?? event ).
					closest( '.jet-form-builder-file-upload' );
				this.errorsEl   = this.uploadEl.find(
					'.jet-form-builder-file-upload__errors' );
				this.previewsEl = this.uploadEl.find(
					'.jet-form-builder-file-upload__files' );
				this.settings   = this.previewsEl.data( 'args' );
				this.fields     = this.getFields();
				this.input      = this.getFields().find( 'input[type="file"]' );
				this.hasError   = false;
			}

			removeSingle() {
				if ( this.isSingle() ) {
					this.getPreview().remove();
				}
			}

			showErrors() {
				this.input.removeClass( 'field-has-error' );
				this.fields.find( '.error-message' ).remove();

				if ( this.getPreview()?.length > this.settings.max_files ) {
					this.input.addClass( 'field-has-error' );
					this.fields.append(
						$( `<div class="error-message">${ this.getMessage(
							'upload_max_files' ) }</div>` ),
					);

					return;
				}

				if ( this.hasError ) {
					this.input.addClass( 'field-has-error' );
					this.fields.append(
						$( `<div class="error-message">${ this.getMessage(
							this.hasError ) }</div>` ),
					);
				}
			}

			getPreview() {
				return this.previewsEl.find(
					'.jet-form-builder-file-upload__file' );
			}

			getFields() {
				return this.uploadEl.find(
					'.jet-form-builder-file-upload__fields' );
			}

			getFormId() {
				return this.uploadEl.closest( 'form.jet-form-builder' ).
					data( 'form-id' );
			}

			getMessage( status ) {
				return JetFormBuilderFileUpload.getMessage( this.getFormId(),
					status );
			}

			isSingle() {
				return (
					!this.settings?.max_files || this.settings.max_files <= 1
				);
			}
		}

		class UploadAction extends ChangeFiles {
			constructor( event ) {
				super( event );

				this.template = this.getTemplate();
			}

			loadFiles() {
				const originalInput = this.input[ 0 ];
				const { files }     = originalInput;

				this.files = createFileList( [ ...files ] );

				if ( this.isSingle() ) {
					return;
				}

				if ( !originalInput.jfbPrevFiles?.length ) {
					originalInput.jfbPrevFiles = createFileList( [ ...files ] );

					return;
				}

				originalInput.jfbPrevFiles = createFileList( [
					...originalInput.jfbPrevFiles,
					...this.files,
				] );

				originalInput.files = createFileList( [
					...originalInput.jfbPrevFiles,
				] );
			}

			insertPreviews() {
				this.errorsEl.html( '' ).addClass( 'is-hidden' );

				const previewElements = [];

				for ( const file of this.files ) {
					const url     = URL.createObjectURL( file );
					const current = this.getFilePreview( url, file );

					try {
						this.validateImage( file, current );
					}
					catch ( error ) {
						this.hasError = error;
						current.find(
							'.jet-form-builder-file-upload__file-invalid-marker' ).
							show();
					}

					previewElements.push( current );
				}

				this.previewsEl.append( previewElements );
			}

			sortable() {
				this.previewsEl.sortable( {
					items: '.jet-form-builder-file-upload__file',
					forcePlaceholderSize: true,
				} ).
					bind( 'sortupdate',
						JetFormBuilderFileUpload.onSortCallback );
			}

			validateImage( file, current ) {
				if ( file.size > this.settings.max_size ) {
					throw 'upload_max_size';
				}
			}

			getFilePreview( url, file ) {
				let template = this.template.replace( '%file_url%', url );
				template     = $(
					template.replace( '%file_name%', file.name ) );

				if ( /^image\//.test( file.type ) ) {
					template.prepend(
						$( `<img src="${ url }" alt="${ file.name }">` ) );
				}

				return template;
			}

			getTemplate() {
				return this.uploadEl.closest( '.field-type-media-field' ).
					find( '.jet-form-builder__preview-template' ).
					html();
			}
		}

		class DeleteAction extends ChangeFiles {
			constructor( event ) {
				super( event );

				this.self      = $( event );
				this.previewEl = this.self.closest(
					'.jet-form-builder-file-upload__file' );
				this.name      = this.self.data( 'file-name' );
			}

			remove() {
				const fieldValue = this.removeFileFromFileList();
				this.input.trigger( 'change.JetFormBuilderMain' );

				this.previewEl.trigger( 'jet-form-builder/on-remove-media-item',
					[ fieldValue ] );
				this.previewEl.remove();
			}

			removeFileFromFileList() {
				const dt            = new DataTransfer();
				const originalInput = this.input[ 0 ];

				const { files } = originalInput;
				let removedFile;

				for ( const file of files ) {
					if ( this.name !== file.name ) {
						dt.items.add( file );
					}
					else {
						removedFile = file;
					}
				}

				originalInput.files = dt.files;

				if ( !dt.files.length ) {
					delete originalInput.jfbPrevFiles;

					return removedFile;
				}

				originalInput.jfbPrevFiles = createFileList( [
					...originalInput.files,
				] );

				return removedFile;
			}
		}

		$( document ).
			on( 'jet-form-builder/init', JetFormBuilderFileUpload.init ).
			on( 'change', '.jet-form-builder-file-upload__input',
				JetFormBuilderFileUpload.processUpload ).
			on( 'click', '.jet-form-builder-file-upload__file-remove',
				JetFormBuilderFileUpload.deleteUpload );

	}( jQuery )
);