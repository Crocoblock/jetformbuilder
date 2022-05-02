<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Media_Field_Render;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\File_Upload;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Media_Field extends Base {

	protected $value_format = 'url';
	protected $max_files = 1;
	protected $insert_attachment = false;

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'media-field';
	}

	public function get_field_name( $name = '' ) {
		$max_files = absint( $this->block_attrs['max_files'] ?? 1 );

		$suffix = '';
		if ( 1 < $max_files ) {
			$suffix = '[]';
		}

		return ( parent::get_field_name() . $suffix );
	}

	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		$this->set_value_format();
		$this->set_max_files();
		$this->set_insert_attachment();
	}

	protected function parse_preset( $preset ): array {
		if ( empty( $preset ) ) {
			return array();
		}

		if ( ! $this->is_both_format() ) {
			return explode( ',', str_replace( ', ', ',', $preset ) );
		}

		return isset( $preset['id'] ) ? array( $preset ) : $preset;
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_EXACTLY );
	}

	protected function get_default_from_preset( $attributes = array() ) {
		$preset = parent::get_default_from_preset( $attributes );
		$value  = $this->parse_preset( $preset );
		$files  = array();

		foreach ( $value as $item ) {
			switch ( $this->get_value_format() ) {
				case 'id':
					$files[] = array(
						'url' => wp_get_attachment_url( $item ),
						'id'  => $item,
					);
					break;

				case 'both':
					if ( is_array( $item ) && isset( $item['url'] ) && isset( $item['id'] ) ) {
						$files[] = array(
							'url' => $item['url'],
							'id'  => $item['id'],
						);
					}
					break;
				default:
					$files[] = array(
						'url' => $item,
					);
					break;
			}
		}

		return $files;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$scripts = File_Upload::instance()->ensure_media_js();

		return $scripts . ( new Media_Field_Render( $this ) )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'jetFormMediaFieldData',
			array(
				'mime_types' => Tools::get_allowed_mimes_list_for_js(),
			)
		);
	}

	public function get_value_format(): string {
		return $this->value_format;
	}

	public function is_insert_attachment(): bool {
		return $this->insert_attachment;
	}

	public function get_max_files(): int {
		return $this->max_files;
	}

	public function is_both_format(): bool {
		return 'both' === $this->value_format;
	}

	protected function set_value_format() {
		if ( ! empty( $this->block_attrs['insert_attachment'] ) ) {
			$this->value_format = $this->block_attrs['value_format'] ?? 'url';
		}
	}

	protected function set_max_files() {
		$max_files = $this->block_attrs['max_files'] ?? 1;

		$this->max_files = empty( $max_files ) ? 1 : (int) $max_files;
	}

	public function set_insert_attachment() {
		$this->insert_attachment = $this->block_attrs['insert_attachment'] ?? false;
	}


}
