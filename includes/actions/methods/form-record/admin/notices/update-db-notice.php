<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Notices;

use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button as Button;
use Jet_Form_Builder\Admin\Notices\Base_Notice;
use Jet_Form_Builder\Migrations\Rest_Api\Install_Migrations_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Update_Db_Notice extends Base_Notice {

	/**
	 * @return string
	 */
	public function get_id(): string {
		return 'update-db';
	}

	public function get_type(): string {
		return self::TYPE_ERROR;
	}

	public function is_hide_after_close(): bool {
		return false;
	}

	/**
	 * @return string
	 */
	public function get_message(): string {
		return __( 'We need to update your database to the latest version.', 'jet-form-builder' );
	}

	public function get_buttons(): array {
		return array(
			( new Button( 'update' ) )
				->set_label( __( 'Update', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_rest( new Install_Migrations_Endpoint() ),
		);
	}
}
