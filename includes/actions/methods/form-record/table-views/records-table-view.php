<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views;

use Automattic\WooCommerce\Vendor\League\Container\Exception\NotFoundException;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Delete_Form_Record_Endpoint;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Fetch_Filters_Endpoint;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Fetch_Records_Page_Endpoint;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Mark_As_Not_Viewed_Record_Endpoint;
use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Mark_As_Viewed_Record_Endpoint;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Admin\Table_Views\View_Base;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models;

class Records_Table_View extends View_Base {

	use Repository_Item_With_Class;

	public function get_columns_handlers(): array {
		return array(
			'id'                 => array(
				'value' => array( $this, 'get_row_id' ),
				'type'  => 'integer',
			),
			'status'             => array(
				'value' => array( $this, 'get_status' ),
			),
			'form'               => array(
				'value' => array( $this, 'get_form' ),
				'type'  => 'link',
			),
			'referrer'           => array(
				'value' => array( $this, 'get_referrer' ),
				'type'  => 'link',
			),
			'user'               => array(
				'value' => array( $this, 'get_user' ),
			),
			self::COLUMN_CHOOSE  => array(
				'value' => array( $this, 'get_row_id' ),
			),
			self::COLUMN_ACTIONS => array(
				'value' => array( $this, 'get_row_actions' ),
				'type'  => 'rawArray',
			),
			self::COLUMN_CLASSES => array(
				'value' => array( $this, 'get_row_classes' ),
				'type'  => 'rawArray',
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			self::COLUMN_CHOOSE => array(),
			'form'              => array(
				'label' => __( 'Form', 'jet-form-builder' ),
			),
			'referrer'          => array(
				'label' => __( 'Referrer', 'jet-form-builder' ),
			),
			'status'            => array(
				'label' => __( 'Status', 'jet-form-builder' ),
			),
			'user'              => array(
				'label' => __( 'Submitted By', 'jet-form-builder' ),
			),
			'id'                => array(
				'label' => __( 'ID', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array(
			new Models\Record_Model(),
			new Models\Record_Action_Result_Model(),
			new Models\Record_Error_Model(),
			new Models\Record_Field_Model(),
		);
	}

	public function get_raw_list( array $args ): array {
		try {
			return ( new Record_View() )
				->set_table_args( $args )
				->query()
				->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_single_actions(): array {
		return array(
			array(
				'value'    => 'delete',
				'label'    => __( 'Delete', 'jet-form-builder' ),
				'endpoint' => array(
					'method' => Delete_Form_Record_Endpoint::get_methods(),
					'url'    => Delete_Form_Record_Endpoint::rest_url(),
				),
				'type'     => 'danger',
			),
			array(
				'value'    => 'mark_viewed',
				'label'    => __( 'Mark as Viewed', 'jet-form-builder' ),
				'endpoint' => array(
					'method' => Mark_As_Viewed_Record_Endpoint::get_methods(),
					'url'    => Mark_As_Viewed_Record_Endpoint::rest_url(),
				),
			),
			array(
				'value'    => 'mark_not_viewed',
				'label'    => __( 'Mark as not Viewed', 'jet-form-builder' ),
				'endpoint' => array(
					'method' => Mark_As_Not_Viewed_Record_Endpoint::get_methods(),
					'url'    => Mark_As_Not_Viewed_Record_Endpoint::rest_url(),
				),
			),
		);
	}

	/**
	 * @param $record
	 *
	 * @return array
	 */
	public function get_row_actions( $record ): array {
		$actions        = $this->get_single_actions();
		list( $delete ) = $actions;

		list( $mark_view ) = array_values(
			array_filter(
				$actions,
				function ( $action ) {
					return 'mark_viewed' === $action['value'];
				}
			)
		);

		list( $mark_not_view ) = array_values(
			array_filter(
				$actions,
				function ( $action ) {
					return 'mark_not_viewed' === $action['value'];
				}
			)
		);

		$actions = array(
			$delete,
			empty( $record['is_viewed'] ) ? $mark_view : $mark_not_view,
		);

		try {
			$single = ( new Single_Form_Record_Page() )->set_id( $record['id'] );

			$view = array(
				'value' => 'view',
				'label' => __( 'View', 'jet-form-builder' ),
				'href'  => $single->get_url(),
			);
		} catch ( Not_Found_Page_Exception $e ) {
			return $actions;
		}

		$actions[] = $view;

		return $actions;
	}

	public function get_row_classes( $record ): array {
		return array(
			'list-table-item--not-viewed' => empty( $record['is_viewed'] ),
		);
	}

	public function load_data(): array {
		return array(
			'receive_url'      => array(
				'url'     => Fetch_Records_Page_Endpoint::rest_url(),
				'methods' => Fetch_Records_Page_Endpoint::get_methods(),
			),
			'total'            => Record_View_Count::count(),
			'filters_endpoint' => array(
				'methods' => Fetch_Filters_Endpoint::get_methods(),
				'url'     => Fetch_Filters_Endpoint::rest_url(),
			),
			'messages'         => array(
				'filter_form'       => __( 'Select Form', 'jet-form-builder' ),
				'filter_form_title' => __( 'Filter by Form', 'jet-form-builder' ),
				'empty_checked'     => __( 'You have not selected any record.', 'jet-form-builder' ),
				'empty_action'      => __( 'You have not selected an action.', 'jet-form-builder' ),
			),
		);
	}

	public function get_row_id( $record ) {
		return $record['id'] ?? 0;
	}

	public function get_status( $record ) {
		return $record['status'] ?? 'failed';
	}

	public function get_referrer( $record ) {
		$text   = get_the_title( $record['from_content_id'] ?? 0 );
		$params = array(
			'text' => $text ?: '--',
		);

		if ( ! empty( $record['referrer'] ) ) {
			$params['href'] = $record['referrer'];
		}

		return $params;
	}

	public function get_form( $record ): array {
		$form = get_post( $record['form_id'] ?? 0 );

		return array(
			'text' => get_the_title( $form ),
			'href' => get_edit_post_link( $form, false ),
		);
	}

	public function get_user( $record ) {
		$user = get_user_by( 'ID', $record['user_id'] ?? 0 );

		return $user->user_login ?? 'Guest';
	}

}
