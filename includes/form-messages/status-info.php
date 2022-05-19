<?php


namespace Jet_Form_Builder\Form_Messages;


class Status_Info {

	private $raw = '';
	private $is_dynamic;
	private $is_success;
	private $parsed;

	public function __construct( string $status ) {
		$this->raw = $status;
	}

	/**
	 * @return string
	 */
	public function get_raw_message(): string {
		return $this->raw;
	}

	public function is_dynamic(): bool {
		if ( is_null( $this->is_dynamic ) ) {
			$this->set_dynamic_and_success();
		}

		return $this->is_dynamic;
	}

	public function is_success(): bool {
		if ( is_null( $this->is_success ) ) {
			$this->set_dynamic_and_success();
		}

		return $this->is_success;
	}

	public function get_parsed(): array {
		if ( ! is_array( $this->parsed ) ) {
			$this->parsed = Manager::parse_message( $this->raw );
		}

		return $this->parsed;
	}

	public function get_message(): string {
		$parsed = $this->get_parsed();

		if ( $this->is_dynamic() ) {
			return $parsed[1] ?? $parsed[0];
		}

		return $parsed[0];
	}

	private function set_dynamic_and_success(): Status_Info {
		$dynamic          = Manager::dynamic_types();
		$message          = $this->get_parsed();
		$this->is_dynamic = isset( $dynamic[ $message[0] ] ) && ! empty( $message[1] );

		if ( $this->is_dynamic ) {
			$this->is_success = ( 'success' === ( $dynamic[ $message[0] ]['type'] ?? '' ) );
		} else {
			$this->is_success = in_array( $message[0], array( 'success' ), true );
		}

		return $this;
	}


	public function get_css_class(): string {
		return $this->is_success() ? 'success' : 'error';
	}

}