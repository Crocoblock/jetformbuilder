<?php


namespace JFB_Modules\Sanitize_Value;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer;

final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Repository_Pattern_Trait;

	const SUPPORT_NAME   = 'jetFBSanitizeValue';
	const ATTRIBUTE_NAME = 'sanitizeValue';

	public function rep_item_id() {
		return 'sanitize-value';
	}

	public function condition(): bool {
		return true;
	}

	public function rep_instances(): array {
		return array(
			new Email_Sanitizer(),
			new Key_Sanitizer(),
			new Text_Sanitizer(),
			new Textarea_Sanitizer(),
			new Title_Sanitizer(),
			new Url_Sanitizer(),
			new User_Sanitizer(),
		);
	}

	public function on_install() {
		$this->rep_install();

		\WP_Block_Supports::get_instance()->register(
			self::SUPPORT_NAME,
			array(
				'register_attribute' => array( $this, 'register_support' ),
			)
		);
	}

	public function on_uninstall() {
		$this->rep_clear();
		\WP_Block_Supports::get_instance()->register( self::SUPPORT_NAME, array() );
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'register_editor_scripts' ), 0 );

		/**
		 * Sanitize values after 'block-parsers' module
		 *
		 * @see \JFB_Modules\Block_Parsers\Module::init_hooks
		 */
		add_action( 'jet-form-builder/request', array( $this, 'sanitize_request' ), 1 );
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);
		remove_action( 'jet-form-builder/request', array( $this, 'init_request' ), 1 );
	}

	public function register_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_NAME ) ) &&
			! array_key_exists( self::ATTRIBUTE_NAME, $block_type->attributes )
		) {
			$block_type->attributes[ self::ATTRIBUTE_NAME ] = array(
				'type'    => 'array',
				'default' => array(),
			);
		}
	}

	public function register_editor_scripts() {
		$handle = $this->get_handle();

		wp_enqueue_script(
			$handle,
			$this->get_url( 'assets/build/js/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			$handle,
			'JetFBValueSanitizers',
			$this->rep_get_keys()
		);
	}

	public function sanitize_request() {
		/** @var Field_Data_Parser $parser */
		foreach ( jet_fb_context()->iterate_parsers_list() as $parser ) {
			if ( $parser->is_in_template() ) {
				continue;
			}
			/** @var Value_Sanitizer $sanitizer */
			foreach ( $this->iterate_sanitizers( $parser ) as $sanitizer ) {
				$sanitizer->do_sanitize( $parser );
			}
		}
	}

	private function iterate_sanitizers( Field_Data_Parser $parser ): \Generator {
		$sanitizers = $parser->get_setting( self::ATTRIBUTE_NAME );

		if ( ! is_array( $sanitizers ) ) {
			return;
		}

		foreach ( $sanitizers as $sanitizer ) {
			if ( empty( $sanitizer['type'] ) ) {
				continue;
			}

			try {
				yield $this->rep_get_item( $sanitizer['type'] );

			} catch ( Repository_Exception $exception ) {
				continue;
			}
		}
	}


}
