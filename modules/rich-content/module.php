<?php

namespace JFB_Modules\Rich_Content;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	/**
	 * @var Macros_Parser
	 */
	private $parser;

	/**
	 * @var Dynamic_Preset
	 */
	private $dynamic_preset;

	public function rep_item_id() {
		return 'rich-content';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_submit_macros' )
		);
		add_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_dynamic_preset' ),
			10,
			4
		);
		add_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_shortcodes' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_submit_macros' )
		);
		remove_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_dynamic_preset' )
		);
		remove_filter(
			'jet-form-builder/rich-content',
			array( $this, 'apply_shortcodes' )
		);
	}

	public static function rich( string $value ): string {
		return apply_filters( 'jet-form-builder/rich-content', $value );
	}

	/**
	 * Same macros/preset/shortcodes pipeline as rich(), but for a value that
	 * is provably admin-authored - a block attribute stored in the form's
	 * own post content, never a value submitted with the request. Declares
	 * the preset trusted, so an explicit `restricted: false` saved through
	 * the field's own "Restrict access" toggle is honoured, the same way it
	 * already is for validation rules, date limits, conditions and dynamic
	 * value. See Preset_Manager::get_field_value() and
	 * jet_fb_parse_dynamic_trusted() for the same distinction elsewhere.
	 *
	 * The regular dynamic-preset callback stays registered in its original
	 * position on the shared filter. Filter arguments identify this invocation
	 * and its exact original content, preserving the established macros ->
	 * preset -> shortcodes order without mutable hook state. If macros change
	 * the content, its result is parsed as untrusted request-derived data.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function rich_trusted( string $value ): string {
		return apply_filters( 'jet-form-builder/rich-content', $value, true, $value );
	}

	/**
	 * Runs macros and shortcodes while deliberately skipping dynamic presets.
	 * Kept as a filter argument rather than removing/re-adding the callback so
	 * its position and accepted-arguments count never change for later calls.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function rich_without_preset( string $value ): string {
		return apply_filters( 'jet-form-builder/rich-content', $value, false, '', true );
	}

	public function apply_submit_macros( string $content ): string {
		return $this->get_parser()->parse_macros( $content );
	}

	public function apply_dynamic_preset(
		string $content,
		bool $trusted = false,
		string $trusted_content = '',
		bool $without_preset = false
	): string {
		if ( $without_preset ) {
			return $content;
		}

		// Macros execute before this callback and can expand request-controlled
		// values. A trusted parse is safe only when the content is still the
		// exact admin-authored string passed to rich_trusted().
		if ( $trusted && $content === $trusted_content ) {
			return $this->apply_dynamic_preset_trusted( $content );
		}

		return Tools::to_string( $this->get_dynamic_preset()->parse_json( $content ) );
	}

	public function apply_dynamic_preset_trusted( string $content ): string {
		// Do not use get_dynamic_preset(): it is shared by ordinary rich() calls.
		// A preset-sanitize callback may make a nested ordinary call while this
		// source is resolving, so the trusted origin must be invocation-local.
		$preset = new Dynamic_Preset();
		$preset->trust_restriction_flag( true );

		return Tools::to_string( $preset->parse_json( $content ) );
	}

	public function apply_shortcodes( string $content ): string {
		return do_shortcode( $content );
	}


	/**
	 * @return Macros_Parser
	 */
	public function get_parser(): Macros_Parser {
		if ( is_null( $this->parser ) ) {
			$this->parser = new Macros_Parser();
		}

		return $this->parser;
	}

	/**
	 * @return Dynamic_Preset
	 */
	public function get_dynamic_preset(): Dynamic_Preset {
		if ( is_null( $this->dynamic_preset ) ) {
			$this->dynamic_preset = new Dynamic_Preset();
		}

		return $this->dynamic_preset;
	}
}
