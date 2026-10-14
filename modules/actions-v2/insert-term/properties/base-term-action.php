<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;
use JFB_Modules\Actions_V2\Insert_Term\Insert_Term_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Term_Action extends Base_Modifier_Action {

	protected $inserted_id = 0;

	/**
	 * Inserted ID getter.
	 *
	 * @return integer
	 */
	public function get_inserted_id(): int {
		return $this->inserted_id;
	}

	public function do_after() {
		if ( ! $this->inserted_id ) {
			return;
		}
		$this->add_inserted_term_id();
		$this->add_context_once();

		/**
		 * Perform any actions after term inserted/updated
		 */
		do_action(
			'jet-form-builder/action/after-term-' . $this->get_id(),
			jet_fb_action_handler()->get_current_action(),
			jet_fb_action_handler(),
			$this
		);
	}

	public function add_inserted_term_id() {
		$handler = jet_fb_action_handler();

		if ( ! $handler->in_loop() ) {
			return;
		}

		if ( empty( $handler->response_data['inserted_term_id'] ) ) {
			$handler->response_data['inserted_term_id'] = $this->inserted_id;
		} else {
			$handler->response_data['inserted_terms'][] = array(
				'term_id'   => $this->inserted_id,
				'action_id' => $handler->get_current_action()->_id,
			);
		}

		$this->add_taxonomy_fields();
	}

	/**
	 * Per-taxonomy fields: inserted_term_id_{taxonomy}_{action_id},
	 * inserted_term_title_{taxonomy}_{action_id}.
	 * The names are the same as in the editor (see insertedTermNames.js).
	 * The action ID makes the name stable: it does not depend on the order of actions.
	 */
	protected function add_taxonomy_fields() {
		$suffix = $this->get_inserted_field_suffix();

		if ( ! $suffix ) {
			return;
		}

		jet_fb_context()->update_request( $this->inserted_id, 'inserted_term_id_' . $suffix );
		jet_fb_context()->update_request( $this->get_inserted_title(), 'inserted_term_title_' . $suffix );
	}

	/**
	 * @return string {taxonomy}_{action_id}
	 */
	protected function get_inserted_field_suffix(): string {
		$current  = jet_fb_action_handler()->get_current_action();
		$taxonomy = str_replace( 'jet_tax__', '', (string) ( $current->settings['taxonomy'] ?? '' ) );

		if ( ! $taxonomy ) {
			return '';
		}

		return $taxonomy . '_' . $current->_id;
	}

	/**
	 * WordPress stores term names with HTML entities (A &amp; B, Men&#039;s).
	 * Decode them to a readable text, and strip tags that could appear after decoding
	 * (e.g. from a submitted "&lt;b&gt;"), so the value is safe to use in an email.
	 */
	protected function get_inserted_title(): string {
		$term = get_term( $this->inserted_id );

		if ( ! $term || is_wp_error( $term ) ) {
			return '';
		}

		return sanitize_text_field( wp_specialchars_decode( $term->name, ENT_QUOTES ) );
	}

	public function add_context_once() {
		if ( ! jet_fb_action_handler()->in_loop() ) {
			return;
		}
		/**
		 * For other actions executed after Insert Term,
		 * e.g. Send Email, Insert Post, Connect Related Items
		 */
		jet_fb_action_handler()->add_context_once(
			'insert_term',
			array(
				Insert_Term_Action::get_context_term_key( $this->inserted_id ) => array_merge(
					array(
						'__action' => $this->get_id(),
						'term_id'  => $this->inserted_id,
					),
					$this->modifier->source_arr
				),
			)
		);
	}

	public function pre_check(): bool {
		return apply_filters(
			'jet-form-builder/action/insert-term/pre-check',
			true,
			$this->modifier->source_arr,
			jet_fb_action_handler()->get_current_action()
		);
	}

	public function get_inserted(): int {
		return $this->inserted_id;
	}

	public function user_can_manage_taxonomy_terms( $taxonomy ) {
		$taxonomy_object = get_taxonomy( $taxonomy );

		if ( ! $taxonomy_object ) {
			return false;
		}

		$capability = $taxonomy_object->cap->edit_terms;

		return current_user_can( $capability );
	}
}
