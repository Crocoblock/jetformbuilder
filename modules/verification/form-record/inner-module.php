<?php


namespace JFB_Modules\Verification\Form_Record;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Rest_Api\Rest_Endpoint;
use JFB_Modules\Verification\Form_Record\Admin\Meta_Boxes\Verification_Box;
use JFB_Modules\Verification\Module;
use JFB_Modules\Verification\Rest_Api\Endpoints\Verify_Manually;

final class Inner_Module implements Base_Module_It, Base_Module_Handle_It {

	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'verification-form-record';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/page-containers/jfb-records-single',
			array( $this, 'add_box_to_single_record' )
		);
		add_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
		add_action(
			'jet-fb/admin-pages/before-assets/jfb-records',
			array( $this, 'enqueue_assets_for_records' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/page-containers/jfb-records-single',
			array( $this, 'add_box_to_single_record' )
		);
		remove_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
		remove_action(
			'jet-fb/admin-pages/before-assets/jfb-records',
			array( $this, 'enqueue_assets_for_records' )
		);
	}

	/**
	 * @param Base_Meta_Container[] $containers
	 *
	 * @return array
	 */
	public function add_box_to_single_record( array $containers ): array {
		$containers[1]->add_meta_box( new Verification_Box() );

		return $containers;
	}

	/**
	 * @throws Repository_Exception
	 */
	public function enqueue_assets_for_records() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'verification' );

		wp_enqueue_script(
			$this->get_handle(),
			$module->get_url( 'assets/build/js/admin/form-records.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function add_actions_for_records_page( array $config ): array {
		$delete_action = false;

		foreach ( $config['actions'] as $index => $action ) {
			if ( 'delete' !== $action['value'] ) {
				continue;
			}
			$delete_action = $config['actions'][ $index ];
			unset( $config['actions'][ $index ] );
			break;
		}
		$config['actions'] = array_values( $config['actions'] );

		array_push(
			$config['actions'],
			array(
				'value'    => 'verify',
				'label'    => __( 'Verify manually', 'jet-form-builder' ),
				'endpoint' => ( new Rest_Endpoint( new Verify_Manually() ) )->to_array(),
			),
			$delete_action
		);

		return $config;
	}
}
