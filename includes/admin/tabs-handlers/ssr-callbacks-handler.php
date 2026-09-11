<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Ssr\Ssr_Blocked_Callback_Usages;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Settings tab for the global, admin-managed "Allowed Server-Side Callbacks" registry
 * (`Ssr_Callback_Registry`). This is the only place a custom "Server-Side callback"
 * function name can be added — saving a form never does it.
 *
 * @since 3.6.5.3
 */
class Ssr_Callbacks_Handler extends Base_Handler {

	public function slug() {
		return 'ssr-callbacks-tab';
	}

	public function on_load() {
		return array(
			'callbacks' => implode( "\n", Ssr_Callback_Registry::get_allowed_callbacks() ),
			'pending'   => Ssr_Callback_Registry::get_pending_callbacks(),
			'blocked'   => $this->get_blocked_usages(),
		);
	}

	/**
	 * Informational only — a denylisted callback can never be approved, so each entry only
	 * needs enough context for an admin to find and manually fix the form.
	 *
	 * @since 3.6.5.3
	 *
	 * @return array{form_id: int, form_title: string, edit_url: string, field: string, name: string}[]
	 */
	private function get_blocked_usages(): array {
		$usages = array();

		foreach ( Ssr_Blocked_Callback_Usages::get_usages() as $usage ) {
			$form_id = (int) ( $usage['form_id'] ?? 0 );

			if ( $form_id <= 0 ) {
				continue;
			}

			// `get_the_title()` runs the `the_title` filter, which HTML-entity-encodes the
			// raw post title (e.g. "–" becomes "&#8211;") for direct HTML output. This value
			// is sent as JSON and rendered by Vue's text interpolation, which does its own
			// escaping on display — so it needs the plain-text title, not the HTML-encoded
			// one, or the entities show up literally in the settings tab.
			$usages[] = array(
				'form_id'    => $form_id,
				'form_title' => html_entity_decode( get_the_title( $form_id ), ENT_QUOTES, 'UTF-8' ),
				'edit_url'   => get_edit_post_link( $form_id, 'raw' ) ?: admin_url( 'post.php?post=' . $form_id . '&action=edit' ),
				'field'      => (string) ( $usage['field'] ?? '' ),
				'name'       => (string) ( $usage['name'] ?? '' ),
			);
		}

		return $usages;
	}

	public function on_get_request() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- nonce verified in Base_Handler::on_raw_request(); each entry is sanitized via sanitize_text_field() below before use.
		$approve = isset( $_POST['approve'] ) ? (array) wp_unslash( $_POST['approve'] ) : array();
		// phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- nonce verified in Base_Handler::on_raw_request(); each entry is sanitized via sanitize_text_field() below before use.
		$reject = isset( $_POST['reject'] ) ? (array) wp_unslash( $_POST['reject'] ) : array();

		$approved_result = ! empty( $approve )
			? Ssr_Callback_Registry::approve_pending_callbacks( array_map( 'sanitize_text_field', $approve ) )
			: array(
				'approved' => array(),
				'rejected' => array(),
			);

		if ( ! empty( $reject ) ) {
			Ssr_Callback_Registry::discard_pending_callbacks( array_map( 'sanitize_text_field', $reject ) );
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- nonce verified in Base_Handler::on_raw_request(); each line is validated/sanitized via Server_Side_Rule::sanitize_callback_name() inside Ssr_Callback_Registry::save_allowed_callbacks() below.
		$raw = isset( $_POST['callbacks'] ) ? wp_unslash( $_POST['callbacks'] ) : null;

		$result = array(
			'saved'    => Ssr_Callback_Registry::get_allowed_callbacks(),
			'rejected' => array(),
		);

		if ( is_string( $raw ) ) {
			$lines  = preg_split( '/\r\n|\r|\n/', $raw );
			$result = Ssr_Callback_Registry::save_allowed_callbacks( $lines ?: array() );
		}

		wp_send_json_success(
			array_merge(
				$this->get_success_response_data(),
				array(
					'callbacks' => implode( "\n", $result['saved'] ),
					'rejected'  => array_merge( $result['rejected'], $approved_result['rejected'] ),
					'pending'   => Ssr_Callback_Registry::get_pending_callbacks(),
				)
			)
		);
	}

}
