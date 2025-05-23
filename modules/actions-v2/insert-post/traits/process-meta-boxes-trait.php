<?php

namespace JFB_Modules\Actions_V2\Insert_Post\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Trait Process_Meta_Boxes_Trait
 *
 * @package JFB_Modules\Actions_V2\Insert_Post\Traits
 */
trait Process_Meta_Boxes_Trait {
    /**
     * Process meta boxes for the post
     *
     * @param int $post_id Post ID
     * @return void
     */
    protected function process_meta_boxes( $post_id, $modifier ) {
        if ( ! class_exists( 'Cherry_X_Post_Meta' ) || ! function_exists( 'jet_engine' ) ) {
            return;
        }

        if ( ! $modifier || empty( $modifier->fields_map ) ) {
            return;
        }

        if ( ! $post_id ) {
            return;
        }

        $post_type       = get_post_type( $post_id );
        $fields_map      = $modifier->fields_map;
        $all_meta_fields = jet_engine()->meta_boxes->get_registered_fields();
        $found_fields    = $all_meta_fields[ $post_type ] ?? array();

        if ( ! empty( $found_fields ) ) {
            $args = array(
                'page'   => array( $post_type ),
                'fields' => $this->convert_repeater_structure( $found_fields, $fields_map )
            );

            $meta = new \Cherry_X_Post_Meta( $args );
            $meta->save_meta_option( $post_id );
        }
    }

    public function convert_repeater_structure( $repeater_fields, $fields_map ) {
        $result = array();

        foreach ( $repeater_fields as $key => $repeater_field ) {
            if ( in_array( $repeater_field['name'], $fields_map ) ) {
                if ( ! isset( $repeater_field['repeater_save_separate'] ) || ! filter_var( $repeater_field['repeater_save_separate'], FILTER_VALIDATE_BOOLEAN ) ) {
                    continue;
                }

                $result[ $repeater_field['name'] ] = $repeater_field;

                if ( 'repeater' === $repeater_field['type'] ) {
                    if ( isset( $result[ $repeater_field['name'] ]['repeater-fields'] ) ) {
                        $result[ $repeater_field['name'] ]['fields'] = $result[ $repeater_field['name'] ]['repeater-fields'];
                        unset( $result[ $repeater_field['name'] ]['repeater-fields'] );
                    }

                    if ( isset( $result[ $repeater_field['name'] ]['repeater_save_separate'] ) ) {
                        $result[ $repeater_field['name'] ]['save_separate'] = $result[ $repeater_field['name'] ]['repeater_save_separate'];
                        unset( $result[ $repeater_field['name'] ]['repeater_save_separate'] );
                    }

                    if ( ! empty( $result[ $repeater_field['name'] ]['fields'] ) ) {
                        $new_fields = array();
                        foreach ( $result[ $repeater_field['name'] ]['fields'] as $nested_field ) {
                            $new_fields[ $nested_field['name'] ] = $nested_field;
                        }
                        $result[ $repeater_field['name'] ]['fields'] = $new_fields;
                    }
                }
            }
        }

        return $result;
    }
}