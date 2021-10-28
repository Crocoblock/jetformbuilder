<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Base as BaseRender;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Form_Break;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Progress_Bar extends Base {

	public function general_style_unregister() {
		return array( 'input', 'label', 'description', 'required' );
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'progress-bar';
	}

	public function use_preset() {
		return false;
	}

	public function render_row_layout() {
		return false;
	}

	public function after_set_pages( Form_Break $break ) {
		$context_last_name = 'jet-forms/conditional-block--last_page_name';
		$last_name         = $this->block_context[ $context_last_name ] ?? '';

		$break->add_progress( array(
			'label' => $last_name ?: 'Last Page'
		) );
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$break    = $this->get_current_form_break();
		$template = $break->render_progress( $this->block_attrs['progress_type'] ?? '' );

		return ( new class( $this ) extends BaseRender {

			public function get_name() {
				return 'progress-bar';
			}

			public function label_allowed() {
				return false;
			}

		} )->render_without_layout( $template );
	}


	public function block_data( $editor, $handle ) {
		$break = ( new Form_Break() )->set_editor_mode( true );

		wp_localize_script(
			$handle,
			'JetFormProgressBar',
			apply_filters(
				"jet-form-builder/field-data/{$this->get_name()}",
				array(
					'progress_types' => array(
						array(
							'value' => 'default',
							'label' => __( 'Default', 'jet-form-builder' ),
							'html'  => $break->render_progress()
						)
					)
				), $break
			)
		);
	}

}
