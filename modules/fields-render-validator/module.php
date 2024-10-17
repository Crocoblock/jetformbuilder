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
		add_filter( 'jet-form-builder/after-start-form', array( $this, 'reset_stack' ), 0 );
		add_filter( 'jet-form-builder/after-render-field', array( $this, 'update_stack' ), 0, 5 );
	}

	public function reset_stack( string $html ): string {
		$this->fields_stack = array();
		return $html;
	}

	public function update_stack( $output, $field_name, $attrs, $content, $wp_block ): string {

		if ( isset( $attrs['name'] ) && 'undefined' !== $attrs['name'] ) {
			$name = $attrs['name'];

			$context = $wp_block->context ?? '';
			if ( $context ) {
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
