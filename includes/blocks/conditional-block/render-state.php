<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;


use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Base_Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Default_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Example_Render_State;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Render_State instance()
 *
 * Class Render_State
 * @package Jet_Form_Builder\Blocks\Conditional_Block
 */
class Render_State implements Arrayable {

	use Repository_Pattern_Trait;
	use Instance_Trait;

	/** @var Base_Render_State|null */
	private $current;

	protected function __construct() {
		$this->rep_install();
	}

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/render-states',
			array(
				new Default_State(),
				new Example_Render_State(),
			)
		);
	}

	/**
	 * @param string $slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function get_item( string $slug ) {
		return $this->rep_get_item( $slug );
	}

	public function is_multiple(): bool {
		$keys = $this->rep_get_keys();

		return ( count( $keys ) > 1 );
	}

	/**
	 * @param string $slug
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function set_current( string $slug ): Render_State {
		return $this->set_current_state( $this->get_item( $slug ) );
	}

	public function to_array(): array {
		return Array_Tools::to_array( $this->rep_get_items() );
	}

	public function set_current_state( Base_Render_State $current ): Render_State {
		$this->current = $current;

		return $this;
	}

	public function clear_current(): Render_State {
		$this->current = null;

		return $this;
	}

	/**
	 * @return Base_Render_State|null
	 */
	public function get_current() {
		return $this->current;
	}


}