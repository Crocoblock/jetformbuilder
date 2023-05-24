<?php


namespace JFB_Modules\Form_Record\Action_Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Form_Record;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;
use JFB_Modules\Security\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Save_Record extends Base {

	const ID = 'save_record';

	/**
	 * @return string
	 */
	public function get_id() {
		return self::ID;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return __( 'Save Form Record', 'jet-form-builder' );
	}

	public function get_required_events(): array {
		return array(
			Default_Required_Event::class,
		);
	}

	public function supported_events(): array {
		return array(
			Default_Required_Event::class,
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Sql_Exception
	 * @throws Repository_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$save_spam = $this->settings['save_spam'] ?? false;

		/** @var Module $security */
		$security = jet_form_builder()->module( Module::class );

		if ( ! $save_spam && $security->has_spam() ) {
			return;
		}

		$record_id = ( new Form_Record\Controller() )
			->set_settings(
				array(
					'save_errors'    => Manager::instance()->active(),
					'save_user_data' => $this->settings['save_user_data'] ?? false,
				)
			)
			->save()
			->get_record_id();

		$this->add_context_once(
			array( 'id' => $record_id )
		);
	}

	public function editor_labels() {
		return array(
			'save_user_data' => __( 'Store the IP address and other request headers', 'jet-form-builder' ),
			'save_spam'      => __(
				'Keep form records that have not passed spam or captcha protection.',
				'jet-form-builder'
			),
		);
	}

}
