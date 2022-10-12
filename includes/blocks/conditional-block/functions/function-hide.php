<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

class Function_Hide extends Base_Function {

	const ID = 'hide';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Hide if...', 'jet-form-builder' );
	}

	/**
	 * @param array $base
	 * @param Base_Condition_Type $item
	 *
	 * @return array
	 * @throws Condition_Exception
	 */
	public function to_response( array $base, Base_Condition_Type $item ): array {
		$result = $base['check_result'] ?? null;

		// if operator not checked on server-side
		if ( is_null( $result ) ) {
			return array();
		}

		if ( $result ) {
			throw new Condition_Exception( 'Because I can.' );
		}

		return array();
	}

}