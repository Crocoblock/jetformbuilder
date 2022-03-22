<?php


namespace Jet_Form_Builder\Admin\Notices;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;

class Notices_Repository implements Admin_Notices_Interface {

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

	/**
	 * @param Base_Notice $notice
	 *
	 * @return Notices_Repository
	 */
	public function register_notice( Base_Notice $notice ): Admin_Notices_Interface {
		$this->rep_install_item_soft( $notice );

		return $this;
	}
}
