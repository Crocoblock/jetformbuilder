<?php


namespace Jet_Form_Builder\Actions;


use Jet_Form_Builder\Classes\Resources\File_Tools;

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

		return is_file( $flow_path )
			? self::load_flow_file( $flow_path )
			: self::load_flow_dir( $flow_path );
	}

	private static function load_flow_dir( string $flow_dir ) {
		$flow_dir = trailingslashit( $flow_dir );

		$paths = array(
			$flow_dir . 'flow.php',
			$flow_dir . 'flow.json'
		);

		foreach ( $paths as $path ) {
			$flow = self::load_flow( $path );

			if ( ! $flow ) {
				continue;
			}

			return $flow;
		}

		return false;
	}

	private static function load_flow_file( string $flow_file ) {
		$flow = false;

		switch ( File_Tools::get_file_ext( $flow_file ) ) {
			case 'json':
				$flow = self::load_flow_json( $flow_file );
				break;
			case 'php':
				$flow = self::load_flow_php( $flow_file );
				break;
		}

		if ( ! is_array( $flow ) || empty( $flow ) ) {
			return false;
		}

		return $flow;
	}

	private static function load_flow_json( string $flow_file ) {
		return wp_json_file_decode(
			$flow_file,
			array( 'associative' => true )
		);
	}

	private static function load_flow_php( string $file_name ) {
		if ( ! is_readable( $file_name ) ) {
			return false;
		}

		return include_once $file_name;
	}

}