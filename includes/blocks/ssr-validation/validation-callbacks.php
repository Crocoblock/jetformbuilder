<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Parser_Context;
use JET_SM\Gutenberg\Block_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Validation_Callbacks {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/validation-callbacks',
			array(
				new Is_User_Login_Unique(),
				new Is_User_Email_Unique(),
			)
		);
	}

	/**
	 * @return Base_Validation_Callback[]
	 */
	public function get_items(): array {
		return $this->rep_get_items();
	}


	public function validate( $value, string $function_name, Parser_Context $context ): bool {
		try {
			/** @var Base_Validation_Callback $callback */
			$callback = $this->rep_get_item( $function_name );
		} catch ( Repository_Exception $exception ) {
			return $this->validate_custom( $value, $function_name, $context );
		}

		return $callback->is_valid( $value, $context );
	}

	protected function validate_custom( $value, string $function_name, Parser_Context $context ): bool {
		$name = $this->validate_callback( $function_name, $context );

		if ( ! $name ) {
			return false;
		}

		return (bool) call_user_func( $name, $value, $context );
	}

	protected function validate_callback( string $function_name, Parser_Context $context ): string {
		$name    = preg_replace( '/[^\w]/i', '', $function_name );
		$form_id = jet_fb_handler()->get_form_id();

		if ( ! function_exists( $name ) || ! $form_id ) {
			return '';
		}

		$all_blocks = Block_Helper::get_blocks_by_post( $form_id );

		$block = Block_Helper::find_block(
			function ( $block ) use ( $name, $context ) {
				if (
					empty( $block['attrs']['validation']['rules'] ) ||
					empty( $block['attrs']['name'] ) ||
					$block['attrs']['name'] !== $context->get_name()
				) {
					return false;
				}

				foreach ( $block['attrs']['validation']['rules'] as $rule ) {
					if (
						'ssr' !== ( $rule['type'] ?? '' ) ||
						( $rule['value'] ?? '' ) !== $name
					) {
						continue;
					}

					return true;
				}

				return false;
			},
			$all_blocks
		);

		return empty( $block ) ? '' : $function_name;
	}
}
