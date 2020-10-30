<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

	abstract public function get_name();

	abstract public function get_id();

	abstract public function do_action();

	/**
	 * Register custom action data
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {}

    /**
     * @return bool
     */
    public static function can_run() {
        return true;
    }

}
