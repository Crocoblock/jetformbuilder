const { addAction } = JetPlugins.hooks;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

addAction(
	'jet.fb.multistep.page.init',
	'jet-form-builder/switch-page-on-change',
	/**
	 * @param page {PageState}
	 */
	function ( page ) {
		const getSwitchWrapper = ( node ) => node?.closest(
			'.jet-fb-switch-page-on-change',
		);

		const changePage = () => page.changePage( false )
			.then( () => {} )
			.catch( () => {} );

		// Handle click events for enabled radio inputs to allow re-selection.
		page.node.addEventListener( 'click', ( event ) => {
			if ( event.target.type !== 'radio' ) {
				return;
			}

			const switchWrapper = getSwitchWrapper( event.target );

			if ( !switchWrapper || !page.isNodeBelongThis( switchWrapper ) ) {
				return;
			}

			const wrapper = event.target.closest( '.jet-form-builder__field-wrap' );
			if ( wrapper?.querySelector( '.check-mark-control' ) ) {
				if ( event.target.checked ) {
					changePage();
				}

				return;
			}

			// For regular radio inputs without check-mark, allow click-driven
			// transitions after the checked state has updated.
			setTimeout( () => {
				if ( event.target.checked ) {
					changePage();
				}
			}, 10 );
		} );

		const wrappers = page.node.querySelectorAll(
			'.jet-fb-switch-page-on-change',
		);
		if ( !wrappers ) {
			return;
		}
		for ( const wrapper of wrappers ) {
			let node = wrapper;

			if ( !wrapper.hasOwnProperty( 'jfbSync' ) ) {
				node = wrapper.querySelector( 'input, select' );
			}

			if ( !node?.jfbSync || !page.isNodeBelongThis( node ) ) {
				continue;
			}
			node.jfbSync.watch( () => {
				if ( isEmpty( node.jfbSync.getValue() ) ) {
					return;
				}
				changePage();
			} );
		}
	},
);
