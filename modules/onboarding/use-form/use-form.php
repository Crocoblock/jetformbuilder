<?php


namespace JFB_Modules\Onboarding\Use_Form;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Onboarding\Builders\Block_Editor_Builder;
use JFB_Modules\Onboarding\Builders\No_Builder_Handler;
use JFB_Modules\Onboarding\Module;
use JFB_Modules\Onboarding\Use_Form\Rest_Api\Use_Form_Route\Use_Form_Route;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Use_Form implements
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_Handle_It {

	/**
	 * @var Block_Editor_Builder
	 */
	private $block_builder;
	/**
	 * @var No_Builder_Handler
	 */
	private $no_builder;

	public function __construct() {
		$this->block_builder = new Block_Editor_Builder();
		$this->no_builder    = new No_Builder_Handler();
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/use-form/register-assets',
			array( $this, 'register_assets' ),
			0
		);

		add_action(
			'rest_api_init',
			array( $this, 'rest_api_init' )
		);

		$this->get_block_builder()->init_hooks();
		$this->get_no_builder()->init_hooks();
	}

	public function rest_api_init() {
		$route = new Use_Form_Route();
		$route->register();
	}

	public function register_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/index.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			'jet-fb-components'
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/index.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function get_block_builder(): Block_Editor_Builder {
		return $this->block_builder;
	}

	/**
	 * @return No_Builder_Handler
	 */
	public function get_no_builder(): No_Builder_Handler {
		return $this->no_builder;
	}


	public function get_dir( string $path ): string {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding = jet_form_builder()->module( 'onboarding' );

		return $onboarding->get_dir( 'use-form/' . $path );
	}

	public function get_handle( string $unique_string = '' ): string {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding = jet_form_builder()->module( 'onboarding' );

		return $onboarding->get_handle( 'use-form' . $unique_string );
	}

	public function get_url( string $url ): string {
		/** @var Module $onboarding */
		/** @noinspection PhpUnhandledExceptionInspection */
		$onboarding = jet_form_builder()->module( 'onboarding' );

		return $onboarding->get_url( 'use-form/' . $url );
	}
}
