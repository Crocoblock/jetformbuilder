<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;


use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Subscriptions_Count extends Paypal_Subscriptions_View {

	/**
	 * @return array[]
	 * @throws Query_Builder_Exception
	 */
	public function select_columns(): array {
		return array(
			array(
				'as' => sprintf( 'COUNT( %s ) as total', $this->column( 'meta_id' ) ),
			),
		);
	}

	public function limit(): array {
		return array( 1 );
	}

	public function prepare_row( $value ) {
		return (int) $value;
	}

}