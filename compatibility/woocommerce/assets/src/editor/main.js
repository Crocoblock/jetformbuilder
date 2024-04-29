const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.insert.post.modifiers',
	'jet-form-builder/woocommerce-compat',
	function ( modifiers ) {
		modifiers = [
			{
				id: 'product',
				/**
				 * @since 3.0.4 Make sure WooCommerce is installed
				 *
				 * @param settings
				 * @returns {*|boolean}
				 */
				isSupported: settings => 'product' === settings.post_type,
			},
			...modifiers,
		];

		return modifiers;
	},
);