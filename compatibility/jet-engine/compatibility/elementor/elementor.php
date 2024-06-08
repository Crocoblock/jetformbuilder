<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Elementor;

class Elementor {

	public function init_hooks() {
		// compatibility with 3.7
		if (
			defined( 'ELEMENTOR_VERSION' ) &&
			version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' )
		) {
			add_action( 'elementor/widgets/register', array( $this, 'register_widgets' ) );
		} else {
			add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
		}
	}

	public function register_widgets( $manager ) {
		// compatibility with 3.7
		if ( method_exists( $manager, 'register' ) ) {
			$manager->register( new Check_Mark\Widget() );
		} else {
			$manager->register_widget_type( new Check_Mark\Widget() );
		}
	}

}
