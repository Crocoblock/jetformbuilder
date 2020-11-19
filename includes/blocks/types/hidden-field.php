<?php
namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Render\Hidden_Field_Render;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Hidden_Field extends Base {

    private $post;

    public function __construct() {
        parent::__construct();

        /**
         * Get current post object
         */
        $this->post = get_post();
    }

    /**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Hidden Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'hidden-field';
	}

	/**
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

    /**
     * Returns current block render instatnce
     *
     * @param array $attributes
     * @return Hidden_Field_Render
     */
	public function get_block_renderer( $attributes = array() ) {
		return new Hidden_Field_Render( $attributes );
	}

    public function get_field_value( $value, $params = array() ) {

        if ( ! empty( $value ) && is_callable( array( $this, $value ) ) ) {
            return $this->$value( $params );
        }
        elseif ( ! empty( $params['default'] ) ) {
            return $params['default'];
        }

        return $value;
    }

    /**
     * @param array $params
     * @return int|null
     */
    private function post_id($params = array() ) {
        if ( ! $this->post ) {
            return null;
        } else {
            return $this->post->ID;
        }
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function post_title($params = array() ) {
        if ( ! $this->post ) {
            return null;
        } else {
            return get_the_title( $this->post->ID );
        }
    }

    /**
     * @param array $params
     * @return false|string|\WP_Error|null
     */
    private function post_url($params = array() ) {
        if ( ! $this->post ) {
            return null;
        } else {
            return get_permalink( $this->post->ID );
        }
    }

    /**
     * @param array $params
     * @return mixed|null
     */
    private function post_meta($params = array() ) {
        if ( ! $this->post ) {
            return null;
        }

        $key = ! empty( $params['hidden_value_field'] ) ? $params['hidden_value_field'] : '';

        if ( ! $key ) {
            return null;
        } else {
            return get_post_meta( $this->post->ID, $key, true );
        }
    }

    /**
     * @param array $params
     * @return string|void|null
     */
    private function query_var($params = array() ) {
        $key = ! empty( $params['query_var_key'] ) ? $params['query_var_key'] : '';

        if ( ! $key ) {
            return null;
        } else {
            return isset( $_GET[ $key ] ) ? esc_attr( $_GET[ $key ] ) : null;
        }
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function user_id($params = array() ) {
        if ( ! is_user_logged_in() ) {
            return null;
        } else {
            $user = wp_get_current_user();
            return $user->user_email;
        }
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function user_name($params = array() ) {
        if ( ! is_user_logged_in() ) {
            return null;
        } else {
            $user = wp_get_current_user();
            return $user->display_name;
        }
    }

    /**
     * @param array $params
     * @return mixed|null
     */
    private function user_meta($params = array() ) {
        $key = ! empty( $args['hidden_value_field'] ) ? $args['hidden_value_field'] : '';

        if ( ! $key ) {
            return null;
        }

        if ( ! is_user_logged_in() ) {
            return null;
        } else {
            return get_user_meta( get_current_user_id(), $key, true );
        }
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function author_id($params = array() ) {
        return $this->get_author_meta( 'ID' );
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function author_email($params = array() ) {
        return $this->get_author_meta( 'user_email' );
    }

    /**
     * @param array $params
     * @return string|null
     */
    private function author_name($params = array() ) {
        return $this->get_author_meta( 'display_name' );
    }

    /**
     * @param array $params
     * @return string
     */
    private function current_date($params = array() ) {
        $format = ! empty( $params['date_format'] ) ? $params['date_format'] : get_option( 'date_format' );

        return date_i18n( $format );
    }

    /**
     * @param array $params
     * @return int|string|void
     */
    private function manual_input($params = array() ) {
        return ! empty( $args['default'] ) ? esc_attr( $args['default'] ) : 0;
    }


    public function get_author_meta( $key ) {

        $post_id = get_the_ID();

        if ( ! $post_id ) {
            return null;
        }

        global $authordata;

        if ( $authordata ) {
            return get_the_author_meta( $key );
        }

        $post = get_post( $post_id );

        if ( ! $post ) {
            return null;
        }

        return get_the_author_meta( $key, $post->post_author );

    }


	/**
	 * Register blocks specific JS variables
	 *
	 * @param  [type] $editor [description]
	 * @param  [type] $handle [description]
	 * @return [type]         [description]
	 */
	public function block_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormHiddenFieldData', array(
			'values' => apply_filters( 'jet-form-builder/blocks/hidden-field/values', array(
				array(
					'value' => 'post_id',
					'label' => __( 'Current Post ID', 'jet-form-builder' ),
				),
				array(
					'value' => 'post_title',
					'label' => __( 'Current Post Title', 'jet-form-builder' ),
				),
				array(
					'value' => 'post_url',
					'label' => __( 'Current Post/Page URL', 'jet-form-builder' ),
				),
				array(
					'value' => 'post_meta',
					'label' => __( 'Current Post Meta', 'jet-form-builder' ),
				),
				array(
					'value' => 'user_id',
					'label' => __( 'Current User ID', 'jet-form-builder' ),
				),
				array(
					'value' => 'user_email',
					'label' => __( 'Current User Email', 'jet-form-builder' ),
				),
				array(
					'value' => 'user_name',
					'label' => __( 'Current User Name', 'jet-form-builder' ),
				),
				array(
					'value' => 'author_id',
					'label' => __( 'Current Post Author ID', 'jet-form-builder' ),
				),
				array(
					'value' => 'author_email',
					'label' => __( 'Current Post Author Email', 'jet-form-builder' ),
				),
				array(
					'value' => 'author_name',
					'label' => __( 'Current Post Author Name', 'jet-form-builder' ),
				),
				array(
					'value' => 'query_var',
					'label' => __( 'URL Query Variable', 'jet-form-builder' ),
				),
				array(
					'value' => 'current_date',
					'label' => __( 'Current Date', 'jet-form-builder' ),
				),
				array(
					'value' => 'manual_input',
					'label' => __( 'Manual Input', 'jet-form-builder' ),
				),
			) ),
		) );

	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'field_value' => array(
				'type'    => 'string',
				'default' => 'post_id',
			),
			'hidden_value_field' => array(
				'type'    => 'string',
				'default' => '',
			),
			'query_var_key' => array(
				'type'    => 'string',
				'default' => '',
			),
			'date_format' => array(
				'type'    => 'string',
				'default' => get_option( 'date_format' ),
			),
			'hidden_value' => array(
				'type'    => 'string',
				'default' => '',
			),
		);
	}

	/**
	 * Returns global attributes list
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'name' => array(
				'type' => 'string',
				'default' => 'hidden_field_name',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Name', 'jet-form-builder' )
				),
			),
			'class_name' => array(
				'type' => 'string',
				'default' => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'CSS Class Name', 'jet-form-builder' )
				),
			),
		);
	}

}
