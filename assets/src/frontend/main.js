import initCommon from './init/common';
import initElementor from './init/elementor';

(
	function ( $ ) {
		$( initCommon );
		$( window ).on( 'elementor/frontend/init', initElementor );
	}
)( jQuery );