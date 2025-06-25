<?php
namespace JFB_Modules\Validation;

use JFB_Modules\Validation\Handlers\Ajax_Validation_Handler;
use JFB_Modules\Validation\Handlers\Self_Validation_Handler;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Class_Validation_Handlers {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/validation-handlers',
			array(
				new Validation_Handler(),
				new Self_Validation_Handler(),
				new Ajax_Validation_Handler(),
			)
		);
	}

	public function get_handler( string $handler_id ) {
		return $this->rep_get_item( $handler_id );
	}

	public function get_handlers(): array {
		return $this->rep_get_items();
	}
}
