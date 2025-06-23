<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Components\Admin\Page\Interfaces\Action_Page_It;
use JFB_Components\Admin\Page\Traits\Action_Page_Trait;
use JFB_Components\Export\Export_Tools;
use JFB_Components\Wp_Nonce\Wp_Nonce;
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;
use JFB_Modules\Form_Record\Export;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Page implements Action_Page_It, Wp_Nonce_It {

	use Action_Page_Trait;
	use Wp_Nonce_Trait;

	public function __construct() {
		$nonce = new Wp_Nonce( 'jfb-action-admin-' . $this->slug() );
		$this->set_wp_nonce( $nonce );
	}

	public function slug(): string {
		return 'records-export';
	}

	public function check_permission(): bool {
		$capability = Tab_Handler_Manager::get_form_records_access_capability();
		return $this->get_wp_nonce()->verify() && ( current_user_can( 'manage_options' ) || current_user_can( $capability ) );
	}

	public function render_page() {
		$exporter = Export_Tools::get_exporter_by_format();

		//phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$controller = array_key_exists( 'id', $_GET )
			? new Export\Single_Controller()
			: new Export\Multiple_Controller();

		$controller->set_exporter( $exporter );

		try {
			$controller->do_export();
		} catch ( \Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die(
				$exception->getMessage(),
				__( 'Error', 'jet-form-builder' )
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	public function get_url( $query_args = array() ): string {
		return $this->admin_url(
			array_merge(
				array(
					'slug'                            => $this->slug(),
					$this->get_wp_nonce()->get_name() => $this->get_wp_nonce()->create(),
				),
				$query_args
			)
		);
	}

}
