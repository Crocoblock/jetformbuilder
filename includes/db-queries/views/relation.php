<?php


namespace Jet_Form_Builder\Db_Queries\Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Relation {

	/** @var object */
	public $local;

	/** @var object */
	public $foreign;

	public $condition = '';
	protected $type = 'INNER';

	public function type( string $type ): Relation {
		$this->type = $type;

		return $this;
	}

	public function local( View_Base $view_base, string $foreign_key ): Relation {
		if ( ! $this->local ) {
			$this->local = (object) array(
				'table' => $view_base->table(),
				'key'   => $foreign_key
			);
		}

		return $this;
	}

	public function foreign( View_Base $view_base, string $primary_key = 'id' ): Relation {
		if ( ! $this->foreign ) {
			$this->foreign = (object) array(
				'table' => $view_base->table(),
				'key'   => $primary_key
			);
		}

		return $this;
	}

	public function condition( string $condition ): Relation {
		$this->condition = $condition;

		return $this;
	}

	public function parse_condition( string $condition ): string {
		return str_replace(
			array( '@local', '@foreign' ),
			array( $this->local->table, $this->foreign->table ),
			$condition
		);
	}

	public function get_result() {
		$foreign = $this->foreign->table;

		$left  = "`{$this->local->table}`.`{$this->local->key}`";
		$right = "`{$foreign}`.`{$this->foreign->key}`";

		return "{$this->type} JOIN `{$foreign}` ON {$left} = {$right} {$this->parse_condition( $this->condition )}";
	}

}