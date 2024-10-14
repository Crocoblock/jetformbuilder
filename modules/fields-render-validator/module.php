<?php

namespace JFB_Modules\Fields_Render_Validator;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

class Module {
    protected $fields_stack = [];

    public function __construct() {
        add_filter( 'jet-form-builder/after-start-form', [ $this, 'reset_stack' ] );
        add_filter( 'jet-form-builder/after-render-field', [ $this, 'update_stack' ], 0, 3 );
    }

    public function reset_stack( string $html ): string {
        $this->fields_stack = [];
        return $html;
    }

    public function update_stack( string $content, string $field_name, array $attrs ): string {
        if ( isset($attrs['name']) &&  $attrs['name'] !== 'undefined' ) {
            if (   in_array( $attrs['name'], $this->fields_stack ) ) {
                $content .= "<div class='jet-form-builder__uniq-name-error' style='color:red;font-size: 12px;'>You already have field < " . $attrs['name'] . " > in this form. Please rename current field to avoid form processing errors.</div>";
            } else {
                $this->fields_stack[] = $attrs['name'];
            }
        }

        return $content;
    }
}
