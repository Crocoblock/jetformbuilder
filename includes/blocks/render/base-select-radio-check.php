<?php


namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Plugin;

abstract class Base_Select_Radio_Check extends Base
{

    public function set_options() {
        $this->args['field_options'] = $this->get_field_options();
    }

    /*
    * Returns field options list
    *
    * @return array
    */
    public function get_field_options() {

        $options_from = ! empty( $this->args['field_options_from'] ) ? $this->args['field_options_from'] : 'manual_input';
        $options      = array();
        $value_from   = ! empty( $this->args['value_from_key'] ) ? $this->args['value_from_key'] : false;
        $calc_from    = ! empty( $this->args['calculated_value_from_key'] ) ? $this->args['calculated_value_from_key'] : false;

        if ( 'manual_input' === $options_from ) {

            if ( ! empty( $this->args['field_options'] ) ) {

                foreach ( $this->args['field_options'] as $option ) {

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

            $post_type = ! empty( $this->args['field_options_post_type'] ) ? $this->args['field_options_post_type'] : false;

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

            $result = array();
            $post_props = array( 'post_title', 'post_content', 'post_name', 'post_excerpt' );

            foreach ( $posts as $post ) {

                $item = array(
                    'value' => $post->ID,
                    'label' => $post->post_title,
                );

                if ( ! empty( $value_from ) ) {
                    if ( in_array( $value_from, $post_props ) ) {
                        $item['value'] = $post->$value_from;
                    } else {
                        $item['value'] = get_post_meta( $post->ID, $value_from, true );
                    }
                }

                if ( ! empty( $calc_from ) ) {
                    if ( in_array( $calc_from, $post_props ) ) {
                        $item['calculate'] = $post->$calc_from;
                    } else {
                        $item['calculate'] = get_post_meta( $post->ID, $calc_from, true );
                    }
                }

                $result[] = $item;

            }

            return $result;

        } elseif ( 'terms' === $options_from ) {

            $tax = ! empty( $this->args['field_options_tax'] ) ? $this->args['field_options_tax'] : false;

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

            $result = array();

            foreach ( $terms as $term ) {

                $item = array(
                    'value' => $term->term_id,
                    'label' => $term->name,
                );

                if ( ! empty( $value_from ) ) {
                    $item['value'] = get_term_meta( $term->term_id, $value_from, true );
                }

                if ( ! empty( $calc_from ) ) {
                    $item['calculate'] = get_term_meta( $term->term_id, $calc_from, true );
                }

                $result[] = $item;

            }

            return $result;

        } elseif ( 'generate' === $options_from ) {

            $generator = ! empty( $this->args['generator_function'] ) ? $this->args['generator_function'] : false;
            $field     = ! empty( $this->args['generator_field'] ) ? $this->args['generator_field'] : false;

            if ( ! $generator ) {
                return $options;
            }

            if ( ! Plugin::instance()->form ) {
                return $options;
            }

            $generators         = Plugin::instance()->form->get_options_generators();
            $generator_instance = isset( $generators[ $generator ] ) ? $generators[ $generator ] : false;

            if ( ! $generator_instance ) {
                return $options;
            }

            $generated = $generator_instance->generate( $field );
            $result = array();

            if ( ! empty( $value_from || ! empty( $calc_from ) ) ) {
                foreach ( $generated as $key => $data ) {

                    if ( is_array( $data ) ) {
                        $item = $data;
                    } else {
                        $item = array(
                            'value' => $key,
                            'label' => $data,
                        );
                    }

                    $post_id = $item['value'];

                    if ( ! empty( $value_from ) ) {
                        $item['value'] = get_post_meta( $post_id, $value_from, true );
                    }

                    if ( ! empty( $calc_from ) ) {
                        $item['calculate'] = get_post_meta( $post_id, $calc_from, true );
                    }

                    $result[] = $item;

                }

                return $result;

            } else {
                return $generated;
            }

        } else {

            $key = ! empty( $this->args['field_options_key'] ) ? $this->args['field_options_key'] : '';

            if ( $key ) {
                $options = get_post_meta( $this->post->ID, $key, true );
                $options = $this->maybe_parse_repeater_options( $options );
            }

        }

        return $options;

    }

}