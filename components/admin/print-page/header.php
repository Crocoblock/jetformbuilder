<?php


namespace JFB_Components\Admin\Print_Page;

use JFB_Components\Admin\Print_Page\Interfaces\Page_Assets_It;
use JFB_Components\Admin\Print_Page\Interfaces\Page_Output_It;
use JFB_Components\Admin\Print_Page\Traits\Page_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Header implements Page_Assets_It, Page_Output_It {

	use Page_Assets_Trait;

	protected $body_classes = 'wp-admin wp-core-ui';
	protected $title        = '';

	public function __construct() {
		if ( is_rtl() ) {
			$this->add_body_classes( 'rtl' );
		}

		if ( wp_is_mobile() ) {
			$this->add_body_classes( 'mobile' );
		}

		$this->set_title( __( 'JFB Preview', 'jet-form-builder' ) );
	}

	public function output() {
		require_once jet_form_builder()->plugin_dir( 'components/admin/print-page/templates/header.php' );
	}

	/**
	 * @param string $body_classes
	 */
	public function set_body_classes( string $body_classes ) {
		$this->body_classes = $body_classes;
	}

	public function add_body_classes( string $body_classes ) {
		$this->body_classes .= ' ' . trim( $body_classes );
	}

	/**
	 * @return string
	 */
	public function get_body_classes(): string {
		return $this->body_classes;
	}

	/**
	 * @return string
	 */
	public function get_title(): string {
		return $this->title;
	}

	/**
	 * @param string $title
	 */
	public function set_title( string $title ) {
		$this->title = $title;
	}


}
