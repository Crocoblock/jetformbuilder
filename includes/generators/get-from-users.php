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
					array( 'value' => 'ID',            'label' => __( 'User ID', 'jet-form-builder' ) ),
					array( 'value' => 'user_login',    'label' => __( 'Username (login)', 'jet-form-builder' ) ),
					array( 'value' => 'user_email',    'label' => __( 'Email', 'jet-form-builder' ) ),
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
					array( 'value' => 'user_login',   'label' => __( 'Username (login)', 'jet-form-builder' ) ),
					array( 'value' => 'user_email',   'label' => __( 'Email', 'jet-form-builder' ) ),
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
					array( 'value' => 'user_login',   'label' => __( 'Username', 'jet-form-builder' ) ),
					array( 'value' => 'registered',   'label' => __( 'Registration Date', 'jet-form-builder' ) ),
					array( 'value' => 'ID',           'label' => __( 'User ID', 'jet-form-builder' ) ),
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
				'description' => __( 'The Trigger Field value overrides the static "Filter by Roles" setting above. If the Trigger Field is empty, the static roles are used.', 'jet-form-builder' ),
				'example'     => __( 'Select the field that returns one or more user role slugs, for example: administrator, editor, subscriber.', 'jet-form-builder' ),
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
	 * Overrides the roles setting with the value from the listened field.
	 *
	 * @param array $settings Parsed settings from block attributes.
	 * @param array $context  Associative array ['field_name' => 'value'] from dependent fields.
	 *
	 * @return array Generated options
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		if ( ! empty( $context ) ) {
			$context_value = reset( $context );

			// Support both single role (scalar) and multi-role (checkbox/multi-select array).
			if ( is_array( $context_value ) ) {
				$roles = array_filter(
					array_map(
						static function ( $role ) {
							return sanitize_key( (string) $role );
						},
						$context_value
					)
				);

				if ( ! empty( $roles ) ) {
					$settings['roles'] = array_values( $roles );
				}
			} else {
				$role = sanitize_key( (string) $context_value );
				if ( $role ) {
					$settings['roles'] = array( $role );
				}
			}
		}

		return $this->generate( $settings );
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
