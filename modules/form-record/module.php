<?php


namespace JFB_Modules\Form_Record;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use JFB_Modules\Form_Record\Admin\Pages\Export_Page;
use JFB_Modules\Form_Record\Admin\Pages\Print_Page;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenario_Logic_Base;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Form_Record\Action_Types\Save_Record;
use JFB_Modules\Form_Record\Admin\Meta_Boxes\Record_To_Payment_Box;
use JFB_Modules\Form_Record\Admin\Pages\Form_Records;
use JFB_Modules\Form_Record\Admin\Pages\Single_Form_Record_Page;
use JFB_Modules\Dev;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It,
	Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	private $rest;

	public function rep_item_id() {
		return 'form-record';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->rest = new Records_Rest_Controller();
	}

	public function on_uninstall() {
		unset( $this->rest );
	}

	public function init_hooks() {
		// actions
		add_action(
			'rest_api_init',
			array( $this->get_rest(), 'register_routes' )
		);
		add_action(
			'jet-form-builder/actions/register',
			array( $this, 'register_actions' )
		);
		add_action(
			'jet-form-builder/gateways/before-send',
			array( $this, 'before_send_gateway' ),
			10,
			3
		);

		// filters
		add_filter(
			'jet-form-builder/admin/pages',
			array( $this, 'add_admin_pages' )
		);
		add_filter(
			'jet-form-builder/admin/single-pages',
			array( $this, 'add_single_admin_pages' )
		);
		add_filter(
			'jet-form-builder/page-containers/jfb-payments-single',
			array( $this, 'add_box_to_single_payment' )
		);
		add_filter(
			'jet-form-builder/admin/action-pages',
			array( $this, 'add_action_admin_pages' )
		);
	}

	public function remove_hooks() {
		// actions
		remove_action(
			'rest_api_init',
			array( $this->get_rest(), 'register_routes' )
		);
		remove_action(
			'jet-form-builder/actions/register',
			array( $this, 'register_actions' )
		);
		remove_action(
			'jet-form-builder/gateways/before-send',
			array( $this, 'before_send_gateway' )
		);

		// filters
		remove_filter(
			'jet-form-builder/admin/pages',
			array( $this, 'add_admin_pages' )
		);
		remove_filter(
			'jet-form-builder/admin/single-pages',
			array( $this, 'add_single_admin_pages' )
		);
		remove_filter(
			'jet-form-builder/page-containers/jfb-payments-single',
			array( $this, 'add_box_to_single_payment' )
		);
		remove_filter(
			'jet-form-builder/admin/action-pages',
			array( $this, 'add_action_admin_pages' )
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

	public function add_action_admin_pages( array $pages ): array {
		array_push(
			$pages,
			new Export_Page(),
			new Print_Page()
		);

		return $pages;
	}

	/**
	 * @param Base_Meta_Container[] $containers
	 *
	 * @return array
	 */
	public function add_box_to_single_payment( array $containers ): array {
		$containers[1]->add_meta_box( new Record_To_Payment_Box() );

		return $containers;
	}

	public function before_send_gateway( $status, $action_error, Scenario_Logic_Base $scenario ) {
		// prepare record controller, for saving errors & actions
		$record     = $scenario->get_scenario_row( 'record' );
		$controller = ( new Controller() )->set_record_id( $record['id'] );
		$controller->set_setting(
			'save_errors',
			jet_form_builder()->has_module( Dev\Module::class )
		);

		try {
			$controller->save_fields();
			$controller->save_actions();
			$controller->save_errors();

		} catch ( Handler_Exception $exception ) {
			// do nothing
		}
	}

	public function get_rest(): Records_Rest_Controller {
		return $this->rest;
	}

}
