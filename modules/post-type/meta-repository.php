<?php


namespace JFB_Modules\Post_Type;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Post_Type\Meta;
use JFB_Components\Repository\Repository_Pattern_Trait;

class Meta_Repository {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return array(
			new Meta\Args_Meta(),
			new Meta\Messages_Meta(),
			new Meta\Preset_Meta(),
			new Meta\Recaptcha_Meta(),
			new Meta\Actions_Meta(),
			new Meta\Gateways_Meta(),
			new Meta\Validation_Meta(),
		);
	}

	public function after_register_post_type() {
		/** @var Meta\Base_Meta_Type $item */
		foreach ( $this->rep_generate_items() as $item ) {
			register_post_meta( Module::SLUG, $item->get_id(), $item->to_array() );
		}
	}

	/**
	 * Returns form meta arguments:
	 * fields_layout, submit_type, captcha and required_mark
	 * in assoc array
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_args( $form_id = false ): array {
		return $this->get_meta( Meta\Args_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form messages
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_messages( $form_id = false ) {
		return $this->get_meta( Meta\Messages_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_actions( $form_id = false ) {
		return $this->get_meta( Meta\Actions_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form actions
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_preset( $form_id = false ) {
		return $this->get_meta( Meta\Preset_Meta::class )->query( $form_id );
	}

	/**
	 * Returns captcha settings
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_captcha( $form_id = false ) {
		return $this->get_meta( Meta\Recaptcha_Meta::class )->query( $form_id );
	}

	/**
	 * Returns form gateways
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 */
	public function get_gateways( $form_id = false ): array {
		try {
			return $this->rep_get_item( Meta\Gateways_Meta::class )->query( $form_id );
		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}

	public function get_validation( $form_id = false ) {
		return $this->get_meta( Meta\Validation_Meta::class )->query( $form_id );
	}

	/**
	 * @param string $name
	 *
	 * @return false|Meta\Base_Meta_Type
	 */
	public function get_meta( string $name ) {
		try {
			return $this->rep_get_item( $name );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	/**
	 * @param $meta_key
	 * @param int|false $form_id
	 *
	 * @return array|mixed
	 * @deprecated since 3.0.0
	 */
	public function get_form_meta( $meta_key, $form_id = false ) {
		if ( false === $form_id ) {
			$form_id = jet_fb_live()->form_id;
		}

		return Tools::decode_json(
			get_post_meta(
				$form_id,
				$meta_key,
				true
			)
		);
	}

	/**
	 * @param $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( $item->is_supported() ) {
			return;
		}
		$this->_rep_abort_this();
	}

	/**
	 * Returns captcha settings
	 *
	 * @param int|false $form_id
	 *
	 * @return array
	 * @deprecated 3.1.0 Use ::get_captcha() instead
	 */
	public function get_recaptcha( $form_id = false ) {
		_deprecated_function( __METHOD__, '3.1.0', __CLASS__ . '::get_captcha()' );

		return $this->get_captcha( $form_id );
	}

}
