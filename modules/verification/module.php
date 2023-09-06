<?php


namespace JFB_Modules\Verification;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Post_Type\Module as PostTypeModule;
use JFB_Modules\Verification\Post_Type\Meta\Verification_Meta;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_After_Install_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;

	public function rep_item_id() {
		return 'verification';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		/** @noinspection PhpUnhandledExceptionInspection */
		/** @var PostTypeModule $post_type */
		$post_type = jet_form_builder()->module( PostTypeModule::class );

		$post_type->get_meta()->install( new Verification_Meta() );
	}

	public function on_uninstall() {
		/** @noinspection PhpUnhandledExceptionInspection */
		/** @var PostTypeModule $post_type */
		$post_type = jet_form_builder()->module( PostTypeModule::class );

		$post_type->get_meta()->uninstall( Verification_Meta::class );
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
	}

	public function enqueue_editor_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}
}
