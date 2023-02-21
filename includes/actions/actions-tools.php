<?php


namespace Jet_Form_Builder\Actions;


use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Resources\File_Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class Actions_Tools {

	/**
	 * @param string $flow_path
	 *
	 * @return \Generator
	 */
	public static function get_flow( string $flow_path ): \Generator {
		$flow = self::load_flow( $flow_path );

		foreach ( $flow as $action ) {
			try {
				$current = jet_form_builder()->actions->get_action( $action['type'] );
			} catch ( Repository_Exception $exception ) {
				continue;
			}

			$current->settings = $action['settings'] ?? array();

			yield array( $current, $action );
		}
	}

	/**
	 * @param string $flow_path
	 *
	 * @return array
	 */
	public static function load_flow( string $flow_path ): array {
		if ( ! file_exists( $flow_path ) ) {
			return array();
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
			return array();
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