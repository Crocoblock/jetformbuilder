export default {
	methods: {
		saveByAjax( currentTab, tabSlug ) {
			const self      = this;
			let ajaxRequest = {};

			try {
				ajaxRequest = this.getAjaxObject( currentTab, tabSlug );
			}
			catch ( error ) {
				this.displayError( error );

				return;
			}

			jfbEventBus.$emit(
				'request-state',
				{ state: 'begin', slug: tabSlug },
			);

			jQuery.ajax( ajaxRequest ).
				done(
					response => this.onDoneRequest( response, currentTab ),
				).fail(
				function ( jqXHR, textStatus, errorThrown ) {
					if ( 'function' === typeof currentTab.onSaveFail ) {
						currentTab.onSaveFail( jqXHR, textStatus, errorThrown );
					}
					else {
						self.$CXNotice.add( {
							message: errorThrown,
							type: 'error',
							duration: 5000,
						} );
					}
				},
			).complete( () => {
				jfbEventBus.$emit(
					'request-state',
					{ state: 'end', slug: tabSlug },
				);
			} );
		},

		getAjaxObject( currentTab, tabSlug ) {
			const ajaxRequest = {
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
				...currentTab.getRequestOnSave(),
			};
			ajaxRequest.data  = {
				action: `jet_fb_save_tab__${ tabSlug }`,
				...ajaxRequest.data,
			};

			if ( window?.JetFBPageConfigPackage?.nonce ) {
				ajaxRequest.data._nonce = window.JetFBPageConfigPackage.nonce;
			}

			return ajaxRequest;
		},
		displayError( error ) {
			if ( !error ) {
				return;
			}

			if ( 'object' === typeof error.noticeOptions ) {
				this.$CXNotice.add( {
					message: 'Invalid request data.',
					type: 'error',
					duration: 2000,
					...error.noticeOptions,
				} );

				return;
			}

			this.$CXNotice.add( {
				message: error,
				type: 'error',
				duration: 2000,
			} );
		},
		/* eslint-disable-next-line */
		onDoneRequest( response, currentTab ) {

			if ( 'function' === typeof currentTab.onSaveDone ) {
				currentTab.onSaveDone( response );

				return;
			}

			if ( response.success ) {
				this.$CXNotice.add( {
					message: response.data.message,
					type: 'success',
					duration: 5000,
				} );
				if ( 'function' === typeof currentTab.onSaveDoneSuccess ) {
					currentTab.onSaveDoneSuccess( response );
				}

				return;
			}

			this.$CXNotice.add( {
				message: response.data.message,
				type: 'error',
				duration: 5000,
			} );

			if ( 'function' === typeof currentTab.onSaveDoneError ) {
				currentTab.onSaveDoneError( response );
			}
		},
	},
};