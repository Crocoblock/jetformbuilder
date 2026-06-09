<?php

namespace Jet_Form_Builder\Admin\Tabs_Handlers;

if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Tools;

class Options_Handler extends Base_Handler {

	const OPTIONS = array(
		'enable_dev_mode'       => false,
		'clear_on_uninstall'    => false,
		'disable_next_button'   => true,
		'scroll_on_next'        => false,
		'auto_focus'            => false,
		'form_records_access_capability' => 'manage_options',
		'gfb_request_args_key'  => '',
		'gfb_request_args_value' => '',
		'ssr_validation_method' => 'rest',
		'self_promotable_roles' => array(),
	);

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		$options = array();
		$prev_options = $this->get_options();

		// phpcs:disable WordPress.Security.NonceVerification.Missing
		foreach ( self::OPTIONS as $name => $default ) {

			if ( ! array_key_exists( $name, $_POST ) ) {
				continue;
			}
			if ( is_bool( $default ) ) {
				$options[ $name ] = filter_var(
					sanitize_key( $_POST[ $name ] ),
					defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN
				);
			} elseif ( is_array( $default ) ) {
				$roles = wp_unslash( $_POST[ $name ] ?? array() );
				$roles = is_array( $roles ) ? $roles : array();
				$roles = array_map( 'sanitize_key', $roles );
				$roles = array_filter( $roles );
				$roles = array_values( array_unique( $roles ) );

				$registered_roles = array_keys( Tools::get_registered_roles_safe() );
				$roles            = array_values( array_intersect( $roles, $registered_roles ) );
				$roles            = array_values( array_diff( $roles, array( 'administrator' ) ) );

				$options[ $name ] = $roles;
			} else {
				$options[ $name ] = sanitize_text_field( wp_unslash( $_POST[ $name ] ?? '' ) );
			}
		}
		// phpcs:enable WordPress.Security.NonceVerification.Missing
		$result = $this->update_options( $options );

		if (
			array_key_exists( 'self_promotable_roles', $options ) &&
			( $prev_options['self_promotable_roles'] ?? array() ) !== $options['self_promotable_roles']
		) {
			do_action( 'jet-form-builder/update-user/invalidate-role-scan' );
		}

		$this->send_response( $result );
	}

	public function on_load() {
		$this->set_jfb_request_args();
		$options = $this->get_options();
		$options['available_roles'] = array();

		foreach ( Tools::get_registered_roles_safe() as $role => $data ) {
			if ( 'administrator' === $role ) {
				continue;
			}

			$options['available_roles'][] = array(
				'value' => $role,
				'label' => $data['name'] ?? $role,
			);
		}

		return $options;
	}

	public function set_jfb_request_args() {
		$options     = $this->get_options();
		$update_data = array();

		if ( empty( $options['gfb_request_args_key'] ) || ctype_digit( (string) $options['gfb_request_args_key'] ) ) {
			$update_data['gfb_request_args_key'] = $this->jfb_generate_str();
		}

		if ( empty( $options['gfb_request_args_value'] ) || ctype_digit( (string) $options['gfb_request_args_value'] ) ) {
			$update_data['gfb_request_args_value'] = $this->jfb_generate_str() . $this->jfb_generate_str();
		}

		if ( ! empty( $update_data ) ) {
			$this->update_options( $update_data );
			$options = array_merge( $options, $update_data );
		}

		return $options;
	}

	public function jfb_generate_str() {
		$letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$digits  = '0123456789';

		$l = '';
		for ( $i = 0; $i < 3; $i++ ) {
			$l .= $letters[ wp_rand( 0, strlen( $letters ) - 1 ) ];
		}

		$d = '';
		for ( $i = 0; $i < 3; $i++ ) {
			$d .= $digits[ wp_rand( 0, strlen( $digits ) - 1 ) ];
		}

		$key_arr = str_split( $l . $d );
		shuffle( $key_arr );

		return implode( '', $key_arr );
	}
}
