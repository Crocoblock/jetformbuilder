<?php


namespace JFB_Modules\Post_Type\Actions\Traits;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use JFB_Modules\Post_Type\Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Import_Form_Trait {

	/**
	 * Import form by data
	 *
	 * @param array $form_data [description]
	 *
	 * @return [type]            [description]
	 */
	public function import_form( $form_data = array() ) {

		$form_data = wp_parse_args(
			$form_data,
			array(
				'post_title'   => 'New form',
				'post_status'  => 'publish',
				'post_content' => '',
			)
		);

		$form_data['post_content'] = wp_slash( $form_data['post_content'] );

		if ( isset( $form_data['meta_input'] ) && is_array( $form_data['meta_input'] ) ) {
			$allowed_meta = apply_filters(
				'jet-form-builder/import-form/allowed-meta',
				array(
					'_jf_args',
					'_jf_messages',
					'_jf_preset',
					'_jf_recaptcha',
					'_jf_actions',
					'_jf_validation',
					'_jf_gateways',
					'_jf_wc_details',
					'_jf_address_autocomplete',
					'_jf_limit_responses',
					'_jf_limit_responses_counters',
					'_jf_save_progress',
					'_jf_schedule_form',
				)
			);

			$safe_meta_input = array();

			foreach ( $form_data['meta_input'] as $meta_key => $meta_value ) {
				if ( ! in_array( $meta_key, $allowed_meta, true ) ) {
					continue;
				}

				if ( ! is_string( $meta_value ) ) {
					continue;
				}

				json_decode( $meta_value );

				if ( json_last_error() !== JSON_ERROR_NONE ) {
					continue;
				}

				$safe_meta_input[ $meta_key ] = wp_slash( $meta_value );
			}

			$form_data['meta_input'] = $safe_meta_input;
		}

		$this->sync_render_states_from_actions( $form_data );

		$post_id = wp_insert_post(
			array_merge(
				$form_data,
				array(
					'post_type' => Module::SLUG,
				)
			)
		);

		if ( is_wp_error( $post_id ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $post_id->get_error_message(), 'Error' );
		}

		return $post_id;
	}

	private function sync_render_states_from_actions( array $form_data ) {

		if (
			empty( $form_data['meta_input'] )
			|| ! is_array( $form_data['meta_input'] )
			|| empty( $form_data['meta_input']['_jf_actions'] )
			|| ! is_string( $form_data['meta_input']['_jf_actions'] )
		) {
			return;
		}

		$actions_raw = $form_data['meta_input']['_jf_actions'] ?? '';

		$actions = json_decode( wp_unslash( $actions_raw ), true );



		if ( ! is_array( $actions ) ) {
			return;
		}

		$slugs = array();

		foreach ( $actions as $action ) {
			if ( empty( $action['events'] ) || ! is_array( $action['events'] ) ) {
				continue;
			}

			foreach ( $action['events'] as $event ) {
				if ( ! is_string( $event ) ) {
					continue;
				}

				if ( 0 !== strpos( $event, 'ON.' ) ) {
					continue;
				}

				$slug = substr( $event, 3 );

				if ( $slug ) {
					$slugs[] = $slug;
				}
			}
		}

		$slugs = array_unique( $slugs );

		if ( ! $slugs ) {
			return;
		}
		
		$render         = Render_State::instance();
		$current_states = $render->get_states(); 
		$existing       = wp_list_pluck( $current_states, 'value' );

		foreach ( $slugs as $slug ) {
			if ( in_array( $slug, $existing, true ) ) {
				continue;
			}

			$current_states[] = array(
				'value'           => $slug,
				'label'           => $slug,
				'can_be_switched' => true,
			);
		}

		Render_State::update_states( $current_states );
	}

}
