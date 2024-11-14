<?php

namespace JFB_Modules\Fields_Render_Validator;

use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Module\Base_Module_After_Install_It;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It,
	Base_Module_Dir_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'fields-render-validator';
	}

	public function condition(): bool {
		return current_user_can( 'manage_options' );
	}

	protected $fields_stack = array();

	public function init_hooks() {
		add_filter( 'register_block_type_args', array( $this, 'set_uses_context' ), 10, 2 );

		add_filter( 'jet-form-builder/after-start-form', array( $this, 'reset_stack' ), 0 );
		add_filter( 'jet-form-builder/after-render-field', array( $this, 'update_stack' ), 0, 5 );
	}


	/**
	 * Set default context for all form elements jet-forms/conditional-block--name
	 *
	 * @link https://github.com/Crocoblock/issues-tracker/issues/12874
	 */
	public function set_uses_context( $args, $block_name ) {
		if (
			false !== strpos( $block_name, 'jet-forms/' ) &&
			'jet-forms/conditional-block' !== $block_name
		) {
			if ( empty( $args['uses_context'] ) ) {
				$args['uses_context'] = array();
			}
			$args['uses_context'] = array_merge(
				$args['uses_context'],
				array( 'jet-forms/conditional-block--name', 'jet-forms/conditional-block--last_page_name' )
			);
		}
		return $args;
	}

	public function reset_stack( string $html ): string {
		$this->fields_stack = array();
		return $html;
	}

	public function update_stack( $output, $field_name, $attrs, $content, $wp_block ): string {

		if ( isset( $attrs['name'] ) && 'undefined' !== $attrs['name'] ) {
			$name = $attrs['name'];

			$context = $wp_block->context ?? '';

			/**
			 * do nothing if field_name is conditional-block
			 *
			 * @link https://github.com/Crocoblock/issues-tracker/issues/12874
			 */
			if ( 'conditional-block' === $field_name ) {
				return $output;
			}

			if ( $context ) {
				/**
				 * do nothing if context is jet-forms/conditional-block--name
				 *
				 * @link https://github.com/Crocoblock/issues-tracker/issues/12874
				 */
				if ( isset( $context['jet-forms/conditional-block--name'] ) ) {
					return $output;
				}
				$context_name = $context['jet-forms/repeater-field--name'] ?? '';
				$context_index = $context['jet-forms/repeater-row--current-index'] ?? '';
				if ( '' !== $context_name ) {
					$name = $context_name . $context_index . $name;
				}
			}

			if ( in_array( $name, $this->fields_stack ) ) {
				$parent = $context ? 'repeater' : 'form';
				$output .= "<div class='jet-form-builder__uniq-name-error' style='color:red;font-size: 12px;'>You already have field < " . esc_attr( $attrs['name'] ) . ' > in this ' . $parent . '. Please rename current field to avoid form processing errors.</div>';
			} else {
				$this->fields_stack[] = $name;
			}
		}

		return $output;
	}

	public function on_install() {
	}

	public function on_uninstall() {
	}

	public function remove_hooks() {
	}

}
