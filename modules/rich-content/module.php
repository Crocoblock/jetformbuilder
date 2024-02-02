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
			array( $this, 'apply_dynamic_preset' )
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

	public function apply_submit_macros( string $content ): string {
		if ( ! did_action( 'jet-form-builder/request' ) ) {
			return $content;
		}

		return $this->get_parser()->parse_macros( $content );
	}

	public function apply_dynamic_preset( string $content ): string {
		return Tools::to_string( $this->get_dynamic_preset()->parse_json( $content ) );
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
