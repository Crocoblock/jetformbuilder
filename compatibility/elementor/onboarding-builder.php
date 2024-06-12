<?php

namespace JFB_Compatibility\Elementor;

use Elementor\Core\DocumentTypes\Page;
use Elementor\Plugin;
use Elementor\Utils;
use JFB_Modules\Onboarding\Builders\Exceptions\Use_Form_Exception;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Create_Page_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Update_Page_Interface;
use JFB_Modules\Onboarding\Module;

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
		if ( 'elementor' !== $builder->get_builder_type() ) {
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
		$document = Plugin::$instance->documents->create(
			'page',
			array(
				'post_title'  => $create_page->get_title(),
				'post_status' => 'draft',
			)
		);

		if ( is_wp_error( $document ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Use_Form_Exception( $document->get_error_message() );
		}

		$new_elements = $this->get_elements_with_wrapper(
			array(
				array(
					'id'         => Utils::generate_random_string(),
					'elType'     => 'widget',
					'widgetType' => 'jet-form-builder-form',
					'settings'   => array(
						'form_id' => (string) $create_page->get_form_id(),
					),
				),
			)
		);

		$document->save(
			array(
				'elements' => $new_elements,
			)
		);

		$create_page->set_redirect_url( $document->get_edit_url() );
	}

	/**
	 * @param Builder_Update_Page_Interface $update_page
	 *
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function update( Builder_Update_Page_Interface $update_page ) {
		$document = Plugin::$instance->documents->get( $update_page->get_page_id() );

		if ( ! $document ) {
			throw new Use_Form_Exception( 'Undefined page' );
		}

		$elements     = $document->get_elements_raw_data();
		$new_elements = $this->get_elements_with_wrapper(
			array(
				array(
					'id'         => Utils::generate_random_string(),
					'elType'     => 'widget',
					'widgetType' => 'jet-form-builder-form',
					'settings'   => array(
						'form_id' => (string) $update_page->get_form_id(),
					),
				),
			)
		);

		$document->save(
			array(
				'elements' => array_merge( $elements, $new_elements ),
			)
		);

		$update_page->set_redirect_url( $document->get_edit_url() );
	}

	public function block_editor_assets() {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding = jet_form_builder()->module( 'onboarding' );
		/** @var Elementor $elementor */
		/** @noinspection PhpUnhandledExceptionInspection */
		$elementor = jet_form_builder()->compat( 'elementor' );

		$script_asset = require_once $elementor->get_dir( 'assets/build/block.editor.asset.php' );

		array_push(
			$script_asset['dependencies'],
			$onboarding->get_use_form()->get_handle()
		);

		wp_enqueue_script(
			$elementor->get_handle( 'block-editor' ),
			$elementor->get_url( 'assets/build/block.editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	private function get_elements_with_wrapper( array $elements ): array {
		if ( empty( Plugin::$instance->experiments ) ) {
			return $this->get_sections_elements_data( $elements );
		}

		return Plugin::$instance->experiments->is_feature_active( 'container' )
			? $this->get_container_elements_data( $elements )
			: $this->get_sections_elements_data( $elements );
	}

	private function get_container_elements_data( array $internal_elements ): array {
		return array(
			array(
				'id'       => Utils::generate_random_string(),
				'elType'   => 'container',
				'elements' => $internal_elements,
			),
		);
	}

	/**
	 * @param array $internal_elements
	 *
	 * @return array[]
	 */
	private function get_sections_elements_data( array $internal_elements ): array {
		return array(
			array(
				'id'       => Utils::generate_random_string(),
				'elType'   => 'section',
				'elements' => array(
					array(
						'id'       => Utils::generate_random_string(),
						'elType'   => 'column',
						'elements' => $internal_elements,
					),
				),
			),
		);
	}

}
