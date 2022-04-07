<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Advanced_Record_Prepare_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Endpoint;
use Jet_Form_Builder\Rest_Api\Traits\Rest_Fetch_Endpoint;

abstract class Base_Table_Box extends Base_Meta_Box implements Rest_Fetch_Endpoint {

	use Table_Advanced_Record_Prepare_Trait;

	protected $editable_table        = false;
	protected $show_overflow         = false;
	protected $show_overflow_control = false;
	protected $offset                = 0;
	protected $limit                 = 8;
	protected $footer_heading        = true;

	final public function get_values(): array {
		return $this->prepare_list();
	}

	public function get_list(): array {
		return $this->get_raw_list(
			array(
				'offset' => $this->offset,
				'limit'  => $this->limit,
			)
		);
	}

	public function get_total(): int {
		return 0;
	}

	public function get_rest_methods(): string {
		return '';
	}

	public function get_rest_url(): string {
		return '';
	}

	public function get_receive_endpoint(): array {
		return ( new Rest_Endpoint( $this ) )->to_array();
	}

	public function after_prepare_record( $prepared, array $record, $column_name ) {
		$is_editable = $prepared['editable'] ?? false;

		if ( $is_editable ) {
			$this->set_editable_table( true );
		}
	}

	/**
	 * @param bool $editable_table
	 */
	public function set_editable_table( bool $editable_table ) {
		$this->editable_table = $editable_table;
	}

	/**
	 * @return bool
	 */
	public function is_editable_table(): bool {
		return $this->editable_table;
	}

	/**
	 * @return bool
	 */
	public function is_show_overflow(): bool {
		return $this->show_overflow;
	}

	/**
	 * @return bool
	 */
	public function is_show_overflow_control(): bool {
		return $this->show_overflow_control;
	}

	/**
	 * @return bool
	 */
	public function is_footer_heading(): bool {
		return $this->footer_heading;
	}

	/**
	 * @param bool $footer_heading
	 */
	public function set_footer_heading( bool $footer_heading ) {
		$this->footer_heading = $footer_heading;
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'columns'               => $this->get_columns_headings(),
			'render_type'           => self::TYPE_TABLE,
			'is_editable_table'     => $this->is_editable_table(),
			'total'                 => $this->get_total(),
			'receive_url'           => $this->get_receive_endpoint(),
			'show_overflow'         => $this->is_show_overflow(),
			'show_overflow_control' => $this->is_show_overflow_control(),
			'footer_heading'        => $this->is_footer_heading(),
		);
	}

}
