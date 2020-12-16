<?php


namespace Jet_Form_Builder\Presets;


class Base_Preset {

	public static $instance;
	private $data = null;
	private $source = null;
	private $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);

	private function __construct() {
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
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Base_Preset An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}