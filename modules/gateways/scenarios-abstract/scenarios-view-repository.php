<?php


namespace JFB_Modules\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Scenarios_View_Repository {

	use Repository_Pattern_Trait;

	/**
	 * @return Scenario_View_Base[]
	 */
	public function get_items(): array {
		return $this->rep_get_items();
	}

	/**
	 * @param $record
	 *
	 * @return Scenario_View_Base
	 * @throws Repository_Exception
	 */
	public function get_view( $record ): Scenario_View_Base {
		if ( is_array( $record ) ) {
			$scenario = $record['scenario'] ?? false;

			return $this->rep_get_item( $scenario );
		}

		return $this->rep_get_item( $record );
	}


	/**
	 * @param $scenario_id
	 *
	 * @return array
	 */
	public function load_view( $scenario_id ): array {
		try {
			return $this->get_view( $scenario_id )->load_view();
		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}

	public function get_editor_labels(): array {
		$labels = array();

		foreach ( $this->get_items() as $view ) {
			$labels[ $view::scenario_id() ] = $view->get_editor_labels();
		}

		return $labels;
	}

	public function get_editor_data(): array {
		$data = array();

		foreach ( $this->get_items() as $view ) {
			$data[ $view::scenario_id() ] = $view->get_editor_data();
		}

		return $data;
	}

	public function get_items_list(): array {
		$list = array();

		foreach ( $this->get_items() as $view ) {
			$list[] = array(
				'value' => $view::scenario_id(),
				'label' => $view->get_title(),
			);
		}

		return $list;
	}


}
