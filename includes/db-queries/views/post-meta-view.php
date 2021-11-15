<?php


namespace Jet_Form_Builder\Db_Queries\Views;


abstract class Post_Meta_View extends View_Base {

	public function table(): string {
		global $wpdb;

		return $wpdb->postmeta;
	}

	public function select_columns(): array {
		return array(
			'meta_id',
			'post_id',
			'meta_key',
			'meta_value',
		);
	}

}