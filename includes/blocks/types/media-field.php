<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Blocks\Render\Media_Field_Render;
use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Media_Field extends Base {

	const HANDLE       = 'jet-fb-media-field';
	const RESTRICTIONS = self::HANDLE . '-restrictions';

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

		// is it multiple media
		$response = isset( $preset['id'] ) ? array( $preset ) : $preset;

		return is_array( $response ) ? $response : array( $response );
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_EXACTLY );
	}

	public function get_default_from_preset( $attributes = array() ): array {
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

	public function register_block_type() {
		parent::register_block_type();

		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		wp_register_script(
			'jet-form-builder-sortable',
			Plugin::instance()->plugin_url( 'assets/lib/jquery-sortable/sortable.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/media.field.js' ),
			array(
				Manager::MAIN_SCRIPT_HANDLE,
				'jet-form-builder-sortable',
			),
			Plugin::instance()->get_version(),
			true
		);
		wp_register_script(
			self::RESTRICTIONS,
			Plugin::instance()->plugin_url( 'assets/js/frontend/media.field.restrictions.js' ),
			array(
				Validation::HANDLE,
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$render = ( new Media_Field_Render( $this ) )->render();

		if ( Tools::is_editor() ) {
			return $render;
		}

		wp_enqueue_script( self::HANDLE );

		if ( Validation::instance()->is_advanced( $this->block_attrs ) ) {
			wp_enqueue_script( self::RESTRICTIONS );
		}

		return $render;
	}

	public function get_max_size_message(): string {
		$on_empty = 'Maximum file size: %max_size%';
		$message  = $this->block_attrs['validation']['messages']['max_size'] ?? $on_empty;

		if ( empty( $message ) ) {
			$message = $on_empty;
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

		if ( ! is_numeric( $size_in_mb ) ) {
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
