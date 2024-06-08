<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Bricks;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Compatibility\Jet_Engine\Jet_Engine;
use Bricks\Elements;

class Bricks {

	public function init_hooks() {
		add_action( 'init', array( $this, 'register_elements' ) );
	}

	/**
	 * @throws Repository_Exception
	 */
	public function register_elements() {
		/** @var Jet_Engine $module */
		$module = jet_form_builder()->compat( 'jet-engine' );

		$file_path = $module->get_dir( 'compatibility/bricks/check-mark/element.php' );
		Elements::register_element(
			$file_path,
			'',
			Check_Mark\Element::class
		);
	}

}
