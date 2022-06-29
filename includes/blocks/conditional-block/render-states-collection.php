<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Base_Render_State;
use Jet_Form_Builder\Classes\Arrayable\Collection;

class Render_States_Collection extends Collection {

	/**
	 * @param Base_Render_State $item
	 *
	 * @return Collection
	 */
	public function push( Base_Render_State $item ): Collection {
		return parent::add( $item );
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
