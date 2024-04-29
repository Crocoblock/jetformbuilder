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