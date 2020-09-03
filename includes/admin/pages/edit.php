<?php
namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Admin\Editor;

/**
 * Add/edit form page
 */
class Edit extends Base {

	public $editor;

	/**
	 * Page slug
	 *
	 * @return string
	 */
	public function slug() {
		return 'jet-form-builder-edit';
	}

	/**
	 * Page title
	 *
	 * @return string
	 */
	public function title() {
		if ( $this->is_edit() ) {
			return __( 'Edit Form', 'jet-appointments-booking' );
		} else {
			return __( 'Add Form', 'jet-appointments-booking' );
		}
	}

	/**
	 * Returns menu title
	 *
	 * @return [type] [description]
	 */
	public function menu_title() {
		return __( 'Add Form', 'jet-appointments-booking' );
	}

	/**
	 * Page render funciton
	 *
	 * @return void
	 */
	public function render() {
		echo '<div class="wrap">';

		$content = '';
		$name    = '';
		$item_id = $this->is_edit();

		if ( $item_id ) {

			$item = Plugin::instance()->db->get_item( $item_id );

			if ( $item ) {
				$content = $item['body'];
				$name    = $item['name'];
			}

		}

		$this->editor->render( 'jet_form_builder', $content, $name );
		echo '</div>';
	}

	/**
	 * Check if is edit or add form page
	 *
	 * @return boolean [description]
	 */
	public function is_edit() {
		return ! empty( $_GET['form'] ) ? absint( $_GET['form'] ) : false;
	}

	/**
	 * Page specific assets
	 *
	 * @return [type] [description]
	 */
	public function assets() {

		$this->editor = new Editor( array(
			'action'  => Plugin::instance()->rest->get_route( 'update-form', false ),
			'item_id' => $this->is_edit(),
		) );

		$this->editor->enqueue_assets();

	}

}
