<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;

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

	protected function __construct() {
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
			$response[] = $item->to_array();
		}

		return $response;
	}

	public function to_array(): array {
		return array(
			'functions' => Tools::with_placeholder( $this->get_functions()->to_array() ),
			'operators' => Tools::with_placeholder( $this->get_operators()->to_array() ),
		);
	}

	public function get_operators(): Operators {
		return $this->operators;
	}

	public function get_functions(): Functions {
		return $this->functions;
	}

}
