<?php


namespace Jet_Form_Builder\Admin\Single_Pages;

use Jet_Form_Builder\Admin\Exceptions\Failed_Box_Update;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Meta_Box_Update_Callback;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Page_Updater extends Rest_Api_Endpoint_Base {

	abstract public static function get_page_slug(): string;

	public static function get_rest_base() {
		return static::get_page_slug() . '/(?P<id>[\d]+)';
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed|\WP_REST_Response
	 */
	public function get_resource( \WP_REST_Request $request ) {
		return false;
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::EDITABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$resource = $this->get_resource( $request );

		if ( $resource instanceof \WP_REST_Request ) {
			return $resource;
		}

		Execution_Builder::instance()->transaction_start();

		try {
			$this->update_boxes( $request, $resource );
		} catch ( Failed_Box_Update $exception ) {
			Execution_Builder::instance()->transaction_rollback();

			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				503
			);
		}
		Execution_Builder::instance()->transaction_commit();

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully updated!', 'jet-form-builder' ),
			)
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 * @param $resource
	 *
	 * @throws Failed_Box_Update
	 */
	protected function update_boxes( \WP_REST_Request $request, $resource ) {
		/** @var Base_Meta_Container[] $containers */
		$containers = $this->get_page()->get_prepared_containers();
		$body       = $request->get_json_params();
		$boxes      = $body['boxes'] ?? array();

		foreach ( $containers as $container ) {
			foreach ( $boxes as $scope => $state ) {
				try {
					$box = $container->get_box_by_scope( $scope );
				} catch ( Repository_Exception $exception ) {
					continue;
				}
				if ( ! ( $box instanceof Meta_Box_Update_Callback ) ) {
					continue;
				}
				$box->on_update( $state, $request, $resource );
			}
		}
	}

	/**
	 * @return Base_Single_Page
	 */
	public function get_page(): Base_Single_Page {
		return Pages_Manager::instance()->single()->rep_get_item_or_die( static::get_page_slug() );
	}
}