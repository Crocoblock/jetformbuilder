<?php


namespace JFB_Modules\Jobs\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

interface Job_It {

	public function schedule(): int;

	public function set_hook( string $hook );

	public function get_hook(): string;

	public function set_args( array $args );

	public function get_args(): array;

	public function set_arg( $name, $value );

	public function get_arg( $name );

	public function unschedule();

	public function is_scheduled(): bool;

}
