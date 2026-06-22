<?php

namespace JFB_Compatibility\Jet_Popup;

use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Popup implements Base_Module_It {

	public function rep_item_id() {
		return 'jet-popup';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-popup/ajax-request/content-data', array( $this, 'append_runtime_assets' ), 10, 4 );
	}

	public function remove_hooks() {
		remove_filter( 'jet-popup/ajax-request/content-data', array( $this, 'append_runtime_assets' ), 10 );
	}

	public function append_runtime_assets( $content_data, $popup_data, $content_type, $content ) {
		if ( ! $this->content_has_form( $content ) ) {
			return $content_data;
		}

		if ( empty( $content_data['scripts'] ) || ! is_array( $content_data['scripts'] ) ) {
			$content_data['scripts'] = array();
		}

		if ( empty( $content_data['styles'] ) || ! is_array( $content_data['styles'] ) ) {
			$content_data['styles'] = array();
		}

		foreach ( $this->get_runtime_script_handles() as $handle ) {
			$script_data = $this->get_script_data( $handle );

			if ( ! $script_data || $this->content_data_has_script( $content_data, $handle ) ) {
				continue;
			}

			$content_data['scripts'][] = $script_data;
		}

		foreach ( $this->get_runtime_style_handles() as $handle ) {
			$style_src = $this->get_style_src( $handle );

			if ( ! $style_src ) {
				continue;
			}

			$content_data['styles'][ $handle ] = $style_src;
		}

		return $content_data;
	}

	private function content_has_form( $content ): bool {
		return is_string( $content ) && false !== strpos( $content, 'jet-form-builder' );
	}

	private function get_runtime_script_handles(): array {
		$handles = $this->filter_asset_handles( wp_scripts()->queue, wp_scripts() );
		$handles = apply_filters( 'jet-form-builder/jet-popup/runtime-script-handles', $handles );

		return $this->expand_dependency_handles( $handles, wp_scripts() );
	}

	private function get_runtime_style_handles(): array {
		$handles = $this->filter_asset_handles( wp_styles()->queue, wp_styles() );
		$handles = apply_filters( 'jet-form-builder/jet-popup/runtime-style-handles', $handles );

		return $this->expand_dependency_handles( $handles, wp_styles() );
	}

	private function filter_asset_handles( $handles, $dependencies ): array {
		$filtered = array();

		foreach ( $handles as $handle ) {
			if ( $this->is_jfb_asset_handle( $handle, $dependencies ) ) {
				$filtered[] = $handle;
			}
		}

		return $filtered;
	}

	private function is_jfb_asset_handle( $handle, $dependencies ): bool {
		if ( 0 === strpos( $handle, 'jet-fb-' ) || 0 === strpos( $handle, 'jet-form-builder' ) ) {
			return true;
		}

		if ( empty( $dependencies->registered[ $handle ] ) ) {
			return false;
		}

		$src = $dependencies->registered[ $handle ]->src;

		return is_string( $src ) && (
			false !== strpos( $src, '/jetformbuilder/' )
			|| false !== strpos( $src, 'jet-form-builder' )
		);
	}

	private function expand_dependency_handles( $handles, $dependencies, $exclude = array() ): array {
		$expanded = array();
		$seen     = array_fill_keys( $exclude, true );

		foreach ( $handles as $handle ) {
			$this->add_dependency_handle( $handle, $dependencies, $seen, $expanded );
		}

		return $expanded;
	}

	private function add_dependency_handle( $handle, $dependencies, &$seen, &$expanded ) {
		if ( isset( $seen[ $handle ] ) ) {
			return;
		}

		$seen[ $handle ] = true;

		if ( empty( $dependencies->registered[ $handle ] ) ) {
			return;
		}

		$dependency = $dependencies->registered[ $handle ];

		if ( ! empty( $dependency->deps ) ) {
			foreach ( $dependency->deps as $dep_handle ) {
				$this->add_dependency_handle( $dep_handle, $dependencies, $seen, $expanded );
			}
		}

		$expanded[] = $handle;
	}

	private function get_script_data( $handle ) {
		$scripts = wp_scripts();

		if ( empty( $scripts->registered[ $handle ] ) ) {
			return false;
		}

		$script = $scripts->registered[ $handle ];
		$src    = $this->normalize_asset_src( $script->src, $scripts->base_url, $script->ver );

		if ( ! $src ) {
			return false;
		}

		return array(
			'handle' => $handle,
			'src'    => $src,
			'obj'    => $script,
		);
	}

	private function get_style_src( $handle ) {
		$styles = wp_styles();

		if ( empty( $styles->registered[ $handle ] ) ) {
			return false;
		}

		$style = $styles->registered[ $handle ];

		return $this->normalize_asset_src( $style->src, $styles->base_url, $style->ver );
	}

	private function normalize_asset_src( $src, $base_url, $ver = null ) {
		if ( empty( $src ) ) {
			return false;
		}

		if ( 0 === strpos( $src, '//' ) || preg_match( '#^[a-z][a-z0-9+.-]*://#i', $src ) ) {
			$url = $src;
		} elseif ( 0 === strpos( $src, '/' ) ) {
			$url = $src;
		} else {
			$url = $base_url . $src;
		}

		if ( null !== $ver ) {
			$url = add_query_arg( 'ver', $ver, $url );
		}

		return $url;
	}

	private function content_data_has_script( $content_data, $handle ): bool {
		if ( empty( $content_data['scripts'] ) ) {
			return false;
		}

		foreach ( $content_data['scripts'] as $script ) {
			if ( is_array( $script ) && ! empty( $script['handle'] ) && $handle === $script['handle'] ) {
				return true;
			}
		}

		return false;
	}

}
