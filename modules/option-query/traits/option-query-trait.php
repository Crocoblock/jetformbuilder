<?php


namespace JFB_Modules\Option_Query\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Option_Query_Trait {

	/**
	 * Settings which used to display fetched things
	 *
	 * @var array
	 */
	protected $settings = array();

	/**
	 * Settings which used to query things
	 *
	 * @var array
	 */
	protected $query = array();

	protected $features = array(
		'search' => true,
	);

	public function set_setting( string $name, $value ) {
		$this->settings[ $name ] = $value;
	}

	public function get_setting( string $name ) {
		return $this->settings[ $name ] ?? false;
	}

	public function has_setting( string $name ): bool {
		return array_key_exists( $name, $this->settings );
	}

	public function set_settings( array $settings ) {
		$this->settings = $settings;
	}

	public function get_settings(): array {
		return $this->settings;
	}

	public function set_query( string $name, $value ) {
		$this->query[ $name ] = $value;
	}

	public function get_query( string $name ) {
		return $this->query[ $name ] ?? false;
	}

	public function has_query( string $name ): bool {
		return array_key_exists( $name, $this->query );
	}

	public function delete_query( string $name ) {
		unset( $this->query[ $name ] );
	}

	public function set_query_params( array $params ) {
		$this->query = $params;
	}

	public function get_query_params(): array {
		return $this->query;
	}

	public function is_support_feature( string $feature_name ): bool {
		return (bool) ( $this->features[ $feature_name ] ?? false );
	}

	public function disable_feature( string $feature_name ) {
		unset( $this->features[ $feature_name ] );
	}

	public function enable_feature( string $feature_name ) {
		$this->features[ $feature_name ] = true;
	}

}
