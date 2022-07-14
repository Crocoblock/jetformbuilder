<?php

namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Blocks\Types\Media_Field;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Media_Field $block_type
 *
 * Class Media_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Media_Field_Render extends Base {

	protected $files;

	public function get_name() {
		return 'media-field';
	}

	protected function get_block_args(): array {
		return array(
			'max_files' => $this->block_type->get_max_files(),
			'max_size'  => $this->block_type->get_max_size(),
		);
	}

	/**
	 * @return Attributes_Trait
	 */
	public function files() {
		if ( is_null( $this->files ) ) {
			$this->files = new class() {
				use Attributes_Trait;
			};
		}

		return $this->files;
	}

	protected function render_previews(): string {
		$files = $this->block_type->block_attrs['default'];

		if ( empty( $files ) ) {
			return '';
		}

		$preview = $this->get_preview_html();
		$html    = '';

		foreach ( $files as $file ) {
			$updated = str_replace( '%file_url%', $file['url'], $preview );

			$image_ext    = array( 'jpg', 'jpeg', 'jpe', 'gif', 'png', 'svg', 'webp' );
			$img_ext_preg = '!\.(' . join( '|', $image_ext ) . ')$!i';

			if ( preg_match( $img_ext_preg, $file['url'] ) ) {
				$replace = sprintf( '<img src="%s" alt="" width="100px" height="100px">', $file['url'] );

				$updated = str_replace( '<!-- preview -->', $replace, $updated );
			}

			$html .= $updated;
		}

		return $html;
	}

	protected function get_preview_html(): string {
		ob_start();

		require Tools::get_global_template( 'fields/image-preview.php' );

		return ob_get_clean();
	}

	public function render( $wp_block = null, $template = null ) {
		$this->files()->add_attribute(
			'data-args',
			htmlspecialchars(
				Tools::encode_json( $this->get_block_args() )
			)
		);

		$field = parent::render( $wp_block, $template );

		$template = sprintf(
			'<template class="jet-form-builder__preview-template">%s</template>',
			$this->get_preview_html()
		);

		return ( $template . $field );
	}

}
