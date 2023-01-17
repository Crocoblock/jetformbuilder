export default {
	methods: {
		saveByAjax( currentTab, tabSlug ) {
			const self = this;
			let ajaxRequest = {};

			try {
				ajaxRequest = this.getAjaxObject( currentTab, tabSlug );
			} catch ( error ) {
				if ( ! error ) {
					return;
				}

				if ( 'object' === typeof error.noticeOptions ) {
					self.$CXNotice.add( {
						message: 'Invalid request data.',
						type: 'error',
						duration: 2000,
						...error.noticeOptions,
					} );

					return;
				}

				self.$CXNotice.add( {
					message: error,
					type: 'error',
					duration: 2000,
				} );

				return;
			}

			jfbEventBus.$emit( 'request-state', { state: 'begin', slug: tabSlug } );

			jQuery.ajax( ajaxRequest )
				.done( function( response ) {

					if ( 'function' === typeof currentTab.onSaveDone ) {
						currentTab.onSaveDone( response );
					} else {
						if ( response.success ) {
							self.$CXNotice.add( {
								message: response.data.message,
								type: 'success',
								duration: 5000,
							} );
							if ( 'function' === typeof currentTab.onSaveDoneSuccess ) {
								currentTab.onSaveDoneSuccess( response );
							}
						} else {
							self.$CXNotice.add( {
								message: response.data.message,
								type: 'error',
								duration: 5000,
							} );
							if ( 'function' === typeof currentTab.onSaveDoneError ) {
								currentTab.onSaveDoneError( response );
							}
						}
					}
					jfbEventBus.$emit( 'request-state', { state: 'end', slug: tabSlug } );
				} )
				.fail( function( jqXHR, textStatus, errorThrown ) {
					if ( 'function' === typeof currentTab.onSaveFail ) {
						currentTab.onSaveFail( jqXHR, textStatus, errorThrown );
					} else {
						self.$CXNotice.add( {
							message: errorThrown,
							type: 'error',
							duration: 5000,
						} );
					}
					jfbEventBus.$emit( 'request-state', { state: 'end', slug: tabSlug } );
				} );
		},

		getAjaxObject( currentTab, tabSlug ) {
			const ajaxRequest = {
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
				...currentTab.getRequestOnSave(),
			};
			ajaxRequest.data = {
				action: `jet_fb_save_tab__${ tabSlug }`,
				...ajaxRequest.data,
			};

			if ( window?.JetFBPageConfigPackage?.nonce ) {
				ajaxRequest.data._nonce = window.JetFBPageConfigPackage.nonce;
			}

			return ajaxRequest;
		},
	},
}