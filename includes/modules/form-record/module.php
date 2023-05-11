<?php


namespace Jet_Form_Builder\Modules\Form_Record;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;
use Jet_Form_Builder\Modules\Form_Record\Action_Types\Save_Record;
use Jet_Form_Builder\Modules\Form_Record\Admin\Pages\Form_Records;
use Jet_Form_Builder\Modules\Form_Record\Admin\Pages\Single_Form_Record_Page;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Dir_It, Base_Module_After_Install_It, Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'form-record';
	}

	public function on_install() {
		// TODO: Implement on_install() method.
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/actions/register',
			array( $this, 'register_actions' )
		);

		add_filter(
			'jet-form-builder/admin/pages',
			array( $this, 'add_admin_pages' )
		);
		add_filter(
			'jet-form-builder/admin/single-pages',
			array( $this, 'add_single_admin_pages' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/actions/register',
			array( $this, 'register_actions' )
		);

		remove_filter(
			'jet-form-builder/admin/pages',
			array( $this, 'add_admin_pages' )
		);
		remove_filter(
			'jet-form-builder/admin/single-pages',
			array( $this, 'add_single_admin_pages' )
		);
	}

	public function register_actions( Manager $manager ) {
		$manager->register_action_type( new Save_Record() );
	}

	public function add_admin_pages( array $pages ): array {
		$pages[] = new Form_Records();

		return $pages;
	}

	public function add_single_admin_pages( array $pages ): array {
		$pages[] = new Single_Form_Record_Page();

		return $pages;
	}
}
