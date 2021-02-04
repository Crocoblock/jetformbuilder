<?php

namespace Jet_Form_Builder\Form_Patterns;

use Jet_Form_Builder\Plugin;

class Manager {

	public function __construct() {
		add_action( 'current_screen', array( $this, 'maybe_register_patterns' ) );
	}

	private function namespace() {
		return Plugin::instance()->post_type->slug();
	}

	public function maybe_register_patterns() {
		if ( get_current_screen()->post_type !== $this->namespace() ) {
			return;
		}

		$this->register_block_patterns();
	}

	public function register_block_patterns() {
		register_block_pattern_category(
			$this->namespace(),
			array(
				'label' => __( 'JetForms', 'jet-form-builder' )
			)
		);

		$form = new \WP_Query( array(
			'post_type'      => $this->namespace(),
			'posts_per_page' => 1
		) );

		if ( empty( $form->posts ) || empty( $form->posts[0] ) ) {
			return;
		}

		register_block_pattern(
			$this->pattern_name( 'test-form' ),
			array(
				'title'       => __( 'Jet Form X', 'jet-form-builder' ),
				'description' => _x( 'Two horizontal buttons, the left button is filled in, and the right button is outlined.', 'Block pattern description', 'jet-form-builder' ),
				'content'     => $form->posts[0]->post_content,
				'categories'  => array( $this->namespace() )
			)
		);
	}

	private function pattern_name( $name ) {
		return $this->namespace() . '/' . $name;
	}

}