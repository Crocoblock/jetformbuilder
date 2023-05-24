<?php


namespace JFB_Modules\Gateways\Table_Views\Actions;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Table_Views\Actions\Link_Single_Action;
use JFB_Modules\Gateways\Pages\Single_Payment_Page;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class View_Action extends Link_Single_Action {

	/** @var Base_Single_Page */
	private $single;

	public function get_slug(): string {
		return 'view';
	}

	public function get_label(): string {
		return __( 'View', 'jet-form-builder' );
	}

	public function show_in_header(): bool {
		return false;
	}

	/**
	 * @param array $record
	 *
	 * @return bool
	 */
	public function show_in_row( array $record ): bool {
		return true;
	}

	/**
	 * @param array $record
	 *
	 * @return string
	 * @throws Not_Found_Page_Exception
	 */
	public function get_href( array $record ): string {
		$single = ( new Single_Payment_Page() )->set_id( $record['id'] );

		return $single->get_url();
	}
}
