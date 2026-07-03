<?php

namespace JFB_Compatibility\Jet_Popup;

use Jet_Form_Builder\Blocks\Module as Blocks_Module;
use JFB_Modules\Validation\Module as Validation_Module;
use JFB_Modules\Validation\Post_Type\Validation_Meta;
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
		add_filter( 'jet-popup/ajax-request/after-content-define/post-data', array( $this, 'register_popup_runtime_scripts' ), 5 );
		add_filter( 'jet-popup/ajax-request/content-data', array( $this, 'append_runtime_assets' ), 10, 4 );
	}

	public function remove_hooks() {
		remove_filter( 'jet-popup/ajax-request/after-content-define/post-data', array( $this, 'register_popup_runtime_scripts' ), 5 );
		remove_filter( 'jet-popup/ajax-request/content-data', array( $this, 'append_runtime_assets' ), 10 );
	}

	public function register_popup_runtime_scripts( $popup_data ) {
		do_action( 'jet_plugins/frontend/register_scripts' );
		$this->register_jfb_frontend_script();

		return $popup_data;
	}

	public function append_runtime_assets( $content_data, $popup_data, $content_type, $content ) {
		$content_data = $this->normalize_content_data( $content_data );
		$this->append_popup_validation_assets( $content_data );
		$runtime_assets = $this->get_runtime_assets();

		if (
			! $this->has_runtime_assets( $runtime_assets ) &&
			empty( $content_data['scripts'] ) &&
			empty( $content_data['afterScripts'] ) &&
			empty( $content_data['styles'] )
		) {
			return $content_data;
		}

		foreach ( $runtime_assets['scripts'] as $script_data ) {
			if ( $this->content_data_has_script( $content_data, $script_data['handle'] ) ) {
				continue;
			}

			$content_data['scripts'][] = $script_data;
		}

		foreach ( $runtime_assets['afterScripts'] as $script_data ) {
			if ( $this->content_data_has_script( $content_data, $script_data['handle'], 'afterScripts' ) ) {
				continue;
			}

			$content_data['afterScripts'][] = $script_data;
		}

		foreach ( $runtime_assets['styles'] as $handle => $style_src ) {
			$content_data['styles'][ $handle ] = $style_src;
		}

		if ( ! empty( $runtime_assets['inlineStyles'] ) ) {
			$content_data['content'] = $this->prepend_inline_styles(
				$content_data['content'],
				$runtime_assets['inlineStyles']
			);
		}

		return $content_data;
	}

	private function normalize_content_data( $content_data ): array {
		if ( empty( $content_data['scripts'] ) || ! is_array( $content_data['scripts'] ) ) {
			$content_data['scripts'] = array();
		}

		if ( empty( $content_data['afterScripts'] ) || ! is_array( $content_data['afterScripts'] ) ) {
			$content_data['afterScripts'] = array();
		}

		if ( empty( $content_data['styles'] ) || ! is_array( $content_data['styles'] ) ) {
			$content_data['styles'] = array();
		}

		if ( empty( $content_data['content'] ) || ! is_string( $content_data['content'] ) ) {
			$content_data['content'] = '';
		}

		return $content_data;
	}

	private function has_runtime_assets( array $runtime_assets ): bool {
		return ! empty( $runtime_assets['scripts'] )
			|| ! empty( $runtime_assets['afterScripts'] )
			|| ! empty( $runtime_assets['styles'] )
			|| ! empty( $runtime_assets['inlineStyles'] );
	}

	private function register_jfb_frontend_script(): void {
		/** @var Blocks_Module $blocks */
		$blocks = jet_form_builder()->module( 'blocks' );

		if ( ! $blocks ) {
			return;
		}

		if ( ! wp_script_is( Blocks_Module::MAIN_SCRIPT_HANDLE, 'registered' ) ) {
			$blocks->register_form_scripts();
		}

		if ( ! wp_script_is( Blocks_Module::MAIN_SCRIPT_HANDLE, 'enqueued' ) ) {
			wp_enqueue_script( Blocks_Module::MAIN_SCRIPT_HANDLE );
		}
	}

	private function append_popup_validation_assets( array &$content_data ): void {
		$form_ids = $this->extract_form_ids_from_content( $content_data['content'] );

		if (
			empty( $form_ids ) ||
			$this->content_data_has_script( $content_data, 'jet-form-builder-popup-validation' ) ||
			$this->content_data_has_script( $content_data, 'jet-form-builder-popup-validation', 'afterScripts' )
		) {
			return;
		}

		$validation_map = array();

		foreach ( $form_ids as $form_id ) {
			$settings = $this->get_form_validation_settings( $form_id );

			if ( empty( $settings ) ) {
				continue;
			}

			$validation_map[ $form_id ] = $settings;
		}

		if ( empty( $validation_map ) ) {
			return;
		}

		$content_data['afterScripts'][] = array(
			'handle' => 'jet-form-builder-popup-validation',
			'src'    => $this->make_data_uri(
				'text/javascript',
				$this->get_popup_validation_script( $validation_map )
			),
			'obj'    => null,
		);
	}

	private function get_runtime_assets(): array {
		$scripts = wp_scripts();
		$styles  = wp_styles();

		$script_handles = $this->filter_asset_handles( $scripts->queue, $scripts );
		$style_handles  = $this->filter_asset_handles( $styles->queue, $styles );

		$script_handles = apply_filters( 'jet-form-builder/jet-popup/runtime-script-handles', $script_handles );
		$style_handles  = apply_filters( 'jet-form-builder/jet-popup/runtime-style-handles', $style_handles );

		$script_handles = $this->expand_dependency_handles( $script_handles, $scripts );
		$style_handles  = $this->expand_dependency_handles( $style_handles, $styles );

		$runtime_assets = array(
			'scripts'      => array(),
			'afterScripts' => array(),
			'styles'       => array(),
			'inlineStyles' => array(),
		);

		foreach ( $script_handles as $handle ) {
			$runtime_assets = $this->append_script_runtime_assets( $runtime_assets, $handle, $scripts );
		}

		foreach ( $style_handles as $handle ) {
			$this->append_style_runtime_assets( $runtime_assets, $handle, $styles );
		}

		$this->append_popup_reinit_script( $runtime_assets, $script_handles );

		return $runtime_assets;
	}

	private function extract_form_ids_from_content( string $content ): array {
		if ( '' === $content ) {
			return array();
		}

		preg_match_all( '/data-form-id=["\'](\d+)["\']/', $content, $matches );

		if ( empty( $matches[1] ) ) {
			return array();
		}

		return array_values(
			array_unique(
				array_map( 'absint', $matches[1] )
			)
		);
	}

	private function get_form_validation_settings( int $form_id ): array {
		if ( $form_id <= 0 ) {
			return array();
		}

		/** @var Validation_Module|false $validation_module */
		$validation_module = jet_form_builder()->module( 'validation' );
		/** @var \JFB_Modules\Post_Type\Module|false $post_type_module */
		$post_type_module  = jet_form_builder()->module( 'post-type' );

		if ( ! $validation_module || ! $post_type_module ) {
			return array();
		}

		$validation = $post_type_module->query_meta( Validation_Meta::class, $form_id );
		$settings   = array(
			'type'     => $validation['type'] ?? Validation_Module::FORMAT_BROWSER,
			'messages' => array(),
		);

		foreach ( $validation_module->get_messages() as $message ) {
			$settings['messages'][ $message->get_id() ] = (
				$validation['messages'][ $message->get_id() ] ?? $message->get_initial()
			);
		}

		return $settings;
	}

	private function get_popup_validation_script( array $validation_map ): string {
		$script = 'window.JetFormsValidation = window.JetFormsValidation || {};' . "\n";

		foreach ( $validation_map as $form_id => $settings ) {
			$script .= sprintf(
				'window.JetFormsValidation[%1$d] = %2$s;%3$s',
				(int) $form_id,
				wp_json_encode( $settings ),
				"\n"
			);
		}

		return $script;
	}

	private function append_script_runtime_assets( array $runtime_assets, string $handle, \WP_Scripts $scripts ): array {
		if ( empty( $scripts->registered[ $handle ] ) ) {
			return $runtime_assets;
		}

		$script      = $scripts->registered[ $handle ];
		$script_src  = $this->normalize_asset_src( $script->src, $scripts->base_url, $script->ver );
		$data_chunks = $this->normalize_extra_chunks( $scripts->get_data( $handle, 'data' ) );
		$before      = $this->normalize_extra_chunks( $scripts->get_data( $handle, 'before' ) );
		$after       = $this->normalize_extra_chunks( $scripts->get_data( $handle, 'after' ) );

		foreach ( array_merge( $data_chunks, $before ) as $index => $inline_script ) {
			$runtime_assets['scripts'][] = $this->make_inline_script_entry(
				$handle,
				'before',
				$index,
				$inline_script
			);
		}

		if ( $script_src ) {
			$runtime_assets['scripts'][] = array(
				'handle' => $handle,
				'src'    => $script_src,
				'obj'    => $script,
			);
		}

		foreach ( $after as $index => $inline_script ) {
			$runtime_assets['afterScripts'][] = $this->make_inline_script_entry(
				$handle,
				'after',
				$index,
				$inline_script
			);
		}

		return $runtime_assets;
	}

	private function append_style_runtime_assets( array &$runtime_assets, string $handle, \WP_Styles $styles ): void {
		if ( empty( $styles->registered[ $handle ] ) ) {
			return;
		}

		$style     = $styles->registered[ $handle ];
		$style_src = $this->normalize_asset_src( $style->src, $styles->base_url, $style->ver );

		if ( $style_src ) {
			$runtime_assets['styles'][ $handle ] = $style_src;
		}

		foreach ( $this->normalize_extra_chunks( $styles->get_data( $handle, 'after' ) ) as $index => $css ) {
			$runtime_assets['inlineStyles'][] = array(
				'handle'   => $handle,
				'position' => 'after',
				'index'    => $index,
				'content'  => $css,
			);
		}
	}

	private function filter_asset_handles( array $handles, $dependencies ): array {
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

	private function add_dependency_handle( $handle, $dependencies, array &$seen, array &$expanded ): void {
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

	private function normalize_extra_chunks( $value ): array {
		if ( empty( $value ) ) {
			return array();
		}

		if ( is_array( $value ) ) {
			$chunks = array();

			foreach ( $value as $item ) {
				if ( ! is_string( $item ) ) {
					continue;
				}

				$item = trim( $item );

				if ( '' === $item ) {
					continue;
				}

				$chunks[] = $item;
			}

			return $chunks;
		}

		if ( ! is_string( $value ) ) {
			return array();
		}

		$value = trim( $value );

		return '' === $value ? array() : array( $value );
	}

	private function make_inline_script_entry( string $handle, string $position, int $index, string $script ): array {
		$inline_handle = sprintf(
			'%1$s-inline-%2$s-%3$d-%4$s',
			$handle,
			$position,
			$index,
			substr( sha1( $script ), 0, 12 )
		);

		return array(
			'handle' => $inline_handle,
			'src'    => $this->make_data_uri( 'text/javascript', $script ),
			'obj'    => null,
		);
	}

	private function make_data_uri( string $mime_type, string $content ): string {
		return sprintf(
			'data:%1$s;charset=utf-8;base64,%2$s',
			$mime_type,
			base64_encode( $content )
		);
	}

	private function prepend_inline_styles( string $content, array $inline_styles ): string {
		$style_tags = '';

		foreach ( $inline_styles as $inline_style ) {
			if ( empty( $inline_style['content'] ) ) {
				continue;
			}

			$style_tags .= sprintf(
				'<style id="%1$s-inline-style-%2$d">%3$s</style>',
				esc_attr( $inline_style['handle'] ),
				(int) $inline_style['index'],
				$inline_style['content']
			);
		}

		return $style_tags . $content;
	}

	private function append_popup_reinit_script( array &$runtime_assets, array $script_handles ): void {
		if ( ! in_array( 'jet-form-builder-frontend-forms', $script_handles, true ) ) {
			return;
		}

		$runtime_assets['afterScripts'][] = $this->make_inline_script_entry(
			'jet-form-builder-popup-reinit',
			'after',
			0,
			$this->get_popup_reinit_script()
		);
	}

	private function get_popup_reinit_script(): string {
		return <<<'JS'
( function() {
	if ( window.JFBJetPopupReinitBound ) {
		return;
	}

	window.JFBJetPopupReinitBound = true;
	window.JetFormBuilder = window.JetFormBuilder || {};

	function initPopupForms( $container ) {
		if ( ! $container || ! $container.length || ! window.JetFormBuilderAbstract?.Observable ) {
			return;
		}

		if ( 'function' === typeof window.JetFormBuilderFunctions?.resetRuntimeRegistries ) {
			window.JetFormBuilderFunctions.resetRuntimeRegistries();
		}

		$container.find( 'form.jet-form-builder' ).each( function() {
			const form = this;

			if ( form.hasAttribute( 'data-jfb-popup-initialized' ) ) {
				return;
			}

			const formId = form.dataset?.formId;

			if ( ! formId ) {
				return;
			}

			const existing = window.JetFormBuilder[ formId ];

			if ( existing?.rootNode?.isConnected === false && 'function' === typeof existing.remove ) {
				existing.remove();
			}

			const observable = new window.JetFormBuilderAbstract.Observable();
			const $scope = window.jQuery( form.closest( '.jet-popup__container-content' ) || form.parentElement || form );

			window.JetFormBuilder[ formId ] = observable;
			form.setAttribute( 'data-jfb-popup-initialized', '1' );

			window.jQuery( document ).trigger( 'jet-form-builder/init', [ $scope, observable ] );
			observable.observe( form );
			window.jQuery( document ).trigger( 'jet-form-builder/after-init', [ $scope, observable ] );
		} );
	}

	window.jQuery( window ).on( 'jet-popup/ajax/frontend-init', function( event, payload ) {
		initPopupForms( payload?.$container );
	} );
}() );
JS;
	}

	private function content_data_has_script( array $content_data, string $handle, string $container = 'scripts' ): bool {
		if ( empty( $content_data[ $container ] ) || ! is_array( $content_data[ $container ] ) ) {
			return false;
		}

		foreach ( $content_data[ $container ] as $script ) {
			if ( is_array( $script ) && ! empty( $script['handle'] ) && $handle === $script['handle'] ) {
				return true;
			}
		}

		return false;
	}

}
