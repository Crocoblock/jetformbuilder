<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

/**
 * Class Scenarios_View_Manager
 *
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_View_Manager {

	private $current_view;

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/scenarios-view',
			array(
				new Scenarios_Views\Subscribe_Now(),
			)
		);
	}

	/**
	 * @return Scenarios_Views\Scenario_View_Base
	 */
	public function get_current_view(): Scenarios_Views\Scenario_View_Base {
		return $this->current_view;
	}

	/**
	 * @param $records
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function set_current_view_from_array( $records ): Scenarios_View_Manager {
		list( $first ) = $records;
		$this->set_current_view( $first );

		return $this;
	}

	/**
	 * @param $record
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function set_current_view( $record ): Scenarios_View_Manager {
		if ( is_string( $record ) ) {
			$this->current_view = Scenarios_Manager::instance()->get_view( $record );
		} elseif ( is_array( $record ) ) {
			$scenario = $record['scenario'] ?? false;

			$this->current_view = Scenarios_Manager::instance()->get_view( $scenario );
		}

		return $this;
	}

	/**
	 * @param $record
	 *
	 * @return $this
	 */
	public function set_current_view_soft( $record ): Scenarios_View_Manager {
		try {
			$this->set_current_view( $record );
		} catch ( Repository_Exception $exception ) {
		}

		return $this;
	}

	public function prepare_list( $list ): array {
		if ( ! $list || ! is_array( $list ) ) {
			return array();
		}
		$prepared = array();

		try {
			foreach ( $list as $record ) {
				$prepared[] = $this->get_current_view()->prepare_record( $record );
			}
		} catch ( Repository_Exception $exception ) {
			return $prepared;
		}

		return $prepared;
	}

	/**
	 * @param $list
	 *
	 * @return array
	 */
	public function prepare_list_with_columns( $list ): array {
		return array(
			$this->prepare_list( $list ),
			$this->get_current_view()->get_columns_headings(),
		);
	}

	/**
	 * @param $scenario_id
	 *
	 * @return array
	 */
	public function load_scenario( $scenario_id ): array {
		$paypal = Gateway_Manager::instance()->controller( Controller::ID );

		$entries = $paypal->get_gateway_entries(
			array(
				'scenario' => $scenario_id,
			)
		);

		return $this->set_current_view_soft( $scenario_id )->prepare_list_with_columns( $entries );
	}
}
