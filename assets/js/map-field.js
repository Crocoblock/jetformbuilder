(
	function ( $, JetMapFieldsSettings ) {

		'use strict';

		let provider = false;

		function textToNode( text ) {
			const template = document.createElement( 'template' );
			template.innerHTML = text.trim();

			return template.content;
		}

		function getConvertedName( name, prefix ) {
			const regExp = /^(\w+\[\d+\])\[([\w\-]+)\]$/;

			// fields inside repeater (rep_name[1][content_field])
			if ( ! regExp.test( name )) {
				return name + prefix;
			}
			const matches = name.match( regExp );

			return matches[ 1 ] + `[${ matches[2] + prefix }]`;
		}


		const initMapField = currentField => {
			const observer = new IntersectionObserver( ( entries, observer ) => {

				entries.forEach( function ( entry ) {
					if ( ! entry.isIntersecting ) {
						return;
					}

					new MapField( currentField );

					// Detach observer after the first render the map
					observer.unobserve( entry.target );
				} );
			} );

			observer.observe( currentField );
		};


		function MapFieldsManager( event, scope ) {
			const [ form ] = scope;

			if ( false === provider ) {
				provider = new window.JetEngineMapsProvider();
			}

			for ( const mapField of form.querySelectorAll( '.jet-fb-map-field' ) ) {
				initMapField( mapField );
			}
		}

		class MapField {

			constructor( nodeMap ) {

				this.setup( nodeMap );

				this.render();
				this.events();
			}

			setup( selector ) {
				this.$container = selector;
				this.$input = selector.querySelector( 'input[name]' );
				this.repeaterRow = this.$input.closest( '.jet-form-builder-repeater__row' );

				this.fieldSettings = {
					height: '300',
					format: 'location_string',
					field_prefix: false,
					...JSON.parse( this.$input.dataset.settings ),
				};

				this.$inputHash = this.$container.querySelector( this.getConvertedName( '_hash' ) );
				this.$inputLat = this.$container.querySelector( this.getConvertedName( '_lat' ) );
				this.$inputLng = this.$container.querySelector( this.getConvertedName( '_lng' ) );

				// Map props.
				this.map = null;
				this.mapDefaults = {
					center: { lat: 41, lng: 71 },
					zoom: 1,
				};
				this.marker = null;
				this.markerDefaults = {
					content: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#C92C2C"/></svg>',
					shadow: false,
				};
			}

			render() {
				let template = '<div class="jet-engine-map-field__preview" style="display: none; justify-content: space-between; padding: 0 0 5px; align-items: center;">' +
				               '<address class="jet-engine-map-field__position"></address>' +
				               '<div class="jet-engine-map-field__reset" role="button" style="cursor: pointer; color: #c92c2c; font-weight: 500; flex-shrink: 0;">× ' + JetMapFieldsSettings.i18n.resetBtn + '</div>' +
				               '</div>' +
				               '<div class="jet-engine-map-field__frame" style="height: ' + this.fieldSettings.height + 'px; width: 100%;"></div>';

				if ( this.repeaterRow ) {
					template += '<div class="jet-engine-map-field__description">' +
					            '<p style="margin-bottom: 0;"><strong>' + JetMapFieldsSettings.i18n.descTitle + ':</strong> <i>' + this.fieldSettings.field_prefix + '_lat, ' + this.fieldSettings.field_prefix + '_lng</i></p>' +
					            '</div>';
				}

				this.$container.append( textToNode( template ) );

				this.$preview = this.$container.querySelector( '.jet-engine-map-field__preview' );
				this.$position = this.$container.querySelector( '.jet-engine-map-field__position' );
				this.$mapFrame = this.$container.querySelector( '.jet-engine-map-field__frame' );

				let defaultPos,
					valueFormat = false;

				if ( this.$input.value ) {
					// Set preview from input value.
					try {
						// `location_array` value format
						const jsonValue = JSON.parse( this.$input.value );

						defaultPos = jsonValue;
						this.setPreview( jsonValue );

						valueFormat = 'location_array';

					} catch ( e ) {

						const valueParts = this.$input.value.split( ',' );

						if ( 2 === valueParts.length && Number( valueParts[ 0 ] ) && Number( valueParts[ 1 ] ) ) {
							// `location_string` value format
							defaultPos = { lat: Number( valueParts[ 0 ] ), lng: Number( valueParts[ 1 ] ) };
							this.setPreview( defaultPos );

							valueFormat = 'location_string';

						} else {
							// `location_address` value format
							defaultPos = this.getPositionFromHashFields();
							this.setPreview( this.$input.value );

							valueFormat = 'location_address';
						}
					}

					// Convert value format
					if ( valueFormat !== this.fieldSettings.format ) {
						this.setValue( defaultPos );
					}
				}

				if ( defaultPos ) {
					this.mapDefaults.center = defaultPos;
					this.mapDefaults.zoom = 14;
				}

				this.map = provider.initMap( this.$mapFrame, this.mapDefaults );

				if ( defaultPos ) {
					this.marker = provider.addMarker( {
						...this.markerDefaults,
						position: defaultPos,
						map: this.map,
					} );
				}

				provider.markerOnClick( this.map, this.markerDefaults, ( marker ) => {

					if ( this.marker ) {
						provider.removeMarker( this.marker );
					}

					this.marker = marker;

					let position = provider.getMarkerPosition( marker, true );

					this.setValue( position );
				} );
			}

			setValue( position ) {

				let self = this,
					location = '';

				this.setPreview( JetMapFieldsSettings.i18n.loading );

				switch ( this.fieldSettings.format ) {
					case 'location_string':

						location = position.lat + ',' + position.lng;

						this.updateHashFieldPromise( location ).then( function () {
							self.$input.value = location;
							self.setPreview( position );
							$( self.$input ).trigger( 'change.JetFormBuilderMain' );
						} );

						break;

					case 'location_array':

						location = JSON.stringify( position );

						this.updateHashFieldPromise( location ).then( function () {
							self.$input.value = location;
							self.setPreview( position );
							$( self.$input ).trigger( 'change.JetFormBuilderMain' );
						} );

						break;

					case 'location_address':

						wp.apiFetch( {
							method: 'get',
							path: JetMapFieldsSettings.api + '?lat=' + position.lat + '&lng=' + position.lng,
							headers: {
								'nonce': JetMapFieldsSettings.nonce,
							},
						} ).then( function ( response ) {

							if ( response.success ) {

								if ( response.data ) {

									self.updateHashFieldPromise( response.data ).then( function () {
										self.$input.value = response.data;
										self.setPreview( response.data );
									} );

								} else {
									self.$input.value = null;
									self.setPreview( JetMapFieldsSettings.i18n.notFound );
								}

							} else {
								self.$input.value = null;
								self.setPreview( response.html );
							}

							$( self.$input ).trigger( 'change.JetFormBuilderMain' );

						} ).catch( function ( e ) {
							console.log( e );
						} );

						break;
				}

				if ( this.$inputLat && this.$inputLng ) {
					this.$inputLat.value = position.lat;
					this.$inputLng.value = position.lng;
				}
			}

			setPreview( position ) {
				let positionText;

				if ( position && position.lat && position.lng ) {
					positionText = '<span title="Lat">' + position.lat + '</span>, <span title="Lng">' + position.lng + '</span>';
				} else {
					positionText = position;
				}

				this.$position.innerHTML = positionText;
				this.$preview.style.display = position ? 'flex' : 'none';
			}

			events() {
				const resetBtn = this.$container.querySelector( '.jet-engine-map-field__reset' );

				resetBtn.addEventListener( 'click', this.resetLocation.bind( this ) );
			}

			resetLocation() {
				provider.removeMarker( this.marker );
				this.setPreview( null );
				this.$input.value = null;

				if ( this.$inputLat && this.$inputLng ) {
					this.$inputLat.value = null;
					this.$inputLng.value = null;
				}

				$( this.$input ).trigger( 'change.JetFormBuilderMain' );
			}

			updateHashFieldPromise( location ) {
				if ( ! this.$inputHash ) {
					return new Promise( function ( resolve ) {
						resolve();
					} );
				}

				return wp.apiFetch( {
					method: 'get',
					path: JetMapFieldsSettings.apiHash + '?loc=' + location,
					headers: {
						'nonce': JetMapFieldsSettings.nonce,
					},
				} ).then( response => {

					if ( response.success ) {
						this.$inputHash.value = response.data;
					}

				} ).catch( function ( e ) {
					console.log( e );
				} );
			}

			getPositionFromHashFields() {

				if ( ! this.$inputLat || ! this.$inputLng ) {
					return false;
				}

				const lat = this.$inputLat.value,
					lng = this.$inputLng.value;

				if ( ! lat || ! lng ) {
					return false;
				}

				return { lat: Number( lat ), lng: Number( lng ) };
			}

			getConvertedName( prefix ) {
				return `[name="${ getConvertedName( this.$input.name, prefix ) }"]`
			}

		}

		// Run on each form ready.
		$( document ).on( 'jet-form-builder/init', MapFieldsManager );
		$( document ).on(
			'jet-form-builder/repeater-add-new',
			'.jet-form-builder-repeater__new',
			( { target } ) => {
				const repeater = target.closest( '.jet-form-builder-repeater' ),
					rows = repeater.querySelector( '.jet-form-builder-repeater__items' );

				MapFieldsManager( null, [ rows.lastElementChild ] );
			},
		);
	}
)( jQuery, window.JetMapFieldsSettings );