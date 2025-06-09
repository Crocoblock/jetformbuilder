<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Term_Action extends Base_Modifier_Action {

	protected $inserted_id = 0;

	/**
	 * Inserted ID getter.
	 *
	 * @return integer
	 */
	public function get_inserted_id(): int {
		return $this->inserted_id;
	}

	public function do_after() {
		if ( ! $this->inserted_id ) {
			return;
		}

		/**
		 * Perform any actions after term inserted/updated
		 */
		do_action(
			'jet-form-builder/action/after-term-' . $this->get_id(),
			jet_fb_action_handler()->get_current_action(),
			jet_fb_action_handler(),
			$this
		);
	}

	public function pre_check(): bool {
		return apply_filters(
			'jet-form-builder/action/insert-term/pre-check',
			true,
			$this->modifier->source_arr,
			jet_fb_action_handler()->get_current_action()
		);
	}

	public function get_inserted(): int {
		return $this->inserted_id;
	}

}
