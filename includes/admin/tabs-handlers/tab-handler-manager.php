<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;


use Jet_Form_Builder\Plugin;

class Tab_Handler_Manager {

	public static $instance;
	private $_tabs = array();

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct() {
		add_action( 'init', array( $this, 'register_tabs' ), 999 );
	}

	public function register_tabs() {
		$tabs = apply_filters( 'jet-form-builder/register-tabs-handlers', array(
			new Captcha_Handler(),
			new Mailchimp_Handler(),
			new Active_Campaign_Handler(),
			new Get_Response_Handler(),
		) );

		foreach ( $tabs as $tab ) {
			if ( $tab instanceof Base_Handler ) {
				$this->register_tab( $tab );
			}
		}
	}

	public function register_tab( $tab ) {
		$this->_tabs[ $tab->slug() ] = $tab;

		add_action( "wp_ajax_jet_fb_save_tab__{$tab->slug()}", array( $tab, 'on_get_request' ) );

		add_filter( 'jet-form-builder/page-config/jfb-settings', function ( $page_config ) use ( $tab ) {
			$page_config[ $tab->slug() ] = call_user_func( array( $tab, 'on_load' ) );

			return $page_config;
		} );
	}

	public function tab( $slug ) {
		$this->isset_tab( $slug );

		return $this->_tabs[ $slug ];
	}

	public function options( $slug, $default = array() ) {
		$this->isset_tab( $slug );

		return $this->_tabs[ $slug ]->get_options( $default );
	}

	public function isset_tab( $slug ) {
		if ( ! isset( $this->_tabs[ $slug ] ) ) {
			_doing_it_wrong(
				__METHOD__,
				'Undefined tab: ' . var_export( $slug, true ),
				Plugin::instance()->get_version()
			);
		}
	}

	public function all( $default_tabs = array() ): array {
		$response = array();

		foreach ( $this->_tabs as $slug => $tab ) {
			$default = array();
			if ( isset( $default_tabs[ $slug ] ) ) {
				$default = $default_tabs[ $slug ];
			}

			$response[ $slug ] = $tab->get_options( $default );
		}

		return $response;
	}

}