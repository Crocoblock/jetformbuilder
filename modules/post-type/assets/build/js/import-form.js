(
	function ( $ ) {
		const onLoad = () => {

			const { template = '', id = '' } = window.JetFormBuilderImportForm;

			const $newFormButton = $( '.page-title-action' );

			if ( $newFormButton.length ) {
				$newFormButton.after( template );
			}

			$( document ).on( 'click', '#' + id + '-trigger', function () {
				$( '#' + id ).css( 'display', 'inline-flex' );
			} );
		};


		$( onLoad );

	}
)( jQuery );