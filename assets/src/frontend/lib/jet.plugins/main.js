import { createHooks } from '@wordpress/hooks';

class JetPlugins {

	hooks;
	globalNamespace  = 'jet-plugins';
	blocksNamespace  = 'frontend.element-ready';
	blocksConditions = {};

	constructor( hooksHandler ) {
		this.hooks = hooksHandler || createHooks();
	}

	hookNameFromBlock( block ) {
		const name = this.getBlockName( block );

		return name
		       ? `${ this.globalNamespace }.${ this.blocksNamespace }.${ name }`
		       : '';
	}

	getBlockName( block ) {
		if ( 'string' === typeof block ) {
			return block.replace( '/', '.' );
		}

		return this.getBlockName( block?.dataset?.isBlock || '' );
	}

	init( $scope, blocks ) {

		// Attach blocks callback early if used. Its optional, maybe used to
		// make sure handlers attached before hooks called
		if ( blocks && blocks.length ) {
			this.bulkBlocksInit( blocks );
		}

		// Init in some scope if needed. By default on body
		$scope = $scope || jQuery( 'body' );

		if ( $scope && $scope.length ) {
			let $blocksList = $scope.find( '[data-is-block*="/"]' );
			$blocksList && $blocksList.length &&
			$blocksList.each( ( index, el ) => {
				this.initBlock( el );
			} );
		}

	}

	/**
	 * Check if given block requires initializtion
	 *
	 * @param  DOMNode  el Specific node of given block
	 * @return {Boolean}
	 */
	isBlockRequiresInit( el ) {

		// Intially check if block was already initialized - if yes, we don't
		// need do it again
		let needInit    = undefined === el.dataset.jetInited;
		const blockHook = this.getBlockName( el );

		// If block was not initialized before - check if it has condition
		// callback to allow initializtion or not If it has - allow
		// initializtion only if condition callback return TRUE
		if ( needInit && this.blocksConditions[ blockHook ] ) {
			needInit = this.blocksConditions[ blockHook ]( el );
		}

		return needInit;
	}

	initBlock( el, forceInit ) {

		forceInit       = forceInit || false;
		const blockHook = this.hookNameFromBlock( el );

		if ( blockHook && this.hasHandlers( blockHook ) ) {

			// Initially check if force initialization passed as argument.
			// In this case block will be initialized anyway
			let needInit = forceInit;

			// If force init not required - check if we need to initilize it
			if ( !needInit ) {
				needInit = this.isBlockRequiresInit( el );
			}

			if ( needInit ) {
				this.hooks.doAction( blockHook, jQuery( el ) );
				el.dataset.jetInited = true;
			}

		}
	}

	hasHandlers( hookName ) {

		if ( !this.hooks.actions[ hookName ] ) {
			return false;
		}

		if ( !this.hooks.actions[ hookName ].handlers ||
			!this.hooks.actions[ hookName ].handlers.length ) {
			return false;
		}

		return true;
	}

	registerBlockHandlers( block ) {
		const blockName = this.getBlockName( block.block );

		this.hooks.addAction(
			this.hookNameFromBlock( blockName ),
			`${ this.globalNamespace }/${ block.block }`,
			block.callback,
		);

		if ( block.condition && 'function' === typeof block.condition ) {
			this.blocksConditions[ blockName ] = block.condition;
		}

	}

	bulkBlocksInit( blocks ) {

		for ( var i = 0; i < blocks.length; i++ ) {
			this.registerBlockHandlers( blocks[ i ] );
		}

	}

}

window.JetPlugins = window.JetPlugins || new JetPlugins();