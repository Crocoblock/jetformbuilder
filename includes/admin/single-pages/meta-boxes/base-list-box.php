<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Advanced_Record_Prepare_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Endpoint;
use Jet_Form_Builder\Rest_Api\Traits\Rest_Fetch_Endpoint;

abstract class Base_List_Box extends Base_Meta_Box implements
	Rest_Fetch_Endpoint,
	Meta_Box_Options {

	use Table_Advanced_Record_Prepare_Trait;

	final public function get_values(): array {
		return $this->prepare_record( $this->get_list() );
	}

	public function get_raw_list( array $args ): array {
		return array();
	}

	public function get_single(): array {
		return array();
	}

	public function get_rest_url(): string {
		return '';
	}

	public function get_rest_methods(): string {
		return '';
	}

	public function is_editable_table(): bool {
		return false;
	}

	public function is_editable_table_control(): bool {
		return false;
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			( new Meta_Box_Options_Converter( $this ) )->to_array(),
			array(
				'columns'         => $this->get_columns_headings(),
				'single_endpoint' => $this->get_single(),
				'render_type'     => self::TYPE_LIST,
				'receive_url'     => ( new Rest_Endpoint( $this ) )->to_array(),
			)
		);
	}

}
