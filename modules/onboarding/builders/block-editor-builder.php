<?php

namespace JFB_Modules\Onboarding\Builders;

use JFB_Modules\Onboarding\Builders\Exceptions\Use_Form_Exception;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Create_Page_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Update_Page_Interface;
use JFB_Modules\Onboarding\Module;

class Block_Editor_Builder {

	public function init_hooks() {
		add_action( 'jet-form-builder/use-form', array( $this, 'handle_use' ) );
		add_action(
			'jet-form-builder/use-form/register-assets',
			array( $this, 'enqueue_builder_assets' ),
			15
		);
	}

	/**
	 * @param Builder_Create_Page_Interface|Builder_Update_Page_Interface $builder
	 *
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function handle_use( Builder_Interface $builder ) {
		if ( 'blocks' !== $builder->get_builder_type() ) {
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
				'post_title'   => $create_page->get_title(),
				'post_type'    => 'page',
				'post_status'  => 'draft',
				'post_content' => sprintf(
					'<!-- wp:jet-forms/form-block {"form_id":%d} /-->',
					$create_page->get_form_id()
				),
			),
			true
		);

		if ( is_wp_error( $post_id ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Use_Form_Exception( $post_id->get_error_message() );
		}

		$create_page->set_redirect_url( get_edit_post_link( $post_id, false ) );
	}

	/**
	 * @param Builder_Update_Page_Interface $update_page
	 *
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function update( Builder_Update_Page_Interface $update_page ) {
		$page = get_post( $update_page->get_page_id() );

		if ( ! ( $page instanceof \WP_Post ) ) {
			throw new Use_Form_Exception( 'Undefined page' );
		}

		$post_id = wp_update_post(
			array(
				'ID'           => $update_page->get_page_id(),
				'post_content' => $page->post_content . sprintf(
					'<!-- wp:jet-forms/form-block {"form_id":%d} /-->',
					$update_page->get_form_id()
				),
			),
			true
		);

		if ( is_wp_error( $post_id ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Use_Form_Exception( $post_id->get_error_message() );
		}

		$update_page->set_redirect_url(
			get_edit_post_link( $update_page->get_page_id(), false )
		);
	}

	public function enqueue_builder_assets() {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding   = jet_form_builder()->module( 'onboarding' );
		$script_asset = require_once $onboarding->get_dir( 'assets/build/block.builder.asset.php' );

		array_push(
			$script_asset['dependencies'],
			$onboarding->get_use_form()->get_handle()
		);

		wp_enqueue_script(
			$onboarding->get_handle( 'block-builder' ),
			$onboarding->get_url( 'assets/build/block.builder.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}
}
