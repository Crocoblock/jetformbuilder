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
    protected function process_meta_boxes( $post_id ) {
        if ( ! class_exists( 'Cherry_X_Post_Meta' ) ) {
            return;
        }

        if ( ! $post_id ) {
            return;
        }

        $post_id = apply_filters( 'jet-form-builder/action/process-meta-boxes/post-id', $post_id, $this );

        $post_type  = get_post_type( $post_id );
        $data       = new \Jet_Engine_Meta_Boxes_Data( $post_type );
        $meta_boxes = $data->get_raw();
        $meta_boxes = apply_filters( 'jet-form-builder/action/process-meta-boxes/boxes', $meta_boxes, $post_id, $this );

        foreach ( $meta_boxes as $box ) {
            if ( 'post' === $box['args']['object_type'] && ! empty( $box['meta_fields'] ) ) {
                $args = array(
                    'page'   => array( $post_type ),
                    'fields' => array(),
                );

                foreach ( $box['meta_fields'] as $field ) {
                    $args['fields'][ $field['name'] ] = $field;
                    $args['fields'][ $field['name'] ]['fields'] = ! empty( $field['repeater-fields'] ) ? $field['repeater-fields'] : array();
                    unset( $args['fields'][ $field['name'] ]['repeater-fields'] );

                    if ( ! empty( $args['fields'][ $field['name'] ]['fields'] ) ) {
                        $new_fields = array();
                        foreach ( $args['fields'][ $field['name'] ]['fields'] as $repeater_field ) {
                            $new_fields[ $repeater_field['name'] ] = $repeater_field;
                        }
                        $args['fields'][ $field['name'] ]['fields'] = $new_fields;
                    }

                    if ( isset( $args['fields'][ $field['name'] ]['repeater_save_separate'] ) ) {
                        $args['fields'][ $field['name'] ]['save_separate'] = $args['fields'][ $field['name'] ]['repeater_save_separate'];
                        unset( $args['fields'][ $field['name'] ]['repeater_save_separate'] );
                    }
                }

                $args = apply_filters( 'jet-form-builder/action/process-meta-boxes/args', $args, $box, $post_id, $this );

                $meta = new \Cherry_X_Post_Meta( $args );
                $meta->save_meta_option( $post_id );
            }
        }
    }
}