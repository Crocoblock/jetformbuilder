<?php


namespace Jet_Form_Builder\Actions;


class Actions_Tools {

	public static function run_flow( string $flow_path ) {
		$flow = self::load_flow( $flow_path );

		if ( ! $flow ) {
			return;
		}

		foreach ( $flow as $action ) {
			$current = jet_fb_action_handler()->add_hidden( $action['type'], $action );

			if ( ! $current ) {
				continue;
			}
			$current->settings = $action['settings'] ?? array();
			jet_fb_action_handler()->process_single_action( $current );
		}
	}

	/**
	 * @param string $flow_path
	 *
	 * @return array|false
	 */
	public static function load_flow( string $flow_path ) {
		if ( ! file_exists( $flow_path ) ) {
			return false;
		}
		$flow = wp_json_file_decode( $flow_path, array( 'associative' => true ) );

		if ( ! is_array( $flow ) || empty( $flow ) ) {
			return false;
		}

		return $flow;
	}

}