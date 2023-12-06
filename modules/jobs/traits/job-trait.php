<?php


namespace JFB_Modules\Jobs\Traits;

use JFB_Modules\Post_Type\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

trait Job_Trait {

	private $hook = '';
	private $args = array();

	public function set_hook( string $hook ) {
		$this->hook = sprintf( 'jet-form-builder/as/%s', $hook );
	}

	public function get_hook(): string {
		return $this->hook;
	}

	public function set_arg( string $name, $value ) {
		$this->args[ $name ] = $value;
	}

	public function get_arg( string $name ) {
		return $this->args[ $name ] ?? false;
	}

	public function set_args( array $args ) {
		$this->args = $args;
	}

	public function get_args(): array {
		return $this->args;
	}

	public function unschedule() {
		if ( empty( $this->get_args() ) ) {
			as_unschedule_all_actions( $this->get_hook() );

			return;
		}

		as_unschedule_action( $this->get_hook(), $this->get_args(), Module::SLUG );
	}

}
