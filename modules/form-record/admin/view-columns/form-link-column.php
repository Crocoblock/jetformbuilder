<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Post\Post_Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Post_Type\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Link_Column extends Column_Advanced_Base {

	protected $column = 'form_id';
	protected $type   = self::LINK;

	public function get_label(): string {
		return __( 'Form', 'jet-form-builder' );
	}

	/**
	 * @param array $record
	 *
	 * @return array
	 */
	public function get_value( array $record = array() ) {
		$form_id = parent::get_value( $record );
		$form    = get_post( $form_id );

		if ( ! current_user_can( 'manage_options' ) ) {
			$href = null;
			$capabilities = Module::CAPABILITIES;
			$has_all_capabilities = true;
			foreach ( $capabilities as $capability ) {
				if ( ! current_user_can( $capability ) ) {
					$has_all_capabilities = false;
					break;
				}
			}
			if ( $has_all_capabilities ) {
				$href = admin_url( "post.php?post={$form_id}&action=edit" );
			}
			return array(
				'text'  => Post_Tools::get_title( $form ),
				'href'  => $href,
				'title' => __( '', 'jet-form-builder' ), //phpcs:ignore WordPress.WP.I18n.NoEmptyStrings
				'type'  => '',
			);
		}
		return array(
			'text'  => Post_Tools::get_title( $form ),
			'href'  => get_edit_post_link( $form, false ),
			'title' => __( 'Edit form', 'jet-form-builder' ),
			'type'  => 'edit',
		);
	}
}
