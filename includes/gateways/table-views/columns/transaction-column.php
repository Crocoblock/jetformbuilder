<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Transaction_Column extends Column_Advanced_Base {

	protected $column = 'transaction_id';

	public function get_label(): string {
		return __( 'Transaction ID', 'jet-form-builder' );
	}

}