<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\Post_Meta_View;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Recurring_Payments_View extends Post_Meta_View {

	public function always_conditions(): array {
		return array(
			array(
				'type'   => 'equal_column',
				'values' => array(
					'meta_key',
					Paypal\Events_Handlers\Payment_Sale_Completed::SLUG,
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

	/**
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function custom_where(): string {
		$builder = ( new Query_Conditions_Builder() )->set_view( $this );

		/**
		 * Receiving recurring payments (SUBSCRIBE_NOW scenario)
		 */
		$parts[] = "\r\n(\r\n" . $builder->prepare_conditions() . "\r\n)\r\n";

		/**
		 * Receiving orders (PAY_NOW scenario)
		 */
		$parts[] = "1 = 1
        AND `wp_postmeta`.`meta_key` = '_jet_gateway_data'
        AND ( 
            `wp_postmeta`.`meta_value` LIKE '%\"gateway_id\":\"paypal\"%' 
            OR 
            `wp_postmeta`.`meta_value` LIKE '%\"gateway\":\"PayPal Checkout\"%' 
            )
        AND ( 
            `wp_postmeta`.`meta_value` NOT LIKE '%\"scenario\":%' 
            OR 
            `wp_postmeta`.`meta_value` LIKE '%\"scenario\":\"PAY_NOW\"%' 
            )";


		return 'WHERE (' . implode( "\r\n) OR (\r\n", $parts ) . "\r\n)";
	}

	public function order_by(): array {
		return array(
			array(
				'column' => 'meta_id',
				'sort'   => self::FROM_HIGH_TO_LOW,
			),
		);
	}

	public function prepare_row( $row ) {
		$value = Tools::decode_json( $row['meta_value'] ?? '[]' );

		return array_merge( array( '_ROW_ID' => $row['meta_id'] ), $value );
	}


}
