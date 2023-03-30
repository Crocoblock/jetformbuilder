<?php


namespace Jet_Form_Builder\Admin\Vui_Boxes;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Boxes_Repository {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return array();
	}

	/**
	 * @return Base_Vui_Box[]
	 */
	public function get_boxes(): array {
		return $this->rep_get_items();
	}

	/**
	 * @param Base_Vui_Box $box
	 *
	 * @return Boxes_Repository
	 */
	public function register_box( Base_Vui_Box $box ): Boxes_Repository {
		$this->rep_install_item_soft( $box );

		return $this;
	}
}
