<?php


namespace Jet_Form_Builder\Compatibility\Jet_Plugins_Ajax;


class Jet_Plugins_Ajax {

	public static function register_script( string $handle ) {
		if ( ! wp_doing_ajax() && ( ! defined( 'REST_REQUEST' ) || ! REST_REQUEST ) ) {
			return;
		}
		add_filter(
			'jet-plugins/render/render-data',
			function ( $render_data ) use ( $handle ) {
				$handles = array_column( $render_data['scripts'], 'handle' );

				foreach ( self::generated_handles( $handle, wp_scripts() ) as $name ) {
					if ( in_array( $name, $handles, true ) ) {
						continue;
					}

					$url = self::get_script_url( $name );

					$render_data['scripts'][] = array(
						'handle' => $name,
						'src'    => $url,
					);

					ob_start();
					wp_scripts()->print_extra_script( $name );

					$render_data['content'] .= ob_get_clean();
				}

				return $render_data;
			}
		);
	}

	public static function register_style( string $handle ) {
		if ( ! wp_doing_ajax() && ( ! defined( 'REST_REQUEST' ) || ! REST_REQUEST ) ) {
			return;
		}
		add_filter(
			'jet-plugins/render/render-data',
			function ( $render_data ) use ( $handle ) {
				foreach ( self::generated_handles( $handle, wp_styles() ) as $name ) {
					$url = self::get_style_url( $name );

					$render_data['styles'][ $name ] = $url;

					ob_start();
					wp_styles()->print_inline_style( $name );

					$render_data['content'] .= ob_get_clean();
				}

				return $render_data;
			}
		);
	}


	private static function get_script_url( string $handle ) {
		return self::get_asset_url( $handle, wp_scripts() );
	}

	private static function get_style_url( string $handle ) {
		return self::get_asset_url( $handle, wp_styles() );
	}

	/**
	 * @param string $handle
	 * @param \WP_Styles|\WP_Scripts $dependency
	 *
	 * @return false|mixed|string
	 */
	private static function get_asset_url( string $handle, $dependency ) {
		if ( ! isset( $dependency->registered[ $handle ] ) ) {
			return false;
		}

		$src = $dependency->registered[ $handle ]->src;

		if ( ! preg_match( '|^(https?:)?//|', $src ) && ! ( $dependency->content_url && 0 === strpos( $src, $dependency->content_url ) ) ) {
			$src = $dependency->base_url . $src;
		}

		return $src;
	}

	/**
	 * @param string $handle
	 * @param \WP_Styles|\WP_Scripts $dependency
	 *
	 * @return \Generator
	 */
	private static function generated_handles( string $handle, $dependency ): \Generator {
		if ( ! str_starts_with( $handle, 'jet-' ) ) {
			return;
		}
		if ( ! array_key_exists( $handle, $dependency->registered ) ) {
			return;
		}

		foreach ( $dependency->registered[ $handle ]->deps as $dep_handle ) {
			yield from self::generated_handles( $dep_handle, $dependency );
		}

		yield $handle;
	}


}