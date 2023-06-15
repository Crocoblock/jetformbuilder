<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use JFB_Components\Admin\Notices\Traits\With_Notices_Trait;
use JFB_Modules\Form_Record\Admin\Meta_Boxes;
use JFB_Modules\Form_Record\Admin\Notices\Update_Db_Notice;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;
use JFB_Modules\Form_Record\Admin\Pages\Traits\Form_Records_Pages_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Form_Record_Page extends Base_Single_Page {

	use With_Notices_Trait;
	use Form_Records_Pages_Trait;

	public function parent_slug(): string {
		return Form_Records::SLUG;
	}

	public function title(): string {
		return __( 'JetFormBuilder Form Record', 'jet-form-builder' );
	}

	public function page_config(): array {
		$migrations = array();

		foreach ( $this->get_migrations() as $migration ) {
			$migrations[] = get_class( $migration );
		}

		if ( count( $migrations ) ) {
			$this->notices()->register_notice( new Update_Db_Notice() );
		}

		return array_merge(
			parent::page_config(),
			array(
				'notices'    => $this->notices()->to_array(),
				'migrations' => $migrations,
			)
		);
	}

	public function meta_containers(): array {
		return array(
			new Meta_Containers\Normal_Meta_Container(
				new Meta_Boxes\Form_Record_Fields_Box(),
				new Meta_Boxes\Form_Record_Actions_Box(),
				new Meta_Boxes\Form_Record_Errors_Box()
			),
			new Meta_Containers\Side_Meta_Container(
				new Meta_Boxes\Form_Record_Values_Box(),
				new Meta_Boxes\Form_Record_Inline_Actions_Box()
			),
		);
	}

	public function assets() {
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );
		wp_enqueue_style( Pages_Manager::STYLE_DASHICONS );

		parent::assets();
	}

}
