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

	public function get_patterns() {
		return apply_filters(
			'jet-form-builder/form-patterns',
			require_once Plugin::instance()->plugin_dir( 'includes/form-patterns/source-patterns.php' )
		);
	}

	public function register_block_patterns() {
		register_block_pattern_category(
			$this->namespace(),
			array(
				'label' => __( 'JetForms', 'jet-form-builder' ),
			)
		);

		foreach ( $this->get_patterns() as $pattern_name => $pattern ) {
			$pattern['categories'] = array( $this->namespace() );

			register_block_pattern( $this->pattern_name( $pattern_name ), $pattern );
		}
	}

	private function pattern_name( $name ) {
		return $this->namespace() . '/' . $name;
	}

}
