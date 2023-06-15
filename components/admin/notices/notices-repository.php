<?php


namespace JFB_Components\Admin\Notices;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Components\Admin\Notices\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Notices_Repository implements Interfaces\Admin_Notices_It, Arrayable {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return array();
	}

	/**
	 * @return Base_Notice[]
	 */
	public function get_notices(): array {
		return $this->rep_get_items();
	}

	public function to_array(): array {
		return Array_Tools::to_array( $this->get_notices() );
	}

	/**
	 * @param Base_Notice $notice
	 *
	 * @return Notices_Repository
	 */
	public function register_notice( Base_Notice $notice ): Interfaces\Admin_Notices_It {
		$this->rep_install_item_soft( $notice );

		return $this;
	}
}
