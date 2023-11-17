<?php


namespace JFB_Modules\Verification\Form_Record\Admin\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Expire_At_Column extends Column_Advanced_Base {

	protected $status = Status_Column::PENDING;

	public function get_label(): string {
		switch ( $this->status ) {
			case Status_Column::VERIFIED:
				return __( 'Verified at', 'jet-form-builder' );
			case Status_Column::EXPIRED:
				return __( 'Expired at', 'jet-form-builder' );
			default:
				return __( 'Expires at', 'jet-form-builder' );
		}
	}

	public function get_value( array $record = array() ) {
		$this->status = ( new Status_Column() )->get_token_status( $record );

		$time = strtotime(
			Status_Column::VERIFIED === $this->status
				? $record['updated_at']
				: $record['expire_at']
		);

		if ( ! $time && is_null( $record['expire_at'] ) ) {
			return __( 'Never', 'jet-form-builder' );
		}

		return wp_date( Base_Db_Model::DATETIME_FORMAT, $time );
	}

}
