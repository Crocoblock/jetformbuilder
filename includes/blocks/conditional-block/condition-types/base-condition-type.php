<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Manager;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Base_Operator;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Condition_Type implements Arrayable {

	/**
	 * All condition options
	 *
	 * @var array
	 */
	protected $base;

	protected $operator;

	abstract public function is_supported( array $condition ): bool;

	/**
	 * @param array $condition
	 *
	 * @throws Repository_Exception
	 */
	public function init( array $condition ) {
		$this->base     = $condition;
		$this->operator = $condition['operator'] ?? '';

		Condition_Manager::instance()->get_operators()->isset_operator( $this->operator );
	}

	public function to_array(): array {
		$base = array(
			'operator' => $this->get_operator(),
		);

		return array_merge(
			$base,
			$this->get_operator_object()->to_response( $base, $this )
		);
	}

	public function get_operator_object(): Base_Operator {
		return Condition_Manager::instance()->get_operators()->rep_get_item_or_die( $this->operator );
	}

	public function get_operator(): string {
		return $this->operator;
	}

}
