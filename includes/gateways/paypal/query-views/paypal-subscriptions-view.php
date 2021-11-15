<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Views\Post_Meta_View;
use Jet_Form_Builder\Gateways\Paypal;

class Paypal_Subscriptions_View extends Post_Meta_View {

	public function conditions(): array {
		return array(
			array(
				'type'   => 'equal_column',
				'values' => array(
					'meta_key',
					Paypal\Controller::GATEWAY_META_KEY,
				),
			),
			array(
				'type'   => 'like',
				'values' => array(
					'meta_value',
					$this->json_pair( 'gateway_id', Paypal\Controller::ID ),
				),
			),
			array(
				'type'   => 'like',
				'values' => array(
					'meta_value',
					$this->json_pair( 'scenario', Paypal\Scenarios_Logic\Subscribe_Now::scenario_id() ),
				),
			),
		);
	}

	public function order_by(): array {
		return array(
			array(
				'column' => 'post_id',
				'sort'   => self::FROM_HIGH_TO_LOW,
			),
		);
	}

	public function prepare_row( $row ): array {
		$value = Tools::decode_json( $row['meta_value'] ?? '[]' );

		return array_merge( array( '_ROW_ID' => $row['meta_id'] ), $value );
	}
}
