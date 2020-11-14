<?php

namespace Jet_Form_Builder;
/**
 * Captcha manager class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Forms_Preset class
 */
class Form_Preset {

    public static $instance;

    private $meta_key  = '_preset';
    private $form_id   = null;
    private $data      = null;
    private $source    = null;
    private $defaults  = array(
        'enabled'    => false,
        'from'       => 'post',
        'post_from'  => 'current_post',
        'user_from'  => 'current_user',
        'query_var'  => '_post_id',
        'fields_map' => array(),
    );

    private function __construct( $form_id = null ) {
        $this->form_id = $form_id;

        $this->set_data();
    }


    /**
     * Sanitize preset source
     *
     * @return [type] [description]
     */
    public function sanitize_source() {

        if ( empty( $this->data['enabled'] ) ) {
            return true;
        }

        $from   = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];
        $source = $this->get_source();

        if ( ! $source ) {
            return true;
        }

        if ( 'post' === $from ) {

            if ( ! is_user_logged_in() ) {
                return false;
            }

            if ( absint( $source->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
                return false;
            }


        } elseif ( 'user' === $from ) {

            if ( ! is_user_logged_in() ) {
                return false;
            }

            if ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) ) {
                return false;
            }

        }

        return true;

    }

    /**
     * Returns field value
     *
     * @param null $field
     * @param array $args
     * @return array [type] [description]
     */
    public function get_field_value( $field = null, $args = array() ) {

        $result = array(
            'rewrite' => false,
            'value'   => null,
        );

        if ( ! $field ) {
            return $result;
        }

        if ( empty( $this->data['enabled'] ) ) {
            return $result;
        }

        $from   = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];
        $map    = ! empty( $this->data['fields_map'] ) ? $this->data['fields_map'] : $this->defaults['fields_map'];
        $source = $this->get_source();

        if ( ! $source ) {
            return $result;
        }

        if ( empty( $map[ $field ] ) ) {
            return $result;
        }

        $field_data    = $map[ $field ];
        $value         = null;
        $array_allowed = in_array( $args['type'], array( 'checkboxes' ) );

        if ( 'post' === $from ) {

            if ( absint( $source->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
                return $result;
            }

            $prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

            if ( 'post_meta' === $prop ) {
                if ( ! empty( $field_data['key'] ) ) {
                    if ( function_exists( 'jet_engine' )
                        && jet_engine()->relations
                        && jet_engine()->relations->is_relation_key( $field_data['key'] ) ) {

                        $info = jet_engine()->relations->get_relation_info( $field_data['key'] );

                        if ( ! $info ) {
                            return $result;
                        }

                        $args = array(
                            'post_id'     => $source->ID,
                            'post_type_1' => $info['post_type_1'],
                            'post_type_2' => $info['post_type_2'],
                        );

                        if ( $source->post_type === $info['post_type_1'] ) {
                            $args['from'] = $info['post_type_2'];
                        } else {
                            $args['from'] = $info['post_type_1'];
                        }

                        $value = jet_engine()->relations->get_related_posts( $args );

                    } else {
                        $value = get_post_meta( $source->ID, $field_data['key'], true );
                    }
                } else {
                    return $result;
                }
            } elseif ( 'post_terms' === $prop ) {
                if ( ! empty( $field_data['key'] ) ) {

                    $value = wp_get_post_terms( $source->ID, $field_data['key'] );

                    if ( empty( $value ) || is_wp_error( $value ) ) {
                        return $result;
                    } else {
                        if ( $array_allowed ) {
                            $value = array_map( function( $term ) {
                                return $term->term_id;
                            }, $value );
                        } else {
                            $value = $value[0];
                            $value = $value->term_id;
                        }
                    }

                } else {
                    return $result;
                }
            } elseif ( 'post_thumb' === $prop ) {
                $value = get_post_thumbnail_id( $source->ID );
            } else {
                $value = isset( $source->$prop ) ? $source->$prop : null;
            }

        } elseif ( 'user' === $from ) {

            if ( ! $source || is_wp_error( $source ) ) {
                return $result;
            }

            if ( ! is_user_logged_in() ) {
                return $result;
            }

            if ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) ) {
                return $result;
            }

            $prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

            if ( 'user_meta' === $prop ) {
                if ( ! empty( $field_data['key'] ) ) {
                    $value = get_user_meta( $source->ID, $field_data['key'], true );
                } else {
                    return $result;
                }
            } else {

                // adjust props
                switch ( $prop ) {
                    case 'email':
                        $prop = 'user_email';
                        break;
                }

                if ( isset( $source->data->$prop ) ) {
                    $value = $source->data->$prop;
                } elseif ( isset( $source->$prop ) ) {
                    $value = $source->$prop;
                } else {
                    $value = null;
                }

            }

        } else {
            $key = ! empty( $field_data['key'] ) ? $field_data['key'] : false;

            if ( $key ) {
                $value = isset( $source[ $key ] ) ? $source[ $key ] : null;
            }

        }

        if ( null !== $value ) {
            $result['rewrite'] = true;
            $result['value']   = $value;
        }

        return $result;

    }

    /**
     * Returns field source
     *
     * @return [type] [description]
     */
    public function get_source() {

        if ( null !== $this->source ) {
            return $this->source;
        }

        $from = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];

        switch ( $from ) {
            case 'query_vars':
                $this->source = $_GET;
                break;

            case 'user':
                $user_from = ! empty( $this->data['user_from'] ) ? $this->data['user_from'] : $this->defaults['user_from'];

                if ( 'current_user' === $user_from ) {
                    if ( is_user_logged_in() ) {
                        $this->source = wp_get_current_user();
                    }
                } else {

                    $var     = ! empty( $this->data['query_var'] ) ? $this->data['query_var'] : $this->defaults['query_var'];
                    $user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

                    $this->source = get_user_by( 'ID', $user_id );

                }

                break;

            default:

                $post_from = ! empty( $this->data['post_from'] ) ? $this->data['post_from'] : $this->defaults['post_from'];

                if ( 'current_post' === $post_from ) {
                    $post_id = get_the_ID();
                } else {
                    $var     = ! empty( $this->data['query_var'] ) ? $this->data['query_var'] : $this->defaults['query_var'];
                    $post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;
                }

                if ( $post_id ) {
                    $this->source = get_post( $post_id );
                }

                break;
        }

        return $this->source;

    }

    /**
     * Try to get values from request if passed
     * @param  [type] $args [description]
     * @return [type]       [description]
     */
    public function maybe_adjust_value( $args ) {

        $value       = isset( $args['default'] ) ? $args['default'] : false;
        $request_val = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

        if ( ! empty( $request_val[ $args['name'] ] ) ) {
            $value = $request_val[ $args['name'] ];
        }

        return $value;

    }

    /**
     * Returns captcha settings for passed form ID
     *
     * @return [type] [description]
     */
    public function set_data() {
        $this->data = Plugin::instance()->post_type->get_preset( $this->form_id );
    }

    /**
     * Instance.
     *
     * Ensures only one instance of the plugin class is loaded or can be loaded.
     *
     * @param $form_id
     * @return Form_Preset An instance of the class.
     * @since 1.0.0
     * @access public
     * @static
     *
     */
    public static function instance( $form_id ) {

        if ( is_null( self::$instance ) ) {
            self::$instance = new self( $form_id );
        }
        return self::$instance;
    }

}


