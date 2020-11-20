<?php
namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Fields_Factory;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Repeater_Field_Render extends Base {

    public $current_repeater_i = false;
    public $current_repeater;

	public function get_name() {
		return 'repeater-field';
	}

	public function render( $wp_block = null )
    {
        /**
         * Дополнительная проверка не нужна, если используем allowedBlocks
         * на стороне UI
         */
        //$children = Plugin::instance()->form->get_fields( $this->block_data['innerBlocks'], true );

       /* $children = $this->block_data['innerBlocks'];

        if ( empty( $children ) ) {
            return;
        }*/

        $manage_items = ! empty( $this->args['manage_items_count'] ) ? $this->args['manage_items_count'] : 'manually';
        $items_field = ! empty( $this->args['manage_items_count_field'] ) ? $this->args['manage_items_count_field'] : false;



        //$preset_value = $this->preset->get_field_value( $args['name'], $args );

        /*if ( $preset_value['rewrite'] ) {
            $args['default'] = $preset_value['value'];
        } else {
            $args['default'] = $this->maybe_adjust_value( $args );
        }*/

        $this->current_repeater = $this->args;

        $repeater_calc_type = ! empty( $this->args['repeater_calc_type'] ) ? $this->args['repeater_calc_type'] : 'default';
        $calc_data = false;

        if ( 'custom' === $repeater_calc_type ) {
            $calc_data = $this->get_calculated_data();
        }

        $settings = htmlspecialchars( json_encode( array(
            'manageItems' => $manage_items,
            'itemsField'  => $items_field,
            'calcType'    => $repeater_calc_type,
        ) ) );

        $calc_dataset = '';

        if ( $calc_data ) {
            foreach ( $calc_data as $data_key => $data_value ) {

                if ( is_array( $data_value ) ) {
                    $data_value = json_encode( $data_value );
                }

                $calc_dataset .= sprintf( ' data-%1$s="%2$s"', $data_key, htmlspecialchars( $data_value ) );
            }
        }

        $html = '<div class="jet-form-repeater" data-repeater="1" data-field-name="' . $this->args['name'] . '" name="' . $this->args['name'] . '" data-settings="' . $settings . '"' . $calc_dataset . '>';

        $html .= '<template class="jet-form-repeater__initial">';
        $html .= $this->render_repeater_row( $wp_block, false, $manage_items, $calc_dataset );
        $html .= '</template>';

        $html .= '<div class="jet-form-repeater__items">';

        /*if ( ! empty( $args['default'] ) && is_array( $args['default'] ) ) {
            $i = 0;
            foreach ( $args['default'] as $item ) {
                $this->current_repeater['values'] = $item;
                $this->render_repeater_row( $children, $i, $manage_items, $calc_dataset );
                $i++;
            }
            $this->current_repeater['values'] = false;
        }*/

        $html .= '</div>';

        if ( 'manually' === $manage_items ) {
            $html .= '<div class="jet-form-repeater__actions">';
            $new_item_label = ! empty( $this->args['new_item_label'] ) ? $this->args['new_item_label'] : __( 'Add new', 'jet-engine' );
            $html .= sprintf( '<button type="button" class="jet-form-builder-repeater__new">%1$s</button>', $new_item_label );
            $html .= '</div>';
        }

        $html .= '</div>';

        $this->current_repeater = false;

        return $html;
    }

    /**
     * Render current repeater row
     */
    public function render_repeater_row( $wp_block, $index = false, $manage_items = 'manually', $calc_dataset = '' ) {

        if ( false !== $index ) {
            $this->current_repeater_i = $index;
        } else {
            $index = 0;
        }

        $html = '<div class="jet-form-repeater__row" data-repeater-row="1" data-index="' . $index . '"' . $calc_dataset . '>';
        $html .= '<div class="jet-form-repeater__row-fields">';

        //$factory = new Fields_Factory( $this->form_id );
        Live_Form::instance()->set_repeater( $this->current_repeater, $this->current_repeater_i );

        foreach ( $wp_block['innerBlocks'] as $block ) {
            $html .= render_block( $block );
        }

        $html .= '</div>';

        if ( 'manually' === $manage_items ) {
            $html .= '<div class="jet-form-repeater__row-remove">';
            $html .= '<button type="button" class="jet-form-repeater__remove">&times;</button>';
            $html .= '</div>';
        }
        return $html . '</div>';
    }

    /**
	 * Get calulation formula for calculated field
	 *
	 * @return [type] [description]
	 */
	public function get_calculated_data() {

		if ( empty( $this->args['calc_formula'] ) ) {
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

						return apply_filters( "jet-engine/calculated-data/$macros_name", $matches[0], $matches );
				}

			},
            $this->args['calc_formula']
		);

		return array(
			'formula'       => $formula,
			'listen_fields' => $listen_fields,
			'listen_to'     => $listen_fields,
		);

	}

}
