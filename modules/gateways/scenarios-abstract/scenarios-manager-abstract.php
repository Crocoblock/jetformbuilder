<?php


namespace JFB_Modules\Gateways\Scenarios_Abstract;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Base_Gateway;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Actions_Manager
 *
 * @package JFB_Modules\Gateways\Paypal
 */
abstract class Scenarios_Manager_Abstract {

	const QUERY_VAR = 'jet_gateway_scenario';

	private $queried_scenario;
	// phpcs:disable PSR2.Classes.PropertyDeclaration.Underscore
	private $_logic_manager;
	private $_view_manager;
	// phpcs:enable PSR2.Classes.PropertyDeclaration.Underscore

	protected function __construct() {
		$this->logic()->rep_install();
		$this->view()->rep_install();
	}

	public function logic(): Scenario_Logic_Repository {
		return $this->_logic_manager;
	}

	public function view(): Scenarios_View_Repository {
		return $this->_view_manager;
	}

	protected function set_logic_manager( Scenario_Logic_Repository $manager ) {
		$this->_logic_manager = $manager;

		return $this;
	}

	protected function set_view_manager( Scenarios_View_Repository $manager ) {
		$this->_view_manager = $manager;

		return $this;
	}

	/**
	 * @param Base_Gateway $controller
	 *
	 * @return Scenario_Logic_Base
	 * @throws Repository_Exception
	 */
	public function get_logic( Base_Gateway $controller ): Scenario_Logic_Base {
		return $this->logic()->rep_get_item( $controller->get_current_scenario_id() );
	}

	/**
	 * @param $slug
	 *
	 * @return Scenario_View_Base
	 * @throws Repository_Exception
	 */
	public function get_view( $slug ): Scenario_View_Base {
		return $this->view()->get_view( $slug );
	}

	/**
	 * @return Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function query_logic(): Scenario_Logic_Base {
		try {
			if ( ! $this->queried_scenario ) {
				$scenario = sanitize_text_field(
					wp_unslash(
					// phpcs:ignore WordPress.Security.NonceVerification.Recommended
						$_GET[ self::QUERY_VAR ] ?? ''
					)
				);

				$this->queried_scenario = $this->logic()->rep_get_item( $scenario );
			}
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception( esc_html( $exception->getMessage() ) );
		}

		return $this->queried_scenario;
	}


}
