<?php


namespace JFB_Modules\Option_Query;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Option_Query\Interfaces\Option_Query_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Repository_Pattern_Interface {

	use Repository_Pattern_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'option-query';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function rep_instances(): array {
		return array(
			new Manual_Query(),
			new Posts_Query(),
			new Terms_Query(),
			new Legacy_Generator_Query(),
			new Meta_Query(),
		);
	}

	/**
	 * @param string $slug
	 *
	 * @return Option_Query_It
	 * @throws Repository_Exception
	 */
	public function get_query( string $slug ): Option_Query_It {
		$this->install_all();

		return $this->rep_clone_item( $slug );
	}

	public function install( Option_Query_It $query ) {
		$this->rep_install_item_soft( $query );
	}

	/**
	 * Install query types only while resolving first type
	 */
	private function install_all() {
		if ( $this->rep_isset_item( 'manual_input' ) ) {
			return;
		}

		$this->rep_install();

		do_action( 'jet-form-builder/option-query/on-install', $this );
	}
}
