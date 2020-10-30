<?php
namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Call_Hook extends Base {

	public function get_name() {
		return __( 'Call Hook', 'jet-form-builder' );
	}

	public function get_id() {
		return 'call_hook';
	}

	public function do_action()
    {
        // TODO: Implement do_action() method.
    }

    /**
     * @return bool
     */
    public static function can_run() {
        return function_exists( 'jet_engine' );
    }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormCallHookData', array(
		    'labels' => array(
		        'hook_name' => __( 'Hook Name:', 'jet-form-builder' )
            ),
        ) );
	}


}


