<?php


namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Blocks\Render\Choices_Field_Render;
use Jet_Form_Builder\Plugin;
use function cli\render;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choices_Field extends Base {

	const HANDLE = 'jet-fb-choices-field';

	public function get_name() {
		return 'choices-field';
	}

	public function use_preset() {
		return false;
	}

	public function register_block_type() {
		parent::register_block_type();

		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/choices.field{min}.js' ),
			array(
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_LIST );
	}

	/**
	 * @param null|array $wp_block
	 *
	 * @throws Render_Empty_Field
	 */
	public function get_block_renderer( $wp_block = null ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			throw new Render_Empty_Field();
		}

		return ( new Choices_Field_Render( $this ) )->render( $wp_block );
	}
}
