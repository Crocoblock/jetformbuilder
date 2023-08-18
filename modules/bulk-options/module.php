<?php


namespace JFB_Modules\Bulk_Options;

use Jet_Form_Builder\Admin\Editor;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Bulk_Options\Interfaces\Source_Resolve_Interface;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'bulk-options';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->rep_install();
	}

	public function on_uninstall() {
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
	}

	public function enqueue_admin_assets() {
		wp_localize_script(
			Editor::EDITOR_PACKAGE_HANDLE,
			'JetFBBulkOptions',
			array(
				'sources' => iterator_to_array( $this->resolve_all() ),
				'list'    => iterator_to_array( $this->resolve_list_sources() ),
			)
		);
	}

	public function rep_instances(): array {
		return array(
			new Base_Source_Resolver(),
			new Days_Source_Resolver(),
			new Months_Source_Resolver(),
			new Countries_Source_Resolver(),
		);
	}

	public function resolve_all(): \Generator {
		/** @var Source_Resolve_Interface $item */
		foreach ( $this->rep_generate_items() as $item ) {
			yield $item->rep_item_id() => $this->resolve_source( $item );
		}
	}

	public function resolve_list_sources(): \Generator {
		/** @var Source_Resolve_Interface $item */
		foreach ( $this->rep_generate_items() as $item ) {
			yield array(
				'label' => $item->get_label(),
				'value' => $item->rep_item_id(),
			);
		}
	}

	public function resolve_source( Source_Resolve_Interface $source ): array {
		return apply_filters(
			"jet-form-builder/bulk-options/{$source->rep_item_id()}",
			$source->resolve()
		);
	}

	public function install( Source_Resolve_Interface $source ): bool {
		return $this->rep_install_item_soft( $source );
	}

	/**
	 * @param string $id
	 *
	 * @return Source_Resolve_Interface
	 * @throws Repository_Exception
	 */
	public function get_source( string $id ): Source_Resolve_Interface {
		return $this->rep_get_item( $id );
	}
}
