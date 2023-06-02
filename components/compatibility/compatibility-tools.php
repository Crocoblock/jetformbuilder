<?php


namespace JFB_Components\Compatibility;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Compatibility_Tools
 * @package JFB_Components\Compatibility
 */
class Compatibility_Tools {

	public static function get_url( string $module_name, string $url ): string {
		try {
			$module = jet_form_builder()->compat( $module_name );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		if ( ! ( $module instanceof Base_Module_Url_It ) ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			_doing_it_wrong(
				__METHOD__,
				get_class( $module ) . ' is not implemented ' . Base_Module_Url_It::class,
				'3.1.0'
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
			return '';
		}

		return $module->get_url( $url );
	}

	public static function get_dir( string $module_name, string $path ): string {
		try {
			$module = jet_form_builder()->compat( $module_name );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		if ( ! ( $module instanceof Base_Module_Dir_It ) ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			_doing_it_wrong(
				__METHOD__,
				get_class( $module ) . ' is not implemented ' . Base_Module_Dir_It::class,
				'3.1.0'
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped

			return '';
		}

		return $module->get_dir( $path );
	}

}
