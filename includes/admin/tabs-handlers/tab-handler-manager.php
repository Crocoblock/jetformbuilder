<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Tab_Handler_Manager instance()
 *
 * Class Tab_Handler_Manager
 * @package Jet_Form_Builder\Admin\Tabs_Handlers
 */
class Tab_Handler_Manager {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	// phpcs:ignore PSR2.Classes.PropertyDeclaration.Underscore
	private $_tabs_options = array();

	public static function get_options( string $slug, array $if_empty = array() ): array {
		$tab = static::instance()->tab( $slug );
		$tab->save_global_options( $if_empty );

		return $tab->get_global_options();
	}

	public function __construct() {
		$this->rep_install();

		add_filter(
			'jet-form-builder/page-config/jfb-settings',
			array( $this, 'modify_page_config' )
		);
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/register-tabs-handlers',
			array(
				new Captcha_Handler(),
				new Mailchimp_Handler(),
				new Active_Campaign_Handler(),
				new Get_Response_Handler(),
				new Paypal_Handler(),
				new Payments_Gateways_Handler(),
				new Options_Handler(),
			)
		);
	}

	/**
	 * @param $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( ! ( $item instanceof Base_Handler ) ) {
			$this->_rep_abort_this();
		}
	}

	/**
	 * @param Base_Handler $item
	 */
	public function rep_after_install_item( $item ) {
		$item->after_install();
	}

	public function modify_page_config( array $page_config ): array {
		/** @var Base_Handler $item */
		foreach ( $this->rep_get_items() as $item ) {
			$page_config[ $item->slug() ] = apply_filters(
				"jet-form-builder/tab-config/{$item->slug()}",
				$item->on_load()
			);
		}

		return $page_config;
	}

	/**
	 * @param $slug
	 *
	 * @return Base_Handler
	 */
	public function tab( $slug ): Base_Handler {
		return $this->rep_get_item_or_die( $slug );
	}

	public function options( $slug, $is_empty = array() ) {
		return $this->tab( $slug )->get_options( $is_empty );
	}

	/**
	 * @since 3.1.0 Remove $default_tabs argument
	 *
	 * @return array
	 */
	public function all(): array {
		$response = array();

		/** @var Base_Handler[] $tabs */
		$tabs = $this->rep_get_items();

		foreach ( $tabs as $slug => $tab ) {
			$response[ $slug ] = $tab->on_editor_load();
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
