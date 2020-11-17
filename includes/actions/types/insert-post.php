<?php
namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Insert_Post extends Base {

	public function get_name() {
		return __( 'Insert Post', 'jet-form-builder' );
	}

	public function get_id() {
		return 'insert_post';
	}

    /**
     * Return object fields
     *
     * @return string[] [type] [description]
     */
    public function get_object_fields() {
        return array(
            'ID',
            'post_title',
            'post_content',
            'post_excerpt',
        );
    }

    public function do_action( array $request, Action_Handler $handler )
    {
        $post_type = ! empty( $this->settings['post_type'] ) ? $this->settings['post_type'] : false;

        if ( ! $post_type || ! post_type_exists( $post_type ) ) {
            throw new Action_Exception('failed');
        }


        $fields_map    = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();
        $meta_input    = array();
        $terms_input   = array();
        $object_fields = $this->get_object_fields();
        $has_title     = false;

        $postarr = array(
            'post_type'   => $post_type,
        );

        if ( ! empty( $this->settings['default_meta'] ) ) {
            foreach ( $this->settings['default_meta'] as $meta_row ) {
                if ( ! empty( $meta_row['key'] ) ) {
                    $meta_input[ $meta_row['key'] ] = $meta_row['value'];
                }
            }
        }



        foreach ( $request as $key => $value ) {

            $key = ! empty( $fields_map[ $key ] ) ? esc_attr( $fields_map[ $key ] ) : $key;

            if ( 'Submit' === $key ) {
                continue;
            }

            if ( ! in_array( $key, $object_fields ) ) {

                if ( false !== strpos( $key, 'jet_tax__' ) ) {

                    $tax = str_replace( 'jet_tax__', '', $key );

                    if ( ! isset( $terms_input[ $tax ] ) ) {
                        $terms_input[ $tax ] = array();
                    }

                    if ( ! is_array( $value ) ) {
                        $terms_input[ $tax ][] = absint( $value );
                    } else {
                        $terms_input[ $tax ] = array_merge( $terms_input[ $tax ], array_map( 'absint', $value ) );
                    }

                } else {
                    $meta_input[ $key ] = $value;
                }

            } else {
                $postarr[ $key ] = $value;

                if ( 'post_title' === $key ) {
                    $has_title = true;
                }

            }

        }

        $post_status = ! empty( $this->settings['post_status'] ) ? $this->settings['post_status'] : '';

        if ( $post_status && 'keep-current' !== $post_status ) {
            $postarr['post_status'] = $post_status;
        }

        $postarr['meta_input'] = $meta_input;

        $post_type_obj = get_post_type_object( $post_type );



        if ( ! empty( $postarr['ID'] ) ) {

            $post = get_post( (int) $postarr['ID'] );

            if ( ! $post || ( absint( $post->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) ) {
                throw new Action_Exception('failed' );
            }

            $post_id = wp_update_post( $postarr );

        } else {

            if ( ! $has_title ) {
                $postarr['post_title'] = $post_type_obj->labels->singular_name . ' #';
            }

            $post_id = wp_insert_post( $postarr );

        }

        $handler->response_data['inserted_post_id'] = $post_id;

        if ( ! $post_id ) {
            throw new Action_Exception( 'failed' );
        }

        if ( ! empty( $terms_input ) ) {

            foreach ( $terms_input as $tax => $terms ) {
                $res = wp_set_post_terms( $post_id, $terms, $tax );
            }
        }

        if ( ! $has_title && empty( $postarr['ID'] ) ) {

            $title = $post_type_obj->labels->singular_name . ' #' . $post_id;

            wp_update_post( array(
                'ID'         => $post_id,
                'post_title' => $title,
            ) );

        }
    }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormInsertPostData', array(
			'postTypes'        => Tools::get_post_types_for_js(),
			'taxonomies'       => Tools::get_taxonomies_for_js(),
			'postStatuses'     => $this->get_post_statuses_for_options(),
			'postFields'       => $this->get_post_fields_for_options(),
			'fieldsMapOptions' => $this->get_fields_map_options(),
			'labels'           => array(
				'post_type'         => __( 'Post Type:', 'jet-form-builder' ),
				'post_type_help'    => false,
				'post_status'       => __( 'Post Status:', 'jet-form-builder' ),
				'post_status_help'  => false,
				'fields_map'        => __( 'Fields Map:', 'jet-form-builder' ),
				'fields_map_help'   => __( 'Set meta fields names or post properties to save appropriate form fields into', 'jet-form-builder' ),
				'default_meta'      => __( 'Default Fields:', 'jet-form-builder' ),
				'default_meta_help' => __( 'Set default meta values which should be set on post insert/update', 'jet-form-builder' ),
			),
		) );
	}




    /**
	 * Returns post statuses list for the options
	 *
	 * @return array
	 */
	public function get_post_statuses_for_options() {

		$statuses = get_post_statuses();
		$result   = array();

		foreach ( $statuses as $name => $label ) {
			$result[] = array(
				'value' => $name,
				'label' => $label,
			);
		}

		return apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-statuses', $result );

	}

	/**
	 * Returns allowed chilces for the fields map control
	 *
	 * @return [type] [description]
	 */
	public function get_fields_map_options() {

		$post_fields = $this->get_post_fields_for_options() ;

		foreach ( $post_fields as $index => $data ) {
			if ( 'ID' === $data['value'] ) {
				$post_fields[ $index ]['label'] = 'Post ID (will update the post)';
			}
		}

		$post_fields[] = array(
			'value' => '_thumbnail_id',
			'label' => 'Post Thumbnail',
		);

		$post_fields[] = array(
			'value' => 'post_meta',
			'label' => 'Post Meta',
		);

		$post_fields[] = array(
			'value' => 'post_terms',
			'label' => 'Post Terms',
		);

		return $post_fields;

	}

	/**
	 * Returns post object fields list for the options
	 *
	 * @return array
	 */
	public function get_post_fields_for_options() {

		return apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-fields', array(
            array(
                'value' => '',
                'label' => 'Select field...',
            ),
			array(
				'value' => 'ID',
				'label' => 'Post ID',
			),
			array(
				'value' => 'post_title',
				'label' => 'Post Title',
			),
			array(
				'value' => 'post_content',
				'label' => 'Post Content',
			),
			array(
				'value' => 'post_excerpt',
				'label' => 'Post Excerpt',
			),
			array(
				'value' => 'post_status',
				'label' => 'Post Status',
			),
		) );

	}

}
