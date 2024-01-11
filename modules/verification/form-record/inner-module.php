<?php


namespace JFB_Modules\Verification\Form_Record;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
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
use JFB_Modules\Verification\Form_Record\Admin\Columns\Status_Column;
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
			'jet-form-builder/form-record/list',
			array( $this, 'modify_columns_for_records_page' )
		);
		add_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
		add_filter(
			'jet-form-builder/page-config/jfb-records-single',
			array( $this, 'remove_verify_button_for_records_single_page' )
		);
		add_action(
			'jet-fb/admin-pages/before-assets/jfb-records',
			array( $this, 'enqueue_assets_for_records' )
		);
		add_action(
			'jet-fb/admin-pages/before-assets/jfb-records-single',
			array( $this, 'enqueue_assets_for_record_single' )
		);
		add_action(
			'jet-form-builder/db/records/after-insert',
			array( $this, 'connect_record_or_delete_token' ),
			10,
			2
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/page-containers/jfb-records-single',
			array( $this, 'add_box_to_single_record' )
		);
		remove_filter(
			'jet-form-builder/form-record/list',
			array( $this, 'modify_columns_for_records_page' )
		);
		remove_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
		remove_filter(
			'jet-form-builder/page-config/jfb-records-single',
			array( $this, 'remove_verify_button_for_records_single_page' )
		);
		remove_action(
			'jet-fb/admin-pages/before-assets/jfb-records',
			array( $this, 'enqueue_assets_for_records' )
		);
		remove_action(
			'jet-fb/admin-pages/before-assets/jfb-records-single',
			array( $this, 'enqueue_assets_for_record_single' )
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

	/**
	 * @throws Repository_Exception
	 */
	public function enqueue_assets_for_record_single() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'verification' );

		wp_enqueue_script(
			$this->get_handle(),
			$module->get_url( 'assets/build/js/admin/form-record-single.js' ),
			array(
				'wp-api-fetch',
			),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function modify_columns_for_records_page( array $list ): array {
		$ids = array();

		foreach ( $list as &$record ) {
			$ids[] = (int) $record['choose']['value'];
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
			return $list;
		}

		$sorted_tokens = array();
		$labels        = $this->get_verification_labels();

		foreach ( $tokens as &$token_row ) {
			$sorted_tokens[ $token_row['main']['record_id'] ] = $token_row;
		}

		$verify_manually_action = $this->get_verification_action();

		foreach ( $list as &$record ) {
			if ( empty( $record['actions']['value'] ) ||
			     ! is_array( $record['actions']['value'] ) ||
			     empty( $sorted_tokens[ $record['choose']['value'] ] )
			) {
				continue;
			}
			$token_status          = new Admin\Columns\Status_Column();
			$column_status         = $token_status->get_value( $sorted_tokens[ $record['choose']['value'] ] );
			$column_status['text'] = $labels[ $column_status['status'] ] ?? $column_status['text'];

			$record['status']['value'] = $column_status;

			if ( Admin\Columns\Status_Column::PENDING !== $column_status['status'] ) {
				continue;
			}

			$delete_action = array_pop( $record['actions']['value'] );

			array_push(
				$record['actions']['value'],
				$verify_manually_action,
				$delete_action
			);
		}

		return $list;
	}

	public function add_actions_for_records_page( array $config ): array {
		$delete_action = array_pop( $config['actions'] );

		array_push(
			$config['actions'],
			$this->get_verification_action(),
			$delete_action
		);

		return $config;
	}

	protected function get_verification_action(): array {
		return array(
			'value'    => 'verify',
			'label'    => __( 'Verify manually', 'jet-form-builder' ),
			'endpoint' => ( new Rest_Endpoint( new Verify_Manually() ) )->to_array(),
		);
	}

	public function remove_verify_button_for_records_single_page( array $config ): array {
		$box = false;
		foreach ( $config['containers'][1]['boxes'] as &$current_box ) {
			if ( 'verification' !== ( $current_box['slug'] ?? '' ) ) {
				continue;
			}
			$box =& $current_box;
		}

		if (
			! $box ||
			Status_Column::PENDING === $box['list']['status']['value']['status'] ||
			empty( $box['box_actions'] )
		) {
			return $config;
		}

		foreach ( $box['box_actions'] as $index => $action ) {
			if ( 'verify' !== $action['slug'] ) {
				continue;
			}
			unset( $box['box_actions'][ $index ] );
		}

		$box['box_actions'] = array_values( $box['box_actions'] );

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

		if ( ! $token_id ) {
			return;
		}

		$status = new Status_Info( $record_columns['status'] );

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

	private function get_verification_labels(): array {
		return array(
			Admin\Columns\Status_Column::VERIFIED => __( 'Verified', 'jet-form-builder' ),
			Admin\Columns\Status_Column::PENDING  => __( 'Waiting verification', 'jet-form-builder' ),
			Admin\Columns\Status_Column::EXPIRED  => __( 'Verification token expired', 'jet-form-builder' ),
		);
	}
}
