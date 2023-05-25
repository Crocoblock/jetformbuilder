<?php


namespace JFB_Modules\Form_Record\Query_Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Modules\Form_Record\Models;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_View extends View_Base {

	/**
	 * @since 3.1.0
	 */
	const AVAILABLE_STATUSES = array(
		'success',
		'failed',
	);

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function table(): string {
		return Models\Record_Model::table();
	}

	public function select_columns(): array {
		return Models\Record_Model::schema_columns();
	}

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$this->set_form_filter();
		$this->set_date_from_filter();
		$this->set_date_to_filter();
		$this->set_status_filter();

		return $this;
	}

	protected function set_form_filter() {
		$form = absint( $this->filters['form'] ?? '' );

		if ( empty( $form ) ) {
			return;
		}

		$this->add_conditions(
			array(
				array(
					'type'   => 'in',
					'values' => array( 'form_id', array( $form ) ),
				),
			)
		);
	}

	protected function set_date_from_filter() {
		$date_from = $this->filters['date_from'] ?? '';
		$time      = strtotime( $date_from );

		if ( false === $time ) {
			return;
		}

		$this->add_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_MORE_STATIC,
					'values' => array( 'created_at', $date_from ),
				),
			)
		);
	}

	protected function set_date_to_filter() {
		$date_to = $this->filters['date_to'] ?? '';
		$time    = strtotime( $date_to );

		if ( false === $time ) {
			return;
		}

		$this->add_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_LESS_STATIC,
					'values' => array( 'created_at', $date_to ),
				),
			)
		);
	}

	protected function set_status_filter() {
		$status = $this->filters['status'] ?? '';

		if ( ! in_array( $status, self::AVAILABLE_STATUSES, true ) ) {
			return;
		}

		if ( 'success' !== $status ) {
			$this->add_conditions(
				array(
					array(
						'type'   => Query_Conditions_Builder::TYPE_NOT_EQUAL,
						'values' => array( 'status', 'success' ),
					),
					array(
						'type'   => Query_Conditions_Builder::TYPE_NOT_LIKE_END,
						'values' => array( 'status', 'dsuccess' ),
					),
				)
			);

			return;
		}

		$conditions = new Query_Conditions_Builder();
		$conditions->set_view( $this );
		$conditions->set_relation_or();
		$conditions->set_condition(
			array(
				'type'   => Query_Conditions_Builder::TYPE_EQUAL,
				'values' => array( 'status', 'success' ),
			)
		);
		$conditions->set_condition(
			array(
				'type'   => Query_Conditions_Builder::TYPE_LIKE_END,
				'values' => array( 'status', 'dsuccess' ),
			)
		);

		$this->add_conditions( array( $conditions ) );
	}

	public function query(): Query_Builder {
		$this->prepare_dependencies();

		return ( new Query_Builder() )->set_view( $this );
	}
}
