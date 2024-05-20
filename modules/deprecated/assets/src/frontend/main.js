window.JetFormBuilderMain = {

	filters: (
		function () {

			var callbacks = {};

			return {

				addFilter: function ( name, callback ) {
					if ( Boolean( window.JetFormBuilderSettings.devmode ) ) {
						console.warn(
							`This method is deprecated since JetFormBuilder 3.0.0. 
Use JetPlugins.hooks.addFilter instead.`,
						);
					}

					if ( !callbacks.hasOwnProperty( name ) ) {
						callbacks[ name ] = [];
					}

					callbacks[ name ].push( callback );

				},

				applyFilters: function ( name, value, args ) {

					if ( !callbacks.hasOwnProperty( name ) ) {
						return value;
					}

					if ( args === undefined ) {
						args = [];
					}

					var container = callbacks[ name ];
					var cbLen     = container.length;

					for ( var i = 0; i < cbLen; i++ ) {
						if ( typeof container[ i ] === 'function' ) {
							value = container[ i ]( value, args );
						}
					}

					return value;
				},

			};

		}
	)(),

};

window.JetFormBuilder = {
	getFieldValue( $field ) {
		const value = $field.val();

		return JetFormBuilderMain.filters.applyFilters(
			'forms/calculated-field-value',
			value,
			$field,
		);
	},
};