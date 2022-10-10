window.JetFormBuilderMain = {

	filters: (
		function () {

			var callbacks = {};

			return {

				addFilter: function ( name, callback ) {
					console.warn(
						`This method is deprecated since 
						JetFormBuilder 3.0.0. Use wp.hooks.addFilter instead.`,
					);

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