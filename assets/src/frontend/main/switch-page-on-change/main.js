const { addAction } = wp.hooks;

addAction(
	'jet.fb.multistep.page.init',
	'jet-form-builder/switch-page-on-change',
	/**
	 * @param page {PageState}
	 */
	function ( page ) {
		const wrappers = page.node.querySelectorAll(
			'.jet-form-builder-row[data-switch-page]',
		);

		if ( !wrappers ) {
			return;
		}

		for ( const wrapper of wrappers ) {
			const node = wrapper.querySelector( '[data-jfb-sync]' );

			if ( !node?.jfbSync || ! page.isNodeBelongThis( node ) ) {
				continue;
			}

			node.jfbSync.watch( () => {
				page.changePage( false ).then( () => {} ).catch( () => {} );
			} );
		}
	},
);