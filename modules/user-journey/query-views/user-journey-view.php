<?php


namespace JFB_Modules\User_Journey\Query_Views;

use JFB_Modules\User_Journey\Models\User_Journey_Model;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_View extends View_Base {

	public function table(): string {
		return User_Journey_Model::table();
	}

	public function select_columns(): array {
		return User_Journey_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new User_Journey_Model(),
		);
	}

	public static function get_request( $record_id ): array {
		try {
			return static::find(
				array(
					'record_id' => (int) $record_id,
				)
			)->query()->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$this->set_record_filter();

		return $this;
	}

	protected function set_record_filter(): User_Journey_View {
		$record_id = absint( $this->filters['record_id'] ?? 0 );

		if ( empty( $record_id ) ) {
			return $this;
		}

		return $this->add_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_EQUAL,
					'values' => array( 'record_id', $record_id ),
				),
			)
		);
	}

	public function query(): Query_Builder {
		$this->prepare_dependencies();

		return ( new Query_Builder() )->set_view( $this );
	}
}
