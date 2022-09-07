<?php


namespace Jet_Form_Builder\Classes\Filters;


class File_Url_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'file_url_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		return wp_get_attachment_url( $item );
	}

}