<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Modifier extends Post_Modifier_Core {

	/**
	 * Return object fields
	 *
	 * @return string[] [type] [description]
	 */
	public function get_object_fields() {
		return apply_filters(
			'jet-form-builder/post-modifier/object-properties',
			array(
				'ID'          => array(
					'before_cb' => array( $this, 'before_attach_id' )
				),
				'post_status' => array(
					'before_cb' => array( $this, 'before_attach_status' )
				),
				'post_title',
				'post_content',
				'post_excerpt',
				'post_date',
				'post_date_gmt',
				'post_author',
				'_thumbnail_id'
			)
		);
	}

	public function get_actions() {
		return apply_filters(
			'jet-form-builder/post-modifier/object-actions',
			array(
				'update' => array(
					'action' => array( $this, 'update_post' ),
					'after'  => array( $this, 'after_do_action' )
				),
				'insert' => array(
					'action' => array( $this, 'insert_post' ),
					'after'  => array( $this, 'after_do_action' )
				),
				'trash'  => array(
					'action' => array( $this, 'trash_post' )
				),
			)
		);
	}

	public function get_external_properties() {
		return apply_filters(
			'jet-form-builder/post-modifier/external-actions',
			array(
				'meta'         => array(
					'condition_cb' => true,
					'match_cb'     => array( $this, 'attach_post_meta' )
				),
				'terms'        => array(
					'condition_cb' => function () {
						return false !== strpos( $this->current_prop, 'jet_tax__' );
					},
					'match_cb'     => array( $this, 'attach_post_terms' ),
					'after_action' => array( $this, 'after_action_terms' )
				),
				'je_relations' => array(
					'condition_cb' => function () {
						return function_exists( 'jet_engine' )
						       && jet_engine()->relations
						       && jet_engine()->relations->is_relation_key( $this->current_prop );
					},
					'match_cb'     => array( $this, 'attach_je_relations' ),
					'after_action' => array( $this, 'after_action_je_relations' )
				)
			)
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function insert_post() {
		$this->inserted_post_id = wp_insert_post( $this->source_arr );

		$this->is_valid_post_id();

		if ( ! empty( $this->source_arr['post_title'] ) ) {
			return;
		}

		$post_type_obj = get_post_type_object( $this->source_arr['post_type'] );
		$title         = $post_type_obj->labels->singular_name . ' #' . $this->inserted_post_id;

		wp_update_post( array(
			'ID'         => $this->inserted_post_id,
			'post_title' => $title,
		) );
	}

	/**
	 * @throws Action_Exception
	 */
	public function update_post() {
		$this->inserted_post_id = wp_update_post( $this->source_arr );

		$this->is_valid_post_id();
	}

	/**
	 * @throws Action_Exception
	 */
	public function trash_post() {
		$post = wp_trash_post( $this->source_arr['ID'] ?? 0 );

		if ( ! is_a( $post, \WP_Post::class ) ) {
			throw new Action_Exception(
				'failed',
				$this->source_arr
			);
		}
	}

	/**
	 * @throws Action_Exception
	 */
	public function is_valid_post_id() {
		if ( is_wp_error( $this->inserted_post_id ) ) {
			throw new Action_Exception(
				'failed',
				$this->inserted_post_id->get_error_data(),
				$this->source_arr
			);
		}
	}

	public function after_do_action() {
		$post_id = $this->inserted_post_id;

		$this->add_inserted_post_id( $post_id );
		$this->add_context_once( $post_id );

		if ( $this->suppress_filters ) {
			return;
		}

		/**
		 * Perform any actions after post inserted/updated
		 */
		do_action(
			'jet-form-builder/action/after-post-' . $this->action,
			$this->get_handler()->get_current_action(),
			$this->get_handler()
		);
	}

	public function after_action_terms() {
		if ( ! in_array( $this->action, array( 'insert', 'update' ) ) ) {
			return;
		}
		$taxonomies = $this->get_current_external();

		foreach ( $taxonomies as $tax => $terms ) {
			wp_set_post_terms( $this->inserted_post_id, $terms, $tax );
		}
	}

	public function after_action_je_relations() {
		if ( ! in_array( $this->action, array( 'insert', 'update' ) )
		     || ! function_exists( 'jet_engine' )
		     || ! isset( jet_engine()->relations )
		) {
			return;
		}
		$relations_input = $this->get_current_external();

		foreach ( $relations_input as $rel_key => $rel_posts ) {
			jet_engine()->relations->process_meta(
				false,
				$this->inserted_post_id,
				$rel_key,
				$rel_posts
			);
		}
	}

	public function add_inserted_post_id( $post_id ) {
		$handler = $this->get_handler();

		if ( $handler->in_loop() ) {
			return;
		}

		if ( empty( $handler->response_data['inserted_post_id'] ) ) {
			$handler->response_data['inserted_post_id'] = $post_id;
			$handler->request_data['inserted_post_id']  = $post_id;
		} else {
			$handler->response_data['inserted_posts'][] = array(
				'post_id'   => $post_id,
				'action_id' => $handler->get_current_action()->_id,
			);
		}
	}

	public function add_context_once( $post_id ) {
		$handler = $this->get_handler();

		if ( $handler->in_loop() ) {
			return;
		}
		/**
		 * For Redirect to Page action
		 */
		$handler->add_context_once(
			'insert_post',
			array(
				Insert_Post::get_context_post_key( $post_id ) => array_merge(
					array(
						'__action' => $this->action,
						'ID'       => $post_id,
					),
					$this->source_arr
				),
			)
		);
	}

	public function get_handler() {
		return jet_form_builder()->form_handler->action_handler;
	}

	/**
	 * @throws Silence_Exception|Action_Exception
	 */
	public function before_attach_id() {
		if ( empty( $this->current_value ) ) {
			throw new Action_Exception( 'empty_field', $this->current_prop, $this->current_value );
		}

		$post = get_post( (int) $this->current_value );

		if (
			! is_a( $post, \WP_Post::class )
			|| (
				absint( $post->post_author ) !== get_current_user_id()
				&& ! current_user_can( 'edit_post', $post->ID )
			)
		) {
			throw new Action_Exception(
				'failed',
				array(
					'post' => $post,
				)
			);
		}

		$this->set_action_once( 'update' );
	}

	public function attach_post_terms() {
		$tax = str_replace( 'jet_tax__', '', $this->current_prop );

		$taxonomies = $this->get_current_external();

		if ( ! isset( $taxonomies[ $tax ] ) ) {
			$taxonomies[ $tax ] = array();
		}

		if ( ! is_array( $this->current_value ) ) {
			$taxonomies[ $tax ][] = absint( $this->current_value );
		} else {
			$taxonomies[ $tax ] = array_merge( $taxonomies[ $tax ], array_map( 'absint', $this->current_value ) );
		}

		$this->set_current_external( $taxonomies );
	}

	public function attach_post_meta() {
		if ( ! Tools::is_repeater_val( $this->current_value ) ) {
			$this->set_meta( array(
				$this->current_prop => $this->current_value
			) );

			return;
		}

		$this->set_meta( array(
			$this->current_prop => Tools::prepare_repeater_value(
				$this->current_value,
				$this->fields_map
			)
		) );
	}

	public function attach_je_relations() {
		$this->set_current_external( array(
			$this->current_prop => $this->current_value
		) );
	}


	/**
	 * To skip setting this property
	 * @throws Silence_Exception
	 *
	 * To exclude this property from $this->source_arr
	 * @throws Modifier_Exclude_Property
	 */
	public function before_attach_status() {
		switch ( $this->current_value ) {
			case 'keep-current':
				throw new Modifier_Exclude_Property( 'Keep current status, exclude this prop' );
			case 'trash':
				$this->set_action( 'trash' );

				break;
			case 'from-field':
				throw new Silence_Exception( 'Status must be replaced by another field' );
			default:
				if ( empty( $this->current_value ) ) {
					throw new Silence_Exception( 'Empty status' );
				}
		}
	}

}