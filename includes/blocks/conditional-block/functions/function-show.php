<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

class Function_Show extends Base_Function {

	const ID = 'show';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Show if...', 'jet-form-builder' );
	}

	/**
	 * @param array $base
	 * @param Condition_Item $item
	 *
	 * @return array
	 * @throws Condition_Exception
	 */
	public function to_response( array $base, Condition_Item $item ): array {
		$result = $base['check_result'] ?? null;

		// if operator not checked on server-side
		if ( is_null( $result ) ) {
			return array();
		}

		if ( ! $result ) {
			throw new Condition_Exception( 'Because I can.' );
		}

		return array();
	}

}