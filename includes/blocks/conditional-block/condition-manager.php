<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api\Add_Render_State_Endpoint_Option;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Endpoint;

/**
 * @method static Condition_Manager instance()
 *
 * Class Condition_Manager
 * @package Jet_Form_Builder\Blocks\Conditional_Block
 */
class Condition_Manager implements Arrayable {

	use Instance_Trait;

	private $operators;
	private $functions;

	private function __construct() {
		$this->operators = new Operators();
		$this->functions = new Functions();
	}

	public function prepare( array $conditions ): array {
		$response = array();

		foreach ( $conditions as $condition ) {
			try {
				$item = new Condition_Item( $condition );
			} catch ( Repository_Exception $exception ) {
				continue;
			}

			/**
			 * Catch Condition_Exception on this level,
			 * because in future we can implement "OR" operator
			 * between all conditions.
			 *
			 * Here we could access the global option
			 */
			try {
				$response[] = $item->to_array();
			} catch ( Condition_Exception $exception ) {
				/**
				 * This exception catches in
				 *
				 * @see \Jet_Form_Builder\Blocks\Types\Base::render_callback_field
				 */
				throw new Render_Empty_Field( 'This is temporary.' );
			}
		}

		return $response;
	}

	public function to_array(): array {
		return array(
			'functions'      => Tools::with_placeholder( $this->get_functions()->to_array() ),
			'operators'      => Tools::with_placeholder( $this->get_operators()->to_array() ),
			'render_states'  => Render_State::instance()->to_array(),
			'rest_add_state' => Add_Render_State_Endpoint_Option::get_endpoint(),
		);
	}

	public function get_operators(): Operators {
		return $this->operators;
	}

	public function get_functions(): Functions {
		return $this->functions;
	}

}
