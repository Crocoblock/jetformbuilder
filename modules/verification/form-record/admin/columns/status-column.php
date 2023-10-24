<?php


namespace JFB_Modules\Verification\Form_Record\Admin\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Status_Column extends Column_Advanced_Base {

	const VERIFIED = 'verified';
	const PENDING  = 'pending';
	const EXPIRED  = 'expired';

	protected $type = self::STATUS;

	const STATUSES_MAP = array(
		self::VERIFIED => self::STATUS_SUCCESS,
		self::PENDING  => self::STATUS_PENDING,
		self::EXPIRED  => self::STATUS_FAILED,
	);

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	protected function get_help_labels(): array {
		return array(
			self::VERIFIED => __( 'Verified', 'jet-form-builder' ),
			self::PENDING  => __( 'Pending', 'jet-form-builder' ),
			self::EXPIRED  => __( 'Expired', 'jet-form-builder' ),
		);
	}

	public function get_value( array $record = array() ) {
		$help_labels = $this->get_help_labels();

		$status = $this->get_token_status( $record );

		return array(
			'type' => self::STATUSES_MAP[ $status ],
			'text' => $help_labels[ $status ] ?? '',
		);
	}

	public function get_token_status( array $record ): string {
		if ( $record['limit_exec'] <= $record['exec_count'] ) {
			return self::VERIFIED;
		}

		$current_time = current_time( 'mysql', true );

		if ( ! is_null( $record['expire_at'] ) && $current_time > $record['expire_at'] ) {
			return self::EXPIRED;
		}

		return self::PENDING;
	}
}
