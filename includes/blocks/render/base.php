<?php
namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Classes\Arguments_Trait;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Form_Preset;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

    use Attributes_Trait;
    use Arguments_Trait;
    use Get_Template_Trait;

	public $form_id;
    public $block_data;
    public $live_form;
    public $preset;


    public function __construct( $args = array() ) {
        $this->form_id = Live_Form::instance()->form_id;

        $this->set_live_form();
        $this->set_args( $args );
	}

	abstract public function get_name();

    public function set_live_form() {
        $this->live_form = Live_Form::instance();
    }

    public function set_form_preset() {
        $this->preset = Form_Preset::instance();
    }


	public function set_args( $args = array() ) {
	    $this->args = $args;

	    if ( $this->block_data ) {
            $this->args['type'] = $this->get_field_type();
        }
    }

    private function is_field( $needle ) {
        return Plugin::instance()->form->is_field( $this->block_data['blockName'], $needle );
    }

    private function get_field_type() {
        return Plugin::instance()->form->field_name( $this->args['blockName'] );
    }

	/**
	 * Returns field label
	 *
	 * @return [type] [description]
	 */
	public function get_field_label() {

		ob_start();
		if ( ! empty( $this->args['label'] ) && $this->label_allowed() ) {
			$args = $this->args;
			include $this->get_template( 'common/field-label.php' );
		}
		return ob_get_clean();

	}

	/**
	 * Returns field description
	 *
	 * @return [type] [description]
	 */
	public function get_field_desc() {

		ob_start();
		if ( ! empty( $this->args['desc'] ) && $this->label_allowed() ) {
			$args = $this->args;
			include $this->get_template( 'common/field-description.php' );
		}
		return ob_get_clean();

	}

	/**
	 * Defines if this form control supports label
	 *
	 * @return [type] [description]
	 */
	public function label_allowed() {
		return true;
	}



	/**
	 * Returns field name with repeater prefix if needed
	 */
	public function get_field_name( $name ) {

		//Find some solution for the repeater field

		if ( $this->live_form && $this->live_form->current_repeater ) {
			$repeater_name = ! empty( $this->live_form->current_repeater['name'] ) ? $this->live_form->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->live_form->current_repeater_i ) ? $this->live_form->current_repeater_i : '__i__';
			$name = sprintf( '%1$s[%2$s][%3$s]', $repeater_name, $index, $name );
		}

		return $name;

	}

	/**
	 * Returns field ID with repeater prefix if needed
	 */
	public function get_field_id( $name ) {

		if ( is_array( $name ) ) {
			$name = $name['name'];
		}
		//Find some solution for the repeater field

		if ( $this->live_form && $this->live_form->current_repeater ) {
			$repeater_name = ! empty( $this->factory->current_repeater['name'] ) ? $this->live_form->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->live_form->current_repeater_i ) ? $this->live_form->current_repeater_i : '__i__';
			$name = sprintf( '%1$s_%2$s_%3$s', $repeater_name, $index, $name );
		}

		return $name;

	}

	public function render() {

		if ( ! is_array( $this->args ) ) {
		    return;
        }

		$defaults = array(
			'default'     => '',
			'name'        => '',
			'placeholder' => '',
			'required'    => false,
		);

		$sanitized_args = array();

		foreach ( $this->args as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}
		$args          = wp_parse_args( $sanitized_args, $defaults );

		$template_name = $this->get_name();
		$template      = $this->get_template( 'fields/' . $template_name . '.php' );
		$label         = $this->get_field_label();
		$desc          = $this->get_field_desc();
		$layout        = $this->live_form ? $this->live_form->spec_data->fields_layout : 'column';

        $args['default'] = $this->get_default_from_preset( $args );
		
		if ( 'column' === $layout ) {
            ob_start();
			include $this->get_template( 'common/field-column.php' );
			$result_field = ob_get_clean();
		} else {
            ob_start();
            include $this->get_template( 'common/field-row.php' );
            $result_field = ob_get_clean();
		}

        return $result_field;
	}

	private function get_default_from_preset( $args ) {
	    if ( ! $this->preset ) {
	        return $args['default'];
        }

        $preset_value = $this->preset->get_field_value( $args['name'], $args );
        $result_value = '';

        if ( ! $this->live_form->current_repeater ) {

            if ( $preset_value['rewrite'] ) {
                $result_value = $preset_value['value'];
            } elseif ( ! $this->is_field( 'hidden' ) ) {
                $result_value = $this->preset->maybe_adjust_value( $args );
            }

        } elseif ( ! empty( $this->live_form->current_repeater['values'] )
            && isset( $this->live_form->current_repeater['values'][ $args['name'] ] ) )
        {
            $result_value = $this->live_form->current_repeater['values'][ $args['name'] ];
        }

        return $result_value ? $result_value : $args['default'];
    }

}
