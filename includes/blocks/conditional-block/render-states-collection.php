<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Base_Render_State;
use Jet_Form_Builder\Classes\Arrayable\Collection;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Render_States_Collection extends Collection {

	private $exclude_list = array();

	/**
	 * @param Base_Render_State $item
	 *
	 * @return Collection
	 */
	public function push( Base_Render_State $item ): Collection {
		array_push( $this->exclude_list, ...$item->exclude_states() );

		return $this->add( $item );
	}

	public function confirm(): Collection {
		$positions = array();

		foreach ( $this as $position => $state ) {
			$current = get_class( $state );

			if ( ! in_array( $current, $this->exclude_list, true ) ) {
				continue;
			}

			$positions[] = $position;
		}

		$this->remove( $positions );
		$this->exclude_list = array();

		return $this;
	}

	public function render(): string {
		$response = '';

		/** @var Base_Render_State $item */
		foreach ( $this as $item ) {
			$response .= "\r\n" . $item->render();
		}

		return $response;
	}

}
