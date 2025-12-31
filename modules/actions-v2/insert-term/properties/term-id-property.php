<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Term_Id_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'term_id';
	}

	public function get_label(): string {
		return __( 'Term ID (will update the term)', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 *
	 * @return bool
	 * @throws Action_Exception
	 */
	public function can_attach( string $key, $value ): bool {
		if ( ! parent::can_attach( $key, $value ) ) {
			return false;
		}
		if ( empty( $value ) ) {
			throw new Action_Exception( 'empty_field', esc_html( $key ) );
		}

		$term = get_term( (int) $value );

		if (
			! is_a( $term, \WP_Term::class )
		) {
			throw new Action_Exception(
				'failed',
				array(
					'term' => $term, // phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				)
			);
		}

		return true;
	}
}
