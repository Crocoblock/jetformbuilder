( function( $ ) {

	"use strict";

	var JetFormBuilderMain = {

		currentMonth: null,
		currentRequest: {},
		stores: {},
		registeredStores: {},
		activeCalendarDay: null,
		lazyLoading: false,

		init: function() {

			var widgets = {
				'jet-listing-dynamic-field.default' : JetFormBuilderMain.widgetDynamicField,
				'jet-listing-grid.default': JetFormBuilderMain.widgetListingGrid,
			};

			$.each( widgets, function( widget, callback ) {
				window.elementorFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});

			$( document )
				.on( 'click.JetFormBuilderMain', '.jet-calendar-nav__link', JetFormBuilderMain.switchCalendarMonth )
				.on( 'click.JetFormBuilderMain', '.jet-calendar-week__day-mobile-overlay', JetFormBuilderMain.showCalendarEvent )
				.on( 'click.JetFormBuilderMain', '.jet-listing-dynamic-link__link[data-delete-link="1"]', JetFormBuilderMain.showConfirmDeleteDialog )
				.on( 'jet-filter-content-rendered', JetFormBuilderMain.maybeReinitSlider )
				.on( 'click.JetFormBuilderMain', '.jet-add-to-store', JetFormBuilderMain.addToStore )
				.on( 'click.JetFormBuilderMain', '.jet-remove-from-store', JetFormBuilderMain.removeFromStore )
				.on( 'click.JetFormBuilderMain', '.jet-engine-listing-overlay-wrap', JetFormBuilderMain.handleListingItemClick );

			$( window ).on( 'jet-popup/render-content/ajax/success', JetFormBuilderMain.initStores );

			JetFormBuilderMain.initStores();

			window.elementorFrontend.hooks.addFilter(
				'jet-popup/widget-extensions/popup-data',
				JetFormBuilderMain.prepareJetPopup
			);

			JetFormBuilderMain.customUrlActions.init();

		},

		initStores: function() {

			$( '.jet-add-to-store.is-front-store' ).each( function() {

				var $this = $( this ),
					args  = $this.data( 'args' ),
					store = JetFormBuilderMain.stores[ args.store.type ],
					count = 0;

				if ( ! store ) {
					return;
				}

				if ( store.inStore( args.store.slug, '' + args.post_id ) ) {
					JetFormBuilderMain.switchDataStoreStatus( $this );
				}

			} );

			$( '.jet-remove-from-store.is-front-store' ).each( function() {

				var $this = $( this ),
					args  = $this.data( 'args' ),
					store = JetFormBuilderMain.stores[ args.store.type ],
					count = 0;

				if ( ! store ) {
					return;
				}

				if ( ! store.inStore( args.store.slug, '' + args.post_id ) ) {
					$this.addClass( 'is-hidden' );
				} else {
					$this.removeClass( 'is-hidden' );
				}

			} );

			$.each( JetFormBuilderMain.registeredStores, function( storeSlug, storeType ) {

				var store = JetFormBuilderMain.stores[ storeType ],
					storeData = null,
					count = 0;

				if ( ! store ) {
					return;
				}

				storeData = store.getStore( storeSlug );

				if ( storeData && storeData.length ) {
					count = storeData.length;
				}

				$( 'span.jet-engine-data-store-count[data-store="' + storeSlug + '"]' ).text( count );

			} );

			$( '.jet-listing-not-found.jet-listing-grid__items' ).each( function() {

				var $this   = $( this ),
					nav     = $this.data( 'nav' ),
					isStore = $this.data( 'is-store-listing' ),
					query   = nav.query;

				if ( query.post__in && query.post__in.length && 0 >= query.post__in.indexOf( 'is-front' ) ) {

					var storeType  = query.post__in[1],
						storeSlug  = query.post__in[2],
						store      = JetFormBuilderMain.stores[ storeType ],
						posts      = [],
						$container = $this.closest( '.elementor-widget-container' );

					if ( ! store ) {
						return;
					}

					posts = store.getStore( storeSlug );

					if ( ! posts.length ) {
						return;
					}

					query.post__in = posts;

					JetFormBuilderMain.ajaxGetListing( {
						handler: 'get_listing',
						container: $container,
						masonry: false,
						slider: false,
						append: false,
						query: query,
						widgetSettings: nav.widget_settings,
					}, function( response ) {
						JetFormBuilderMain.widgetListingGrid( $container );
					} );

				} else if ( isStore ) {
					$( document ).trigger( 'jet-listing-grid-init-store', $this );
				}

			} );

		},

		removeFromStore: function( event ) {

			event.preventDefault();

			var $this = $( this ),
				args  = $this.data( 'args' );

			if ( args.store.is_front ) {

				var store = JetFormBuilderMain.stores[ args.store.type ],
					count = 0;

				if ( ! store ) {
					return;
				}

				if ( ! store.inStore( args.store.slug, '' + args.post_id ) ) {
					var storePosts = store.getStore( args.store.slug );
					count = storePosts.length;
				} else {
					count = store.remove( args.store.slug, args.post_id );
				}

				$( '.jet-add-to-store[data-store="' + args.store.slug + '"][data-post="' + args.post_id + '"]' ).each( function() {
					JetFormBuilderMain.switchDataStoreStatus( $( this ), true );
				} );

				$( 'span.jet-engine-data-store-count[data-store="' + args.store.slug + '"]' ).text( count );

				if ( args.remove_from_listing ) {
					$this.closest( '.jet-listing-dynamic-post-' + args.post_id ).remove();
				}

				return;

			}

			$this.css( 'opacity', 0.3 );

			$.ajax({
				url: JetFormBuilderMainSettings.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: 'jet_engine_remove_from_store_' + args.store.slug,
					store: args.store.slug,
					post_id: args.post_id,
				},
			}).done( function( response ) {

				$this.css( 'opacity', 1 );

				if ( response.success ) {

					$this.addClass( 'is-hidden' );

					$( '.jet-add-to-store[data-store="' + args.store.slug + '"][data-post="' + args.post_id + '"]' ).each( function() {
						JetFormBuilderMain.switchDataStoreStatus( $( this ), true );
					} );

					if ( args.remove_from_listing ) {
						$this.closest( '.jet-listing-grid__item[data-post="' + args.post_id + '"]' ).remove();
					}

					if ( response.data.fragments ) {
						$.each( response.data.fragments, function( selector, value ) {
							$( selector ).html( value );
						} );
					}

				} else {
					alert( response.data.message );
				}

				return response;

			} ).done( function( response ) {

				if ( args.remove_from_listing ) {
					$this.closest( '.jet-listing-grid__item' ).remove();
				}

				if ( response.success ) {
					$( 'span.jet-engine-data-store-count[data-store="' + args.store.slug + '"]' ).text( response.data.count );
				}

			} ).fail( function( jqXHR, textStatus, errorThrown ) {
				$this.css( 'opacity', 1 );
				alert( errorThrown );
			} );

		},

		triggerPopup: function( popupID, isJetFormBuilderMain, postID ) {

			if ( ! popupID ) {
				return;
			}

			var popupData = {
				popupId: 'jet-popup-' + popupID,
			};

			if ( isJetFormBuilderMain ) {
				popupData.isJetFormBuilderMain = true;
				popupData.postId      = postID;
			}

			$( window ).trigger( {
				type: 'jet-popup-open-trigger',
				popupData: popupData
			} );

		},

		addToStore: function( event ) {

			event.preventDefault();

			var $this = $( this ),
				args  = $this.data( 'args' );

			if ( $this.hasClass( 'in-store' ) ) {
				if ( args.popup ) {
					JetFormBuilderMain.triggerPopup( args.popup, args.isJetFormBuilderMain, args.post_id );
				} else {
					window.location = $this.attr( 'href' );
				}
				return;
			}

			if ( args.store.is_front ) {

				var store = JetFormBuilderMain.stores[ args.store.type ],
					count = 0;

				if ( ! store ) {
					return;
				}

				if ( store.inStore( args.store.slug, '' + args.post_id ) ) {
					var storePosts = store.getStore( args.store.slug );
					count = storePosts.length;
				} else {

					count = store.addToStore( args.store.slug, args.post_id, args.store.size );

					if ( false === count ) {
						return;
					}

				}

				if ( args.popup ) {
					JetFormBuilderMain.triggerPopup( args.popup, args.isJetFormBuilderMain, args.post_id );
				}

				JetFormBuilderMain.switchDataStoreStatus( $this );
				$( 'span.jet-engine-data-store-count[data-store="' + args.store.slug + '"]' ).text( count );
				$( '.jet-remove-from-store[data-store="' + args.store.slug + '"][data-post="' + args.post_id + '"]' ).removeClass( 'is-hidden' );

				return;
			}

			$this.css( 'opacity', 0.3 );

			$( document ).trigger( 'jet-engine-on-add-to-store', [ $this, args ] );

			$.ajax({
				url: JetFormBuilderMainSettings.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: 'jet_engine_add_to_store_' + args.store.slug,
					store: args.store.slug,
					post_id: args.post_id,
				},
			}).done( function( response ) {

				$this.css( 'opacity', 1 );

				if ( response.success ) {

					JetFormBuilderMain.switchDataStoreStatus( $this );
					$( '.jet-remove-from-store[data-store="' + args.store.slug + '"][data-post="' + args.post_id + '"]' ).removeClass( 'is-hidden' );

					if ( response.data.fragments ) {
						$.each( response.data.fragments, function( selector, value ) {
							$( selector ).html( value );
						} );
					}

					if ( args.synch_id ) {

						var $container = $( '#' + args.synch_id ),
							$items     = $container.find( '.jet-listing-grid__items' ),
							nav        = $items.data( 'nav' ),
							query      = nav.query;

						JetFormBuilderMain.ajaxGetListing( {
							handler: 'get_listing',
							container: $container,
							masonry: false,
							slider: false,
							append: false,
							query: query,
							widgetSettings: nav.widget_settings,
							postID: window.elementorFrontendConfig.post.id,
							elementID: $container.data( 'id' ),
						}, function( response ) {
							JetFormBuilderMain.widgetListingGrid( $container );
						} );

					}

					if ( args.popup ) {
						JetFormBuilderMain.triggerPopup( args.popup, args.isJetFormBuilderMain, args.post_id );
					}

				} else {
					alert( response.data.message );
				}

				return response;

			} ).done( function( response ) {

				if ( response.success ) {
					$( 'span.jet-engine-data-store-count[data-store="' + args.store.slug + '"]' ).text( response.data.count );
				}

			} ).fail( function( jqXHR, textStatus, errorThrown ) {
				$this.css( 'opacity', 1 );
				alert( errorThrown );
			} );

		},

		switchDataStoreStatus: function( $item, toInitial ) {

			var $label = $item.find( '.jet-listing-dynamic-link__label' ),
				$icon  = $item.find( '.jet-listing-dynamic-link__icon' ),
				args   = $item.data( 'args' ),
				replaceLabel,
				replaceURL,
				replaceIcon;

			toInitial = toInitial || false;

			if ( toInitial ) {
				replaceLabel = args.label;
				replaceIcon  = args.icon;
				replaceURL   = '#';
			} else {
				replaceLabel = args.added_label;
				replaceIcon  = args.added_icon;
				replaceURL   = args.added_url;
			}

			if ( $label.length ) {
				$label.replaceWith( replaceLabel );
			} else {
				$item.append( replaceLabel );
			}

			if ( $icon.length ) {
				$icon.replaceWith( replaceIcon );
			} else {
				$item.prepend( replaceIcon );
			}

			$item.attr( 'href', replaceURL );

			if ( toInitial ) {
				$item.removeClass( 'in-store' );
			} else if ( ! $item.hasClass( 'in-store' ) ) {
				$item.addClass( 'in-store' );
			}


		},

		showConfirmDeleteDialog: function( event ) {
			event.preventDefault();

			var $this = $( this );

			if ( window.confirm( $this.data( 'delete-message' ) ) ) {
				window.location = $this.attr( 'href' );
			}

		},

		handleListingItemClick: function( event ) {

			var url    = $( this ).data( 'url' ),
				target = $( this ).data( 'target' ) || false;

			if ( url ) {

				event.preventDefault();

				if ( window.elementorFrontend && window.elementorFrontend.isEditMode() ) {
					return;
				}

				if ( -1 !== url.indexOf( 'action=open_map_listing_popup' ) ) {

					JetFormBuilderMain.customUrlActions.runAction( url );

				} else {

					if ( '_blank' === target ) {
						window.open( url );
						return;
					}

					window.location = url;
				}
			}

		},

		customUrlActions: {
			selectorOnClick: 'a[href^="#jet-engine-action"][href*="event=click"]',
			selectorOnHover: 'a[href^="#jet-engine-action"][href*="event=hover"], [data-url^="#jet-engine-action"][data-url*="event=hover"]',

			init: function() {
				$( document ).on( 'click.JetFormBuilderMain',      this.selectorOnClick, this.actionHandler.bind( this ) );
				$( document ).on( 'mouseenter.JetFormBuilderMain', this.selectorOnHover, this.actionHandler.bind( this ) );
			},

			actions: {
				'open_map_listing_popup': function( settings ) {

					if ( ! window.google || ! window.JetFormBuilderMainMaps ) {
						return;
					}

					if ( ! settings.id ) {
						return;
					}

					var popupID = settings.id;

					if ( undefined === JetFormBuilderMainMaps.markersData[ popupID ] ) {
						return;
					}

					for ( var i = 0; i < JetFormBuilderMainMaps.markersData[ popupID ].length; i++ ) {

						var marker = JetFormBuilderMainMaps.markersData[ popupID ][i].marker,
							map = marker.getMap();

						if ( !map ) {
							// A marker inside a cluster
							var clustererIndex = JetFormBuilderMainMaps.markersData[ popupID ][i].clustererIndex,
								markersClusterer = JetFormBuilderMainMaps.clusterersData[ clustererIndex ],
								cluster = JetFormBuilderMainMaps.findClusterByMarker( markersClusterer, marker ),
								clusterMarkers,
								bounds;

							if ( !cluster ) {
								google.maps.event.trigger( marker, 'click' );
								return;
							}

							clusterMarkers = cluster.getMarkers();
							bounds = new google.maps.LatLngBounds();

							map = markersClusterer.getMap();

							for ( var j = 0; j < clusterMarkers.length; j++ ) {
								bounds.extend( clusterMarkers[j].position );
							}

							map.fitBounds( bounds );
						}

						google.maps.event.trigger( marker, 'click' );
					}
				}
			},

			actionHandler: function( event ) {
				event.preventDefault();

				var url = $( event.currentTarget ).attr( 'href' ) || $( event.currentTarget ).attr( 'data-url' );

				this.runAction( url );
			},

			runAction: function( url ) {
				var queryParts = url.split( '&' ),
					settings = {};

				queryParts.forEach( function( item ) {
					if ( -1 !== item.indexOf( '=' ) ) {
						var pair = item.split( '=' );

						settings[ pair[0] ] = decodeURIComponent( pair[1] );
					}
				} );

				if ( ! settings.action ) {
					return;
				}

				var actionCb = this.actions[ settings.action ];

				if ( ! actionCb ) {
					return;
				}

				actionCb( settings );
			}
		},

		prepareJetPopup: function( popupData, widgetData, $scope ) {

			var postId = null;

			if ( widgetData['is-jet-engine'] ) {
				popupData['isJetFormBuilderMain'] = true;

				var $gridItems    = $scope.closest( '.jet-listing-grid__items' ),
					$gridItem     = $scope.closest( '.jet-listing-grid__item' ),
					$calendarItem = $scope.closest( '.jet-calendar-week__day-event' );

				if ( $gridItems.length ) {
					popupData['listingSource'] = $gridItems.data( 'listing-source' );
				}

				if ( $gridItem.length ) {
					popupData['postId'] = $gridItem.data( 'post-id' );
				} else if ( $calendarItem.length ) {
					popupData['postId'] = $calendarItem.data( 'post-id' );
				} else if ( window.elementorFrontendConfig && window.elementorFrontendConfig.post ) {
					popupData['postId'] = window.elementorFrontendConfig.post.id;
				}

				if ( window.JetFormBuilderMainFormsEditor && window.JetFormBuilderMainFormsEditor.hasEditor ) {
					popupData['hasEditor'] = true;
				}

			}

			return popupData;

		},

		showCalendarEvent: function( event ) {

			var $this       = $( this ),
				$day        = $this.closest( '.jet-calendar-week__day' ),
				$week       = $day.closest( '.jet-calendar-week' ),
				$events     = $day.find( '.jet-calendar-week__day-content' ),
				activeClass = 'calendar-event-active';

			if ( $day.hasClass( activeClass ) ) {
				$day.removeClass( activeClass );
				JetFormBuilderMain.activeCalendarDay.remove();
				JetFormBuilderMain.activeCalendarDay = null;
				return;
			}

			if ( JetFormBuilderMain.activeCalendarDay ) {
				JetFormBuilderMain.activeCalendarDay.remove();
				$( '.' + activeClass ).removeClass( activeClass );
				JetFormBuilderMain.activeCalendarDay = null;
			}

			$day.addClass( 'calendar-event-active' );

			JetFormBuilderMain.activeCalendarDay = $( '<tr class="jet-calendar-week"><td colspan="7" class="jet-calendar-week__day jet-calendar-week__day-mobile"><div class="jet-calendar-week__day-mobile-event">' + $events.html() + '</div></td></tr>' );

			// Need for re-init popup events
			JetFormBuilderMain.activeCalendarDay.find( '.jet-popup-attach-event-inited' ).removeClass( 'jet-popup-attach-event-inited' );
			JetFormBuilderMain.initElementsHandlers( JetFormBuilderMain.activeCalendarDay );

			JetFormBuilderMain.activeCalendarDay.insertAfter( $week );

		},

		widgetListingGrid: function( $scope ) {
			var widgetID    = $scope.closest( '.elementor-widget' ).data( 'id' ),
				$wrapper    = $scope.find( '.jet-listing-grid' ),
				hasLazyLoad = $wrapper.hasClass( 'jet-listing-grid--lazy-load' ),
				$listing    = $scope.find( '.jet-listing-grid__items' ).first(),
				$slider     = $listing.parent( '.jet-listing-grid__slider' ),
				$masonry    = $listing.hasClass( 'jet-listing-grid__masonry' ) ? $listing : false,
				navSettings = $listing.data( 'nav' ),
				masonryGrid = false;

			if ( hasLazyLoad ) {
				var lazyLoadOptions = $wrapper.data( 'lazy-load' ),
					widgetSettings = {};

				if ( window.elementorFrontend && window.elementorFrontend.isEditMode() ) {
					widgetSettings = JetFormBuilderMain.getEditorElementSettings( $scope.closest( '.elementor-widget' ) );
					widgetID       = false; // for avoid get widget settings from document in editor
				}

				JetFormBuilderMain.lazyLoadListing( {
					container:      $scope.find( '.elementor-widget-container' ),
					elementID:      widgetID,
					postID:         lazyLoadOptions.post_id,
					queriedID:      lazyLoadOptions.queried_id || false,
					offset:         lazyLoadOptions.offset || '0px',
					query:          lazyLoadOptions.query || {},
					widgetSettings: widgetSettings,
				} );

				return;
			}

			if ( $slider.length ) {
				JetFormBuilderMain.initSlider( $slider );
			}

			if ( $masonry && $masonry.length ) {

				JetFormBuilderMain.initMasonry( $masonry );

				$( window ).on( 'load resize', function() {
					JetFormBuilderMain.runMasonry( $masonry );
				} );
			}

			if ( navSettings && navSettings.enabled ) {

				var loadMoreType = navSettings.type || 'click';

				switch ( loadMoreType ) {
					case 'click':

						if ( navSettings.more_el ) {
							var $button = $( navSettings.more_el ),
								page    = parseInt( $listing.data( 'page' ), 10 ),
								pages   = parseInt( $listing.data( 'pages' ), 10 );

							if ( $button.length ) {

								if ( page === pages && ! window.elementor ) {
									$button.css( 'display', 'none' );
								} else {
									$button.removeAttr( 'style' );
								}

								$( document ).off( 'click', navSettings.more_el ).on( 'click', navSettings.more_el, JetFormBuilderMain.handleMore.bind( {
									container: $listing,
									button: $button,
									settings: navSettings,
									pages: pages,
									masonry: $masonry,
									slider: $slider,
								} ) );

							}
						}

						break;

					case 'scroll':

						if ( ! window.elementorFrontend.isEditMode() && ! $slider.length ) {

							$( window )
								.off( 'scroll.JetFormBuilderMainInfinityScroll/' + widgetID )
								.on( 'scroll.JetFormBuilderMainInfinityScroll/' + widgetID, JetFormBuilderMain.debounce( 250, JetFormBuilderMain.handleInfiniteScroll.bind( {
									container: $listing,
									settings:  navSettings,
									masonry:   $masonry,
									slider:    $slider,
								} ) ) );

						}

						break;
				}
			}

		},

		initMasonry: function( $masonry ) {
			imagesLoaded( $masonry, function() {
				JetFormBuilderMain.runMasonry( $masonry );
			} );
		},

		runMasonry: function( $masonry ) {
			var $items  = $( '> .jet-listing-grid__item', $masonry ),
				options = $masonry.data( 'masonry-grid-options' ),
				deviceMode = window.elementorFrontend.getCurrentDeviceMode(),
				columnsCount = options.columns[ deviceMode ];

			// Reset masonry
			$items.css( {
				marginTop: ''
			} );

			if ( columnsCount < 2 ) {
				return;
			}

			var masonryInstance = new window.elementorModules.utils.Masonry( {
					container: $masonry,
					items: $items,
					columnsCount: columnsCount,
					verticalSpaceBetween: 0
				} );

			masonryInstance.run();
		},

		ajaxGetListing: function( options, doneCallback, failCallback ) {

			var container = options.container || false,
				handler = options.handler || false,
				masonry = options.masonry || false,
				slider = options.slider || false,
				append = options.append || false,
				query = options.query || {},
				widgetSettings = options.widgetSettings || {},
				postID = options.postID || false,
				queriedID = options.queriedID || false,
				elementID = options.elementID || false,
				page = options.page || 1,
				preventCSS = options.preventCSS || false;

			doneCallback = doneCallback || function( response ) {};

			if ( ! container|| ! handler ) {
				return;
			}

			if ( ! preventCSS ) {
				container.css({
					pointerEvents: 'none',
					opacity: '0.5',
					cursor: 'default',
				});
			}

			$.ajax({
				url: JetFormBuilderMainSettings.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: 'jet_engine_ajax',
					handler: handler,
					query: query,
					widget_settings: widgetSettings,
					post_id: postID,
					queried_id: queriedID,
					element_id: elementID,
					page: page
				},
			}).done( function( response ) {

				container.removeAttr( 'style' );

				if ( response.success ) {

					container.data( 'page', page );

					var $html = $( response.data.html );

					JetFormBuilderMain.initElementsHandlers( $html );

					if ( slider && slider.length ) {

						var $slider = slider.find( '> .jet-listing-grid__items' );

						if ( ! $slider.hasClass( 'slick-initialized' ) ) {

							if ( append ) {
								container.append( $html );
							} else {
								container.html( $html );
							}

							var itemsCount = container.find( '> .jet-listing-grid__item' ).length;

							slider.addClass( 'jet-listing-grid__slider' );
							JetFormBuilderMain.initSlider( slider, { itemsCount: itemsCount } );

						} else {
							$html.each( function( index, el ) {
								$slider.slick( 'slickAdd', el );
							});
						}

					} else {

						if ( append ) {
							container.append( $html );
						} else {
							container.html( $html );
						}

						if ( masonry && masonry.length ) {
							JetFormBuilderMain.initMasonry( masonry );
						}

					}

				}

			} ).done( doneCallback ).fail( function() {
				container.removeAttr( 'style' );
				if ( failCallback ) {
					failCallback.call();
				}

			} );

		},

		handleMore: function( event ) {

			event.preventDefault();

			var self = this,
				page = parseInt( self.container.data( 'page' ), 10 );

			page++;

			self.button.css({
				pointerEvents: 'none',
				opacity: '0.5',
				cursor: 'default',
			});

			JetFormBuilderMain.ajaxGetListing( {
				handler: 'listing_load_more',
				container: self.container,
				masonry: self.masonry,
				slider: self.slider,
				append: true,
				query: self.settings.query,
				widgetSettings: self.settings.widget_settings,
				page: page,
			}, function( response ) {

				self.button.removeAttr( 'style' );

				if ( response.success && page === self.pages ) {
					self.button.css( 'display', 'none' );
				}

			}, function() {
				self.button.removeAttr( 'style' );
			} );

		},

		handleInfiniteScroll: function( event ) {
			var self  = this,
				page  = parseInt( self.container.data( 'page' ), 10 ),
				pages = parseInt( self.container.data( 'pages' ), 10 );

			if ( page === pages ) {
				return;
			}

			if ( JetFormBuilderMain.lazyLoading ) {
				return;
			}

			if ( ! self.container.outerHeight() ) {
				return;
			}

			if ( $( window ).scrollTop() + $( window ).outerHeight() < self.container.offset().top + self.container.outerHeight() ) {
				return;
			}

			page++;
			JetFormBuilderMain.lazyLoading = true;

			JetFormBuilderMain.ajaxGetListing( {
				handler: 'listing_load_more',
				container: self.container,
				masonry: self.masonry,
				slider: self.slider,
				append: true,
				query: self.settings.query,
				widgetSettings: self.settings.widget_settings,
				page: page,
			}, function( response ) {
				JetFormBuilderMain.lazyLoading = false;
			}, function() {
				JetFormBuilderMain.lazyLoading = false;
			} );

		},

		lazyLoadListing: function( args ) {
			var $wrapper = args.container.find( '.jet-listing-grid' ),
				observer = new IntersectionObserver(
					function( entries, observer ) {

						if ( entries[0].isIntersecting ) {

							JetFormBuilderMain.lazyLoading = true;

							$wrapper.addClass( 'jet-listing-grid-loading' );

							JetFormBuilderMain.ajaxGetListing( {
								handler: 'get_listing',
								container: args.container,
								masonry: false,
								slider: false,
								append: false,
								elementID: args.elementID,
								postID: args.postID,
								queriedID: args.queriedID,
								query: args.query,
								widgetSettings: args.widgetSettings,
								preventCSS: true,
							}, function( response ) {
								JetFormBuilderMain.widgetListingGrid( args.container.closest( '.elementor-widget' ) );
								JetFormBuilderMain.lazyLoading = false;

								var needReInitFilters = false,
									isEditMode = window.elementorFrontend && window.elementorFrontend.isEditMode();

								if ( !isEditMode && window.JetSmartFilterSettings ) {

									if ( response.data.filters_data ) {
										$.each( response.data.filters_data, function( param, data ) {
											if ( window.JetSmartFilterSettings[ param ]['jet-engine'] ) {
												window.JetSmartFilterSettings[ param ]['jet-engine'] = $.extend(
													{},
													window.JetSmartFilterSettings[ param ]['jet-engine'],
													data
												);
											} else {
												window.JetSmartFilterSettings[ param ]['jet-engine'] = data;
											}
										});

										needReInitFilters = true;
									}

									if ( window.JetSmartFilterSettings.jetFiltersIndexedData && response.data.indexer_data ) {
										window.JetSmartFilterSettings.jetFiltersIndexedData = $.extend(
											{},
											window.JetSmartFilterSettings.jetFiltersIndexedData,
											response.data.indexer_data
										);

										needReInitFilters = true;
									}
								}

								// ReInit filters
								if ( needReInitFilters && window.JetSmartFilters ) {
									window.JetSmartFilters.initializeFilters();
								}

							}, function() {
								JetFormBuilderMain.lazyLoading = false;
								$wrapper.removeClass( 'jet-listing-grid-loading' );
							} );

							// Detach observer after the first load the listing
							observer.unobserve( entries[0].target );
						}
					},
					{
						rootMargin: '0% 0% ' + args.offset + ' 0%'
					}
				);

			observer.observe( args.container[0] );
		},

		initSlider: function( $slider, customOptions ) {
			var options     = $slider.data( 'slider_options' ),
				windowWidth = $( window ).width(),
				tabletBP    = 1025,
				mobileBP    = 768,
				tabletSlides, mobileSlides, defaultOptions, slickOptions;

			customOptions = customOptions || {};

			options = $.extend( {}, options, customOptions );

			if ( options.itemsCount <= options.slidesToShow.desktop && windowWidth >= tabletBP ) { // 1025 - ...
				$slider.removeClass( 'jet-listing-grid__slider' );
				return;
			} else if ( options.itemsCount <= options.slidesToShow.tablet && tabletBP > windowWidth && windowWidth >= mobileBP ) { // 768 - 1024
				$slider.removeClass( 'jet-listing-grid__slider' );
				return;
			} else if ( options.itemsCount <= options.slidesToShow.mobile && windowWidth < mobileBP ) { // 0 - 767
				$slider.removeClass( 'jet-listing-grid__slider' );
				return;
			}

			if ( options.slidesToShow.tablet ) {
				tabletSlides = options.slidesToShow.tablet;
			} else {
				tabletSlides = 1 === options.slidesToShow.desktop ? 1 : 2;
			}

			if ( options.slidesToShow.mobile ) {
				mobileSlides = options.slidesToShow.mobile;
			} else {
				mobileSlides = 1;
			}

			options.slidesToShow = options.slidesToShow.desktop;

			defaultOptions = {
				customPaging: function( slider, i ) {
					return $( '<span />' ).text( i + 1 );
				},
				slide: '.jet-listing-grid__item',
				dotsClass: 'jet-slick-dots',
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: tabletSlides,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: mobileSlides,
							slidesToScroll: 1
						}
					}
				]
			};

			slickOptions = $.extend( {}, defaultOptions, options );

			var $sliderItems = $slider.find( '> .jet-listing-grid__items' );

			if ( slickOptions.infinite ) {
				$sliderItems.on( 'init', function() {
					var $items        = $( this ),
						$clonedSlides = $( '.slick-cloned', $items );

					if ( !$clonedSlides.length ) {
						return;
					}

					JetFormBuilderMain.initElementsHandlers( $clonedSlides );
				} );
			}

			if ( $sliderItems.hasClass( 'slick-initialized' ) ) {
				$sliderItems.slick( 'refresh', true );
				return;
			}

			$sliderItems.slick( slickOptions );
		},

		maybeReinitSlider: function( event, $scope ) {
			var $slider = $scope.find( '.jet-listing-grid__slider' );

			if ( $slider.length ) {
				$slider.each( function() {
					JetFormBuilderMain.initSlider( $( this ) );
				} );
			}
		},

		widgetDynamicField: function( $scope ) {

			var $slider = $scope.find( '.jet-engine-gallery-slider' );

			if ( $slider.length ) {
				if ( $.isFunction( $.fn.imagesLoaded ) ) {
					$slider.imagesLoaded().always( function( instance ) {
						$slider.slick( $slider.data( 'atts' ) );
					} );
				}
			}

		},

		switchCalendarMonth: function( $event ) {

			var $this     = $( this ),
				$calendar = $this.closest( '.jet-calendar' ),
				$widget   = $calendar.closest( '.elementor-widget-container' ),
				settings  = $calendar.data( 'settings' ),
				post      = $calendar.data( 'post' ),
				month     = $this.data( 'month' );

			$calendar.addClass( 'jet-calendar-loading' );

			JetFormBuilderMain.currentRequest = {
				action: 'jet_engine_calendar_get_month',
				month: month,
				settings: settings,
				post: post,
			};

			$( document ).trigger( 'jet-engine-request-calendar' );

			$.ajax({
				url: JetFormBuilderMainSettings.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: JetFormBuilderMain.currentRequest,
			}).done( function( response ) {
				if ( response.success ) {
					$widget.html( response.data.content );
					JetFormBuilderMain.initElementsHandlers( $widget );
				}
				$calendar.removeClass( 'jet-calendar-loading' );
			} );
		},

		initElementsHandlers: function( $selector ) {
			$selector.find( '[data-element_type]' ).each( function() {
				var $this       = $( this ),
					elementType = $this.data( 'element_type' );

				if ( !elementType ) {
					return;
				}

				if ( 'widget' === elementType ) {
					elementType = $this.data( 'widget_type' );
					window.elementorFrontend.hooks.doAction( 'frontend/element_ready/widget', $this, $ );
				}

				window.elementorFrontend.hooks.doAction( 'frontend/element_ready/global', $this, $ );
				window.elementorFrontend.hooks.doAction( 'frontend/element_ready/' + elementType, $this, $ );

			} );
		},

		getEditorElementSettings: function( $scope ) {
			var modelCID = $scope.data( 'model-cid' ),
				elementData;

			if ( ! modelCID ) {
				return {};
			}

			if ( ! window.elementorFrontend.hasOwnProperty( 'config' ) ) {
				return {};
			}

			if ( ! window.elementorFrontend.config.hasOwnProperty( 'elements' ) ) {
				return {};
			}

			if ( ! window.elementorFrontend.config.elements.hasOwnProperty( 'data' ) ) {
				return {};
			}

			elementData = window.elementorFrontend.config.elements.data[ modelCID ];

			if ( ! elementData ) {
				return {};
			}

			return elementData.toJSON();
		},

		debounce: function( threshold, callback ) {
			var timeout;

			return function debounced( $event ) {
				function delayed() {
					callback.call( this, $event );
					timeout = null;
				}

				if ( timeout ) {
					clearTimeout( timeout );
				}

				timeout = setTimeout( delayed, threshold );
			};
		},

		filters: ( function() {

			var callbacks = {};

			return {

				addFilter: function( name, callback ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						callbacks[name] = [];
					}

					callbacks[name].push(callback);

				},

				applyFilters: function( name, value, args ) {

					if ( ! callbacks.hasOwnProperty( name ) ) {
						return value;
					}

					if ( args === undefined ) {
						args = [];
					}

					var container = callbacks[ name ];
					var cbLen     = container.length;

					for (var i = 0; i < cbLen; i++) {
						if (typeof container[i] === 'function') {
							value = container[i](value, args);
						}
					}

					return value;
				}

			};

		})()

	};

	$( window ).on( 'elementor/frontend/init', JetFormBuilderMain.init );

	window.JetFormBuilderMain = JetFormBuilderMain;

}( jQuery ) );
