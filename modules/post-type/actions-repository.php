<?php


namespace JFB_Modules\Post_Type;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Post_Type\Actions;
use JFB_Components\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Actions_Repository {

	use Repository_Pattern_Trait;

	public function install( Actions\Base_Form_Action $action ) {
		$this->rep_install_item_soft( $action );
	}

	public function rep_instances(): array {
		return array(
			new Actions\Export_Action(),
			new Actions\Import_Action(),
			new Actions\Duplicate_Action(),
		);
	}

	public function base_add_action_links( $actions, $post ) {
		/** @var Actions\Base_Form_Action $type */
		foreach ( $this->rep_generate_items() as $type ) {
			if ( $type->display_action_link() ) {
				$actions = $type->register_action( $actions, $post );
			}
		}

		return $actions;
	}

	/**
	 * @param string $slug
	 *
	 * @return false|Actions\Base_Form_Action
	 */
	public function get( string $slug ) {
		try {
			return $this->rep_get_item( $slug );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

}
