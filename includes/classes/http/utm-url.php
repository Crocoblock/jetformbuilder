<?php


namespace Jet_Form_Builder\Classes\Http;

use Jet_Form_Builder\Addons\Manager;
use Jet_Form_Builder\Classes\Theme\Theme_Info;

class Utm_Url {

	private $check_license = false;
	private $source        = '';
	private $medium        = '';
	private $campaign      = '';

	public function __construct( string $source = '' ) {
		if ( $source ) {
			$this->set_source( $source );
		}
	}

	public function set_source( string $source ): Utm_Url {
		$this->source = rawurlencode( $source );

		return $this;
	}

	public function set_license( bool $check_license ): Utm_Url {
		$this->check_license = $check_license;

		return $this;
	}

	public function get_medium(): string {
		if ( ! $this->medium ) {
			$this->medium = $this->get_raw_medium();
		}

		return $this->medium;
	}

	public function add_query( string $url ): string {
		return add_query_arg(
			array(
				'utm_source'   => $this->source,
				'utm_medium'   => $this->get_medium(),
				'utm_campaign' => $this->campaign,
			),
			$url
		);
	}

	public function set_campaign( string $campaign ): Utm_Url {
		$this->campaign = $campaign;

		return $this;
	}

	private function get_raw_medium(): string {
		$page = jet_fb_current_page();
		if ( ! $page ) {
			$author_slug = ( new Theme_Info() )->author_slug();
		} else {
			$author_slug = $page->theme()->author_slug();
		}
		$license = $this->check_license
			? jet_form_builder()->addons_manager->get_slug()
			: Manager::NOT_ACTIVE;

		return rawurlencode( "$license/$author_slug" );
	}


}
