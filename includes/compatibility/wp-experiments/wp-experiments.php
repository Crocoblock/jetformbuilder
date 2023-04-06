<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Choices_Field;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wp_Experiments {

	public function __construct() {
		add_filter(
			'render_block_jet-forms/choices-field',
			array( $this, 'render_choice_with_layout' ),
			10,
			2
		);
	}

	/**
	 * @param string $block_content The block content.
	 * @param array $block The full block, including name and attributes.
	 */
	public function render_choice_with_layout( string $block_content, array $block ): string {
		/** @var Choices_Field $choice */
		$choice = jet_form_builder()->blocks->get_field_by_name( 'choices-field' );

		$choice->set_block_data( $block['attrs'] ?? array() );

		$template = array(
			$choice->start_form_row( true ),
			$block_content,
			$choice->end_form_row( true ),
		);

		return implode( "\r\n", $template );
	}

}
