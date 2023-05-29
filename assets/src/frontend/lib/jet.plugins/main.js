import { createHooks } from '@wordpress/hooks';

class JetPlugins {

	hooks;
	globalNamespace  = 'jet-plugins';
	blocksConditions = {};

	constructor( hooksHandler ) {
		this.hooks = hooksHandler || createHooks();
	}

	hookNameFromBlock( block ) {
		console.warn(
			`JetPlugins.hookNameFromBlock is deprecated. Use JetPlugins.hookNameBlockReady instead`
		);

		return this.hookNameBlockReady( block );
	}

	hookNameBlockReady( block ) {
		const name = this.getBlockName( block );

		return name
		       ? `${ this.globalNamespace }.frontend.element-ready.${ name }`
		       : '';
	}

	hookNameBlockRemoved( block ) {
		const name = this.getBlockName( block );

		return name
		       ? `${ this.globalNamespace }.frontend.element-removed.${ name }`
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

		const $blocksList = this.getBlocks( $scope );

		$blocksList?.each?.( ( index, el ) => {
			this.initBlock( el );
		} );
	}

	remove( $scope ) {
		const $blocksList = this.getBlocks( $scope );

		$blocksList?.each?.( ( index, el ) => {
			this.removeBlock( el );
		} );
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
		const blockHook = this.hookNameBlockReady( el );

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

	removeBlock( el ) {
		const blockHook = this.hookNameBlockRemoved( el );

		this.hooks.doAction( blockHook, jQuery( el ) );
		el.dataset.jetInited = false;
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
			this.hookNameBlockReady( blockName ),
			`${ this.globalNamespace }/${ block.block }`,
			block.callback,
		);

		block?.removeCallback && this.hooks.addAction(
			this.hookNameBlockRemoved( blockName ),
			`${ this.globalNamespace }/${ block.block }`,
			block.removeCallback,
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

	getBlocks( $scope ) {
		// Init in some scope if needed. By default on body
		$scope = $scope || jQuery( 'body' );

		if ( !$scope || !$scope.length ) {
			return [];
		}

		const $blocksList = $scope.find( '[data-is-block*="/"]' );

		return $blocksList?.length ? $blocksList : [];
	}

}

window.JetPlugins = window.JetPlugins || new JetPlugins();