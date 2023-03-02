<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Gateway_Type_Column extends Column_Advanced_Base {

	protected $column = 'gateway_id';

	public function get_label(): string {
		return __( 'Gateway', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$gateway = parent::get_value( $record );

		try {
			return Gateway_Manager::instance()->get_gateway_controller( $gateway )->get_name();
		} catch ( Repository_Exception $exception ) {
			return 'none';
		}
	}

}