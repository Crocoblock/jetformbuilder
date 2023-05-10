<?php


namespace Jet_Form_Builder\Modules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Modules\Advanced_Choices;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;

class Modules_Controller {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return array(
			new Jet_Style\Module(),
			new Switch_Page_On_Change\Module(),
			new Advanced_Choices\Module(),
		);
	}

	public function init_hooks() {
		/** @var Base_Module_It $item */
		foreach ( $this->rep_generate_items() as $item ) {
			$item->init_hooks();
		}
	}

	/**
	 * @param string $name_or_class
	 *
	 * @return Base_Module_It
	 * @throws Repository_Exception
	 */
	public function module( string $name_or_class ): Base_Module_It {
		return $this->rep_get_item( $name_or_class );
	}

	public function has_module( string $name_or_class ): bool {
		try {
			$this->module( $name_or_class );

			return true;
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	/**
	 * @param $item Base_Module_It
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if (
			! is_object( $item ) ||
			! ( $item instanceof Base_Module_It ) ||
			! $item->condition()
		) {
			$this->_rep_abort_this();
		}
	}

	/**
	 * @param $item Base_Module_It
	 */
	public function rep_after_install_item( $item ) {
		if ( $item instanceof Base_Module_After_Install_It ) {
			$item->on_install();
		}
	}
}