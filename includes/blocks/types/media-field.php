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

	protected $value_format    = 'url';
	protected $max_files       = 1;
	protected $max_size        = 1;
	protected $max_size_format = '';

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
		$this->set_max_size();
	}

	protected function parse_preset( $preset ): array {
		if ( empty( $preset ) ) {
			return array();
		}

		if ( ! $this->is_both_format() ) {
			// is value format wrong
			if ( ! is_string( $preset ) && ! is_numeric( $preset ) ) {
				return array();
			}
			$preset = (string) $preset;

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
		jet_form_builder()->blocks->register_form_scripts();
		if ( ! Tools::is_editor() ) {
			File_Upload::instance()->enqueue_scripts();
		}

		return ( new Media_Field_Render( $this ) )->render();
	}

	public function get_max_size_message(): string {
		$message = $this->block_attrs['validation']['messages']['max_size'];

		if ( empty( $message ) ) {
			$message = 'Maximum file size: %max_size%';
		}

		return str_replace( '%max_size%', size_format( $this->get_max_size() ), $message );
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

	public function get_max_files(): int {
		return $this->max_files;
	}

	public function is_both_format(): bool {
		return 'both' === $this->value_format;
	}

	/**
	 * @return int
	 */
	public function get_max_size(): int {
		return $this->max_size;
	}

	protected function set_max_size() {
		$size_in_mb = $this->block_attrs['max_size'] ?? false;

		if ( false === $size_in_mb ) {
			$this->max_size = wp_max_upload_size();

			return;
		}

		$this->max_size = ( MB_IN_BYTES * $size_in_mb );
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


}
