<?php

namespace JFB_Modules\Actions_V2\Delete_User;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_User_Action extends Base {

	const TARGET_CURRENT_USER = 'current_user';
	const TARGET_FIELD        = 'field';

	public function get_name() {
		return __( 'Delete User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'delete_user';
	}

	public function action_attributes() {
		return array(
			'target_user'            => array(
				'default' => self::TARGET_CURRENT_USER,
			),
			'user_id_field'          => array(
				'default' => '',
			),
			'confirmation_field'     => array(
				'default' => '',
			),
			'current_password_field' => array(
				'default' => '',
			),
			'delete_content'         => array(
				'default' => false,
			),
			'post_types'             => array(
				'default' => array(),
			),
			'delete_media'           => array(
				'default' => false,
			),
			'delete_cct'             => array(
				'default' => false,
			),
			'cct_types'              => array(
				'default' => array(),
			),
		);
	}

	/**
	 * @param array          $request
	 * @param Action_Handler $handler
	 *
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$user_id         = $this->resolve_user_id( $request );
		$is_current_user = get_current_user_id() === $user_id;

		$this->guard_user_deletion( $user_id );
		$this->ensure_deletion_confirmed( $request );
		$this->ensure_current_password_confirmed( $request );

		if ( ! empty( $this->settings['delete_media'] ) ) {
			$this->delete_authored_attachments( $user_id );
		}

		if ( ! empty( $this->settings['delete_cct'] ) ) {
			$this->delete_jet_engine_cct_items( $user_id );
		}

		if ( ! empty( $this->settings['delete_content'] ) ) {
			$this->process_authored_posts( $user_id );
		}

		$result = $this->delete_user( $user_id );

		if ( ! $result ) {
			throw new Action_Exception( 'failed' );
		}

		jet_fb_context()->update_request( $user_id, 'deleted_user_id' );
		$handler->add_context_once(
			$this->get_id(),
			array(
				'deleted_user_id' => $user_id,
			)
		);

		if ( $is_current_user && function_exists( 'wp_logout' ) ) {
			wp_logout();
		}
	}

	/**
	 * @throws Action_Exception
	 */
	private function resolve_user_id( array $request ): int {
		$target = $this->settings['target_user'] ?? self::TARGET_CURRENT_USER;

		if ( self::TARGET_FIELD !== $target ) {
			$user_id = get_current_user_id();

			if ( ! $user_id ) {
				throw new Action_Exception( 'not_logged_in' );
			}

			return $user_id;
		}

		$field = $this->settings['user_id_field'] ?? '';
		if ( ! $field ) {
			throw new Action_Exception( 'empty_field', 'User ID' );
		}

		$user_id = absint( $request[ $field ] ?? 0 );
		if ( ! $user_id ) {
			throw new Action_Exception( 'empty_field', 'User ID' );
		}

		return $user_id;
	}

	/**
	 * @throws Action_Exception
	 */
	private function ensure_deletion_confirmed( array $request ) {
		$field = $this->settings['confirmation_field'] ?? '';

		if ( ! $field ) {
			return;
		}

		if ( empty( $request[ $field ] ) || ! $this->is_truthy_confirmation_value( $request[ $field ] ) ) {
			throw new Action_Exception( 'confirmation_required' );
		}
	}

	/**
	 * @throws Action_Exception
	 */
	private function ensure_current_password_confirmed( array $request ) {
		$field = $this->settings['current_password_field'] ?? '';

		if ( ! $field ) {
			return;
		}

		$current_user_id = get_current_user_id();

		if ( ! $current_user_id ) {
			throw new Action_Exception( 'not_logged_in' );
		}

		$password = $request[ $field ] ?? '';

		if ( is_array( $password ) ) {
			$password = reset( $password );
		}

		$password = is_scalar( $password ) ? (string) $password : '';

		if ( '' === $password ) {
			throw new Action_Exception( 'empty_field', 'Current password' );
		}

		$current_user = get_user_by( 'ID', $current_user_id );

		if (
			! is_a( $current_user, \WP_User::class ) ||
			! wp_check_password( $password, $current_user->user_pass, $current_user->ID )
		) {
			throw new Action_Exception( 'incorrect_current_password' );
		}
	}

	private function is_truthy_confirmation_value( $value ): bool {
		if ( is_array( $value ) ) {
			foreach ( $value as $item ) {
				if ( $this->is_truthy_confirmation_value( $item ) ) {
					return true;
				}
			}

			return false;
		}

		$bool_value = filter_var( $value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );

		return null === $bool_value ? ! empty( $value ) : $bool_value;
	}

	/**
	 * @throws Action_Exception
	 */
	private function guard_user_deletion( int $user_id ) {
		$user = get_user_by( 'ID', $user_id );

		if ( ! is_a( $user, \WP_User::class ) ) {
			throw new Action_Exception( 'user_not_found' );
		}

		if (
			get_current_user_id() !== $user_id &&
			! current_user_can( 'delete_user', $user_id ) &&
			! Tools::is_webhook()
		) {
			throw new Action_Exception( 'not_enough_cap' );
		}

		if ( $this->is_last_administrator( $user ) ) {
			throw new Action_Exception( 'last_administrator' );
		}
	}

	private function is_last_administrator( \WP_User $user ): bool {
		if ( ! in_array( 'administrator', (array) $user->roles, true ) ) {
			return false;
		}

		$administrators = get_users(
			array(
				'role'   => 'administrator',
				'fields' => 'ID',
			)
		);

		$administrators = array_map( 'absint', $administrators );

		return 1 > count( array_diff( $administrators, array( (int) $user->ID ) ) );
	}

	/**
	 * @throws Action_Exception
	 */
	private function delete_user( int $user_id ): bool {
		if ( ! function_exists( 'wp_delete_user' ) ) {
			require_once ABSPATH . 'wp-admin/includes/user.php';
		}

		$cct_callbacks_suspended = $this->suspend_jet_engine_cct_delete_user_handler();

		try {
			add_filter( 'post_types_to_delete_with_user', array( $this, 'prevent_core_post_deletion' ), PHP_INT_MAX );

			try {
				return wp_delete_user( $user_id );
			} finally {
				remove_filter( 'post_types_to_delete_with_user', array( $this, 'prevent_core_post_deletion' ), PHP_INT_MAX );
			}
		} finally {
			$this->restore_jet_engine_cct_delete_user_handler( $cct_callbacks_suspended );
		}
	}

	public function prevent_core_post_deletion(): array {
		return array();
	}

	private function suspend_jet_engine_cct_delete_user_handler(): array {
		$handler_class = '\Jet_Engine\Modules\Custom_Content_Types\Delete_Users';
		$hook_name     = 'delete_user';

		global $wp_filter;

		if ( empty( $wp_filter[ $hook_name ] ) || ! is_a( $wp_filter[ $hook_name ], \WP_Hook::class ) ) {
			return array();
		}

		$callbacks_to_suspend = array();

		foreach ( $wp_filter[ $hook_name ]->callbacks as $priority => $callbacks ) {
			foreach ( $callbacks as $callback ) {
				$function = $callback['function'] ?? null;

				if (
					! is_array( $function ) ||
					2 !== count( $function ) ||
					'delete_or_reassign_cct_items' !== ( $function[1] ?? null ) ||
					! is_object( $function[0] ) ||
					! is_a( $function[0], $handler_class )
				) {
					continue;
				}

				$callbacks_to_suspend[] = array(
					'instance'      => $function[0],
					'priority'      => $priority,
					'accepted_args' => $callback['accepted_args'] ?? 1,
				);
			}
		}

		foreach ( $callbacks_to_suspend as $callback ) {
			remove_action(
				$hook_name,
				array( $callback['instance'], 'delete_or_reassign_cct_items' ),
				$callback['priority']
			);
		}

		return $callbacks_to_suspend;
	}

	private function restore_jet_engine_cct_delete_user_handler( array $callbacks ) {
		$hook_name = 'delete_user';

		foreach ( $callbacks as $callback ) {
			add_action(
				$hook_name,
				array( $callback['instance'], 'delete_or_reassign_cct_items' ),
				$callback['priority'],
				$callback['accepted_args']
			);
		}
	}

	/**
	 * @throws Action_Exception
	 */
	private function process_authored_posts( int $user_id ) {
		$post_types = $this->get_selected_post_types();

		if ( empty( $post_types ) ) {
			throw new Action_Exception( 'empty_field', 'Post types' );
		}

		$post_ids = get_posts(
			array(
				'author'         => $user_id,
				'fields'         => 'ids',
				'post_status'    => $this->get_all_post_statuses(),
				'post_type'      => $post_types,
				'posts_per_page' => -1,
			)
		);

		foreach ( $post_ids as $post_id ) {
			$post_id = absint( $post_id );

			if ( ! wp_delete_post( $post_id, true ) ) {
				throw new Action_Exception( 'failed' );
			}
		}
	}

	private function get_selected_post_types(): array {
		$post_types = $this->settings['post_types'] ?? array();
		$post_types = is_array( $post_types ) ? $post_types : array( $post_types );
		$post_types = array_map( 'sanitize_key', $post_types );
		$post_types = array_filter( $post_types );

		return array_values(
			array_intersect(
				$post_types,
				$this->get_available_post_types()
			)
		);
	}

	private function get_available_post_types(): array {
		$post_types = get_post_types( array( 'public' => true ), 'names' );

		return array_values(
			array_diff(
				$post_types,
				array(
					'attachment',
					jet_form_builder()->post_type->slug(),
				)
			)
		);
	}

	private function get_post_types_for_options(): array {
		$post_types = get_post_types( array( 'public' => true ), 'objects' );
		$options    = array();

		foreach ( $post_types as $post_type ) {
			if ( ! in_array( $post_type->name, $this->get_available_post_types(), true ) ) {
				continue;
			}

			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $options;
	}

	private function delete_jet_engine_cct_items( int $user_id ) {
		if ( ! $this->is_cct_module_available() ) {
			return;
		}

		$content_types = $this->get_selected_cct_types();

		if ( empty( $content_types ) ) {
			return;
		}

		foreach ( $content_types as $instance ) {
			if ( ! is_object( $instance ) || ! method_exists( $instance, 'get_db' ) ) {
				continue;
			}

			$instance->get_db()->delete( array( 'cct_author_id' => $user_id ) );
		}
	}

	private function get_selected_cct_types(): array {
		$cct_types = $this->settings['cct_types'] ?? array();
		$cct_types = is_array( $cct_types ) ? $cct_types : array( $cct_types );
		$cct_types = array_map( 'sanitize_key', $cct_types );
		$cct_types = array_filter( $cct_types );

		if ( empty( $cct_types ) ) {
			return array();
		}

		$available_cct_types = $this->get_available_cct_types();

		return array_values(
			array_intersect_key(
				$available_cct_types,
				array_flip( $cct_types )
			)
		);
	}

	private function get_available_cct_types(): array {
		$module_class = '\Jet_Engine\Modules\Custom_Content_Types\Module';

		if ( ! $this->is_cct_module_available() ) {
			return array();
		}

		$module = $module_class::instance();

		if ( empty( $module->manager ) || ! method_exists( $module->manager, 'get_content_types' ) ) {
			return array();
		}

		$content_types = $module->manager->get_content_types();

		return is_array( $content_types ) ? $content_types : array();
	}

	private function is_cct_module_available(): bool {
		$module_class = '\Jet_Engine\Modules\Custom_Content_Types\Module';

		if (
			! function_exists( 'jet_engine' ) ||
			! is_object( jet_engine() ) ||
			empty( jet_engine()->modules ) ||
			! method_exists( jet_engine()->modules, 'is_module_active' ) ||
			! jet_engine()->modules->is_module_active( 'custom-content-types' ) ||
			! class_exists( $module_class )
		) {
			return false;
		}

		$module = $module_class::instance();

		return (
			! empty( $module->manager ) &&
			method_exists( $module->manager, 'get_content_types' )
		);
	}

	private function get_cct_types_for_options(): array {
		$options = array();

		foreach ( $this->get_available_cct_types() as $slug => $instance ) {
			$name = ( is_object( $instance ) && method_exists( $instance, 'get_arg' ) )
				? $instance->get_arg( 'name' )
				: '';

			$options[] = array(
				'value' => $slug,
				'label' => $name ? $name : $slug,
			);
		}

		return $options;
	}

	/**
	 * @throws Action_Exception
	 */
	private function delete_authored_attachments( int $user_id ) {
		$attachment_ids = get_posts(
			array(
				'author'         => $user_id,
				'fields'         => 'ids',
				'post_status'    => $this->get_all_post_statuses(),
				'post_type'      => 'attachment',
				'posts_per_page' => -1,
			)
		);

		foreach ( $attachment_ids as $attachment_id ) {
			$attachment_id = absint( $attachment_id );

			if ( ! $attachment_id ) {
				continue;
			}

			if ( ! wp_delete_attachment( $attachment_id, true ) ) {
				throw new Action_Exception( 'failed' );
			}
		}
	}

	private function get_all_post_statuses(): array {
		return array_values( get_post_stati() );
	}

	public function editor_labels() {
		return array(
			'target_user'            => __( 'User to delete:', 'jet-form-builder' ),
			'user_id_field'          => __( 'User ID field:', 'jet-form-builder' ),
			'confirmation_field'     => __( 'Confirmation field:', 'jet-form-builder' ),
			'current_password_field' => __( 'Current password field:', 'jet-form-builder' ),
			'delete_content'         => __( 'Delete posts:', 'jet-form-builder' ),
			'post_types'             => __( 'Post types to delete:', 'jet-form-builder' ),
			'delete_media'           => __( 'Delete media:', 'jet-form-builder' ),
			'delete_cct'             => __( 'Delete JetEngine CCT items:', 'jet-form-builder' ),
			'cct_types'              => __( 'CCT types:', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'target_user'            => __( 'Select the current user or a user ID submitted with the form.', 'jet-form-builder' ),
			'user_id_field'          => __( 'Choose the form field that contains the user ID to delete.', 'jet-form-builder' ),
			'confirmation_field'     => __( 'Choose a confirmation field. Checkbox, radio, or switcher fields are recommended. Use 1 as the checked value.', 'jet-form-builder' ),
			'current_password_field' => __( 'Choose the field where the user submitting the form enters their current password.', 'jet-form-builder' ),
			'delete_content'         => __( 'Permanently deletes WordPress posts authored by the user.', 'jet-form-builder' ),
			'post_types'             => __( 'Only posts from selected post types will be deleted.', 'jet-form-builder' ),
			'delete_media'           => __( 'Permanently deletes Media Library attachments authored by the user.', 'jet-form-builder' ),
			'delete_cct'             => __( 'Permanently deletes JetEngine CCT items authored by the user.', 'jet-form-builder' ),
			'cct_types'              => __( 'Only items from selected CCT types will be deleted.', 'jet-form-builder' ),
		);
	}

	public function action_data() {
		return array(
			'postTypes' => $this->get_post_types_for_options(),
			'cctTypes'  => $this->get_cct_types_for_options(),
		);
	}
}
