<?php


namespace Jet_Form_Builder\Migrations\Types\Jet_Engine;


use Jet_Form_Builder\Classes\Factory;

class Settings_Manager {

	const TRANSFORMERS_NAMESPACE = 'Jet_Form_Builder\\Migrations\\Types\\Jet_Engine\\';

	private $form_meta;

	public function __construct( $form_meta = array() ) {
		$this->form_meta = $this->save_settings( $form_meta );
	}

	public function get_all() {
		return $this->form_meta;
	}

	public function parse_settings() {
		foreach ( $this->form_meta as $key => $meta_data ) {
			$this->form_meta[ $key ] = $this->parse_setting( $meta_data );
		}

		return $this;
	}

	private function parse_setting( $meta_data ) {
		if ( ! is_array( $meta_data ) ) {
			return $meta_data;
		}

		if ( empty( $meta_data['transformer'] ) ) {
			return $meta_data;
		}

		$factory = new Factory( self::TRANSFORMERS_NAMESPACE );
		$factory->suffix( '-migrate' );


		return $factory->create_one(
			$meta_data['transformer'],
			$meta_data['value']
		)->value();
	}

	private function save_settings( $form_meta ) {
		$preset   = maybe_unserialize( $form_meta['_preset'][0] );
		$messages = json_encode( maybe_unserialize( $form_meta['_messages'][0] ) );
		$captcha  = json_encode( maybe_unserialize( $form_meta['_captcha'][0] ) );
		$actions  = json_decode( wp_unslash( $form_meta['_notifications_data'][0] ), true );

		return array(
			'_jf_preset'    => array(
				'value'       => $preset,
				'transformer' => 'preset'
			),
			'_jf_actions'   => array(
				'value'       => $actions,
				'transformer' => 'actions'
			),
			'_jf_messages'  => $messages,
			'_jf_recaptcha' => $captcha,
		);

	}

}