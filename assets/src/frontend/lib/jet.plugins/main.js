import { createHooks } from '@wordpress/hooks';

class JetPlugins {

	hooks;
	globalNamespace = 'jet-plugins';
	blocksNamespace = 'frontend.element-ready';

	constructor( hooksHandler ) {
		this.hooks = hooksHandler || createHooks();
	}

	hookNameFromBlock( block ) {
		return `${ this.globalNamespace }.${ this.blocksNamespace }.${ block.replace( '/', '.' ) }`;
	}

	init( $scope, blocks ) {

		// Attach blocks callback early if used. Its optional, maybe used to make sure handlers attached before hooks called
		if ( blocks && blocks.length ) {
			this.bulkBlocksInit( blocks );
		}

		// Init in some scope if needed. By default on body
		$scope = $scope || jQuery( 'body' );

		if ( $scope && $scope.length ) {
			let $blocksList = $scope.find( '[data-is-block*="/"]' );
			$blocksList && $blocksList.length && $blocksList.each( ( index, el ) => {
				this.initBlock( el );
			} );
		}

	}

	initBlock( el, forceInit ) {

		forceInit = forceInit || false;

		if ( el.dataset.isBlock && this.hasHandlers( this.hookNameFromBlock( el.dataset.isBlock ) ) ) {

			let needInit = forceInit;

			if ( ! needInit ) {
				needInit = undefined === el.dataset.jetInited;
			}

			if ( needInit ) {
				this.hooks.doAction( this.hookNameFromBlock( el.dataset.isBlock ), jQuery( el ) );
				el.dataset.jetInited = true;
			}

		}
	}

	hasHandlers( hookName ) {

		if ( ! this.hooks.actions[ hookName ] ) {
			return false;
		}

		if ( ! this.hooks.actions[ hookName ].handlers || ! this.hooks.actions[ hookName ].handlers.length ) {
			return false;
		}

		return true;
	}

	bulkBlocksInit( blocks ) {

		for ( var i = 0; i < blocks.length; i++ ) {

			this.hooks.addAction(
				this.hookNameFromBlock( blocks[ i ].block ),
				`${ this.globalNamespace }/${ blocks[ i ].block }`,
				blocks[ i ].callback
			);

		}

	}

}

window.JetPlugins = window.JetPlugins || new JetPlugins();