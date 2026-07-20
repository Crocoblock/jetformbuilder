<?php
/**
 * WordPress Users Generator.
 *
 * Generates a list of WordPress users as options for Select/Checkbox/Radio fields.
 * Supports filtering by role and configurable value/label fields.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_From_Users class.
 *
 * Generates options from WordPress users list.
 */
class Get_From_Users extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_users';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from WordPress Users', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'roles'           => array(
				'type'     => 'array',
				'default'  => array(),
				'label'    => __( 'Filter by Roles (optional)', 'jet-form-builder' ),
				'control'  => 'select',
				'multiple' => true,
				'options'  => $this->get_roles_options(),
				'help'     => __( 'Select roles to include. Leave empty to include all roles.', 'jet-form-builder' ),
			),
			'value_field'     => array(
				'type'    => 'string',
				'default' => 'ID',
				'label'   => __( 'Option Value', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'ID', 'label' => __( 'User ID', 'jet-form-builder' ) ),
					array( 'value' => 'user_login', 'label' => __( 'Username (login)', 'jet-form-builder' ) ),
					array( 'value' => 'user_email', 'label' => __( 'Email', 'jet-form-builder' ) ),
					array( 'value' => 'user_nicename', 'label' => __( 'Nicename (slug)', 'jet-form-builder' ) ),
				),
			),
			'label_field'     => array(
				'type'    => 'string',
				'default' => 'display_name',
				'label'   => __( 'Option Label', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'display_name', 'label' => __( 'Display Name', 'jet-form-builder' ) ),
					array( 'value' => 'user_login', 'label' => __( 'Username (login)', 'jet-form-builder' ) ),
					array( 'value' => 'user_email', 'label' => __( 'Email', 'jet-form-builder' ) ),
				),
			),
			'include_current' => array(
				'type'    => 'boolean',
				'default' => true,
				'label'   => __( 'Include Current User', 'jet-form-builder' ),
				'control' => 'toggle',
			),
			'orderby'         => array(
				'type'    => 'string',
				'default' => 'display_name',
				'label'   => __( 'Order By', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'display_name', 'label' => __( 'Display Name', 'jet-form-builder' ) ),
					array( 'value' => 'user_login', 'label' => __( 'Username', 'jet-form-builder' ) ),
					array( 'value' => 'registered', 'label' => __( 'Registration Date', 'jet-form-builder' ) ),
					array( 'value' => 'ID', 'label' => __( 'User ID', 'jet-form-builder' ) ),
				),
			),
			'number'          => array(
				'type'    => 'number',
				'default' => -1,
				'label'   => __( 'Max Users', 'jet-form-builder' ),
				'control' => 'number',
				'min'     => -1,
				'help'    => __( 'Set to -1 to include all users.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Whether this generator supports auto-update/cascading feature.
	 *
	 * @return bool
	 */
	public function supports_auto_update(): bool {
		return true;
	}

	/**
	 * Returns context field hints for the editor.
	 * Signals that a single listened field provides the role to filter by.
	 *
	 * @return array
	 */
	public function get_auto_update_context_fields(): array {
		return array(
			array(
				'single'      => true,
				'description' => __( 'The Trigger Field value can narrow the configured "Filter by Roles" setting when it matches a saved Trigger Field choice or an allowed server-side role. If validation fails, the static roles are used.', 'jet-form-builder' ),
				'example'     => __( 'Select the field whose saved option values should be allowed as dynamic user roles, for example: editor or subscriber.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Returns the auto-update value type supported by this generator.
	 *
	 * @return string
	 */
	public function get_auto_update_value_type(): string {
		return 'scalar_or_array';
	}

	/**
	 * Empty trigger should fall back to the static roles configuration.
	 *
	 * @return string
	 */
	public function get_auto_update_empty_context_policy(): string {
		return 'fallback_to_static';
	}

	/**
	 * Generates options with context from a dependent field.
	 * Narrows the saved roles setting with the value from the listened field.
	 *
	 * @param array $settings Parsed settings from block attributes.
	 * @param array $context  Associative array ['field_name' => 'value'] from dependent fields.
	 *
	 * @return array Generated options
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		if ( ! empty( $context ) ) {
			$context_value = reset( $context );
			$context_roles = array();

			// Support both single role (scalar) and multi-role (checkbox/multi-select array).
			if ( is_array( $context_value ) ) {
				$context_roles = $this->sanitize_roles_list( $context_value );
			} else {
				$role = sanitize_key( (string) $context_value );
				if ( $role ) {
					$context_roles = array( $role );
				}
			}

			if ( ! empty( $context_roles ) ) {
				$runtime          = $settings['_jfb_runtime'] ?? array();
				$block_attrs      = $settings['_jfb_block_attrs'] ?? array();
				$validate_dynamic = apply_filters(
					'jet-form-builder/generators/get-from-users/validate_dynamic_roles',
					true,
					$context_roles,
					$settings,
					$context,
					$runtime,
					$block_attrs
				);

				if ( ! $validate_dynamic ) {
					$settings['roles'] = array_values( $context_roles );

					return $this->generate( $settings );
				}

				$registered_roles = $this->get_registered_roles();
				$allowed_roles    = $runtime['allowed_roles'] ?? array();
				$allowed_roles    = apply_filters(
					'jet-form-builder/generators/get-from-users/allowed-roles',
					$allowed_roles,
					$context_roles,
					$settings,
					$context,
					$runtime,
					$block_attrs
				);
				$allowed_roles    = $this->sanitize_roles_list( $allowed_roles );
				$context_roles    = array_intersect( $context_roles, $registered_roles );

				if ( ! empty( $allowed_roles ) ) {
					$context_roles = array_intersect( $context_roles, $allowed_roles );
				} else {
					$context_roles = array();
				}

				$saved_roles = $this->normalize_saved_roles( $settings['roles'] ?? array() );
				$roles       = empty( $saved_roles ) ? $context_roles : array_intersect( $context_roles, $saved_roles );

				if ( ! empty( $roles ) ) {
					$settings['roles'] = array_values( $roles );
				}
			}
		}

		return $this->generate( $settings );
	}

	/**
	 * Normalize configured roles into a sanitized list.
	 *
	 * @param mixed $saved_roles Configured roles.
	 *
	 * @return array
	 */
	private function normalize_saved_roles( $saved_roles ): array {
		if ( is_array( $saved_roles ) ) {
			return $this->sanitize_roles_list( $saved_roles );
		}

		return $this->sanitize_roles_list(
			array_map( 'trim', explode( ',', (string) $saved_roles ) )
		);
	}

	/**
	 * Sanitize a list of role slugs.
	 *
	 * @param mixed $roles List of roles.
	 *
	 * @return array
	 */
	private function sanitize_roles_list( $roles ): array {
		if ( ! is_array( $roles ) ) {
			return array();
		}

		$roles = array_filter(
			array_map(
				static function ( $role ) {
					return sanitize_key( (string) $role );
				},
				$roles
			)
		);

		return array_values( array_unique( $roles ) );
	}

	/**
	 * Return the registered WordPress role slugs.
	 *
	 * @return array
	 */
	private function get_registered_roles(): array {
		$roles = wp_roles();

		if ( ! $roles || empty( $roles->roles ) || ! is_array( $roles->roles ) ) {
			return array();
		}

		return $this->sanitize_roles_list( array_keys( $roles->roles ) );
	}

	/**
	 * Returns WP roles as options array for multi-select.
	 *
	 * @return array
	 */
	private function get_roles_options(): array {
		$options = array();

		foreach ( wp_roles()->roles as $slug => $role ) {
			$options[] = array(
				'value' => $slug,
				'label' => translate_user_role( $role['name'] ),
			);
		}

		return $options;
	}

	/**
	 * Generates options from WordPress users.
	 *
	 * @param array $args Settings from schema.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$query_args = array(
			'orderby' => $args['orderby'] ?? 'display_name',
			'order'   => 'ASC',
			'fields'  => 'all',
		);

		$number = intval( $args['number'] ?? -1 );
		if ( $number > 0 ) {
			$query_args['number'] = $number;
		}

		// Filter by roles (array from multi-select)
		$roles = $args['roles'] ?? array();
		if ( is_array( $roles ) ) {
			$roles = array_filter( $roles );
		} else {
			// Backward compat: handle legacy comma-separated string
			$roles = array_filter( array_map( 'trim', explode( ',', (string) $roles ) ) );
		}
		if ( ! empty( $roles ) ) {
			$query_args['role__in'] = array_values( $roles );
		}

		// Exclude current user if needed
		$include_current = isset( $args['include_current'] ) ? (bool) $args['include_current'] : true;
		if ( ! $include_current ) {
			$current_user_id = get_current_user_id();
			if ( $current_user_id ) {
				$query_args['exclude'] = array( $current_user_id );
			}
		}

		$users = get_users( $query_args );

		$value_field = $args['value_field'] ?? 'ID';
		$label_field = $args['label_field'] ?? 'display_name';

		$result = array();

		foreach ( $users as $user ) {
			$value = $user->$value_field ?? $user->ID;
			$label = $user->$label_field ?? $user->display_name;

			$result[] = array(
				'value' => strval( $value ),
				'label' => strval( $label ),
			);
		}

		return $result;
	}
}
