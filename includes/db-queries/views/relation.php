<?php


namespace Jet_Form_Builder\Db_Queries\Views;


class Relation {

	/** @var View_Base */
	public $left;

	/** @var View_Base */
	public $right;

	public $condition = '';
	protected $type = 'INNER';

	public function type( string $type ): Relation {
		$this->type = $type;

		return $this;
	}

	public function left( View_Base $view_base ): Relation {
		if ( ! $this->left ) {
			$this->left = $view_base;
		}

		return $this;
	}

	public function right( View_Base $view_base ): Relation {
		if ( ! $this->right ) {
			$this->right = $view_base;
		}

		return $this;
	}

	public function condition( string $condition ): Relation {
		$this->condition = $condition;

		return $this;
	}

	public function parse_condition( string $condition ): string {
		return str_replace(
			array( '@left', '@right' ),
			array( $this->left->table(), $this->right->table() ),
			$condition
		);
	}

	public function get_result() {
		$left  = "`{$this->left->table()}`.`{$this->left->primary_column()}`";
		$right = "`{$this->right->table()}`.`{$this->right->primary_column()}`";

		return "{$this->type} JOIN {$left} = {$right} {$this->parse_condition( $this->condition )}";
	}

}