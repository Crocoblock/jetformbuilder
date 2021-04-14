export const wrapperClasses = {
	methods: {
		wrapperClasses() {

			var wrapperClassesList = [ 'cx-vui-component' ];

			if ( this.wrapperCss.length ) {
				this.wrapperCss.forEach( className => {
					wrapperClassesList.push( 'cx-vui-component--' + className );
				} );
			}

			return wrapperClassesList;

		},
	}
}