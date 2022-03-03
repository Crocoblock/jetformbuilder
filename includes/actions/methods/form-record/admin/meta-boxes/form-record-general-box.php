<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;

class Form_Record_General_Box extends Base_Table_Box {

	public function get_title(): string {
		return __( 'Form Fields', 'jet-form-builder' );
	}

	public function get_columns_handlers(): array {
		return array(
			'name'       => array(
				'value' => array( $this, 'get_field_name' ),
			),
			'value'      => array(
				'value' => array( $this, 'get_field_value' ),
			),
			'field_type' => array(
				'value' => array( $this, 'get_field_type' ),
				'type'  => 'rawArray',
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'field_type' => array(
				'label' => __( 'Field', 'jet-form-builder' ),
			),
			'name'       => array(
				'label' => __( 'Name', 'jet-form-builder' ),
			),
			'value'      => array(
				'label' => __( 'Value', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		return Record_Fields_View::get_request( $this->get_id() );
	}

	public function get_field_name( $record ): string {
		return $record['field_name'] ?? '';
	}

	public function get_field_value( $record ): string {
		return $record['field_value'] ?? '';
	}

	public function get_field_type( $record ): array {
		$block = \WP_Block_Type_Registry::get_instance()->get_registered(
			Block_Helper::pref( $record['field_type'] )
		);

		return array(
			'title' => $block->title,
			'icon'  => $block->icon,
		);
	}

}
