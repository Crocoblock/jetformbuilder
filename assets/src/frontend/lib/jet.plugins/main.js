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

		$scope.find( '[data-is-block*="/"]' ).each( ( index, el ) => {
			this.hooks.doAction( this.hookNameFromBlock( el.dataset.isBlock ), jQuery( el ) );
		} );

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