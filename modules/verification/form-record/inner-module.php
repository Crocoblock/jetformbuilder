<?php


namespace JFB_Modules\Verification\Form_Record;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Messages\Status_Info;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Rest_Api\Rest_Endpoint;
use JFB_Modules\Verification\Actions\Verification;
use JFB_Modules\Verification\Form_Record\Admin\Meta_Boxes\Verification_Box;
use JFB_Modules\Verification\Module;
use JFB_Modules\Verification\Rest_Api\Endpoints\Verify_Manually;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;
use JFB_Modules\Webhook\Form_Record\Db\Views\Token_By_Record_View;

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
		add_action(
			'jet-form-builder/db/records/after-insert',
			array( $this, 'connect_record_or_delete_token' )
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
		remove_action(
			'jet-form-builder/db/records/after-insert',
			array( $this, 'connect_record_or_delete_token' )
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
		$ids = array();

		foreach ( $config['list'] as &$record ) {
			$ids[] = (int) $record['id']['value'];
		}

		try {
			$tokens = Token_By_Record_View::find(
				array(
					array(
						'type'   => Query_Conditions_Builder::TYPE_IN,
						'values' => array( 'record_id', $ids ),
					),
				)
			)->query()->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return $config;
		}

		$sorted_tokens = array();

		foreach ( $tokens as &$token_row ) {
			$sorted_tokens[ $token_row['main']['record_id'] ] = $token_row;
		}

		$delete_action          = false;
		$verify_manually_action = array(
			'value'    => 'verify',
			'label'    => __( 'Verify manually', 'jet-form-builder' ),
			'endpoint' => ( new Rest_Endpoint( new Verify_Manually() ) )->to_array(),
		);

		foreach ( $config['list'] as &$record ) {
			if ( empty( $record['actions']['value'] ) ||
				! is_array( $record['actions']['value'] ) ||
				empty( $sorted_tokens[ $record['id']['value'] ] )
			) {
				continue;
			}
			$token_status = new Admin\Columns\Status_Column();
			/**
			 * Todo: make new view, which select all columns from main tokens table
			 */
			//$token_status->get_token_status( $sorted_tokens[ $record['id']['value'] ]['main'] )

			//if ( Admin\Columns\Status_Column::PENDING !== token_status )

			// $record['actions']['value'][] = $verify_manually_action;
		}

		// store delete action in header in separate variable
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
			$verify_manually_action,
			$delete_action
		);

		return $config;
	}

	/**
	 * @param $record_id
	 * @param $record_columns
	 *
	 * @throws Sql_Exception
	 */
	public function connect_record_or_delete_token( $record_id, $record_columns ) {
		$token_id = jet_fb_context()->get_value( Verification::TOKEN_ID );
		$status   = new Status_Info( $record_columns['status'] );

		if ( ! $status->is_success() ) {
			( new Tokens_Model() )->delete( array( 'id' => $token_id ) );

			return;
		}

		( new Tokens_To_Records_Model() )->insert(
			array(
				'token_id'  => $token_id,
				'record_id' => $record_id,
			)
		);
	}
}
