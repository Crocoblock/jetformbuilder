<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Modules\Advanced_Choices\Block_Renders\Choices_Field_Render;
use JFB_Modules\Switch_Page_On_Change;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choices_Field extends Base {

	use Block_Metadata_Trait;

	const CONTEXT_DEFAULT  = 'jet-forms/choices-field--default';
	const CONTEXT_NAME     = 'jet-forms/choices-field--name';
	const CONTEXT_RAW_NAME = 'jet-forms/choices-field--raw-name';
	const CONTEXT_REQUIRED = 'jet-forms/choices-field--required';
	const CONTEXT_MULTIPLE = 'jet-forms/choices-field--multiple';

	public $use_style_manager = false;

	public function get_name() {
		return 'choices-field';
	}

	protected function iterate_args_metadata_block(): \Generator {
		yield from parent::iterate_args_metadata_block();

		yield 'skip_inner_blocks' => true;
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_LIST );
	}

	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		if ( $this->is_allowed_multiple() ) {
			$this->set_attribute( Switch_Page_On_Change\Module::ATTRIBUTE_NAME, false );
		}
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

	public function is_allowed_multiple(): bool {
		return ! ! ( $this->block_attrs['allow_multiple'] ?? false );
	}
}
