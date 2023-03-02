<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Condition_Field_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Condition_Render_State_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Or_Operator_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api\Add_Render_State_Endpoint_Option;
use Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api\Delete_Render_States_Endpoint;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

	/**
	 * @var Base_Condition_Type[]
	 */
	private $types;

	private function __construct() {
		$this->operators = new Operators();
		$this->functions = new Functions();

		$this->types = apply_filters(
			'jet-form-builder/conditional-block/types',
			array(
				new Condition_Render_State_Item(),
				new Or_Operator_Item(),
				new Condition_Field_Item(),
			)
		);
	}

	public function prepare( array $conditions ): array {
		$response = array();

		foreach ( $conditions as $condition ) {
			try {
				$item = $this->get_current_type( $condition );
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
			'functions'         => Tools::with_placeholder( $this->get_functions()->to_array() ),
			'operators'         => Tools::with_placeholder( $this->get_operators()->to_array() ),
			'render_states'     => Render_State::instance()->to_array(),
			'rest_add_state'    => Add_Render_State_Endpoint_Option::get_endpoint(),
			'rest_delete_state' => Delete_Render_States_Endpoint::get_endpoint(),
		);
	}

	public function get_operators(): Operators {
		return $this->operators;
	}

	public function get_functions(): Functions {
		return $this->functions;
	}

	/**
	 * @param array $condition
	 *
	 * @return Base_Condition_Type
	 * @throws Repository_Exception
	 */
	protected function get_current_type( array $condition ): Base_Condition_Type {
		foreach ( $this->types as $type ) {
			if ( ! $type->is_supported( $condition ) ) {
				continue;
			}
			$type->init( $condition );

			return $type;
		}

		throw new Repository_Exception( 'Undefined condition type' );
	}

}
