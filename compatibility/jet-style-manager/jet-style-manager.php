<?php


namespace JFB_Compatibility\Jet_Style_Manager;

use JET_SM\Gutenberg\Controls_Manager;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Form;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Interfaces\Style_Block_It;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Style_Manager implements Base_Module_It, Base_Module_After_Install_It, Repository_Pattern_Interface {

	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'jet-style-manager';
	}

	public function on_install() {
		$this->rep_install();
	}

	public function on_uninstall() {
		$this->rep_clear();
	}

	public function condition(): bool {
		return (
			class_exists( 'JET_SM\Gutenberg\Controls_Manager' )
			&& class_exists( 'JET_SM\Gutenberg\Block_Manager' )
		);
	}

	public function init_hooks() {
		add_action( 'init', array( $this, 'register_block_styles' ), 9 );
	}

	public function remove_hooks() {
		add_action( 'init', array( $this, 'register_block_styles' ), 9 );
	}


	public function rep_instances(): array {
		return array(
			new Form(),
		);
	}

	public function register_block_styles() {
		/** @var Style_Block_It $block */
		foreach ( $this->rep_generate_items() as $block ) {
			$block->set_namespace( '.jet-form-builder' );
			$block->set_manager( new Controls_Manager( $block->rep_item_id() ) );
			$block->process_controls();
		}
	}

	public function create_margin( string $selector, $extra_options = array() ): array {
		$margin = array(
			'type'         => 'dimensions',
			'label'        => __( 'Margin', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'separator'    => 'after',
			'css_selector' => array(
				$selector => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		);

		// probably an id of the control
		if ( is_string( $extra_options ) ) {
			$margin['id'] = $extra_options;
		}
		if ( is_array( $extra_options ) && $extra_options ) {
			$margin = array_merge( $margin, $extra_options );
		}

		return $margin;
	}

	public function create_padding( string $selector, $extra_options = array() ): array {
		$padding = array(
			'type'         => 'dimensions',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%', 'em' ),
			'separator'    => 'after',
			'css_selector' => array(
				$selector => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		);

		// probably an id of the control
		if ( is_string( $extra_options ) ) {
			$padding['id'] = $extra_options;
		}
		if ( is_array( $extra_options ) && $extra_options ) {
			$padding = array_merge( $padding, $extra_options );
		}

		return $padding;
	}

	public function install( Style_Block_It $block ) {
		$this->rep_install_item_soft( $block );
	}
}
