<?php


namespace JFB_Components\Module;

use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module_Tools {

	public static function get_url( string $module_name, string $url ): string {
		try {
			$module = jet_form_builder()->module( $module_name );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		if ( ! ( $module instanceof Base_Module_Url_It ) ) {
			return '';
		}

		return $module->get_url( $url );
	}

	public static function get_dir( string $module_name, string $path ): string {
		try {
			$module = jet_form_builder()->module( $module_name );
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
