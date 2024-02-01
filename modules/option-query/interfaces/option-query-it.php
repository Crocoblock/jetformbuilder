<?php


namespace JFB_Modules\Option_Query\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Repository\Repository_Item_Instance_Trait;

interface Option_Query_It extends Repository_Item_Instance_Trait {

	public function set_setting( string $name, $value );

	public function get_setting( string $name );

	public function has_setting( string $name ): bool;

	public function set_settings( array $settings );

	public function get_settings(): array;

	public function set_query( string $name, $value );

	public function get_query( string $name );

	public function has_query( string $name ): bool;

	public function delete_query( string $name );

	public function set_query_params( array $params );

	public function get_query_params(): array;

	public function fetch(): \Generator;

	public function is_support_feature( string $feature_name ): bool;

	public function disable_feature( string $feature_name );

	public function enable_feature( string $feature_name );

}
