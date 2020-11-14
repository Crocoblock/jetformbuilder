<?php
namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Classes\Arguments_Trait;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Form_Preset;
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
	private $preset;

	public $block_data;
	public $current_repeater_i = false;
	public $current_repeater;

	public function __construct( $form_id, $args = array() ) {
        $this->form_id = $form_id;

        $this->set_args( $args );
        $this->set_meta_args();
	}

	abstract public function get_name();

    /**
     * @param Form_Preset $preset
     * @return Base
     */
    public function set_preset( $preset ) {
        $this->preset = $preset;

        return $this;
    }

	public function set_args( $args = array() ) {
	    $this->args = $args['attrs'];

	    unset($args['attrs']);

	    $this->block_data = $args;

	    if ( $this->block_data ) {
            $this->args['type'] = $this->get_field_type();
        }
    }

    private function is_field( $needle ) {
        return Plugin::instance()->form->is_field( $this->block_data['blockName'], $needle );
    }

    private function get_field_type() {
        return Plugin::instance()->form->field_name( $this->block_data['blockName'] );
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
	 * Returns field options list
	 *
	 * @return array
	 */
	public function get_field_options() {

		$args         = $this->args;
		$options_from = ! empty( $args['field_options_from'] ) ? $args['field_options_from'] : 'manual_input';
		$options      = array();

		if ( 'manual_input' === $options_from ) {

			if ( ! empty( $args['field_options'] ) ) {

				foreach ( $args['field_options'] as $option ) {

					$item = array(
						'value' => $option['value'],
						'label' => $option['label'],
					);

					if ( isset( $option['calculate'] ) && '' !== $option['calculate'] ) {
						$item['calculate'] = $option['calculate'];
					}

					$options[] = $item;
				}

			}

		} elseif ( 'posts' === $options_from ) {

			$post_type = ! empty( $args['field_options_post_type'] ) ? $args['field_options_post_type'] : false;

			if ( ! $post_type ) {
				return $options;
			}

			$posts = get_posts( array(
				'post_status'    => 'publish',
				'posts_per_page' => -1,
				'post_type'      => $post_type,
			) );

			if ( empty( $posts ) ) {
				return $options;
			}

			return wp_list_pluck( $posts, 'post_title', 'ID' );

		} elseif ( 'terms' === $options_from ) {

			$tax = ! empty( $args['field_options_tax'] ) ? $args['field_options_tax'] : false;

			if ( ! $tax ) {
				return $options;
			}

			$terms = get_terms( array(
				'taxonomy'   => $tax,
				'hide_empty' => false,
			) );

			if ( empty( $terms ) || is_wp_error( $terms ) ) {
				return $options;
			}

			return wp_list_pluck( $terms, 'name', 'term_id' );

		} elseif ( 'generate' === $options_from ) {

			$generator = ! empty( $args['generator_function'] ) ? $args['generator_function'] : false;
			$field     = ! empty( $args['generator_field'] ) ? $args['generator_field'] : false;

			if ( ! $generator || ! $field ) {
				return $options;
			}

			if ( ! $this->manager ) {
				return $options;
			}

			$generators         = $this->manager->get_options_generators();
			$generator_instance = isset( $generators[ $generator ] ) ? $generators[ $generator ] : false;

			if ( ! $generator_instance ) {
				return $options;
			} else {
				return $generator_instance->generate( $field );
			}

		} else {

			$key = ! empty( $args['field_options_key'] ) ? $args['field_options_key'] : '';

			if ( $key ) {
				$options = get_post_meta( $this->post->ID, $key, true );
				$options = $this->maybe_parse_repeater_options( $options );
			}

		}

		return $options;

	}



	/**
	 * Returns field name with repeater prefix if needed
	 */
	public function get_field_name( $name ) {

		//Find some solution for the repeater field

		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';
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

		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';
			$name = sprintf( '%1$s_%2$s_%3$s', $repeater_name, $index, $name );
		}

		return $name;

	}

	public function set_meta_args() {
        $this->args = array_merge(
            $this->args,
            Plugin::instance()->post_type->get_args( $this->form_id )
        );
    }

	public function render( $data = array() ) {

		$args = $this->args;
		$data = ( object ) $data;

		$defaults = array(
			'default'     => '',
			'name'        => '',
			'placeholder' => '',
			'required'    => false,
		);

		$sanitized_args = array();

		foreach ( $args as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}
		$args          = wp_parse_args( $sanitized_args, $defaults );

		$template_name = $this->get_name();
		$template      = $this->get_template( 'fields/' . $template_name . '.php' );
		$label         = $this->get_field_label();
		$desc          = $this->get_field_desc();
        /**
         * TODO:
         */
		$layout        = 'column';

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

        if ( ! $this->current_repeater ) {
            if ( $preset_value['rewrite'] ) {
                $result_value = $preset_value['value'];
            } elseif ( ! $this->is_field( 'hidden' ) ) {
                $result_value = $this->preset->maybe_adjust_value( $args );
            }
        } elseif ( ! empty( $this->current_repeater['values'] ) && isset( $this->current_repeater['values'][ $args['name'] ] ) ) {
            $result_value = $this->current_repeater['values'][ $args['name'] ];
        }

        return $result_value ? $result_value : $args['default'];
    }

}
