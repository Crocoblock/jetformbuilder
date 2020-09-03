<?php
namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Admin\Editor;

/**
 * Forms list page
 */
class Forms_List extends Base {

	/**
	 * Page slug
	 *
	 * @return string
	 */
	public function slug() {
		return 'jet-form-builder-list';
	}

	/**
	 * Page title
	 *
	 * @return string
	 */
	public function title() {
		return __( 'Forms', 'jet-appointments-booking' );
	}

	/**
	 * Page render funciton
	 *
	 * @return void
	 */
	public function render() {
	}

	/**
	 * Page specific assets
	 *
	 * @return [type] [description]
	 */
	public function assets() {
	}

}
