<?php


namespace JFB_Components\Repository;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Repository_Item_With_Class {

	public static function rep_item_id() {
		return static::class;
	}

}
