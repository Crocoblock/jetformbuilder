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
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer_It;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer_Settings_It;

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
			new Integer_Sanitizer(),
			new Number_Sanitizer(),
			new Abs_Integer_Sanitizer(),
			new Abs_Number_Sanitizer(),
			new Custom_Sanitizer(),
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
		add_action( 'jet-form-builder/validate-field', array( $this, 'sanitize_field' ) );
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);
		remove_action( 'jet-form-builder/validate-field', array( $this, 'sanitize_field' ) );
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

	public function sanitize_field( Field_Data_Parser $parser ) {
		$sanitizers = $parser->get_setting( self::ATTRIBUTE_NAME );

		// skip sanitize, if we don't have applied sanitizers or already have the errors
		if ( ! is_array( $sanitizers ) || count( $parser->get_errors() ) ) {
			return;
		}

		/** @var Value_Sanitizer_It $sanitizer */
		foreach ( $this->iterate_sanitizers( $sanitizers ) as $sanitizer ) {
			$sanitizer->do_sanitize( $parser );
		}

		// value has changed, so we need to re-run validation
		$parser->check_response();
	}

	private function iterate_sanitizers( array $sanitizers ): \Generator {
		foreach ( $sanitizers as $sanitizer ) {
			$type = is_array( $sanitizer ) ? ( $sanitizer['value'] ?? '' ) : $sanitizer;

			if ( ! $type ) {
				continue;
			}

			try {
				$item = $this->rep_get_item( $type );
			} catch ( Repository_Exception $exception ) {
				continue;
			}

			if ( ! ( $item instanceof Value_Sanitizer_Settings_It ) || ! is_array( $sanitizer ) ) {
				yield $item;
				continue;
			}

			unset( $sanitizer['value'] );
			$item = clone $item;

			$item->set_settings( $sanitizer );

			yield $item;
		}
	}


}
