<?php


namespace Jet_Form_Builder\Actions\Events;


use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;

abstract class Base_Event implements Repository_Static_Item_It, Arrayable {

	abstract public static function get_slug(): string;

	public function get_label(): string {
		return static::get_slug();
	}

	public static function rep_item_id() {
		return static::get_slug();
	}

	protected function get_unsupported_actions(): array {
		return array();
	}

	public function validate_actions() {
		foreach ( $this->get_unsupported_actions() as $action ) {
			jet_fb_action_handler()->unregister_action( $action );
		}
		$actions = jet_fb_action_handler()->get_all();

		foreach ( $actions as $action ) {

		}
	}

	public function to_array(): array {
		return array(
			'value'       => static::get_slug(),
			'label'       => $this->get_label(),
			'unsupported' => $this->get_unsupported_actions(),
		);
	}

}