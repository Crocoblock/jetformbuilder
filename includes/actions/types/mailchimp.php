<?php // phpcs:ignore Internal.Exception

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Mailchimp {

	public function editor_labels() {
		return array(
			'list_id'         => __( 'Audience:', 'jet-form-builder' ),
			'update_list_ids' => __( 'Update Audience List', 'jet-form-builder' ),
			'groups_ids'      => __( 'Groups:', 'jet-form-builder' ),
			'tags'            => __( 'Tags:', 'jet-form-builder' ),
			'double_opt_in'   => __( 'Double Opt-In:', 'jet-form-builder' ),
			'fields_map'      => __( 'Fields Map:', 'jet-form-builder' ),
		);
	}


}
