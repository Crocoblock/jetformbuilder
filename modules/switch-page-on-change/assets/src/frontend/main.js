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
		// Handle click events for radio inputs to allow re-selection
		page.node.addEventListener( 'click', ( event ) => {
			// Check if this is a radio input
			if ( event.target.type === 'radio' ) {
				// Check if there's a check-mark-control in the same wrapper
				const wrapper = event.target.closest( '.jet-form-builder__field-wrap' );
				if ( wrapper && wrapper.querySelector( '.check-mark-control' ) ) {
					if ( event.target.checked ) {
						page.changePage( false ).then( () => {} ).catch( () => {} );
					}
				} else {
					// For regular radio inputs without check-mark, also handle clicks
					// Small delay to ensure the value is updated
					setTimeout( () => {
						if ( event.target.checked ) {
							page.changePage( false ).then( () => {} ).catch( () => {} );
						}
					}, 10 );
				}
			}
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
				page.changePage( false ).then( () => {} ).catch( () => {} );
			} );
		}
	},
);