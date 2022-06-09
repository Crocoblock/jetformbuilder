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

	/** @var Render_States_Collection */
	private $current;

	protected function __construct() {
		$this->current = new Render_States_Collection();
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
	 * @return $this
	 */
	public function set_current(): Render_State {
		if ( count( $this->current ) ) {
			return $this;
		}
		$items = $this->rep_get_items();

		/** @var Base_Render_State $render_state */
		foreach ( $items as $render_state ) {
			if ( ! $render_state->is_supported() ) {
				continue;
			}
			$this->current->push( $render_state );
		}

		$this->set_current_default();

		return $this;
	}

	public function set_current_default() {
		if ( count( $this->current ) ) {
			return;
		}

		try {
			/** @var Default_State $state */
			$state = $this->rep_get_item( Default_State::class );
		} catch ( Repository_Exception $exception ) {
			wp_die(
				esc_html__( 'Something went wrong', 'jet-form-builder' ),
				esc_html__( 'Error', 'jet-form-builder' )
			);
		}

		$this->current->push( $state );
	}

	public function to_array(): array {
		return Array_Tools::to_array( $this->rep_get_items() );
	}

	public function clear_current(): Render_State {
		$this->current = new Render_States_Collection();

		return $this;
	}

	/**
	 * @return Render_States_Collection
	 */
	public function get_current(): Render_States_Collection {
		return $this->current;
	}


}
