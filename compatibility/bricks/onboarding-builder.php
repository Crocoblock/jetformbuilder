<?php

namespace JFB_Compatibility\Bricks;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Onboarding\Builders\Exceptions\Use_Form_Exception;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Create_Page_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Update_Page_Interface;
use JFB_Modules\Onboarding\Module;
use JFB_Modules\Security\Csrf\Csrf_Tools;

class Onboarding_Builder {

	public function init_hooks() {
		add_action( 'jet-form-builder/use-form', array( $this, 'handle_use' ) );
		add_action(
			'jet-form-builder/use-form/register-assets',
			array( $this, 'block_editor_assets' )
		);
	}

	/**
	 * @param Builder_Create_Page_Interface|Builder_Update_Page_Interface $builder
	 *
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function handle_use( Builder_Interface $builder ) {
		if ( 'bricks' !== $builder->get_builder_type() ) {
			return;
		}

		if ( $builder instanceof Builder_Update_Page_Interface ) {
			$this->update( $builder );

			return;
		}

		$this->create( $builder );
	}

	/**
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function create( Builder_Create_Page_Interface $create_page ) {
		$post_id = wp_insert_post(
			array(
				'post_title'  => $create_page->get_title(),
				'post_type'   => 'page',
				'post_status' => 'draft',
			),
			true
		);

		if ( is_wp_error( $post_id ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Use_Form_Exception( $post_id->get_error_message() );
		}

		update_post_meta(
			$post_id,
			BRICKS_DB_PAGE_CONTENT,
			array(
				array(
					'id'       => Csrf_Tools::generate( 4 ),
					'name'     => 'jet-form-builder-form',
					'parent'   => 0,
					'settings' => array(
						'form_id'     => (string) $create_page->get_form_id(),
						'submit_type' => 'ajax',
					),
				),
			)
		);

		// Set _bricks_editor_mode to 'bricks'
		update_post_meta( $post_id, BRICKS_DB_EDITOR_MODE, 'bricks' );

		$create_page->set_redirect_url( \Bricks\Helpers::get_builder_edit_link( $post_id ) );
	}

	/**
	 * @param Builder_Update_Page_Interface $update_page
	 *
	 * @return void
	 */
	public function update( Builder_Update_Page_Interface $update_page ) {
		$elements = get_post_meta( $update_page->get_page_id(), BRICKS_DB_PAGE_CONTENT, true );

		update_post_meta(
			$update_page->get_page_id(),
			BRICKS_DB_PAGE_CONTENT,
			array_merge(
				$elements,
				array(
					array(
						'id'       => Csrf_Tools::generate( 4 ),
						'name'     => 'jet-form-builder-form',
						'parent'   => 0,
						'settings' => array(
							'form_id'     => (string) $update_page->get_form_id(),
							'submit_type' => 'ajax',
						),
					),
				)
			)
		);

		$update_page->set_redirect_url(
			\Bricks\Helpers::get_builder_edit_link( $update_page->get_page_id() )
		);
	}

	public function block_editor_assets() {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding = jet_form_builder()->module( 'onboarding' );
		/** @var Bricks $bricks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$bricks = jet_form_builder()->compat( 'bricks' );

		$script_asset = require_once $bricks->get_dir( 'assets/build/block.editor.asset.php' );

		array_push(
			$script_asset['dependencies'],
			$onboarding->get_use_form()->get_handle()
		);

		wp_enqueue_script(
			$bricks->get_handle( 'block-editor' ),
			$bricks->get_url( 'assets/build/block.editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

}
