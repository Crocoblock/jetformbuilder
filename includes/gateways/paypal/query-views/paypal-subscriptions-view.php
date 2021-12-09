<?php


namespace Jet_Form_Builder\Gateways\Paypal\Query_Views;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\Post_Meta_View;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Paypal_Subscriptions_View extends Post_Meta_View {

	protected $custom_where;

	public function always_conditions(): array {
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

	/**
	 * @param array $custom_conditions
	 *
	 * @return View_Base
	 */
	public function set_custom_conditions( array $custom_conditions ): View_Base {
		$this->custom_where = $custom_conditions;

		return $this;
	}

	/**
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function custom_where(): string {
		$builder = ( new Query_Conditions_Builder() )->set_view( $this );

		$parts[] = $builder->prepare_conditions();

		if ( ! $this->custom_where ) {
			return 'WHERE ' . $parts[0];
		}

		$parts[] = sprintf(
			"(\n\r%s\n\r)",
			implode( "\r\n\tOR ", $builder->build_conditions_raw( $this->custom_where ) )
		);

		return 'WHERE ' . implode( ' AND ', $parts );
	}

	public function order_by(): array {
		return array(
			array(
				'column' => 'post_id',
				'sort'   => self::FROM_HIGH_TO_LOW,
			),
		);
	}

	public function prepare_row( $row ) {
		$value = Tools::decode_json( $row['meta_value'] ?? '[]' );

		return array_merge( array( '_ROW_ID' => $row['meta_id'] ), $value );
	}
}
