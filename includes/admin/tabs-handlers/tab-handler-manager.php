<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

use Jet_Form_Builder\Plugin;

class Tab_Handler_Manager {

	public static $instance;
	private $_tabs         = array();
	private $_tabs_options = array();

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct() {
		// add_action( 'init', array( $this, 'register_tabs' ), 999 );
		$this->register_tabs();
	}

	public function register_tabs() {
		$tabs = apply_filters(
			'jet-form-builder/register-tabs-handlers',
			array(
				new Captcha_Handler(),
				new Mailchimp_Handler(),
				new Active_Campaign_Handler(),
				new Get_Response_Handler(),
				new Paypal_Handler(),
				new Payments_Gateways_Handler(),
			)
		);

		foreach ( $tabs as $tab ) {
			if ( $tab instanceof Base_Handler ) {
				$this->register_tab( $tab );
			}
		}

		foreach ( $this->_tabs as $tab ) {
			$this->register_hooks_for_tab( $tab );
		}
	}

	/**
	 * @param Base_Handler $tab
	 */
	public function register_tab( Base_Handler $tab ) {
		$default_options = $tab->save_global_default();

		if ( ! empty( $default_options ) && is_array( $default_options ) ) {
			$this->save_options_tab( $tab->slug(), $tab->get_options( $default_options ) );
		}
		$this->_tabs[ $tab->slug() ] = $tab;
	}

	private function register_hooks_for_tab( Base_Handler $tab ) {
		add_action( "wp_ajax_jet_fb_save_tab__{$tab->slug()}", array( $tab, 'on_get_request' ) );

		add_filter(
			'jet-form-builder/page-config/jfb-settings',
			function ( $page_config ) use ( $tab ) {
				$page_config[ $tab->slug() ] = apply_filters(
					"jet-form-builder/tab-config/{$tab->slug()}",
					$tab->on_load()
				);

				return $page_config;
			}
		);
	}

	/**
	 * @param $slug
	 *
	 * @return Base_Handler
	 */
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

	public function all( $default_tabs = array() ) {
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

	public function save_options_tab( $slug, $options ) {
		if ( isset( $this->_tabs_options[ $slug ] ) && $this->_tabs_options[ $slug ] ) {
			return;
		}
		$this->_tabs_options[ $slug ] = $options;
	}

	public function get_options_tab( $slug ) {
		return $this->_tabs_options[ $slug ];
	}


}
