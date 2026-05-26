<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Action_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Action', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$format = '%s (%d)';

		$action_id = absint( $record['action_id'] ?? 0 );
		$fallback  = $this->get_fallback_name( $record );

		try {
			$action = jet_form_builder()->actions->get_action( $record['action_slug'] ?? '' );
		} catch ( Repository_Exception $exception ) {
			return sprintf(
				$format,
				esc_html( $this->get_display_name( $record, $fallback ) ),
				$action_id
			);
		}

		return sprintf(
			$format,
			esc_html( $this->get_display_name( $record, $action->get_name() ) ),
			$action_id
		);
	}

	private function get_fallback_name( array $record ): string {
		$action_slug = $record['action_slug'] ?? '';

		if ( is_string( $action_slug ) ) {
			$action_slug = trim( $action_slug );
		}

		return '' !== $action_slug
			? $action_slug
			: __( 'Undefined', 'jet-form-builder' );
	}

	private function get_display_name( array $record, string $fallback ): string {
		$action_name = $record['action_name'] ?? '';

		if ( ! is_string( $action_name ) ) {
			return $fallback;
		}

		$action_name = trim( $action_name );

		return '' !== $action_name ? $action_name : $fallback;
	}
}
