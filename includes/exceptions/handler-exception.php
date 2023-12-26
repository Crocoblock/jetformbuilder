<?php


namespace Jet_Form_Builder\Exceptions;

use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Form_Messages\Status_Info;
use JFB_Modules\Dev;
use JFB_Modules\Logger;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Handler_Exception extends \Exception {

	protected $default_type_message = 'failed';

	protected $additional_data;

	/**
	 * @var Status_Info
	 */
	protected $status;

	public function __construct( $message = '', ...$additional_data ) {
		parent::__construct( $message, 0, null );

		$this->additional_data = $additional_data;

		$this->check_message_length();
		$this->log();
	}

	public function set_code( $code ) {
		$this->code = $code;

		return $this;
	}

	public function dynamic_success(): Handler_Exception {
		$this->message = Manager::dynamic_success( $this->message );

		return $this;
	}

	public function dynamic_error(): Handler_Exception {
		$this->message = Manager::dynamic_error( $this->message );

		return $this;
	}


	public function get_form_status() {
		return $this->message ?: $this->default_type_message;
	}

	public function get_additional() {
		return $this->additional_data;
	}

	public function unset_log() {
		Logger\Module::instance()->unset_last( static::class );
	}

	public function log() {
		if ( ! jet_form_builder()->has_module( 'dev' ) ) {
			return;
		}
		Logger\Module::instance()->push_log(
			static::class,
			array(
				'message'   => $this->getMessage(),
				'file'      => $this->make_pretty_filename( $this->getFile() ),
				'line'      => $this->getLine(),
				'data'      => $this->get_additional(),
				'version'   => jet_form_builder()->get_version(),
				'action_id' => jet_fb_action_handler()->get_position(),
			)
		);
	}

	private function make_pretty_filename( string $file ) {
		$path = explode( 'wp-content\\', $file );

		return $path[1] ?? ( explode( 'wp-content/', $file )[1] ?? $file );
	}

	public function is_success(): bool {
		return $this->get_status()->is_success();
	}

	/**
	 * We need to check the status length for cases when it's too long.
	 * If it's long - we store it in `*_jet_fb_records_errors` table
	 *
	 * @since 3.1.8
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/4994
	 */
	protected function check_message_length() {
		if ( 255 > strlen( $this->message ) ) {
			return;
		}

		$this->message = $this->get_status()->is_success() ? 'success' : 'failed';

		array_unshift( $this->additional_data, $this->get_status()->get_raw_message() );
	}

	/**
	 * @return Status_Info
	 */
	protected function get_status(): Status_Info {
		if ( $this->status ) {
			return $this->status;
		}
		$this->status = new Status_Info( $this->message );

		return $this->status;
	}

}
