<?php


namespace JFB_Modules\Post_Type\Meta;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Meta_Type implements
	Repository_Item_Instance_Trait,
	Arrayable {

	abstract public function get_id(): string;

	abstract public function get_type(): string;

	abstract public function get_default(): string;

	public function is_supported(): bool {
		return true;
	}

	public function query( $form_id ) {
		if ( false === $form_id ) {
			$form_id = (int) jet_fb_live()->form_id;
		}
		return Tools::decode_json(
			get_post_meta(
				$form_id,
				$this->get_id(),
				true
			)
		);
	}

	public function to_array(): array {
		return array(
			'type'          => $this->get_type(),
			'default'       => $this->get_default(),
			'show_in_rest'  => true,
			'single'        => true,
			'auth_callback' => function ( $res, $key, $post_id, $user_id, $cap ) {
				return user_can( $user_id, 'edit_post', $post_id );
			},
		);
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}
