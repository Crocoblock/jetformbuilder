<?php
namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Blocks\Render\Repeater_Field_Render;
use Jet_Form_Builder\Form_Preset;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Repeater_Field extends Base {

    public $manage_items;
    public $items_field;
    public $repeater_calc_type;
    public $new_item_label;
    public $settings;
    public $default_value;

    public $calc_data           = array();
    public $calc_dataset        = '';

    public function __construct() {
        $this->unregister_attribute( 'placeholder' );

        parent::__construct();
    }

    /**
     * Returns block title
     *
     * @return string [type] [description]
     */
	public function get_title() {
		return 'Repeater Field';
	}

    /**
     * Returns block name
     *
     * @return string [type] [description]
     */
	public function get_name() {
		return 'repeater-field';
	}

    /**
     * Returns icon class name
     *
     * @return string [type] [description]
     */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

    /**
     * Returns current block render
     *
     * @param null $wp_block
     * @return string
     */
	public function get_block_renderer( $wp_block = null ) {
	    $this->set_manage_items();
	    $this->set_items_field();
	    $this->set_repeater_calc_type();
	    $this->set_new_repeater_label();
	    $this->set_settings();
	    $this->set_default_value();
	    $this->set_calc_data();
	    $this->set_calc_dataset();

		return ( new Repeater_Field_Render( $this ) )->render( $wp_block );
	}

	public function set_manage_items() {
        $this->manage_items = ! empty( $this->block_attrs['manage_items_count'] ) ? $this->block_attrs['manage_items_count'] : 'manually';
    }

    public function set_items_field() {
        $this->items_field = ! empty( $this->block_attrs['manage_items_count_field'] ) ? $this->block_attrs['manage_items_count_field'] : false;
    }

    public function set_repeater_calc_type() {
        $this->repeater_calc_type = ! empty( $this->block_attrs['repeater_calc_type'] ) ? $this->block_attrs['repeater_calc_type'] : 'default';
    }

    public function set_new_repeater_label() {
        $this->new_item_label = ! empty( $this->block_attrs['new_item_label'] ) ? $this->block_attrs['new_item_label'] : __( 'Add new', 'jet-engine' );
    }

    public function set_settings() {
        $this->settings = htmlspecialchars( json_encode( array(
            'manageItems' => $this->manage_items,
            'itemsField'  => $this->items_field,
            'calcType'    => $this->repeater_calc_type,
        ) ) );
    }

    public function set_default_value() {
        $preset_value = Form_Preset::instance()->get_field_value( $this->block_attrs['name'], $this->block_attrs );

        if ( $preset_value['rewrite'] ) {
            $args['default'] = $preset_value['value'];
        } else {
            $args['default'] = Form_Preset::instance()->maybe_adjust_value( $this->block_attrs );
        }

        $this->default_value = array_merge( $this->block_attrs, $args );
    }

    public function set_calc_data() {
        if ( 'custom' === $this->repeater_calc_type ) {
            $this->calc_data = $this->get_calculated_data();
        }
    }

    public function set_calc_dataset() {
        if ( ! $this->calc_data ) {
            return;
        }

        foreach ( $this->calc_data as $data_key => $data_value ) {

            if ( is_array( $data_value ) ) {
                $data_value = json_encode( $data_value );
            }
            $this->calc_dataset .= sprintf( ' data-%1$s="%2$s"', $data_key, htmlspecialchars( $data_value ) );
        }
    }
    /**
     * Get calulation formula for calculated field
     *
     * @return [type] [description]
     */
    public function get_calculated_data() {

        if ( empty( $this->block_attrs['calc_formula'] ) ) {
            return '';
        }

        $listen_fields = array();

        $formula = preg_replace_callback(
            '/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/',
            function( $matches ) use ( &$listen_fields ) {

                switch ( strtolower( $matches[1] ) ) {
                    case 'field':

                        $listen_fields[] = $matches[2];
                        return '%' . $matches[2] . '%';

                    case 'meta':

                        return get_post_meta( $this->post->ID, $matches[2], true );

                    default:
                        $macros_name = $matches[1];
                        $field_key   = isset( $matches[2] ) ? $matches[2] : '' ;

                        if( $field_key ){
                            $listen_fields[] = $field_key;
                        }

                        return apply_filters( "jet-form-builder/calculated-data/$macros_name", $matches[0], $matches );
                }

            },
            $this->block_attrs['calc_formula']
        );

        return array(
            'formula'       => $formula,
            'listen_fields' => $listen_fields,
            'listen_to'     => $listen_fields,
        );
    }


    public function block_data( $editor, $handle )
    {
        wp_localize_script( $handle, 'jetRepeaterFieldData', array(
            'manage_items_count' => array(
                array(
                    'value' => 'manually',
                    'label' => __( 'Manually', 'jet-form-builder' )
                ),
                array(
                    'value' => 'dynamically',
                    'label' => __( 'Dynamically (get count from form field)', 'jet-form-builder' )
                ),
            ),
            'repeater_calc_type' => array(
                array(
                    'value' => 'default',
                    'label' => __( 'Default (returns rows count)', 'jet-form-builder' )
                ),
                array(
                    'value' => 'custom',
                    'label' => __( 'Custom (calculate custom value for each row)', 'jet-form-builder' )
                ),
            ),
            'help_messages' => array(
                'calc_hidden' => __(
                    'Check this to hide calculated field',
                    'jet-form-builder'
                ),
            ),
        ) );
    }

    /**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
        return array(
            'calc_formula'              => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'manage_items_count'        => array(
                'type'      => 'string',
                'default'   => 'manually'
            ),
            'new_item_label'            => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'manage_items_count_field'  => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'repeater_calc_type'        => array(
                'type'      => 'string',
                'default'   => 'default'
            ),
        );
	}

}
