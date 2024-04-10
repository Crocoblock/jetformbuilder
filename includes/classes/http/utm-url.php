<?php


namespace Jet_Form_Builder\Classes\Http;

use Jet_Form_Builder\Addons\Manager;
use Jet_Form_Builder\Classes\Theme\Theme_Info;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Utm_Url {

	private $source   = '';
	private $medium   = '';
	private $campaign = '';
	private $content  = '';

	public function __construct( string $source = '' ) {
		if ( $source ) {
			$this->set_source( $source );
		}
	}

	public function add_query( string $url ): string {
		return add_query_arg(
			iterator_to_array( $this->generate_args() ),
			$url
		);
	}


	public function get_license_and_theme( bool $check_license = false ): string {
		$page = jet_fb_current_page();
		if ( ! $page ) {
			$author_slug = ( new Theme_Info() )->author_slug();
		} else {
			$author_slug = $page->theme()->author_slug();
		}
		$license = $check_license
			? jet_form_builder()->addons_manager->get_slug()
			: Manager::NOT_ACTIVE;

		return "$license/$author_slug";
	}

	private function generate_args(): \Generator {
		if ( $this->source ) {
			yield 'utm_source' => rawurlencode( $this->source );
		}

		if ( $this->get_medium() ) {
			yield 'utm_medium' => rawurlencode( $this->get_medium() );
		}

		if ( $this->campaign ) {
			yield 'utm_campaign' => rawurlencode( $this->campaign );
		}

		if ( $this->content ) {
			yield 'utm_content' => rawurlencode( $this->content );
		}
	}

	public function set_campaign( string $campaign ): Utm_Url {
		$this->campaign = $campaign;

		return $this;
	}

	public function set_source( string $source ): Utm_Url {
		$this->source = $source;

		return $this;
	}

	/**
	 * @param string $content
	 */
	public function set_content( string $content ) {
		$this->content = $content;
	}

	/**
	 * @param string $medium
	 */
	public function set_medium( string $medium ) {
		$this->medium = $medium;
	}

	public function get_medium(): string {
		if ( ! $this->medium ) {
			$this->medium = $this->get_license_and_theme();
		}

		return $this->medium;
	}


}
